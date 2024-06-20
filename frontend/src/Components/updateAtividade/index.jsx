import React from "react";
import { initialState } from './config';
import FilaTecnica from './FilaTecnica/FilaTecnica';
import Formulario from './Form/Formulario';
import Tabela from './Table/Tabela';
import RegistroAntigo from './RegAntrigo/RegistroAntigo';



export default class IndexHomeAtividade extends React.Component {
    state = {...initialState }

    render() {
        return(
            <div>
                <RegistroAntigo />
            </div>
        )
    }
}