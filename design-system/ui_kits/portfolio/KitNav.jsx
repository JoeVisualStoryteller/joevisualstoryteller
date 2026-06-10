// Nav.jsx — fixed top, 64px tall, backdrop-blur intensifies on scroll.
function KitNav({ activeId = 'home', onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'home',        label: 'Home' },
    { id: 'about',       label: 'About' },
    { id: 'skills',      label: 'Arsenal' },
    { id: 'deployments', label: 'Deployments' },
    { id: 'contact',     label: 'Contact' },
  ];
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav__mark" onClick={(e) => { e.preventDefault(); onNav?.('home'); }}>JHD</a>
      <div className="nav__links">
        {links.map(l => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav__link ${activeId === l.id ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onNav?.(l.id); }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
window.JHDKit = window.JHDKit || {};
window.JHDKit.Nav = KitNav;
