import React from "react";
import TabelaGnc from "../../components/TabelaGnc";
import Cabecalho from "../../components/Cabecalho";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import Lista from "../../components/Lista";

export default function TabelaLDC(){

    const { dadosAdmin, tab } = UsePerfilData()

    return(
        <TabelaGnc tb="table-striped" id={tab}
            head={<Cabecalho ldc/>}
        >
            <Lista list={dadosAdmin === undefined ? [] : dadosAdmin} banco="LDC" ldc />
        </TabelaGnc>
    )
}