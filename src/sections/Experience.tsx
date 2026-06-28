import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '@/types';
import { Star } from '@/components/Stickers';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const tapes = ['tape', 'tape tape-mint', 'tape tape-sky', 'tape tape-pink'];

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="kicker">where i've been</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">the gig diary</h2>
        </div>

        <div className="space-y-10 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1.2 : -1.2 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="paper relative p-6 md:p-8 tilt"
              style={{ '--rot': `${index % 2 ? 1.2 : -1.2}deg` } as React.CSSProperties}
            >
              <span
                className={tapes[index % tapes.length]}
                style={{ top: -13, left: '50%', marginLeft: -46, transform: 'rotate(-4deg)' }}
              />

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="sticker w-14 h-14 flex-shrink-0 overflow-hidden p-0">
                  <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-script text-3xl font-bold text-ink leading-none">
                        {exp.position}
                      </h3>
                      <p className="font-marker text-xl text-candy-pink-deep mt-1">{exp.company}</p>
                    </div>
                    <span className="chip chip-yellow flex-shrink-0 self-start">
                      {exp.startDate} → {exp.endDate}
                    </span>
                  </div>

                  <p className="font-sans font-semibold text-ink-soft mt-3">{exp.description}</p>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
