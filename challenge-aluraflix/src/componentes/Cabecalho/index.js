import { Link } from 'react-router-dom';
import './Cabecalho.css';

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div className='logo'>MarthonsFlix</div>
      <div className='navegação'>
        <nav >
          <Link className='link' to="/">Página Inicial</Link>
          <Link className='link' to="/novo-video">Novo Vídeo</Link>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;