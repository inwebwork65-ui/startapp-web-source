import { useRef } from 'react'
import { m, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { STEPS, type Step } from '../data/process'
import { Reveal, SplitLines } from './ui/motion'

function StepItem({ step }: { step: Step }) {
  const ref = useRef<HTMLLIElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px', once: true })
  const reached = reduce || inView

  return (
    <li ref={ref} className="relative pb-20 pl-10 last:pb-0 lg:pl-14">
      <span
        aria-hidden
        className={`absolute left-0 top-3 h-3 w-3 -translate-x-1/2 border transition-colors duration-500 ease-out ${
          reached ? 'border-accent bg-accent' : 'border-ink/40 bg-paper'
        }`}
      />
      <Reveal>
        <p className="num font-mono text-meta text-ash">{step.n}</p>
        <h3 className="mt-2 text-headline">{step.name}</h3>
        <p className="mt-4 max-w-lg text-lead text-slate">{step.text}</p>
      </Reveal>
    </li>
  )
}

export default function Process() {
  const listRef = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.4 })

  return (
    <section id="proceso" className="bg-paper py-28 text-ink lg:py-44">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SplitLines lines={['De una idea a', 'software', 'funcionando.']} className="text-display" />
        </div>

        <ol ref={listRef} className="relative lg:col-span-6 lg:col-start-7">
          <span aria-hidden className="absolute bottom-2 left-0 top-3 w-px bg-ink/20" />
          <m.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute bottom-2 left-0 top-3 w-0.5 origin-top -translate-x-px bg-accent"
          />
          {STEPS.map((step) => (
            <StepItem key={step.n} step={step} />
          ))}
        </ol>
      </div>
    </section>
  )
}
