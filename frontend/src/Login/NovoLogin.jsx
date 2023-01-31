import React from 'react';
import LogoZhaz from '../Assets/Imgs/logoZhaz.png';
import Url from '../Components/Url/Url';
import axios from 'axios';

import { Link } from 'react-router-dom';

const banco = "LoginUsuario";
const baseUrl = Url(banco);

const initialState = {
    usuario: {
        nomeCompleto: '',
        email: '',
        senha: '',
        departamento: '',
        AdmDiretoria: 0,
        AdmGerencia: 0,
        AdmFinanceiro: 0,
        AdmCompras: 0,
        AdmFiscal: 0,
        AdmRH: 0,
        AdmEstoque: 0,
        AdmExpedicao: 0,
        AdmLogistica: 0,
        AdmRecpecao: 0,
        AdmLaboratorio: 0,
        AdmComercial: 0,
        AdmGeral: 0,
        AdmLider: 0
    }
}


export default class LoginMain extends React.Component {

    state = { ...initialState }

    verificar() {
        //inputs
        const user_cad = document.getElementById("user-cad").value;
        const email_cad = document.getElementById("email-cad").value;
        const senha_cad = document.getElementById("senha-cad").value;
        const depar_cad = document.getElementById("depar-cad").value;

        //inputs-erro
        const user_text = document.getElementById("user-text");
        const email_text = document.getElementById("email-text");
        const senha_text = document.getElementById("senha-text");
        const depar_text = document.getElementById("depar-text");

        //mensagem-erro
        const textoErro = document.getElementById("texto-erro-cad");

        if ((user_cad === '') || (email_cad === '') || (senha_cad === '') || (depar_cad === '')) {


        } else {

            if (depar_cad === "Diretoria") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmDiretoria = 1;

                this.save()

            } if (depar_cad === "Gerência") {
                let nomeUsuario = user_cad
                if ((nomeUsuario.match(/Douglas/)) || (nomeUsuario.match(/Kleiton/)) || (nomeUsuario.match(/douglas/)) || (nomeUsuario.match(/kleiton/))) {
                    this.state.usuario.AdmLaboratorio = 1
                    this.state.usuario.AdmLider = 1

                } if ((nomeUsuario.match(/Thiago/)) || (nomeUsuario.match(/thiago/)) || (nomeUsuario.match(/Tiago/) || (nomeUsuario.match(/tiago/)))) {
                    this.state.usuario.AdmCompras = 1;
                    this.state.usuario.AdmFiscal = 1;
                    this.state.usuario.AdmRH = 1;
                    this.state.usuario.AdmEstoque = 1;
                    this.state.usuario.AdmExpedicao = 1;
                    this.state.usuario.AdmLogistica = 1;
                    this.state.usuario.AdmRecpecao = 1;
                    this.state.usuario.AdmLider = 1;
                }if ((nomeUsuario.match(/Ingrid/)) || (nomeUsuario.match(/ingrid/))) {
                    this.state.usuario.AdmFinanceiro = 1;
                    this.state.usuario.AdmLider = 1;
                }

                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmGerencia = 1;
                this.save()

            } if (depar_cad === "Financeiro") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmFinanceiro = 1;

                this.save()

            } if (depar_cad === "Fiscal") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmFiscal = 1;

                this.save()

            } if (depar_cad === "Compras") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmCompras = 1;

                this.save()

            } if (depar_cad === "RH") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmRH = 1;

                this.save()

            } if (depar_cad === "Estoque") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmEstoque = 1;

                this.save()

            } if (depar_cad === "Expedição") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmExpedicao = 1;

                this.save()

            } if (depar_cad === "Logística") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmLogistica = 1;

                this.save()

            } if (depar_cad === "Recepção") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmRecpecao = 1;

                this.save()

            } if (depar_cad === "Comercial") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmComercial = 1;

                this.save()

            } if (depar_cad === "Laborátorio") {
                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

                this.state.usuario.AdmLaboratorio = 1;

                this.save()

            }
            else if (depar_cad === "...") {
                alert("Departamento Ausente")
            }

            // user_text.innerText = "Usuario:";
            // user_text.classList.add("text-dark");

            // email_text.innerText = "E-mail:";
            // email_text.classList.add("text-dark");

            // senha_text.innerText = "Senha:";
            // senha_text.classList.add("text-dark")

            // depar_text.innerText = "Departamento:"
            // depar_text.classList.add("text-dark");

            // textoErro.innerText = ''

            // this.save()
        }
    }

    save() {
        const usuario = this.state.usuario
        const method = usuario.id ? 'put' : 'post'
        const url = usuario.id ? `${baseUrl}/${usuario.id}` : baseUrl

        axios[method](url, usuario)
            .then(resp => {
                // const list = this.getUpdateList(resp.data)
                this.setState({ usuario: initialState.usuario })
            })
    }

    clear() {
        this.setState({ usuario: initialState.usuario })
    }

    updateField(event) {
        const usuario = { ...this.state.usuario }
        usuario[event.target.name] = event.target.value
        this.setState({ usuario })
    }

    render() {
        return (
            <div className="d-flex flex-row tamanho">
                <div className="h-100 w-100 transparencia rounded">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <img src={LogoZhaz} alt="" />
                        </div>
                    </div>
                    <form class="row g-3" action="javascript:myFunction(); return false;">
                        <div className="row mt-2">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <div className="row mx-5">
                                        <div className="col-12">
                                            <label for="User" id="user-text" className="fw-bold h5">Usuário:</label>
                                        </div>
                                    </div>
                                    <div className="row mx-5">
                                        <div className="col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-user"></i></span>
                                                <input type="text" id="user-cad"
                                                    className="form-control" placeholder="Nome e Sobrenome"
                                                    name="nomeCompleto" value={this.state.usuario.nomeCompleto}
                                                    onChange={e => this.updateField(e)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row mx-5">
                                        <div className="col-12">
                                            <label for="User" id="email-text" className="fw-bold h5" >E-mail:</label>
                                        </div>
                                    </div>
                                    <div className="row mx-5">
                                        <div className="col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                                <input type="text" id="email-cad"
                                                    className="form-control" placeholder="E-mail"
                                                    onChange={e => this.updateField(e)}
                                                    name="email" value={this.state.usuario.email}
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row mx-5">
                                        <div className="col-12">
                                            <label for="User" id="senha-text" className="fw-bold h5">Senha:</label>
                                        </div>
                                    </div>
                                    <div className="row mx-5 mb-2">
                                        <div className="col-12">
                                            <div className="input-group mb-2">
                                                <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-key"></i></span>
                                                <input type="text" id="senha-cad"
                                                    className="form-control" placeholder="Senha"
                                                    onChange={e => this.updateField(e)}
                                                    name="senha" value={this.state.usuario.senha}
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row mx-5">
                                        <div className="col-12">
                                            <label for="User" id="depar-text" className="fw-bold h5">Departamento:</label>
                                        </div>
                                    </div>
                                    <div className="row mx-5 mb-3">
                                        <div className="col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-cube"></i></span>
                                                <select className="form-select" id="depar-cad"
                                                    name='departamento'
                                                    onChange={e => this.updateField(e)}
                                                    value={this.state.usuario.departamento}
                                                    required
                                                >
                                                    <option selected disabled value="">...</option>
                                                    <option>Diretoria</option>
                                                    <option>Gerência</option>
                                                    <option>Financeiro</option>
                                                    <option>Fiscal</option>
                                                    <option>Compras</option>
                                                    <option>RH</option>
                                                    <option>Estoque</option>
                                                    <option>Expedição</option>
                                                    <option>Logística</option>
                                                    <option>Recepção</option>
                                                    <option>Laborátorio</option>
                                                    <option>Comercial</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <p id="texto-erro-cad" className='text-danger fw-bold h6 mx-3'></p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-2 d-flex justify-content-start align-items-center">
                                    <Link to="/" className='btn btn-dark mx-3 fw-bold'>Voltar</Link>
                                </div>
                                <div className="col-9 d-flex justify-content-end">
                                    <button className="btn btn-primary fw-bold mx-2"
                                        onClick={(e) => this.verificar(e)}
                                    >
                                        Salvar
                                    </button>

                                    {/* <button className="btn btn-primary fw-bold mx-2" onClick={e => this.save(e)}>
                            Salvar
                        </button> */}
                                    <button className="btn btn-danger fw-bold mx-1" onClick={e => this.clear(e)}>
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

