import React from "react";
import { initialState } from '../config';
import MenuItem from "../comp/MenuItem";
import TabelaGnc from "../comp/TabelaGenerica";


export default function Tabela(props) {


    function HeadTable(){
        return(
            <>
                <td>Id</td>
                <td>Data</td>
                <td>OS</td>
                <td>Cliente</td>
                <td>Equipamento</td>
                <td>Modelo</td>
                <td>NS</td>
                <td>Serviço</td>
                <td>Ações</td>
            </>
        )
    }

    return (
        <>
            <div className="row d-flex justify-content-between">
                {localStorage.departamento === 'Limpeza Lab' ? (
                    <>
                        <div className="col-3">
                            <MenuItem nome="Formulário" h="4" i="fa-2x"
                                classe="fa fa-address-card fa-3x"
                                mudar={props.form}
                            />
                        </div>
                    </>
                ) :
                    (
                        <>
                            <div className="col-3 d-flex flex-column justify-content-between">
                                <MenuItem nome="Fila Técnica" h="5"
                                    classe="fa fa-list-alt fa-3x"
                                    mudar={props.fila}
                                />
                                <MenuItem nome="Formulário" h="5"
                                    classe="fa fa-address-card fa-3x"
                                    mudar={props.form}
                                />
                            </div>
                        </>
                    )}
                <div className="col-3 d-flex justify-content-end">
                    <MenuItem direita nome="Reg. Antigo" h="4" i="fa-2x"
                        classe="fa fa-database fa-3x"
                        mudar={props.old}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <TabelaGnc
                    head={HeadTable()}
                    tb='table-striped table-hover'
                >
                    
                </TabelaGnc>
            </div>
        </>
    )
}