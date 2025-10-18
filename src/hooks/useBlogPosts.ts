import { useState, useEffect } from 'react';
import { BlogPost } from '@/types';

export const useBlogPosts = (rssUrl: string) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);

        // Your actual blog posts data (extracted from RSS feed)
        const actualBlogPosts: BlogPost[] = [
          {
            title: 'Cracking the LLD Interview',
            link: 'https://blog.spriyanshu.in/cracking-the-lld-interview',
            pubDate: '2025-06-07T11:16:26Z',
            description:
              'Master Low-Level Design for tech interviews with clear OOP, SOLID principles, key patterns & UML explained simply. Kickstart your LLD prep today!',
            thumbnail:
              'https://cdn.hashnode.com/res/hashnode/image/upload/v1748206818865/bbd9e14b-ea61-45e4-9a8a-46d630b3477a.png',
          },
          {
            title: '🔐 Connect SSL with Cloudflare and Use It on Hashnode',
            link: 'https://blog.spriyanshu.in/connect-ssl-with-cloudflare-and-use-it-on-hashnode',
            pubDate: '2025-05-25T21:03:27Z',
            description:
              'Secure your Hashnode blog with Cloudflare SSL in minutes! Follow this simple, step-by-step guide to map your custom domain, enable HTTPS.',
            thumbnail:
              'https://cdn.hashnode.com/res/hashnode/image/upload/v1748206818865/bbd9e14b-ea61-45e4-9a8a-46d630b3477a.png',
          },
          {
            title: 'How to Build a Video Chat App: Types, Cost, & Must-Have Features',
            link: 'https://blog.spriyanshu.in/how-to-build-a-video-chat-app-types-cost-must-have-features',
            pubDate: '2022-12-20T11:02:24Z',
            description:
              'Text-based chat paved the way for improved human interactions where users can instantly exchange messages from anywhere in the world. But, words can only say so much—video chatting has taken this new way of communicating to another level.',
            thumbnail:
              'https://cdn.hashnode.com/res/hashnode/image/upload/v1748116446030/3c988ea4-bcfe-497f-a4fd-aab322e7d2d6.png',
          },
        ];

        // Try RSS2JSON API first (for dynamic updates)
        try {
          const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            rssUrl
          )}`;
          const response = await fetch(rss2jsonUrl);

          if (response.ok) {
            const data = await response.json();

            if (data.status === 'ok' && data.items && data.items.length > 0) {
              const formattedPosts: BlogPost[] = data.items.slice(0, 6).map((item: any) => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                description: item.description?.replace(/<[^>]*>/g, '').slice(0, 150) + '...' || '',
                thumbnail: item.thumbnail || item.enclosure?.link || '',
              }));
              setPosts(formattedPosts);
              return; // Success, exit early
            }
          }
        } catch (rssError) {
          console.warn('RSS2JSON failed, using static data:', rssError);
        }

        // Fallback to static data (your actual blog posts)
        setPosts(actualBlogPosts);
        setError(null); // No error since we have data
      } catch (err) {
        console.error('Blog fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    if (rssUrl) {
      fetchBlogPosts();
    }
  }, [rssUrl]);

  return { posts, loading, error };
};
