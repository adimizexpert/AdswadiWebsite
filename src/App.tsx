import React from 'react';
import Header from './components/Header.tsx';
import StickyScrollLayout from './components/StickyScrollLayout.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <StickyScrollLayout />
      </main>
      <Footer />
    </div>
  );
}

export default App;