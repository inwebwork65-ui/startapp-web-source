import { useEffect, useRef } from 'react'
import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Button, EASE, ImageReveal, SplitLines } from './ui/motion'
import HeroSlideshow from './HeroSlideshow'
import { HERO_SLIDES } from '../data/hero'

type Node = { id: string; label: string; x: number; y: number; align: 'left' | 'right' }

const CENTER = { x: 50, y: 46 }

const NODES: Node[] = [
  { id: 'reparto', label: 'Reparto de Agua', x: 24, y: 30, align: 'right' },
  { id: 'autogestion', label: 'Autogestión Agua', x: 36, y: 68, align: 'right' },
  { id: 'capri', label: 'Guardería Náutica', x: 66, y: 24, align: 'left' },
  { id: 'iguazu', label: 'Turismo Iguazú', x: 78, y: 62, align: 'left' },
]

/** The four real products, drawn as systems orbiting the StartApp core. */
function Constellation() {
  const reduce = useReducedMotion()
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const x = useSpring(px, { stiffness: 40, damping: 18, mass: 0.6 })
  const y = useSpring(py, { stiffness: 40, damping: 18, mass: 0.6 })

  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * -28)
      py.set((e.clientY / window.innerHeight - 0.5) * -14)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, px, py])

  return (
    <m.div aria-hidden style={reduce ? undefined : { x, y }} className="absolute inset-0 hidden sm:block">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {NODES.map((n) => (
          <line
            key={n.id}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            stroke="#F5F5F2"
            strokeOpacity="0.55"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="flow-line"
          />
        ))}
        <line
          x1={NODES[0].x}
          y1={NODES[0].y}
          x2={NODES[1].x}
          y2={NODES[1].y}
          stroke="#F2542D"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {NODES.map((n) => (
        <div
          key={n.id}
          className="absolute flex items-center gap-2.5"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            transform: `translate(${n.align === 'right' ? '-100%' : '0'}, -50%)`,
            flexDirection: n.align === 'right' ? 'row' : 'row-reverse',
          }}
        >
          <span className="hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] text-paper sm:block">
            {n.label}
          </span>
          <span className="block h-2 w-2 shrink-0 bg-paper" />
        </div>
      ))}

      <div
        className="absolute flex items-center justify-center"
        style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%`, transform: 'translate(-50%, -50%)' }}
      >
        <span className="absolute h-3 w-3 animate-ring rounded-full border border-accent" />
        <span className="block h-3 w-3 rounded-full bg-accent" />
        <span className="absolute left-6 bg-ink/80 px-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
          StartApp
        </span>
      </div>
    </m.div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const rise = useTransform(scrollYProgress, [0, 1], [0, 56])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <div className="relative flex-1 overflow-hidden">
        <HeroSlideshow slides={HERO_SLIDES} />
        <div className="absolute inset-0 bg-ink/80" aria-hidden />

        <m.div
          style={reduce ? undefined : { y: rise }}
          className="wrap relative z-10 flex h-full flex-col justify-center pb-8 pt-24 lg:pt-28"
        >
          <SplitLines
            as="h1"
            immediate
            delay={0.15}
            lines={['Software diseñado', 'para transformar', 'tu operación.']}
            className="text-hero text-paper"
          />

          <m.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
            className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-12 lg:items-end"
          >
            <p className="max-w-[36rem] text-lead text-mist lg:col-span-5">
              StartApp diseña y desarrolla sistemas de gestión y aplicaciones a medida para empresas que
              necesitan digitalizar procesos, crecer y operar con mayor eficiencia.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-7 lg:justify-end">
              <Button href="#proyectos">Conocé nuestros proyectos</Button>
              <Button href="#contacto" variant="outline-light">
                Hablemos
              </Button>
            </div>
          </m.div>
        </m.div>
      </div>

      <div className="relative h-[22svh] min-h-[180px] w-full border-t border-paper/15">
        <ImageReveal
          src="/images/hero-user.jpg"
          alt="Persona diseñando la interfaz de una aplicación sobre una laptop"
          className="absolute inset-0"
          imgClassName="object-cover object-[50%_28%] grayscale opacity-60"
          parallax={14}
          eager
        />
        <div className="absolute inset-0 bg-ink/45" aria-hidden />
        <Constellation />
        <p className="wrap absolute inset-x-0 top-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-meta uppercase text-paper/85">
          <span>Software house</span>
          <span>Posadas / Misiones</span>
          <span>Argentina</span>
        </p>
      </div>
    </section>
  )
}
