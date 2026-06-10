// Deployments.jsx — // FIELD RECORDS section. Featured hero card + compact case study grid.
// Replace placeholder [BRACKET] values with real project data before shipping.
const SectionHeader = (window.JHDKit = window.JHDKit || {}).SectionHeader;
function Deployments({ data }) {
  const featured = data.find(d => d.featured);
  const rest = data.filter(d => !d.featured);

  return (
    <section id="deployments" className="section">
      <div className="section__rule-top section__rule-top--gold" />
      <div className="section__inner">
        <SectionHeader label="// FIELD RECORDS" title="Deployments" />

        {featured && (
          <div className="deploy-featured">
            <div className="deploy-featured__left">
              <p className="deploy-card__class">▸ FEATURED · {featured.classification}</p>
              <h3 className="deploy-card__name">{featured.codename}</h3>
              <p className="deploy-card__desc">{featured.desc}</p>
              <div className="deploy-card__stack">
                {featured.stack.map(t => (
                  <span key={t} className="deploy-stack-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="deploy-featured__right">
              <p className="deploy-card__class">▸ OUTCOME</p>
              <div className="deploy-card__metric">{featured.outcome}</div>
              <p className="deploy-card__metric-label">{featured.outcomeLabel}</p>
              <div className="deploy-featured__divider" />
              <p className="deploy-card__class">▸ PROBLEM STATEMENT</p>
              <p className="deploy-card__desc">{featured.problem}</p>
            </div>
          </div>
        )}

        <div className="deploy-grid">
          {rest.map(d => (
            <div key={d.codename} className="deploy-card">
              <p className="deploy-card__class">▸ {d.classification}</p>
              <h3 className="deploy-card__name">{d.codename}</h3>
              <p className="deploy-card__desc">{d.desc}</p>
              <div className="deploy-card__metric">{d.outcome}</div>
              <p className="deploy-card__metric-label">{d.outcomeLabel}</p>
              <div className="deploy-card__stack">
                {d.stack.map(t => (
                  <span key={t} className="deploy-stack-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
window.JHDKit.Deployments = Deployments;
