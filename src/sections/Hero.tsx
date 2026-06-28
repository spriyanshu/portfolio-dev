import { motion } from 'framer-motion';
import { PersonalInfo } from '@/types';
import { Star, Sparkle, Heart, FivePointStar, Squiggle, Arrow } from '@/components/Stickers';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const float = (delay = 0) => ({
  initial: { opacity: 0, y: 24, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] as const },
});

export const Hero = ({ personalInfo }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-20">
      {/* scattered background stickers */}
      <Sparkle className="absolute top-28 left-[6%] w-10 h-10 text-candy-yellow animate-bob hidden sm:block" />
      <Star className="absolute top-1/2 right-[5%] w-8 h-8 text-candy-mint animate-wiggle hidden sm:block" />
      <Heart className="absolute bottom-16 left-[12%] w-9 h-9 text-candy-pink hidden md:block" />

      <div className="container-custom grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* ---- Left: handwritten intro ---- */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.span {...float(0)} className="chip chip-yellow mb-5">
            ✿ backend engineer · est. 2022
          </motion.span>

          <motion.h1 {...float(0.08)} className="mt-4">
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

          <motion.div {...float(0.16)} className="flex justify-center lg:justify-start my-3 text-candy-pink-deep">
            <Squiggle className="w-44 h-5" style={{ color: 'var(--pink-deep)' }} />
          </motion.div>

          <motion.p
            {...float(0.22)}
            className="font-sans text-lg md:text-xl text-ink-soft max-w-[520px] mx-auto lg:mx-0 mt-2 font-semibold"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            {...float(0.3)}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-7"
          >
            <a href="#contact" className="btn-candy pink">
              let's chat ♡
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-candy white">
              grab my résumé
            </a>
          </motion.div>

          <motion.div
            {...float(0.38)}
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

        {/* ---- Right: collage board ---- */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[540px]">
          {/* big polaroid */}
          <motion.div
            {...float(0.2)}
            className="tilt absolute left-[8%] top-2 w-52 sm:w-60 polaroid"
            style={{ '--rot': '-5deg' } as React.CSSProperties}
          >
            <span className="tape tape-pink" style={{ top: -12, left: '38%', transform: 'rotate(-8deg)' }} />
            <div className="photo aspect-[4/5] overflow-hidden">
              <img
                src="/6251128551063096651.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="caption">that's me :)</p>
          </motion.div>

          {/* note card */}
          <motion.div
            {...float(0.34)}
            className="tilt absolute right-[4%] top-16 w-56 paper paper-note p-5"
            style={{ '--rot': '4deg' } as React.CSSProperties}
          >
            <span className="pin" style={{ top: -8, left: '50%' }} />
            <p className="font-hand text-2xl text-ink leading-snug">
              building reliable systems that move millions — one clean API at a time.
            </p>
            <p className="font-marker text-base text-ink-soft mt-3">— from {personalInfo.location} 📍</p>
          </motion.div>

          {/* stats sticker */}
          <motion.div
            {...float(0.46)}
            className="tilt absolute left-[2%] bottom-2 w-44 paper p-4 text-center"
            style={{ '--rot': '-3deg' } as React.CSSProperties}
          >
            <span className="tape tape-mint" style={{ top: -12, right: 12, transform: 'rotate(10deg)' }} />
            <div className="flex items-end justify-center gap-1">
              <span className="signature text-5xl text-candy-pink-deep">3+</span>
              <span className="font-marker text-lg text-ink mb-1">yrs</span>
            </div>
            <p className="font-marker text-base text-ink-soft">shipping backend magic</p>
          </motion.div>

          {/* arrow doodle */}
          <Arrow
            className="absolute right-[30%] bottom-10 w-24 h-16 text-ink hidden sm:block"
            style={{ transform: 'rotate(8deg)' }}
          />
          <FivePointStar className="absolute right-[8%] bottom-6 w-12 h-12 text-candy-yellow animate-wiggle" />
        </div>
      </div>
    </section>
  );
};
