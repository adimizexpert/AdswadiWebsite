import React, { useEffect, useRef, useCallback, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Pencil } from 'lucide-react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EasePack } from "gsap/EasePack";

gsap.registerPlugin(DrawSVGPlugin, EasePack);

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phraseRef = useRef<HTMLSpanElement>(null);
  const underlinePathRef = useRef<SVGPathElement>(null);
  const [phraseWidth, setPhraseWidth] = useState<number>(0);
  const [phraseHeight, setPhraseHeight] = useState<number>(0);
  const [dash, setDash] = useState<number>(0);

  // Measure the "For More Profit" phrase to size the underline
  useLayoutEffect(() => {
    const update = () => {
      const rect = phraseRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPhraseWidth(rect.width);
      setPhraseHeight(rect.height);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // GSAP DrawSVG animation for the underline
  useEffect(() => {
    if (!underlinePathRef.current || !phraseWidth) return;
    
    // Reset the path
    gsap.set(underlinePathRef.current, { drawSVG: "0%" });
    
    // Animate the path drawing
    gsap.to(underlinePathRef.current, {
      drawSVG: "100%",
      duration: 2,
      ease: "power2.out",
      delay: 0.6
    });
  }, [phraseWidth, phraseHeight]);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-cyan-50">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10"
      />
      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 20%, rgba(168,85,247,0.35), transparent 60%), radial-gradient(1000px 500px at 80% 30%, rgba(99,102,241,0.30), transparent 55%), radial-gradient(900px 500px at 40% 80%, rgba(236,72,153,0.25), transparent 55%)'
        }}
      />
      
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
            className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.15 } }
            }}
          >
            {['Unlock', 'Greater', 'Profits'].map((word, idx) => (
              <motion.span
                key={`w1-${idx}`}
                className="inline-block bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-800 bg-clip-text text-transparent drop-shadow-lg"
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                {word}{' '}
              </motion.span>
            ))}
            <br className="block" />
            <span className="relative inline-block align-bottom">
              <motion.span
                ref={phraseRef}
                className="relative z-10 inline-block bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-800 bg-clip-text text-transparent drop-shadow-lg text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black"
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                from Every Ad
              </motion.span>
              {/* Pencil underline (animated draw from left to right) */}
              <svg
                key={phraseWidth}
                width={Math.max(phraseWidth, 10)}
                height={Math.max(Math.round(phraseHeight * 0.6), 12)}
                viewBox={`0 0 ${Math.max(phraseWidth, 10)} ${Math.max(
                  Math.round(phraseHeight * 0.6),
                  12
                )}`}
                className="absolute left-0 -bottom-2 overflow-visible"
              >
                <defs>
                  <linearGradient id="pencilGradient2" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <path
                  ref={underlinePathRef}
                  id="underlinePath"
                  d={`M2 ${Math.max(Math.round(phraseHeight * 0.35), 8)} C ${
                    phraseWidth * 0.25
                  } ${Math.max(Math.round(phraseHeight * 0.65), 12)}, ${
                    phraseWidth * 0.75
                  } ${Math.max(Math.round(phraseHeight * 0.05), 4)}, ${
                    phraseWidth - 4
                  } ${Math.max(Math.round(phraseHeight * 0.35), 8)}`}
                  fill="none"
                  stroke="url(#pencilGradient2)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* Moving pencil icon */}
                <motion.g
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: phraseWidth - 6, opacity: 1 }}
                  transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.6 }}
                >
                  <Pencil size={18} color="#7c3aed" fill="#7c3aed" />
                </motion.g>
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed"
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
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="certified-section text-center"
        >
          <h2 className="text-slate-700 mb-12 font-semibold text-xl">
            Our Performance Marketing Services are Certified by
          </h2>
          <div className="partners grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: 'Meta', 
                image: '/facebook.png',
                alt: 'Meta Business Partner Logo',
                subText: 'Business Partner'
              },
              { 
                name: 'Shopify', 
                image: '/shopify.png',
                alt: 'Shopify Partner Logo',
                subText: 'Partner'
              },
              { 
                name: 'Google', 
                image: '/google.png',
                alt: 'Google Partner Logo',
                subText: 'Partner'
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="partner flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-3">
                  <img 
                    src={partner.image} 
                    alt={partner.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    {partner.subText}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Hero;
