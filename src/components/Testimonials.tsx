import React from 'react';
import { Star, TrendingUp, Users, Award, Target } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'ADSWADi transformed our marketing completely. Our ROAS increased by 300% in just 3 months!'
  },
  {
    name: 'Raj Patel',
    company: 'E-commerce Plus',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'The automation systems they built for us are incredible. We now generate leads 24/7 without any manual work.'
  },
  {
    name: 'Maria Garcia',
    company: 'Fashion Forward',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Their creative team knows exactly how to make ads that convert. Our cost per acquisition dropped by 60%.'
  }
];

const stats = [
  {
    icon: Target,
    number: '250+',
    label: 'Ad Campaigns',
    color: 'text-blue-600'
  },
  {
    icon: TrendingUp,
    number: '₹80L+',
    label: 'Ad Spent',
    color: 'text-green-600'
  },
  {
    icon: Award,
    number: '70+',
    label: 'Funnels Delivered',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    number: '94%',
    label: 'Client Retention',
    color: 'text-orange-600'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Loved by Clients, Trusted by Brands
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with ADSWADi.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;