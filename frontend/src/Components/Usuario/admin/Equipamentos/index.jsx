import React, { useEffect } from "react";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import { pagination } from "../../functions/estrutura";
import TabelaEquip from "./TabelaEquip";
import FormGnc from "../../components/FormGnc";

export default function Equipamentos(){
    const { buscarAdmin, tab, setTab, gnc} = UsePerfilData()

    useEffect(() => {
        setTab('tb_admin')
        busca()
    }, [])

    async function busca() {
        await buscarAdmin("Equipamento")
        setTimeout(() => {
            pagination(tab)
            setTab('')
        }, 100)
    }
    
    return(
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3">
                    <i className="fa fa-gamepad fa-4x"></i>
                </div>
            </div>
            <div className="row mt-3">
                <FormGnc mod={gnc} banco="Equipamento" />
            </div>
            <div className="row mt-5">
                <TabelaEquip />
            </div>
        </div>
    )
}