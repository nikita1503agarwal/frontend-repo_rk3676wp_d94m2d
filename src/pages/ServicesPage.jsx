import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: 'Brand Identity',
      desc: 'Naming, visual systems, and guidelines that scale across product and marketing.',
      color: 'var(--pink)'
    },
    {
      title: 'Product UX/UI',
      desc: 'Research-driven workflows, component libraries, and high-conversion interfaces.',
      color: 'var(--orange)'
    },
    {
      title: 'Web Design',
      desc: 'Marketing sites and design systems with speed, accessibility, and SEO in mind.',
      color: 'var(--yellow)'
    },
    {
      title: 'Motion & 3D',
      desc: 'Spline and After Effects to bring products to life with purposeful motion.',
      color: 'var(--teal)'
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--pink)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--orange)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--yellow)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--green)' }} />
              <span className="inline-flex h-2 w-8 rounded-full" style={{ background: 'var(--teal)' }} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Services</h1>
            <p className="mt-4 max-w-2xl text-white/70">Senior design partners across brand, product, and web. Clear process, measurable outcomes, and delivery built for speed.</p>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
                <span className="inline-block h-1.5 w-10 rounded-full mb-4" style={{ background: s.color }} />
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
                <ul className="mt-4 list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li>Discovery & research</li>
                  <li>Design sprints</li>
                  <li>Systems & documentation</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#0b0b0b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Engagement models</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                { name: 'Sprint', copy: '1–2 week focused push to unlock a specific outcome.' , color: 'var(--yellow)'},
                { name: 'Retainer', copy: 'Ongoing partnership embedded with your team.' , color: 'var(--orange)'},
                { name: 'Project', copy: 'Clear scope, timeline, and deliverables for end-to-end work.' , color: 'var(--teal)'},
              ].map(card => (
                <div key={card.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="inline-block h-1.5 w-8 rounded-full mb-4" style={{ background: card.color }} />
                  <h3 className="text-lg font-semibold">{card.name}</h3>
                  <p className="mt-2 text-white/70">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
