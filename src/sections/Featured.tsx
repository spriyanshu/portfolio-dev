import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Featured as FeaturedType } from '@/types';
import { fadeInUp, staggerContainer } from '@/utils/animations';

interface FeaturedProps {
  featured: FeaturedType[];
}

export const Featured = ({ featured }: FeaturedProps) => {
  if (featured.length === 0) return null;

  return (
    <section id="featured" className="section-spacing relative">
      {/* Gradient overlay */}
      <div className="gradient-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title="Featured" subtitle="Places where I've been mentioned" />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featured.map((item) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="card card-glow group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md mb-3">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <span className="text-sm text-blue-400 font-medium">{item.platform}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 group-hover:text-blue-400 transition-colors"
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
                  </motion.div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-dark-border/30">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {item.date}
                  </div>
                  <div className="text-blue-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
