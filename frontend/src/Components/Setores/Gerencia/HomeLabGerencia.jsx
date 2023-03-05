import React from 'react';
import Main from '../../Template/Main';
import Logo from '../../../Assets/Imgs/logoZhaz.png';

import { Link, Outlet } from 'react-router-dom';
import './EstiloGerencia.css'

const HeaderProps = {
    icon: "bar-chart",
    title: "Gerencia"
}


export default class HomeGerencia extends React.Component {
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
            <Main {...HeaderProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/GerenciaLab"><img src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                
                        <Link to="/GerenciaLab/Dashboard" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Dashbord Atividade</Link>
                        <Link to="/GerenciaLab/Meta" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Meta</Link>
                        {/* <Link to="/GerenciaLab/CentroCusto" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Centro Custo</Link> */}
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}