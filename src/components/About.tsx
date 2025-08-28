import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Globe, Heart, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and ROI for every campaign we manage.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of digital marketing trends to give you the competitive edge.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Complete visibility into your campaigns with detailed reporting and insights.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Started with a vision to transform digital marketing' },
    { year: '2021', title: 'First 100 Clients', description: 'Reached our first milestone of satisfied clients' },
    { year: '2022', title: 'Team Expansion', description: 'Grew our team to 15+ marketing experts' },
    { year: '2023', title: 'Industry Recognition', description: 'Awarded Best Performance Marketing Agency' },
    { year: '2024', title: 'Global Reach', description: 'Serving clients across 25+ countries' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.08, 0.02]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.1, 0.03]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              About ADSWADi
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            We're not just another digital marketing agency. We're your strategic partner in growth, 
            innovation, and digital transformation.
          </p>
        </motion.div>

        {/* Agency Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2020, ADSWADi emerged from a simple yet powerful vision: to make 
                  performance marketing accessible, transparent, and results-driven for businesses 
                  of all sizes.
                </p>
                <p>
                  What started as a small team of passionate marketers has grown into a 
                  full-service digital marketing powerhouse, serving clients across 25+ countries 
                  and helping them achieve remarkable growth.
                </p>
                <p>
                  We believe that every business deserves to thrive in the digital age, and 
                  we're committed to making that happen through innovative strategies, cutting-edge 
                  technology, and unwavering dedication to our clients' success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-slate-100">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Global Impact</h3>
                  <p className="text-slate-600">
                    Serving clients worldwide with localized strategies and global expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with data-driven marketing strategies that deliver 
                measurable results, driving sustainable growth and market leadership.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted partner in digital transformation, setting industry 
                standards for innovation, transparency, and client success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Why Choose ADSWADi?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-600">
                15+ certified marketing professionals with 5+ years of experience
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Proven Results</h3>
              <p className="text-slate-600">
                Average 3.2x ROAS and 200%+ conversion rate improvements
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Full Transparency</h3>
              <p className="text-slate-600">
                Real-time reporting and complete campaign visibility
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 