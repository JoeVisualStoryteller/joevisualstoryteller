import { useState, useEffect } from 'react'
import { navSections } from '../data/content'

const DOT_SPACING = 52
const ACTIVE_ZONE_INSET = 40 // % of viewport height trimmed from top+bottom to define "active" band
const ACTIVE_ZONE_MARGIN = `-${ACTIVE_ZONE_INSET}% 0px -${ACTIVE_ZONE_INSET}% 0px`

export default function ChapterProgress() {
  const [active, setActive] = useState('home')
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const pct = scrollTop / (scrollHeight - clientHeight)
      const clamped = isNaN(pct) ? 0 : Math.round(Math.min(1, Math.max(0, pct)) * 1000) / 1000
      setScrollPct((prev) => (clamped === prev ? prev : clamped))
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
      { rootMargin: ACTIVE_ZONE_MARGIN }
    )
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const trackHeight = (navSections.length - 1) * DOT_SPACING

  return (
    <nav
      aria-label="Chapter progress"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="relative flex flex-col" style={{ gap: `${DOT_SPACING}px` }}>
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

        {navSections.map(({ id, chapterLabel }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-3 group"
              aria-label={`Go to ${chapterLabel}`}
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
                {chapterLabel}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
