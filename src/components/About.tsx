import { aboutContent } from '../data/content'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import StatCard from './StatCard'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-8 bg-void">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader label={aboutContent.sectionLabel} title={aboutContent.sectionTitle} />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <Reveal delay={80} direction="left">
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
          </Reveal>

          {/* Stats */}
          <Reveal delay={160} direction="right">
            <div className="grid grid-cols-2 auto-rows-fr gap-4">
              {aboutContent.stats.map((stat, i) => (
                <StatCard key={stat.label} column={i % 2 === 0 ? 'left' : 'right'} {...stat} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
