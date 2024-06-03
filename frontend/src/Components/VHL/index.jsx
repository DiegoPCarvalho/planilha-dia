import React from "react";
import Main from "../Template/Main";
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../Assets/Imgs/logoZhaz.png';

import { BuscarFoto } from '../Dashboard/DashboardModel/Foto/FotoTecnico';

const headerProps = {
    icon: 'cart-plus',
    title: 'VHL'
}

export default function IndexVhl(){
    return (
        <Main {...headerProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/VHL"><img src={Logo} alt="" /></Link>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <Link to="/Usuario"><img src={BuscarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" /></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <Link to="/VHL/Atividade" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Atividade</Link>
                        <Link to="/VHL/Relatorio" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Relatório</Link>
                    </div>

                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
    )
}