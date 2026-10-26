import { TEAM } from '../data/team'
import { Reveal, SplitLines } from './ui/motion'

/** Centers an incomplete last row: the grid has 4/6/8 columns and every card spans 2. */
function rowStart(i: number, n: number) {
  const smR = n % 2
  const lgR = n % 3
  const xlR = n % 4
  const sm = smR > 0 && i === n - smR ? 'sm:col-start-2' : 'sm:col-start-auto'
  const lg = lgR > 0 && i === n - lgR ? (lgR === 1 ? 'lg:col-start-3' : 'lg:col-start-2') : 'lg:col-start-auto'
  const xl =
    xlR > 0 && i === n - xlR
      ? xlR === 1
        ? 'xl:col-start-4'
        : xlR === 2
          ? 'xl:col-start-3'
          : 'xl:col-start-2'
      : 'xl:col-start-auto'
  return `${sm} ${lg} ${xl}`
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Team() {
  return (
    <section id="equipo" className="bg-paper py-28 text-ink lg:py-44">
      <div className="wrap">
        <SplitLines lines={['Quiénes hacen', 'StartApp.']} className="text-display" />
        <Reveal delay={0.1} className="mt-8 grid lg:grid-cols-12">
          <p className="text-lead text-slate lg:col-span-5 lg:col-start-8">
            El equipo que diseña, desarrolla y sostiene cada sistema en producción.
          </p>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:auto-rows-fr sm:grid-cols-4 lg:mt-24 lg:grid-cols-6 xl:grid-cols-8">
          {TEAM.map((member, i) => (
            <li key={member.id} className={`relative hover:z-10 sm:col-span-2 ${rowStart(i, TEAM.length)}`}>
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <article className="flex h-full flex-col items-center rounded-[20px] bg-white p-7 text-center shadow-[0_8px_24px_rgba(10,10,10,0.06)] transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:scale-[1.025] hover:shadow-[0_18px_40px_rgba(10,10,10,0.13)] motion-reduce:transition-none motion-reduce:hover:transform-none">
                  <div className="size-[180px] shrink-0 overflow-hidden rounded-full bg-bone">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        width={180}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        style={
                          member.zoom
                            ? { transform: `scale(${member.zoom})`, transformOrigin: `${member.focusX ?? 50}% 0%` }
                            : undefined
                        }
                        className="h-full w-full object-cover object-top mix-blend-multiply"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-ink">
                        <span className="text-[3rem] font-medium text-paper">{initials(member.name)}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="mt-6 text-[1.625rem] font-medium leading-[1.1] tracking-[-0.025em]">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="mt-2 font-mono text-meta uppercase tracking-[0.08em] text-accent">
                      {member.role}
                    </p>
                  )}
                  {member.tagline && <p className="mt-5 text-body font-medium text-ink">{member.tagline}</p>}

                  {member.tags && member.tags.length > 0 && (
                    <ul className="mt-5 flex flex-wrap justify-center gap-2">
                      {member.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-bone px-3 py-1 font-mono text-meta text-slate">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto w-full pt-6">
                    <p className="border-t border-ink/10 pt-5 text-body text-slate">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
