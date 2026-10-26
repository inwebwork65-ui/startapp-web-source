import { ImageReveal, Reveal, SplitLines } from './ui/motion'

const PILLARS = [
  {
    term: 'Uptime',
    text: 'Cuidamos que los sistemas estén disponibles cuando tu equipo los necesita.',
  },
  {
    term: 'Deploy',
    text: 'Nuevas versiones y mejoras publicadas sin frenar tu operación.',
  },
  {
    term: 'Support',
    text: 'Acompañamiento técnico permanente, directo por WhatsApp de lunes a viernes.',
  },
  {
    term: 'Security',
    text: 'Infraestructura y accesos pensados desde el diseño, no agregados al final.',
  },
  {
    term: 'Scalability',
    text: 'Arquitecturas que acompañan el crecimiento de tu operación.',
  },
]

export default function Support() {
  return (
    <section id="soporte" className="bg-ink py-28 text-paper lg:py-44">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SplitLines
              lines={['El software no', 'termina cuando', 'se publica.']}
              className="text-display"
            />
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-xl text-lead text-mist">
                En StartApp acompañamos cada solución durante su operación, evolución y crecimiento:
                soporte, actualizaciones, mantenimiento e infraestructura, mucho después del primer día.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ImageReveal
              src="/images/hero-soporte.jpg"
              alt="Equipo de soporte con auriculares trabajando frente a sus laptops en una sala con poca luz"
              className="aspect-[4/3] w-full"
              imgClassName="object-cover object-[28%_50%]"
              parallax={30}
            />
          </div>
        </div>

        <ul className="mt-24 border-t border-paper/20 lg:mt-36">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.term}
              className="group grid gap-x-8 gap-y-3 border-b border-paper/20 py-7 lg:grid-cols-12 lg:items-baseline lg:py-10"
            >
              <Reveal className="lg:col-span-7">
                <p className="text-[clamp(2rem,5.2vw,5.5rem)] font-medium uppercase leading-none tracking-[-0.01em] transition-colors duration-500 ease-out group-hover:text-accent">
                  {pillar.term}
                </p>
              </Reveal>
              <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
                <p className="text-body text-mist">{pillar.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
