import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import './index.css';

console.log('🚀 Starting Adswadi website...');

try {
  const rootElement = document.getElementById('root');
  console.log('📍 Root element found:', rootElement);
  
  if (!rootElement) {
    throw new Error('Root element not found!');
  }

  const root = createRoot(rootElement);
  console.log('✅ React root created successfully');
  
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <App />
          <Analytics />
          <SpeedInsights />
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  );
  
  console.log('🎉 React app rendered successfully');
} catch (error) {
  console.error('❌ Failed to render React app:', error);
  
  // Fallback: Show error message on page
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <h1>🚨 Website Error</h1>
        <p>We're experiencing technical difficulties. Please try refreshing the page.</p>
        <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
}
