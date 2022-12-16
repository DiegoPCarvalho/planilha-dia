import React from "react";
import './Login.css';

// import cea from '../Assets/Imgs/logo2.png';
import LogoZhaz from '../Assets/Imgs/logoZhaz.png';


export default function Login() {
    return (
        <div className="login">
            <div className="formLogin">
                <div className="d-flex flex-row tamanho">
                    <div className="imagem2 w-50 d-flex justify-content-center align-items-center rounded-start">
                        {/* <img src={cea} alt="" /> */}
                    </div>
                    <div className="h-100 w-50 transparencia rounded-end">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center mb-5 mt-5">
                                <img src={LogoZhaz} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-3 mt-3">
                                <div className="row mx-5">
                                    <div className="col-12">
                                        <label for="User" className="fw-bold h5">Usuário:</label>
                                    </div>
                                </div>
                                <div className="row mx-5">
                                    <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-user"></i></span>
                                        <input type="text" class="form-control" placeholder="Usuário" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row mx-5">
                                    <div className="col-12">
                                        <label for="User" className="fw-bold h5">Senha:</label>
                                    </div>
                                </div>
                                <div className="row mx-5">
                                    <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-key"></i></span>
                                        <input type="password" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-center">
                                <a href="/Atividade" className="btn btn-info bg-gradient text-light w-25 p-2 fw-bold">Entrar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




