const projects = [
  {
    tag: 'SaaS',
    title: 'Revenue intelligence platform',
    summary: 'Repositioned and redesigned product marketing site to lift trials by 38%.',
    color: 'var(--orange)'
  },
  {
    tag: 'Fintech',
    title: 'Consumer payments brand',
    summary: 'Identity system and web replatform driving 2x conversion year over year.',
    color: 'var(--teal)'
  },
  {
    tag: 'Healthcare',
    title: 'Telemedicine product',
    summary: 'Design system and product UX to reduce onboarding time by 55%.',
    color: 'var(--pink)'
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Selected work</h2>
          <a href="#contact" className="text-sm font-semibold text-white/70 hover:text-white">View all →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors">
              <div className="aspect-video bg-black/60" />
              <div className="p-6">
                <span className="text-xs font-bold" style={{ color: p.color }}>{p.tag}</span>
                <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
