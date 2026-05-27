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
        crimson: '#8b1a1a',
        cyan: '#06b6d4',
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
          '2%': { textShadow: '-2px 0 #06b6d4, 2px 0 #8b1a1a', transform: 'skewX(-1deg)' },
          '96%, 99%': { textShadow: 'none', transform: 'none' },
          '98%': { textShadow: '2px 0 #c9a227, -1px 0 #06b6d4', transform: 'skewX(0.5deg)' },
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
    },
  },
  plugins: [],
}
