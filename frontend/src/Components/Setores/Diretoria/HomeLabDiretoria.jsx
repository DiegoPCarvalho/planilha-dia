import React from 'react';
import Main from '../../Template/Main';
import Logo from '../../../Assets/Imgs/logoZhaz.png';

import { Link, Outlet } from 'react-router-dom';

const HeaderProps = {
    icon: "credit-card",
    title: "Diretoria"
}

export default class HomeDiretoria extends React.Component {

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
            <Main {...HeaderProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/DiretoriaLab"><img src={Logo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <Link to="/DiretoriaLab/Dashboard" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Dashbords</Link>
                        <Link to="/DiretoriaLab/CentroCusto" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Centro Custo</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}