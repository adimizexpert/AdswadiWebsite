import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, seo = {} }) => {
  const router = useRouter();
  
  const defaultSEO = {
    title: 'Adswadi - Advertising & Performance Marketing Agency India',
    description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies across India.',
    canonical: `https://adswadi.com${router.asPath}`,
    openGraph: {
      title: 'Adswadi - Performance Marketing Agency India',
      description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies.',
      url: `https://adswadi.com${router.asPath}`,
      siteName: 'Adswadi',
      images: [
        {
          url: 'https://adswadi.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Adswadi - Performance Marketing Agency',
        },
      ],
      locale: 'en_IN',
      type: 'website',
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
    ],
  };

  return (
    <>
      <NextSeo {...defaultSEO} {...seo} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 