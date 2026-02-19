import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';
import { rateLimit } from '@/app/lib/rate-limit';
import type { HolderTier, BubbleNode, BubbleMapData } from '@/app/types/bubble-map';

// ─── Config ───────────────────────────────────────────────────────────────────

const TOKEN_MINT   = '7aS4v65fEGvQseGxmrZ8iGNpHW7yd49SMmLm2cLApump';
const CACHE_TTL    = 60_000; // 60s

/**
 * Known special wallets for $SECS / pump.fun ecosystem.
 * Add your deployer wallet here for accurate "Dev" labelling.
 */
const KNOWN_WALLETS: Record<string, { tier: HolderTier; label: string }> = {
  // Pump.fun bonding curve program / AMM vaults will appear here after migration
  TSLvdd1pWpHVjahSpsvCXUbgwdaKzoDjgd8sskW5EM9:  { tier: 'bonding_curve', label: 'Bonding Curve' },
  // Add your deployer/dev wallet:
  // 'YourDeployerWalletAddressHere': { tier: 'dev', label: 'Dev Wallet' },
};

// ─── Cache ────────────────────────────────────────────────────────────────────

let cache: { data: BubbleMapData | null; timestamp: number } = { data: null, timestamp: 0 };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getConnection(): Connection {
  const rpcUrl = process.env.HELIUS_RPC_URL || 'https://api.mainnet-beta.solana.com';
  return new Connection(rpcUrl);
}

function classifyTier(address: string, percentage: number): HolderTier {
  if (KNOWN_WALLETS[address]) return KNOWN_WALLETS[address].tier;
  if (percentage >= 5)   return 'whale';
  if (percentage >= 1)   return 'dolphin';
  if (percentage >= 0.1) return 'fish';
  return 'dust';
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const limited = rateLimit(request, { windowMs: 60_000, maxRequests: 20 });
  if (limited) return limited;

  const now = Date.now();
  if (cache.data && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const connection = getConnection();
    const mintPubkey = new PublicKey(TOKEN_MINT);

    const [supplyResult, largestResult] = await Promise.all([
      connection.getTokenSupply(mintPubkey),
      connection.getTokenLargestAccounts(mintPubkey),
    ]);

    const totalSupplyUi = Number(supplyResult.value.uiAmountString ?? '0');

    // Filter out dust-level holders to keep the map readable (max 40 bubbles)
    const nodes: BubbleNode[] = largestResult.value
      .map((account) => {
        const address    = account.address.toBase58();
        const uiAmount   = Number(account.uiAmount ?? 0);
        const percentage = totalSupplyUi > 0
          ? Math.round((uiAmount / totalSupplyUi) * 10000) / 100
          : 0;

        const known = KNOWN_WALLETS[address];
        const tier  = classifyTier(address, percentage);

        return {
          address,
          uiAmount,
          percentage,
          tier,
          label: known?.label,
        } satisfies BubbleNode;
      })
      .filter((n) => n.percentage >= 0.05) // skip micro-dust
      .slice(0, 40);

    const bubbleMapData: BubbleMapData = {
      nodes,
      totalSupply: totalSupplyUi,
      updatedAt: now,
    };

    cache = { data: bubbleMapData, timestamp: now };
    return NextResponse.json(bubbleMapData);
  } catch (error) {
    console.error('[bubble-map] Failed to fetch holder data:', error);
    if (cache.data) {
      return NextResponse.json({ ...cache.data, stale: true });
    }
    return NextResponse.json(
      { error: 'Failed to fetch bubble map data' },
      { status: 502 }
    );
  }
}