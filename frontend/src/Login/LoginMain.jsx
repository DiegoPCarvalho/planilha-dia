import React from 'react';
import LogoZhaz from '../Assets/Imgs/logoZhaz.png';



export default class LoginMain extends React.Component {
    verificar() {
        const userErro = document.getElementById("texto_usuario");
        const login = document.getElementById("user_id").value;
        const loginErro = document.getElementById("texto_senha");
        const senha = document.getElementById("senha").value;
        const textoErro = document.getElementById("texto_erro");

        if ((login === '') || (senha === '')) {
            if ((login === '') && (senha === '')) {
                textoErro.innerText = "Campos * Obrigatórios";
                userErro.innerText = "Usuario:*";
                userErro.classList.add("text-danger");

                loginErro.innerText = "Senha:*";
                loginErro.classList.add("text-danger");
            }else if(login === ''){
                 textoErro.innerText = "Campo * Obrigatório";
                 userErro.innerText = "Usuario:*";
                 userErro.classList.add("text-danger");
            }else if(senha === ''){
                textoErro.innerText = "Campos * Obrigatórios";
                loginErro.innerText = "Senha:*";
                loginErro.classList.add("text-danger");
            }

        } else {
            this.login()
        }
    }

    mensagem(mensagem) {
        return mensagem
    }

    login() {
        return window.location.pathname = "/Atividade";
    }

    newData() {
        return window.location.pathname = "/NovoUsuario";
    }

    render() {
        return (
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
                                    <label for="User" id="texto_usuario" className="fw-bold h5">Usuário:</label>
                                </div>
                            </div>
                            <div className="row mx-5">
                                <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-user"></i></span>
                                        <input type="text" id="user_id" className="form-control" placeholder="E-MAIL" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row mx-5">
                                <div className="col-12">
                                    <label id="texto_senha" for="User" className="fw-bold h5">Senha:</label>
                                </div>
                            </div>
                            <div className="row mx-5 mb-5">
                                <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-key"></i></span>
                                        <input type="password" id="senha" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <p id="texto_erro" className='text-danger fw-bold h6 mx-3'></p>
                        </div>
                    </div>
                    <div className="row mt-5 d-flex justify-content-around">
                        <div className="col-6 d-flex justify-content-center">
                            <button className="btn btn-success fw-bold text-light" onClick={(e) => this.verificar(e)}>
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