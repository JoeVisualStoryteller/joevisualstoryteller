import { aboutContent, impactMetrics } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section section--black">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <p className="eyebrow">{aboutContent.eyebrow}</p>
          <h2>{aboutContent.title}</h2>
        </div>

        <div className="signal-layout">
          <div className="signal-copy">
            {aboutContent.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="scope-panel">
            <p className="scope-panel__label">{aboutContent.scopeLabel}</p>
            <ul>
              {aboutContent.scope.map((item) => (
                <li key={item}><span aria-hidden="true">+</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="impact-grid">
          {impactMetrics.slice(4).map((metric) => (
            <div className="impact-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
