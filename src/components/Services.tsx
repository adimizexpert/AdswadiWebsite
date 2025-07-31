import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Instagram, Facebook, Search, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Instagram,
      title: 'Instagram Ads',
      description: 'Engage your audience with visually stunning Instagram campaigns that drive conversions.',
      features: ['Story Ads', 'Feed Ads', 'Reels Ads', 'Shopping Ads'],
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Facebook,
      title: 'Facebook Ads',
      description: 'Reach millions of potential customers with targeted Facebook advertising campaigns.',
      features: ['Lead Generation', 'Brand Awareness', 'Conversion Campaigns', 'Retargeting'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Dominate search results with strategic Google Ads campaigns that capture high-intent traffic.',
      features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'Video Ads'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Create memorable brand experiences that resonate with your target audience.',
      features: ['Logo Design', 'Brand Identity', 'Visual Guidelines', 'Brand Strategy'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From social media campaigns to search engine optimization, we deliver results that drive your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className={`${service.bgColor} rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 h-full`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className={`w-4 h-4 ${service.iconColor}`} />
                      <span className="text-slate-700 text-xs">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm`}
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;