import React, { useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import Banner from '../../componentes/Banner';
import useFilmesContext from '../../componentes/useFilmesContext';
import Modal from '../../componentes/Modal';
import FilmesPorCategoria from '../../componentes/FilmesPorCategoria';

const Home = () => {
  const {
    filmes,
    setFilmes,
    isModalOpen,
    currentFilm,
    handleSave,
    setIsModalOpen,
    handleEdit,
    handleDelete,
  } = useFilmesContext();

  useEffect(() => {
    axios.get('http://localhost:3001/filmes')
      .then(response => {
        setFilmes(response.data);
      })
      .catch(error => {
        console.error("Houve um erro ao buscar os filmes: ", error);
      });
  }, [setFilmes]);

  return (
    <>
      <Banner imagem="filme" />
      <div className="home-page">
        <h1>MarthonsFlix:</h1>
        <h2>Filmes Inventados, Emoções Verdadeiras</h2>
        <p>Seu Portal para Filmes que Nunca Existiram</p>

        <FilmesPorCategoria
          filmes={filmes}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          initialData={{ ...currentFilm, categorias: filmes.map(f => f.categoria) }}
        />
      )}
    </>
  );
}

export default Home;
