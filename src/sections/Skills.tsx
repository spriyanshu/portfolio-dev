import { motion } from 'framer-motion';
import { Skills as SkillsType } from '@/types';
import { Sparkle, Star } from '@/components/Stickers';

interface SkillsProps {
  skills: SkillsType;
}

const colors = ['chip-pink', 'chip-yellow', 'chip-mint', 'chip-sky', 'chip-coral', ''];

export const Skills = ({ skills }: SkillsProps) => {
  let n = 0;

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      <Star className="absolute top-12 left-[7%] w-9 h-9 text-candy-yellow animate-wiggle hidden md:block" />

      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="kicker">collect 'em all</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">my tech sticker sheet</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="sticker-sheet relative max-w-4xl mx-auto p-6 md:p-9"
        >
          <Sparkle className="absolute -top-4 -right-4 w-10 h-10 text-candy-yellow animate-bob" />
          <span className="chip chip-pink absolute -top-4 left-8 -rotate-6 !text-sm">peel me ✦</span>

          <div className="space-y-7 mt-3">
            {skills.categories.map((category) => (
              <div key={category.name}>
                <p className="font-marker text-lg text-ink-soft uppercase tracking-wide mb-3 border-b-2 border-dashed border-cream-edge pb-1">
                  {category.name}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => {
                    const color = colors[n % colors.length];
                    n += 1;
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (n % 6) * 0.04, ease: [0.34, 1.56, 0.64, 1] }}
                        className={`chip ${color} !text-sm md:!text-base`}
                        style={{ transform: `rotate(${(n % 3) - 1}deg)` }}
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
