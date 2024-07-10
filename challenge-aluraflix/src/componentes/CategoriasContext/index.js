import React, { createContext, useContext } from 'react';


const CategoriasContext = createContext([]);


export const CategoriasProvider = ({ children }) => {
  const categorias = [
    'Ação',
    'Aventura',
    'Comédia',
    'Drama',
    'Ficção Científica',
    'Terror',
    'Romance',
    'Animação',
    'Documentário'
  ];

  return (
    <CategoriasContext.Provider value={categorias}>
      {children}
    </CategoriasContext.Provider>
  );
};


export const useCategorias = () => useContext(CategoriasContext);
