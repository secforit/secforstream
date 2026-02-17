import { Metadata } from 'next';
import Link from 'next/link';
import DashboardClient from './components/DashboardClient';

export const metadata: Metadata = {
  title: 'Dashboard | $SECS Token Live Data - SECforSTREAM',
  description:
    'Real-time $SECS token data: price, market cap, holder analytics, bonding curve progress, and live trades from pump.fun on Solana.',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-semibold">Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/20">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Live Data</span>
            </div>
            <a
              href="https://pump.fun/coin/7aS4v65fEGvQseGxmrZ8iGNpHW7yd49SMmLm2cLApump"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              View on pump.fun
            </a>
          </div>
        </div>
      </header>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent">
            $SECS Token Dashboard
          </h1>
          <p className="text-lg text-gray-400">
            Real-time token data powered by DexScreener, Solana RPC & pump.fun
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <DashboardClient />
      </main>
    </div>
  );
}
