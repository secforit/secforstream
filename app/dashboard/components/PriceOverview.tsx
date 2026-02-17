'use client';

import type { TokenData } from '@/app/types/token';

interface PriceOverviewProps {
  data: TokenData;
}

function formatUsd(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (num < 0.001) return `$${num.toFixed(8)}`;
  if (num < 1) return `$${num.toFixed(6)}`;
  if (num < 1000) return `$${num.toFixed(4)}`;
  return `$${num.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function formatCompact(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

function ChangeBadge({ value, label }: { value: number; label: string }) {
  const isPositive = value >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
        isPositive
          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : 'bg-red-500/20 text-red-400 border border-red-500/30'
      }`}
    >
      {isPositive ? '+' : ''}
      {value.toFixed(2)}% {label}
    </span>
  );
}

export default function PriceOverview({ data }: PriceOverviewProps) {
  if (!data?.price || !data?.pair) return null;

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
          <span className="text-lg font-bold text-red-400">$</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">$SECS Price</h3>
          <p className="text-xs text-gray-500">via {data.pair.dex}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-4xl font-bold text-white mb-1">
          {formatUsd(data.price.usd)}
        </div>
        <div className="text-sm text-gray-400">
          {parseFloat(data.price.native).toFixed(10)} SOL
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <ChangeBadge value={data.price.change5m} label="5m" />
        <ChangeBadge value={data.price.change1h} label="1h" />
        <ChangeBadge value={data.price.change24h} label="24h" />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
        <div>
          <div className="text-xs text-gray-500 mb-1">Market Cap</div>
          <div className="text-sm font-semibold text-white">
            {formatCompact(data.market.marketCap)}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">FDV</div>
          <div className="text-sm font-semibold text-white">
            {formatCompact(data.market.fdv)}
          </div>
        </div>
      </div>
    </div>
  );
}
