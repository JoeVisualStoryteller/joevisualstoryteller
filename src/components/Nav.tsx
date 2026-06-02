import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Chronicle', href: '#chronicle' },
  { label: 'Skills', href: '#skills' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 border-b border-gold/30 transition-colors duration-300 ${
        scrolled ? 'bg-void/95 backdrop-blur-md' : 'bg-void/60 backdrop-blur-sm'
      }`}
    >
      <a
        href="#home"
        className="font-cinzel text-xl font-bold text-gold tracking-widest hover:text-parchment transition-colors"
      >
        JHD
      </a>
      <div className="flex gap-10">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="font-mono text-xs tracking-widest uppercase text-gray-500 hover:text-gold transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
