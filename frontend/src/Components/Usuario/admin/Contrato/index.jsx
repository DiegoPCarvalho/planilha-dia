import React, { useEffect } from "react";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import { pagination } from "../../functions/estrutura";
import TabelaContrato from "./TabelaContrato";
import FormGnc from "../../components/FormGnc";

export default function Contrato(){

    const { buscarAdmin, tab, setTab, gnc} = UsePerfilData()

    useEffect(() => {
        setTab('tb_admin')
        busca()
    }, [])

    async function busca() {
        await buscarAdmin("Contrato")
        setTimeout(() => {
            pagination(tab)
            setTab('')
        }, 100)
    }
    
    return(
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3">
                    <i className="fa fa-file-pdf-o fa-4x"></i>
                </div>
            </div>
            <div className="row mt-3">
                <FormGnc mod={gnc} banco="Contrato" />
            </div>
            <div className="row mt-5">
                <TabelaContrato />
            </div>
        </div>
    )
}