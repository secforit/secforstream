export default function HowItWorks() {
  const userTypes = [
    {
      title: 'For Streamers',
      icon: '🎮',
      color: 'from-red-600 to-rose-600',
      benefits: [
        'Stake tokens to prove authenticity',
        'Run challenges during stream',
        'Build trust score',
        'Attract sponsors with verified status'
      ]
    },
    {
      title: 'For Viewers',
      icon: '👥',
      color: 'from-rose-600 to-orange-600',
      benefits: [
        'Participate in challenges for free',
        'Earn tokens for correct answers',
        'Enjoy streak bonuses',
        'Support authentic creators'
      ]
    },
    {
      title: 'For Brands',
      icon: '🏢',
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Check trust scores before sponsorship',
        'Reduce fraud risk',
        'Partner with verified creators',
        'Protect brand reputation'
      ]
    }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Built for Everyone
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            SECforSTREAM creates value for every participant in the ecosystem
          </p>
        </div>

        {/* User Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center text-3xl`}>
                  {type.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6">{type.title}</h3>

                {/* Benefits */}
                <ul className="space-y-3">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br ${type.color} rounded-full p-0.5`} fill="white" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600/20 to-rose-600/20 border border-red-600/30">
            <span className="text-gray-300">Everyone wins when authenticity is verified</span>
            <span className="text-2xl">🎯</span>
          </div>
        </div>
      </div>
    </section>
  )
}
