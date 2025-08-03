const siteConfig = {
  titleTemplate: '%s | Adswadi - Performance Marketing Agency',
  defaultTitle: 'Adswadi - Advertising & Performance Marketing Agency India',
  description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies across India.',
  canonical: 'https://adswadi.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adswadi.com',
    siteName: 'Adswadi',
    title: 'Adswadi - Performance Marketing Agency India',
    description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies.',
    images: [
      {
        url: 'https://adswadi.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adswadi - Performance Marketing Agency',
      },
    ],
  },
  twitter: {
    handle: '@adswadi',
    site: '@adswadi',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'digital marketing, facebook ads, google ads, instagram ads, performance marketing, advertising agency, social media marketing, PPC campaigns, ROI optimization, conversion optimization, Delhi, Mumbai, Bangalore, India',
    },
    {
      name: 'author',
      content: 'Adswadi Team',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'language',
      content: 'English',
    },
    {
      name: 'revisit-after',
      content: '7 days',
    },
    {
      name: 'distribution',
      content: 'global',
    },
    {
      name: 'rating',
      content: 'general',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

module.exports = siteConfig; 