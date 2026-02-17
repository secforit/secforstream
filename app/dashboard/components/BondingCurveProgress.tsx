'use client';

import type { BondingCurveData } from '@/app/types/token';

interface BondingCurveProgressProps {
  data: BondingCurveData;
}

export default function BondingCurveProgress({ data }: BondingCurveProgressProps) {
  const progressPct = Math.min(100, Math.max(0, data.progress));

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rose-600/20 flex items-center justify-center">
            <span className="text-lg">📈</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Bonding Curve</h3>
            <p className="text-xs text-gray-500">pump.fun progress</p>
          </div>
        </div>

        {data.migrated ? (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-xs font-medium text-green-400">
            Migrated
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-xs font-medium text-orange-400">
            Active
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progress</span>
          <span className="font-semibold text-white">{progressPct.toFixed(1)}%</span>
        </div>
        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-rose-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
        <div>
          <div className="text-xs text-gray-500 mb-1">SOL in Curve</div>
          <div className="text-sm font-semibold text-white">
            {data.solInCurve.toFixed(2)} SOL
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Market Cap (SOL)</div>
          <div className="text-sm font-semibold text-white">
            {data.marketCapSol.toFixed(2)} SOL
          </div>
        </div>
      </div>

      {data.updatedAt === 0 && (
        <div className="mt-4 text-xs text-gray-500 text-center">
          Waiting for trade data...
        </div>
      )}
    </div>
  );
}
