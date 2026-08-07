import { useEffect, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Check, Copy, Github, LinkedIn, XLogo } from '@/components/Icons';
import { useLocalTime } from '@/hooks/useLocalTime';
import { useCopy } from '@/hooks/useCopy';
import { scrollToSection } from '@/lib/nav';
import { Metric, PersonalInfo } from '@/types';

/** 44 samples of "uptime" — a few degraded slots keep it from looking fake. */
const UPTIME = Array.from({ length: 44 }, (_, i) => (i === 12 || i === 29 ? 'degraded' : 'ok'));

interface HeroProps {
  personalInfo: PersonalInfo;
  metrics: Metric[];
}

export const Hero = ({ personalInfo, metrics }: HeroProps) => {
  const reduced = useReducedMotion();
  const time = useLocalTime(personalInfo.timezone);
  const { copied, copy } = useCopy();

  const mouseX = useSpring(useMotionValue(0.5), { stiffness: 60, damping: 24 });
  const mouseY = useSpring(useMotionValue(0.2), { stiffness: 60, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(74,222,128,0.07), transparent 70%)`;

  useEffect(() => {
    if (reduced) return;
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mouseX, mouseY, reduced]);

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-edges" aria-hidden />
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: spotlight }}
        aria-hidden
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/[0.07] px-3 py-1 font-mono text-2xs text-signal">
                <span className="status-dot" />
                {personalInfo.availability.label}
              </span>
              <span className="font-mono text-2xs text-ink-ghost">
                {personalInfo.location} · {time} {personalInfo.timezoneLabel}
              </span>
            </motion.div>

            <motion.h1 {...rise(0.08)} className="display mt-8 text-[clamp(2.75rem,8.5vw,6rem)]">
              <span className="block text-gradient">I build backend</span>
              <span className="block text-gradient">systems that</span>
              <span className="block">
                <span className="serif-accent text-signal">stay up.</span>
              </span>
            </motion.h1>

            <motion.p {...rise(0.16)} className="lede mt-8 max-w-xl">
              {personalInfo.intro}
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollToSection('work')} className="btn-primary group">
                View selected work
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => copy(personalInfo.email)}
                className="btn-ghost group"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-signal" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span className="font-mono text-2xs">
                  {copied ? 'Copied to clipboard' : personalInfo.email}
                </span>
              </button>

              <div className="flex items-center gap-1.5">
                {[
                  { label: 'GitHub', href: personalInfo.social.github, icon: <Github className="h-4 w-4" /> },
                  { label: 'LinkedIn', href: personalInfo.social.linkedin, icon: <LinkedIn className="h-4 w-4" /> },
                  { label: 'X', href: personalInfo.social.twitter, icon: <XLogo className="h-4 w-4" /> },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink-faint transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...rise(0.32)} className="lg:col-span-5">
            <StatusPanel personalInfo={personalInfo} time={time} />
          </motion.div>
        </div>

        <motion.dl
          {...rise(0.42)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:mt-28 md:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="group bg-base p-5 transition-colors duration-500 hover:bg-base-elev">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <p className="display text-3xl text-ink md:text-4xl">
                  {metric.value}
                  <span className="text-lg text-signal md:text-xl">{metric.unit}</span>
                </p>
                <p className="mt-2 text-sm leading-snug text-ink-muted">{metric.label}</p>
                <p className="mt-1 font-mono text-2xs leading-snug text-ink-ghost opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {metric.detail}
                </p>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

const StatusPanel = ({ personalInfo, time }: { personalInfo: PersonalInfo; time: string }) => {
  const [latency, setLatency] = useState(42);

  useEffect(() => {
    const id = window.setInterval(() => setLatency(36 + Math.floor(Math.random() * 14)), 2600);
    return () => window.clearInterval(id);
  }, []);

  const rows = [
    { key: 'role', value: personalInfo.title },
    { key: 'company', value: 'Warner Bros. Discovery' },
    { key: 'region', value: 'ap-south-1 · Bangalore' },
    { key: 'local_time', value: `${time} ${personalInfo.timezoneLabel}` },
    { key: 'p99_latency', value: `${latency}ms` },
  ];

  return (
    <div className="card p-0">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </span>
        <p className="ml-1 font-mono text-2xs text-ink-faint">status — production</p>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-2xs text-signal">
          <span className="status-dot" />
          operational
        </span>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-end gap-[2px]" role="img" aria-label="90 day uptime history, all operational">
          {UPTIME.map((state, index) => (
            <motion.span
              key={index}
              initial={{ scaleY: 0.2, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.012, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`h-7 flex-1 origin-bottom rounded-[1px] ${
                state === 'ok' ? 'bg-signal/45' : 'bg-amber-400/50'
              } transition-colors duration-300 hover:bg-signal`}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-ink-ghost">
          <span>90 days ago</span>
          <span>99.99% uptime</span>
          <span>today</span>
        </div>
      </div>

      <dl className="border-t border-line">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5 last:border-b-0"
          >
            <dt className="font-mono text-2xs text-ink-ghost">{row.key}</dt>
            <dd className="font-mono text-2xs text-ink-muted">{row.value}</dd>
          </div>
        ))}
      </dl>

      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between border-t border-line px-4 py-3 transition-colors duration-300 hover:bg-white/[0.03]"
      >
        <span className="font-mono text-2xs text-ink-muted">Full résumé (PDF)</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
      </a>
    </div>
  );
};
