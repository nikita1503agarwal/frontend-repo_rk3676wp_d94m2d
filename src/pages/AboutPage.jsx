import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--pink)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--orange)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--yellow)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--green)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--teal)' }} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About</h1>
            <p className="mt-4 max-w-2xl text-white/70">We’re a senior studio focused on clarity and outcomes. We partner with founders and product teams to simplify, differentiate, and ship fast.</p>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {[
              { stat: '50+', label: 'Brands launched', color: 'var(--yellow)' },
              { stat: '38%', label: 'Avg. conversion lift', color: 'var(--pink)' },
              { stat: '95', label: 'Accessibility score', color: 'var(--teal)' },
            ].map(card => (
              <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-extrabold" style={{ color: card.color }}>{card.stat}</p>
                <p className="text-white/70">{card.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#0b0b0b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold">How we work</h2>
              <p className="mt-3 text-white/70">Lightweight process, tight feedback loops, and a bias toward shipping. We map outcomes, move through options quickly, and document decisions to scale.</p>
            </div>
            <ul className="space-y-4">
              {[
                'Discovery → Strategy → Design → Ship',
                'Async-first with weekly touchpoints',
                'Design systems and documentation as we go',
                'Handoffs built for engineering speed',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full" style={{ background: 'var(--green)' }} />
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
