import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Performance Marketing',
      'Paid Ad Campaigns',
      'Landing Page Creation',
      'Ad Creatives & Graphics',
      'WhatsApp & Telegram Bots',
      'Website & Sales Funnels'
    ],
    company: [
      'About Us',
      'Our Team',
      'Case Studies',
      'Testimonials',
      'Careers',
      'Contact'
    ],
    resources: [
      'Blog',
      'Marketing Guide',
      'ROI Calculator',
      'Free Tools',
      'Webinars',
      'Support'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
      'Data Protection'
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="text-white">
      {/* Top Logo & Social on gradient background */}
      <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-600">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col items-center text-center">
            <motion.img
              src="/adswadi-logo.svg"
              alt="Logo"
              className="h-12 w-auto mb-6"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center hover:bg-white/25 transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Middle info panels (optional quick links) */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 shadow-sm p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Contact</h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@adswadi.com</div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4" /> +91 98765 43210</div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Mumbai, India</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 shadow-sm p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Services</h4>
              <ul className="text-slate-600 space-y-1">
                {footerLinks.services.slice(0,4).map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 shadow-sm p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Resources</h4>
              <ul className="text-slate-600 space-y-1">
                {footerLinks.resources.slice(0,4).map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © 2025 [Your Company Name] Private Limited | Privacy Policy
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;