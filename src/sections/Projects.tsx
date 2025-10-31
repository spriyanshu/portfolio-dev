import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className="section-spacing  relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-12 md:mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          Selected Work
        </motion.h2>

        {/* 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Image - Full color, no grayscale, with border and shadow */}
              <div className="relative mb-4 md:mb-6 overflow-hidden rounded-xl aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{
                    border: '1px solid var(--border)',
                    boxShadow: '0 4px 12px var(--shadow)',
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-lg md:text-xl font-semibold mb-2 md:mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills - Max 4 tags */}
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Links with arrows */}
                <div className="flex items-center gap-4 flex-wrap">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link text-sm"
                    >
                      View Live
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link text-sm"
                    >
                      GitHub
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
