import { useEffect, useState } from 'react'
import { navSections } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = navSections.slice(1)

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="site-nav__inner shell">
        <a href="#home" className="brand" aria-label="Joseph H. Dunn II, home">
          <span className="brand__mark">JHD</span>
          <span className="brand__descriptor">Staff Engineer / Operations</span>
        </a>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <a className="site-nav__cta" href="mailto:jdunn0423@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>{label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href="mailto:jdunn0423@gmail.com" onClick={() => setMenuOpen(false)}>
            <span>Let’s talk</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      )}
    </header>
  )
}
