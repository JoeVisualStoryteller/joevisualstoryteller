interface SectionHeaderProps {
  label: string
  title: string
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <p className="font-mono text-xs tracking-[0.25em] text-cyan uppercase mb-3">{label}</p>
      <div className="flex items-center gap-5 justify-center mb-3">
        <div className="flex-1 h-px bg-gradient-to-l from-gold to-transparent max-w-[200px]" />
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="3" y="3" width="10" height="10" fill="#c9a227" transform="rotate(45 8 8)" />
        </svg>
        <div className="flex-1 h-px bg-gradient-to-r from-gold to-transparent max-w-[200px]" />
      </div>
      <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-parchment tracking-widest uppercase">
        {title}
      </h2>
    </div>
  )
}
