# Jagruti Rehab Inspired Next.js Site (Headless WordPress)

Frontend: Next.js + React
Backend CMS: WordPress (REST API)

Reference layout and content modeled after `https://www.jagrutirehab.org/` and blogs page `https://www.jagrutirehab.org/blog.html`.

## Setup

1) Install deps

```bash
npm install
```

2) Configure WordPress base URL

Create `.env.local` in project root:

```
WORDPRESS_BASE_URL=https://rmh.meenait.com
```

3) Run locally

```bash
npm run dev
# open http://localhost:3000
```

## Structure

- `pages/`
  - `index.tsx` — Homepage (hero, features, locations, testimonials, FAQ)
  - `blog/index.tsx` — Blog listing (SSR from WordPress)
  - `blog/[slug].tsx` — Single blog post (SSR from WordPress)
- `lib/wp.ts` — WordPress REST helpers (`/wp-json/wp/v2/...`)
- `components/` — Layout, Header, Footer, PostCard
- `styles/globals.css` — Global styles

## WordPress Integration

- Listing: `GET /wp-json/wp/v2/posts?per_page=12&page=1&_embed`
- Single: `GET /wp-json/wp/v2/posts?slug={slug}&_embed`
- Featured image pulled from `_embedded["wp:featuredmedia"][0].source_url`

If you self-host WordPress, set `WORDPRESS_BASE_URL` accordingly.

## Deploy

### Quick Deploy (Vercel/Netlify)
- Build: `npm run build`
- Start: `npm start`
- Works on Vercel, Netlify (Next on Netlify), or any Node host.

### Deploy to Hostinger
See `DEPLOYMENT-HOSTINGER.md` for complete step-by-step guide.

**Quick Steps:**
1. Build: `npm run build`
2. Upload `.next/`, `pages/`, `components/`, `lib/`, `public/`, `package.json`, `next.config.js` to server
3. Create `.env` file with `WORDPRESS_BASE_URL`
4. Install dependencies: `npm install --production`
5. Start: `npm start` or use PM2: `pm2 start npm --name "jagruti-rehab" -- start`

## Credits

- Design inspiration: `https://www.jagrutirehab.org/`
- Blogs reference: `https://www.jagrutirehab.org/blog.html`
