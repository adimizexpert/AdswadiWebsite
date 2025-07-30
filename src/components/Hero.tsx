import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Optimize Your Ads{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              For More Profit.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-700 mb-4 max-w-3xl mx-auto font-medium">
            5+ years | 250+ Campaigns | ₹80L+ Ad Spend
          </p>
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            A dedicated team of specialists, delivering remarkable work to our clients worldwide!
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book a Strategy Call
            </button>
          </div>

          {/* Partner Logos */}
          <div className="text-center">
            <p className="text-slate-700 mb-6 font-medium">Our Performance Marketing Services are Certified by</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-slate-100">
                <span className="text-blue-600 font-bold text-base">Meta Business Partner</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-slate-100">
                <span className="text-green-600 font-bold text-base">Shopify Partners</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-slate-100">
                <span className="text-blue-500 font-bold text-base">Google Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;