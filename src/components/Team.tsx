import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';

const founders = [
  {
    name: 'Sadab Alam',
    role: 'Founder & Performance Lead',
    description: 'Drives the strategy behind every high-performing campaign.',
    image: '02.png'
  },
  {
    name: 'Raushan',
    role: 'Co-Founder & AdsExpert',
    description: 'Makes the systems behind your success run smoother than ever.',
    image: '01.png'
  }
];

const teamMembers = [
  {
    name: '😎',
    role: 'Ads Strategist',
    avatar: '👨‍💼',
    bgColor: 'bg-blue-500'
  },
  {
    name: '🎨',
    role: 'Graphics Head',
    avatar: '👩‍🎨',
    bgColor: 'bg-purple-500'
  },
  {
    name: '💻',
    role: 'Landing Page Specialist',
    avatar: '👨‍💻',
    bgColor: 'bg-green-500'
  },
  {
    name: '🤖',
    role: 'Telegram Bot Dev',
    avatar: '👩‍🔧',
    bgColor: 'bg-orange-500'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              The Brains Behind the Brand
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built by a team of relentless creators and marketers who believe in smart ads and scalable growth.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="relative mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{founder.name}</h3>
              <p className="text-purple-600 font-semibold mb-3">{founder.role}</p>
              <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                "{founder.description}"
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors"
                >
                  <MessageCircle size={20} className="text-slate-600" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors"
                >
                  <Instagram size={20} className="text-slate-600" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Expert Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="relative mb-4">
                  <div className={`w-24 h-24 rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center ${member.bgColor}`}>
                    <span className="text-4xl">{member.avatar}</span>
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-3xl">{member.name}</h4>
                <p className="text-slate-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
