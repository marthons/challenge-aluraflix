import './Botao.css';

const Botao = (props) => {
  return (
    <button className='botao' type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Botao;
