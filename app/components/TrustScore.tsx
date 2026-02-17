'use client'

import useSWR from 'swr'
import type { TokenData, HolderData } from '@/app/types/token'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  if (!res.ok || data.error) throw new Error(data.error)
  return data
}

function getTrustTier(score: number): { label: string; color: string } {
  if (score >= 90) return { label: 'ELITE', color: 'from-yellow-500 to-amber-500' }
  if (score >= 75) return { label: 'HIGH TRUST', color: 'from-red-600 to-rose-600' }
  if (score >= 60) return { label: 'GOOD', color: 'from-green-500 to-emerald-500' }
  if (score >= 40) return { label: 'MODERATE', color: 'from-orange-500 to-amber-500' }
  return { label: 'BUILDING', color: 'from-slate-500 to-slate-400' }
}

export default function TrustScore() {
  const { data: tokenData } = useSWR<TokenData>('/api/token/data', fetcher, { refreshInterval: 30_000 })
  const { data: holderData } = useSWR<HolderData>('/api/token/holders', fetcher, { refreshInterval: 60_000 })

  // Derive a trust-like score from real token health metrics
  const totalTxns = tokenData ? tokenData.transactions.buys24h + tokenData.transactions.sells24h : 0
  const buyRatio = totalTxns > 0 ? (tokenData!.transactions.buys24h / totalTxns) * 100 : 50
  const holderCount = holderData?.topHolders?.length ?? 0
  const concentration = holderData?.concentration?.top5Percentage ?? 100

  // Score: buy pressure (40%) + holder distribution (35%) + activity (25%)
  const buyScore = Math.min(40, (buyRatio / 100) * 40)
  const distributionScore = Math.min(35, ((100 - Math.min(concentration, 100)) / 100) * 35)
  const activityScore = Math.min(25, Math.min(totalTxns / 20, 1) * 25)
  const score = Math.round(buyScore + distributionScore + activityScore)

  const circumference = 2 * Math.PI * 88 // ~552.92
  const offset = circumference - (score / 100) * circumference

  const tier = getTrustTier(score)

  const challenges = totalTxns
  const successRate = totalTxns > 0 ? Math.round(buyRatio) : 0
  const holders = holderCount

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Token Health Score
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A real-time score derived from on-chain metrics: buy pressure, holder distribution, and trading activity.
          </p>
        </div>

        {/* Trust Score Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-rose-600/20 to-orange-600/20 rounded-3xl blur-3xl opacity-50" />

            <div className="relative z-10">
              {/* Live Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-green-400">LIVE ON-CHAIN DATA</span>
                </div>
              </div>

              {/* Circular Progress */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-slate-700"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="50%" stopColor="#f43f5e" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white mb-1">{score}</div>
                      <div className="text-sm text-gray-400">/ 100</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-2xl font-bold text-white mb-1">{challenges.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Txns 24h</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-2xl font-bold text-white mb-1">{successRate}%</div>
                  <div className="text-xs text-gray-400">Buy Ratio</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-2xl font-bold text-white mb-1">{holders}</div>
                  <div className="text-xs text-gray-400">Top Holders</div>
                </div>
              </div>

              {/* Trust Level */}
              <div className="text-center">
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${tier.color}`}>
                  <span className="text-sm font-semibold text-white">{tier.label}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30">
              <span className="text-2xl">🎯</span>
              <div>
                <div className="font-semibold text-white mb-1">Sponsor Ready</div>
                <div className="text-sm text-gray-400">Brands prefer high trust scores</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30">
              <span className="text-2xl">💪</span>
              <div>
                <div className="font-semibold text-white mb-1">Community Respect</div>
                <div className="text-sm text-gray-400">Build credibility with fans</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
