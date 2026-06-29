import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PersonalInfo } from '@/types';
import { Star, Sparkle, Heart, FivePointStar, AnimatedSquiggle, AnimatedArrow } from '@/components/Stickers';
import { confettiFromEvent } from '@/utils/confetti';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const enter = (delay = 0, rotate = 0) => ({
  initial: { opacity: 0, scale: 0.9, rotate: 0 },
  animate: { opacity: 1, scale: 1, rotate },
  transition: { duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] as const },
});

export const Hero = ({ personalInfo }: HeroProps) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);

  const dragProps = {
    drag: true,
    dragConstraints: boardRef,
    dragElastic: 0.18,
    dragMomentum: false,
    whileHover: { scale: 1.04 },
    whileDrag: { scale: 1.09, zIndex: 50, cursor: 'grabbing' },
  };

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-20">
      <Sparkle className="absolute top-28 left-[6%] w-10 h-10 text-candy-yellow animate-bob hidden sm:block" />
      <Star className="absolute top-1/2 right-[5%] w-8 h-8 text-candy-mint animate-wiggle hidden sm:block" />
      <Heart className="absolute bottom-16 left-[12%] w-9 h-9 text-candy-pink hidden md:block" />

      <div className="container-custom grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* ---- Left: handwritten intro ---- */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.span {...enter(0)} className="chip chip-yellow mb-5">
            ✿ backend engineer · est. 2022
          </motion.span>

          <motion.h1 {...enter(0.08)} className="mt-4">
            <span className="block font-hand text-3xl md:text-4xl text-ink-soft -rotate-2">
              hey there, i'm
            </span>
            <span className="signature block text-7xl md:text-8xl lg:text-[8.5rem] mt-1">
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className="block font-marker text-2xl md:text-3xl text-ink mt-2">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          <div className="flex justify-center lg:justify-start my-3">
            <AnimatedSquiggle className="w-44 h-5" style={{ color: 'var(--pink-deep)' }} />
          </div>

          <motion.p
            {...enter(0.22)}
            className="font-sans text-lg md:text-xl text-ink-soft max-w-[520px] mx-auto lg:mx-0 mt-2 font-semibold"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            {...enter(0.3)}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-7"
          >
            <a href="#contact" onClick={confettiFromEvent} className="btn-candy pink">
              let's chat ♡
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-candy white">
              grab my résumé
            </a>
          </motion.div>

          <motion.div
            {...enter(0.38)}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-6"
          >
            {['NestJS', 'PostgreSQL', 'AWS', 'Redis', 'Microservices'].map((t, i) => (
              <span
                key={t}
                className={`chip ${['chip-mint', 'chip-sky', 'chip-pink', 'chip-coral', ''][i % 5]}`}
                style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ---- Right: draggable collage board ---- */}
        <div ref={boardRef} className="relative h-[440px] sm:h-[500px] lg:h-[560px]">
          {/* hint to grab things */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 font-hand text-xl text-ink/70 whitespace-nowrap"
          >
            psst — drag the photos around ✎
          </motion.span>

          <div key={resetKey} className="absolute inset-0">
            {/* big polaroid */}
            <motion.div
              {...enter(0.2, -5)}
              {...dragProps}
              className="absolute left-[8%] top-2 w-52 sm:w-60 polaroid cursor-grab active:cursor-grabbing"
            >
              <span className="tape tape-pink" style={{ top: -12, left: '38%', transform: 'rotate(-8deg)' }} />
              <div className="photo aspect-[4/5] overflow-hidden">
                <img
                  src="/6251128551063096651.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
              <p className="caption">that's me :)</p>
            </motion.div>

            {/* note card */}
            <motion.div
              {...enter(0.34, 4)}
              {...dragProps}
              className="absolute right-[4%] top-16 w-56 paper paper-note p-5 cursor-grab active:cursor-grabbing"
            >
              <span className="pin" style={{ top: -8, left: '50%' }} />
              <p className="font-hand text-2xl text-ink leading-snug">
                building reliable systems that <span className="hl hl-mint">move millions</span> — one clean API at a time.
              </p>
              <p className="font-marker text-base text-ink-soft mt-3">— from {personalInfo.location} 📍</p>
            </motion.div>

            {/* stats sticker */}
            <motion.div
              {...enter(0.46, -3)}
              {...dragProps}
              className="absolute left-[2%] bottom-2 w-44 paper p-4 text-center cursor-grab active:cursor-grabbing"
            >
              <span className="tape tape-mint" style={{ top: -12, right: 12, transform: 'rotate(10deg)' }} />
              <div className="flex items-end justify-center gap-1">
                <span className="signature text-5xl text-candy-pink-deep">3+</span>
                <span className="font-marker text-lg text-ink mb-1">yrs</span>
              </div>
              <p className="font-marker text-base text-ink-soft">shipping backend magic</p>
            </motion.div>

            {/* draggable star sticker */}
            <motion.div
              {...enter(0.5, 0)}
              {...dragProps}
              className="absolute right-[8%] bottom-6 cursor-grab active:cursor-grabbing"
            >
              <FivePointStar className="w-12 h-12 text-candy-yellow" />
            </motion.div>
          </div>

          <AnimatedArrow
            className="absolute right-[30%] bottom-12 w-24 h-16 text-ink hidden sm:block pointer-events-none"
            style={{ transform: 'rotate(8deg)' }}
          />

          {/* reset the board */}
          <button
            onClick={() => setResetKey((k) => k + 1)}
            className="chip chip-sky absolute -bottom-2 right-2 !text-sm"
          >
            ↺ shake the board
          </button>
        </div>
      </div>
    </section>
  );
};
