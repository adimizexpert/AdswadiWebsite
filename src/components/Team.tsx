import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: 'Md Sam',
    role: 'Dropshipping Ads Expert',
    description: 'Specializes in creating high-converting dropshipping ad campaigns that drive sales and maximize ROI.',
    avatar: '👨‍💼',
    bgColor: 'bg-blue-500'
  },
  {
    name: 'Ayubh',
    role: 'Graphic Designer & Video Editor',
    description: 'Creates stunning visuals and compelling video content that captures attention and converts.',
    avatar: '👩‍🎨',
    bgColor: 'bg-purple-500'
  },
  {
    name: 'Aditya',
    role: 'Website Developer & Landing Page Expert',
    description: 'Builds high-converting websites and landing pages that turn visitors into customers.',
    avatar: '👨‍💻',
    bgColor: 'bg-green-500'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.12, 0.03],
            rotate: [0, 45, 90]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.05, 0.15, 0.05],
            rotate: [90, 45, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
        />
        {/* Team Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/3 text-2xl"
        >
          👥
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/3 text-xl"
        >
          💼
        </motion.div>
        {/* Connection Lines */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-gradient-to-r from-purple-400/30 to-blue-400/30"
        />
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/2 right-1/4 w-24 h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30"
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              The Brains Behind the Brand
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built by a team of relentless creators and marketers who believe in smart ads and scalable growth.
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-32 h-32 rounded-full mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center ${member.bgColor}`}>
                    <span className="text-5xl">{member.avatar}</span>
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-xl">{member.name}</h4>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className="text-slate-600 max-w-sm mx-auto leading-relaxed text-sm">
                  {member.description}
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors"
                  >
                    <MessageCircle size={18} className="text-slate-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors"
                  >
                    <Instagram size={18} className="text-slate-600" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
