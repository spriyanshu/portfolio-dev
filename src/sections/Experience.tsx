import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Experience as ExperienceType } from '@/types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience = ({ experiences }: ExperienceProps) => (
  <section id="experience" className="section">
    <div className="shell">
      <SectionHeading
        index="02"
        label="Experience"
        title={
          <>
            Four and a half years,{' '}
            <span className="serif-accent text-ink-muted">three problem spaces.</span>
          </>
        }
        description="Fintech compliance, payment rails, and high-traffic media APIs — each one taught me something different about failure."
        aside="git log --author=priyanshu"
      />

      <ol className="relative">
        {/* Continuous rail the entries hang off */}
        <div
          className="absolute left-0 top-2 hidden h-full w-px bg-gradient-to-b from-line-strong via-line to-transparent md:block md:left-[19%]"
          aria-hidden
        />

        {experiences.map((job, index) => (
          <Reveal as="li" key={job.id} delay={index * 0.06} className="relative">
            <div className="group grid gap-6 py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-2">
                <p className="font-mono text-2xs leading-relaxed text-ink-muted">
                  {job.startDate}
                  <br />
                  <span className={job.current ? 'text-signal' : 'text-ink-ghost'}>
                    {job.endDate}
                  </span>
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-ghost">
                  {job.type}
                </p>
              </div>

              <div className="relative md:col-span-10 md:pl-10">
                <span
                  className={`absolute -left-[5px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-base md:block ${
                    job.current ? 'bg-signal' : 'bg-ink-ghost'
                  } transition-colors duration-500 group-hover:bg-signal`}
                  aria-hidden
                />

                <div className="flex flex-wrap items-center gap-3">
                  <img
                    src={job.companyLogo}
                    alt=""
                    loading="lazy"
                    className="h-7 w-7 rounded-md border border-line object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                    {job.company}
                  </h3>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/25 bg-signal/[0.07] px-2 py-0.5 font-mono text-[10px] text-signal">
                      <span className="status-dot" />
                      now
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-ink-muted">
                  {job.position} · {job.location}
                </p>

                <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{job.description}</p>

                <ul className="mt-5 max-w-3xl space-y-2.5">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-ink-faint">
                      <span
                        className="mt-[9px] h-px w-3 shrink-0 bg-ink-ghost transition-colors duration-300 group-hover:bg-signal"
                        aria-hidden
                      />
                      <span className="transition-colors duration-300 group-hover:text-ink-muted">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {index < experiences.length - 1 && <hr className="border-line" />}
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
