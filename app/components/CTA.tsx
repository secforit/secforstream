export default function CTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-rose-600/20 to-orange-600/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent leading-tight">
          Ready to Prove You're Human?
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join the movement. Verify your streams. Build trust.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#discord"
            className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl font-bold text-lg text-white hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Discord Community
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
          </a>

          <a
            href="#twitter"
            className="px-10 py-5 rounded-xl font-bold text-lg text-white border-2 border-red-600/50 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300"
          >
            Follow on X
          </a>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="/WHITEPAPER.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <span>📄</span>
            Full Whitepaper
          </a>
          <a href="/EXECUTIVE-SUMMARY.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <span>📋</span>
            Executive Summary
          </a>
          <a href="/PITCH-DECK.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <span>📊</span>
            Pitch Deck
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <span>🚀</span>
            Token (Coming Soon)
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-semibold text-white mb-1">Fast & Simple</div>
            <div className="text-sm text-gray-400">Get verified in minutes</div>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-semibold text-white mb-1">Secure & Transparent</div>
            <div className="text-sm text-gray-400">All verification on-chain</div>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700">
            <div className="text-3xl mb-2">🌍</div>
            <div className="font-semibold text-white mb-1">Community Driven</div>
            <div className="text-sm text-gray-400">Built by creators, for creators</div>
          </div>
        </div>

        {/* Final Tagline */}
        <div className="mt-12">
          <p className="text-gray-500 italic">
            "In a world where AI can fake anything, proof of human becomes essential."
          </p>
        </div>
      </div>
    </section>
  )
}
