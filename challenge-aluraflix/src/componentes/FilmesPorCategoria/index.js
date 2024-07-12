import React from 'react';
import Video from '../Video';

const FilmesPorCategoria = ({ filmes, handleEdit, handleDelete }) => {
  
  const filmesPorCategoria = filmes.reduce((acc, filme) => {
    if (!acc[filme.categoria]) {
      acc[filme.categoria] = [];
    }
    acc[filme.categoria].push(filme);
    return acc;
  }, {});

  return (
    <div className="filmes-por-categoria">
      {Object.keys(filmesPorCategoria).map((categoria) => (
        <div key={categoria} className="categoria-section">
          <h3 className="categoria-titulo">{categoria}</h3>
          <div className="categoria-filmes">
            {filmesPorCategoria[categoria].map((filme, index) => (
              <Video
                key={index}
                titulo={filme.titulo}
                video={filme.video}
                imagem={filme.imagem}
                categoria={filme.categoria}
                descricao={filme.descricao}
                onEdit={() => handleEdit(index)}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmesPorCategoria;
