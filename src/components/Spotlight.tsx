import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Cursor-tracked glow. Lives at the app root so no `overflow-hidden` section
 * can clip it or turn it into a local containing block.
 */
export const Spotlight = () => {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(-500), { stiffness: 60, damping: 24 });
  const y = useSpring(useMotionValue(-500), { stiffness: 60, damping: 24 });
  const background = useMotionTemplate`radial-gradient(560px circle at ${x}px ${y}px, rgba(74,222,128,0.06), transparent 72%)`;

  useEffect(() => {
    if (reduced) return;
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y, reduced]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{ background }}
    />
  );
};
