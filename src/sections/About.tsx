import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { About as AboutType, Education } from '@/types';

interface AboutProps {
  about: AboutType;
  education: Education[];
}

export const About = ({ about, education }: AboutProps) => (
  <section id="about" className="section">
    <div className="shell">
      <SectionHeading
        index="01"
        label="About"
        title={
          <>
            I work on the parts nobody sees{' '}
            <span className="serif-accent text-ink-muted">until they break.</span>
          </>
        }
        description={about.description}
        aside="~/about"
      />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <p
                  className={
                    index === 0
                      ? 'text-lg leading-relaxed text-ink md:text-xl'
                      : 'leading-relaxed text-ink-muted'
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12">
            <p className="mono-label">Operating principles</p>
            <ul className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {about.principles.map((principle) => (
                <li
                  key={principle}
                  className="bg-base p-4 text-sm leading-snug text-ink-muted transition-colors duration-500 hover:bg-base-elev hover:text-ink"
                >
                  <span className="mr-2 text-signal">—</span>
                  {principle}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="mono-label">Focus areas</p>
            <ul className="mt-4">
              {about.focus.map((area, index) => (
                <li
                  key={area.id}
                  className="group border-b border-line py-4 transition-colors duration-300 first:border-t hover:border-line-strong"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-2xs text-ink-ghost transition-colors duration-300 group-hover:text-signal">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-ink">{area.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-faint transition-colors duration-300 group-hover:text-ink-muted">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <p className="mono-label">Education</p>
            {education.map((entry) => (
              <div key={entry.id} className="mt-4 border-t border-line pt-4">
                <p className="text-sm font-medium text-ink">{entry.degree}</p>
                <p className="mt-1 text-sm text-ink-muted">{entry.institution}</p>
                <p className="mt-1 font-mono text-2xs text-ink-ghost">
                  {entry.startDate} — {entry.endDate} · {entry.location}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
