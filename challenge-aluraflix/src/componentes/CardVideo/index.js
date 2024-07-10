import { useContext } from "react";
import Video from "../Video";
import { FilmesContext } from "../FilmesContext";

const CardVideo = () => {

    const { filmes, setFilmes } = useContext(FilmesContext);

    const handleDelete = (index) => {
        const novosFilmes = filmes.filter((_, i) => i !== index);
        setFilmes(novosFilmes);
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
                        // onEdit={() => handleEdit(index)}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </div>
        </>
    )
}

export default CardVideo;