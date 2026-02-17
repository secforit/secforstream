'use client';

import type { HolderData } from '@/app/types/token';

interface HolderDistributionProps {
  data: HolderData;
}

function truncateAddress(address: string): string {
  if (address.length <= 10) return address;
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

function formatAmount(amount: number): string {
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(2)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(2)}K`;
  return amount.toFixed(2);
}

export default function HolderDistribution({ data }: HolderDistributionProps) {
  const holders = data?.topHolders ?? [];
  const maxPercentage = holders[0]?.percentage ?? 1;

  if (!data?.totalSupply || holders.length === 0) {
    return (
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center">
            <span className="text-lg">👥</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Top Holders</h3>
        </div>
        <div className="text-center py-12 text-gray-500 text-sm">
          No holder data available. Configure HELIUS_RPC_URL to enable.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center">
          <span className="text-lg">👥</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Top Holders</h3>
          <p className="text-xs text-gray-500">
            Supply: {formatAmount(data.totalSupply.uiAmount)} $SECS
          </p>
        </div>
      </div>

      {/* Holder table */}
      <div className="space-y-2 mb-6 max-h-[400px] overflow-y-auto pr-1">
        {holders.map((holder, index) => (
          <div
            key={holder.address}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors group"
          >
            <span className="text-xs text-gray-500 w-5 text-right flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-xs text-gray-300 font-mono flex-shrink-0 group-hover:text-white transition-colors">
              {truncateAddress(holder.address)}
            </span>
            <div className="flex-1 mx-2">
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-rose-600 rounded-full transition-all duration-500"
                  style={{ width: `${(holder.percentage / maxPercentage) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-xs text-gray-400 flex-shrink-0 w-20 text-right">
              {formatAmount(holder.uiAmount)}
            </span>
            <span className="text-xs font-semibold text-white flex-shrink-0 w-14 text-right">
              {holder.percentage.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      {/* Concentration summary */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700">
        <div className="text-center p-3 rounded-xl bg-slate-800/50">
          <div className="text-xs text-gray-500 mb-1">Top 5</div>
          <div className="text-sm font-bold text-white">
            {data.concentration.top5Percentage.toFixed(1)}%
          </div>
        </div>
        <div className="text-center p-3 rounded-xl bg-slate-800/50">
          <div className="text-xs text-gray-500 mb-1">Top 10</div>
          <div className="text-sm font-bold text-white">
            {data.concentration.top10Percentage.toFixed(1)}%
          </div>
        </div>
        <div className="text-center p-3 rounded-xl bg-slate-800/50">
          <div className="text-xs text-gray-500 mb-1">Top 20</div>
          <div className="text-sm font-bold text-white">
            {data.concentration.top20Percentage.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
}
