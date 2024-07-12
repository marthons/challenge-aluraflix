import React, { useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import Banner from '../../componentes/Banner';
import Botao from '../../componentes/Botao';
import CardVideo from '../../componentes/CardVideo';
import useFilmesContext from '../../componentes/useFilmesContext';
import Modal from '../../componentes/Modal';

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
        <CardVideo />
        <div className="filmes-container">
          {filmes.map((filme, index) => (
            <div className='video' key={filme.id}>
              <div className='video-content'>
                <div className='video-left'>
                  <iframe
                    src={`https://www.youtube.com/embed/${filme.video}`}
                    title={filme.titulo}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h4>{filme.titulo}</h4>
                </div>
                <div className='video-right'>
                  <img src={filme.imagem} alt={filme.titulo} />
                  <div className='video-info'>
                    <h5>{filme.categoria}</h5>
                    <p>{filme.descricao}</p>
                  </div>
                  <div className='video-actions'>
                    <Botao onClick={() => handleEdit(index)}>Reeditar</Botao>
                    <Botao onClick={() => handleDelete(index)}>Deletar</Botao>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {isModalOpen && (
          <Modal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
            initialData={{ ...currentFilm, categorias: filmes.map(f => f.categoria) }}
          />
        )}
      </div>
    </>
  );
}

export default Home;
