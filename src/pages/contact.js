import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const seo = {
    title: 'Contact Adswadi - Digital Marketing Agency India | Delhi, Mumbai, Bangalore',
    description: 'Contact Adswadi for expert digital marketing services. Get in touch for Facebook Ads, Google Ads, and performance marketing solutions across Delhi, Mumbai, Bangalore, and India.',
    canonical: 'https://adswadi.com/contact',
    openGraph: {
      title: 'Contact Adswadi - Digital Marketing Agency India',
      description: 'Contact Adswadi for expert digital marketing services. Get in touch for Facebook Ads, Google Ads, and performance marketing solutions.',
      url: 'https://adswadi.com/contact',
      images: [
        {
          url: 'https://adswadi.com/contact-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact Adswadi - Digital Marketing Agency India',
        },
      ],
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'contact adswadi, digital marketing agency contact, facebook ads Delhi, google ads Mumbai, performance marketing Bangalore, advertising agency India contact',
      },
    ],
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Adswadi',
    description: 'Performance marketing agency specializing in Facebook Ads, Google Ads, and digital marketing strategies.',
    url: 'https://adswadi.com',
    telephone: '+91-8678830021',
    email: 'hello@adswadi.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Delhi, India',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.7041',
      longitude: '77.1025',
    },
    openingHours: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/adswadi',
      'https://www.linkedin.com/company/adswadi',
      'https://twitter.com/adswadi',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Delhi',
      },
      {
        '@type': 'City',
        name: 'Mumbai',
      },
      {
        '@type': 'City',
        name: 'Bangalore',
      },
    ],
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-8678830021',
      link: 'tel:+918678830021',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@adswadi.com',
      link: 'mailto:hello@adswadi.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi, Mumbai, Bangalore, India',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
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
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  Get In Touch
                </span>
                <br />
                <span className="text-slate-900">With Adswadi</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with expert digital marketing? Contact us for a free consultation and discover how we can help you grow across India.
              </p>
            </motion.div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-slate-600">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Interest
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select a service</option>
                        <option>Meta Ads Management</option>
                        <option>Google Ads Management</option>
                        <option>Instagram Ads</option>
                        <option>Performance Marketing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Prefer WhatsApp?
                </h3>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  Get instant responses and quick consultations via WhatsApp. We're available 24/7 for urgent inquiries.
                </p>
                <motion.a
                  href="https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
} 