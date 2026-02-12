export default function TokenEconomics() {
  const distribution = [
    { label: 'Team', percentage: 35, color: 'bg-red-600', description: 'Locked with vesting' },
    { label: 'Verification Rewards', percentage: 30, color: 'bg-rose-600', description: 'For participants' },
    { label: 'Streamer Staking', percentage: 20, color: 'bg-orange-600', description: 'For streamers' },
    { label: 'Community & Liquidity', percentage: 15, color: 'bg-rose-500', description: 'Governed by holders' }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Built on Utility
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Clear token distribution focused on creating value
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <span className="text-green-400 font-semibold">Utility first. Speculation second.</span>
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

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-white mb-2">Locked Team Tokens</h3>
            <p className="text-sm text-gray-400">1-year cliff with linear vesting for long-term alignment</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-white mb-2">Active Utility</h3>
            <p className="text-sm text-gray-400">Tokens used every stream for staking and rewards</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold text-white mb-2">Community Governed</h3>
            <p className="text-sm text-gray-400">Token holders guide future development</p>
          </div>
        </div>

        {/* Token Flow Example */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Token Flow Example</h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <p>Streamer stakes <span className="font-semibold text-white">1,000 tokens</span> to start verification stream</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <p>Runs <span className="font-semibold text-white">15 challenges</span> over 90 minutes with viewers</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <p><span className="font-semibold text-white">12 participants</span> successfully complete challenges (60% success rate)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <p>Each winner earns <span className="font-semibold text-white">10 tokens</span> (120 tokens distributed from rewards pool)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
              <p>Streamer's <span className="font-semibold text-white">trust score increases</span> and staked tokens returned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
