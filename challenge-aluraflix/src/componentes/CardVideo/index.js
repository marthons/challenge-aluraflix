import Video from "../Video";
import Modal from "../Modal";
import useFilmesContext from "../useFilmesContext";

const CardVideo = () => {
    const {
        filmes,
        isModalOpen,
        currentFilm,
        handleEdit,
        handleDelete,
        handleSave,
        setIsModalOpen,
      } = useFilmesContext();
    
      return (
        <>
          <div className='lista-de-videos'>
            {filmes.map((filme, index) => (
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
    
export default CardVideo;