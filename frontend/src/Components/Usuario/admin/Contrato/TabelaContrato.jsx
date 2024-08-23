import React from "react";
import TabelaGnc from "../../components/TabelaGnc";
import Cabecalho from "../../components/Cabecalho";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import Lista from "../../components/Lista";

export default function TabelaContrato(){

    const { dadosAdmin, tab } = UsePerfilData()

    return(
        <TabelaGnc tb="table-striped" id={tab}
            head={<Cabecalho/>}
        >
            <Lista list={dadosAdmin === undefined ? [] : dadosAdmin} banco="Contrato" />
        </TabelaGnc>
    )
}