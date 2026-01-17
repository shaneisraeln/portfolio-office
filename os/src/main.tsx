import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Bubble events to parent for iframe integration
document.addEventListener('mousemove', (e) => {
  window.parent.postMessage({ type: 'mousemove', clientX: e.clientX, clientY: e.clientY }, '*');
});

// Allow scrolling within the iframe - don't bubble scroll events to parent
document.addEventListener('wheel', (e) => {
  // Let the scroll happen naturally within the iframe
  // Don't prevent default or bubble to parent
}, { passive: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
