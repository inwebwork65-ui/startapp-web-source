import { whatsappLink } from '../data/site'
import { Button, Reveal, SplitLines } from './ui/motion'

export default function CtaBand() {
  return (
    <section id="cta" aria-label="Contacto directo" className="bg-accent py-28 text-ink lg:py-44">
      <div className="wrap">
        <SplitLines lines={['¿Tenés un proyecto', 'en mente?']} className="text-hero" />
        <Reveal delay={0.1} className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <p className="max-w-lg text-lead lg:col-span-6">
            Contanos qué necesitás y pensemos juntos cómo convertirlo en una solución digital.
          </p>
          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <Button href={whatsappLink('Hola StartApp, tengo un proyecto en mente.')} external variant="ink">
              Hablemos
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
