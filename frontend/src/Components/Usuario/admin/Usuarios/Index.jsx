import React, { useEffect } from "react";
import FormUserAdmin from "./FormUserAdmin";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import Tabela from "./TableUserAdmin";
import { pagination } from "../../functions/estrutura";


export default function Usuario() {
    const { buscarDepar, buscarAdmin, tab, setTab} = UsePerfilData()

    useEffect(() => {
        setTab('tb_admin')
        buscarDepar()
        busca()
    }, [])

    async function busca() {
        await buscarAdmin("LoginUsuario")
        setTimeout(() => {
            pagination(tab)
            setTab('')
        }, 100)
    }

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3">
                    <i className="fa fa-user-plus fa-4x"></i>
                </div>
            </div>
            <div className="row mt-3">
                <FormUserAdmin />
            </div>
            <div className="row mt-5">
                 <Tabela />
            </div>
        </div>
    )
}