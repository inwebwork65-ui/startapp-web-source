import type { Slide } from '../components/HeroSlideshow'

/**
 * Hero photo strip slides. Placeholders below reuse existing site photos so the
 * carousel works out of the box — replace hero-slide-1/2/3.jpg in public/images/
 * with the 3 real photos (same filenames) once you have them; no code change needed.
 */
export const HERO_SLIDES: Slide[] = [
  { src: '/images/hero-slide-1.jpg', alt: 'Equipo de StartApp diseñando la interfaz de una aplicación' },
  { src: '/images/hero-slide-2.jpg', alt: 'Repartidor cargando cajas en una camioneta de distribución' },
  { src: '/images/hero-slide-3.jpg', alt: 'Equipo de soporte trabajando frente a sus laptops' },
]
