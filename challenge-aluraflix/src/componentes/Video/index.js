import Botao from '../Botao';
import './Video.css';

const Video = ({ titulo, video, imagem, categoria, descricao, onEdit, onDelete }) => {
    return (
        <div className='video'>
            <div className='video-content'>
                <div className='video-left'>
                    <iframe
                        src={`https://www.youtube.com/embed/${video}`}
                        title={titulo}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h4>{titulo}</h4>
                </div>
                <div className='video-right'>
                    <img src={imagem} alt={titulo} />
                    <div className='video-info'>
                        <h5>{categoria}</h5>
                        <p>{descricao}</p>
                    </div>
                    <div className='video-actions'>
                        <Botao onClick={onEdit}>Reeditar</Botao>
                        <Botao onClick={onDelete}>Deletar</Botao>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;