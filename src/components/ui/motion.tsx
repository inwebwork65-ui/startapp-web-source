import { createElement, useRef, type ReactNode } from 'react'
import { m, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/** Fade + rise on entering the viewport. Renders static under reduced motion. */
export function Reveal({ children, delay = 0, y = 40, className }: RevealProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </m.div>
  )
}

type SplitProps = {
  lines: string[]
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  delay?: number
  /** Animate on mount instead of on entering the viewport (used by the hero). */
  immediate?: boolean
}

/** Large titles that rise line by line from a mask. */
export function SplitLines({ lines, as = 'h2', className, delay = 0, immediate = false }: SplitProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  // The lines sit inside overflow-hidden masks, which IntersectionObserver treats as clipped,
  // so visibility is observed on the (unclipped) heading itself.
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })
  const show = immediate || inView

  const content = lines.map((line, i) => (
    <span key={line} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
      {reduce ? (
        <span className="block">{line}</span>
      ) : (
        <m.span
          className="block"
          initial={{ y: '108%' }}
          animate={{ y: show ? 0 : '108%' }}
          transition={{ duration: 1.05, delay: delay + i * 0.1, ease: EASE }}
        >
          {line}
        </m.span>
      )}
    </span>
  ))
  return createElement(as, { className, ref } as Record<string, unknown>, content)
}

type ImageRevealProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  parallax?: number
  eager?: boolean
  width?: number
  height?: number
  bg?: string
}

/** Image with a vertical mask reveal, slow parallax and a restrained hover zoom. */
export function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = 'object-cover',
  parallax = 28,
  eager = false,
  width,
  height,
  bg,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax])

  const image = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-full w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] ${imgClassName}`}
    />
  )

  if (reduce) {
    return (
      <div ref={ref} style={{ backgroundColor: bg }} className={`group overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`}>
        {image}
      </div>
    )
  }

  return (
    <div ref={ref} className={`group overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`}>
      <m.div
        className="absolute inset-0"
        style={{ backgroundColor: bg }}
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: inView ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
        transition={{ duration: 1.3, ease: EASE }}
      >
        <m.div style={{ y }} className="absolute inset-x-0 -bottom-[8%] -top-[8%]">
          {image}
        </m.div>
      </m.div>
    </div>
  )
}

type LinkProps = {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
  onClick?: () => void
}

/** Text link: animated underline, arrow that travels 6px on hover. */
export function ArrowLink({ href, children, external, className = '', onClick }: LinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group inline-flex min-h-[44px] items-center gap-3 font-medium ${className}`}
    >
      <span className="link-line pb-1">{children}</span>
      <ArrowRight
        size={18}
        strokeWidth={1.75}
        aria-hidden
        className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
      />
    </a>
  )
}

type ButtonProps = LinkProps & { variant?: 'accent' | 'ink' | 'outline-light' | 'outline-dark' }

const BUTTON_STYLES: Record<NonNullable<ButtonProps['variant']>, string> = {
  accent: 'bg-accent text-ink hover:bg-paper',
  ink: 'bg-ink text-paper hover:bg-paper hover:text-ink',
  'outline-light': 'border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink',
  'outline-dark': 'border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-paper',
}

export function Button({ href, children, external, variant = 'accent', className = '', onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group inline-flex h-14 items-center gap-5 whitespace-nowrap px-7 font-medium transition-colors duration-300 ease-out ${BUTTON_STYLES[variant]} ${className}`}
    >
      {children}
      <ArrowRight
        size={18}
        strokeWidth={1.75}
        aria-hidden
        className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
      />
    </a>
  )
}
