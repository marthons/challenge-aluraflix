import './Video.css';

const Video = ({ titulo, video, imagem, categoria, descricao, onEdit, onDelete }) => {
    return (
        <div className='video'>
            <div className='video-content'>
                <div className='video-left'>
                    <iframe
                        src={video}
                        title={titulo}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h3>{titulo}</h3>
                </div>
                <div className='video-right'>
                    <img src={imagem} alt={titulo} />
                    <div className='video-info'>
                        <h5>{categoria}</h5>
                        <p>{descricao}</p>
                    </div>
                    <div className='video-actions'>
                        <button onClick={onEdit}>Reeditar</button>
                        <button onClick={onDelete}>Deletar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
