import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';

const Formulario = (props) => {
    const [titulo, setTitulo] = useState('');
    const [video, setVideo] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
  
    const aoSalvar = (evento) => {
      evento.preventDefault();
      props.aoFilmeCadastrado({
        titulo,
        video,
        imagem,
        categoria,
        descricao
      });
      limparFormulario();
    }
  
    const limparFormulario = () => {
      setTitulo('');
      setVideo('');
      setImagem('');
      setCategoria('');
      setDescricao('');
    }
  
    return (
      <div className='formulario-envio'>
          <h3>Criar Card</h3>
        <form className='form-group' onSubmit={aoSalvar}>
          <CampoTexto
            label="Título"
            placeholder="Digite seu título"
            valor={titulo}
            aoAlterado={setTitulo} 
          />
          <CampoTexto
            label="Vídeo"
            placeholder="Digite seu vídeo"
            valor={video}
            aoAlterado={setVideo}
          />
          <CampoTexto
            label="Imagem"
            placeholder="Informe o endereço da imagem"
            valor={imagem}
            aoAlterado={setImagem}
          />
          <ListaSuspensa
            label="Categoria"
            itens={props.categorias}
            valor={categoria}
            aoAlterado={setCategoria}
          />
          <div className="descricao">
            <CampoTexto
              label="Descrição"
              placeholder="Descreva seu vídeo aqui"
              valor={descricao}
              aoAlterado={setDescricao}
            />
          </div>
          <div className="form-actions">
            <Botao type="submit">Guardar</Botao>
            <Botao type="button" onClick={limparFormulario}>Limpar</Botao>
          </div>
        </form>
      </div>
    );
  }
  
  export default Formulario;
