export type ServiceId = 'custom' | 'management' | 'mobile' | 'infra' | 'support'

export type Service = {
  id: ServiceId
  name: string
  description: string
  caption: string
}

export const SERVICES: Service[] = [
  {
    id: 'custom',
    name: 'Software a medida',
    description: 'Aplicaciones construidas alrededor de los procesos reales de cada empresa.',
    caption: 'Interfaces y flujos diseñados desde cero',
  },
  {
    id: 'management',
    name: 'Sistemas de gestión',
    description: 'Plataformas para centralizar operaciones, información y equipos.',
    caption: 'Toda la operación en un mismo sistema',
  },
  {
    id: 'mobile',
    name: 'Aplicaciones móviles',
    description: 'Experiencias digitales conectadas con los sistemas de negocio.',
    caption: 'De la app del cliente al panel de administración',
  },
  {
    id: 'infra',
    name: 'Infraestructura',
    description: 'Arquitecturas preparadas para operar de forma confiable y escalar.',
    caption: 'Capas pensadas para crecer sin rehacer',
  },
  {
    id: 'support',
    name: 'Soporte permanente',
    description: 'Acompañamiento técnico luego de la puesta en producción.',
    caption: 'Una persona real del otro lado',
  },
]
