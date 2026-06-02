import { chronicleData } from '../data/content'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

export default function Chronicle() {
  return (
    <section id="chronicle" className="relative py-28 px-8 bg-void">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeader label="// THE ARC" title="The Chronicle" />
        </Reveal>

        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {chronicleData.map((act, i) => (
              <Reveal key={act.label} delay={i * 120}>
                <div className="md:pl-12 relative">
                  {/* Spine dot */}
                  <div className="absolute -left-[4px] top-[6px] w-[14px] h-[14px] rounded-full border border-gold/60 bg-void hidden md:flex items-center justify-center">
                    <div className="w-[5px] h-[5px] rounded-full bg-gold/80" />
                  </div>

                  {/* Act card */}
                  <div className="border border-gold/12 bg-surface/60 p-8 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,162,39,0.07)] transition-all duration-500 group">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
                      <div className="flex items-baseline gap-4">
                        <span className="font-cinzel text-xs tracking-[0.35em] text-gold/50 uppercase">
                          {`ACT ${ROMAN[i]}`}
                        </span>
                        <h3 className="font-cinzel text-xl md:text-2xl font-semibold text-parchment tracking-wide">
                          {act.label}
                        </h3>
                      </div>
                      <span className="font-mono text-xs tracking-widest text-gray-600">
                        {act.period}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-gold/25 to-transparent mb-6" />

                    {/* Narrative */}
                    <p className="font-sans text-base text-parchment/65 leading-relaxed mb-7">
                      {act.narrative}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-7">
                      {act.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[10px] tracking-widest uppercase text-cyan/70 border border-cyan/20 px-3 py-1 group-hover:border-cyan/35 group-hover:text-cyan/90 transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-px bg-gold/40 shrink-0" />
                      <p className="font-cinzel text-xs tracking-[0.15em] text-gold/70 italic">
                        {act.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
