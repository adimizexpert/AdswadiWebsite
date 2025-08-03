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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <motion.div 
                className={`${service.bgColor} rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden`}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
              >
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: [0, 5, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
                />
                
                {/* Icon */}
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 8px rgba(0,0,0,0.1)",
                      "0 8px 16px rgba(0,0,0,0.2)",
                      "0 4px 8px rgba(0,0,0,0.1)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>

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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;