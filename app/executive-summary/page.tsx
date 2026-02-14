import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Executive Summary | SECforSTREAM - Quick Overview',
  description: 'Quick 5-10 minute overview of SECforSTREAM: blockchain-based livestream verification solving the $2B+ deepfake crisis.',
}

export default function ExecutiveSummaryPage() {
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
              href="/EXECUTIVE-SUMMARY.md"
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
            <span className="text-sm text-gray-300">Quick Overview • Version 1.0 • February 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent leading-tight">
            SECforSTREAM<br />Executive Summary
          </h1>

          <p className="text-2xl text-gray-400 mb-8">
            Quick Overview - 5-10 Minute Read
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              8 pages
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              5-10 min read
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
            <span className="text-3xl">🗂️</span>
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#problem" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">The Problem</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#solution" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">The Solution</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#how-it-works" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">How It Works</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#economics" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Token Economics</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#use-cases" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Use Cases</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <a href="#roadmap" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Roadmap</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-gray-400">
              <span className="text-red-400 font-semibold">💡 Tip:</span> Use the table of contents on the right to navigate sections quickly, or download the PDF for offline reading.
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
                <a href="#how-it-works" className="block text-gray-400 hover:text-red-400 transition-colors">How It Works</a>
                <a href="#economics" className="block text-gray-400 hover:text-red-400 transition-colors">Token Economics</a>
                <a href="#market" className="block text-gray-400 hover:text-red-400 transition-colors">Market Opportunity</a>
                <a href="#use-cases" className="block text-gray-400 hover:text-red-400 transition-colors">Use Cases</a>
                <a href="#roadmap" className="block text-gray-400 hover:text-red-400 transition-colors">Roadmap</a>
                <a href="#technology" className="block text-gray-400 hover:text-red-400 transition-colors">Technology</a>
                <a href="#why-wins" className="block text-gray-400 hover:text-red-400 transition-colors">Why We Win</a>
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-sm font-semibold text-white mb-3">Other Docs</h4>
                <div className="space-y-2 text-xs">
                  <a href="/whitepaper" className="block text-gray-400 hover:text-red-400 transition-colors">Full Whitepaper</a>
                  <a href="/pitch-deck" className="block text-gray-400 hover:text-red-400 transition-colors">Pitch Deck</a>
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
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">The Problem: $2B+ Crisis</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Deepfake technology has created a crisis in livestreaming:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                  <li><strong className="text-white">$2+ billion</strong> in fraud losses (2025)</li>
                  <li>Real-time AI can clone voices and faces with 95%+ accuracy</li>
                  <li>Creators lose sponsorships to impersonators</li>
                  <li>Brands hesitate to sponsor due to fraud risk</li>
                  <li>Viewers can't trust what they watch</li>
                  <li>Current detection methods fail (AI defeats AI)</li>
                </ul>
                <div className="p-6 rounded-lg bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20">
                  <p className="text-lg font-semibold text-white">
                    The market needs verifiable proof of authenticity.
                  </p>
                </div>
              </section>

              {/* The Solution */}
              <section id="solution" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">The Solution: Proof-of-Human Protocol</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  SECforSTREAM introduces blockchain-based verification combining:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-3xl mb-3">🔒</div>
                    <h4 className="text-xl font-semibold text-white mb-2">1. Economic Staking</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Creators stake $SECS tokens as collateral</li>
                      <li>• Economic consequences for fraud</li>
                      <li>• Rewards for honest participation</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-3xl mb-3">⚡</div>
                    <h4 className="text-xl font-semibold text-white mb-2">2. Real-Time Challenges</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• AI-resistant verification tasks</li>
                      <li>• "Show me something red in your room"</li>
                      <li>• "What's the weather outside?"</li>
                      <li>• "Make up a rhyme with these words"</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-3xl mb-3">👥</div>
                    <h4 className="text-xl font-semibold text-white mb-2">3. Community Verification</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Viewers validate challenge completion</li>
                      <li>• Distributed consensus (no single point of failure)</li>
                      <li>• Earn $SECS for participation</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="text-xl font-semibold text-white mb-2">4. Transparent Trust Scores</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• On-chain reputation metric (0-100)</li>
                      <li>• Publicly auditable history</li>
                      <li>• Visible badge of credibility</li>
                      <li>• Used by brands for sponsorship decisions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">How It Works (30 Seconds)</h2>
                <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm">
                  <div className="text-gray-300 space-y-3">
                    <div>Streamer → Stakes SECS → Receives Challenge</div>
                    <div className="ml-8">↓</div>
                    <div>Completes Challenge on Camera</div>
                    <div className="ml-8">↓</div>
                    <div>Viewers Verify → 70%+ Agreement = PASS</div>
                    <div className="ml-8">↓</div>
                    <div>Trust Score Increases → Verified Badge</div>
                    <div className="ml-8">↓</div>
                    <div>Viewers Earn SECS Rewards</div>
                  </div>
                </div>
                <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <p className="text-lg font-semibold text-white">
                    Result: Provable authenticity + economic incentives = trust at scale
                  </p>
                </div>
              </section>

              {/* Token Economics */}
              <section id="economics" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">Token Economics ($SECS)</h2>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Total Supply:</strong> 1,000,000,000 (fixed)
                </p>

                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Allocation</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">%</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Team</td>
                        <td className="px-4 py-3">35%</td>
                        <td className="px-4 py-3">1-year cliff, 2-year vest</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Verification Rewards</td>
                        <td className="px-4 py-3">30%</td>
                        <td className="px-4 py-3">Challenge participants</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Streamer Staking</td>
                        <td className="px-4 py-3">20%</td>
                        <td className="px-4 py-3">Available at launch</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Community Treasury</td>
                        <td className="px-4 py-3">10%</td>
                        <td className="px-4 py-3">DAO-governed</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-red-400">Liquidity</td>
                        <td className="px-4 py-3">5%</td>
                        <td className="px-4 py-3">DEX pools</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">Utility</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Stake to verify authenticity</li>
                  <li>Earn through challenge participation</li>
                  <li>Governance voting power</li>
                  <li>Access premium features</li>
                </ul>
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
                    <h3 className="text-2xl font-bold text-white mb-3">Complete Executive Summary Available</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      This is a preview of the SECforSTREAM Executive Summary. The complete document includes detailed market analysis, use cases, roadmap, and competitive advantages.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/EXECUTIVE-SUMMARY.md"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-500/50 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                        Read Full Summary
                      </a>
                      <a
                        href="/EXECUTIVE-SUMMARY.md"
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

              {/* Use Cases */}
              <section id="use-cases" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">Use Cases</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-xl font-semibold text-red-400 mb-3">For Creators</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Prove authenticity to attract sponsors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Build verifiable trust score</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Differentiate from deepfakes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Increase audience confidence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-xl font-semibold text-red-400 mb-3">For Brands</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Verify influencer authenticity before sponsoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Reduce fraud risk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Transparent due diligence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Contract compliance verification</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-xl font-semibold text-red-400 mb-3">For Platforms</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Reduce moderation costs (80%+ savings potential)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Decrease liability exposure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Improve user trust and retention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Industry-leading safety feature</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-xl font-semibold text-red-400 mb-3">For Viewers</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Trust content is authentic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Earn rewards for participation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Support genuine creators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>Transparent verification history</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Roadmap */}
              <section id="roadmap" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">Roadmap</h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="text-xl font-semibold text-white">Q1 2026 (Current)</h4>
                      <span className="text-green-400 font-semibold">✅</span>
                    </div>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Token launch on Solana</li>
                      <li>• Core smart contracts deployed</li>
                      <li>• OBS plugin (beta)</li>
                      <li>• Website & whitepaper</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-yellow-500">
                    <h4 className="text-xl font-semibold text-white mb-3">Q2 2026</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• 100+ verified streamers</li>
                      <li>• Major platform partnership</li>
                      <li>• Community governance active</li>
                      <li>• 50+ challenge types</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-orange-500">
                    <h4 className="text-xl font-semibold text-white mb-3">Q3-Q4 2026</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Multi-platform integration (Twitch, YouTube)</li>
                      <li>• Enterprise partnerships (3+ brands)</li>
                      <li>• NFT verification badges</li>
                      <li>• $10M+ total value locked</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-red-500">
                    <h4 className="text-xl font-semibold text-white mb-3">2027+</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Industry-standard verification</li>
                      <li>• 10,000+ verified creators</li>
                      <li>• 100+ platform integrations</li>
                      <li>• Full DAO transition</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Continue Reading CTA */}
              <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Continue Reading</h3>
                <p className="text-gray-300 mb-6">
                  This preview covers the core concepts. The complete executive summary includes:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Market Opportunity Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Technology Stack Details
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Trust Score Formula
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Competitive Advantages
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Token Metrics & Projections
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Team & Governance
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Regulatory Approach
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Call to Action
                  </li>
                </ul>
                <a
                  href="/EXECUTIVE-SUMMARY.md"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  Read Complete Executive Summary
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
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Full Whitepaper</h3>
              <p className="text-gray-400 text-sm mb-4">Complete technical documentation and specifications</p>
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                <span>Read Whitepaper</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            <a href="/pitch-deck" className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Pitch Deck</h3>
              <p className="text-gray-400 text-sm mb-4">Investor-focused presentation and financials</p>
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                <span>View Deck</span>
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
