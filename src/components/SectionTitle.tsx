import { motion } from 'framer-motion';
import { titleAnimation, underlineAnimation } from '@/utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="relative inline-block">
        <motion.h2
          variants={titleAnimation}
          className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
          {title}
        </motion.h2>
        <motion.div
          variants={underlineAnimation}
          className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full origin-left"
        />
      </motion.div>
      {subtitle && (
        <motion.p variants={titleAnimation} className="text-gray-400 text-lg mt-4">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
