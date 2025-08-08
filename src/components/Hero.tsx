import React, { useEffect, useRef, useCallback, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Pencil } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const profitRef = useRef<HTMLSpanElement>(null);
  const [profitWidth, setProfitWidth] = useState<number>(0);
  const [profitHeight, setProfitHeight] = useState<number>(0);

  // Measure the "Profit" word to size the underline
  useLayoutEffect(() => {
    const update = () => {
      const rect = profitRef.current?.getBoundingClientRect();
      if (!rect) return;
      setProfitWidth(rect.width);
      setProfitHeight(rect.height);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 15; // Reduced from 30

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Reduced speed
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1 + 0.5, // Reduced size
        opacity: Math.random() * 0.2 + 0.1 // Reduced opacity
      });
    }

    let animationId: number;
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
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const cleanup = animate();
    return cleanup;
  }, [animate]);

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/918678830021?text=Hi%20Adswadi%20team!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20help%20me%20grow%20my%20business?`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-5"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-blue-600/80 to-indigo-700/80"></div>
      
      {/* Logo Watermark */}
      <div className="absolute top-8 left-8 opacity-10">
        <img 
          src="/adswadi-logo.svg"
          alt="Adswadi"
          className="h-16 w-auto"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-white/10 rounded-full blur-2xl"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.15 } }
            }}
          >
            {['Optimize', 'Your', 'Ads'].map((word, idx) => (
              <motion.span
                key={`w1-${idx}`}
                className="inline-block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent"
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                {word}{' '}
              </motion.span>
            ))}
            <br className="hidden sm:block" />
            {['For', 'More'].map((word, idx) => (
              <motion.span
                key={`w2-${idx}`}
                className="inline-block text-white"
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                {word}{' '}
              </motion.span>
            ))}
            <span className="relative inline-block">
              <motion.span
                ref={profitRef}
                className="relative z-10 inline-block bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-transparent"
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                Profit.
              </motion.span>
              {/* Pencil underline (animated draw) */}
              <motion.svg
                key={profitWidth}
                width={Math.max(profitWidth, 10)}
                height={Math.max(Math.round(profitHeight * 0.6), 12)}
                viewBox={`0 0 ${Math.max(profitWidth, 10)} ${Math.max(
                  Math.round(profitHeight * 0.6),
                  12
                )}`}
                className="absolute left-0 -bottom-2 overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {/* Curved underline path */}
                <motion.path
                  d={`M2 ${Math.max(Math.round(profitHeight * 0.35), 8)} C ${
                    profitWidth * 0.25
                  } ${Math.max(Math.round(profitHeight * 0.65), 12)}, ${
                    profitWidth * 0.75
                  } ${Math.max(Math.round(profitHeight * 0.05), 4)}, ${
                    profitWidth - 4
                  } ${Math.max(Math.round(profitHeight * 0.35), 8)}`}
                  fill="none"
                  stroke="url(#pencilGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.65 }}
                />
                <defs>
                  <linearGradient id="pencilGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
                {/* Pencil icon moving left to right */}
                <motion.g
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: profitWidth - 6, opacity: 1 }}
                  transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.65 }}
                >
                  <Pencil size={18} color="#ffffff" fill="#ffffff" />
                </motion.g>
              </motion.svg>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help businesses grow with data-driven digital marketing strategies that deliver real results.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
          >
            <span className="relative z-10">Book a Strategy Call</span>
            <ArrowRight size={20} className="relative z-10" />
          </motion.a>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <p className="text-white mb-8 font-medium text-lg">
            Our Performance Marketing Services are Certified by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { 
                name: 'Meta', 
                image: '/facebook.png',
                color: 'text-blue-600',
                bgColor: 'bg-white',
                subText: 'Business Partner'
              },
              { 
                name: 'Shopify', 
                image: '/shopify.png',
                color: 'text-green-600',
                bgColor: 'bg-white',
                subText: 'partners'
              },
              { 
                name: 'Google', 
                image: '/google.png',
                color: 'text-blue-600',
                bgColor: 'bg-white',
                subText: 'Partner'
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className={`w-16 h-16 rounded-xl ${partner.bgColor} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  <img 
                    src={partner.image} 
                    alt={`${partner.name} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-base">
                    {partner.name}
                  </div>
                  <div className="text-xs text-white/80">
                    {partner.subText}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
