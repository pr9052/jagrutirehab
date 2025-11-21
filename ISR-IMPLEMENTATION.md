# ISR (Incremental Static Regeneration) Implementation

## What Changed

The blog pages have been converted from **SSR (Server-Side Rendering)** to **ISR (Incremental Static Regeneration)** for better performance and scalability.

## Benefits of ISR

✅ **Better Performance**: Pages are pre-rendered at build time  
✅ **Faster Load Times**: Static HTML served instantly  
✅ **Automatic Updates**: Pages regenerate in background every 10 seconds  
✅ **Scalable**: Can handle high traffic without server load  
✅ **SEO Friendly**: Pre-rendered HTML for search engines  

## Implementation Details

### Blog Listing Page (`/blog`)

**Before (SSR):**
```typescript
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Fetches on every request
}
```

**After (ISR):**
```typescript
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://rmh.meenait.com/wp-json/wp/v2/posts?_embed&per_page=12');
  const posts = await res.json();
  
  return {
    props: { posts, categories },
    revalidate: 10, // Regenerate every 10 seconds
  };
};
```

### Single Blog Post (`/blog/[slug]`)

**Added `getStaticPaths`:**
```typescript
export const getStaticPaths: GetStaticPaths = async () => {
  // Pre-generate paths for all posts at build time
  const res = await fetch('https://rmh.meenait.com/wp-json/wp/v2/posts?per_page=100&_fields=slug');
  const posts = await res.json();
  
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: 'blocking', // Generate new pages on-demand
  };
};
```

**Updated `getStaticProps`:**
```typescript
export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  // Fetch post data
  return {
    props: { post, relatedPosts, trendingPosts, featuredPosts },
    revalidate: 10, // Regenerate every 10 seconds
  };
};
```

## WordPress API Endpoint

Updated to use: `https://rmh.meenait.com/wp-json/wp/v2/posts`

## Revalidation

- **Revalidate: 10 seconds** - Pages regenerate in background every 10 seconds
- **Fallback: 'blocking'** - New posts generate on-demand if not pre-built

## How It Works

1. **Build Time**: Next.js pre-renders all blog pages
2. **Request Time**: Serves static HTML instantly
3. **Background**: After 10 seconds, regenerates page in background
4. **Next Request**: Serves newly generated page

## Environment Variable

Update `.env.local`:
```
WORDPRESS_BASE_URL=https://rmh.meenait.com
```

## Testing

1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Visit `/blog` - should see pre-rendered posts
4. Visit `/blog/[slug]` - should see pre-rendered post

## Notes

- Pagination removed from blog listing (can be added back if needed)
- Category filtering simplified (can be enhanced with ISR if needed)
- All posts are fetched at build time for optimal performance

