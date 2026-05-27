// CornerRune.jsx — the signature decoration; 4 corners of any full-bleed surface.
function CornerRune({ pos = 'tl' }) {
  const cls = `hero__rune ${pos}`;
  return (
    <svg className={cls} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z" fill="#c9a227" />
      <path d="M10 10 L20 10 L20 14 L14 14 L14 20 L10 20 Z" fill="#c9a227" />
      <circle cx="32" cy="32" r="4" stroke="#c9a227" strokeWidth="1" />
      <path d="M32 24 L32 16 M32 40 L32 48 M24 32 L16 32 M40 32 L48 32" stroke="#c9a227" strokeWidth="0.8" />
      <path d="M28 28 L22 22 M36 36 L42 42 M36 28 L42 22 M28 36 L22 42" stroke="#c9a227" strokeWidth="0.5" />
    </svg>
  );
}

// Diamond.jsx — the 45°-rotated gold square diacritic.
function Diamond({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" fill="#c9a227" transform="rotate(45 8 8)" />
    </svg>
  );
}

window.CornerRune = CornerRune;
window.Diamond = Diamond;
