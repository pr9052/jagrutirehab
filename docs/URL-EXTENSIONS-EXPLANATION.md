# URL Extensions: .html vs No Extension

## Why the Difference?

### Traditional Static Sites (like jagrutirehab.org)
- **File-based**: Serves actual `.html` files from the server
- **URLs**: `raha.html`, `blog.html` (matches physical files)
- **Rendering**: Server sends pre-built HTML files directly
- **Example**: `/raha.html` → server looks for `raha.html` file

### Next.js (Your Site)
- **Route-based**: Uses file-based routing without extensions
- **URLs**: `/raha`, `/blog` (clean URLs, no extensions)
- **Rendering**: Server-side renders React components to HTML dynamically
- **Example**: `/blog` → Next.js renders `pages/blog/index.tsx` → sends HTML to browser

## How Rendering Works

### Both Serve HTML to Browser
Both approaches ultimately send HTML to the browser. The difference is:

1. **Static HTML files** (reference site):
   ```
   Request: /blog.html
   Server: Returns blog.html file directly
   Browser: Receives HTML, displays it
   ```

2. **Next.js SSR** (your site):
   ```
   Request: /blog
   Next.js: Runs getServerSideProps() → Fetches data → Renders React component → Generates HTML
   Browser: Receives HTML, displays it
   ```

**Result**: Both browsers receive HTML. No functional difference for users!

## Advantages of Next.js Approach

✅ **Cleaner URLs**: `/blog` vs `/blog.html`
✅ **SEO-friendly**: Search engines prefer clean URLs
✅ **Dynamic content**: Can fetch data server-side before rendering
✅ **Better performance**: Can optimize and cache rendered pages
✅ **Modern standard**: Most modern frameworks use this approach

## Adding .html Extensions (If Needed)

If you want to match the reference site's URL structure, you can add `.html` extensions using Next.js rewrites:

### Option 1: Rewrites (Recommended)
Add to `next.config.js`:

```javascript
module.exports = {
  async rewrites() {
    return [
      { source: '/blog.html', destination: '/blog' },
      { source: '/raha.html', destination: '/raha' },
      { source: '/blog/:slug.html', destination: '/blog/:slug' },
    ];
  }
};
```

This allows both `/blog` and `/blog.html` to work.

### Option 2: Trailing Slash + Static Export
If you want exact `.html` files, you'd need to use static export, but this loses SSR benefits.

## Recommendation

**Keep the clean URLs** (no `.html` extensions). They're:
- More modern
- Better for SEO
- Industry standard
- Functionally identical

The reference site uses `.html` because it's likely a traditional static site or WordPress with permalink settings. Your Next.js approach is actually more modern and flexible.

