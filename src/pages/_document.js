import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Adswadi',
              url: 'https://adswadi.com',
              logo: 'https://adswadi.com/logo.png',
              description: 'Performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies across India.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressLocality: 'Delhi',
                addressRegion: 'Delhi',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-8678830021',
                contactType: 'customer service',
                areaServed: 'IN',
              },
              sameAs: [
                'https://www.facebook.com/adswadi',
                'https://www.linkedin.com/company/adswadi',
                'https://twitter.com/adswadi',
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 