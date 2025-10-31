import { motion } from 'framer-motion';
import { BlogConfig } from '@/types';
import { useBlogPosts } from '@/hooks/useBlogPosts';

interface BlogProps {
  blogConfig: BlogConfig;
}

export const Blog = ({ blogConfig }: BlogProps) => {
  const { posts, loading, error } = useBlogPosts(blogConfig.rssUrl);

  if (loading || error || posts.length === 0) return null;

  return (
    <section id="blog" className="section-spacing">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Latest Articles
          </motion.h2>
          <a
            href={blogConfig.externalBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link text-sm hidden sm:inline-flex"
          >
            View all
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.slice(0, 3).map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Blog Card with Better Dark Mode Visibility */}
              <div
                className="rounded-xl p-0 transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Featured Image - Full color, no grayscale */}
                <div className="relative mb-4 overflow-hidden rounded-t-xl aspect-video">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      style={{
                        filter: 'brightness(1.0) group-hover:brightness(1.05)',
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  )}

                  {/* Category overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-black/50 text-white">
                      Article
                    </span>
                  </div>
                </div>

                {/* Content - Better text contrast */}
                <div className="px-6 pb-6">
                  <h3
                    className="text-lg md:text-xl font-semibold mb-2 line-clamp-2"
                    style={{ color: '#ffffff' }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed line-clamp-2 mb-2 md:mb-3"
                    style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    {post.description}
                  </p>

                  {/* Meta - date + read time */}
                  <div
                    className="flex items-center gap-2 md:gap-3 text-xs"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    <span>
                      {new Date(post.pubDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all link for mobile */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href={blogConfig.externalBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
