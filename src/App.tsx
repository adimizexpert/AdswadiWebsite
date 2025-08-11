import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/SEO.tsx';
import PerformanceOptimizer from './components/PerformanceOptimizer.tsx';
import Header from './components/Header.tsx';
import StickyScrollLayout from './components/StickyScrollLayout.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Global SEO Component */}
        <SEO pageType="home" />
        
        {/* Performance Optimizer Wrapper */}
        <PerformanceOptimizer
          preloadImages={[
            '/logos/logo.png',
            '/og-image.jpg',
            '/twitter-image.jpg'
          ]}
          preloadFonts={['Inter']}
          lazyLoadImages={true}
          enableIntersectionObserver={true}
        >
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<StickyScrollLayout />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </PerformanceOptimizer>
      </div>
    </Router>
  );
}

export default App;