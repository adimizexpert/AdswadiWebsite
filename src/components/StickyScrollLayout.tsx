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
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    // Create sticky sections with proper spacing
    const sections = gsap.utils.toArray('.sticky-section');
    
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          // Ensure only current section is fully visible
          sections.forEach((s, i) => {
            if (i === index) {
              gsap.set(s, { opacity: 1, scale: 1 });
            } else {
              gsap.set(s, { opacity: 0.1, scale: 0.98 });
            }
          });
        }
      });
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
        <section className="sticky-section h-screen w-full relative">
          <Hero />
        </section>

        {/* Services Section */}
        <section className="sticky-section h-screen w-full relative">
          <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Services />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="sticky-section h-screen w-full relative">
          <div className="h-full w-full bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <CaseStudies />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="sticky-section h-screen w-full relative">
          <div className="h-full w-full bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Team />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="sticky-section h-screen w-full relative">
          <div className="h-full w-full bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Blog />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="sticky-section h-screen w-full relative">
          <div className="h-full w-full bg-gradient-to-br from-orange-50 to-red-50">
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Testimonials />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="sticky-section h-screen w-full relative">
          <div className="h-full w-full bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <FAQ />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="sticky-section h-screen w-full relative">
          <div className="h-full w-full bg-gradient-to-br from-violet-50 to-purple-50">
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StickyScrollLayout;
