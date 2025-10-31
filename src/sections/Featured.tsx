import { motion } from 'framer-motion';
import { Featured as FeaturedType } from '@/types';

interface FeaturedProps {
  featured: FeaturedType[];
}

export const Featured = ({ featured }: FeaturedProps) => {
  if (featured.length === 0) return null;

  return (
    <section id="featured" className="section-spacing">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-12 md:mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          Featured
        </motion.h2>

        <div className="space-y-6 md:space-y-8">
          {featured.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block group hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-lg md:text-xl font-semibold mb-2 group-hover:transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-base mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    <span className="pill">{item.platform}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-1 group-hover:transition-colors"
                  style={{ color: 'var(--text-tertiary)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
