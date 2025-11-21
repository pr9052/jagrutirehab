import Layout from '@/components/Layout';
import { type WpPost, getCategories, type WpCategory } from '@/lib/wp';
import PostCard from '@/components/PostCard';
import CategoryPills from '@/components/CategoryPills';
import { GetStaticProps } from 'next';

export default function BlogIndex({ posts, categories }: { posts: WpPost[]; categories: WpCategory[] }) {
  return (
    <Layout title="Blogs" description="Discover expert insights, recovery tips, and inspiring stories.">
      {/* Banner Section */}
      <section style={{ position: 'relative', height: 300, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 48, margin: 0, fontWeight: 700 }}>Blogs</h1>
          <p style={{ fontSize: 18, marginTop: 12, opacity: 0.9 }}>Discover expert insights, recovery tips, and inspiring stories to guide you through your journey to wellness.</p>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'url(/placeholder.svg) center/cover', opacity: 0.2 }} />
      </section>

      <section className="section">
        <div className="container">
          <CategoryPills categories={categories} />
          {posts.length > 0 ? (
            <div className="blog-list" style={{ marginTop: 16 }}>
              {posts.map(p => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#6b7280' }}>
              <p>No blog posts found.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch posts using ISR
    const res = await fetch('https://rmh.meenait.com/wp-json/wp/v2/posts?_embed&per_page=12');
    const posts: WpPost[] = await res.json();
    
    // Fetch categories
    const categories = await getCategories(20).catch(() => [] as WpCategory[]);

    return {
      props: { 
        posts: posts || [],
        categories: categories || []
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (e) {
    console.error('Error fetching posts:', e);
    return {
      props: { 
        posts: [],
        categories: []
      },
      revalidate: 10,
    };
  }
};
