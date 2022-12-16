import React from  'react';
import LogoZhaz from '../Assets/Imgs/logoZhaz.png';

export default class LoginMain extends React.Component{
    login(){
        return window.location.href ="/Atividade";
    }

    newData(){
        return window.location.href ="/NovoUsuario";
    }

   render(){
    return(
        <div className="d-flex flex-row tamanho">
                    <div className="h-100 w-100 transparencia rounded">
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
                                <div className="row mx-5 mb-5">
                                    <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-key"></i></span>
                                        <input type="password" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex justify-content-around">
                            <div className="col-6 d-flex justify-content-center">
                                <button className="btn btn-info fw-bold text-light" onClick={(e) => this.login(e)}>
                                    Entrar
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-info text-light fw-bold" onClick={(e) => this.newData(e)}>
                                    Novo Usuário
                                </button>
                            </div>
                        </div>    
                    </div>
                </div>
    )
   }
}