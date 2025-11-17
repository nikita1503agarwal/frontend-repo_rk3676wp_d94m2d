import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'Northstar Finance',
    desc: 'Repositioned fintech brand and redesigned onboarding to lift conversions by 32%.',
    tag: 'Fintech',
    color: 'var(--pink)'
  },
  {
    title: 'Hearth AI',
    desc: 'Product design system and website for a human-centered AI assistant platform.',
    tag: 'AI',
    color: 'var(--orange)'
  },
  {
    title: 'Alpine Outdoors',
    desc: 'Ecommerce redesign with performance-first architecture and headless CMS.',
    tag: 'Ecommerce',
    color: 'var(--teal)'
  },
  {
    title: 'Motion Lab',
    desc: 'Motion-led marketing site with 3D Spline scenes and lightweight interactions.',
    tag: 'Web',
    color: 'var(--yellow)'
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--pink)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--orange)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--yellow)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--green)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--teal)' }} />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Selected Work</h1>
            <p className="mt-4 max-w-2xl text-white/70">A few projects that show how we blend strategy, craft, and speed to move metrics.</p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {projects.map(p => (
                <article key={p.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
                  <div className="aspect-video bg-white/10" />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-white/50">{p.tag}</span>
                      <span className="inline-block h-1.5 w-8 rounded-full" style={{ background: p.color }} />
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-white/70">{p.desc}</p>
                    <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-white/80 hover:text-white">View case study →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
