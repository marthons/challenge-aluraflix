import { useContext } from 'react';
import Formulario from '../../componentes/Formulario';
import './NovoVideo.css';
import { FilmesContext } from '../../componentes/FilmesContext';
import CardVideo from '../../componentes/CardVideo';
import { useCategorias } from '../../componentes/CategoriasContext';



const NovoVideo = () => {
  const { setFilmes } = useContext(FilmesContext);

  const categorias = useCategorias();

  const aoNovoFilmeAdicionado = (filme) => {
    setFilmes(prevFilmes => [...prevFilmes, filme]);
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
