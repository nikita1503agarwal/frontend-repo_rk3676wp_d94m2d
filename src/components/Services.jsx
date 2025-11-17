const services = [
  {
    title: 'Brand Identity',
    desc: 'Naming, messaging, and visual systems that make you unmistakable.',
    accent: 'var(--pink)'
  },
  {
    title: 'Web Design + Dev',
    desc: 'Conversion-first websites built with performance, SEO, and accessibility in mind.',
    accent: 'var(--orange)'
  },
  {
    title: 'Product & UI',
    desc: 'Interfaces that are simple, scalable, and ship-ready for your roadmap.',
    accent: 'var(--teal)'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What we do</h2>
          <p className="text-white/70 max-w-xl">We partner with founders and marketing teams to define the narrative, design the experience, and build the system that fuels growth.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="absolute inset-x-0 -top-px h-1 rounded-t-2xl" style={{ background: s.accent }} />
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-white/70">{s.desc}</p>
              <div className="mt-6 inline-flex items-center text-sm font-medium" style={{ color: s.accent }}>
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
