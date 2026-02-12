export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-rose-600/10 to-orange-600/10" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-red-600/10 to-rose-600/10 border border-red-600/20">
          <span className="text-sm font-semibold text-gray-200">By SECFORIT</span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-red-600/10 to-rose-600/10 border border-red-600/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Building in Public • Live Now</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent leading-tight">
          SECforSTREAM<br />
          <span className="text-4xl md:text-5xl">Prove You're Real. Verify Your Stream.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Fight deepfakes with real-time verification challenges. Streamers stake tokens, viewers participate, everyone proves they're human.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#discord"
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Join Discord</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
          </a>

          <a
            href="/WHITEPAPER.md"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-red-600/50 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300"
          >
            View Whitepaper
          </a>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700">
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-300">
            <span className="font-semibold text-white">50+ challenges</span> completed in real-time
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
