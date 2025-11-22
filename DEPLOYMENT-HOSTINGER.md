# Deploying to Hostinger - Complete Guide

## Important: Hostinger Hosting Types

Hostinger offers different hosting plans. Your Next.js app needs **Node.js support** because it uses Server-Side Rendering (SSR).

### Option 1: Hostinger VPS/Cloud (Recommended) ✅
- Supports Node.js
- Can run `npm start` after build
- Full Next.js SSR support

### Option 2: Hostinger Shared Hosting (Static Only) ⚠️
- Only static files (HTML, CSS, JS)
- Would need static export (loses SSR)
- Not recommended for your app

---

## Step-by-Step Deployment (VPS/Cloud Hosting)

### 0. Local Development Setup

Before deploying, set up your local environment:

1. **Create `.env.local` file** in your project root (for local development):
```bash
# .env.local (DO NOT commit this file - it's in .gitignore)
WORDPRESS_BASE_URL=https://rmh.meenait.com
NODE_ENV=development
```

2. **Test locally**:
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

**Note**: `.env.local` is for local development only. Do NOT upload this file to the server.

### 1. Build Your Project Locally

```bash
# Install dependencies
npm install

# Build the production version
npm run build
```

This creates a `.next` folder with optimized production files.

### 2. Files to Upload to Hostinger

Upload these files/folders to your Hostinger server:

```
📦 Upload These:
├── .next/              ← Build output (IMPORTANT!)
├── public/             ← Static assets (images, etc.)
├── node_modules/      ← Dependencies (or install on server)
├── package.json       ← Required
├── package-lock.json  ← Required (if exists)
├── next.config.js     ← Required
├── tsconfig.json      ← Required
├── pages/             ← Your pages
├── components/        ← Your components
├── lib/               ← Your utilities
├── styles/            ← Your styles
└── .env               ← Environment variables (create on server, NOT .env.local)
```

**OR** upload everything except:
- `node_modules/` (install on server instead)
- `.git/` (if using git)
- `.next/` (can rebuild on server)
- `.env.local` (local development only - DO NOT upload)

### 3. Server Setup on Hostinger

#### Via SSH (Recommended):

```bash
# 1. Connect to your Hostinger VPS via SSH
ssh user@your-hostinger-ip

# 2. Navigate to your domain directory
cd /home/username/domains/yourdomain.com/public_html

# 3. Upload files (via FTP/SFTP or git clone)

# 4. Install Node.js (if not installed)
# Check version
node -v
npm -v

# 5. Install dependencies
npm install --production

# 6. Create .env file
nano .env
# Add: WORDPRESS_BASE_URL=https://rmh.meenait.com

# 7. Build (if not built locally)
npm run build

# 8. Start the server
npm start
```

#### Via File Manager (Hostinger Panel):

1. **Upload Files**: Use File Manager in Hostinger hPanel
2. **Set Environment Variables**: Create `.env` file in root
3. **Install Node.js**: Use Node.js Selector in hPanel
4. **Run Commands**: Use Terminal in hPanel or SSH

### 4. Create .env File on Server

**Important**: On the server, create a `.env` file (NOT `.env.local`). The `.env` file is for production.

Create `.env` file in your project root on the server:

```bash
# .env (Production - create this on server)
WORDPRESS_BASE_URL=https://rmh.meenait.com
NODE_ENV=production
PORT=3000
```

**Difference**:
- **`.env.local`** → Use for local development (already in `.gitignore`)
- **`.env`** → Use for production/server deployment

### 5. Start the Application

#### Option A: Direct Start (Temporary)
```bash
npm start
```

#### Option B: PM2 (Recommended for Production)
```bash
# Install PM2 globally
npm install -g pm2

# Start your app
pm2 start npm --name "jagruti-rehab" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on server reboot
pm2 startup
```

#### Option C: Systemd Service (Advanced)
Create `/etc/systemd/system/jagruti-rehab.service`:

```ini
[Unit]
Description=Jagruti Rehab Next.js App
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/home/username/domains/yourdomain.com/public_html
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Then:
```bash
sudo systemctl enable jagruti-rehab
sudo systemctl start jagruti-rehab
```

### 6. Configure Domain & Port

If Hostinger requires port 80/443:

1. **Use Reverse Proxy (Nginx)**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

2. **Or use Hostinger's Node.js App Manager** (if available in hPanel)

---

## Alternative: Static Export (If Only Shared Hosting Available)

If Hostinger only offers static hosting, you need to export as static site:

### 1. Update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',  // Add this
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Required for static export
  },
  // Remove rewrites() - not supported in static export
};

module.exports = nextConfig;
```

### 2. Build Static Export:

```bash
npm run build
```

This creates an `out/` folder with static HTML files.

### 3. Upload `out/` Folder Contents:

Upload everything from `out/` folder to Hostinger's `public_html/` directory.

**⚠️ Note**: Static export loses SSR features (getServerSideProps won't work). Blog pages will need to be pre-rendered at build time.

---

## Quick Checklist

- [ ] Build project: `npm run build`
- [ ] Upload files to Hostinger
- [ ] Create `.env` file on server
- [ ] Install dependencies: `npm install --production`
- [ ] Start server: `npm start` or use PM2
- [ ] Configure domain/port
- [ ] Test all pages work correctly
- [ ] Set up process manager (PM2/systemd) for auto-restart

---

## Troubleshooting

### Port Issues
- Hostinger may require port 80/443
- Use reverse proxy (Nginx) or Hostinger's Node.js manager

### Environment Variables
- **Local Development**: Use `.env.local` (not committed to git)
- **Production/Server**: Use `.env` file in project root
- Make sure `.env` file is in project root on server
- Restart server after changing `.env`
- Never upload `.env.local` to the server


### Build Errors
- Check Node.js version (need 18+)
- Run `npm install` before `npm run build`

### WordPress API Errors
- Verify `WORDPRESS_BASE_URL` in `.env` (production) or `.env.local` (local)
- Check CORS settings on WordPress site
- Test API endpoint: `https://rmh.meenait.com/wp-json/wp/v2/posts`
- Ensure environment variables are loaded correctly (restart server after changes)

---

## Recommended: Use PM2

PM2 keeps your app running and auto-restarts on crashes:

```bash
npm install -g pm2
pm2 start npm --name "jagruti-rehab" -- start
pm2 save
pm2 startup
```

Check status: `pm2 status`
View logs: `pm2 logs jagruti-rehab`

