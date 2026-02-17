import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { DexScreenerPair, TokenData } from '@/app/types/token';
import { rateLimit } from '@/app/lib/rate-limit';

const TOKEN_ADDRESS = '7aS4v65fEGvQseGxmrZ8iGNpHW7yd49SMmLm2cLApump';
const DEXSCREENER_URL = `https://api.dexscreener.com/token-pairs/v1/solana/${TOKEN_ADDRESS}`;
const CACHE_TTL = 15_000;

let cache: { data: TokenData | null; timestamp: number } = { data: null, timestamp: 0 };

export async function GET(request: NextRequest) {
  const limited = rateLimit(request, { windowMs: 60_000, maxRequests: 30 });
  if (limited) return limited;
  const now = Date.now();
  if (cache.data && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const res = await fetch(DEXSCREENER_URL);
    if (!res.ok) throw new Error(`DexScreener returned ${res.status}`);

    const pairs: DexScreenerPair[] = await res.json();

    if (!pairs || pairs.length === 0) {
      if (cache.data) return NextResponse.json({ ...cache.data, stale: true });
      return NextResponse.json({ error: 'No pairs found for token' }, { status: 404 });
    }

    const pair = pairs.sort(
      (a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0)
    )[0];

    const tokenData: TokenData = {
      price: {
        usd: pair.priceUsd,
        native: pair.priceNative,
        change24h: pair.priceChange?.h24 ?? 0,
        change1h: pair.priceChange?.h1 ?? 0,
        change5m: pair.priceChange?.m5 ?? 0,
      },
      market: {
        marketCap: pair.marketCap ?? 0,
        fdv: pair.fdv ?? 0,
        liquidity: pair.liquidity?.usd ?? 0,
        volume24h: pair.volume?.h24 ?? 0,
        volume1h: pair.volume?.h1 ?? 0,
      },
      transactions: {
        buys24h: pair.txns?.h24?.buys ?? 0,
        sells24h: pair.txns?.h24?.sells ?? 0,
        buys1h: pair.txns?.h1?.buys ?? 0,
        sells1h: pair.txns?.h1?.sells ?? 0,
        buysSells5m: pair.txns?.m5 ?? { buys: 0, sells: 0 },
      },
      pair: {
        address: pair.pairAddress,
        dex: pair.dexId,
        url: pair.url,
        createdAt: pair.pairCreatedAt,
      },
      updatedAt: now,
    };

    cache = { data: tokenData, timestamp: now };
    return NextResponse.json(tokenData);
  } catch (error) {
    console.error('Failed to fetch token data from DexScreener:', error);
    if (cache.data) {
      return NextResponse.json({ ...cache.data, stale: true });
    }
    return NextResponse.json({ error: 'Failed to fetch token data' }, { status: 502 });
  }
}
