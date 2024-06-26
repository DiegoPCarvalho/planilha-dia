import React from 'react';
import Main from '../../Template/Main';
import Logo from '../../../Assets/Imgs/logoZhaz.png';

import { Link, Outlet } from 'react-router-dom';

const HeaderProps = {
    icon: 'usd',
    title: "Centro Custo"
}

export default class CentroCusto extends React.Component {
    validacao(){
        if (localStorage.AdmLaboratorio === "0") {
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
                            <Link to="/CentroCustoLab"><img src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <Link to="/CentroCustoLab/Solicitar" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Solicitar</Link>
                        <Link to="/CentroCustoLab/EmAnalise" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Em Análise</Link>
                        <Link to="/CentroCustoLab/Finalizados" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Finalizados</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}