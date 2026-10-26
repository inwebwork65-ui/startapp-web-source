import type { Project } from '../data/projects'
import { ArrowLink, ImageReveal, Reveal } from './ui/motion'

type Props = {
  project: Project
  index: number
  total: number
  flip: boolean
}

export default function ProjectCase({ project, index, total, flip }: Props) {
  const counter = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  return (
    <article className="group/case grid items-center gap-x-10 gap-y-8 lg:grid-cols-12">
      <div className={`relative lg:col-span-7 ${flip ? 'lg:order-2 lg:col-start-6' : ''}`}>
        {project.photo ? (
          <div className="relative">
            <ImageReveal
              src={project.photo}
              alt={project.photoAlt ?? ''}
              className="aspect-[4/3] w-full sm:aspect-[7/5]"
              imgClassName="object-cover object-[38%_50%]"
              parallax={30}
            />
            <div className="absolute bottom-0 left-0 w-[46%] bg-white p-4 sm:p-6">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                width={513}
                height={285}
                className="h-auto w-full"
              />
            </div>
          </div>
        ) : (
          <ImageReveal
            src={project.image}
            alt={project.imageAlt}
            bg={project.frame}
            className="aspect-[4/3] w-full sm:aspect-[16/11]"
            imgClassName="object-cover"
            parallax={20}
          />
        )}
        <span
          aria-hidden
          className="num absolute left-0 top-0 bg-ink px-4 py-2.5 font-mono text-meta text-paper transition-colors duration-500 ease-out group-hover/case:bg-accent group-hover/case:text-ink"
        >
          {counter}
        </span>
      </div>

      <Reveal className={`lg:col-span-4 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-9'}`}>
        <h3 className="text-headline">{project.name}</h3>
        <p className="mt-6 text-lead text-slate">{project.description}</p>
        <dl className="mt-8 border-t border-ink/20 text-body">
          <div className="flex justify-between gap-6 border-b border-ink/20 py-3">
            <dt className="text-ash">Categoría</dt>
            <dd className="text-right">{project.category}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-ink/20 py-3">
            <dt className="text-ash">Formato</dt>
            <dd className="text-right">{project.format}</dd>
          </div>
        </dl>
        <ArrowLink href={project.href} external className="mt-6 text-ink">
          {project.cta}
        </ArrowLink>
      </Reveal>
    </article>
  )
}
