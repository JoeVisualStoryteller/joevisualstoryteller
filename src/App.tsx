import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
