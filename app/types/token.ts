// === DexScreener Response Types ===
export interface DexScreenerPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceNative: string;
  priceUsd: string;
  txns: {
    m5: { buys: number; sells: number };
    h1: { buys: number; sells: number };
    h6: { buys: number; sells: number };
    h24: { buys: number; sells: number };
  };
  volume: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  liquidity?: {
    usd: number;
    base: number;
    quote: number;
  };
  fdv: number;
  marketCap: number;
  pairCreatedAt: number;
}

// === Aggregated Token Data (returned by /api/token/data) ===
export interface TokenData {
  price: {
    usd: string;
    native: string;
    change24h: number;
    change1h: number;
    change5m: number;
  };
  market: {
    marketCap: number;
    fdv: number;
    liquidity: number;
    volume24h: number;
    volume1h: number;
  };
  transactions: {
    buys24h: number;
    sells24h: number;
    buys1h: number;
    sells1h: number;
    buysSells5m: { buys: number; sells: number };
  };
  pair: {
    address: string;
    dex: string;
    url: string;
    createdAt: number;
  };
  updatedAt: number;
}

// === Holder Data (returned by /api/token/holders) ===
export interface HolderAccount {
  address: string;
  amount: string;
  uiAmount: number;
  percentage: number;
}

export interface HolderData {
  totalSupply: {
    amount: string;
    uiAmount: number;
    decimals: number;
  };
  topHolders: HolderAccount[];
  concentration: {
    top5Percentage: number;
    top10Percentage: number;
    top20Percentage: number;
  };
  updatedAt: number;
}

// === PumpPortal WebSocket Trade ===
export interface PumpTrade {
  signature: string;
  mint: string;
  traderPublicKey: string;
  txType: 'buy' | 'sell';
  tokenAmount: number;
  solAmount: number;
  newTokenBalance: number;
  bondingCurveKey: string;
  vTokensInBondingCurve: number;
  vSolInBondingCurve: number;
  marketCapSol: number;
  timestamp: number;
}

// === Bonding Curve Status ===
export interface BondingCurveData {
  progress: number;
  solInCurve: number;
  tokensInCurve: number;
  marketCapSol: number;
  migrated: boolean;
  lastTrade?: PumpTrade;
  updatedAt: number;
}
