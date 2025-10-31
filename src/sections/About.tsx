import { motion } from 'framer-motion';
import { About as AboutType } from '@/types';

interface AboutProps {
  about: AboutType;
}

export const About = ({ about }: AboutProps) => {
  return (
    <section
      id="about"
      className="section-spacing  relative min-h-screen flex items-center overflow-hidden "
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-start"
        >
          {/* Left: Content with accent line */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-6 top-0 accent-line"></div>

            <h2
              className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12"
              style={{ color: 'var(--text-primary)' }}
            >
              {about.title}
            </h2>

            <div className="space-y-4 md:space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Quick Facts - Stack on mobile */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 md:gap-8">
            <div className="text-center lg:text-left">
              <p
                className="text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Years
              </p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                3+
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p
                className="text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Projects
              </p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                15+
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p
                className="text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Tech
              </p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                20+
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
