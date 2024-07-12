import React from 'react';
import Modal from '../Modal';
import useFilmesContext from '../useFilmesContext';
import FilmesPorCategoria from '../FilmesPorCategoria';
import './CardVideo.css';

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
        <main className='container'>
                <FilmesPorCategoria
                    filmes={filmes}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />

            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                    initialData={{ ...currentFilm, categorias: filmes.map(f => f.categoria) }}
                />
            )}
        </main>
    );
}

export default CardVideo;
