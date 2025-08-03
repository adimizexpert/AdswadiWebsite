export default function handler(req, res) {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://adswadi.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and API routes
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /services/
Allow: /blog/
Allow: /contact/
Allow: /about/

# Google Ads
User-agent: AdsBot-Google
Allow: /

# Bing Ads
User-agent: Bingbot
Allow: /
Crawl-delay: 1`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();
} 