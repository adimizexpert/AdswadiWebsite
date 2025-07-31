import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Globe, Palette, MessageSquare, Code, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that maximize ROI and deliver measurable growth for your business.',
    features: ['ROI Optimization', 'A/B Testing', 'Conversion Tracking', 'Real-time Analytics'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Paid Ad Campaigns',
    description: 'Expert management of Meta, Google, and Telegram ads that convert visitors into customers.',
    features: ['Multi-platform Ads', 'Audience Targeting', 'Budget Optimization', 'Performance Monitoring'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Landing Page Creation',
    description: 'High-converting landing pages designed to capture leads and drive sales effectively.',
    features: ['Conversion Optimization', 'Mobile Responsive', 'A/B Testing', 'Analytics Integration'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Ad Creatives & Graphics',
    description: 'Stunning visual content that stops the scroll and compels your audience to take action.',
    features: ['Creative Design', 'Brand Consistency', 'Performance Testing', 'Asset Management'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & Telegram Bots',
    description: 'Automated customer engagement systems that nurture leads 24/7 without manual effort.',
    features: ['24/7 Automation', 'Lead Nurturing', 'Customer Support', 'Integration APIs'],
    color: 'from-teal-500 to-blue-500'
  },
  {
    icon: Code,
    title: 'Website & Sales Funnels',
    description: 'Complete funnel systems that guide prospects from awareness to purchase seamlessly.',
    features: ['Funnel Optimization', 'User Experience', 'Conversion Tracking', 'Technical SEO'],
    color: 'from-indigo-500 to-purple-500'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200/50"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Our Premium Services
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Services That Drive Results
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of digital marketing services designed to accelerate your business growth with proven strategies and measurable outcomes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join 50+ businesses that trust us to deliver exceptional results. Let's discuss your project and create a custom strategy that drives growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Schedule a Free Consultation
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;