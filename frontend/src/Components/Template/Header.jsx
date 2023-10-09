import './Header.css';
import React from 'react';

export default props =>
    <header className="header d-none d-sm-flex">
        {/* <h1 className="mt-3 text-light">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <h3 className='text-light mt-4 align-items-center d-flex justify-content-end'>Bem vindo Usuário {localStorage.usuario}</h3> */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h1 className="mt-3 text-light">
                        <i className={`fa fa-${props.icon}`}></i> {props.title}
                    </h1>
                </div>
                <div className="col-8 d-flex justify-content-end">
                    <h5 className='text-light mt-3  d-flex justify-content-end'><span className='mx-1'>Bem vindo ao ZhazSys</span><i class="fa fa-flag-checkered mx-1" aria-hidden="true"></i> {localStorage.usuario}</h5>
                </div>
                <div className="col-1 d-flex justify-content-end align-items-center">
                    <button onClick={() => sair()} className='btn btn-danger'><span className='fw-bold'>Sair</span></button>
                </div>
            </div>
        </div>
    </header>


function sair() {
    if (localStorage.logado === "1") {
        window.location.pathname = "/";
        localStorage.logado = 0;
    }
}