// Contact.jsx — // COMMS section. Replaces bare Summon. Split panel + channel rows + ceremonial CTA.
// Update href values for GitHub, LinkedIn, and resume before shipping.
const SectionHeader = (window.JHDKit = window.JHDKit || {}).SectionHeader;
function Contact({ email = 'jdunn0423@gmail.com' }) {
  const { useState } = React;
  const [sent, setSent] = useState(false);

  const channels = [
    { label: 'EMAIL',    value: email,                       href: `mailto:${email}` },
    { label: 'GITHUB',   value: 'github.com/[your-handle]',  href: '#' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/[handle]',  href: '#' },
    { label: 'RESUME',   value: 'Download Dossier (PDF)',     href: '#', download: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="section__rule-top section__rule-top--cyan" />
      <div className="section__inner">
        <SectionHeader label="// COMMS" title="Make Contact" />

        <div className="contact__grid">
          {/* Left — pitch */}
          <div>
            <p className="about__file-label">▸ AVAILABILITY.LOG</p>
            <p className="about__bio">
              If you need an operator who can architect at altitude and execute
              in the mud — this is the right channel. Systems built right speak
              for themselves; the record is above.
            </p>
            <p className="about__bio">
              Open to contract engagements, full-time roles, and advisory work
              in AI systems, cloud infrastructure, and enterprise automation.
            </p>
          </div>

          {/* Right — channels */}
          <div className="contact__channels">
            <p className="deploy-card__class" style={{marginBottom: '1rem'}}>▸ OPEN HAILING FREQUENCIES</p>
            {channels.map(ch => (
              <a
                key={ch.label}
                href={ch.href}
                className="channel-row"
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="channel-row__label">{ch.label}</span>
                <span className="channel-row__value">{ch.value}</span>
                <span className="channel-row__arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Ceremonial CTA — one per page, maroon */}
        <div className="contact__cta">
          <div className="summon__eyebrow">[ AWAITING TRANSMISSION ]</div>
          <h2 className="summon__title">Ready to Deploy</h2>
          <p className="summon__sub">
            One operator. High-stakes environments only.
          </p>
          <a href={`mailto:${email}`} className="btn btn--ceremony">
            ◆ Initiate Contact
          </a>
          <p className="summon__email">{email}</p>
        </div>

      </div>
    </section>
  );
}
window.JHDKit.Contact = Contact;
