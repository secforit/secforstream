import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Whitepaper | SECforSTREAM - Complete Technical Documentation',
  description: 'Complete technical whitepaper covering SECforSTREAM\'s architecture, token economics, verification protocol, and implementation strategy.',
}

export default function WhitepaperPage() {
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
              href="/WHITEPAPER.md"
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
            <span className="text-sm text-gray-300">Technical Documentation • Version 1.0 • February 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent leading-tight">
            SECforSTREAM<br />Whitepaper
          </h1>

          <p className="text-2xl text-gray-400 mb-8">
            Security for Streaming: Enterprise-Grade Livestream Verification
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              40+ pages
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              30-45 min read
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
            <a href="#abstract" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Abstract</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
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
            <a href="#architecture" className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-white group-hover:text-red-400 transition-colors">Technical Architecture</span>
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
                <a href="#abstract" className="block text-gray-400 hover:text-red-400 transition-colors">Abstract</a>
                <a href="#introduction" className="block text-gray-400 hover:text-red-400 transition-colors">1. Introduction</a>
                <a href="#problem" className="block text-gray-400 hover:text-red-400 transition-colors">2. The Problem</a>
                <a href="#solution" className="block text-gray-400 hover:text-red-400 transition-colors">3. The Solution</a>
                <a href="#architecture" className="block text-gray-400 hover:text-red-400 transition-colors">4. Architecture</a>
                <a href="#economics" className="block text-gray-400 hover:text-red-400 transition-colors">5. Token Economics</a>
                <a href="#protocol" className="block text-gray-400 hover:text-red-400 transition-colors">6. Verification Protocol</a>
                <a href="#trust-score" className="block text-gray-400 hover:text-red-400 transition-colors">7. Trust Score</a>
                <a href="#use-cases" className="block text-gray-400 hover:text-red-400 transition-colors">8. Use Cases</a>
                <a href="#roadmap" className="block text-gray-400 hover:text-red-400 transition-colors">9. Roadmap</a>
                <a href="#team" className="block text-gray-400 hover:text-red-400 transition-colors">10. Team</a>
                <a href="#legal" className="block text-gray-400 hover:text-red-400 transition-colors">11. Legal</a>
                <a href="#conclusion" className="block text-gray-400 hover:text-red-400 transition-colors">12. Conclusion</a>
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-sm font-semibold text-white mb-3">Other Docs</h4>
                <div className="space-y-2 text-xs">
                  <a href="/executive-summary" className="block text-gray-400 hover:text-red-400 transition-colors">Executive Summary</a>
                  <a href="/pitch-deck" className="block text-gray-400 hover:text-red-400 transition-colors">Pitch Deck</a>
                  <a href="/BRANDING.md" target="_blank" className="block text-gray-400 hover:text-red-400 transition-colors">Branding Guide</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-3 prose prose-invert prose-red max-w-none">
            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700">
              {/* Abstract */}
              <section id="abstract" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">Abstract</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  SECforSTREAM introduces a revolutionary blockchain-based verification system for livestream content, addressing the escalating crisis of deepfake technology and AI-powered impersonation in the streaming industry. By combining cryptographic token staking, real-time human verification challenges, and transparent trust scoring, SECforSTREAM provides creators, viewers, and brands with verifiable proof of authenticity.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This whitepaper outlines the technical architecture, economic model, and implementation strategy for the SECforSTREAM token ($SECS) and verification protocol.
                </p>
              </section>

              {/* Key Sections Preview */}
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">1. Introduction</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">1.1 Background</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The livestreaming industry has grown exponentially, with over <strong className="text-white">$10 billion</strong> in creator revenue in 2025. However, this growth has attracted malicious actors leveraging AI technology to create convincing deepfakes, leading to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                  <li><strong className="text-white">$2+ billion</strong> in fraud losses (2025)</li>
                  <li>Destroyed creator reputations</li>
                  <li>Eroded viewer trust</li>
                  <li>Brand sponsorship hesitation</li>
                  <li>Platform liability concerns</li>
                </ul>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">1.2 Vision</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  SECforSTREAM envisions a future where livestream authenticity is verifiable, transparent, and incentivized. By leveraging blockchain technology and cryptoeconomic incentives, we create a self-sustaining ecosystem where creators can prove their authenticity, viewers can trust what they watch, brands can sponsor with confidence, and platforms can reduce liability.
                </p>
              </section>

              <section id="problem" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">2. The Problem</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">2.1 The Deepfake Crisis</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Modern AI can now clone voices in real-time with 95%+ accuracy, generate photorealistic facial animations, mimic mannerisms and speech patterns, and operate with sub-second latency. Current detection methods fail because they are reactive, centralized, lack economic incentives, use opaque processes, and are platform-specific.
                </p>

                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Stakeholder</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Problem</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Annual Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Creators</td>
                        <td className="px-4 py-3">Reputation damage, impersonation, lost sponsorships</td>
                        <td className="px-4 py-3">$800M+</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Brands</td>
                        <td className="px-4 py-3">Fraudulent endorsements, brand safety risks</td>
                        <td className="px-4 py-3">$1.2B+</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Platforms</td>
                        <td className="px-4 py-3">Liability, moderation costs, user churn</td>
                        <td className="px-4 py-3">$500M+</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-red-400">Viewers</td>
                        <td className="px-4 py-3">Misinformation, scams, loss of trust</td>
                        <td className="px-4 py-3">Incalculable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="solution" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">3. The SECforSTREAM Solution</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">3.1 Core Innovation</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  SECforSTREAM introduces <strong className="text-white">Proof-of-Human Protocol (PoHP)</strong>, a decentralized verification system combining:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">🔒</div>
                    <h4 className="font-semibold text-white mb-2">Economic Staking</h4>
                    <p className="text-sm text-gray-400">Creators stake tokens as collateral</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-white mb-2">Real-Time Challenges</h4>
                    <p className="text-sm text-gray-400">AI-resistant verification tasks</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">👥</div>
                    <h4 className="font-semibold text-white mb-2">Community Verification</h4>
                    <p className="text-sm text-gray-400">Distributed validation</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-white mb-2">Transparent Scoring</h4>
                    <p className="text-sm text-gray-400">Public trust metrics</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Technical Architecture */}
              <section id="architecture" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">4. Technical Architecture</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">4.1 System Overview</h3>
                <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm mb-6">
                  <pre className="text-gray-300 overflow-x-auto whitespace-pre">{`┌─────────────────────────────────────────────────────┐
│              SECforSTREAM Protocol                   │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │   Staking    │  │  Challenge   │  │   Trust   │ │
│  │   Contract   │  │   Engine     │  │   Score   │ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
│         │                  │                 │      │
│         └──────────────────┴─────────────────┘      │
│                      │                               │
│              ┌───────┴────────┐                     │
│              │  Verification  │                     │
│              │    Registry    │                     │
│              └───────┬────────┘                     │
└──────────────────────┼──────────────────────────────┘
                       │
           ┌───────────┴───────────┐
           │                       │
    ┌──────▼──────┐        ┌──────▼──────┐
    │   Solana    │        │    IPFS     │
    │  Blockchain │        │   Storage   │
    └─────────────┘        └─────────────┘`}</pre>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">4.2 Smart Contract Architecture</h3>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-xl font-semibold text-white mb-3">4.2.1 Staking Contract</h4>
                    <p className="text-gray-400 text-sm mb-3">Manages token staking for stream verification</p>
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-300 mb-2">Functions:</p>
                      <div className="font-mono text-sm text-gray-400 space-y-1 ml-4">
                        <div><span className="text-red-400">stake</span>(amount) — Stake tokens to initiate verification</div>
                        <div><span className="text-red-400">unstake</span>() — Recover stake after cooldown period</div>
                        <div><span className="text-red-400">slash</span>(streamer, amount) — Penalize fraudulent behavior</div>
                        <div><span className="text-red-400">getStakeStatus</span>(address) — Query staking information</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Security Features:</p>
                      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 ml-4">
                        <li>Time-locked withdrawals (24-hour cooldown)</li>
                        <li>Multi-signature slashing (requires community vote)</li>
                        <li>Automated refunds for successful verification</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-xl font-semibold text-white mb-3">4.2.2 Challenge Contract</h4>
                    <p className="text-gray-400 text-sm mb-3">Generates and validates verification challenges</p>
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-300 mb-2">Functions:</p>
                      <div className="font-mono text-sm text-gray-400 space-y-1 ml-4">
                        <div><span className="text-red-400">generateChallenge</span>(type, difficulty) — Create verification task</div>
                        <div><span className="text-red-400">submitResponse</span>(challengeId, response) — Submit answer</div>
                        <div><span className="text-red-400">verifyResponse</span>(challengeId) — Validate submission</div>
                        <div><span className="text-red-400">getChallengeHistory</span>(streamer) — Retrieve challenge log</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Challenge Types:</p>
                      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 ml-4">
                        <li><strong className="text-white">Contextual:</strong> &quot;Show item X in your environment&quot;</li>
                        <li><strong className="text-white">Temporal:</strong> &quot;What time is it where you are?&quot;</li>
                        <li><strong className="text-white">Creative:</strong> &quot;Improvise using words A, B, C&quot;</li>
                        <li><strong className="text-white">Physical:</strong> &quot;Perform gesture X&quot;</li>
                        <li><strong className="text-white">Cognitive:</strong> &quot;Solve puzzle Y in Z seconds&quot;</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-xl font-semibold text-white mb-3">4.2.3 Trust Score Contract</h4>
                    <p className="text-gray-400 text-sm mb-3">Calculates and maintains reputation scores</p>
                    <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm mb-3">
                      <pre className="text-gray-300 overflow-x-auto whitespace-pre">{`TrustScore = (
  ChallengeWeight × (Successful / Total) +
  StreakWeight × (CurrentStreak / MaxStreak) +
  FrequencyWeight × (Recent / TimeWindow) +
  CommunityWeight × (Endorsements / Votes)
) × 100`}</pre>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                        <div className="text-red-400 font-bold text-lg">0.40</div>
                        <div className="text-xs text-gray-400">Challenge Weight</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                        <div className="text-red-400 font-bold text-lg">0.25</div>
                        <div className="text-xs text-gray-400">Streak Weight</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                        <div className="text-red-400 font-bold text-lg">0.20</div>
                        <div className="text-xs text-gray-400">Frequency Weight</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                        <div className="text-red-400 font-bold text-lg">0.15</div>
                        <div className="text-xs text-gray-400">Community Weight</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">4.3 Off-Chain Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Challenge Engine</h4>
                    <p className="text-xs text-gray-400 mb-2">Node.js microservice</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Randomized generation</li>
                      <li>• Difficulty scaling</li>
                      <li>• Multi-language support</li>
                      <li>• Accessibility options</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Video Analysis</h4>
                    <p className="text-xs text-gray-400 mb-2">Optional enhancement layer</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Computer vision</li>
                      <li>• Pattern detection</li>
                      <li>• Not primary method</li>
                      <li>• Supplementary only</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Decentralized Storage</h4>
                    <p className="text-xs text-gray-400 mb-2">IPFS / Arweave</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Challenge prompts</li>
                      <li>• Response timestamps</li>
                      <li>• Community votes</li>
                      <li>• Trust score history</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">4.4 Integration Layer</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-2xl mb-2">🎮</div>
                    <h4 className="font-semibold text-white text-sm">OBS Plugin</h4>
                    <p className="text-xs text-gray-400">Stream overlay</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <h4 className="font-semibold text-white text-sm">Browser Extension</h4>
                    <p className="text-xs text-gray-400">Web platforms</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <h4 className="font-semibold text-white text-sm">Mobile SDK</h4>
                    <p className="text-xs text-gray-400">Native apps</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-2xl mb-2">🔗</div>
                    <h4 className="font-semibold text-white text-sm">Webhook API</h4>
                    <p className="text-xs text-gray-400">Platform-agnostic</p>
                  </div>
                </div>
              </section>

              {/* Section 5: Token Economics */}
              <section id="economics" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">5. Token Economics</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">5.1 Token Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-xs text-gray-400">Name</div>
                    <div className="text-sm font-bold text-white">SECforSTREAM</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-xs text-gray-400">Ticker</div>
                    <div className="text-sm font-bold text-red-400">$SECS</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-xs text-gray-400">Blockchain</div>
                    <div className="text-sm font-bold text-white">Solana</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center">
                    <div className="text-xs text-gray-400">Standard</div>
                    <div className="text-sm font-bold text-white">SPL Token</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-center col-span-2 md:col-span-1">
                    <div className="text-xs text-gray-400">Total Supply</div>
                    <div className="text-sm font-bold text-white">1B (fixed)</div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">5.2 Token Distribution</h3>
                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Allocation</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">%</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Amount</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Vesting</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Team</td>
                        <td className="px-4 py-3">35%</td>
                        <td className="px-4 py-3">350,000,000</td>
                        <td className="px-4 py-3">12-month cliff, 24-month linear vest</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Verification Rewards</td>
                        <td className="px-4 py-3">30%</td>
                        <td className="px-4 py-3">300,000,000</td>
                        <td className="px-4 py-3">Released via protocol over 48 months</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Streamer Staking Pool</td>
                        <td className="px-4 py-3">20%</td>
                        <td className="px-4 py-3">200,000,000</td>
                        <td className="px-4 py-3">Available at launch</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Community Treasury</td>
                        <td className="px-4 py-3">10%</td>
                        <td className="px-4 py-3">100,000,000</td>
                        <td className="px-4 py-3">Governed by DAO</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-red-400">Liquidity</td>
                        <td className="px-4 py-3">5%</td>
                        <td className="px-4 py-3">50,000,000</td>
                        <td className="px-4 py-3">Locked in DEX pools</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">5.3 Staking Tiers</h3>
                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Tier</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Stake Required</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-amber-600">Bronze</td>
                        <td className="px-4 py-3">1,000 SECS</td>
                        <td className="px-4 py-3">Basic verification</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-gray-300">Silver</td>
                        <td className="px-4 py-3">5,000 SECS</td>
                        <td className="px-4 py-3">Priority support, advanced challenges</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-yellow-400">Gold</td>
                        <td className="px-4 py-3">10,000 SECS</td>
                        <td className="px-4 py-3">Custom challenges, API access</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-blue-300">Platinum</td>
                        <td className="px-4 py-3">25,000 SECS</td>
                        <td className="px-4 py-3">Branded verification, analytics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">5.4 Reward Formula</h3>
                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm mb-6">
                  <pre className="text-gray-300 overflow-x-auto whitespace-pre">{`Reward = BaseReward × DifficultyMultiplier × StreakBonus × SpeedBonus

Where:
- BaseReward = 10 SECS per challenge
- DifficultyMultiplier = 1.0 (easy), 1.5 (medium), 2.0 (hard)
- StreakBonus = 1 + (0.1 × ConsecutiveSuccesses) [max 2.0x]
- SpeedBonus = 1.0 (slow), 1.2 (fast), 1.5 (very fast)`}</pre>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">5.5 Value Accrual &amp; Sustainability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <h4 className="font-bold text-white mb-2">Value Drivers</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Network Effects: More streamers attract more viewers</li>
                      <li>• Staking Lock-up: Reduces circulating supply</li>
                      <li>• Burn Mechanism: 1% of rewards burned</li>
                      <li>• Utility Expansion: New features require SECS</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <h4 className="font-bold text-white mb-2">Revenue Sources</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Platform integration fees (5% of premium)</li>
                      <li>• Brand verification services (enterprise pricing)</li>
                      <li>• API access fees (for platforms)</li>
                      <li>• NFT marketplace fees (verification badges)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Verification Protocol */}
              <section id="protocol" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">6. Verification Protocol</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">6.1 Proof-of-Human Protocol (PoHP)</h3>
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-red-500">
                    <h4 className="font-bold text-white mb-2">Phase 1: Initiation</h4>
                    <ul className="text-sm text-gray-300 space-y-1 ml-4">
                      <li>1. Streamer stakes minimum required SECS</li>
                      <li>2. Smart contract locks stake with 24-hour cooldown</li>
                      <li>3. Verification session activated</li>
                      <li>4. Initial trust score calculated or retrieved</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-orange-500">
                    <h4 className="font-bold text-white mb-2">Phase 2: Challenge Generation</h4>
                    <ul className="text-sm text-gray-300 space-y-1 ml-4">
                      <li>5. Protocol selects challenge type based on stream context, previous challenges, difficulty tier, and random seed</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-yellow-500">
                    <h4 className="font-bold text-white mb-2">Phase 3: Execution</h4>
                    <ul className="text-sm text-gray-300 space-y-1 ml-4">
                      <li>6. Challenge displayed to streamer via overlay/prompt</li>
                      <li>7. Streamer performs challenge on camera</li>
                      <li>8. Viewer participants submit verification</li>
                      <li>9. Timer enforces response deadline</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-green-500">
                    <h4 className="font-bold text-white mb-2">Phase 4: Validation</h4>
                    <ul className="text-sm text-gray-300 space-y-1 ml-4">
                      <li>10. Smart contract aggregates viewer responses</li>
                      <li>11. Consensus mechanism determines pass/fail</li>
                      <li>12. Rewards distributed to successful participants</li>
                      <li>13. Trust score updated</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-blue-500">
                    <h4 className="font-bold text-white mb-2">Phase 5: Completion</h4>
                    <ul className="text-sm text-gray-300 space-y-1 ml-4">
                      <li>14. Verification event recorded on-chain</li>
                      <li>15. Trust score badge updated</li>
                      <li>16. Stake released or held for next challenge</li>
                      <li>17. Evidence archived to IPFS</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">6.2 Challenge Design Principles</h3>
                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Category</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Example Challenge</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Why It Works</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Contextual</td>
                        <td className="px-4 py-3">&quot;Show me something red in your room&quot;</td>
                        <td className="px-4 py-3">Requires real environment</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Temporal</td>
                        <td className="px-4 py-3">&quot;What&apos;s the weather outside your window?&quot;</td>
                        <td className="px-4 py-3">Needs current, local info</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Creative</td>
                        <td className="px-4 py-3">&quot;Rhyme using: blockchain, stream, dream&quot;</td>
                        <td className="px-4 py-3">Requires improvisation</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3 font-semibold text-red-400">Physical</td>
                        <td className="px-4 py-3">&quot;Touch your nose with left thumb&quot;</td>
                        <td className="px-4 py-3">Specific, uncommon gesture</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-red-400">Cognitive</td>
                        <td className="px-4 py-3">&quot;Name 3 capital cities starting with M in 5s&quot;</td>
                        <td className="px-4 py-3">Timed pressure test</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">6.3 Consensus Mechanism</h3>
                <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Minimum <strong className="text-white">5 viewer responses</strong> required</li>
                    <li><strong className="text-white">70% agreement</strong> threshold for pass</li>
                    <li>Outlier responses flagged and investigated</li>
                    <li>Malicious validators lose reputation</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm">
                  <pre className="text-gray-300 overflow-x-auto whitespace-pre">{`Challenge: "Show something blue in your room"
Responses: [Yes, Yes, Yes, No, Yes] (4/5 = 80% pass)
Result: Challenge PASSED
Streamer: +10 trust points
Voters (Yes): +5 SECS each
Voter (No): -2 reputation (flagged for review)`}</pre>
                </div>
              </section>

              {/* Section 7: Trust Score System */}
              <section id="trust-score" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">7. Trust Score System</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">7.1 Score Calculation</h3>
                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm mb-6">
                  <pre className="text-gray-300 overflow-x-auto whitespace-pre">{`TrustScore = min(100, ∑ ComponentScores)

1. Challenge Success Rate (40 pts max)
   = (Successful / Total) × 40

2. Verification Frequency (20 pts max)
   = (Recent / Expected) × 20

3. Streak Bonus (25 pts max)
   = min(25, ConsecutiveDays × 2.5)

4. Community Endorsement (15 pts max)
   = (PositiveVotes / TotalVotes) × 15`}</pre>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">7.2 Trust Tiers</h3>
                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Score</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Tier</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">90-100</td>
                        <td className="px-4 py-3 font-semibold text-blue-300">Elite</td>
                        <td className="px-4 py-3">Highest credibility, verified consistently</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">75-89</td>
                        <td className="px-4 py-3 font-semibold text-yellow-400">High</td>
                        <td className="px-4 py-3">Strong track record, trusted</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">60-74</td>
                        <td className="px-4 py-3 font-semibold text-green-400">Good</td>
                        <td className="px-4 py-3">Established authenticity</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">40-59</td>
                        <td className="px-4 py-3 font-semibold text-orange-400">Moderate</td>
                        <td className="px-4 py-3">Building reputation</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">20-39</td>
                        <td className="px-4 py-3 font-semibold text-gray-400">Low</td>
                        <td className="px-4 py-3">Unproven or inconsistent</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">0-19</td>
                        <td className="px-4 py-3 font-semibold text-red-400">Risk</td>
                        <td className="px-4 py-3">Flagged, requires investigation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">7.3 Score Decay &amp; Penalties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="font-bold text-white mb-2">Decay Rules</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Weekly: 2% decay of current score</li>
                      <li>• No verification in 7 days: -10 points</li>
                      <li>• No verification in 30 days: 50% reduction</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <h4 className="font-bold text-white mb-2">Penalties</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Failed challenge: -5 points</li>
                      <li>• Streak broken: -10 points</li>
                      <li>• Community flag: -20 points</li>
                      <li>• Verified deepfake: Reset to 0</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">7.4 Public Verification API</h3>
                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm">
                  <pre className="text-gray-300 overflow-x-auto whitespace-pre">{`GET /api/v1/trust-score/{streamer_address}

Response:
{
  "address": "0x1234...",
  "score": 87,
  "tier": "High",
  "last_verified": "2026-02-12T10:30:00Z",
  "total_challenges": 142,
  "success_rate": 0.95,
  "streak_days": 12
}`}</pre>
                </div>
              </section>

              {/* Section 8: Use Cases */}
              <section id="use-cases" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">8. Use Cases</h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">8.1 Content Creator Verification</h3>
                    <p className="text-gray-300 mb-3">Independent streamer seeks sponsorship by staking 5,000 SECS (Silver tier), completing challenges, and building an 85 trust score.</p>
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                      <p className="text-sm text-gray-300"><strong className="text-green-400">ROI:</strong> $10K+ sponsorship secured. Cost: ~$500 in recoverable SECS staking. 20x+ return.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">8.2 Platform Content Moderation</h3>
                    <p className="text-gray-300 mb-3">Streaming platform integrates SECforSTREAM API, requires verification for promoted streams, and displays trust scores in the UI.</p>
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                      <p className="text-sm text-gray-300"><strong className="text-green-400">Value:</strong> 80% reduction in deepfake reports. $2M+ saved in moderation costs. Improved user retention.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">8.3 Brand Sponsorship Verification</h3>
                    <p className="text-gray-300 mb-3">Global brand requires 80+ trust score for partnerships, reviews on-chain verification history, and includes verification clause in contracts.</p>
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                      <p className="text-sm text-gray-300"><strong className="text-green-400">Value:</strong> Fraud losses eliminated. Brand safety protected. Authentic creator relationships.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">8.4 Viewer Trust Restoration</h3>
                    <p className="text-gray-300 mb-3">Viewer burned by deepfake scam now only watches verified streamers, participates in challenges, and earns SECS rewards.</p>
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                      <p className="text-sm text-gray-300"><strong className="text-green-400">Value:</strong> Trust restored via transparency. Engagement increases. Rewards for participation.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">8.5 Live Commerce Authenticity</h3>
                    <p className="text-gray-300 mb-3">Celebrity stakes 25,000 SECS (Platinum) for a product launch, completes elite verification, and viewers see a 95 trust score.</p>
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                      <p className="text-sm text-gray-300"><strong className="text-green-400">Value:</strong> $2M+ in authentic sales. Zero fraud chargebacks. Enhanced brand trust.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Roadmap */}
              <section id="roadmap" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">9. Roadmap</h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-white">Phase 1: Foundation (Q1 2026)</h3>
                      <span className="px-2 py-1 rounded text-xs font-bold bg-green-500/20 text-green-400">CURRENT</span>
                    </div>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Whitepaper publication</li>
                      <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Token launch on Solana</li>
                      <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Core smart contracts deployed</li>
                      <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Basic OBS plugin released</li>
                      <li className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Website and documentation</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-semibold text-white mb-3">Phase 2: Adoption (Q2 2026)</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>&#9744; Onboard 100+ streamers</li>
                      <li>&#9744; Partner with 1 major streaming platform</li>
                      <li>&#9744; Community governance activation</li>
                      <li>&#9744; Enhanced challenge library (50+ types)</li>
                      <li>&#9744; Mobile app (viewer side)</li>
                    </ul>
                    <div className="mt-4 p-3 rounded-lg bg-slate-900/50 text-sm text-gray-400">
                      <strong className="text-white">Milestones:</strong> 10K+ verification sessions • 100K+ challenges • $1M+ staked SECS
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-white mb-3">Phase 3: Expansion (Q3-Q4 2026)</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>&#9744; Multi-platform integration (Twitch, YouTube, etc.)</li>
                      <li>&#9744; Enterprise partnerships (3+ brands)</li>
                      <li>&#9744; Advanced analytics dashboard</li>
                      <li>&#9744; NFT verification badges</li>
                      <li>&#9744; Cross-chain bridge (Ethereum, Polygon)</li>
                    </ul>
                    <div className="mt-4 p-3 rounded-lg bg-slate-900/50 text-sm text-gray-400">
                      <strong className="text-white">Milestones:</strong> 1K+ verified streamers • 1M+ challenges • 50K+ validators • $10M+ TVL
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-white mb-3">Phase 4: Ecosystem (2027)</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>&#9744; Decentralized governance transition</li>
                      <li>&#9744; Open challenge marketplace</li>
                      <li>&#9744; Third-party verification apps</li>
                      <li>&#9744; Institutional verification services</li>
                      <li>&#9744; Global regulatory compliance framework</li>
                    </ul>
                    <div className="mt-4 p-3 rounded-lg bg-slate-900/50 text-sm text-gray-400">
                      <strong className="text-white">Long-term:</strong> Industry-standard protocol • 10K+ creators • 100+ platforms • Self-sustaining ecosystem
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Team & Governance */}
              <section id="team" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">10. Team &amp; Governance</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">10.1 Core Team</h3>
                <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 mb-6">
                  <p className="text-gray-300 mb-4"><strong className="text-white">SECFORIT</strong> is the parent company developing SECforSTREAM, bringing:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                      <div className="text-2xl font-bold text-red-400">10+</div>
                      <div className="text-xs text-gray-400">Years Cybersecurity</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                      <div className="text-2xl mb-1">🏢</div>
                      <div className="text-xs text-gray-400">Enterprise Clients</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                      <div className="text-2xl mb-1">🔒</div>
                      <div className="text-xs text-gray-400">Security-First Culture</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50 text-center">
                      <div className="text-2xl mb-1">&#10003;</div>
                      <div className="text-xs text-gray-400">Proven Track Record</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4 italic">Team member details disclosed post-launch for security</p>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">10.2 Governance Model</h3>
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-green-500">
                    <h4 className="font-bold text-white">Phase 1: Core Team (Current)</h4>
                    <p className="text-sm text-gray-300">Team makes protocol decisions with community feedback</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-yellow-500">
                    <h4 className="font-bold text-white">Phase 2: Hybrid Governance (Q3 2026)</h4>
                    <p className="text-sm text-gray-300">Core team + Community council, major decisions require community vote</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-red-500">
                    <h4 className="font-bold text-white">Phase 3: Full Decentralization (2027)</h4>
                    <p className="text-sm text-gray-300">Complete DAO transition, on-chain governance for all decisions</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">10.3 DAO Voting</h3>
                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Proposal Type</th>
                        <th className="px-4 py-3 text-white font-semibold border-b border-slate-700">Approval Required</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">Protocol Upgrades</td>
                        <td className="px-4 py-3">75%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">Treasury Allocation</td>
                        <td className="px-4 py-3">60%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">Parameter Adjustments</td>
                        <td className="px-4 py-3">50% + 1</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Challenge Type Addition</td>
                        <td className="px-4 py-3">Simple majority</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 11: Legal & Compliance */}
              <section id="legal" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">11. Legal &amp; Compliance</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-3">Token Classification</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• SECS is a <strong className="text-white">utility token</strong>, not a security</li>
                      <li>• Primary use: Access to verification services</li>
                      <li>• No investment contract or profit expectation</li>
                      <li>• Utility precedes any speculative value</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-3">Data Privacy (GDPR)</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Minimal personal data collection</li>
                      <li>• User consent required</li>
                      <li>• Right to deletion honored (off-chain)</li>
                      <li>• Pseudonymous addresses on-chain</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-3">AML Compliance</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Decentralized protocol (no custodial control)</li>
                      <li>• No KYC for basic participation</li>
                      <li>• Prepared to implement KYC if required</li>
                      <li>• Transaction monitoring for large stakes</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-semibold text-red-400 mb-3">Intellectual Property</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Protocol is <strong className="text-white">open-source</strong> (GPL-3.0)</li>
                      <li>• Trademark: &quot;SECforSTREAM&quot; protected</li>
                      <li>• No patents filed (anti-patent stance)</li>
                      <li>• CLA required for core protocol</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: Conclusion */}
              <section id="conclusion" className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">12. Conclusion</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  SECforSTREAM addresses a critical and growing problem in the digital content ecosystem: the inability to verify authenticity in an age of convincing AI-generated deepfakes. By combining economic incentives, technical innovation, community participation, and transparent metrics, we create a self-sustaining system where authenticity is verifiable, valuable, and incentivized.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">&#9201;</div>
                    <h4 className="font-semibold text-white mb-1">Market Timing</h4>
                    <p className="text-sm text-gray-400">The deepfake crisis is escalating rapidly. Solutions are needed now.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">&#9889;</div>
                    <h4 className="font-semibold text-white mb-1">Technical Advantage</h4>
                    <p className="text-sm text-gray-400">First to combine cryptoeconomics with human verification at scale.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">&#128200;</div>
                    <h4 className="font-semibold text-white mb-1">Economic Sustainability</h4>
                    <p className="text-sm text-gray-400">Multiple revenue streams and deflationary tokenomics.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="text-2xl mb-2">&#128101;</div>
                    <h4 className="font-semibold text-white mb-1">Network Effects</h4>
                    <p className="text-sm text-gray-400">Each verified streamer attracts more viewers, creating a positive feedback loop.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">Call to Action</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30 text-center">
                    <h4 className="font-bold text-white mb-2">For Creators</h4>
                    <p className="text-sm text-gray-300">Join as early verified streamers and build trust with your audience.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30 text-center">
                    <h4 className="font-bold text-white mb-2">For Brands</h4>
                    <p className="text-sm text-gray-300">Sponsor with confidence using verifiable trust scores.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30 text-center">
                    <h4 className="font-bold text-white mb-2">For Developers</h4>
                    <p className="text-sm text-gray-300">Build on our open protocol and extend the ecosystem.</p>
                  </div>
                </div>

                <div className="p-8 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border-2 border-red-500 text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    This is not just a token project.
                  </p>
                  <p className="text-lg text-gray-300">
                    It&apos;s infrastructure for the authentic internet.
                  </p>
                </div>
              </section>

              {/* Appendices */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-red-500/30 pb-3">Appendices</h2>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">A: API Endpoints</h3>
                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700 font-mono text-sm mb-6">
                  <p className="text-gray-400 mb-2">Base URL: https://api.secforstream.io/v1</p>
                  <pre className="text-gray-300 overflow-x-auto whitespace-pre">{`GET  /trust-score/{address}        - Query trust score
POST /challenge/generate            - Create challenge
POST /challenge/verify              - Validate response
GET  /streamer/{address}/history    - Verification history
GET  /stats/network                 - Network statistics`}</pre>
                </div>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">B: Challenge Library (Examples)</h3>
                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-left border border-slate-700 text-sm">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-3 py-2 text-white font-semibold border-b border-slate-700">ID</th>
                        <th className="px-3 py-2 text-white font-semibold border-b border-slate-700">Type</th>
                        <th className="px-3 py-2 text-white font-semibold border-b border-slate-700">Difficulty</th>
                        <th className="px-3 py-2 text-white font-semibold border-b border-slate-700">Example</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="px-3 py-2 text-red-400">C001</td>
                        <td className="px-3 py-2">Contextual</td>
                        <td className="px-3 py-2">Easy</td>
                        <td className="px-3 py-2">&quot;Show me something green in your room&quot;</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-3 py-2 text-red-400">C002</td>
                        <td className="px-3 py-2">Temporal</td>
                        <td className="px-3 py-2">Easy</td>
                        <td className="px-3 py-2">&quot;What time is it where you are?&quot;</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-3 py-2 text-red-400">C003</td>
                        <td className="px-3 py-2">Creative</td>
                        <td className="px-3 py-2">Medium</td>
                        <td className="px-3 py-2">&quot;Make up a sentence using: token, stream, verify&quot;</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-3 py-2 text-red-400">C004</td>
                        <td className="px-3 py-2">Physical</td>
                        <td className="px-3 py-2">Medium</td>
                        <td className="px-3 py-2">&quot;Touch your left ear with your right hand&quot;</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-3 py-2 text-red-400">C005</td>
                        <td className="px-3 py-2">Cognitive</td>
                        <td className="px-3 py-2">Hard</td>
                        <td className="px-3 py-2">&quot;Name 5 countries starting with S in 10 seconds&quot;</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-3 py-2 text-red-400">C006</td>
                        <td className="px-3 py-2">Environmental</td>
                        <td className="px-3 py-2">Medium</td>
                        <td className="px-3 py-2">&quot;What&apos;s the weather like outside?&quot;</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="px-3 py-2 text-red-400">C007</td>
                        <td className="px-3 py-2">Improvisation</td>
                        <td className="px-3 py-2">Hard</td>
                        <td className="px-3 py-2">&quot;Tell a 20-second story about a purple elephant&quot;</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-red-400">C008</td>
                        <td className="px-3 py-2">Multi-step</td>
                        <td className="px-3 py-2">Hard</td>
                        <td className="px-3 py-2">&quot;Stand up, spin around, then wave with your left hand&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-400 italic mb-6">Full library contains 100+ challenges across 12 categories</p>

                <h3 className="text-2xl font-semibold text-red-400 mb-3">C: Contact &amp; Resources</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <a href="https://stream.secforit.com" className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all text-center">
                    <div className="text-lg mb-1">🌐</div>
                    <div className="text-sm font-semibold text-white">Website</div>
                    <div className="text-xs text-gray-400">stream.secforit.com</div>
                  </a>
                  <a href="https://github.com/secforit/secforstream" className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all text-center">
                    <div className="text-lg mb-1">💻</div>
                    <div className="text-sm font-semibold text-white">GitHub</div>
                    <div className="text-xs text-gray-400">secforit/secforstream</div>
                  </a>
                  <a href="https://discord.gg/secforstream" className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all text-center">
                    <div className="text-lg mb-1">💬</div>
                    <div className="text-sm font-semibold text-white">Discord</div>
                    <div className="text-xs text-gray-400">discord.gg/secforstream</div>
                  </a>
                  <a href="https://twitter.com/SECforSTREAM" className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all text-center">
                    <div className="text-lg mb-1">🐦</div>
                    <div className="text-sm font-semibold text-white">X (Twitter)</div>
                    <div className="text-xs text-gray-400">@SECforSTREAM</div>
                  </a>
                  <a href="mailto:hello@secforit.com" className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all text-center">
                    <div className="text-lg mb-1">📧</div>
                    <div className="text-sm font-semibold text-white">Email</div>
                    <div className="text-xs text-gray-400">hello@secforit.com</div>
                  </a>
                  <a href="https://secforit.com" className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all text-center">
                    <div className="text-lg mb-1">🏢</div>
                    <div className="text-sm font-semibold text-white">SECFORIT</div>
                    <div className="text-xs text-gray-400">secforit.com</div>
                  </a>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="mt-12 p-6 rounded-xl bg-slate-900/50 border border-slate-700">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-gray-400">Disclaimer:</strong> This whitepaper is for informational purposes only. It does not constitute investment advice, financial advice, trading advice, or any other type of advice. SECS tokens are utility tokens for accessing the SECforSTREAM protocol. There is no guarantee of profit or token value. Cryptocurrency investments carry significant risk. Please consult with qualified professionals before participating.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <span>Version: 1.0</span>
                  <span>Last Updated: February 12, 2026</span>
                  <span>License: Creative Commons BY-NC-ND 4.0</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">&copy; 2026 SECFORIT. All rights reserved.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Related Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
