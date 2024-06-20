import React from "react";
import { initialState } from '../config';
import MenuItem from "../comp/MenuItem";


export default class RegistroAntigo extends React.Component {
    state = { ...initialState }

    render() {
        return (
            <>
                <div className="row">
                    {localStorage.departamento === "Limpeza Lab" ? (
                        <>
                            <div className="col-3">
                                <MenuItem nome="Formulário" h="5"
                                    classe="fa fa-address-card fa-2x"/>
                                <MenuItem nome="Tabela" h="5"
                                    classe="fa fa-table fa-2x"/>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-3">
                                <MenuItem  nome="Fila Técnica" h="5" 
                                    classe="fa fa-list-alt fa-2x"/>
                                <MenuItem nome="Formulário" h="5"
                                    classe="fa fa-address-card fa-2x"/>
                                <MenuItem nome="Tabela" h="5"
                                    classe="fa fa-table fa-2x"/>
                            </div>
                        </>
                    )}
                </div>
            </>
        )
    }
}