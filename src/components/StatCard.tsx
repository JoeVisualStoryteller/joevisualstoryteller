import { useEffect, useRef, useState } from 'react'
import type { StatDetailItem } from '../data/content'

interface StatCardProps {
  value: string
  label: string
  detailLabel: string
  detail: StatDetailItem[]
  /** Grid column — drives tooltip anchoring so it never runs off-screen on mobile */
  column: 'left' | 'right'
}

/** Hover dwell (ms) before the dossier reveals. Within the 0.5–1s spec. */
const HOVER_DELAY = 600

export default function StatCard({ value, label, detailLabel, detail, column }: StatCardProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const tooltipId = `stat-${label.replace(/\s+/g, '-').toLowerCase()}`
  const hasDetail = detail.length > 0

  // Mobile: anchor to the box's outer edge and grow inward so the dossier
  // stays on-screen. Desktop (sm+): there's room, so center it over the box.
  const alignClasses =
    column === 'left'
      ? 'left-0 sm:left-1/2 sm:-translate-x-1/2'
      : 'right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2'

  const clearTimer = () => {
    if (timerRef.current !== undefined) {
      clearTimeout(timerRef.current)
      timerRef.current = undefined
    }
  }

  // Pointer hover → reveal after the dwell delay.
  const handleEnter = () => {
    clearTimer()
    timerRef.current = setTimeout(() => setOpen(true), HOVER_DELAY)
  }

  // Leave / blur → dismiss immediately.
  const handleClose = () => {
    clearTimer()
    setOpen(false)
  }

  // Keyboard focus and touch-tap (which focuses) reveal at once — no dwell.
  const handleOpenNow = () => {
    clearTimer()
    setOpen(true)
  }

  useEffect(() => clearTimer, [])

  // Dismiss with Escape while the dossier is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div
      className="relative h-full"
      onMouseEnter={hasDetail ? handleEnter : undefined}
      onMouseLeave={hasDetail ? handleClose : undefined}
    >
      <div
        role={hasDetail ? 'button' : undefined}
        tabIndex={hasDetail ? 0 : undefined}
        aria-expanded={hasDetail ? open : undefined}
        aria-describedby={open ? tooltipId : undefined}
        onFocus={hasDetail ? handleOpenNow : undefined}
        onBlur={hasDetail ? handleClose : undefined}
        className="flex h-full flex-col items-center justify-center bg-surface border border-gold/20 p-6 text-center select-none transition-all duration-300
                   hover:border-gold/60 hover:shadow-[0_0_24px_rgba(201,162,39,0.12)]
                   focus:outline-none focus-visible:border-gold/60 focus-visible:shadow-[0_0_24px_rgba(201,162,39,0.12)]"
      >
        <div className="font-cinzel text-4xl font-bold text-gold leading-none mb-2">{value}</div>
        <div className="font-mono text-xs tracking-widest text-gray-500 uppercase">{label}</div>
      </div>

      {open && hasDetail && (
        <>
          <div
            id={tooltipId}
            role="tooltip"
            className={`pointer-events-none absolute bottom-full z-30 mb-3 w-64 max-w-[calc(100vw-3rem)] ${alignClasses}`}
          >
            <div className="animate-tooltip-in relative overflow-hidden border border-gold/50 bg-void p-4 text-left shadow-[0_0_24px_rgba(201,162,39,0.18)]">
              {/* Cyber scanline texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(125,211,252,0.6)_3px)]"
              />

              <div className="relative font-mono text-[10px] tracking-[0.2em] text-cyan/80 uppercase mb-2">
                {detailLabel}
              </div>
              <div className="relative mb-3 h-px w-full bg-gradient-to-r from-gold/40 to-transparent" />

              <ul className="relative space-y-2">
                {detail.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-x-3">
                    <span className="flex items-baseline gap-2 font-sans text-[13px] leading-snug text-parchment/90">
                      <span className="text-[10px] leading-none text-gold/70">▸</span>
                      {item.name}
                    </span>
                    {item.meta && (
                      <span className="font-mono text-[10px] tracking-wider text-cyan/70 whitespace-nowrap">
                        {item.meta}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Caret — always centered on the box, pointing down to it */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-[6px] h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gold/50 bg-void"
          />
        </>
      )}
    </div>
  )
}
