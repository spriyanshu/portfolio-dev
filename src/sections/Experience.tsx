import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '@/types';
import { Star } from '@/components/Stickers';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="kicker">where i've been</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">boarding passes</h2>
          <p className="font-hand text-2xl text-ink-soft mt-1">every gig, a place i flew to ✈</p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 36, rotate: index % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ rotate: 0, y: -6 }}
              className="ticket flex flex-col sm:flex-row"
            >
              {/* ---- Stub ---- */}
              <div className="sm:w-52 flex-shrink-0 p-5 flex flex-col items-center text-center gap-2 sm:border-r-2 border-dashed border-cream-edge">
                <span className="font-marker text-xs text-ink-soft uppercase tracking-[0.2em]">
                  boarding pass
                </span>
                <div className="sticker w-14 h-14 overflow-hidden p-0">
                  <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-cover" />
                </div>
                <p className="font-script text-2xl font-bold text-ink leading-none">{exp.company}</p>
                <span className="chip chip-yellow !text-xs mt-1">
                  {exp.startDate} → {exp.endDate}
                </span>
                <p className="font-marker text-sm text-ink-soft">{exp.location}</p>
                <div className="barcode mt-2" />
              </div>

              {/* ---- Main ---- */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-script text-3xl font-bold text-ink leading-none">{exp.position}</h3>
                  <span className="font-marker text-ink-soft text-sm hidden sm:block">
                    seat {String.fromCharCode(65 + index)}
                    {index + 1}
                  </span>
                </div>
                <p className="font-sans font-semibold text-ink-soft">{exp.description}</p>

                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2 font-sans text-ink-soft font-semibold">
                      <Star className="w-4 h-4 mt-1.5 flex-shrink-0 text-candy-pink" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tags.slice(0, 5).map((t, i) => (
                    <span
                      key={t}
                      className={`chip ${['chip-mint', 'chip-sky', 'chip-pink', 'chip-coral', ''][i % 5]}`}
                      style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
