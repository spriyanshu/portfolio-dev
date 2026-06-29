import { motion } from 'framer-motion';
import { Heart } from '@/components/Stickers';

const lines = [
  { label: 'building', value: 'payment microservices @ work', emoji: '🛠️' },
  { label: 'learning', value: 'Go & deeper system design', emoji: '📚' },
  { label: 'reading', value: 'Designing Data-Intensive Apps', emoji: '📖' },
  { label: 'fueled by', value: 'way too much cold brew', emoji: '☕' },
];

export const Currently = () => {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="container-custom flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="sticky-note relative w-full max-w-md p-7 pt-9"
        >
          <p className="font-marker text-2xl text-ink mb-4 text-center">
            currently<span className="animate-pulse">…</span>
          </p>
          <ul className="space-y-2.5">
            {lines.map((l) => (
              <li key={l.label} className="flex items-baseline gap-2 font-hand text-2xl text-ink leading-tight">
                <span className="text-xl">{l.emoji}</span>
                <span className="font-marker text-base text-ink-soft uppercase tracking-wide w-24 shrink-0">
                  {l.label}
                </span>
                <span>{l.value}</span>
              </li>
            ))}
          </ul>
          <Heart className="absolute -bottom-3 -right-3 w-9 h-9 text-candy-pink" />
        </motion.div>
      </div>
    </section>
  );
};
