import { aboutContent } from '../data/content'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-8 bg-void">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader label={aboutContent.sectionLabel} title={aboutContent.sectionTitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-crimson uppercase mb-4">
              {aboutContent.fileLabel}
            </p>
            {aboutContent.bio.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base text-parchment/70 leading-relaxed mb-5 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {aboutContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-gold/20 p-6 text-center hover:border-gold/60 hover:shadow-[0_0_24px_rgba(201,162,39,0.12)] transition-all"
              >
                <div className="font-cinzel text-4xl font-bold text-gold leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
