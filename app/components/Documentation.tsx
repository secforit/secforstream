export default function Documentation() {
  const documents = [
    {
      title: 'Full Whitepaper',
      description: 'Complete technical documentation covering architecture, token economics, and implementation strategy.',
      icon: '📄',
      pages: '40+ pages',
      time: '30-45 min read',
      href: '/whitepaper',
      color: 'from-red-600 to-rose-600'
    },
    {
      title: 'Executive Summary',
      description: 'Quick overview of the problem, solution, market opportunity, and key differentiators.',
      icon: '📋',
      pages: '8 pages',
      time: '5-10 min read',
      href: '/executive-summary',
      color: 'from-rose-600 to-pink-600'
    },
    {
      title: 'Pitch Deck',
      description: 'Investor-focused presentation with business model, projections, and funding ask.',
      icon: '📊',
      pages: '20 slides',
      time: '10 min read',
      href: '/pitch-deck',
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Documentation Index',
      description: 'Navigation guide with reading recommendations for different audiences.',
      icon: '🗂️',
      pages: '5 pages',
      time: '3 min read',
      href: '/DOCS-INDEX.md',
      color: 'from-red-500 to-rose-500'
    }
  ]

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Documentation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive resources covering technical architecture, token economics, and business strategy
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              {...(doc.href.startsWith('/DOCS-INDEX') || doc.href.startsWith('/BRANDING') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${doc.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{doc.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {doc.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {doc.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    {doc.pages}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {doc.time}
                  </span>
                </div>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-red-400 group-hover:gap-4 transition-all">
                  <span className="text-sm font-semibold">Read Document</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-semibold text-white mb-2">Problem-Solution Fit</h4>
            <p className="text-sm text-gray-400">$2B+ deepfake crisis solved with cryptoeconomic verification</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-semibold text-white mb-2">Sustainable Economics</h4>
            <p className="text-sm text-gray-400">Multiple revenue streams with deflationary token model</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
            <div className="text-3xl mb-3">🔬</div>
            <h4 className="font-semibold text-white mb-2">Technical Depth</h4>
            <p className="text-sm text-gray-400">Complete smart contract specs and integration architecture</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Learn More?</h3>
          <p className="text-gray-400 mb-6">
            Start with the Executive Summary for a quick overview, or dive into the Full Whitepaper for complete technical details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/executive-summary"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              Quick Start (5 min)
            </a>
            <a
              href="/whitepaper"
              className="px-6 py-3 rounded-lg font-semibold text-white border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
            >
              Deep Dive (45 min)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
