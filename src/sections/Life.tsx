import { motion } from 'framer-motion';
import { Sparkle, Heart, Star, Arrow, FivePointStar } from '@/components/Stickers';

const photos = [
  { src: '/6260126340044492080.jpg', cap: 'kayak > keyboard 🛶', rot: -3, span: '', ratio: 'aspect-[4/3]', tape: 'tape tape-mint' },
  { src: '/6260126340044491920.jpg', cap: 'lake days, no agenda 🏞️', rot: -4, span: '', ratio: 'aspect-[4/3]', tape: 'tape' },
  { src: '/6060144979042485036.jpg', cap: 'chasing the sun 🌇', rot: 4, span: '', ratio: 'aspect-[3/4]', tape: 'tape tape-sky' },
  { src: '/6060144979042485047.jpg', cap: 'skies like these 🧡', rot: -2, span: '', ratio: 'aspect-[3/4]', tape: 'tape tape-mint' },
  { src: '/6260126340044491873.jpg', cap: 'golden paddy season', rot: 5, span: 'sm:col-span-2', ratio: 'aspect-[16/9]', tape: 'tape tape-pink' },
];

export const Life = () => {
  return (
    <section id="life" className="section-spacing relative overflow-hidden">
      <Star className="absolute top-12 right-[7%] w-9 h-9 text-candy-yellow animate-wiggle hidden md:block" />
      <Heart className="absolute bottom-20 left-[5%] w-9 h-9 text-candy-pink animate-bob hidden md:block" />

      <div className="container-custom">
        <div className="text-center mb-14 relative">
          <p className="kicker">life beyond the terminal</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">off the clock</h2>
          <p className="font-hand text-2xl text-ink-soft mt-2">
            when i'm not shipping APIs, you'll find me chasing roads & hills ⛰️
          </p>
          <Arrow
            className="absolute -right-2 top-0 w-20 h-14 text-ink hidden lg:block"
            style={{ transform: 'rotate(20deg) scaleX(-1)' }}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-auto items-start gap-x-6 gap-y-12 max-w-4xl mx-auto">
          {photos.map((p, index) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rot }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className={`polaroid tilt relative ${p.span}`}
              style={{ '--rot': `${p.rot}deg` } as React.CSSProperties}
            >
              <span
                className={p.tape}
                style={{ top: -12, left: '50%', marginLeft: -46, transform: `rotate(${index % 2 ? 6 : -6}deg)` }}
              />
              <div className={`photo ${p.ratio} overflow-hidden`}>
                <img src={p.src} alt={p.cap} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <p className="caption">{p.cap}</p>
              {index === 0 && (
                <Sparkle className="absolute -bottom-4 -right-4 w-9 h-9 text-candy-yellow animate-wiggle" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <span className="chip chip-mint !text-base !px-4 !py-2 inline-flex items-center gap-1">
            <FivePointStar className="w-4 h-4" style={{ color: 'var(--yellow)' }} />
            more adventures loading...
          </span>
        </div>
      </div>
    </section>
  );
};
