import { capabilityGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="capabilities" className="section section--blueprint">
      <div className="shell">
        <div className="section-heading section-heading--work">
          <p className="eyebrow">03 / Capabilities</p>
          <h2>The stack is bigger than the tools.</h2>
          <p className="section-heading__intro">Architecture, governance, automation, and leadership are the connective tissue between technology and an outcome.</p>
        </div>

        <div className="capability-grid">
          {capabilityGroups.map((group, index) => (
            <article className="capability-card" key={group.category}>
              <div className="capability-card__top">
                <span>0{index + 1}</span>
                <span className="capability-card__mark" aria-hidden="true">↗</span>
              </div>
              <h3>{group.category}</h3>
              <p>{group.description}</p>
              <div className="capability-card__items">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
