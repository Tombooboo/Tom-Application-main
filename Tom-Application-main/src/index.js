import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
