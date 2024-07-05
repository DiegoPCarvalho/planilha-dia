import React, { useEffect } from "react";
import MenuItem from "../comp/MenuItem";
import CardForm from '../../Card/CardForm';
import UseAppData from "../../../data/hook/UseAppData";

export default function Formulario(props){
    const { mudarTela, carregando, setCarregando, setTab, setMudar } = UseAppData();

    useEffect(() => {
        if(carregando){
            mudarTela('table')
            setCarregando(false)
        }
    },[])

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
                                    mudar={props.table}
                                />
                                <MenuItem direita nome="Reg. Antiga" h="4" i="fa-2x"
                                    classe="fa fa-database fa-3x"
                                    mudar={props.old}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-3 d-flex justify-content-start">
                                <MenuItem
                                    nome="Fila Técnica" h="4" i="fa-2x"
                                    classe="fa fa-list-alt fa-4x"
                                    mudar={props.fila}
                                />
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <CardForm nomeTitulo="Ultima OS" icone="steam"
                                    dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                            </div>
                            <div className="col-3 d-flex flex-column align-items-end justify-content-between">
                                <MenuItem direita nome="Tablela" h="4" i="fa-2x"
                                    classe="fa fa-table fa-3x"
                                    mudar={props.table}
                                />
                                <MenuItem direita nome="Reg. Antiga" h="4" i="fa-2x"
                                    classe="fa fa-database fa-3x"
                                    mudar={props.old}
                                />  
                            </div>
                        </>
                    )}
                </div>
            </>
        )
}