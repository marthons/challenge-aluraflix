import './Rodape.css';
import logo from '../../assets/logo.jpg';
import corporation from '../../assets/corporation.png';

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="text">
        <img src={corporation} alt="logo comporação" className='logo-text' />
        <p className='text-texto'>Desenvolvido por Marthons & Alura</p>
      </div>
      <div className='logo-container'>
        <img src={logo} alt="logo marthons" className='logo' />
      </div>
    </footer>
  );
};

export default Rodape;