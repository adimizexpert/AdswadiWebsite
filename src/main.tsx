console.log('🚀 Starting Adswadi website...');

// Ultra-simple fallback that bypasses React entirely
function renderSimplePage() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('❌ Root element not found!');
    return;
  }

  console.log('✅ Root element found, rendering simple page...');
  
  rootElement.innerHTML = `
    <div style="
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif;
      color: white;
      text-align: center;
      padding: 20px;
    ">
      <div>
        <h1 style="font-size: 3rem; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
          🎉 Adswadi
        </h1>
        <p style="font-size: 1.5rem; margin-bottom: 2rem; opacity: 0.9;">
          Performance Marketing Agency
        </p>
        <div style="background: rgba(255,255,255,0.2); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
          <h2 style="font-size: 2rem; margin-bottom: 1rem;">
            Website is Working! 🚀
          </h2>
          <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">
            If you can see this message, the basic rendering is working correctly.
          </p>
          <button 
            onclick="alert('🎯 Website is functioning! This is a test alert.')"
            style="
              background: #3b82f6;
              color: white;
              border: none;
              padding: 15px 30px;
              font-size: 1.1rem;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            "
            onmouseover="this.style.transform='scale(1.05)'"
            onmouseout="this.style.transform='scale(1)'"
          >
            Test Button
          </button>
        </div>
        <div style="margin-top: 2rem; opacity: 0.7;">
          <p>📍 Mumbai, India | 📞 +91-8678830021</p>
          <p>Facebook Ads • Google Ads • Digital Marketing</p>
        </div>
      </div>
    </div>
  `;
  
  console.log('🎉 Simple page rendered successfully!');
}

// Try to render the simple page immediately
try {
  renderSimplePage();
} catch (error) {
  console.error('❌ Failed to render simple page:', error);
  
  // Last resort: show error message
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        padding: 50px;
        font-family: Arial, sans-serif;
        text-align: center;
        background: #fee2e2;
        border: 2px solid #ef4444;
        border-radius: 10px;
        margin: 20px;
      ">
        <h1 style="color: #dc2626;">🚨 Critical Error</h1>
        <p style="color: #991b1b; font-size: 18px;">
          The website encountered a critical error and cannot display properly.
        </p>
        <p style="color: #7f1d1d;">
          Error: ${error instanceof Error ? error.message : 'Unknown error'}
        </p>
        <button 
          onclick="window.location.reload()"
          style="
            background: #dc2626;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 20px;
          "
        >
          Reload Page
        </button>
      </div>
    `;
  }
}
