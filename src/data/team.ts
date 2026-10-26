export type TeamMember = {
  id: string
  name: string
  role: string
  /** One short line under the role. */
  tagline?: string
  /** Specialties and tools, shown as small chips. */
  tags?: string[]
  bio: string
  /** Set once a real photo exists, e.g. '/images/equipo/david.jpg'. Falls back to initials. */
  photo?: string
  /** Zoom into the photo (1 = fit). Anchored at the top so faces stay in frame. */
  zoom?: number
  /** Horizontal anchor of the zoom in % (50 = center). Lower it if the subject sits left of center in the photo. */
  focusX?: number
}

export const TEAM: TeamMember[] = [
  {
    id: 'david-pedernera',
    name: 'David Nicolás Pedernera',
    role: 'Co-Founder & CEO',
    tagline: 'Software que acompaña a cada cliente.',
    tags: ['Dirección', 'Desarrollo de sistemas', 'Acompañamiento a clientes'],
    bio: 'Fundador y CEO de StartApp.',
    photo: '/images/equipo/david-pedernera.webp',
    zoom: 1.4,
    focusX: 33,
  },
  {
    id: 'matias-aguirre',
    name: 'Matías Aguirre',
    role: 'Co-Founder & CEO',
    tagline: 'Software que acompaña a cada cliente.',
    tags: ['Dirección', 'Desarrollo de sistemas', 'Acompañamiento a clientes'],
    bio: 'Fundador y CEO de StartApp.',
    photo: '/images/equipo/matias-aguirre.webp',
    zoom: 1.2,
    focusX: 32,
  },
  {
    id: 'matias-dei-castelli',
    name: 'Matías Marcelo Dei Castelli',
    role: 'Full-Stack / iOS',
    tagline: 'Apps que siguen funcionando sin conexión.',
    tags: ['Java', 'Spring Boot', 'AngularJS', 'SwiftUI', 'Offline-first'],
    bio: 'Desarrolla el backend, el frontend y la app nativa de iOS para la gestión de repartos.',
    photo: '/images/equipo/matias-dei-castelli-v2.webp',
    zoom: 1.15,
  },
  {
    id: 'pablo-espinola',
    name: 'Pablo Maximiliano Espinola',
    role: 'Administración y Ventas',
    tagline: 'El primer contacto con cada cliente.',
    tags: ['Ventas', 'Altas de clientes', 'Cobranzas', 'Soporte técnico'],
    bio: 'Capta y asesora nuevos clientes y brinda soporte en hardware y software. Técnico en equipamientos e instalaciones electromecánicas.',
    photo: '/images/equipo/pablo-espinola-v2.webp',
    zoom: 1.15,
    focusX: 19,
  },
  {
    id: 'lucas-fernandez',
    name: 'Lucas Ezequiel Fernández',
    role: 'Project Manager · Full-Stack',
    tagline: 'Ordena el proyecto y también lo programa.',
    tags: ['Project Management', 'Java', 'Angular', 'PostgreSQL', 'AWS'],
    bio: 'Antes fue analista funcional en el Ministerio del Agro y Producción de Misiones. Técnico Analista en Sistemas (IPESMI).',
    photo: '/images/equipo/lucas-fernandez.webp',
    zoom: 1.15,
  },
  {
    id: 'paula-pedernera',
    name: 'Paula Priscila Pedernera',
    role: 'Desarrollo y Soporte',
    tagline: 'Atención al cliente y desarrollo web.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Atención al cliente', 'Publicación de apps'],
    bio: 'Realiza tareas de administración en Wabbi y cursa la Tecnicatura en Programación e Innovación Tecnológica (INCADE).',
  },
]
