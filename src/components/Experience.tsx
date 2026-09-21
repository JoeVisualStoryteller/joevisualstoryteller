import { caseStudies, careerData } from '../data/content'

export default function Experience() {
  return (
    <section id="work" className="section section--ink">
      <div className="shell">
        <div className="section-heading section-heading--work">
          <p className="eyebrow">02 / Staff engineering in practice</p>
          <h2>Direction, leverage, outcomes.</h2>
          <p className="section-heading__intro">Staff engineering is the work between architecture, execution, and people: set the direction, create the operating model, and make other engineers more effective. These are the systems and teams Joseph moved forward.</p>
        </div>

        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.number}>
              <div className="case-card__top">
                <span>{study.number}</span>
                <span className="case-card__signal" aria-hidden="true" />
              </div>
              <h3>{study.title}</h3>
              <p className="case-card__summary">{study.summary}</p>
              <div className="case-card__metric">
                <strong>{study.metric}</strong>
                <span>{study.metricLabel}</span>
              </div>
              <ul className="case-card__points">
                {study.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="tag-list">
                {study.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="career-block">
          <div className="career-block__heading">
            <p className="eyebrow">Career path</p>
            <p>Scope expanded from mission-critical systems to company-wide operations, applied AI, and organizational leverage.</p>
          </div>
          <div className="career-list">
            {careerData.map((entry) => (
              <div className="career-item" key={`${entry.company}-${entry.role}`}>
                <span className="career-item__period">{entry.period}</span>
                <div>
                  <h3>{entry.role}</h3>
                  <p>{entry.company} <span>·</span> {entry.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
