import { useState, useEffect } from 'react'

const CHAPTERS = [
  { id: 'home', label: 'Prologue' },
  { id: 'about', label: 'The Operator' },
  { id: 'chronicle', label: 'The Chronicle' },
  { id: 'skills', label: 'Arsenal' },
]

export default function ChapterProgress() {
  const [active, setActive] = useState('home')
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const pct = scrollTop / (scrollHeight - clientHeight)
      setScrollPct(isNaN(pct) ? 0 : Math.min(1, Math.max(0, pct)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const trackHeight = (CHAPTERS.length - 1) * 52

  return (
    <nav
      aria-label="Chapter progress"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="relative flex flex-col" style={{ gap: '52px' }}>
        {/* Track */}
        <div
          className="absolute left-[5px] top-[5px] w-px bg-gold/15 pointer-events-none"
          style={{ height: `${trackHeight}px` }}
        />
        {/* Fill */}
        <div
          className="absolute left-[5px] top-[5px] w-px bg-gold/50 pointer-events-none transition-all duration-150"
          style={{ height: `${scrollPct * trackHeight}px` }}
        />

        {CHAPTERS.map(({ id, label }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-3 group"
              aria-label={`Go to ${label}`}
            >
              <div
                className={`w-[11px] h-[11px] rounded-full border transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-gold border-gold shadow-[0_0_10px_rgba(201,162,39,0.7)]'
                    : 'bg-transparent border-gold/30 group-hover:border-gold/60'
                }`}
              />
              <span
                className={`font-mono text-[9px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'text-gold opacity-100 translate-x-0'
                    : 'text-gold/0 -translate-x-1 group-hover:text-gold/40 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
