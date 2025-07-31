import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Instagram, Facebook, Search, Palette, TrendingUp, Target, Zap, Award } from 'lucide-react';

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

  const benefits = [
    { icon: Target, title: 'ROI Focused', description: 'Every campaign is optimized for maximum return on investment.' },
    { icon: Zap, title: 'Fast Execution', description: 'Quick setup and deployment for immediate results.' },
    { icon: Award, title: 'Trusted by 30+ Brands', description: 'Proven track record with leading companies.' }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-200/50"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            Our Services
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Digital Marketing
            </span>
            <br />
            <span className="text-slate-900">That Converts</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From social media campaigns to search engine optimization, we deliver results that drive your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
              <div className={`${service.bgColor} rounded-3xl p-8 shadow-xl border border-purple-100/50 hover:shadow-2xl transition-all duration-500 h-full`}>
                {/* Animated Icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className={`w-5 h-5 ${service.iconColor}`} />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                >
                  Get Started
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${service.color} rounded-full opacity-30`}
              />
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h3>
            <p className="text-purple-100 mb-8 text-lg">
              Let's create campaigns that drive real results and grow your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Start Your Campaign
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;