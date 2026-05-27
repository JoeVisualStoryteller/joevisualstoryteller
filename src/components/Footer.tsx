export default function Footer() {
  return (
    <footer className="bg-void border-t border-gold/20 py-10 text-center">
      <p className="font-cinzel text-base text-gold tracking-widest mb-2">JOSEPH H. DUNN II</p>
      <p className="font-mono text-xs tracking-widest text-gray-700 uppercase">
        © {new Date().getFullYear()} · All Rights Reserved · [END OF TRANSMISSION]
      </p>
    </footer>
  )
}
