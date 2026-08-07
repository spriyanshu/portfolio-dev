import { motion } from 'framer-motion';
import { About as AboutType } from '@/types';
import { Heart, Sparkle, FivePointStar } from '@/components/Stickers';

interface AboutProps {
  about: AboutType;
}

const facts = [
  { value: '4.5+', label: 'years building', cls: 'chip-pink' },
  { value: '15+', label: 'projects shipped', cls: 'chip-mint' },
  { value: '$2M+', label: 'monthly payments', cls: 'chip-yellow' },
  { value: '99.99%', label: 'uptime', cls: 'chip-sky' },
];

export const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <Sparkle className="absolute top-10 right-[8%] w-9 h-9 text-candy-yellow animate-bob hidden md:block" />

      <div className="container-custom grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-10 items-center">
        {/* ---- Photo column ---- */}
        <div className="relative flex justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="polaroid tilt relative w-60 sm:w-72"
            style={{ '--rot': '-4deg' } as React.CSSProperties}
          >
            <span className="tape tape-pink" style={{ top: -12, left: '50%', marginLeft: -46, transform: 'rotate(-6deg)' }} />
            <div className="photo aspect-[4/5] overflow-hidden">
              <img
                src="/6060144979042485202.jpg"
                alt="Priyanshu at the beach"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="caption">sunset state of mind 🌅</p>
          </motion.div>
          <FivePointStar className="absolute -top-3 -left-2 w-10 h-10 text-candy-yellow animate-wiggle" />
        </div>

        {/* ---- Diary card column ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="paper paper-note relative p-7 md:p-10"
        >
          <span className="tape" style={{ top: -14, left: '12%', transform: 'rotate(-6deg)' }} />
          <span className="tape tape-pink" style={{ top: -14, right: '14%', transform: 'rotate(7deg)' }} />
          <Heart className="absolute -right-4 -bottom-4 w-12 h-12 text-candy-pink" />

          <p className="kicker">my little story</p>
          <h2 className="signature text-5xl md:text-6xl mt-1 mb-5">{about.title}</h2>

          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-base md:text-lg text-ink-soft font-semibold leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                className={`chip ${f.cls} !text-base !px-4 !py-2`}
                style={{ transform: `rotate(${i % 2 ? 2.5 : -2.5}deg)` }}
              >
                <span className="font-script text-xl mr-1.5 font-bold">{f.value}</span>
                {f.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
