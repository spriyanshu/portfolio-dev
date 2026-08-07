import { Reveal } from '@/components/Reveal';
import { ArrowUpRight, Check, Copy, Github, LinkedIn, Mail, XLogo } from '@/components/Icons';
import { useCopy } from '@/hooks/useCopy';
import { useLocalTime } from '@/hooks/useLocalTime';
import { Contact as ContactType, PersonalInfo } from '@/types';

interface ContactProps {
  contact: ContactType;
  personalInfo: PersonalInfo;
}

export const Contact = ({ contact, personalInfo }: ContactProps) => {
  const { copied, copy } = useCopy();
  const time = useLocalTime(personalInfo.timezone);

  const channels = [
    { label: 'GitHub', value: '@spriyanshu', href: personalInfo.social.github, icon: <Github className="h-4 w-4" /> },
    { label: 'LinkedIn', value: 'priyanshusingh07', href: personalInfo.social.linkedin, icon: <LinkedIn className="h-4 w-4" /> },
    { label: 'X', value: '@07spriyanshu', href: personalInfo.social.twitter, icon: <XLogo className="h-4 w-4" /> },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-edges" aria-hidden />

      <div className="shell relative">
        <Reveal>
          <div className="flex items-baseline gap-3 border-b border-line pb-4">
            <span className="font-mono text-2xs text-signal">07</span>
            <span className="mono-label">Contact</span>
            <span className="ml-auto font-mono text-2xs text-ink-ghost">
              {time} {personalInfo.timezoneLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display mt-12 text-[clamp(2.5rem,7vw,5rem)]">
            <span className="block text-gradient">Let&apos;s build something</span>
            <span className="serif-accent block text-signal">durable.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="lede mt-8 max-w-2xl">{contact.description}</p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            <a
              href={personalInfo.social.email}
              className="group flex items-center justify-between gap-4 bg-base p-6 transition-colors duration-500 hover:bg-base-elev"
            >
              <div className="min-w-0">
                <p className="mono-label">Email</p>
                <p className="mt-2 truncate text-lg text-ink transition-colors duration-300 group-hover:text-signal">
                  {contact.email}
                </p>
              </div>
              <Mail className="h-5 w-5 shrink-0 text-ink-ghost transition-colors duration-300 group-hover:text-signal" />
            </a>

            <button
              onClick={() => copy(contact.email)}
              className="group flex items-center justify-between gap-4 bg-base p-6 text-left transition-colors duration-500 hover:bg-base-elev"
            >
              <div>
                <p className="mono-label">Prefer to copy?</p>
                <p className="mt-2 text-lg text-ink transition-colors duration-300 group-hover:text-signal">
                  {copied ? 'Copied to clipboard' : 'Copy email address'}
                </p>
              </div>
              {copied ? (
                <Check className="h-5 w-5 shrink-0 text-signal" />
              ) : (
                <Copy className="h-5 w-5 shrink-0 text-ink-ghost transition-colors duration-300 group-hover:text-signal" />
              )}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 bg-base p-5 transition-colors duration-500 hover:bg-base-elev"
                >
                  <span className="text-ink-faint transition-colors duration-300 group-hover:text-ink">
                    {channel.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-ink">{channel.label}</span>
                    <span className="block truncate font-mono text-2xs text-ink-ghost">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-ghost transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 flex flex-wrap items-center gap-2 font-mono text-2xs text-ink-ghost">
            <span className="status-dot" />
            {personalInfo.availability.label} · Based in {personalInfo.location} · Comfortable with
            remote and distributed teams
          </p>
        </Reveal>
      </div>
    </section>
  );
};
