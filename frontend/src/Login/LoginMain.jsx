import React from 'react';
import LogoZhaz from '../Assets/Imgs/logoZhaz.png';
import axios from 'axios';
import Url from '../Components/Url/Url';

import $ from 'jquery';

const banco = "LoginUsuario";
const baseUrl = Url(banco);

export default class LoginMain extends React.Component {
    componentWillMount(){
        this.enterLogin()
    }
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
            } else if (login === '') {
                textoErro.innerText = "Campo * Obrigatório";
                userErro.innerText = "Usuario:*";
                userErro.classList.add("text-danger");
            } else if (senha === '') {
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

    async login() {
        const dataLogin = await axios(`${baseUrl}`);
        const tabela = dataLogin.data


        const login = document.getElementById("user_id").value;
        const senha = document.getElementById("senha").value;
        const textoErro = document.getElementById("texto_erro");
        const loginErro = document.getElementById("texto_senha");
        const userErro = document.getElementById("texto_usuario");

        let dado = []
        try {
            for (let i = 0; i < tabela.length; i++) {
                const id = document.getElementById("user_id").value;
                if (id === tabela[i].email) {
                    dado.push({
                        Email: tabela[i].email,
                        Senha: tabela[i].senha,
                        Usuario: tabela[i].nomeCompleto,
                        Departamento: tabela[i].departamento,
                        AdmDiretoria: tabela[i].AdmDiretoria,
                        AdmGerencia: tabela[i].AdmGerencia,
                        AdmFinanceiro: tabela[i].AdmFinanceiro,
                        AdmCompras: tabela[i].AdmCompras,
                        AdmFiscal: tabela[i].AdmFiscal,
                        AdmRH: tabela[i].AdmRH,
                        AdmEstoque: tabela[i].AdmEstoque,
                        AdmExpedicao: tabela[i].AdmExpedicao,
                        AdmLogistica: tabela[i].AdmLogistica,
                        AdmRecpecao: tabela[i].AdmRecpecao,
                        AdmLaboratorio: tabela[i].AdmLaboratorio,
                        AdmComercial: tabela[i].AdmComercial,
                        AdmGeral: tabela[i].AdmGeral,
                        AdmLider: tabela[i].AdmLider,
                        
                    });
                }
            }

            const user = Object.assign(dado);
            // console.log(user)

            if ((login === user[0].Email) && (senha === user[0].Senha)) {
                userErro.innerText = "Usuario:";
                userErro.classList.add("text-dark");

                loginErro.innerText = "Senha:";
                loginErro.classList.add("text-dark");

                textoErro.innerText = "";

                window.location.pathname = "/Home";
                localStorage.logado = 1;
                localStorage.usuario = user[0].Usuario;
                localStorage.departamento = user[0].Departamento;
                localStorage.AdmDiretoria = user[0].AdmDiretoria;
                localStorage.AdmGerencia = user[0].AdmGerencia;
                localStorage.AdmFinanceiro = user[0].AdmFinanceiro;
                localStorage.AdmCompras = user[0].AdmCompras;
                localStorage.AdmFiscal = user[0].AdmFiscal;
                localStorage.AdmRH = user[0].AdmRH;
                localStorage.AdmEstoque = user[0].AdmEstoque;
                localStorage.AdmExpedicao = user[0].AdmExpedicao;
                localStorage.AdmLogistica = user[0].AdmLogistica;
                localStorage.AdmRecpecao = user[0].AdmRecpecao;
                localStorage.AdmLaboratorio = user[0].AdmLaboratorio;
                localStorage.AdmComercial = user[0].AdmComercial;
                localStorage.AdmLider = user[0].AdmLider;
                localStorage.AdmGeral = user[0].AdmGeral;
        
            } else {
                userErro.innerText = "Usuario:*";
                userErro.classList.add("text-danger");

                loginErro.innerText = "Senha:*";
                loginErro.classList.add("text-danger");

                textoErro.innerText = "Usuário ou Senha Inválidas";
            }
        } catch (erro) {
            userErro.innerText = "Usuario:*";
            userErro.classList.add("text-danger");

            loginErro.innerText = "Senha:*";
            loginErro.classList.add("text-danger");

            // document.getElementById("user_id").value = '';
            // document.getElementById("senha").value = '';

            textoErro.innerText = "Usuário ou Senha Inválidas";
        }


    }

    enterLogin(){
        $(document).keypress(function(e) {
            if(e.which == 13) $('#meuBotao').click();
        });
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
                            <button className="btn btn-success fw-bold text-light" id="meuBotao" onClick={(e) => this.verificar(e)}>
                                Entrar
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-secondary text-light fw-bold" onClick={(e) => this.newData(e)}>
                                Novo Usuário
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}