import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { BlogConfig } from '@/types';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { useState } from 'react';

interface BlogProps {
  blogConfig: BlogConfig;
}

export const Blog = ({ blogConfig }: BlogProps) => {
  const { posts, loading, error } = useBlogPosts(blogConfig.rssUrl);
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPosts(newExpanded);
  };

  return (
    <section id="blog" className="section-spacing relative">
      {/* Gradient overlay */}
      <div className="gradient-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Blog" subtitle="Latest articles and insights" />

        {loading && (
          <div className="text-center text-gray-400">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4">Loading blog posts...</p>
          </div>
        )}

        {error && (
          <div className="text-center">
            <p className="text-gray-400 mb-4">Unable to load blog posts at the moment.</p>
            <a
              href={blogConfig.externalBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit my blog
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center">
            <p className="text-gray-400 mb-4">No blog posts available yet.</p>
            <a
              href={blogConfig.externalBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit my blog
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              {posts.map((post, index) => {
                const isExpanded = expandedPosts.has(index);
                const hasLongDescription = post.description.length > 120;

                return (
                  <motion.article
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="card card-glow group overflow-hidden relative"
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Blog Image */}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-6 -mt-6 mb-4"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {post.thumbnail ? (
                          <motion.img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-blue-400/50"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                      </div>
                    </a>

                    {/* Blog Content */}
                    <div className="relative z-10">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group/title"
                      >
                        <h3 className="text-xl font-bold text-white mb-2 group-hover/title:text-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </a>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>

                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {isExpanded || !hasLongDescription
                          ? post.description
                          : `${post.description.slice(0, 120)}...`}
                        {hasLongDescription && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className="ml-2 text-blue-400 hover:text-blue-300 font-medium transition-colors inline-flex items-center gap-1"
                          >
                            {isExpanded ? 'Show less' : 'Read more'}
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        )}
                      </p>

                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                      >
                        Read full article
                        <svg
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            <div className="text-center">
              <a
                href={blogConfig.externalBlogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View all articles
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
