export default function Solution() {
  const steps = [
    {
      number: '01',
      title: 'Stake',
      description: 'Streamers stake tokens to initiate verification',
      icon: '🔒',
      color: 'from-red-600 to-rose-600'
    },
    {
      number: '02',
      title: 'Challenge',
      description: 'Run real-time challenges that AI can\'t fake',
      icon: '⚡',
      color: 'from-rose-600 to-orange-600'
    },
    {
      number: '03',
      title: 'Verify',
      description: 'Build trust score and earn community confidence',
      icon: '✓',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const challengeExamples = [
    '"Show me something red in your room"',
    '"What\'s the weather outside your window?"',
    '"Make up a rhyme with these 3 words"'
  ]

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            How SECforSTREAM Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three simple steps to verify authenticity and build trust
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-red-600/50 to-transparent transform translate-x-0" />
              )}

              <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-red-600/50 transition-all duration-300 group">
                {/* Step Number */}
                <div className={`text-6xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-30 group-hover:opacity-50 transition-opacity`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Challenge Examples */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-2 text-sm text-gray-400 font-mono">Challenge Examples</span>
            </div>

            <div className="space-y-4 font-mono">
              {challengeExamples.map((challenge, index) => (
                <div key={index} className="group flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                  <span className="text-red-500">→</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{challenge}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-red-600/10 border border-red-600/20">
              <p className="text-sm text-gray-400">
                <span className="text-red-400 font-semibold">💡 Pro Tip:</span> Challenges require context, creativity, or real-time actions that AI can't fake
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
