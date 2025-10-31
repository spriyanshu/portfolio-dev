import { motion } from 'framer-motion';
import { Skills as SkillsType } from '@/types';

interface SkillsProps {
  skills: SkillsType;
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section
      id="skills"
      className="section-spacing  relative min-h-screen flex items-center overflow-hidden"
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
          Skills & Technologies
        </motion.h2>

        <div className="space-y-10 md:space-y-12">
          {skills.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3
                className="text-base md:text-lg uppercase tracking-wider mb-3 md:mb-4"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {category.name}
              </h3>
              {/* Pills: 2-3 per row on mobile, 13px font */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.items.map((skill, i) => (
                  <span key={i} className="pill text-xs md:text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
