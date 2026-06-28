import { motion } from 'framer-motion';
import { BlogConfig } from '@/types';
import { useBlogPosts } from '@/hooks/useBlogPosts';

interface BlogProps {
  blogConfig: BlogConfig;
}

export const Blog = ({ blogConfig }: BlogProps) => {
  const { posts, loading, error } = useBlogPosts(blogConfig.rssUrl);

  if (loading || error || posts.length === 0) return null;

  const rots = [-3, 2.5, -2];

  return (
    <section id="blog" className="section-spacing relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="kicker">things i write</p>
          <h2 className="signature text-6xl md:text-7xl mt-1">my journal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.slice(0, 3).map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, rotate: rots[index % rots.length] }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="paper tilt relative block overflow-hidden"
              style={{ '--rot': `${rots[index % rots.length]}deg` } as React.CSSProperties}
            >
              <div className="relative overflow-hidden aspect-video">
                {post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-lav-soft to-candy-pink" />
                )}
                <span className="chip chip-yellow absolute top-3 left-3 !text-xs">article</span>
              </div>

              <div className="p-5">
                <h3 className="font-script text-2xl font-bold text-ink leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-sans font-semibold text-ink-soft text-sm mt-2 line-clamp-2">
                  {post.description}
                </p>
                <p className="font-marker text-ink-soft mt-3">
                  {new Date(post.pubDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}{' '}
                  · 5 min read
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={blogConfig.externalBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-candy white"
          >
            read the whole journal ↗
          </a>
        </div>
      </div>
    </section>
  );
};
