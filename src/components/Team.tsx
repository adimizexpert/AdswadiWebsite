import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    name: 'Shadab',
    role: 'Co-Founder & Performance Lead',
    description: 'Drives the strategy behind every high-performing campaign.',
    image: 'shadab.png'
  },
  {
    name: 'Roushan',
    role: 'Co-Founder & Tech + Automation Head',
    description: 'Makes the systems behind your success run smoother than ever.',
    image: 'roushan.png'
  }
];

const teamMembers = [
  {
    name: '1',
    role: 'Ads Strategist',
    image: '1.png'
  },
  {
    name: '2',
    role: 'Graphics Head',
    image: '2.png'
  },
  {
    name: '3',
    role: 'Landing Page Specialist',
    image: '3.png'
  },
  {
    name: '4',
    role: 'Telegram Bot Dev',
    image: '4.png'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Fade In */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              The Brains Behind the Brand
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built by a team of relentless creators and marketers who believe in smart ads and scalable growth.
          </p>
        </div>

        {/* Founders with Staggered Slide In */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <div key={index} className={`group text-center scroll-slide-${index === 0 ? 'left' : 'right'} scroll-delay-${(index + 1) * 200}`}>
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
                <button className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors hover:scale-110 transform transition-transform">
                  <Linkedin size={20} className="text-slate-600" />
                </button>
                <button className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors hover:scale-110 transform transition-transform">
                  <Twitter size={20} className="text-slate-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members with Scale In */}
        <div className="text-center mb-12 scroll-fade-in scroll-delay-600">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Expert Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`group scroll-scale-in scroll-delay-${700 + (index * 100)}`}>
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-slate-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
