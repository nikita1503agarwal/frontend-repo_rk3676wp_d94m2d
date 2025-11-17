import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white/90" style={{ background: 'linear-gradient(90deg, var(--pink), var(--orange))' }}>
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            Brand, Web & Product Design Studio
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            Design that moves businesses forward
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/85 max-w-2xl">
            We craft clear brands and fast, accessible websites for teams who want results. Strategy-first, conversion-focused, and built to scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-black shadow-lg hover:shadow-xl transition-shadow" style={{ background: 'var(--yellow)' }}>
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white/90 hover:text-white border border-white/30">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
