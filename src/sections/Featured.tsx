import { motion } from 'framer-motion';
import { Featured as FeaturedType } from '@/types';
import { FivePointStar } from '@/components/Stickers';

interface FeaturedProps {
  featured: FeaturedType[];
}

const rots = [-2.5, 2.5, -1.5, 2];

export const Featured = ({ featured }: FeaturedProps) => {
  if (featured.length === 0) return null;

  return (
    <section id="featured" className="section-spacing relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="kicker">a lil' clout</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">creator diaries</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featured.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, rotate: rots[index % rots.length] }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="paper tilt relative block p-6 md:p-7"
              style={{ '--rot': `${rots[index % rots.length]}deg` } as React.CSSProperties}
            >
              <span className="pin" style={{ top: -8, left: 24 }} />

              <div className="flex items-center gap-2 mb-3">
                <span className="chip chip-pink !text-sm">{item.platform}</span>
                <span className="font-marker text-ink-soft text-lg">'{item.date.slice(-2)}</span>
              </div>

              <h3 className="font-script text-2xl md:text-3xl font-bold text-ink leading-tight">
                {item.title}
              </h3>
              <p className="font-sans font-semibold text-ink-soft mt-3">{item.description}</p>

              <span className="ink-link font-marker text-lg mt-4 inline-block">read it ↗</span>

              <FivePointStar className="absolute -bottom-3 -right-3 w-10 h-10 text-candy-yellow animate-wiggle" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
