import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { BondingCurveData, PumpTrade } from '@/app/types/token';
import { rateLimit } from '@/app/lib/rate-limit';

const TOKEN_ADDRESS = '7aS4v65fEGvQseGxmrZ8iGNpHW7yd49SMmLm2cLApump';
const PUMPFUN_API = `https://frontend-api-v3.pump.fun/coins/${TOKEN_ADDRESS}`;
const MIGRATION_THRESHOLD_SOL = 85;
const CACHE_TTL = 30_000; // 30 seconds

interface PumpFunCoin {
  complete: boolean;
  virtual_sol_reserves: number;
  virtual_token_reserves: number;
  real_sol_reserves: number;
  real_token_reserves: number;
  total_supply: number;
  market_cap: number;
  usd_market_cap: number;
  bonding_curve: string;
  last_trade_timestamp: number;
  name: string;
  symbol: string;
  image_uri: string;
  description: string;
  creator: string;
  created_timestamp: number;
  reply_count: number;
  is_currently_live: boolean;
}

let cache: { data: BondingCurveData | null; timestamp: number } = { data: null, timestamp: 0 };

// Convert lamports to SOL
function lamportsToSol(lamports: number): number {
  return lamports / 1_000_000_000;
}

function buildBondingCurveData(coin: PumpFunCoin): BondingCurveData {
  const realSol = lamportsToSol(coin.real_sol_reserves);
  const virtualSol = lamportsToSol(coin.virtual_sol_reserves);
  const progress = Math.min(100, (realSol / MIGRATION_THRESHOLD_SOL) * 100);

  return {
    progress,
    solInCurve: realSol,
    tokensInCurve: coin.real_token_reserves / 1_000_000, // token decimals = 6
    marketCapSol: coin.market_cap,
    migrated: coin.complete,
    updatedAt: Date.now(),
  };
}

export function updateBondingCurve(trade: PumpTrade) {
  cache = {
    data: {
      progress: Math.min(100, (trade.vSolInBondingCurve / MIGRATION_THRESHOLD_SOL) * 100),
      solInCurve: trade.vSolInBondingCurve,
      tokensInCurve: trade.vTokensInBondingCurve,
      marketCapSol: trade.marketCapSol,
      migrated: trade.vSolInBondingCurve >= MIGRATION_THRESHOLD_SOL,
      lastTrade: trade,
      updatedAt: Date.now(),
    },
    timestamp: Date.now(),
  };
}

export async function GET(request: NextRequest) {
  const limited = rateLimit(request, { windowMs: 60_000, maxRequests: 30 });
  if (limited) return limited;

  const now = Date.now();
  if (cache.data && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const res = await fetch(PUMPFUN_API);
    if (!res.ok) throw new Error(`pump.fun returned ${res.status}`);

    const coin: PumpFunCoin = await res.json();
    const data = buildBondingCurveData(coin);

    cache = { data, timestamp: now };
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch bonding curve from pump.fun:', error);
    if (cache.data) {
      return NextResponse.json({ ...cache.data, stale: true });
    }
    return NextResponse.json({ error: 'Failed to fetch bonding curve data' }, { status: 502 });
  }
}
