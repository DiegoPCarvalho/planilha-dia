import React from  'react';
import LogoZhaz from '../Assets/Imgs/logoZhaz.png';

export default class LoginMain extends React.Component{

    save(){
        return window.location.href ="/";
    }
    cancel(){
        return window.location.href ="/";
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
                                <div className="row mx-5 mb-3">
                                    <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-key"></i></span>
                                        <input type="password" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row mx-5">
                                    <div className="col-12">
                                        <label for="User" className="fw-bold h5">Confirme a Senha:</label>
                                    </div>
                                </div>
                                <div className="row mx-5 mb-3">
                                    <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-key"></i></span>
                                        <input type="password" class="form-control" placeholder="Confirme a Senha" aria-label="ConfirSenha" aria-describedby="basic-addon1" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                        <div className="col-2 d-flex justify-content-start align-items-center">
                                <a href="/" className='btn btn-dark mx-3 fw-bold'>Voltar</a>
                            </div>
                            <div className="col-9 d-flex justify-content-end">
                                <button className="btn btn-primary fw-bold mx-2" onClick={(e) => this.save(e)}>
                                    Salvar
                                </button>
                                <button className="btn btn-danger fw-bold mx-1">
                                    Cancelar    
                                </button>
                                {/* <a href="/Atividade" className="btn btn-info bg-gradient text-light  fw-bold">Entrar</a> */}
                            </div>
                        </div>    
                    </div>
                </div>
    )
   }
}