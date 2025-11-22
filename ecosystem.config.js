// PM2 Configuration for Production
// Use: pm2 start ecosystem.config.js

module.exports = {
  apps: [{
    name: 'jagruti-rehab',
    script: 'npm',
    args: 'start',
    cwd: '/home/username/domains/yourdomain.com/public_html', // Update this path
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      WORDPRESS_BASE_URL: 'https://rmh.meenait.com/'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};

