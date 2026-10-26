import type { ServiceId } from '../../data/services'

const INK = '#0A0A0A'
const ACCENT = '#F2542D'
const PAPER = '#F5F5F2'

type P = { className?: string }

const common = {
  viewBox: '0 0 480 360',
  fill: 'none',
  stroke: INK,
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function Bar({ x, y, w }: { x: number; y: number; w: number }) {
  return <rect x={x} y={y} width={w} height={6} fill={INK} stroke="none" opacity={0.85} />
}

function Custom({ className }: P) {
  return (
    <svg {...common} className={className}>
      <rect x="40" y="40" width="400" height="280" fill={PAPER} />
      <line x1="40" y1="76" x2="440" y2="76" />
      <rect x="54" y="53" width="10" height="10" />
      <rect x="72" y="53" width="10" height="10" />
      <rect x="90" y="53" width="10" height="10" />
      <rect x="56" y="92" width="84" height="212" />
      <Bar x={68} y={108} w={52} />
      <Bar x={68} y={128} w={40} />
      <Bar x={68} y={148} w={56} />
      <rect x="156" y="92" width="124" height="96" />
      <rect x="292" y="92" width="132" height="96" fill={ACCENT} />
      <rect x="156" y="204" width="268" height="100" />
      <Bar x={172} y={222} w={120} />
      <Bar x={172} y={242} w={200} />
      <Bar x={172} y={262} w={160} />
      <Bar x={172} y={110} w={64} />
      <rect x="172" y="132" width="92" height="40" />
    </svg>
  )
}

function Management({ className }: P) {
  const rows = [96, 136, 176, 216, 256]
  return (
    <svg {...common} className={className}>
      <rect x="40" y="56" width="400" height="248" fill={PAPER} />
      <line x1="40" y1="96" x2="440" y2="96" strokeWidth={2} />
      <line x1="176" y1="56" x2="176" y2="304" />
      <line x1="320" y1="56" x2="320" y2="304" />
      <Bar x={56} y={72} w={64} />
      <Bar x={192} y={72} w={72} />
      <Bar x={336} y={72} w={48} />
      <rect x="40" y="176" width="400" height="40" fill={ACCENT} stroke="none" />
      {rows.map((y) => (
        <g key={y}>
          {y > 96 && <line x1="40" y1={y} x2="440" y2={y} />}
          <Bar x={56} y={y + 17} w={y === 176 ? 84 : 56 + ((y * 7) % 40)} />
          <Bar x={192} y={y + 17} w={64 + ((y * 3) % 50)} />
          <rect x="336" y={y + 14} width="12" height="12" fill={y === 176 ? INK : 'none'} />
        </g>
      ))}
    </svg>
  )
}

function Mobile({ className }: P) {
  return (
    <svg {...common} className={className}>
      <rect x="40" y="130" width="130" height="100" fill={PAPER} />
      <line x1="40" y1="152" x2="170" y2="152" />
      <Bar x={52} y={176} w={70} />
      <Bar x={52} y={192} w={90} />
      <Bar x={52} y={208} w={50} />
      <line x1="170" y1="180" x2="212" y2="180" stroke={ACCENT} strokeWidth={2} strokeDasharray="4 5" />
      <rect x="212" y="24" width="150" height="312" rx="20" fill={PAPER} />
      <line x1="262" y1="42" x2="312" y2="42" strokeWidth={3} />
      {[76, 136, 196].map((y) => (
        <g key={y}>
          <rect x="228" y={y} width="118" height="48" />
          <rect x="238" y={y + 12} width="24" height="24" fill={y === 136 ? ACCENT : 'none'} />
          <Bar x={272} y={y + 14} w={60} />
          <Bar x={272} y={y + 28} w={40} />
        </g>
      ))}
      <rect x="228" y="270" width="118" height="42" fill={ACCENT} stroke="none" />
      <Bar x={260} y={286} w={54} />
      <rect x="392" y="130" width="60" height="100" />
      <line x1="362" y1="180" x2="392" y2="180" stroke={ACCENT} strokeWidth={2} strokeDasharray="4 5" />
    </svg>
  )
}

function Infra({ className }: P) {
  return (
    <svg {...common} className={className}>
      {[
        { y: 236, accent: false },
        { y: 168, accent: false },
        { y: 100, accent: true },
      ].map((l, i) => (
        <g key={l.y}>
          <rect x="80" y={l.y} width="320" height="52" fill={l.accent ? ACCENT : PAPER} />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={100 + k * 34} y={l.y + 18} width="16" height="16" fill={l.accent ? INK : 'none'} />
          ))}
          <Bar x={260} y={l.y + 22} w={120 - i * 14} />
        </g>
      ))}
      <line x1="140" y1="152" x2="140" y2="168" strokeWidth={2} />
      <line x1="340" y1="152" x2="340" y2="168" strokeWidth={2} />
      <line x1="140" y1="220" x2="140" y2="236" strokeWidth={2} />
      <line x1="340" y1="220" x2="340" y2="236" strokeWidth={2} />
      <line x1="240" y1="60" x2="240" y2="100" strokeDasharray="4 5" stroke={ACCENT} strokeWidth={2} />
      <line x1="240" y1="288" x2="240" y2="320" strokeDasharray="4 5" stroke={ACCENT} strokeWidth={2} />
    </svg>
  )
}

function Support({ className }: P) {
  return (
    <svg {...common} className={className}>
      <rect x="48" y="60" width="240" height="96" fill={PAPER} />
      <Bar x={68} y={84} w={180} />
      <Bar x={68} y={104} w={200} />
      <Bar x={68} y={124} w={120} />
      <rect x="192" y="188" width="240" height="96" fill={ACCENT} stroke={INK} />
      <Bar x={212} y={212} w={190} />
      <Bar x={212} y={232} w={150} />
      <Bar x={212} y={252} w={90} />
      <circle cx="398" cy="72" r="8" fill={ACCENT} stroke="none" />
      <circle cx="398" cy="72" r="18" strokeDasharray="3 5" />
      <line x1="48" y1="320" x2="432" y2="320" />
    </svg>
  )
}

const MAP: Record<ServiceId, (p: P) => JSX.Element> = {
  custom: Custom,
  management: Management,
  mobile: Mobile,
  infra: Infra,
  support: Support,
}

export default function ServiceDiagram({ id, className }: { id: ServiceId; className?: string }) {
  const Diagram = MAP[id]
  return <Diagram className={className} />
}
