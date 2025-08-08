import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const founders = [
    {
      name: 'Shadab',
      role: 'Co-Founder & Performance Lead',
      bio: 'Drives the strategy behind every high-performing campaign with 5+ years of experience in digital marketing.',
      image: '/founders/shadab.jpg',
      stats: { campaigns: '200+', roi: '500%', clients: '50+' }
    },
    {
      name: 'Roushan',
      role: 'Co-Founder & Tech + Automation Head',
      bio: 'Makes the systems behind your success run smoother than ever with cutting-edge automation solutions.',
      image: '/founders/roushan.jpg',
      stats: { campaigns: '150+', roi: '400%', clients: '40+' }
    }
  ];

  const achievements = [
    { icon: Award, value: '30+', label: 'Brands Trust Us' },
    { icon: Users, value: '500%', label: 'Avg. ROI Increase' },
    { icon: TrendingUp, value: '24h', label: 'Fast Execution' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
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
              The Brains Behind
            </span>
            <br />
            <span className="text-slate-900">the Brand</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate digital marketers and tech innovators who believe in delivering 
            results that speak louder than words.
          </p>
        </motion.div>

        {/* Founders Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Founder Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center hidden">
                        <span className="text-white font-bold text-xl">{founder.name[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{founder.name}</h3>
                  <p className="text-purple-600 font-semibold mb-4">{founder.role}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">{founder.bio}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(founder.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors"
                  >
    
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors"
                  >
    
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors"
                  >
                    <Instagram size={18} className="text-slate-600" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <achievement.icon className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">{achievement.value}</div>
              <div className="text-slate-600 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 