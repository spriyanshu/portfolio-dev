import { motion } from 'framer-motion';
import { Building } from '@/types';
import { Sparkle, Star, FivePointStar } from '@/components/Stickers';

interface WorkshopProps {
  building: Building[];
}

const fills = ['var(--coral)', 'var(--sky)', 'var(--mint)', 'var(--pink)'];
const rots = [-2, 1.5, -1.5, 2];

export const Workshop = ({ building }: WorkshopProps) => {
  return (
    <section id="building" className="section-spacing relative overflow-hidden">
      <Star className="absolute top-14 right-[8%] w-9 h-9 text-candy-mint animate-bob hidden md:block" />

      <div className="container-custom">
        <div className="text-center mb-14 relative">
          <p className="kicker">work in progress</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">on the workbench</h2>
          <p className="font-hand text-2xl text-ink-soft mt-2">
            side quests i'm tinkering with <span className="hl hl-mint">after hours</span> 🔧
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-7 max-w-5xl mx-auto">
          {building.map((item, index) => {
            const fill = fills[index % fills.length];
            const rot = rots[index % rots.length];
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, rotate: rot }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ rotate: 0, y: -6 }}
                className="paper relative h-full p-6 pt-9"
                style={{ '--rot': `${rot}deg` } as React.CSSProperties}
              >
                <span className="pin" style={{ top: -10, left: '50%', marginLeft: -9 }} />

                <span
                  className="wip-stamp absolute top-4 right-4"
                  style={{ color: fill }}
                >
                  {item.status}
                </span>

                <h3 className="font-script text-3xl text-ink leading-none pr-16 mb-2">{item.name}</h3>
                <p className="font-sans text-ink-soft text-sm leading-relaxed mb-5">{item.blurb}</p>

                {/* hand-drawn progress bar */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-marker text-xs uppercase tracking-wide text-ink-soft">progress</span>
                    <span className="font-hand text-xl text-ink leading-none">{item.progress}%</span>
                  </div>
                  <div className="progress">
                    <motion.div
                      className="progress-fill"
                      style={{ backgroundColor: fill }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.9, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip !text-xs !px-2.5 !py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {index === 0 && (
                  <Sparkle className="absolute -bottom-4 -left-4 w-8 h-8 text-candy-yellow animate-wiggle" />
                )}
              </motion.div>
            );

            return item.link ? (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={item.id}>{Card}</div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <span className="chip chip-sky !text-base !px-4 !py-2 inline-flex items-center gap-1">
            <FivePointStar className="w-4 h-4" style={{ color: 'var(--yellow)' }} />
            more brewing in the garage...
          </span>
        </div>
      </div>
    </section>
  );
};
