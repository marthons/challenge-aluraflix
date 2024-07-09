import { useState } from 'react';
import Formulario from '../../componentes/Formulario';
import './NovoVideo.css';
import Video from '../../componentes/Video';

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
  const [filmes, setFilmes] = useState([]);

  const aoNovoFilmeAdicionado = (filme) => {
    setFilmes([...filmes, filme]);
  }

  return (
    <main className='novo-video'>
      <Formulario 
        categorias={categorias.map(cat => cat.nome)}
        aoFilmeCadastrado={filme => aoNovoFilmeAdicionado(filme)} 
      />
       <div className='lista-de-videos'>
        {filmes.map((filme, index) => (
          <Video
            key={index}
            titulo={filme.titulo}
            video={filme.video}
            imagem={filme.imagem}
            categoria={filme.categoria}
            descricao={filme.descricao}
          />
        ))}
      </div>
    </main>
  );
};

export default NovoVideo;
