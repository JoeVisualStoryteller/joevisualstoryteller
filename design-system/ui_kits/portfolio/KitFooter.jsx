// Footer.jsx — wordmark + transmission ending.
function KitFooter() {
  return (
    <footer className="footer">
      <p className="footer__mark">JOSEPH H. DUNN II</p>
      <p className="footer__copy">© {new Date().getFullYear()} · All Rights Reserved · [END OF TRANSMISSION]</p>
    </footer>
  );
}
window.JHDKit = window.JHDKit || {};
window.JHDKit.Footer = KitFooter;
