import Link from 'next/link';
import type { WpPost } from '@/lib/wp';
import { getFeaturedImageUrl } from '@/lib/wp';

export default function RelatedPostCard({ post }: { post: WpPost }) {
  const title = post.title?.rendered || 'Untitled';
  const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const featured = getFeaturedImageUrl(post);

  return (
    <article style={{ display: 'flex', gap: 12, border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
      {featured ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={featured} alt="" style={{ width: 120, height: 120, objectFit: 'cover', flexShrink: 0 }} />
      ) : (
        <div style={{ width: 120, height: 120, background: '#f3f4f6', flexShrink: 0 }} />
      )}
      <div style={{ padding: 12, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <time style={{ color: '#6b7280', fontSize: 11 }}>{date}</time>
          <h4 style={{ margin: '4px 0', fontSize: 14, lineHeight: 1.4 }}>
            <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }} dangerouslySetInnerHTML={{ __html: title }} />
          </h4>
        </div>
      </div>
    </article>
  );
}

