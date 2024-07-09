import Video from './Video';

const ListaDeVideos = ({ videos }) => {
    return (
        <div className='lista-de-videos'>
            {videos.map((video, index) => (
                <Video
                    key={index}
                    titulo={video.titulo}
                    video={video.video}
                    imagem={video.imagem}
                    categoria={video.categoria}
                    descricao={video.descricao}
                />
            ))}
        </div>
    );
}

export default ListaDeVideos;
