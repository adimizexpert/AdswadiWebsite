import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  const seo = {
    title: 'Adswadi – Advertising & Performance Marketing Agency India',
    description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies across Delhi, Mumbai, Bangalore, and India.',
    canonical: 'https://adswadi.com',
    openGraph: {
      title: 'Adswadi – Advertising & Performance Marketing Agency India',
      description: 'Transform your business with smart ads. Expert digital marketing services including Facebook Ads, Google Ads, Instagram Ads, and performance marketing strategies across Delhi, Mumbai, Bangalore, and India.',
      url: 'https://adswadi.com',
      siteName: 'Adswadi',
      images: [
        {
          url: 'https://adswadi.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Adswadi - Performance Marketing Agency India',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'digital marketing agency India, facebook ads Delhi, google ads Mumbai, instagram ads Bangalore, performance marketing agency, advertising agency India, social media marketing, PPC campaigns, ROI optimization, conversion optimization',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  };

  const structuredData = {
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
    serviceArea: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Facebook Ads Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instagram Ads Management',
          },
        },
      ],
    },
  };

  return (
    <>
      <NextSeo {...seo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Layout>
        <Hero />
        <Services />
        <CaseStudies />
        <Team />
        <Blog />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
} 