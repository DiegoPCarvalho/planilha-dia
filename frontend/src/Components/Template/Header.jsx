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
                <div className="col-9 d-flex justify-content-end">
                    <h5 className='text-light mt-3  d-flex justify-content-end'><span className='mx-1'>Bem vindo ao ZhazSys</span><i class="fa fa-flag-checkered" aria-hidden="true"></i> {localStorage.usuario}</h5>
                </div>
            </div>
        </div>
    </header>