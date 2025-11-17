import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Start a project</h1>
            <p className="mt-4 text-white/70">Tell us about your goals and timeline. We’ll get back within one business day.</p>

            <form className="mt-8 grid gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2" style={{
                  boxShadow: 'none',
                }} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Company</label>
                <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2" placeholder="Company name" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">What are you building?</label>
                <textarea rows={5} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2" placeholder="A few lines about the project" />
              </div>

              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-black" style={{ background: 'var(--yellow)' }}>
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
