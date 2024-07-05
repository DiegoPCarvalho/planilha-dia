import React, { useEffect } from "react";
import MenuItem from "../comp/MenuItem";
import TabelaGnc from "../comp/TabelaGenerica";
import Cabecalho from "./Cabecalho";
import Linhas from "./Linhas";
import $ from 'jquery';
import UseAppData from "../../../data/hook/UseAppData";

export default function Tabela(props) {

    const { list, tab, setTab, buscarGeralTabela } = UseAppData()

    useEffect(() => {
        buscar()
    }, [])

    function pagination() {
        setTimeout(() => {
            $('#tabela').DataTable({
                language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
            });
            setTab('')
        }, 100)
    }

    async function buscar() {
        await buscarGeralTabela()
        pagination()
    }

    function Main() {
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
                                    <MenuItem nome="Fila Técnica" h="5" i="fa-2x"
                                        classe="fa fa-list-alt fa-3x"
                                        mudar={props.fila}
                                    />
                                    <MenuItem nome="Formulário" h="5" i="fa-2x"
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
                <div className="row mt-4">
                    <TabelaGnc
                        head={<Cabecalho />}
                        tb='table-striped table-hover'
                        dados={list.length}
                        id={`${tab}`}
                    >
                        <Linhas
                            list={list}
                        />
                    </TabelaGnc>
                </div >
            </>
        )
    }

    return Main()
}
