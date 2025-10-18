import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { About as AboutType } from '@/types';
import { fadeInUp, staggerContainer } from '@/utils/animations';

interface AboutProps {
  about: AboutType;
}

export const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="section-spacing relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle title={about.title} subtitle="Getting to know me" />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="card card-glow"
        >
          {/* Decorative quote mark */}
          <div className="absolute top-6 left-6 text-blue-500/20">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="space-y-6 pt-8">
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="text-lg text-gray-300 leading-relaxed first-letter:text-2xl first-letter:font-bold first-letter:text-blue-400"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Decorative element */}
          <div className="mt-8 pt-6 border-t border-dark-border/30 flex items-center gap-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            <p className="text-gray-400 italic">Always learning, always building</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
