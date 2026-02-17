'use client';

import type { PumpTrade } from '@/app/types/token';

interface TradeFeedProps {
  trades: PumpTrade[];
  isConnected: boolean;
}

function truncateAddress(address: string): string {
  if (!address || address.length <= 10) return address || '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 5) return 'just now';
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  return `${Math.floor(seconds / 3600)}h ago`;
}

function formatSol(amount: number): string {
  if (amount >= 1) return `${amount.toFixed(2)} SOL`;
  return `${amount.toFixed(4)} SOL`;
}

function formatTokens(amount: number): string {
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(1)}K`;
  return amount.toFixed(0);
}

export default function TradeFeed({ trades, isConnected }: TradeFeedProps) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rose-600/20 flex items-center justify-center">
            <span className="text-lg">⚡</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Live Trades</h3>
            <p className="text-xs text-gray-500">Real-time from pump.fun</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'
            }`}
          />
          <span className="text-xs text-gray-400">
            {isConnected ? 'Connected' : 'Reconnecting...'}
          </span>
        </div>
      </div>

      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
        {trades.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">
            {isConnected
              ? 'Waiting for trades...'
              : 'Connecting to live feed...'}
          </div>
        ) : (
          trades.map((trade, index) => (
            <div
              key={trade.signature || index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
            >
              <span
                className={`text-xs font-bold px-2 py-1 rounded ${
                  trade.txType === 'buy'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {trade.txType === 'buy' ? 'BUY' : 'SELL'}
              </span>

              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">
                  {formatSol(trade.solAmount)}{' '}
                  <span className="text-gray-500">→</span>{' '}
                  {formatTokens(trade.tokenAmount)} $SECS
                </div>
                <div className="text-xs text-gray-500">
                  {truncateAddress(trade.traderPublicKey)}
                </div>
              </div>

              <span className="text-xs text-gray-500 flex-shrink-0">
                {formatTimeAgo(trade.timestamp)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
