import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import TrustScore from './components/TrustScore'
import TokenEconomics from './components/TokenEconomics'
import Documentation from './components/Documentation'
import BuildingPublic from './components/BuildingPublic'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <TrustScore />
      <TokenEconomics />
      <Documentation />
      <BuildingPublic />
      <CTA />
      <Footer />
    </main>
  )
}
