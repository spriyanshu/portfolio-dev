import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowUpRight } from '@/components/Icons';
import { Building } from '@/types';

interface LabProps {
  building: Building[];
}

export const Lab = ({ building }: LabProps) => (
  <section id="lab" className="section">
    <div className="shell">
      <SectionHeading
        index="04"
        label="Lab"
        title={
          <>
            Unfinished things,{' '}
            <span className="serif-accent text-ink-muted">honestly labelled.</span>
          </>
        }
        description="Side projects in progress. Progress bars are self-reported and therefore optimistic."
        aside="status: wip"
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
        {building.map((item, index) => {
          const Wrapper = item.link ? 'a' : 'div';

          return (
            <Reveal key={item.id} delay={index * 0.08}>
              <Wrapper
                {...(item.link
                  ? { href: item.link, target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="group flex h-full flex-col bg-base p-6 transition-colors duration-500 hover:bg-base-elev"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium tracking-tight text-ink">{item.name}</h3>
                  {item.link && (
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-ghost transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                  )}
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-faint transition-colors duration-300 group-hover:text-ink-muted">
                  {item.blurb}
                </p>

                <div className="mt-6">
                  <div className="flex items-center justify-between font-mono text-2xs">
                    <span className="text-ink-ghost">{item.status}</span>
                    <span className="text-ink-muted">{item.progress}%</span>
                  </div>
                  <div className="mt-2 h-px w-full bg-line-strong">
                    <motion.div
                      className="h-px bg-signal"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: item.progress / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
