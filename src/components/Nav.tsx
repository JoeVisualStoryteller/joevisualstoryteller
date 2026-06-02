import { useEffect, useState } from 'react'
import { navSections } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20
      if (next !== scrolled) setScrolled(next)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gold/30 transition-colors duration-300 ${
        scrolled ? 'bg-void/95 backdrop-blur-md' : 'bg-void/60 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-10 h-16">
        <a
          href="#home"
          className="font-cinzel text-xl font-bold text-gold tracking-widest hover:text-parchment transition-colors"
        >
          JHD
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6 lg:gap-10">
          {navSections.map(({ id, navLabel }) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono text-xs tracking-widest uppercase text-gray-500 hover:text-gold transition-colors"
            >
              {navLabel}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-gold"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-current transition-all duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col border-t border-gold/20 bg-void/95 backdrop-blur-md">
          {navSections.map(({ id, navLabel }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-gold px-5 py-4 border-b border-gold/10 last:border-b-0 transition-colors"
            >
              {navLabel}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
