import React from 'react';
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logoZhaz.png';

import { Link } from 'react-router-dom';

const headerProps = {
    icon: 'home',
    title: 'Home'
}

const initialState = {
    RamalComercial: [],
    RamalLabo: [],
    RamalADM: []
}

export default class PageHome extends React.Component {

    state = { ...initialState }


    render() {
        return (
            <Main {...headerProps}>
                <div className="comtainer-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <div className="nav-link active bg-dark border-dark" aria-current="page">
                                    <span className='display-6 fw-bold  text-light p-2'> Sistemas </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-4 d-flex justify-content-center">
                            <a className='btn btn-primary' href="https://app2.cosmoserp.com/zhaz/" target="_blank"> <span className='fw-bold display-6'> Cosmos </span> </a>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <a className='btn btn-primary' href="http://192.168.15.199:3000" target="_blank"> <span className='fw-bold display-6'> Painel OS </span> </a>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <a className='btn btn-primary' href="http://192.168.15.199:8080" target="_blank"> <span className='fw-bold display-6'> Intranet </span> </a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <div className="nav-link active bg-dark border-dark" aria-current="page">
                                    <span className='display-6 fw-bold  text-light p-2'> Setores </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/DiretoriaLab" className='btn btn-success'><span className='fw-bold display-6'> Diretoria </span></Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/GerenciaLab" className='btn btn-success'><span className='fw-bold display-6'> Gerência </span></Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/Atividade" className='btn btn-success'><span className='fw-bold display-6'> Laboratória </span></Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/PerfilUsuario" className='btn btn-success'><span className='fw-bold display-6'> Usuário </span></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <div className="nav-link active bg-dark border-dark" aria-current="page">
                                    <span className='display-6 fw-bold  text-light p-2'> Ramais </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row my-4 d-flex justify-content-end">
                        <div className="col-3 d-flex justify-content-end">
                            <Link to="/Ramais" className='btn btn-warning'> <span className=' h3 rounded p-2 fw-bold'> Cadastre </span></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 d-flex justify-content-center">
                            <span className='bg-secondary rounded text-light p-2 fw-bold display-6'> Comercial </span>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <span className='bg-secondary rounded text-light p-2 fw-bold display-6'> ADM </span>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <span className='bg-secondary rounded text-light p-2 fw-bold display-6'> Laboratório </span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 d-flex justify-content-center">
                            
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}