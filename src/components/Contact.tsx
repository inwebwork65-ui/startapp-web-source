import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { SITE, whatsappLink } from '../data/site'
import { Reveal, SplitLines } from './ui/motion'

type Values = { nombre: string; empresa: string; email: string; telefono: string; mensaje: string }
type Errors = Partial<Record<'nombre' | 'email' | 'mensaje', string>>

const EMPTY: Values = { nombre: '', empresa: '', email: '', telefono: '', mensaje: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INPUT =
  'w-full border-0 border-b border-ink/40 bg-transparent px-0 text-lead text-ink transition-colors duration-300 placeholder:text-ash focus:border-b-2 focus:border-accent focus:outline-none aria-[invalid=true]:border-accent-ink'

function validate(v: Values): Errors {
  const errors: Errors = {}
  if (!v.nombre.trim()) errors.nombre = 'Escribí tu nombre para que sepamos con quién hablar.'
  if (!v.email.trim()) errors.email = 'Escribí tu email para poder responderte.'
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Revisá el email: parece que le falta algo.'
  if (!v.mensaje.trim()) errors.mensaje = 'Contanos brevemente qué necesitás.'
  return errors
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-[15px] text-slate">
        {label}
        {required && (
          <span aria-hidden className="text-accent-ink">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[14px] text-accent-ink">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }))
    setSent(false)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = (Object.keys(found) as Array<keyof Errors>)[0]
    if (first) {
      document.getElementById(first)?.focus()
      return
    }
    const lines = [
      `Hola StartApp, soy ${values.nombre.trim()}${values.empresa.trim() ? ` (${values.empresa.trim()})` : ''}.`,
      values.mensaje.trim(),
      `Email: ${values.email.trim()}`,
      values.telefono.trim() ? `Teléfono: ${values.telefono.trim()}` : '',
    ].filter(Boolean)
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener')
    setSent(true)
  }

  const describe = (key: keyof Errors) => (errors[key] ? `${key}-error` : undefined)

  return (
    <section id="contacto" className="bg-paper py-28 text-ink lg:py-44">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SplitLines lines={['Hablemos de tu', 'próximo sistema.']} className="text-headline" />

          <Reveal delay={0.1}>
            <dl className="mt-10 border-t border-ink/20 text-body">
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/20 py-4">
                <dt className="text-ash">WhatsApp</dt>
                <dd>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer" className="link-line">
                    {SITE.whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/20 py-4">
                <dt className="text-ash">Ubicación</dt>
                <dd>
                  {SITE.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/20 py-4">
                <dt className="text-ash">Horario</dt>
                <dd>{SITE.hours}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/20 py-4">
                <dt className="text-ash">Redes</dt>
                <dd className="flex gap-6">
                  <a href={SITE.facebook} target="_blank" rel="noreferrer" className="link-line">
                    Facebook
                  </a>
                  <a href={SITE.instagram} target="_blank" rel="noreferrer" className="link-line">
                    Instagram
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <iframe
              title="Mapa de la ubicación de StartApp: Alberdi 1152, Posadas, Misiones"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-10 aspect-[4/3] w-full border-0 bg-bone grayscale contrast-110"
            />
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noreferrer"
              className="link-line mt-3 inline-flex min-h-[44px] items-center text-body font-medium"
            >
              Abrir en Google Maps
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <form onSubmit={onSubmit} noValidate className="grid gap-8" aria-describedby="form-note">
            <Field id="nombre" label="Nombre" required error={errors.nombre}>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                value={values.nombre}
                onChange={set('nombre')}
                aria-invalid={errors.nombre ? true : undefined}
                aria-describedby={describe('nombre')}
                className={`h-14 ${INPUT}`}
              />
            </Field>
            <Field id="empresa" label="Empresa">
              <input
                id="empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                value={values.empresa}
                onChange={set('empresa')}
                className={`h-14 ${INPUT}`}
              />
            </Field>
            <div className="grid gap-8 sm:grid-cols-2">
              <Field id="email" label="Email" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={set('email')}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={describe('email')}
                  className={`h-14 ${INPUT}`}
                />
              </Field>
              <Field id="telefono" label="Teléfono">
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  value={values.telefono}
                  onChange={set('telefono')}
                  className={`h-14 ${INPUT}`}
                />
              </Field>
            </div>
            <Field id="mensaje" label="Contanos sobre tu proyecto" required error={errors.mensaje}>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={values.mensaje}
                onChange={set('mensaje')}
                aria-invalid={errors.mensaje ? true : undefined}
                aria-describedby={describe('mensaje')}
                className={`min-h-[8rem] resize-y py-3 ${INPUT}`}
              />
            </Field>

            <div>
              <button
                type="submit"
                className="group inline-flex h-14 items-center gap-5 bg-ink px-7 font-medium text-paper transition-colors duration-300 ease-out hover:bg-accent hover:text-ink"
              >
                Enviar consulta
                <ArrowRight
                  size={18}
                  strokeWidth={1.75}
                  aria-hidden
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
                />
              </button>
              <p id="form-note" className="mt-4 max-w-md text-[15px] text-ash">
                Al enviar, abrimos WhatsApp con tu consulta lista para mandar al equipo de StartApp.
              </p>
              <p role="status" className="mt-3 min-h-[1.5rem] text-[15px] text-ink">
                {sent ? 'Listo: abrimos WhatsApp con tu mensaje. Solo falta que lo envíes.' : ''}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
