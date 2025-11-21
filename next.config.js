/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.jagrutirehab.org' },
      { protocol: 'https', hostname: '**.wp.com' }
    ]
  },
  // Optional: Add .html extensions to match reference site structure
  // Uncomment if you want URLs like /blog.html to work
  async rewrites() {
    return [
      { source: '/blog.html', destination: '/blog' },
      { source: '/raha.html', destination: '/raha' },
      { source: '/about.html', destination: '/about' },
      { source: '/contact.html', destination: '/contact' },
      { source: '/centers.html', destination: '/centers' },
      { source: '/blog/:slug.html', destination: '/blog/:slug' },
    ];
  }
};

module.exports = nextConfig;
