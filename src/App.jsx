import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <section id="about" className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About our studio</h2>
              <p className="mt-4 text-white/70">We’re a small senior team focused on outcomes. We blend research, strategy, and craft to help brands simplify their story and products streamline their UX. No fluff, just effective design.</p>
              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--pink)' }} />
                <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--orange)' }} />
                <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--yellow)' }} />
                <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--green)' }} />
                <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--teal)' }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl font-extrabold" style={{ color: 'var(--yellow)' }}>50+</p>
                <p className="text-white/70">Brands launched</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl font-extrabold" style={{ color: 'var(--pink)' }}>38%</p>
                <p className="text-white/70">Avg. conversion lift</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl font-extrabold" style={{ color: 'var(--teal)' }}>95</p>
                <p className="text-white/70">Accessibility score</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl font-extrabold" style={{ color: 'var(--orange)' }}>3x</p>
                <p className="text-white/70">Faster page speed</p>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
