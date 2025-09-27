import React from 'react';
import ReactDOM from 'react-dom/client';
import SidePanelApp from './SidePanelApp';
import '../styles/globals.css';
import '../styles/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SidePanelApp />
  </React.StrictMode>
);