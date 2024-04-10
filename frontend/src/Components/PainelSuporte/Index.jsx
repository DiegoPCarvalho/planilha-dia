import React from "react";
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logoZhaz.png';
import '../Atividade/CrudAtividade.css';
import { Link, Outlet } from 'react-router-dom';

import { BuscarFoto } from '../Dashboard/DashboardModel/Foto/FotoTecnico';


const headerProps = {
    icon: 'phone-square',
    title: 'Painel Suporte',
}


export default class AtividadeCrud extends React.Component {

    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/Painel%20Suporte"><img src={Logo} alt="" /></Link>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <Link to="/Usuario"><img src={BuscarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" /></Link>
                        </div>
                    </div>

                    <div className="d-flex flex-row">
                        <Link to="/Painel%20Suporte/Avulso" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Avulso</Link>
                        <Link to="/Painel%20Suporte/Contrato" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Contrato</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}


