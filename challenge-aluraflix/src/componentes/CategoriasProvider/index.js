import React, { createContext, useContext } from 'react';


const CategoriasContext = createContext([]);


export const CategoriasProvider = ({ children }) => {
  const categorias = [
    { nome: 'Ação' },
    { nome: 'Aventura' },
    { nome: 'Comédia' },
    { nome: 'Drama' },
    { nome: 'Ficção Científica' },
    { nome: 'Terror' },
    { nome: 'Romance' },
    { nome: 'Animação' },
    { nome: 'Documentário' }
  ];

  return (
    <CategoriasContext.Provider value={categorias}>
      {children}
    </CategoriasContext.Provider>
  );
};


export const useCategorias = () => useContext(CategoriasContext);
