// Summon.jsx — the page's single ceremonial element. Maroon CTA, exactly once.
function Summon({ email = 'jdunn0423@gmail.com' }) {
  return (
    <section id="summon" className="summon">
      <div className="section__rule-top rule-maroon" />
      <div className="summon__inner">
        <p className="summon__eyebrow">// COMMS CHANNEL</p>
        <h2 className="summon__title">Summon the Architect</h2>
        <p className="summon__sub">For consults, contracts, and quests of consequence.</p>
        <a href={`mailto:${email}`} className="btn btn--ceremony">
          OPEN HAILING FREQUENCY
        </a>
        <p className="summon__email">{email}</p>
      </div>
    </section>
  );
}
window.Summon = Summon;
