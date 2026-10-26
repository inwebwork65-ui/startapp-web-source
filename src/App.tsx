import { LazyMotion, domAnimation } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Metrics from './components/Metrics'
import Projects from './components/Projects'
import Team from './components/Team'
import Support from './components/Support'
import Process from './components/Process'
import Proof from './components/Proof'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#contenido"
        className="sr-only z-[60] bg-accent px-5 py-3 font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Marquee />
        <Services />
        <Metrics />
        <Projects />
        <Team />
        <Support />
        <Process />
        <Proof />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  )
}
