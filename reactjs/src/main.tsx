import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProSidebarProvider>
      <App />
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
