const Video = ({ titulo, video, imagem, categoria, descricao }) => {
    return (
        <div className='video'>
            <div className='cabecalho'>
                <img src={imagem} alt={titulo} />
            </div>
            <div className='rodape'>
                <h4>{titulo}</h4>
                <h5>{categoria}</h5>
                <p>{descricao}</p>
                <video controls>
                    <source src={video} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
            </div>
        </div>
    )
}

export default Video;
