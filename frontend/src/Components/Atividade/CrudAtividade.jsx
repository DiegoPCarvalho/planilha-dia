import React from "react";
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logoZhaz.png';
import './CrudAtividade.css';
import { Link, Outlet } from 'react-router-dom';

import { BuscarFoto } from '../Dashboard/DashboardModel/Foto/FotoTecnico';


const headerProps = {
    icon: 'newspaper-o',
    title: 'Atividade',
}


export default class AtividadeCrud extends React.Component {

    componentWillMount() {
        this.validacao()
    }

    validacao() {
        if (localStorage.AdmLaboratorio === "0") {
            window.location.pathname = "/Home";
            alert("Não tem permissão para acessar essa Área")
        }
    }

    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/Laboratorio"><img src={Logo} alt="" /></Link>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <Link to="/Usuario"><img src={BuscarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" /></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        {localStorage.departamento === 'Limpeza' ? (
                            <Link to="/Laboratorio/Atividade" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Atividade</Link>
                        ) : (
                            <Link to="/Laboratorio/FilaAtividade" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Atividade</Link>
                        )}
                        <Link to="/Laboratorio/Relatorio" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Relatório</Link>
                    </div>

                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}


