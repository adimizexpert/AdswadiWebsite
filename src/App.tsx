import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner.tsx';

// Temporary simplified App component for debugging
function App() {
  console.log('🔧 App component rendering...');
  
  return (
    <Router>
      <div className="App">
        <h1 style={{ textAlign: 'center', padding: '50px', color: '#3b82f6' }}>
          🎉 Adswadi Website is Working!
        </h1>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          If you can see this message, the React app is rendering successfully.
        </p>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button 
            onClick={() => alert('Website is working!')}
            style={{
              padding: '15px 30px',
              fontSize: '16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Test Button
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;