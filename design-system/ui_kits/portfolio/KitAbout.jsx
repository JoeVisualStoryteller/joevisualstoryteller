// About.jsx — IDENTIFICATION section. Bio left, 2x2 stat grid right.
const SectionHeader = (window.JHDKit = window.JHDKit || {}).SectionHeader;
function KitAbout({ data }) {
  return (
    <section id="about" className="section">
      <div className="section__rule-top section__rule-top--gold" />
      <div className="section__inner">
        <SectionHeader label={data.sectionLabel} title={data.sectionTitle} />
        <div className="about__grid">
          <div>
            <p className="about__file-label">{data.fileLabel}</p>
            {data.bio.map((p, i) => <p key={i} className="about__bio">{p}</p>)}
          </div>
          <div className="about__stats">
            {data.stats.map(s => (
              <div key={s.label} className="stat-card">
                <div className="stat-card__v">{s.value}</div>
                <div className="stat-card__l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.JHDKit.About = KitAbout;
