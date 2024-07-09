import './Banner.css';
import foto from '../Banner/banner-cinema.jpg'
const Banner = ({ imagem }) => {
  return (
    <main className="banner"
      style={{ backgroundImage: `url('/imagens/banner-${imagem}.jpg')` }}>
      <div className='banner-div'>
        <div className='banner-titulo'>
          <section>
            <h1>Ficção-Cientifica</h1>
          </section>
          <section className='banner-sub-titulo'>
            <h3>Titulo de um filme</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum accusamus inventore voluptas eum itaque sit, nulla soluta provident corporis illo, earum ipsa a quas rerum, vero est illum vitae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente laudantium culpa ad dolorum nobis commodi aperiam atque temporibus dignissimos! Totam eligendi omnis hic labore veniam sed, nesciunt beatae dignissimos eius? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt consequuntur excepturi ducimus atque maxime laborum ad quibusdam cumque tempora voluptas nostrum reiciendis dignissimos officiis dolorum omnis, culpa beatae amet esse!</p>
          </section>
        </div>
        <section className='banner-imagem'>
          <img src={foto} alt="" />
        </section>

      </div>
    </main>
  );
};

export default Banner;


