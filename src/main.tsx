
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './theme-enhancements'
// scroll-animations.js intentionally left disabled for performance

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
