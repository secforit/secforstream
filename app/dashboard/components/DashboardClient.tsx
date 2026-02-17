'use client';

import useSWR from 'swr';
import { usePumpTrades } from '@/app/hooks/usePumpTrades';
import type { TokenData, HolderData, BondingCurveData } from '@/app/types/token';
import PriceOverview from './PriceOverview';
import BondingCurveProgress from './BondingCurveProgress';
import MarketStats from './MarketStats';
import HolderDistribution from './HolderDistribution';
import TradeFeed from './TradeFeed';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok || data.error) {
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }
  return data;
};

function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-slate-800/50 rounded-2xl ${className}`} />
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
      <p className="text-sm text-red-400">{message}. Retrying...</p>
    </div>
  );
}

export default function DashboardClient() {
  const {
    data: tokenData,
    error: tokenError,
  } = useSWR<TokenData>('/api/token/data', fetcher, {
    refreshInterval: 15_000,
    revalidateOnFocus: true,
  });

  const {
    data: holderData,
    error: holderError,
  } = useSWR<HolderData>('/api/token/holders', fetcher, {
    refreshInterval: 60_000,
  });

  const {
    data: bondingData,
    error: bondingError,
  } = useSWR<BondingCurveData>('/api/token/bonding-curve', fetcher, {
    refreshInterval: 20_000,
  });

  const { trades, isConnected } = usePumpTrades();

  return (
    <div className="space-y-6">
      {/* Row 1: Price + Bonding Curve */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tokenError ? (
          <ErrorBanner message="Failed to load token data" />
        ) : !tokenData ? (
          <Skeleton className="h-64" />
        ) : (
          <PriceOverview data={tokenData} />
        )}

        {bondingError ? (
          <ErrorBanner message="Failed to load bonding curve data" />
        ) : !bondingData ? (
          <Skeleton className="h-64" />
        ) : (
          <BondingCurveProgress data={bondingData} />
        )}
      </div>

      {/* Row 2: Market Stats */}
      {tokenError ? null : !tokenData ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      ) : (
        <MarketStats data={tokenData} />
      )}

      {/* Row 3: Holders + Trade Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {holderError ? (
          <ErrorBanner message="Failed to load holder data" />
        ) : !holderData ? (
          <Skeleton className="h-96" />
        ) : (
          <HolderDistribution data={holderData} />
        )}

        <TradeFeed trades={trades} isConnected={isConnected} />
      </div>

      {/* Last updated */}
      {tokenData && (
        <div className="text-center">
          <span className="text-xs text-gray-500">
            Last updated: {new Date(tokenData.updatedAt).toLocaleTimeString()}
            {' '}• Auto-refreshing every 15s
          </span>
        </div>
      )}
    </div>
  );
}
