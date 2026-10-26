import { useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { SERVICES } from '../data/services'
import ServiceDiagram from './diagrams/ServiceDiagrams'
import { EASE, Reveal, SplitLines } from './ui/motion'

export default function Services() {
  const [index, setIndex] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])
  const current = SERVICES[index]

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    const next = (index + (e.key === 'ArrowDown' ? 1 : -1) + SERVICES.length) % SERVICES.length
    setIndex(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="soluciones" className="bg-paper py-24 text-ink lg:py-40">
      <div className="wrap">
        <SplitLines
          lines={['Tecnología construida', 'alrededor de tu negocio.']}
          className="text-display lg:col-span-9"
        />
        <Reveal className="mt-8 grid lg:grid-cols-12">
          <p className="text-lead text-slate lg:col-span-5 lg:col-start-8">
            No obligamos a tu empresa a adaptarse al software. Diseñamos soluciones digitales que se
            adaptan a la forma en que trabajás.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div
            role="tablist"
            aria-label="Soluciones de StartApp"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="lg:col-span-6"
          >
            {SERVICES.map((service, i) => {
              const selected = i === index
              return (
                <div key={service.id} className="border-t border-ink/20 last:border-b">
                  <button
                    ref={(el) => (tabs.current[i] = el)}
                    role="tab"
                    id={`tab-${service.id}`}
                    aria-selected={selected}
                    aria-controls="service-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setIndex(i)}
                    onMouseEnter={() => setIndex(i)}
                    className="group flex min-h-[72px] w-full items-center gap-4 py-5 text-left"
                  >
                    <span
                      aria-hidden
                      className={`block h-2.5 shrink-0 bg-accent transition-[width] duration-500 ease-out ${
                        selected ? 'w-2.5' : 'w-0'
                      }`}
                    />
                    <span
                      className={`text-title transition-colors duration-300 ease-out ${
                        selected ? 'text-ink' : 'text-ash group-hover:text-ink'
                      }`}
                    >
                      {service.name}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      selected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <p className="overflow-hidden text-body text-slate lg:max-w-[30rem]">
                      <span className="block pb-6 pl-[26px]">{service.description}</span>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="lg:sticky lg:top-28 lg:col-span-6 lg:self-start">
            <div
              id="service-panel"
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              className="relative aspect-[4/3] w-full overflow-hidden bg-bone"
            >
              <AnimatePresence mode="wait">
                <m.div
                  key={current.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
                >
                  <ServiceDiagram id={current.id} className="h-full w-full" />
                </m.div>
              </AnimatePresence>
            </div>
            <p className="mt-4 text-body text-ash" aria-live="polite">
              {current.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
