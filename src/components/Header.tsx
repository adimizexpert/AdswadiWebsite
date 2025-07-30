import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-900">
              ADS<span className="text-purple-600">WADi</span>
            </div>
            <div className="hidden sm:block ml-2 text-xs text-slate-500">
              Advertising that actually works
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-700 hover:text-purple-600 transition-colors">
              Services
            </a>
            <a href="#work" className="text-slate-700 hover:text-purple-600 transition-colors">
              Our Work
            </a>
            <a href="#team" className="text-slate-700 hover:text-purple-600 transition-colors">
              Team
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-purple-600 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-slate-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors">
              Chat Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#services" className="block px-3 py-2 text-slate-700">Services</a>
              <a href="#work" className="block px-3 py-2 text-slate-700">Our Work</a>
              <a href="#team" className="block px-3 py-2 text-slate-700">Team</a>
              <a href="#testimonials" className="block px-3 py-2 text-slate-700">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-slate-700">Contact</a>
              <button className="w-full text-left bg-slate-900 text-white px-3 py-2 rounded-xl mt-2">
                Chat Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;