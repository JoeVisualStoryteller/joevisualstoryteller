// Skills.jsx — LOADOUT section. Cards with gold banner-top.
function Skills({ data }) {
  return (
    <section id="skills" className="section section--alt">
      <div className="section__rule-top section__rule-top--cyan" />
      <div className="section__inner">
        <SectionHeader label="// LOADOUT" title="Arsenal" />
        <div className="skills__grid">
          {data.map(group => (
            <div key={group.category} className="skill-card">
              <p className="skill-card__h">▸ {group.category}</p>
              <ul className="skill-card__list">
                {group.items.map(item => (
                  <li key={item} className="skill-card__item">
                    <span className="skill-card__bullet">◆</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Skills = Skills;
