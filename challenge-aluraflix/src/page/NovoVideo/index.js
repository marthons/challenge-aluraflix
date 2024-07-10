import { useContext } from 'react';
import Formulario from '../../componentes/Formulario';
import './NovoVideo.css';
import { FilmesContext } from '../../componentes/FilmesContext';
import CardVideo from '../../componentes/CardVideo';

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

const NovoVideo = () => {
  const { setFilmes } = useContext(FilmesContext); 

  const aoNovoFilmeAdicionado = (filme) => {
    setFilmes(prevFilmes => [...prevFilmes, filme]);
  }

  return (
    <main className='novo-video'>
      <Formulario 
        categorias={categorias.map(cat => cat.nome)}
        aoFilmeCadastrado={aoNovoFilmeAdicionado} 
      />
      <CardVideo />
    </main>
  );
};

export default NovoVideo;
