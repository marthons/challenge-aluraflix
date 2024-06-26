import React from 'react';
import './Secao.css'

const Secao = ({ title, videos }) => {
  return (
    <section className="category-section">
      <h2>{title}</h2>
      <div className="videos">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Secao;
