export const WP_BASE_URL = process.env.WORDPRESS_BASE_URL || 'https://www.jagrutirehab.org';

export interface WpRendered {
  rendered: string;
}

export interface WpMedia {
  source_url?: string;
}

export interface WpUser {
  id: number;
  name: string;
  slug: string;
}

export interface WpCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WpPost {
  id: number;
  slug: string;
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  content?: WpRendered;
  author?: number;
  categories?: number[];
  _embedded?: {
    author?: WpUser[];
    'wp:featuredmedia'?: WpMedia[];
    'wp:term'?: Array<WpCategory[]>;
  };
}

async function wpFetch<T>(path: string, init?: RequestInit): Promise<{ data: T; headers: Headers }> {
  const url = `${WP_BASE_URL.replace(/\/$/, '')}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: { 'Accept': 'application/json', ...(init?.headers || {}) },
    next: { revalidate: 60 }
  } as any);
  if (!res.ok) {
    throw new Error(`WP fetch failed ${res.status}: ${await res.text()}`);
  }
  const data = await res.json() as T;
  return { data, headers: res.headers };
}

export async function getPosts(params: { perPage?: number; page?: number; categoryId?: number } = {}) {
  try {
    const perPage = params.perPage ?? 12;
    const page = params.page ?? 1;
    const category = params.categoryId ? `&categories=${params.categoryId}` : '';
    const query = `?per_page=${perPage}&page=${page}${category}&_embed`;
    const { data, headers } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    const total = parseInt(headers.get('x-wp-total') || '0', 10);
    const totalPages = parseInt(headers.get('x-wp-totalpages') || '0', 10);
    return { posts: data, total, totalPages };
  } catch (e) {
    const { getMockPosts } = await import('./mockData');
    return getMockPosts(params);
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const query = `?slug=${encodeURIComponent(slug)}&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data[0] || null;
  } catch (e) {
    const { getMockPostBySlug } = await import('./mockData');
    return getMockPostBySlug(slug);
  }
}

export async function getCategories(limit = 50) {
  try {
    const { data } = await wpFetch<WpCategory[]>(`/wp-json/wp/v2/categories?per_page=${limit}&orderby=count&order=desc`);
    return data;
  } catch (e) {
    const { mockCategories } = await import('./mockData');
    return mockCategories.slice(0, limit);
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const { data } = await wpFetch<WpCategory[]>(`/wp-json/wp/v2/categories?slug=${encodeURIComponent(slug)}`);
    return data[0] || null;
  } catch (e) {
    const { mockCategories } = await import('./mockData');
    return mockCategories.find(c => c.slug === slug) || null;
  }
}

export async function getRelatedPosts(post: WpPost, limit = 3) {
  try {
    const categoryIds = post.categories?.join(',') || '';
    if (!categoryIds) {
      const { getMockRelatedPosts } = await import('./mockData');
      return getMockRelatedPosts(post.slug, limit);
    }
    const query = `?per_page=${limit}&categories=${categoryIds}&exclude=${post.id}&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data.filter(p => p.id !== post.id).slice(0, limit);
  } catch (e) {
    const { getMockRelatedPosts } = await import('./mockData');
    return getMockRelatedPosts(post.slug, limit);
  }
}

export async function getTrendingPosts(limit = 1) {
  try {
    const query = `?per_page=${limit}&orderby=date&order=desc&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data;
  } catch (e) {
    const { getMockTrendingPosts } = await import('./mockData');
    return getMockTrendingPosts(limit);
  }
}

export async function getFeaturedPosts(limit = 3) {
  try {
    const query = `?per_page=${limit}&orderby=date&order=desc&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data;
  } catch (e) {
    const { getMockFeaturedPosts } = await import('./mockData');
    return getMockFeaturedPosts(limit);
  }
}

export function getFeaturedImageUrl(post: WpPost): string | undefined {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
}

export function getAuthorName(post: WpPost): string | undefined {
  return post._embedded?.author?.[0]?.name;
}

export function getPostCategories(post: WpPost): WpCategory[] {
  const terms = post._embedded?.['wp:term'] || [];
  const cats = terms.find((t) => Array.isArray(t) && t[0] && (t[0] as any).taxonomy === 'category');
  return (cats as WpCategory[] | undefined) || [];
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}
