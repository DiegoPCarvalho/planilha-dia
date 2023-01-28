import React from 'react';


import { Link, Outlet } from 'react-router-dom';


export default class PageFinanceiro extends React.Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="d-flex flex-row justify-content-center">
                        {/* <div className="col-6"> */}
                        <Link to="/GerenciaAdm/Financeiro/Dashboard" className="flex-fill rounded-start link bg-dark fw-bold d-flex justify-content-center">Dashboard</Link>
                        <Link to="/GerenciaAdm/Financeiro/CentroCusto" className="flex-fill rounded-end link bg-dark fw-bold d-flex justify-content-center"> Centro Custo</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
        )
    }
}