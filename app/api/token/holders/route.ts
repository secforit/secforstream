import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';
import type { HolderAccount, HolderData } from '@/app/types/token';
import { rateLimit } from '@/app/lib/rate-limit';

const TOKEN_MINT = '7aS4v65fEGvQseGxmrZ8iGNpHW7yd49SMmLm2cLApump';
const CACHE_TTL = 60_000;

let cache: { data: HolderData | null; timestamp: number } = { data: null, timestamp: 0 };

function getConnection(): Connection {
  const rpcUrl = process.env.HELIUS_RPC_URL || 'https://api.mainnet-beta.solana.com';
  return new Connection(rpcUrl);
}

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

    const topHolders: HolderAccount[] = largestResult.value.map((account) => ({
      address: account.address.toBase58(),
      amount: account.amount,
      uiAmount: Number(account.uiAmount ?? 0),
      percentage:
        totalSupplyUi > 0
          ? Math.round((Number(account.uiAmount ?? 0) / totalSupplyUi) * 10000) / 100
          : 0,
    }));

    const top5Pct = topHolders.slice(0, 5).reduce((sum, h) => sum + h.percentage, 0);
    const top10Pct = topHolders.slice(0, 10).reduce((sum, h) => sum + h.percentage, 0);
    const top20Pct = topHolders.reduce((sum, h) => sum + h.percentage, 0);

    const holderData: HolderData = {
      totalSupply: {
        amount: supplyResult.value.amount,
        uiAmount: totalSupplyUi,
        decimals: supplyResult.value.decimals,
      },
      topHolders,
      concentration: {
        top5Percentage: Math.round(top5Pct * 100) / 100,
        top10Percentage: Math.round(top10Pct * 100) / 100,
        top20Percentage: Math.round(top20Pct * 100) / 100,
      },
      updatedAt: now,
    };

    cache = { data: holderData, timestamp: now };
    return NextResponse.json(holderData);
  } catch (error) {
    console.error('Failed to fetch holder data:', error);
    if (cache.data) {
      return NextResponse.json({ ...cache.data, stale: true });
    }
    return NextResponse.json({ error: 'Failed to fetch holder data' }, { status: 502 });
  }
}
