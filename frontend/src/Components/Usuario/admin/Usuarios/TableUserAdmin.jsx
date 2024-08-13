import React from "react";
import TabelaGnc from "../../components/TabelaGnc";
import Cabecalho from "../../components/Cabecalho";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import Lista from "../../components/Lista";

export default function Tabela(){

    const { dadosAdmin } = UsePerfilData()

    return(
        <TabelaGnc tb="table-striped" id="tb-user"
            head={<Cabecalho userAdmin/>}
        >
            <Lista list={dadosAdmin === undefined ? [] : dadosAdmin} userAdmin />
        </TabelaGnc>
    )
}