import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data/site'
import { useActiveSection, useScrolled } from '../hooks/useScrollAnimation'
import { EASE } from './ui/motion'

const SECTION_IDS = ['inicio', 'soluciones', 'metricas', 'proyectos', 'equipo', 'soporte', 'proceso', 'clientes', 'cta', 'contacto']

export default function Header() {
  const scrolled = useScrolled()
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const firstLink = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLink.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out ${
        scrolled || open ? 'border-b border-paper/10 bg-ink' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="wrap flex h-20 items-center justify-between">
        <a href="#inicio" aria-label="StartApp, ir al inicio" className="flex items-center">
          <img src="/images/logo-small.png" alt="StartApp" width={62} height={36} className="h-9 w-auto" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              aria-current={active === item.id ? 'true' : undefined}
              className={`relative flex min-h-[44px] items-center text-[15px] transition-colors duration-300 ease-out hover:text-paper ${
                active === item.id ? 'text-paper' : 'text-mist'
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-1.5 h-px origin-left bg-accent transition-transform duration-500 ease-out ${
                  active === item.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden h-11 items-center bg-accent px-6 text-[15px] font-medium text-ink transition-colors duration-300 ease-out hover:bg-paper sm:inline-flex"
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-11 w-11 items-center justify-center border border-paper/25 text-paper transition-colors duration-300 hover:border-paper lg:hidden"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="menu-movil"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-ink lg:hidden"
          >
            <nav aria-label="Menú móvil" className="wrap flex min-h-full flex-col justify-between pb-10 pt-8">
              <ul>
                {NAV.map((item, i) => (
                  <li key={item.id} className="border-b border-paper/10">
                    <a
                      ref={i === 0 ? firstLink : undefined}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="flex min-h-[64px] items-center justify-between text-title text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-10 inline-flex h-14 items-center justify-center bg-accent text-[17px] font-medium text-ink"
              >
                Hablemos
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
