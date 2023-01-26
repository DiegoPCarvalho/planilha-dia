import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class CentroCusto extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-between mb-2">
                    <div className="d-flex flex-row">
                        {/* <div className="col-6"> */}
                        <Link to="/Financeiro/CentroCusto/CadCusto" className="rounded-start flex-fill link bg-primary fw-bold d-flex justify-content-center">Cadastro de Custo</Link>
                        <Link to="/Financeiro/CentroCusto" className="rounded-end flex-fill link bg-primary fw-bold d-flex justify-content-center">Soliçitações</Link>
                        {/* </div>
                {/* <div className="col-6"> */}
                        {/* <Link to="/Atividade/Tabela" className="flex-fill link bg-secondary fw-bold d-flex justify-content-center">Tabela</Link> */}
                        {/* <Link to="/Atividade/Tabela" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Tabela</Link> */}
                        {/* </div> */}
                        {/*Link to="/Atividade/Relatorio" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Relatório</Link> */}
                    </div>
                </div>
                <div className="row ">
                    <Outlet />
                </div>
            </div>
        )
    }
}