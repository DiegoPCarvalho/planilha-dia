import React, { useEffect } from "react";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import { pagination } from "../../functions/estrutura";
import TabelaServico from "./TabelaServico";
import FormGnc from "../../components/FormGnc";

export default function Servico(){
    const { buscarAdmin, tab, setTab, gnc} = UsePerfilData()

    useEffect(() => {
        setTab('tb_admin')
        busca()
    }, [])

    async function busca() {
        await buscarAdmin("Servico")
        setTimeout(() => {
            pagination(tab)
            setTab('')
        }, 100)
    }
    
    return(
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3">
                    <i className="fa fa-gear fa-4x"></i>
                </div>
            </div>
            <div className="row mt-3">
                <FormGnc mod={gnc} banco="Servico" />
            </div>
            <div className="row mt-5">
                <TabelaServico />
            </div>
        </div>
    )
}