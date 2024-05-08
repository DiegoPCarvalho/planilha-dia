import './Header.css';
import React from 'react';

export default props =>
    <header className="header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 d-none d-sm-grid">
                    <h4 className="mt-3 text-light">
                        <i className={`fa fa-${props.icon}`}></i> {props.title}
                    </h4>
                </div>
                <div className="col-7">
                    <h5 className='text-light mt-3 d-flex justify-content-center'>
                        <span className='mx-1 d-none d-md-grid'>Bem Vindo ao ZhazSys</span>
                        <i class="fa fa-flag-checkered mx-1 d-none d-lg-grid">
                        </i> <span className='d-none d-lg-grid'>{localStorage.usuario}</span>
                    </h5>
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
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