import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowUpRight, Github } from '@/components/Icons';
import { Project } from '@/types';

interface WorkProps {
  projects: Project[];
}

export const Work = ({ projects }: WorkProps) => (
  <section id="work" className="section">
    <div className="shell">
      <SectionHeading
        index="03"
        label="Selected work"
        title={
          <>
            Systems I&apos;ve designed,{' '}
            <span className="serif-accent text-ink-muted">shipped and kept running.</span>
          </>
        }
        description="Three projects that best show how I think about boundaries, throughput and failure."
        aside={`${projects.length} of many`}
      />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
            <article className="card group grid gap-8 p-6 md:grid-cols-12 md:gap-10 md:p-8">
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-center gap-3 font-mono text-2xs text-ink-ghost">
                  <span className="text-signal">{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.year}</span>
                  <span className="h-px w-4 bg-line-strong" aria-hidden />
                  <span>{project.status}</span>
                </div>

                <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                  {project.shortDescription}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-faint">
                  {project.longDescription}
                </p>

                {project.metrics.length > 0 && (
                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="sr-only">{metric.label}</dt>
                        <dd>
                          <p className="font-sans text-xl font-medium tracking-tight text-ink">
                            {metric.value}
                          </p>
                          <p className="mt-0.5 font-mono text-2xs text-ink-ghost">{metric.label}</p>
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm text-ink transition-colors duration-300 hover:text-signal"
                    >
                      Watch demo
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source
                    </a>
                  )}
                </div>
              </div>

              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative h-full min-h-[220px] overflow-hidden rounded-lg border border-line bg-base-surface bg-dots">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40"
                    aria-hidden
                  />
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-8 opacity-80 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10">
        <a
          href="https://github.com/spriyanshu"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-xl border border-line px-6 py-5 transition-colors duration-300 hover:border-line-strong hover:bg-base-elev"
        >
          <span className="text-sm text-ink-muted transition-colors duration-300 group-hover:text-ink">
            More experiments, half-finished ideas and dotfiles live on GitHub
          </span>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
        </a>
      </Reveal>
    </div>
  </section>
);
