/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#08080d',
        surface: '#111118',
        raised: '#1a1a24',
        gold: '#c9a227',
        // Token names preserved for source-code compatibility — values updated.
        crimson: '#e0e7ef',     // was #8b1a1a — now "diamond" pearl-white (Taurus birthstone)
        cyan: '#7dd3fc',        // was #06b6d4 — now light blue
        maroon: '#5d2e3e',      // NEW — Harrow oxblood. Ceremonial. One per surface only.
        parchment: '#e8e0cc',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        glitch: {
          '0%, 4%, 100%': { textShadow: 'none', transform: 'none' },
          // updated to match new accent values
          '2%': { textShadow: '-2px 0 #7dd3fc, 2px 0 #e0e7ef', transform: 'skewX(-1deg)' },
          '96%, 99%': { textShadow: 'none', transform: 'none' },
          '98%': { textShadow: '2px 0 #c9a227, -1px 0 #7dd3fc', transform: 'skewX(0.5deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        glitch: 'glitch 6s infinite',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
      },
      boxShadow: {
        'glow-gold-soft':   '0 0 20px rgba(201,162,39,0.20)',
        'glow-gold-medium': '0 0 24px rgba(201,162,39,0.12)',
        'glow-gold-card':   '0 8px 32px rgba(201,162,39,0.15)',
        'glow-maroon-soft': '0 0 20px rgba(93,46,62,0.35)',
      },
    },
  },
  plugins: [],
}
