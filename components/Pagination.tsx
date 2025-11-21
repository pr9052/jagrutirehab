import Link from 'next/link';

export default function Pagination({ page, totalPages, category }: { page: number; totalPages: number; category?: string }) {
  if (totalPages <= 1) return null;
  const prevQuery = { page: String(Math.max(1, page - 1)), ...(category ? { category } : {}) };
  const nextQuery = { page: String(Math.min(totalPages, page + 1)), ...(category ? { category } : {}) };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
      <Link className="btn btn--ghost" href={{ pathname: '/blog', query: prevQuery }} aria-disabled={page <= 1} style={{ pointerEvents: page <= 1 ? 'none' : undefined, opacity: page <= 1 ? 0.5 : 1 }}>Prev</Link>
      <span style={{ alignSelf: 'center' }}>Page {page} of {totalPages}</span>
      <Link className="btn btn--ghost" href={{ pathname: '/blog', query: nextQuery }} aria-disabled={page >= totalPages} style={{ pointerEvents: page >= totalPages ? 'none' : undefined, opacity: page >= totalPages ? 0.5 : 1 }}>Next</Link>
    </div>
  );
}
