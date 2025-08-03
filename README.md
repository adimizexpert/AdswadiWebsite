# Adswadi - Performance Marketing Agency Website

A comprehensive Next.js website for Adswadi, a performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies across India.

## 🚀 Features

### SEO Optimized
- **Next.js 14** with App Router
- **next-seo** for comprehensive SEO management
- **Structured Data** (JSON-LD) for all pages
- **Open Graph** and Twitter Cards
- **Dynamic sitemap.xml** and robots.txt
- **Local SEO** with LocalBusiness schema
- **Core Web Vitals** optimized

### Performance
- **Next.js Image** optimization
- **WebP/AVIF** format support
- **Lazy loading** for images
- **Font preloading** for critical fonts
- **Bundle analysis** with @next/bundle-analyzer

### Content
- **Service pages** with detailed SEO
- **Blog system** with dynamic routes
- **Contact page** with local SEO
- **Testimonials** with review schema
- **Team section** with organization data

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Layout.jsx      # Main layout with NextSeo
│   ├── Header.jsx      # Navigation
│   ├── Hero.jsx        # Homepage hero
│   ├── Services.jsx    # Services section
│   ├── CaseStudies.jsx # Case studies
│   ├── Team.jsx        # Team section
│   ├── Blog.jsx        # Blog section
│   ├── Testimonials.jsx # Testimonials
│   ├── Contact.jsx     # Contact section
│   └── Footer.jsx      # Footer
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── contact.js      # Contact page
│   ├── services/       # Service pages
│   │   ├── meta-ads.js
│   │   └── google-ads.js
│   ├── blog/           # Blog pages
│   │   └── [slug].js   # Dynamic blog posts
│   └── api/            # API routes
│       ├── robots.js   # robots.txt
│       └── sitemap.js  # sitemap.xml
├── utils/              # Utility functions
│   └── seo.js         # SEO utilities
└── styles/            # CSS files
    └── globals.css    # Global styles
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/adswadi-website.git
   cd adswadi-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```env
   SITE_URL=https://adswadi.com
   GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Configuration

### SEO Configuration
- Update `next-seo.config.js` with your site details
- Modify structured data in each page
- Update meta tags and Open Graph data

### Google Analytics
- Replace `GA_MEASUREMENT_ID` with your actual GA4 ID
- Update tracking code in `_document.js`

### Sitemap
- Update `next-sitemap.config.js` with your domain
- Add new pages to the sitemap API route

## 📊 SEO Features

### Technical SEO
- ✅ **next-seo** integration
- ✅ **Structured Data** (JSON-LD)
- ✅ **Open Graph** tags
- ✅ **Twitter Cards**
- ✅ **Canonical URLs**
- ✅ **Meta descriptions**
- ✅ **Keyword optimization**

### Local SEO
- ✅ **LocalBusiness** schema
- ✅ **Contact information**
- ✅ **Service areas** (Delhi, Mumbai, Bangalore)
- ✅ **Business hours**
- ✅ **NAP** consistency

### Performance SEO
- ✅ **Core Web Vitals** optimization
- ✅ **Image optimization**
- ✅ **Font preloading**
- ✅ **Bundle analysis**
- ✅ **Lighthouse** optimization

## 🎯 Target Keywords

### Primary Keywords
- "digital marketing agency India"
- "Facebook Ads Delhi"
- "Google Ads Mumbai"
- "performance marketing Bangalore"
- "advertising agency India"

### Service Keywords
- "Meta Ads management"
- "Google Ads services"
- "Instagram Ads agency"
- "PPC advertising India"
- "social media marketing"

### Local Keywords
- "digital marketing Delhi"
- "Facebook Ads Mumbai"
- "Google Ads Bangalore"
- "advertising agency Delhi"
- "performance marketing India"

## 📈 Analytics & Tracking

### Google Analytics 4
- Page view tracking
- Event tracking
- Conversion tracking
- E-commerce tracking

### Search Console
- Submit sitemap
- Monitor performance
- Track keywords
- Analyze clicks

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Content Guidelines

### Page Titles
- Homepage: "Adswadi – Advertising & Performance Marketing Agency India"
- Services: "[Service] Management Services India | [Location]"
- Contact: "Contact Adswadi - Digital Marketing Agency India"

### Meta Descriptions
- Include primary keywords
- Mention target locations
- Keep under 160 characters
- Include call-to-action

### Content Structure
- H1: Main keyword + location
- H2: Service benefits
- H3: Specific features
- Internal linking between pages

## 🔍 SEO Checklist

### Technical
- [ ] XML sitemap generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Meta descriptions optimized
- [ ] Open Graph tags added
- [ ] Structured data implemented

### Content
- [ ] H1 tags optimized
- [ ] Internal linking strategy
- [ ] Image alt tags added
- [ ] Page load speed optimized
- [ ] Mobile responsive design

### Local SEO
- [ ] LocalBusiness schema added
- [ ] NAP consistency maintained
- [ ] Service areas specified
- [ ] Contact information complete
- [ ] Google My Business optimized

## 📞 Contact

For questions or support:
- **Email**: hello@adswadi.com
- **Phone**: +91-8678830021
- **WhatsApp**: [Click to chat](https://wa.me/918678830021)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
