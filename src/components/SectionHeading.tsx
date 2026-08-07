import { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  aside?: ReactNode;
}

export const SectionHeading = ({
  index,
  label,
  title,
  description,
  aside,
}: SectionHeadingProps) => (
  <Reveal className="mb-14 md:mb-20">
    <div className="flex items-baseline gap-3 border-b border-line pb-4">
      <span className="font-mono text-2xs text-signal">{index}</span>
      <span className="mono-label">{label}</span>
      <span className="ml-auto hidden font-mono text-2xs text-ink-ghost md:block">
        {aside}
      </span>
    </div>

    <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
      <h2 className="display text-4xl text-gradient md:col-span-7 md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-md text-base leading-relaxed text-ink-muted md:col-span-5 md:justify-self-end">
          {description}
        </p>
      )}
    </div>
  </Reveal>
);
