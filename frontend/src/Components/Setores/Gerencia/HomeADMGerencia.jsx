import React from 'react';
import Main from '../../Template/Main';
import Logo from '../../../Assets/Imgs/logoZhaz.png';

import { Link, Outlet } from 'react-router-dom';

const HeaderProps = {
    icon: "bar-chart",
    title: "Gerencia"
}


export default class HomeGerenciaAdm extends React.Component {
    render() {
        return (
            <Main {...HeaderProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/GerenciaAdm"><img src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                
                        <Link to="/GerenciaAdm/Financeiro" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Financeiro</Link>
                        <Link to="/GerenciaAdm/Compras" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Compras</Link>
                        <Link to="/GerenciaAdm/Faturamento-Fiscal" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Faturamento/Fiscal</Link>
                        <Link to="/GerenciaAdm/RH-DP" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">RH-DP</Link>
                        <Link to="/GerenciaAdm/Estoque" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Estoque</Link>
                        <Link to="/GerenciaAdm/Marketing" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Marketing</Link>
                        <Link to="/GerenciaAdm/Expedicao-Logistica" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Expedicao/Logistica</Link>
                        <Link to="/GerenciaAdm/Recepcao" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Recepção</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}