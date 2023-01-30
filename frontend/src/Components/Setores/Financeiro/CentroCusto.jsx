import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class CentroCusto extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-between mb-2">
                    <div className="d-flex flex-row">
                        <Link to="/Financeiro/CentroCusto/Solicitar" className="rounded-start flex-fill link bg-primary fw-bold d-flex justify-content-center">Solicitar</Link>
                        <Link to="/Financeiro/CentroCusto/EmAnalise" className=" flex-fill link bg-primary fw-bold d-flex justify-content-center">Em Análise</Link>
                        <Link to="/Financeiro/CentroCusto/Finalizados" className="rounded-end flex-fill link bg-primary fw-bold d-flex justify-content-center">Finalizados</Link>
                    </div>
                </div>
                <div className="row ">
                    <Outlet />
                </div>
            </div>
        )
    }
}