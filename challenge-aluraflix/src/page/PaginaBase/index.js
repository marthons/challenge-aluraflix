import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
                <Outlet />
            <Rodape />
        </main>
    )
}

export default PaginaBase;