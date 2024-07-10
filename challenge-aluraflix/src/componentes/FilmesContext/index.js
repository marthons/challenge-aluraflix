import React, { createContext, useState } from 'react';

const FilmesContext = createContext();

const FilmesProvider = ({ children }) => {
  const [filmes, setFilmes] = useState([]);

  return (
    <FilmesContext.Provider value={{ filmes, setFilmes }}>
      {children}
    </FilmesContext.Provider>
  );
};

export { FilmesContext, FilmesProvider };
