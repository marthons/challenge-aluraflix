import Banner from '../../componentes/Banner';
import './HomePage.css'

const HomePage = () => {

  return (
    <main>
      <Banner imagem="filme" />
    <div className="home-page">
      <h1>MarthonsFlix:</h1>
      <h2>Filmes Inventados, Emoções Verdadeiras</h2>
      <p>Seu Portal para Filmes que Nunca Existiram</p>
    </div>
    </main>
  );
};

export default HomePage;
