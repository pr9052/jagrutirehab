export const WP_BASE_URL = process.env.WORDPRESS_BASE_URL || 'https://rmh.meenait.com';

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
  const baseUrl = WP_BASE_URL.replace(/\/$/, '');
  // Ensure path starts with / if it doesn't already
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${baseUrl}${normalizedPath}`;
  
  // Log for debugging (remove in production if needed)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[wpFetch] Fetching from: ${url}`);
  }
  
  const res = await fetch(url, {
    ...init,
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(init?.headers || {}) 
    },
    // For Next.js static generation, ensure we get fresh data
    cache: 'no-store' as RequestCache
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`[wpFetch] Failed ${res.status} for ${url}:`, errorText);
    throw new Error(`WP fetch failed ${res.status}: ${errorText}`);
  }
  
  const data = await res.json() as T;
  if (process.env.NODE_ENV === 'development') {
    console.log(`[wpFetch] Successfully fetched from ${url}, got ${Array.isArray(data) ? data.length : 1} item(s)`);
  }
  return { data, headers: res.headers };
}

export async function getPosts(params: { perPage?: number; page?: number; categoryId?: number } = {}) {
  try {
    const perPage = params.perPage ?? 12;
    const page = params.page ?? 1;
    const category = params.categoryId ? `&categories=${params.categoryId}` : '';
    const query = `?per_page=${perPage}&page=${page}${category}&_embed`;
    const fullUrl = `${WP_BASE_URL.replace(/\/$/, '')}/wp-json/wp/v2/posts${query}`;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[getPosts] Fetching posts from: ${fullUrl}`);
    }
    
    const { data, headers } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    const total = parseInt(headers.get('x-wp-total') || '0', 10);
    const totalPages = parseInt(headers.get('x-wp-totalpages') || '0', 10);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[getPosts] Successfully fetched ${data.length} posts (total: ${total}, pages: ${totalPages})`);
    }
    
    return { posts: data, total, totalPages };
  } catch (e) {
    console.error(`[getPosts] Error fetching posts from ${WP_BASE_URL}:`, e);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const query = `?slug=${encodeURIComponent(slug)}&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data[0] || null;
  } catch (e) {
    console.error('Error fetching post by slug:', e);
    return null;
  }
}

export async function getCategories(limit = 50) {
  try {
    const { data } = await wpFetch<WpCategory[]>(`/wp-json/wp/v2/categories?per_page=${limit}&orderby=count&order=desc`);
    return data;
  } catch (e) {
    console.error('Error fetching categories:', e);
    return [];
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const { data } = await wpFetch<WpCategory[]>(`/wp-json/wp/v2/categories?slug=${encodeURIComponent(slug)}`);
    return data[0] || null;
  } catch (e) {
    console.error('Error fetching category by slug:', e);
    return null;
  }
}

export async function getRelatedPosts(post: WpPost, limit = 3) {
  try {
    const categoryIds = post.categories?.join(',') || '';
    if (!categoryIds) {
      return [];
    }
    const query = `?per_page=${limit}&categories=${categoryIds}&exclude=${post.id}&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data.filter(p => p.id !== post.id).slice(0, limit);
  } catch (e) {
    console.error('Error fetching related posts:', e);
    return [];
  }
}

export async function getTrendingPosts(limit = 1) {
  try {
    const query = `?per_page=${limit}&orderby=date&order=desc&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data;
  } catch (e) {
    console.error('Error fetching trending posts:', e);
    return [];
  }
}

export async function getFeaturedPosts(limit = 3) {
  try {
    const query = `?per_page=${limit}&orderby=date&order=desc&_embed`;
    const { data } = await wpFetch<WpPost[]>(`/wp-json/wp/v2/posts${query}`);
    return data;
  } catch (e) {
    console.error('Error fetching featured posts:', e);
    return [];
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

export async function getAllPostSlugs() {
  try {
    const { data } = await wpFetch<Array<{ slug: string }>>(`/wp-json/wp/v2/posts?per_page=100&_fields=slug`);
    return data.map(post => post.slug);
  } catch (e) {
    console.error('Error fetching post slugs:', e);
    return [];
  }
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}
