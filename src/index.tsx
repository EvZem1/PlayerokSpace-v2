import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind directives injected via PostCSS but good practice to have logic ready

// We don't actually need index.css file content because we used CDN in index.html for this demo 
// AND configured postcss to process it if we were building locally.
// For the sake of this prompt's constraints, we rely on the logic that Tailwind is active.

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);