import { motion } from 'framer-motion';

interface StickerProps {
  className?: string;
  style?: React.CSSProperties;
}

const drawTransition = { duration: 1, ease: 'easeInOut' as const };

/** Squiggle that "draws" its stroke when scrolled into view. */
export const AnimatedSquiggle = ({ className = '', style }: StickerProps) => (
  <svg viewBox="0 0 200 30" className={className} style={style} aria-hidden="true">
    <motion.path
      d="M2 15 Q 20 0 38 15 T 74 15 T 110 15 T 146 15 T 182 15 T 218 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={drawTransition}
    />
  </svg>
);

/** Hand-drawn arrow that draws itself on scroll. */
export const AnimatedArrow = ({ className = '', style }: StickerProps) => (
  <svg viewBox="0 0 120 80" className={className} style={style} aria-hidden="true">
    <motion.path
      d="M6 60 C 40 10 80 8 108 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={drawTransition}
    />
    <motion.path
      d="M108 24 L 92 18 M108 24 L 100 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ ...drawTransition, delay: 0.6 }}
    />
  </svg>
);

export const Star = ({ className = '', style }: StickerProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
    <path
      d="M50 2c4 24 22 42 46 46-24 4-42 22-46 46-4-24-22-42-46-46 24-4 42-22 46-46Z"
      fill="currentColor"
    />
  </svg>
);

export const FivePointStar = ({ className = '', style }: StickerProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
    <path
      d="M50 4 61 37H96L67 58 78 92 50 71 22 92 33 58 4 37H39Z"
      fill="currentColor"
      stroke="#3a3d7a"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sparkle = ({ className = '', style }: StickerProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
    <path
      d="M50 0c3 30 20 47 50 50-30 3-47 20-50 50-3-30-20-47-50-50 30-3 47-20 50-50Z"
      fill="currentColor"
    />
  </svg>
);

export const Heart = ({ className = '', style }: StickerProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
    <path
      d="M50 88C18 64 6 46 6 30 6 16 17 6 30 6c9 0 16 4 20 12 4-8 11-12 20-12 13 0 24 10 24 24 0 16-12 34-44 58Z"
      fill="currentColor"
      stroke="#3a3d7a"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);
