import React from "react";
import { initialState } from '../config';
import MenuItem from "../comp/MenuItem";
import CardForm from '../../Card/CardForm';


export default class Formulario extends React.Component {
    state = { ...initialState }

    render() {
        return (
            <>
                <div className="row">
                    {localStorage.departamento === 'Limpeza Lab' ? (
                        <>
                            <div className="col-3 d-flex justify-content-start">
                                <i className="fa fa-address-card fa-4x"></i>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <CardForm nomeTitulo="Ultima OS" icone="steam"
                                    dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                            </div>
                            <div className="col-3 d-flex flex-column align-items-end justify-content-between">
                                <MenuItem direita nome="Tablela" h="4" i="fa-2x"
                                    classe="fa fa-table fa-3x"

                                />
                                <MenuItem direita nome="Reg. Antiga" h="4" i="fa-2x"
                                    classe="fa fa-database fa-3x"

                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-3 d-flex justify-content-start">
                                <MenuItem
                                    nome="Fila Técnica" h="4" i="fa-2x"
                                    classe="fa fa-list-alt fa-4x"

                                />
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <CardForm nomeTitulo="Ultima OS" icone="steam"
                                    dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                            </div>
                            <div className="col-3 d-flex flex-column align-items-end justify-content-between">
                                <MenuItem direita nome="Tablela" h="4" i="fa-2x"
                                    classe="fa fa-table fa-3x"

                                />
                                <MenuItem direita nome="Reg. Antiga" h="4" i="fa-2x"
                                    classe="fa fa-database fa-3x"

                                />
                            </div>
                        </>
                    )}
                </div>
            </>
        )
    }
}