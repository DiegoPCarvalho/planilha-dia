import React, { useEffect } from "react";
import MenuItem from "../comp/MenuItem";
import CardForm from '../../Card/CardForm';
import UseAppData from "../../../data/hook/UseAppData";
import Campos from "./Campos";
import SupGif from '../../../Assets/gifs/carregar.gif';

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

export default function Formulario(props) {
    const { mudarTela, del, setDel, BuscaFormulario, buscarDadosCosmos, carregando } = UseAppData();

    useEffect(() => {
        if (del) {
            mudarTela('table')
            setDel(false)
        }
        BuscaFormulario()
    }, [])

    return (
        <>
            <div className="row">
                {localStorage.departamento === 'Limpeza Lab' ? (
                    <>
                        <div className="col-3 d-flex justify-content-start">
                            <i className="fa fa-address-card fa-4x"></i>
                        </div>
                        {carregando ? (
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img src={SupGif} alt="" style={estilo} />
                                <span className="fw-bold mx-2 h3">Carregando</span>
                            </div>
                        ) : (
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <div onClick={() => buscarDadosCosmos()} style={{ cursor: 'pointer' }}>
                                    <CardForm nomeTitulo="Ultima OS" icone="steam"
                                        dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                                </div>
                            </div>
                        )}
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
                        {carregando ? (
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img src={SupGif} alt="" style={estilo} />
                                <span className="fw-bold mx-2 h3">Carregando</span>
                            </div>
                        ) : (
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <div onClick={() => buscarDadosCosmos()} style={{ cursor: 'pointer' }}>
                                    <CardForm nomeTitulo="Ultima OS" icone="steam"
                                        dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                                </div>
                            </div>
                        )}
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
            <div className="row mt-4">
                <Campos />
            </div>
        </>
    )
}