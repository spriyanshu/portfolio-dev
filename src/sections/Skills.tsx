import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Skills as SkillsType } from '@/types';
import { scaleIn, staggerContainer } from '@/utils/animations';

interface SkillsProps {
  skills: SkillsType;
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="section-spacing relative">
      {/* Gradient overlay */}
      <div className="gradient-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title="Skills & Technologies" subtitle="Tools and technologies I work with" />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="card card-glow group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 text-sm rounded-md transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
