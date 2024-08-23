import React from "react";
import TabelaGnc from "../../components/TabelaGnc";
import Cabecalho from "../../components/Cabecalho";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import Lista from "../../components/Lista";

export default function Tabela(){

    const { dadosAdmin, tab } = UsePerfilData()

    return(
        <TabelaGnc tb="table-striped" id={tab}
            head={<Cabecalho userAdmin/>}
        >
            <Lista list={dadosAdmin === undefined ? [] : dadosAdmin} userAdmin banco="LoginUsuario" />
        </TabelaGnc>
    )
}