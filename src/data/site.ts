export const SITE = {
  name: 'StartApp',
  whatsappNumber: '5493765026080',
  whatsappDisplay: '+549 376 5026080',
  ownerWhatsappNumber: '5493764299365',
  ownerWhatsappDisplay: '+549 376 4299365',
  owner: 'David Nicolas Pedernera',
  address: ['Alberdi 1152', 'Posadas, Misiones', 'Argentina'],
  hours: 'Lun. a Vie. 9 a 19hs.',
  facebook: 'https://www.facebook.com/reparto.agua.soda',
  instagram: 'https://www.instagram.com/repartoagua/',
  plans: 'https://app.repartodeagua.com/register',
  downloads: 'https://drive.google.com/drive/u/0/folders/1_8qRrNtKFzdQBxjQ03nRAvrGJpnDbqF6',
  mapEmbed:
     'https://maps.google.com/maps?q=Alberdi+1152,+Posadas,+Misiones,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapLink:
     'https://www.google.com/maps/search/?api=1&query=Alberdi+1152+Posadas+Misiones+Argentina',
} as const

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export type NavItem = { id: string; label: string; href: string; external?: boolean }

export const NAV: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'soluciones', label: 'Soluciones', href: '#soluciones' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'equipo', label: 'Equipo', href: '#equipo' },
  { id: 'precios', label: 'Precios', href: SITE.plans, external: true },
  { id: 'descargas', label: 'Descargas', href: SITE.downloads, external: true },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
]

export const MARQUEE_TERMS = [
  'Software development',
  'Business systems',
  'Mobile apps',
  'Cloud',
  'Automation',
  'Support',
  'Digital products',
]
