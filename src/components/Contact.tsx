import React, { useState } from 'react';
import { Send, MessageCircle, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Let's Build Your Next Ad Engine
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to scale your business with performance-driven marketing? Get in touch for a free strategy consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Strategy Call</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                >
                  <option value="">Select your business type</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="service">Service Business</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                  Monthly Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                >
                  <option value="">Select your budget range</option>
                  <option value="50k-1l">₹50K - ₹1L</option>
                  <option value="1l-3l">₹1L - ₹3L</option>
                  <option value="3l-5l">₹3L - ₹5L</option>
                  <option value="5l+">₹5L+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Book Free Strategy Call
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Prefer to talk directly? We're here to help. Reach out through any of these channels 
                and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/1234567890"
                className="flex items-center gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp</h4>
                  <p className="text-slate-600">Talk to us on WhatsApp</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">hello@adswadi.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-2xl text-white">
              <h4 className="font-bold mb-2">Ready to get started?</h4>
              <p className="text-purple-100 mb-4">
                Join 250+ businesses that trust ADSWADi for their marketing success.
              </p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;