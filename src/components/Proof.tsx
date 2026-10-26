import { Reveal, SplitLines } from './ui/motion'

export default function Proof() {
  return (
    <section id="clientes" className="bg-ink py-24 text-paper lg:py-36">
      <div className="wrap">
        <SplitLines
          lines={['Más de 320 clientes', 'confían en soluciones', 'desarrolladas por StartApp.']}
          className="text-display"
        />
        <Reveal delay={0.1} className="mt-12 grid lg:grid-cols-12">
          <p className="max-w-md border-t border-paper/20 pt-5 text-body text-mist lg:col-span-4 lg:col-start-9">
            Desde Posadas, Misiones, para empresas de toda la Argentina y de Latinoamérica.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
