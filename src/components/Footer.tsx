import React from 'react';
import { Instagram, MessageCircle, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                ADS<span className="text-purple-400">WADi</span>
              </div>
              <div className="ml-2 text-xs text-slate-400">
                Advertising that actually works
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              We craft performance-driven campaigns that deliver measurable results. 
              Your success is our mission, and we're here to supercharge your advertising strategy.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Instagram size={20} />
              </button>
              <button className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Send size={20} />
              </button>
              <button className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ad Creatives</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 ADSWADi. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Made with ❤️ for performance-driven businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;