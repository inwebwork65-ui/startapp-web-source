import { useEffect, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'

export type Slide = { src: string; alt: string }

/** Auto-advancing crossfade of the hero photo strip. Static on the first slide under reduced motion. */
export default function HeroSlideshow({ slides, interval = 6000 }: { slides: Slide[]; interval?: number }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce || slides.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [reduce, slides.length, interval])

  const current = reduce ? slides[0] : slides[index]

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <m.img
          key={current.src}
          src={current.src}
          alt={current.alt}
          loading="eager"
          decoding="async"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-60"
        />
      </AnimatePresence>
    </div>
  )
}
