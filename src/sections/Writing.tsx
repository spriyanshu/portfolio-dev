import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowUpRight } from '@/components/Icons';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { BlogConfig, Featured } from '@/types';

interface WritingProps {
  blogConfig: BlogConfig;
  featured: Featured[];
}

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' }).format(date);
};

export const Writing = ({ blogConfig, featured }: WritingProps) => {
  const { posts, loading } = useBlogPosts(blogConfig.rssUrl);

  return (
    <section id="writing" className="section">
      <div className="shell">
        <SectionHeading
          index="06"
          label="Writing & talks"
          title={
            <>
              Explaining it properly is{' '}
              <span className="serif-accent text-ink-muted">how I know I understand it.</span>
            </>
          }
          description="Notes on observability, system design and the occasional yak shave."
          aside="blog.spriyanshu.in"
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mono-label">Latest posts</p>

            <ul className="mt-4 border-t border-line">
              {loading &&
                Array.from({ length: 3 }).map((_, index) => (
                  <li key={index} className="border-b border-line py-5">
                    <div className="h-4 w-2/3 animate-pulse rounded bg-white/[0.05]" />
                    <div className="mt-3 h-3 w-1/3 animate-pulse rounded bg-white/[0.03]" />
                  </li>
                ))}

              {!loading &&
                posts.slice(0, 4).map((post, index) => (
                  <Reveal as="li" key={post.link} delay={index * 0.05}>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group row-link"
                    >
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-medium text-ink transition-colors duration-300 group-hover:text-signal">
                          {post.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-faint">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="hidden font-mono text-2xs text-ink-ghost sm:block">
                          {formatDate(post.pubDate)}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-ink-ghost transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                      </div>
                    </a>
                  </Reveal>
                ))}
            </ul>

            <Reveal delay={0.15}>
              <a
                href={blogConfig.externalBlogUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                Read the full blog
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <p className="mono-label">Featured elsewhere</p>

            <ul className="mt-4 space-y-3">
              {featured.map((item, index) => (
                <Reveal as="li" key={item.id} delay={index * 0.08}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card group block p-5"
                  >
                    <div className="flex items-center gap-3 font-mono text-2xs text-ink-ghost">
                      <span className="rounded border border-line px-1.5 py-0.5 text-ink-faint">
                        {item.platform}
                      </span>
                      <span>{item.date}</span>
                      <ArrowUpRight className="ml-auto h-3.5 w-3.5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                    </div>

                    <h3 className="mt-3 text-base font-medium leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                      {item.description}
                    </p>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
