import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './router';
import { FilmesProvider } from './componentes/FilmesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <FilmesProvider>
      <AppRoutes />
    </FilmesProvider>
  </React.StrictMode>
);
