import { PROJECTS } from '../data/projects'
import ProjectCase from './ProjectCase'
import { Reveal, SplitLines } from './ui/motion'

export default function Projects() {
  return (
    <section id="proyectos" className="bg-paper py-28 text-ink lg:py-44">
      <div className="wrap">
        <div>
          <SplitLines lines={['Tecnología que ya está', 'en producción.']} className="text-display" />
          <Reveal className="mt-8 grid lg:grid-cols-12">
            <p className="text-lead text-slate lg:col-span-4 lg:col-start-9">
              Proyectos actuales desarrollados y evolucionados continuamente por StartApp.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-24 lg:mt-32 lg:gap-44">
          {PROJECTS.map((project, i) => (
            <ProjectCase key={project.id} project={project} index={i} total={PROJECTS.length} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
