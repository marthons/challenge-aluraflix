import "./Modal.css"
import Botao from '../Botao';
import { useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { useCategorias } from '../../componentes/CategoriasContext';


const Modal = ({ isOpen, onClose, onSave, initialData }) => {
    const [titulo, setTitulo] = useState(initialData.titulo || '');
    const [categoria, setCategoria] = useState(initialData.categoria || '');
    const [imagem, setImagem] = useState(initialData.imagem || '');
    const [video, setVideo] = useState(initialData.video || '');
    const [descricao, setDescricao] = useState(initialData.descricao || '');
    const categorias = useCategorias();

    const handleSave = () => {
        onSave({
            titulo,
            categoria,
            imagem,
            video,
            descricao
        });
        onClose();
    };

    const handleClear = () => {
        setTitulo('');
        setCategoria('');
        setImagem('');
        setVideo('');
        setDescricao('');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Editar Card</h3>
                <Botao className="modal-close" onClick={onClose}>X</Botao>

                <CampoTexto
                    label="Título"
                    placeholder="Digite seu título"
                    valor={titulo}
                    aoAlterado={setTitulo}
                />
                <ListaSuspensa
                    label="Categoria"
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={setCategoria}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={setImagem}
                />
                <CampoTexto
                    label="Vídeo"
                    placeholder="Digite a URL do vídeo"
                    valor={video}
                    aoAlterado={setVideo}
                />
                <CampoTexto
                    label="Descrição"
                    placeholder="Descreva seu vídeo aqui"
                    valor={descricao}
                    aoAlterado={setDescricao}
                />
                <div className="form-actions">
                    <Botao type="button" onClick={handleSave}>Salvar</Botao>
                    <Botao type="button" onClick={handleClear}>Limpar</Botao>
                </div>
            </div>
        </div>

    );
};

export default Modal;
