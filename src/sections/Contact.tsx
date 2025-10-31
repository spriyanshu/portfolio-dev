import { motion } from 'framer-motion';
import { Contact as ContactType, PersonalInfo } from '@/types';

interface ContactProps {
  contact: ContactType;
  personalInfo: PersonalInfo;
}

export const Contact = ({ contact, personalInfo }: ContactProps) => {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          {/* Title - Responsive sizing */}
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {contact.title}
          </h2>

          {/* Description - Reduced font size, better line-height */}
          <p
            className="text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-[600px]"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}
          >
            {contact.description}
          </p>

          {/* Large Clickable Email - No button */}
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.02 }}
            className="inline-block text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 md:mb-12 transition-all duration-300 group relative"
            style={{ color: 'var(--accent)' }}
          >
            {contact.email}
            {/* Underline slide-in on hover */}
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </motion.a>

          {/* Social Icons - 28px desktop, 24px mobile, centered on mobile */}
          <div className="flex items-center justify-center md:justify-start gap-5 md:gap-5">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg
                className="w-6 md:w-7 h-6 md:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 md:w-7 h-6 md:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <svg
                className="w-6 md:w-7 h-6 md:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase tracking-wider"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Scroll
        </span>
        <div className="scroll-indicator">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
