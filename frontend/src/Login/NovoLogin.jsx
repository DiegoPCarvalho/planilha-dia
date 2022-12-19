import React from 'react';
import LogoZhaz from '../Assets/Imgs/logoZhaz.png';
import Url from '../Components/Url/Url';
import axios from 'axios';

import { Link } from 'react-router-dom';

const banco = "LoginUsuario";
const baseUrl = Url(banco);

const initialState = {
    usuario: {nomeCompleto: '', email: '', senha: '', departamento: ''}
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
            if ((user_cad === '') && (email_cad === '')&&(senha_cad === '') && (depar_cad === '')) {
                textoErro.innerText = "Campos * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");

                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")

                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");

            }else if((user_cad === '') && (email_cad === '')&&(senha_cad === '') ){
                textoErro.innerText = "Campos * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");

                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")

            }else if((user_cad === '') && (email_cad === '')&&(depar_cad === '') ){
                textoErro.innerText = "Campos * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");

                
                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");

            }else if((user_cad === '') && (senha_cad === '')&&(depar_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")

                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");
            }else if((email_cad === '') && (senha_cad === '')&&(depar_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");

                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")

                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");
            }else if((user_cad === '') && (email_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");
            }else if((user_cad === '') && (senha_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")
            }else if((user_cad === '') && (depar_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");
            }else if((email_cad === '')&&(senha_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");

                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")
            }else if((email_cad === '')&&(depar_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");

                
                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");
            }else if((senha_cad === '')&&(depar_cad === '')){
                textoErro.innerText = "Campos * Obrigatórios";
                
                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")

                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");
            }else if(user_cad === ''){
                textoErro.innerText = "Campo * Obrigatórios";
                
                user_text.innerText = "Usuario:*";
                user_text.classList.add("text-danger");

            }else if(email_cad === ''){
                textoErro.innerText = "Campo * Obrigatórios";

                email_text.innerText = "E-mail:*";
                email_text.classList.add("text-danger");
            }else if(senha_cad === ''){
                textoErro.innerText = "Campo * Obrigatórios";
                
                senha_text.innerText = "Senha:*";
                senha_text.classList.add("text-danger")
            }else if(depar_cad === ''){
                textoErro.innerText = "Campo * Obrigatórios";
                depar_text.innerText = "Departamento:*"
                depar_text.classList.add("text-danger");
            }
            
        } else {

                user_text.innerText = "Usuario:";
                user_text.classList.add("text-dark");

                email_text.innerText = "E-mail:";
                email_text.classList.add("text-dark");

                senha_text.innerText = "Senha:";
                senha_text.classList.add("text-dark")

                depar_text.innerText = "Departamento:"
                depar_text.classList.add("text-dark");

                textoErro.innerText = ''

            this.save()
        }
    }

    save() {
        const usuario = this.state.usuario
        const method = usuario.id ? 'put' : 'post'
        const url = usuario.id ? `${baseUrl}/${usuario.id}` : baseUrl

        axios[method](url, usuario)
            .then(resp => {
                // const list = this.getUpdateList(resp.data)
                this.setState({ usuario: initialState.usuario})
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
                                                name="nomeCompleto"  value={this.state.usuario.nomeCompleto} 
                                                onChange={e => this.updateField(e)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row mx-5">
                                    <div className="col-12">
                                        <label for="User" id="email-text" className="fw-bold h5">E-mail:</label>
                                    </div>
                                </div>
                                <div className="row mx-5">
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text bg-warning" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                            <input type="text" id="email-cad" 
                                                className="form-control" placeholder="E-mail"
                                                onChange={e => this.updateField(e)}
                                                name="email" value={this.state.usuario.email} />
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
                                            <input type="password" id="senha-cad" 
                                            className="form-control" placeholder="Senha" 
                                            onChange={e => this.updateField(e)}
                                            name="senha" value={this.state.usuario.senha}/>
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
                                            <input type="text" id="depar-cad" 
                                                className="form-control" placeholder="Departamento" 
                                                name="departamento" value={this.state.usuario.departamento}
                                                onChange={e => this.updateField(e)}/>
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
                                <button className="btn btn-primary fw-bold mx-2" onClick={(e) => this.verificar(e)}>
                                    Salvar
                                </button>
                                <button className="btn btn-danger fw-bold mx-1" onClick={(e) => this.clear(e)}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}