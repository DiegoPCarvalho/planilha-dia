import React from "react";
import Logo from '../../../Assets/Imgs/logoZhaz.png';
import { BuscarFoto } from '../../Dashboard/DashboardModel/Foto/FotoTecnico';
import CardUserPerfil from "./CardUserPerfil";


export default function User() {

    return (
        <div className="container-fluid overflow-auto">
            <div className="row d-flex justify-content-between mb-3">
                <div className="col-6">
                    <img src={Logo} alt="" />
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <img src={BuscarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" />
                </div>
            </div>
            <div className="d-flex d-flex justify-content-center mb-3">
                <div className="col-12  d-flex justify-content-center  text-light">
                    <p className="display-2 rounded fw-bold bg-success p-2">Usuário</p>
                </div>
            </div>

            <div className="row d-flex justify-content-center row-cols-auto">
                <CardUserPerfil />
            </div>
        </div>
    )
}