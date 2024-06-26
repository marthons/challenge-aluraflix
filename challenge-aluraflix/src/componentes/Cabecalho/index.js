import { Link } from 'react-router-dom';
import  './Cabecalho.css';

const Cabecalho = () => {
  return (
    <header className="header">
      <div className="logo">MarthonsFlix</div>
      <nav>
        <Link to="/">Página Inicial</Link>
        <Link to="/new-video">Novo Vídeo</Link>
      </nav>
    </header>
  );
};

export default Cabecalho;