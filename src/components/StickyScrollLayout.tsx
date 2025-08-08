import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import CaseStudies from './CaseStudies.tsx';
import Team from './Team.tsx';
import Blog from './Blog.tsx';
import Testimonials from './Testimonials.tsx';
import FAQ from './FAQ.tsx';
import Contact from './Contact.tsx';

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, ScrollSmoother, SplitText);

const StickyScrollLayout: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionsRef.current) return;

    // Create smooth sticky sections
    const sections = gsap.utils.toArray('.sticky-section');
    
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          // Add subtle animation to current section
          const progress = self.progress;
          gsap.to(section, {
            opacity: 0.8 + (progress * 0.2),
            scale: 0.98 + (progress * 0.02),
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionsRef} className="relative">
      {/* Hero Section */}
      <section className="sticky-section min-h-screen w-full">
        <Hero />
      </section>

      {/* Services Section */}
      <section className="sticky-section min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Services />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="sticky-section min-h-screen w-full bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <CaseStudies />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="sticky-section min-h-screen w-full bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Team />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="sticky-section min-h-screen w-full bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Blog />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="sticky-section min-h-screen w-full bg-gradient-to-br from-orange-50 to-red-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sticky-section min-h-screen w-full bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="sticky-section min-h-screen w-full bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StickyScrollLayout;
