import React from 'react';


import { Link, Outlet } from 'react-router-dom';


export default class DashboardDiretoria extends React.Component {

    componentWillMount(){
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmDiretoria === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }
    
    render() {
        return (
                <div className="container-fluid">
                    <div className="d-flex flex-row justify-content-center">
                        {/* <div className="col-6"> */}
                        <Link to="/DiretoriaLab/Dashboard/DashboardAtividade" className="flex-fill rounded-start link bg-primary fw-bold d-flex justify-content-center">Dashbord Atividade</Link>
                        <Link to="/DiretoriaLab/Dashboard/DashboardCentroCusto" className="flex-fill rounded-end link bg-primary fw-bold d-flex justify-content-center"> Dashboard Centro Custo</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
        )
    }
}