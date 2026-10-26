import { SITE, whatsappLink } from '../data/site'
import { Reveal } from './ui/motion'

const COLUMNS = [
  {
    title: 'Empresa',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Soluciones', href: '#soluciones' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Precios', href: SITE.plans, external: true },
      { label: 'Descargas', href: SITE.downloads, external: true },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'WhatsApp', href: whatsappLink(), external: true },
      { label: 'Facebook', href: SITE.facebook, external: true },
      { label: 'Instagram', href: SITE.instagram, external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-paper lg:pt-20">
      <div className="wrap">
        <Reveal className="grid gap-12 border-t border-paper/20 pt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <img src="/images/logo-small.png" alt="StartApp" width={62} height={36} className="h-10 w-auto" />
            <address className="mt-8 text-body not-italic text-mist">
              {SITE.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-3 block">{SITE.hours}</span>
            </address>
          </div>

          <nav aria-label="Pie de página" className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="text-[15px] font-medium text-paper">{col.title}</h2>
                <ul className="mt-4 space-y-1">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...('external' in link && link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className="link-line inline-flex min-h-[44px] items-center text-body text-mist hover:text-paper"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </Reveal>

        <div className="mt-20 flex flex-col gap-3 border-t border-paper/20 pt-6 font-mono text-meta uppercase text-fog lg:flex-row lg:justify-between">
          <p>StartApp © {new Date().getFullYear()}</p>
          <p className="normal-case tracking-normal">
            Este sitio web es propiedad de y es administrado por {SITE.owner} ·{' '}
            <a
              href={`https://wa.me/${SITE.ownerWhatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="link-line hover:text-paper"
            >
              {SITE.ownerWhatsappDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
