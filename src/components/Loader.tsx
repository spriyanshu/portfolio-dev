import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setDone(true), reduce ? 200 : 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="loader-polaroid"
            animate={{ rotate: [-4, 2, -4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="frame">
              <img
                src="/6251128551063096651.jpg"
                alt="developing"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <p className="font-marker text-2xl text-ink">loading the scrapbook…</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
