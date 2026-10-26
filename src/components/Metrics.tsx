import { useCountUp } from '../hooks/useScrollAnimation'
import { Reveal } from './ui/motion'

function Count({ target, prefix }: { target: number; prefix: string }) {
  const { ref, value } = useCountUp(target)
  return (
    <>
      <span ref={ref} aria-hidden className="num">
        {value}+
      </span>
      <span className="sr-only">{prefix} {target}</span>
    </>
  )
}

const BIG = 'text-[clamp(4.5rem,13.5vw,14rem)] font-medium leading-[0.86] tracking-[-0.04em]'

export default function Metrics() {
  return (
    <section id="metricas" aria-labelledby="metricas-titulo" className="bg-ink py-24 text-paper lg:py-40">
      <h2 id="metricas-titulo" className="sr-only">
        StartApp en números
      </h2>
      <div className="wrap">
        <ul>
          <li className="border-t border-paper/20">
            <Reveal className="grid items-end gap-x-6 gap-y-4 py-8 lg:grid-cols-12 lg:py-14">
              <p className={`${BIG} lg:col-span-8`}>
                <Count target={320} prefix="Más de" />
              </p>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-title">Clientes</p>
                <p className="mt-2 max-w-sm text-body text-mist">
                  Empresas que operan con sistemas desarrollados por StartApp.
                </p>
              </div>
            </Reveal>
          </li>
          <li className="border-t border-paper/20">
            <Reveal className="grid items-end gap-x-6 gap-y-4 py-8 lg:grid-cols-12 lg:py-14">
              <p className={`${BIG} lg:col-span-8`}>
                <Count target={3000} prefix="Más de" />
              </p>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-title">Usuarios diarios</p>
                <p className="mt-2 max-w-sm text-body text-mist">
                  Personas que usan nuestras aplicaciones todos los días.
                </p>
              </div>
            </Reveal>
          </li>
          <li className="border-y border-paper/20">
            <Reveal className="grid items-end gap-x-6 gap-y-4 py-8 lg:grid-cols-12 lg:py-14">
              <p className="text-[clamp(2.75rem,8.6vw,9.5rem)] font-medium leading-[0.9] tracking-[-0.04em] lg:col-span-8">
                ARG + LATAM
              </p>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-title">Alcance</p>
                <p className="mt-2 max-w-sm text-body text-mist">
                  Clientes en Argentina y en otros países de Latinoamérica.
                </p>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  )
}
