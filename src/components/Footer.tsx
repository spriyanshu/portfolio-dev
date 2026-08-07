import { NAV_ITEMS, scrollToSection } from '@/lib/nav';
import { Github, LinkedIn, Mail, XLogo } from '@/components/Icons';
import { useLocalTime } from '@/hooks/useLocalTime';
import { PersonalInfo } from '@/types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export const Footer = ({ personalInfo }: FooterProps) => {
  const time = useLocalTime(personalInfo.timezone);
  const year = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: personalInfo.social.github, icon: <Github className="h-4 w-4" /> },
    { label: 'LinkedIn', href: personalInfo.social.linkedin, icon: <LinkedIn className="h-4 w-4" /> },
    { label: 'X', href: personalInfo.social.twitter, icon: <XLogo className="h-4 w-4" /> },
    { label: 'Email', href: personalInfo.social.email, icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mono-label">Currently</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-ink">
              <span className="status-dot" />
              {personalInfo.availability.label}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-faint">
              {personalInfo.location} · {time} {personalInfo.timezoneLabel}
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Footer">
            <p className="mono-label">Index</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mono-label">Elsewhere</p>
            <ul className="mt-3 flex gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink-faint transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 font-mono text-2xs text-ink-ghost sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {personalInfo.name}
          </p>
          <p>Built with React, TypeScript, Tailwind and Framer Motion.</p>
        </div>
      </div>

      {/* Oversized wordmark, bled off the bottom edge */}
      <div
        aria-hidden
        className="mask-fade-b pointer-events-none select-none px-6 pb-0"
      >
        <p className="display translate-y-[22%] text-center text-[19vw] leading-none text-white/[0.035]">
          {personalInfo.name.toUpperCase()}
        </p>
      </div>
    </footer>
  );
};
