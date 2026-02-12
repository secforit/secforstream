export default function TrustScore() {
  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Build Your Trust Score
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every challenge you complete increases your Trust Score. Higher scores attract sponsors and build community confidence.
          </p>
        </div>

        {/* Trust Score Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-rose-600/20 to-orange-600/20 rounded-3xl blur-3xl opacity-50" />

            <div className="relative z-10">
              {/* Verified Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-green-400">VERIFIED STREAMER</span>
                </div>
              </div>

              {/* Circular Progress */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  {/* Background Circle */}
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
                    {/* Progress Circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="552.92"
                      strokeDashoffset="110.58"
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

                  {/* Score Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white mb-1">87</div>
                      <div className="text-sm text-gray-400">/ 100</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-2xl font-bold text-white mb-1">42</div>
                  <div className="text-xs text-gray-400">Challenges</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-2xl font-bold text-white mb-1">95%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-2xl font-bold text-white mb-1">12</div>
                  <div className="text-xs text-gray-400">Day Streak</div>
                </div>
              </div>

              {/* Trust Level */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600">
                  <span className="text-sm font-semibold text-white">🏆 HIGH TRUST LEVEL</span>
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
