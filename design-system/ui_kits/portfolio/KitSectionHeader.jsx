// SectionHeader.jsx — mono eyebrow, diamond-flanked rule, display title.
const Diamond = (window.JHDKit = window.JHDKit || {}).Diamond;
function KitSectionHeader({ label, title }) {
  return (
    <div className="section-header">
      <p className="section-header__eyebrow">{label}</p>
      <div className="section-header__diamond-row">
        <div className="section-header__rule section-header__rule--l" />
        <Diamond />
        <div className="section-header__rule section-header__rule--r" />
      </div>
      <h2 className="section-header__title">{title}</h2>
    </div>
  );
}
window.JHDKit.SectionHeader = KitSectionHeader;
