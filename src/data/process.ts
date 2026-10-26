export type Step = { n: string; name: string; text: string }

export const STEPS: Step[] = [
  {
    n: '01',
    name: 'Descubrimiento',
    text: 'Entendemos tu operación, tus usuarios y los procesos que hoy frenan tu trabajo.',
  },
  {
    n: '02',
    name: 'Diseño',
    text: 'Definimos flujos, interfaces y arquitectura antes de escribir la primera línea de código.',
  },
  {
    n: '03',
    name: 'Desarrollo',
    text: 'Construimos el software en ciclos cortos, con avances que podés ver y probar.',
  },
  {
    n: '04',
    name: 'Implementación',
    text: 'Puesta en producción acompañada, para que tu equipo empiece a usarlo con confianza.',
  },
  {
    n: '05',
    name: 'Evolución',
    text: 'Soporte y mejoras continuas a medida que tu operación cambia y crece.',
  },
]
