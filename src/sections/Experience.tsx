import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Experience as ExperienceType } from '@/types';
import { fadeInLeft, staggerContainer } from '@/utils/animations';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section id="experience" className="section-spacing relative">
      {/* Gradient overlay */}
      <div className="gradient-overlay" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title="Experience" subtitle="Professional journey and achievements" />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInLeft}
              className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300"
            >
              {/* Timeline dot with glow */}
              <motion.div
                className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 shadow-glow"
                whileHover={{ scale: 1.5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />

              {/* Experience Card */}
              <motion.div
                className="card card-glow group"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Soft gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="w-14 h-14 rounded-lg object-cover border border-dark-border/50 bg-dark-bg"
                        />
                      </motion.div>

                      {/* Title and Company */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-blue-400 mt-1 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Date and Location */}
                    <div className="text-gray-400 sm:text-right">
                      <p className="font-medium flex items-center gap-2 sm:justify-end">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="text-sm mt-1 flex items-center gap-2 sm:justify-end">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="flex gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-blue-400 mt-1.5 flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
