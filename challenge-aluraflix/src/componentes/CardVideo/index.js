import { useContext, useState } from "react";
import Video from "../Video";
import { FilmesContext } from "../FilmesContext";
import Modal from "../Modal";

const CardVideo = () => {
    const { filmes, setFilmes } = useContext(FilmesContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFilm, setCurrentFilm] = useState(null);

    const handleEdit = (index) => {
        setCurrentFilm({ ...filmes[index], index });
        setIsModalOpen(true);
    };

    const handleDelete = (index) => {
        const novosFilmes = filmes.filter((_, i) => i !== index);
        setFilmes(novosFilmes);
    };

    const handleSave = (updatedFilm) => {
        const updatedFilms = filmes.map((film, index) =>
            index === currentFilm.index ? updatedFilm : film
        );
        setFilmes(updatedFilms);
    };

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