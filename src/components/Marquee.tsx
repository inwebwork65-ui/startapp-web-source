import { MARQUEE_TERMS } from '../data/site'

function Row() {
  return (
    <ul className="flex shrink-0 items-center">
      {MARQUEE_TERMS.map((term) => (
        <li key={term} className="flex items-center whitespace-nowrap">
          <span className="text-[clamp(1rem,1.5vw,1.375rem)] font-medium uppercase tracking-[0.06em]">{term}</span>
          <span aria-hidden className="mx-8 block h-1.5 w-1.5 bg-ink lg:mx-12" />
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden bg-accent py-5 text-ink">
      <div className="marquee-track flex w-max animate-marquee will-change-transform">
        <Row />
        <Row />
      </div>
    </div>
  )
}
