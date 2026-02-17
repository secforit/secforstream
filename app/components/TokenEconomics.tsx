'use client'

import useSWR from 'swr'
import type { TokenData, HolderData, BondingCurveData } from '@/app/types/token'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  if (!res.ok || data.error) throw new Error(data.error)
  return data
}

function formatCompact(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return value.toFixed(0)
}

function formatUsd(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`
  return `$${value.toFixed(2)}`
}

export default function TokenEconomics() {
  const { data: tokenData } = useSWR<TokenData>('/api/token/data', fetcher, { refreshInterval: 30_000 })
  const { data: holderData } = useSWR<HolderData>('/api/token/holders', fetcher, { refreshInterval: 60_000 })
  const { data: bondingData } = useSWR<BondingCurveData>('/api/token/bonding-curve', fetcher, { refreshInterval: 30_000 })

  // Build distribution from real holder concentration data
  const top5 = holderData?.concentration?.top5Percentage ?? 0
  const top10Extra = (holderData?.concentration?.top10Percentage ?? 0) - top5
  const top20Extra = (holderData?.concentration?.top20Percentage ?? 0) - (holderData?.concentration?.top10Percentage ?? 0)
  const rest = 100 - (holderData?.concentration?.top20Percentage ?? 0)

  const hasHolderData = holderData?.topHolders && holderData.topHolders.length > 0

  const distribution = hasHolderData
    ? [
        { label: 'Top 5 Holders', percentage: Math.round(top5), color: 'bg-red-600', description: 'Largest wallets' },
        { label: 'Top 6-10 Holders', percentage: Math.round(top10Extra), color: 'bg-rose-600', description: 'Major holders' },
        { label: 'Top 11-20 Holders', percentage: Math.round(top20Extra), color: 'bg-orange-600', description: 'Active participants' },
        { label: 'Remaining Holders', percentage: Math.round(rest), color: 'bg-rose-500', description: 'Community distribution' },
      ]
    : [
        { label: 'Top 5 Holders', percentage: 0, color: 'bg-red-600', description: 'Loading...' },
        { label: 'Top 6-10 Holders', percentage: 0, color: 'bg-rose-600', description: 'Loading...' },
        { label: 'Top 11-20 Holders', percentage: 0, color: 'bg-orange-600', description: 'Loading...' },
        { label: 'Remaining Holders', percentage: 0, color: 'bg-rose-500', description: 'Loading...' },
      ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            On-Chain Token Distribution
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Real holder distribution pulled from Solana. Updated every 60 seconds.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-semibold">Live on-chain data</span>
          </div>
        </div>

        {/* Distribution Bars */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-6">
            {distribution.map((item, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold text-white">{item.label}</span>
                    <span className="text-sm text-gray-400 ml-2">• {item.description}</span>
                  </div>
                  <span className="text-2xl font-bold text-white">{item.percentage}%</span>
                </div>

                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Token Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold text-white mb-2">Market Cap</h3>
            <p className="text-2xl font-bold text-red-400">
              {tokenData ? formatUsd(tokenData.market.marketCap) : '—'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-white mb-2">24h Volume</h3>
            <p className="text-2xl font-bold text-red-400">
              {tokenData ? formatUsd(tokenData.market.volume24h) : '—'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-semibold text-white mb-2">Bonding Curve</h3>
            <p className="text-2xl font-bold text-red-400">
              {bondingData ? `${bondingData.progress.toFixed(1)}%` : '—'}
            </p>
          </div>
        </div>

        {/* Total Supply Info */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Token Metrics</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Total Supply</div>
              <div className="text-lg font-bold text-white">
                {holderData ? formatCompact(holderData.totalSupply.uiAmount) : '—'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Price</div>
              <div className="text-lg font-bold text-white">
                {tokenData ? `$${parseFloat(tokenData.price.usd).toFixed(8)}` : '—'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">FDV</div>
              <div className="text-lg font-bold text-white">
                {tokenData ? formatUsd(tokenData.market.fdv) : '—'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">SOL in Curve</div>
              <div className="text-lg font-bold text-white">
                {bondingData ? `${bondingData.solInCurve.toFixed(2)} SOL` : '—'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
