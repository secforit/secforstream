import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pitch Deck | SECforSTREAM - Investor Presentation',
  description: 'SECforSTREAM investor presentation: market opportunity, business model, token economics, and growth strategy for blockchain-powered livestream verification.',
}

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Back to Home</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="/PITCH-DECK.md"
              download
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/20">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Investor Presentation • Version 1.0 • February 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent leading-tight">
            SECforSTREAM<br />Pitch Deck
          </h1>

          <p className="text-2xl text-gray-400 mb-8">
            Investor Presentation - 10 Minute Read
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              20 slides
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              10 min read
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              By SECFORIT
            </span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">📊</span>
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#problem" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Problem</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#solution" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Solution</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#business-model" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Business Model</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#market" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Market</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#traction" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Traction</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#investment" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Investment</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-gray-400">
              <span className="text-red-400 font-semibold">💰 Investment Ask:</span> $250,000 @ $10M valuation for hackathon phase. Full presentation includes detailed financials and projections.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-xl bg-slate-800/30 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Contents</h3>
              <nav className="space-y-2 text-sm">
                <a href="#problem" className="block text-gray-400 hover:text-red-400 transition-colors">The Problem</a>
                <a href="#solution" className="block text-gray-400 hover:text-red-400 transition-colors">The Solution</a>
                <a href="#why-now" className="block text-gray-400 hover:text-red-400 transition-colors">Why Now</a>
                <a href="#business-model" className="block text-gray-400 hover:text-red-400 transition-colors">Business Model</a>
                <a href="#token-economics" className="block text-gray-400 hover:text-red-400 transition-colors">Token Economics</a>
                <a href="#go-to-market" className="block text-gray-400 hover:text-red-400 transition-colors">Go-to-Market</a>
                <a href="#competitive" className="block text-gray-400 hover:text-red-400 transition-colors">Competitive Edge</a>
                <a href="#team" className="block text-gray-400 hover:text-red-400 transition-colors">Team</a>
                <a href="#traction" className="block text-gray-400 hover:text-red-400 transition-colors">Traction</a>
                <a href="#investment" className="block text-gray-400 hover:text-red-400 transition-colors">Investment</a>
                <a href="#market" className="block text-gray-400 hover:text-red-400 transition-colors">Market Opportunity</a>
                <a href="#financials" className="block text-gray-400 hover:text-red-400 transition-colors">Financials</a>
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-sm font-semibold text-white mb-3">Other Docs</h4>
                <div className="space-y-2 text-xs">
                  <a href="/whitepaper" className="block text-gray-400 hover:text-red-400 transition-colors">Whitepaper</a>
                  <a href="/executive-summary" className="block text-gray-400 hover:text-red-400 transition-colors">Executive Summary</a>
                  <a href="/BRANDING.md" target="_blank" className="block text-gray-400 hover:text-red-400 transition-colors">Branding Guide</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-3 prose prose-invert prose-red max-w-none">
            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700">
              {/* The Problem */}
              <section id="problem" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">🎯 The Problem</h2>
                <h3 className="text-2xl font-semibold text-red-400 mb-3">Deepfakes Are Destroying Trust in Livestreaming</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The livestreaming industry lost over <strong className="text-white">$2 billion in 2025</strong> due to AI-powered deepfakes and impersonation fraud. The crisis is accelerating:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                  <li>AI can clone voices and faces in real-time with 95%+ accuracy</li>
                  <li>Creators lose sponsorships to impersonators</li>
                  <li>Brands get defrauded by fake endorsements</li>
                  <li>Viewers can't trust what they watch</li>
                  <li>Platforms face increasing liability</li>
                </ul>

                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30 mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Current Solutions Fail:</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">❌</span>
                      <span>AI detection doesn't work (AI defeats AI)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">❌</span>
                      <span>Centralized verification doesn't scale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">❌</span>
                      <span>No economic incentives for participation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">❌</span>
                      <span>Opaque, unverifiable processes</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Solution */}
              <section id="solution" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">💡 The Solution</h2>
                <h3 className="text-2xl font-semibold text-red-400 mb-3">Proof-of-Human Protocol (PoHP)</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  SECforSTREAM introduces <strong className="text-white">Cryptoeconomic Verification</strong> combining blockchain technology, real-time challenges, and community validation:
                </p>

                <div className="my-6 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700">
                  <div className="space-y-4 text-gray-300 font-mono text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">1</div>
                      <span>Streamer Stakes SECS Tokens</span>
                    </div>
                    <div className="ml-4 border-l-2 border-slate-700 h-4"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">2</div>
                      <span>Receives AI-Resistant Challenge</span>
                    </div>
                    <div className="ml-4 border-l-2 border-slate-700 h-4"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">3</div>
                      <span>Completes Challenge on Camera</span>
                    </div>
                    <div className="ml-4 border-l-2 border-slate-700 h-4"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">4</div>
                      <span>Viewers Validate (70% consensus)</span>
                    </div>
                    <div className="ml-4 border-l-2 border-slate-700 h-4"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">✓</div>
                      <span className="text-green-400 font-semibold">Trust Score Increases + Rewards</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">🔒</div>
                    <h4 className="font-semibold text-white mb-2">Economic Staking</h4>
                    <p className="text-sm text-gray-400">Creators stake tokens as collateral for authenticity</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-white mb-2">Real-Time Challenges</h4>
                    <p className="text-sm text-gray-400">AI-resistant verification tasks during streams</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">👥</div>
                    <h4 className="font-semibold text-white mb-2">Community Verification</h4>
                    <p className="text-sm text-gray-400">Distributed validation and consensus</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-white mb-2">Transparent Scoring</h4>
                    <p className="text-sm text-gray-400">Public trust metrics and reputation</p>
                  </div>
                </div>

                <p className="text-lg text-white font-semibold mt-6">
                  Result: Verifiable authenticity + sustainable economics
                </p>
              </section>

              {/* Why Now */}
              <section id="why-now" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">🔥 Why Now?</h2>
                <h3 className="text-2xl font-semibold text-red-400 mb-3">Market Timing is Perfect</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="p-5 rounded-xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30">
                    <h4 className="font-bold text-white mb-2">Deepfake Tech Accelerating</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 95%+ voice cloning accuracy</li>
                      <li>• Real-time facial animation</li>
                      <li>• Sub-second latency</li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30">
                    <h4 className="font-bold text-white mb-2">Creator Economy Exploding</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 10M+ livestreamers globally</li>
                      <li>• $10B+ in revenue (2025)</li>
                      <li>• $50B+ live commerce market</li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/30">
                    <h4 className="font-bold text-white mb-2">Regulation Coming</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• EU AI Act enforcing authenticity</li>
                      <li>• Platform liability increasing</li>
                      <li>• Insurance requirements emerging</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border-2 border-red-500">
                  <p className="text-xl text-white font-bold text-center">
                    Window is Closing - First-mover advantage critical
                  </p>
                </div>
              </section>

              {/* Business Model */}
              <section id="business-model" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">💰 Business Model</h2>
                <h3 className="text-2xl font-semibold text-red-400 mb-3">Multiple Revenue Streams</h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h4 className="text-lg font-bold text-white mb-2">Phase 1: Token Utility (Now)</h4>
                    <ul className="text-gray-300 space-y-1 ml-4">
                      <li>• Staking fees</li>
                      <li>• Challenge participation</li>
                      <li>• Premium features</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h4 className="text-lg font-bold text-white mb-2">Phase 2: B2B Services (Q3 2026)</h4>
                    <ul className="text-gray-300 space-y-1 ml-4">
                      <li>• Platform integration fees (5% of subscriptions)</li>
                      <li>• Enterprise verification ($10K-$100K/year)</li>
                      <li>• API licensing ($5K-$50K/mo)</li>
                      <li>• Branded verification badges</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h4 className="text-lg font-bold text-white mb-2">Phase 3: Ecosystem (2027+)</h4>
                    <ul className="text-gray-300 space-y-1 ml-4">
                      <li>• NFT marketplace fees</li>
                      <li>• Data analytics services</li>
                      <li>• Insurance partnerships</li>
                      <li>• White-label solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
                  <h4 className="font-bold text-white mb-3">Projected Revenue:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">$500K-$1M</div>
                      <div className="text-sm text-gray-400">Year 1</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">$5M-$10M</div>
                      <div className="text-sm text-gray-400">Year 2</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">$20M-$50M</div>
                      <div className="text-sm text-gray-400">Year 3</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Notice to read full document */}
              <div className="my-12 p-8 rounded-xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Complete Pitch Deck Available</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      This is a preview of the SECforSTREAM investor presentation. The complete 20-slide deck includes detailed financials, market analysis, competitive landscape, team backgrounds, and 3-year projections.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/PITCH-DECK.md"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-500/50 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                        View Full Presentation
                      </a>
                      <a
                        href="/PITCH-DECK.md"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Economics Preview */}
              <section id="token-economics" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">📊 Token Economics</h2>
                <h3 className="text-2xl font-semibold text-red-400 mb-3">$SECS Utility Token</h3>

                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 mb-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-white">1,000,000,000</div>
                    <div className="text-gray-400">Fixed Supply</div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <div className="text-red-400 font-bold">35%</div>
                      <div className="text-gray-400">Team</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <div className="text-red-400 font-bold">30%</div>
                      <div className="text-gray-400">Rewards</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <div className="text-red-400 font-bold">20%</div>
                      <div className="text-gray-400">Staking</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <div className="text-red-400 font-bold">10%</div>
                      <div className="text-gray-400">Treasury</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <div className="text-red-400 font-bold">5%</div>
                      <div className="text-gray-400">Liquidity</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <div className="text-red-400 font-bold">1%</div>
                      <div className="text-gray-400">Burn Rate</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <h4 className="font-bold text-white mb-2">Utility:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>✅ Stake to verify streams</li>
                      <li>✅ Earn through participation</li>
                      <li>✅ Governance voting</li>
                      <li>✅ Premium access</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <h4 className="font-bold text-white mb-2">Deflationary:</h4>
                    <p className="text-sm text-gray-300">
                      1% burn on all rewards creates scarcity and long-term value appreciation for token holders.
                    </p>
                  </div>
                </div>
              </section>

              {/* Continue Reading CTA */}
              <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Continue Reading</h3>
                <p className="text-gray-300 mb-6">
                  This preview covers the core value proposition and business model. The complete pitch deck includes:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Go-to-Market Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Competitive Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Team & Advisors
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Traction & Milestones
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Use of Funds Breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Market Opportunity (TAM/SAM/SOM)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    3-Year Financial Projections
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Risk Analysis & Mitigation
                  </li>
                </ul>
                <a
                  href="/PITCH-DECK.md"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  View Complete Pitch Deck
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Related Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/whitepaper" className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Whitepaper</h3>
              <p className="text-gray-400 text-sm mb-4">Complete technical documentation and specifications</p>
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                <span>Read Whitepaper</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            <a href="/executive-summary" className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Executive Summary</h3>
              <p className="text-gray-400 text-sm mb-4">Quick 5-10 minute overview of SECforSTREAM</p>
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                <span>Read Summary</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            <Link href="/" className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Main Website</h3>
              <p className="text-gray-400 text-sm mb-4">Explore SECforSTREAM features and benefits</p>
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                <span>Go to Home</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 py-12 px-4 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-2">
              SECforSTREAM
            </div>
            <p className="text-sm text-gray-500">By SECFORIT • Security for Streaming</p>
          </div>
          <div className="text-sm text-gray-500 mb-4">
            © 2026 SECforSTREAM by SECFORIT. All rights reserved.
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <a href="mailto:hello@secforit.com" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a>
            <a href="https://secforit.com" className="text-gray-400 hover:text-red-400 transition-colors">SECFORIT</a>
            <Link href="/" className="text-gray-400 hover:text-red-400 transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
