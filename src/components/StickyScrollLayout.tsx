import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import CaseStudies from './CaseStudies.tsx';
import Team from './Team.tsx';
import Blog from './Blog.tsx';
import Testimonials from './Testimonials.tsx';
import FAQ from './FAQ.tsx';
import Contact from './Contact.tsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const StickyScrollLayout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionsRef.current) return;

    // Create smooth scroller
    const smoother = ScrollSmoother.create({
      wrapper: containerRef.current,
      content: sectionsRef.current,
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    // Create sticky sections
    const sections = gsap.utils.toArray('.sticky-section');
    
    sections.forEach((section, index) => {
      const nextSection = sections[index + 1];
      
      if (nextSection) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
          onEnter: () => {
            gsap.to(section, {
              opacity: 0.3,
              scale: 0.95,
              duration: 0.5,
              ease: 'power2.out'
            });
          },
          onLeave: () => {
            gsap.to(section, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'power2.out'
            });
          },
          onEnterBack: () => {
            gsap.to(section, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'power2.out'
            });
          },
          onLeaveBack: () => {
            gsap.to(section, {
              opacity: 0.3,
              scale: 0.95,
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div ref={sectionsRef} className="relative">
        {/* Hero Section */}
        <section className="sticky-section h-screen w-full">
          <Hero />
        </section>

        {/* Services Section */}
        <section className="sticky-section h-screen w-full">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Services />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="sticky-section h-screen w-full">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CaseStudies />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="sticky-section h-screen w-full">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Team />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="sticky-section h-screen w-full">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Blog />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="sticky-section h-screen w-full">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="sticky-section h-screen w-full">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FAQ />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="sticky-section h-screen w-full">
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-violet-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StickyScrollLayout;
