import { useContext } from 'react';
import Formulario from '../../componentes/Formulario';
import './NovoVideo.css';
import { FilmesContext } from '../../componentes/FilmesContext';
import CardVideo from '../../componentes/CardVideo';
import { useCategorias } from '../../componentes/CategoriasContext';
import axios from 'axios';



const NovoVideo = () => {
  const { setFilmes } = useContext(FilmesContext);

  const categorias = useCategorias();

  const aoNovoFilmeAdicionado = (filme) => {
    axios.post('http://localhost:3001/filmes', filme)
      .then(response => {
        setFilmes(prevFilmes => [...prevFilmes, response.data]);
      })
      .catch(error => {
        console.error("Houve um erro ao adicionar o filme: ", error);
      });
  }

  return (
    <main className='novo-video'>
      <Formulario
        categorias={categorias}
        aoFilmeCadastrado={aoNovoFilmeAdicionado}
      />
      <CardVideo />
    </main>
  );
};

export default NovoVideo;
