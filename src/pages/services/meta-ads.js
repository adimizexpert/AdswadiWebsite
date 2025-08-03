import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Target, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function MetaAds() {
  const seo = {
    title: 'Meta Ads Management Services India | Facebook & Instagram Ads Delhi, Mumbai, Bangalore',
    description: 'Expert Meta Ads management services across India. Boost your Facebook and Instagram campaigns with our proven strategies. Get 300%+ ROI with targeted Meta advertising in Delhi, Mumbai, Bangalore.',
    canonical: 'https://adswadi.com/services/meta-ads',
    openGraph: {
      title: 'Meta Ads Management Services India | Facebook & Instagram Ads',
      description: 'Expert Meta Ads management services across India. Boost your Facebook and Instagram campaigns with our proven strategies.',
      url: 'https://adswadi.com/services/meta-ads',
      images: [
        {
          url: 'https://adswadi.com/meta-ads-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Meta Ads Management Services India',
        },
      ],
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'meta ads India, facebook ads Delhi, instagram ads Mumbai, facebook advertising Bangalore, meta ads management, facebook ads agency India, instagram ads services, social media advertising',
      },
    ],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Meta Ads Management Services',
    description: 'Expert Meta Ads management services including Facebook Ads and Instagram Ads across India.',
    provider: {
      '@type': 'Organization',
      name: 'Adswadi',
      url: 'https://adswadi.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'Digital Marketing',
    offers: {
      '@type': 'Offer',
      price: 'Contact for Quote',
      priceCurrency: 'INR',
    },
  };

  const features = [
    'Facebook Ads Management',
    'Instagram Ads Optimization',
    'Audience Targeting & Retargeting',
    'Creative Design & Copywriting',
    'Performance Tracking & Analytics',
    'A/B Testing & Optimization',
    'Lead Generation Campaigns',
    'Brand Awareness Campaigns',
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300%+ Average ROI',
      description: 'Our clients see an average ROI of 300%+ on their Meta Ads campaigns.',
    },
    {
      icon: Target,
      title: 'Precise Targeting',
      description: 'Advanced audience targeting to reach your ideal customers across India.',
    },
    {
      icon: Users,
      title: '50+ Happy Clients',
      description: 'Trusted by 50+ brands across Delhi, Mumbai, Bangalore, and India.',
    },
  ];

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
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  Meta Ads Management
                </span>
                <br />
                <span className="text-slate-900">Services India</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business with expert Meta Ads management. We specialize in Facebook Ads and Instagram Ads across Delhi, Mumbai, Bangalore, and India.
              </p>
            </motion.div>

            {/* Service Overview */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why Choose Our Meta Ads Services?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Our Meta Ads Services Include:
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Boost Your Meta Ads Performance?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get a free consultation and discover how our Meta Ads expertise can transform your business across India.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
} 