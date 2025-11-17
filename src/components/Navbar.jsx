import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <span className="h-3 w-3 rounded-full" style={{ background: 'var(--pink)' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: 'var(--orange)' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: 'var(--yellow)' }} />
            <span className="font-semibold tracking-tight text-white group-hover:opacity-90">Guiding Pixel</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-2 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
              Start a Project
            </Link>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 bg-white/10 text-white hover:bg-white/20">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
