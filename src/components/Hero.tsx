import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            <div className="mb-2">
              Optimize Your
            </div>
            <div className="mb-2">
              Ads For More
            </div>
            <div className="relative">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Profit.
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            </div>
          </motion.h1>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-800 mb-6 font-medium"
          >
            5+ years | 511+ Brands | 60+ Crore Ad spent
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A dedicated team of specialists, delivering remarkable work to our clients worldwide!
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mb-16"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book a Strategy Call
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <p className="text-slate-800 mb-8 font-medium text-lg">
              Our Performance Marketing Services are Certified by
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { 
                  name: 'Meta Business Partner', 
                  logo: 'M', 
                  color: 'text-blue-600',
                  bgColor: 'bg-blue-100',
                  subText: 'Business Partner'
                },
                { 
                  name: 'Shopify Partners', 
                  logo: 'S', 
                  color: 'text-green-600',
                  bgColor: 'bg-green-100',
                  subText: 'partners'
                },
                { 
                  name: 'Google Partner', 
                  logo: 'G', 
                  color: 'text-blue-600',
                  bgColor: 'bg-blue-600',
                  subText: 'Partner'
                }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-12 h-12 rounded-lg ${partner.bgColor} flex items-center justify-center`}>
                    <span className={`font-bold text-lg ${partner.color}`}>
                      {partner.logo}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-800 text-sm">
                      {partner.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-slate-600">
                      {partner.subText}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
