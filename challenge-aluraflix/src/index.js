import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './router';
import { FilmesProvider } from './componentes/FilmesContext';
import { CategoriasProvider } from './componentes/CategoriasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilmesProvider>
      <CategoriasProvider>
        <AppRoutes />
      </CategoriasProvider>
    </FilmesProvider>
  </React.StrictMode>
);
