import { PersonalInfo } from '@/types';
import { FivePointStar, Squiggle } from './Stickers';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export const Footer = ({ personalInfo }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const browse = [
    { label: 'about', href: '#about' },
    { label: 'work', href: '#projects' },
    { label: 'gigs', href: '#experience' },
    { label: 'features', href: '#featured' },
  ];

  return (
    <footer className="relative mt-10">
      <div
        className="relative"
        style={{
          background: 'var(--cream)',
          borderTop: '3px dashed var(--cream-edge)',
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
        }}
      >
        <div className="container-custom py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <span className="sticker w-10 h-10">
                  <FivePointStar className="w-5 h-5" style={{ color: 'var(--yellow)' }} />
                </span>
                <span className="font-script text-3xl font-bold text-ink">{personalInfo.name}</span>
              </div>
              <p className="font-hand text-2xl text-ink-soft mt-3 max-w-xs leading-snug">
                backend engineer · cloud tinkerer · coffee-powered ☕
              </p>
              <Squiggle className="w-40 h-4 mt-2 text-candy-pink-deep" style={{ color: 'var(--pink-deep)' }} />
            </div>

            {/* Browse */}
            <div>
              <p className="font-marker text-xl text-ink mb-3">wander around</p>
              <ul className="space-y-2">
                {browse.map((b) => (
                  <li key={b.label}>
                    <a href={b.href} className="font-sans font-semibold text-ink-soft hover:text-ink transition-colors">
                      {b.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Say hi */}
            <div>
              <p className="font-marker text-xl text-ink mb-3">say hi</p>
              <ul className="space-y-2 font-sans font-semibold text-ink-soft">
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-ink transition-colors">
                    {personalInfo.email}
                  </a>
                </li>
                <li>{personalInfo.phone}</li>
                <li>{personalInfo.location}</li>
              </ul>
              <div className="flex gap-2 mt-4">
                {[
                  { href: personalInfo.social.github, label: 'gh' },
                  { href: personalInfo.social.linkedin, label: 'in' },
                  { href: personalInfo.social.twitter, label: 'x' },
                ].map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`chip ${['chip-mint', 'chip-sky', 'chip-pink'][i]} !w-9 !h-9 !p-0 justify-center !text-sm`}
                    aria-label={s.label}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6" style={{ borderTop: '2px dashed var(--cream-edge)' }}>
            <p className="font-hand text-xl text-ink-soft text-center">
              © {currentYear} {personalInfo.name} — made with ♡, paper & lots of glue
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
