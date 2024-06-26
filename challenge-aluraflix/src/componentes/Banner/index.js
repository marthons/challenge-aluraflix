import './Banner.css'; 

const Banner = ({ imageUrl }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>Vídeo em Destaque</h1>
    </div>
  );
};

export default Banner;
