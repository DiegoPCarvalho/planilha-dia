import React from 'react';

import { Link, Outlet } from 'react-router-dom';

const headerProps = {
    icon: 'money',
    title: 'Financeiro'
}

export default class Financeiro extends React.Component {

    validacao(){
        if (localStorage.AdmGerencia === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }

    componentWillMount() {
        this.validacao()
    }
    
    render() {
        return (
            <div className='content-fluid'>
                <div className="d-flex flex-row">
                    <Link to="/GerenciaAdm/Financeiro/CentroCusto/CadCusto" className="rounded-start flex-fill link bg-primary fw-bold d-flex justify-content-center">Cadastro Custo</Link>
                    <Link to="/GerenciaAdm/Financeiro/CentroCusto/Solicitacoes" className=" flex-fill link bg-primary fw-bold d-flex justify-content-center">Solicitações</Link>
                    <Link to="/GerenciaAdm/Financeiro/CentroCusto/Aprovados" className=" flex-fill link bg-primary fw-bold d-flex justify-content-center">Aprovadas</Link>
                    <Link to="/GerenciaAdm/Financeiro/CentroCusto/Reprovados" className=" flex-fill link bg-primary fw-bold d-flex justify-content-center">Reprovados</Link>
                    <Link to="/GerenciaAdm/Financeiro/CentroCusto/Finalizados" className="rounded-end flex-fill link bg-primary fw-bold d-flex justify-content-center">Finalizadas</Link>
                </div>
                <div className="row mt-2 ">
                    <Outlet />
                </div>

            </div>
        )
    }
} 