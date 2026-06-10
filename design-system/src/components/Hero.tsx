import { heroContent } from '../data/content'

type RunePos = 'tl' | 'tr' | 'bl' | 'br'

function CornerRune({ pos }: { pos: RunePos }) {
  const isRight = pos.includes('r')
  const isBottom = pos.includes('b')
  return (
    <div
      className="absolute opacity-[0.18] w-16 h-16 pointer-events-none"
      style={{
        [isBottom ? 'bottom' : 'top']: '1.5rem',
        [isRight ? 'right' : 'left']: '1.5rem',
        transform:
          isRight && isBottom
            ? 'rotate(180deg)'
            : isRight
            ? 'scaleX(-1)'
            : isBottom
            ? 'scaleY(-1)'
            : 'none',
      }}
    >
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z" fill="#c9a227" />
        <path d="M10 10 L20 10 L20 14 L14 14 L14 20 L10 20 Z" fill="#c9a227" />
        <circle cx="32" cy="32" r="4" stroke="#c9a227" strokeWidth="1" />
        <path
          d="M32 24 L32 16 M32 40 L32 48 M24 32 L16 32 M40 32 L48 32"
          stroke="#c9a227"
          strokeWidth="0.8"
        />
        <path
          d="M28 28 L22 22 M36 36 L42 42 M36 28 L42 22 M28 36 L22 42"
          stroke="#c9a227"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
    >
      {/* Circuit grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)',
            'linear-gradient(rgba(6,182,212,0.025) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(6,182,212,0.025) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
        }}
      />
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)',
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 35%, #08080d 100%)',
        }}
      />

      <CornerRune pos="tl" />
      <CornerRune pos="tr" />
      <CornerRune pos="bl" />
      <CornerRune pos="br" />

      <div className="relative z-10 text-center px-8 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.3em] text-cyan uppercase mb-6">
          {heroContent.systemLabel}
        </p>

        <h1 className="font-cinzel font-bold text-5xl md:text-7xl text-parchment tracking-wider uppercase mb-4 animate-glitch leading-tight">
          {heroContent.name}
        </h1>

        <div className="w-40 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <p className="font-mono text-xs md:text-sm tracking-[0.15em] text-gray-500 uppercase mb-8">
          {heroContent.subtitle}
        </p>

        <p className="font-sans text-base text-gray-600 max-w-md mx-auto mb-12 leading-relaxed">
          {heroContent.tagline}
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          <a
            href="#about"
            className="font-mono text-xs tracking-widest uppercase text-gold border border-gold px-8 py-3 hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(201,162,39,0.2)] transition-all"
          >
            View Profile
          </a>
          <a
            href="#skills"
            className="font-mono text-xs tracking-widest uppercase text-gray-600 border border-transparent px-8 py-3 hover:text-parchment transition-colors"
          >
            Arsenal →
          </a>
        </div>
      </div>
    </section>
  )
}
