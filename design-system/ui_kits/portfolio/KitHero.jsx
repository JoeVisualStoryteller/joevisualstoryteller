// Hero.jsx — full-viewport hero with 4 corner runes, circuit grid, scanlines, vignette.
const CornerRune = (window.JHDKit = window.JHDKit || {}).CornerRune;
function KitHero({ data, onCta }) {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" />
      <div className="hero__scan" />
      <div className="hero__vignette" />
      <CornerRune pos="tl" />
      <CornerRune pos="tr" />
      <CornerRune pos="bl" />
      <CornerRune pos="br" />
      <div className="hero__inner">
        <p className="hero__system-label">{data.systemLabel}</p>
        <h1 className="hero__name">{data.name}</h1>
        <div className="hero__name-rule" />
        <p className="hero__subtitle">{data.subtitle}</p>
        <p className="hero__tagline">{data.tagline}</p>
        <div className="hero__cta-row">
          <a href="#about" className="btn btn--primary" onClick={(e)=>{e.preventDefault(); onCta?.('about');}}>
            View Profile
          </a>
          <a href="#skills" className="btn btn--ghost" onClick={(e)=>{e.preventDefault(); onCta?.('skills');}}>
            Arsenal <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
window.JHDKit.Hero = KitHero;
