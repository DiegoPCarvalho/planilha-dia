import React from "react";
import { initialState } from '../config';
import MenuItem from "../comp/MenuItem";


export default class Tabela extends React.Component {
    state = { ...initialState }

    render() {
        return (
            <>
                <div className="row d-flex justify-content-between">
                    {localStorage.departamento === 'Limpeza Lab' ? (
                        <>
                            <div className="col-3">
                            <MenuItem nome="Formulário" h="4" i="fa-2x"
                                classe="fa fa-address-card fa-3x" />
                            </div>
                        </>
                    ) :
                    (
                        <>
                            <div className="col-3 d-flex flex-column justify-content-between">
                                <MenuItem nome="Fila Técnica" h="4" i="fa-2x"
                                    classe="fa fa-list-alt fa-3x" />
                                <MenuItem nome="Formulário" h="4" i="fa-2x"
                                    classe="fa fa-address-card fa-3x" />
                            </div>
                        </>
                    )}
                    <div className="col-3 d-flex justify-content-end">
                        <MenuItem direita nome="Reg. Antigo" h="4" i="fa-2x"
                            classe="fa fa-database fa-3x"/>
                    </div>
                </div>
            </>
        )
    }
}