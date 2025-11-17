export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something that performs</h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">Tell us your goals. We’ll respond with a plan, timeline, and pricing crafted to your roadmap.</p>
        <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
          <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Work email" />
          <input className="w-full md:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Company" />
          <textarea rows={4} className="w-full md:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Project details"></textarea>
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button type="button" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-black" style={{ background: 'var(--yellow)' }}>
              Send request
            </button>
            <p className="text-white/60 text-sm">Or email us at <a className="underline hover:text-white" href="mailto:hello@guidingpixel.com">hello@guidingpixel.com</a></p>
          </div>
        </form>
      </div>
    </section>
  )
}
