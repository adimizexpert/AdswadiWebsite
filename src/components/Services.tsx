import React from 'react';
import { TrendingUp, Target, Globe, Palette, MessageSquare, Code } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that maximize ROI and deliver measurable growth for your business.'
  },
  {
    icon: Target,
    title: 'Paid Ad Campaigns',
    description: 'Expert management of Meta, Google, and Telegram ads that convert visitors into customers.'
  },
  {
    icon: Globe,
    title: 'Landing Page Creation',
    description: 'High-converting landing pages designed to capture leads and drive sales effectively.'
  },
  {
    icon: Palette,
    title: 'Ad Creatives & Graphics',
    description: 'Stunning visual content that stops the scroll and compels your audience to take action.'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & Telegram Bots',
    description: 'Automated customer engagement systems that nurture leads 24/7 without manual effort.'
  },
  {
    icon: Code,
    title: 'Website & Sales Funnels',
    description: 'Complete funnel systems that guide prospects from awareness to purchase seamlessly.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NEW!
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive suite of digital marketing services designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Want to discuss your project?</p>
          <a
            href="#contact"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors underline"
          >
            Let's Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;