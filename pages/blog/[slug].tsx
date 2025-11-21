import Layout from '@/components/Layout';
import { getPostBySlug, type WpPost, getAuthorName, getFeaturedImageUrl, getPostCategories, getRelatedPosts, getTrendingPosts, getFeaturedPosts } from '@/lib/wp';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import PostCard from '@/components/PostCard';
import RelatedPostCard from '@/components/RelatedPostCard';

export default function BlogPost({ post, relatedPosts, trendingPosts, featuredPosts }: { post: WpPost | null; relatedPosts: WpPost[]; trendingPosts: WpPost[]; featuredPosts: WpPost[] }) {
  if (!post) {
    return (
      <Layout title="Post not found">
        <section className="section"><div className="container"><p>Post not found.</p></div></section>
      </Layout>
    );
  }
  const title = post.title?.rendered || 'Untitled';
  const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const content = post.content?.rendered || '';
  const featured = getFeaturedImageUrl(post);
  const author = getAuthorName(post);
  const categories = getPostCategories(post);

  return (
    <Layout title={title}>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1200, display: 'grid', gridTemplateColumns: '1fr 350px', gap: 32 }}>
          {/* Main Content */}
          <article>
            <div style={{ color: '#6b7280', fontSize: 14, display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
              <time>{date}</time>
              <span>•</span>
              <span>{author || 'Jagruti Rehab'}</span>
            </div>
            <h1 className="section__title" style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: title }} />
            {categories?.length ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {categories.map((c) => (
                  <Link key={c.id} href={{ pathname: '/blog', query: { category: c.slug } }} className="btn btn--ghost" style={{ padding: '6px 12px', fontSize: 13 }}>
                    {c.name}
                  </Link>
                ))}
              </div>
            ) : null}
            {featured ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={featured} alt="" style={{ width: '100%', borderRadius: 12, border: '1px solid #e5e7eb', marginBottom: 24 }} />
            ) : null}
            <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} style={{ lineHeight: 1.8, fontSize: 16, color: '#374151' }} />
          </article>

          {/* Sidebar */}
          <aside>
            {/* Trending Blogs */}
            {trendingPosts.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #0b5cff' }}>Trending Blogs</h3>
                {trendingPosts.map((p) => (
                  <div key={p.id} style={{ marginBottom: 16 }}>
                    <RelatedPostCard post={p} />
                  </div>
                ))}
              </div>
            )}

            {/* Featured Blogs */}
            {featuredPosts.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #0b5cff' }}>Featured Blogs</h3>
                {featuredPosts.map((p) => (
                  <div key={p.id} style={{ marginBottom: 16 }}>
                    <RelatedPostCard post={p} />
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>

        {/* Related Blogs */}
        {relatedPosts.length > 0 && (
          <div className="container" style={{ marginTop: 48, paddingTop: 48, borderTop: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 24 }}>Related Blogs</h2>
            <div className="blog-list" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {relatedPosts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return { props: { post: null, relatedPosts: [], trendingPosts: [], featuredPosts: [] } };
    }
    const [relatedPosts, trendingPosts, featuredPosts] = await Promise.all([
      getRelatedPosts(post, 3),
      getTrendingPosts(1),
      getFeaturedPosts(3)
    ]);
    return { props: { post, relatedPosts, trendingPosts, featuredPosts } };
  } catch (e) {
    return { props: { post: null, relatedPosts: [], trendingPosts: [], featuredPosts: [] } };
  }
};
