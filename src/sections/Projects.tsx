import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Sparkle, Heart } from '@/components/Stickers';

interface ProjectsProps {
  projects: Project[];
}

const rots = [-4, 3, -2.5, 4, -3];
const tapeCls = ['tape', 'tape tape-pink', 'tape tape-mint', 'tape tape-sky'];

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <Heart className="absolute top-12 left-[6%] w-10 h-10 text-candy-pink animate-bob hidden md:block" />

      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="kicker">stuff i've made</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">my little gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: rots[index % rots.length] }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
              className="polaroid tilt relative"
              style={{ '--rot': `${rots[index % rots.length]}deg` } as React.CSSProperties}
            >
              <span
                className={tapeCls[index % tapeCls.length]}
                style={{ top: -12, left: '50%', marginLeft: -46, transform: 'rotate(-5deg)' }}
              />

              <div className="photo aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-1 pt-1 pb-3">
                <h3 className="caption !text-3xl !py-1">{project.name}</h3>
                <p className="font-sans text-sm text-ink-soft font-semibold text-center leading-snug line-clamp-3 px-1">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={tag}
                      className={`chip !text-xs !px-2.5 !py-0.5 !shadow-none border ${
                        ['chip-mint', 'chip-sky', 'chip-pink', 'chip-coral'][i % 4]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ink-link font-marker text-lg"
                    >
                      live ↗
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ink-link font-marker text-lg"
                    >
                      code ↗
                    </a>
                  )}
                </div>
              </div>

              {index === 0 && (
                <Sparkle className="absolute -top-5 -right-4 w-10 h-10 text-candy-yellow animate-wiggle" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
