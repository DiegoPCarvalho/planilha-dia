import React from 'react';
import Main from '../../Template/Main';
import Logo from '../../../Assets/Imgs/logoZhaz.png';

import { Link, Outlet } from 'react-router-dom';

const headerProps = {
    icon:'money',
    title: 'Financeiro'
}

export default class Financeiro extends React.Component {

    componentWillMount(){
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmFinanceiro === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }
   
    render(){
        return(
            <Main { ...headerProps }>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/Financeiro"><img src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        {/* <div className="col-6"> */}
                        {/* <Link to="/Financeiro/Solicitar" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Solicitar</Link>
                        <Link to="/Financeiro/EmAnalise" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Em Análise</Link>
                        <Link to="/Financeiro/Finalizados" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Finalizadas</Link> */}
                        {/* </div>
                        {/* <div className="col-6"> */}
                        {/* <Link to="/Atividade/Tabela" className="flex-fill link bg-secondary fw-bold d-flex justify-content-center">Tabela</Link> */}
                        {/* <Link to="/Atividade/Tabela" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Tabela</Link> */}
                        {/* </div> */}
                        {/*Link to="/Atividade/Relatorio" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Relatório</Link> */}
                        <Link to="/Financeiro/CentroCusto" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Centro Custo</Link>
                        <Link to="/Financeiro/CentroCustoSetores" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Centro Custo Setores</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
} 