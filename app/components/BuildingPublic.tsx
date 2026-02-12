export default function BuildingPublic() {
  const metrics = [
    { value: '50+', label: 'Challenges Run', icon: '⚡' },
    { value: '30+', label: 'Participants', icon: '👥' },
    { value: '10+', label: 'Trust Scores', icon: '🏆' },
    { value: '6', label: 'Livestreams', icon: '🎥' }
  ]

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Building in Public
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're proving SECforSTREAM works in real-time. Join our streams, participate in challenges, and see verification in action.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-red-600/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{metric.icon}</div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Live Status */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Join Our Next Stream</h3>
                <p className="text-gray-400 mb-6">
                  Experience SECforSTREAM verification live. Participate in challenges, earn tokens, and help us prove that authenticity can scale.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                  >
                    <span>Join Discord</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border-2 border-green-500/50 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                  >
                    <span>Follow on X</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Transparency Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700">
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">All metrics updated in real-time • 100% transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
