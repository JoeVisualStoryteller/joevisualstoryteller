import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Chronicle from './components/Chronicle'
import Skills from './components/Skills'
import ChapterProgress from './components/ChapterProgress'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ChapterProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Chronicle />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
