import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Skills } from '@/types';

interface StackProps {
  skills: Skills;
}

export const Stack = ({ skills }: StackProps) => (
  <section id="stack" className="section">
    <div className="shell">
      <SectionHeading
        index="05"
        label="Stack"
        title={
          <>
            Tools I reach for,{' '}
            <span className="serif-accent text-ink-muted">in roughly that order.</span>
          </>
        }
        description="Not a checklist — these are the things I've run in production and would happily debug at 3am."
        aside="cat stack.toml"
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.categories.map((category, index) => (
          <Reveal key={category.name} delay={index * 0.05}>
            <div className="group h-full bg-base p-6 transition-colors duration-500 hover:bg-base-elev">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-medium text-ink">{category.name}</h3>
                <span className="font-mono text-2xs text-ink-ghost">{category.note}</span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
