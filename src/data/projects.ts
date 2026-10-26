export type Project = {
  id: string
  name: string
  category: string
  format: string
  description: string
  href: string
  cta: string
  image: string
  imageAlt: string
  /** Optional photograph used as the large visual; `image` then sits on it as the product mark. */
  photo?: string
  photoAlt?: string
  frame: string
}

export const PROJECTS: Project[] = [
  {
    id: 'reparto-de-agua',
    name: 'Reparto de Agua',
    category: 'Logística y gestión',
    format: 'Sistema de gestión integral',
    description:
      'Sistema de gestión integral para digitalizar la operación de distribuidoras de agua y soda.',
    href: 'https://www.repartodeagua.com',
    cta: 'Ver proyecto',
    image: '/images/proyectos/reparto.jpeg',
    imageAlt: 'Logotipo de Reparto de Agua',
    photo: '/images/hero-slider.jpg',
    photoAlt: 'Repartidor cargando cajas en una camioneta de distribución',
    frame: '#E9E8E3',
  },
  {
    id: 'autogestion-agua',
    name: 'Autogestión Agua',
    category: 'Mobile',
    format: 'Aplicación móvil Android',
    description:
      'Aplicación móvil que permite a los clientes gestionar sus pedidos directamente desde el teléfono, conectada al sistema Reparto de Agua.',
    href: 'https://play.google.com/store/apps/details?id=com.startapp.autogestionagua',
    cta: 'Ver en Google Play',
    image: '/images/proyectos/autogestion.webp',
    imageAlt: 'Logotipo de Autogestión Agua',
    frame: '#FFFFFF',
  },
  {
    id: 'guarderia-nautica',
    name: 'Guardería Náutica',
    category: 'Gestión',
    format: 'Aplicación y sistema de gestión',
    description:
      'Aplicación y sistema de gestión para guarderías náuticas, con foco en la operación de turnos, la flota y el mantenimiento. Proyecto Capri.',
    href: 'https://play.google.com/store/apps/details?id=com.caprinautic',
    cta: 'Ver en Google Play',
    image: '/images/proyectos/capri.webp',
    imageAlt: 'Logotipo de Capri Nautic Club, complejo náutico',
    frame: '#A4CFEC',
  },
  {
    id: 'turismo-iguazu',
    name: 'Turismo Iguazú',
    category: 'Turismo',
    format: 'Aplicación y panel de administración',
    description:
      'Aplicación y panel de administración para la propuesta de turismo de la ciudad de Iguazú, Argentina.',
    href: 'https://play.google.com/store/apps/details?id=com.startapp.turismoIguazu',
    cta: 'Ver en Google Play',
    image: '/images/proyectos/iguazuturismo.webp',
    imageAlt: 'Logotipo de Turismo Iguazú',
    frame: '#FFFFFF',
  },
]
