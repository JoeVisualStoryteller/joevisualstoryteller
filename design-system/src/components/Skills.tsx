import { skillsData } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-8 bg-[#0a0a10]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// LOADOUT" title="Arsenal" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="bg-surface border border-gold/15 border-t-2 border-t-gold p-6 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,162,39,0.15)] transition-all"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase mb-4">
                ▸ {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-sm text-parchment/80 flex items-center gap-2 pb-2 border-b border-white/[0.04] last:border-0 last:pb-0"
                  >
                    <span className="text-crimson text-[0.5rem] shrink-0">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
