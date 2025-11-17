import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white/70">
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Guiding Pixel</h4>
            <p className="text-sm">Strategy, brand, and web for teams who want design that performs.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Services</h5>
            <ul className="space-y-2 text-sm">
              <li>Brand Identity</li>
              <li>Web Design & Development</li>
              <li>Product & UI</li>
              <li>Design Systems</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/work" className="hover:text-white">Work</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Get in touch</h5>
            <p className="text-sm">hello@guidingpixel.com</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--pink)' }} />
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--orange)' }} />
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--yellow)' }} />
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--green)' }} />
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--teal)' }} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Guiding Pixel. All rights reserved.</p>
          <p>Built with care and a little bit of magic.</p>
        </div>
      </div>
    </footer>
  )
}
