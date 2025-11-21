import Link from 'next/link';
import type { WpCategory } from '@/lib/wp';

export default function CategoryPills({ categories, active }: { categories: WpCategory[]; active?: string }) {
  if (!categories?.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '8px 0 16px' }}>
      <Link href={{ pathname: '/blog' }} className="btn btn--ghost" style={{ padding: '6px 10px', fontSize: 12, background: active ? 'transparent' : '#0b5cff', color: active ? undefined : '#fff', borderColor: '#0b5cff' }}>
        All
      </Link>
      {categories.map((c) => (
        <Link key={c.id} href={{ pathname: '/blog', query: { category: c.slug } }} className="btn btn--ghost" style={{ padding: '6px 10px', fontSize: 12, background: active === c.slug ? '#0b5cff' : 'transparent', color: active === c.slug ? '#fff' : undefined, borderColor: '#0b5cff' }}>
          {c.name}
        </Link>
      ))}
    </div>
  );
}
