import Link from 'next/link';
import type { WpPost, WpCategory } from '@/lib/wp';
import { getFeaturedImageUrl, getAuthorName, getPostCategories } from '@/lib/wp';

export default function PostCard({ post }: { post: WpPost }) {
  const title = post.title?.rendered || 'Untitled';
  const excerpt = post.excerpt?.rendered || '';
  const date = new Date(post.date).toLocaleDateString();
  const featured = getFeaturedImageUrl(post);
  const author = getAuthorName(post);
  const categories: WpCategory[] = getPostCategories(post);

  return (
    <article className="post-card">
      {featured ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={featured} alt="" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
      ) : null}
      <div className="post-card__body">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: '#6b7280', fontSize: 12 }}>
          <time>{date}</time>
          <span>•</span>
          <span>{author || 'Jagruti Rehab'}</span>
        </div>
        <h3 className="post-card__title" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="post-card__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
        {categories?.length ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
            {categories.map((c) => (
              <Link key={c.id} href={{ pathname: '/blog', query: { category: c.slug } }} className="btn btn--ghost" style={{ padding: '6px 10px', fontSize: 12 }}>
                {c.name}
              </Link>
            ))}
          </div>
        ) : null}
        <Link href={`/blog/${post.slug}`} className="btn btn--ghost" style={{ marginTop: 8 }}>Read More</Link>
      </div>
    </article>
  );
}
