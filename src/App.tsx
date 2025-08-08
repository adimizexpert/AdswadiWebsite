import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import StickyScrollLayout from './components/StickyScrollLayout.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<StickyScrollLayout />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;