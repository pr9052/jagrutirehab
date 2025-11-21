import Layout from '@/components/Layout';
import { getPosts, type WpPost, getCategories, type WpCategory, getCategoryBySlug } from '@/lib/wp';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import CategoryPills from '@/components/CategoryPills';
import { GetServerSideProps } from 'next';

export default function BlogIndex({ posts, page, totalPages, categories, activeCategory }: { posts: WpPost[]; page: number; totalPages: number; categories: WpCategory[]; activeCategory?: string }) {
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
          <CategoryPills categories={categories} active={activeCategory} />
          {posts.length > 0 ? (
            <>
              <div className="blog-list" style={{ marginTop: 16 }}>
                {posts.map(p => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>
              <Pagination page={page} totalPages={totalPages} category={activeCategory} />
            </>
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pageParam = Array.isArray(query.page) ? query.page[0] : query.page;
  const catParam = Array.isArray(query.category) ? query.category[0] : query.category;
  const page = Math.max(1, parseInt(String(pageParam || '1'), 10) || 1);

  let categoryId: number | undefined;
  if (catParam) {
    const cat = await getCategoryBySlug(String(catParam));
    if (cat) categoryId = cat.id;
  }

  try {
    const [{ posts, totalPages }, categories] = await Promise.all([
      getPosts({ perPage: 12, page, categoryId }),
      getCategories(20)
    ]);

    return { props: { posts, page, totalPages, categories, activeCategory: catParam || null } };
  } catch (e) {
    const categories = await getCategories(20).catch(() => [] as WpCategory[]);
    return { props: { posts: [], page, totalPages: 1, categories, activeCategory: catParam || null } };
  }
};
