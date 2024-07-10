import { useContext } from 'react';
import Banner from '../../componentes/Banner';
import CardVideo from '../../componentes/CardVideo';
import { FilmesContext } from '../../componentes/FilmesContext';
import './HomePage.css'

const HomePage = () => {
  const { filmes } = useContext(FilmesContext);

  return (
    <main>
      <Banner imagem="filme" />
    <div className="home-page">
      <h1>MarthonsFlix:</h1>
      <h2>Filmes Inventados, Emoções Verdadeiras</h2>
      <p>Seu Portal para Filmes que Nunca Existiram</p>
    </div>
    <CardVideo filmes={filmes} />
    </main>
  );
};

export default HomePage;
