import React, { useEffect } from "react";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import { pagination } from "../../functions/estrutura";
import TabelaLDC from "./TabelaLdc";
import FormLdc from "./FormLdc";

export default function LDC(){

    const { buscarAdmin, tab, setTab, buscarLdc } = UsePerfilData()

    useEffect(() => {
        setTab('tb_admin')
        buscarLdc()
        busca()
    }, [])

    async function busca() {
        await buscarAdmin("LDC")
        setTimeout(() => {
            pagination(tab)
            setTab('')
        }, 100)
    }
    
    return(
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3">
                    <i className="fa fa-handshake-o fa-4x"></i>
                </div>
            </div>
            <div className="row mt-3">
                <FormLdc />
            </div>
            <div className="row mt-5">
                <TabelaLDC />
            </div>
        </div>
    )
}