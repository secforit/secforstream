'use client';

import type { TokenData } from '@/app/types/token';
import StatsCard from './StatsCard';

interface MarketStatsProps {
  data: TokenData;
}

function formatCompact(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

export default function MarketStats({ data }: MarketStatsProps) {
  const totalTxns24h = data.transactions.buys24h + data.transactions.sells24h;
  const buyRatio = totalTxns24h > 0
    ? ((data.transactions.buys24h / totalTxns24h) * 100).toFixed(0)
    : '50';

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatsCard
        icon="📊"
        label="Volume 24h"
        value={formatCompact(data.market.volume24h)}
      />
      {data.market.liquidity > 0 ? (
        <StatsCard
          icon="💧"
          label="Liquidity"
          value={formatCompact(data.market.liquidity)}
        />
      ) : (
        <StatsCard
          icon="📈"
          label="Volume 1h"
          value={formatCompact(data.market.volume1h)}
        />
      )}
      <StatsCard
        icon="🟢"
        label="Buys 24h"
        value={data.transactions.buys24h.toLocaleString()}
      />
      <StatsCard
        icon="🔴"
        label="Sells 24h"
        value={data.transactions.sells24h.toLocaleString()}
      />
    </div>
  );
}
