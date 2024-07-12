import { useContext, useState } from 'react';
import { FilmesContext } from '../FilmesContext';

const useFilmesContext = () => {
  const { filmes, setFilmes } = useContext(FilmesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFilm, setCurrentFilm] = useState(null);

  const handleEdit = (index) => {
    setCurrentFilm({ ...filmes[index], index });
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const novosFilmes = filmes.filter((_, i) => i !== index);
    setFilmes(novosFilmes);
  };

  const handleSave = (updatedFilm) => {
    const updatedFilms = filmes.map((film, index) =>
      index === currentFilm.index ? updatedFilm : film
    );
    setFilmes(updatedFilms);
    setIsModalOpen(false);
  };

  return {
    filmes,
    setFilmes,
    isModalOpen,
    currentFilm,
    handleEdit,
    handleDelete,
    handleSave,
    setIsModalOpen,
  };
};

export default useFilmesContext;
