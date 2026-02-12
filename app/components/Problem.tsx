export default function Problem() {
  const stats = [
    {
      icon: '💰',
      value: '$2B+',
      label: 'Lost to deepfake fraud in 2025'
    },
    {
      icon: '🎙️',
      value: 'Real-time',
      label: 'AI can clone voices instantly'
    },
    {
      icon: '👁️',
      value: 'Zero Trust',
      label: "Viewers can't trust what they see"
    },
    {
      icon: '🤝',
      value: 'Destroyed',
      label: 'Brand deals ruined by impersonation'
    }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            The Deepfake Crisis
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            In 2026, deepfakes are indistinguishable from reality. Content creators need a way to prove authenticity. Viewers need a way to trust.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="mt-12 p-6 rounded-xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">The Trust Problem Is Accelerating</h3>
              <p className="text-gray-400">
                AI-powered deepfakes are now cheaper, faster, and more convincing than ever. Without verification, no one can tell what's real anymore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
