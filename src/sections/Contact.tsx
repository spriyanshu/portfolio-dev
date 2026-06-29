import { motion } from 'framer-motion';
import { Contact as ContactType, PersonalInfo } from '@/types';
import { Heart, Sparkle, Star } from '@/components/Stickers';

interface ContactProps {
  contact: ContactType;
  personalInfo: PersonalInfo;
}

const githubPath =
  'M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z';

export const Contact = ({ contact, personalInfo }: ContactProps) => {
  const socials = [
    {
      label: 'GitHub',
      href: personalInfo.social.github,
      cls: 'chip-mint',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d={githubPath} />,
    },
    {
      label: 'LinkedIn',
      href: personalInfo.social.linkedin,
      cls: 'chip-sky',
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
    },
    {
      label: 'Twitter',
      href: personalInfo.social.twitter,
      cls: 'chip-pink',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
        />
      ),
    },
  ];

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <Sparkle className="absolute top-10 left-[10%] w-10 h-10 text-candy-yellow animate-bob hidden md:block" />
      <Star className="absolute bottom-16 right-[10%] w-9 h-9 text-candy-mint animate-wiggle hidden md:block" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="paper paper-note relative max-w-2xl mx-auto p-8 md:p-12 text-center"
        >
          <span className="tape tape-pink" style={{ top: -14, left: '50%', marginLeft: -46, transform: 'rotate(-5deg)' }} />
          <Heart className="absolute -top-5 -right-4 w-12 h-12 text-candy-pink animate-bob" />

          <p className="kicker">don't be shy</p>
          <h2 className="signature text-6xl md:text-8xl mt-1 mb-4">{contact.title}</h2>

          <p className="font-sans font-semibold text-lg text-ink-soft max-w-md mx-auto">
            {contact.description}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="font-hand text-3xl md:text-5xl text-candy-pink-deep inline-block mt-7 ink-link"
          >
            {contact.email}
          </a>

          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`chip ${s.cls} !px-4 !py-2 !text-base`}
                style={{ transform: `rotate(${i % 2 ? 3 : -3}deg)` }}
                aria-label={s.label}
              >
                <svg
                  className="w-5 h-5 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.6}
                >
                  {s.icon}
                </svg>
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
