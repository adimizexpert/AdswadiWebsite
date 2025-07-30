import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    name: 'Aditya Sharma',
    role: 'Co-Founder & Performance Lead',
    description: 'Drives the strategy behind every high-performing campaign.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Rohit Mehta',
    role: 'Co-Founder & Tech + Automation Head',
    description: 'Makes the systems behind your success run smoother than ever.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const teamMembers = [
  {
    name: 'Shruti',
    role: 'Ads Strategist',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Karan',
    role: 'Graphics Head',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Pooja',
    role: 'Landing Page Specialist',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Mayank',
    role: 'Telegram Bot Dev',
    image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              The Brains Behind the Brand
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built by a team of relentless creators and marketers who believe in smart ads and scalable growth.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{founder.name}</h3>
              <p className="text-purple-600 font-semibold mb-3">{founder.role}</p>
              <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                "{founder.description}"
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors">
                  <Linkedin size={20} className="text-slate-600" />
                </button>
                <button className="p-2 rounded-full bg-slate-100 hover:bg-purple-100 transition-colors">
                  <Twitter size={20} className="text-slate-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Expert Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
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