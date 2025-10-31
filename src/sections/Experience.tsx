import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '@/types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section
      id="experience"
      className="section-spacing relative min-h-screen flex items-center overflow-hidden "
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-12 md:mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          Experience
        </motion.h2>

        <div className="relative pl-6 md:pl-8">
          {/* Vertical Timeline Line */}
          <div className="timeline-line"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                {/* <div className="timeline-dot top-2"></div> */}

                {/* Content */}
                <div className="transition-all duration-300 hover:translate-x-1">
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    {/* Company Logo - No grayscale */}
                    <img
                      src={exp.companyLogo}
                      alt={exp.company}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover transition-all duration-300"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div className="min-w-0">
                          <h3
                            className="text-xl md:text-2xl font-semibold mb-1"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {exp.position}
                          </h3>
                          <p className="text-base md:text-lg" style={{ color: 'var(--accent)' }}>
                            {exp.company}
                          </p>
                        </div>
                        <div className="sm:text-right flex-shrink-0">
                          <span className="pill inline-block">
                            {exp.startDate} - {exp.endDate}
                          </span>
                          <p
                            className="text-xs md:text-sm mt-1"
                            style={{ color: 'var(--text-tertiary)' }}
                          >
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p
                        className="text-sm md:text-base mb-3 md:mb-4"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {exp.description}
                      </p>

                      {/* Achievements with Accent Border and Better Contrast */}
                      <ul className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex gap-3 pl-3 border-l-2 transition-colors"
                            style={{ borderColor: 'rgba(59, 130, 246, 0.3)' }}
                          >
                            <span
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: 'var(--accent)' }}
                            >
                              •
                            </span>
                            <span
                              className="text-sm md:text-base"
                              style={{
                                color: 'var(--text-secondary)',
                                lineHeight: '1.7',
                              }}
                            >
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Pills - Max 5 */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.slice(0, 5).map((tags, i) => {
                          const tech = tags.match(
                            /(\w+\.js|\w+\+?|AWS|Redis|Kafka|OAuth2|JWT|Docker|NestJS|PostgreSQL|MySQL|Spring Boot)/gi
                          );
                          return tech
                            ? tech.slice(0, 5).map((t, ti) => (
                                <span key={`${i}-${ti}`} className="pill">
                                  {t}
                                </span>
                              ))
                            : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
