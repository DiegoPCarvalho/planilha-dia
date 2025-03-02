import React from "react";
import Logo from '../../Assets/Imgs/logoZhaz.png';
import axios from 'axios';
import Main from "../Template/Main";

import { BuscarFoto } from '../Dashboard/DashboardModel/Foto/FotoTecnico'

import { confirmAlert } from "react-confirm-alert";

import Url from '../Url/Url';

import CardUser from '../Card/CardUser';

import ModalUsuario from '../Modal/ModalUsuario';
import AdminCadastro from "./AdminCadastros";


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
    },
    userLocal: [],
    list: [],
    modal: false
}

const headerProps = {
    icon: 'user-plus',
    title: 'Perfil Usuario'
}

export default class PageAdmin extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.consultarBanco()
        this.consultaBancoUsuario()
    }

    consultarBanco() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    async consultaBancoUsuario() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoUsuario = []


        for (let i = 0; i < tabelaNome.length; i++) {
            if (localStorage.usuario === tabelaNome[i].nomeCompleto) {
                dadoUsuario.push({
                    id: tabelaNome[i].id,
                    email: tabelaNome[i].email,
                    senha: tabelaNome[i].senha,
                    nomeCompleto: tabelaNome[i].nomeCompleto,
                    departamento: tabelaNome[i].departamento,
                    AdmDiretoria: tabelaNome[i].AdmDiretoria,
                    AdmGerencia: tabelaNome[i].AdmGerencia,
                    AdmFinanceiro: tabelaNome[i].AdmFinanceiro,
                    AdmCompras: tabelaNome[i].AdmCompras,
                    AdmFiscal: tabelaNome[i].AdmFiscal,
                    AdmRH: tabelaNome[i].AdmRH,
                    AdmEstoque: tabelaNome[i].AdmEstoque,
                    AdmExpedicao: tabelaNome[i].AdmExpedicao,
                    AdmLogistica: tabelaNome[i].AdmLogistica,
                    AdmRecpecao: tabelaNome[i].AdmRecpecao,
                    AdmLaboratorio: tabelaNome[i].AdmLaboratorio,
                    AdmComercial: tabelaNome[i].AdmComercial,
                    AdmGeral: tabelaNome[i].AdmGeral,
                    AdmLider: tabelaNome[i].AdmLider,
                })
            }

        }

        return this.setState({ userLocal: dadoUsuario })
    }

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

        if ((user_cad === '') || (email_cad === '') || (senha_cad === '') || (depar_cad === '...')) {
               

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
                    this.state.usuario.AdmFinanceiro = 1;
                    this.state.usuario.AdmFiscal = 1;
                    this.state.usuario.AdmRH = 1;
                    this.state.usuario.AdmEstoque = 1;
                    this.state.usuario.AdmExpedicao = 1;
                    this.state.usuario.AdmLogistica = 1;
                    this.state.usuario.AdmRecpecao = 1;
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

            } if (depar_cad === "Laboratório") {
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
        }
    }


    clear() {
        this.setState({ usuario: initialState.usuario, modal: false })
    }


    confirmar(Usuario) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(Usuario)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })

    }

    remove(usuario) {
        axios.delete(`${baseUrl}/${usuario.id}`)
            .then(resp => {
                const list = this.getUpdatedList(usuario, false)
                this.setState({ list })
                
            })
    }

    save() {
        const usuario = this.state.usuario
        const method = usuario.id ? 'put' : 'post'
        const url = usuario.id ? `${baseUrl}/${usuario.id}` : baseUrl

        axios[method](url, usuario)
            .then(resp => {
                // const list = this.getUpdateList(resp.data)
                this.setState({usuario: initialState.usuario})
                window.location.pathname = "/Usuario"
            })
    }

    load(usuario) {
        this.setState({ usuario, modal: true })
    }


    getUpdatedList(usuario, add = true) {
        const list = this.state.list.filter(u => u.id !== usuario.id)
        if (add) list.unshift(usuario)
        return list
    }

    updateField(event) {
        const usuario = { ...this.state.usuario }
        usuario[event.target.name] = event.target.value
        this.setState({ usuario })
    }

    cardUser() {
        return this.state.userLocal.map(usuario => {
            return (
                <div className="col-md-auto mb-4 d-flex justify-content-center">
                    <CardUser nomeUsuario={usuario.nomeCompleto}
                        email={usuario.email}
                        departamento={usuario.departamento}
                        alterar={
                        <>
                        <ModalUsuario corModal="warning" Ititulo="expand" nomeBotao="Usuario"
                            Relatorio={this.formularioUser()} isShow={this.state.modal}
                            close={() => this.setState({modal: false})}/>
                            <button className="btn btn-warning mx-2"
                            onClick={() => this.load(usuario)}>
                            <i className="fa fa-pencil"></i>
                            </button>
                        </>
                        }
                    />
                </div>
            )
        })
    }

    validarAdmin() {
        if (localStorage.AdmGeral === "1") {
            return this.renderAdmin()
        } else if (localStorage.AdmGeral === "0") {
            return this.renderUser()
        }
    }

    formularioUser() {
        return (
            <form className="row" action="javascript:myFunction(); return false;">
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
                                        disabled
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
                                        required
                                        disabled />
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
                                        disabled
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
                                        <option>Laboratório</option>
                                        <option>Comercial</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <p id="texto-erro-cad" className='text-danger fw-bold h6 mx-3'></p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-9 d-flex justify-content-end">
                        <button className="btn btn-primary fw-bold mx-2" 
                        onClick={(e) => this.verificar(e)}
                        >
                            Salvar
                        </button>
                        <button className="btn btn-danger fw-bold mx-1" onClick={e => this.clear(e)}>
                            Cancelar
                        </button> 
                    </div>
                </div>
            </div>
        </form>
        )
    }


    renderAdmin() {
        return (
            <div className="container-fluid overflow-auto">
                <div className="row d-flex justify-content-between mb-5">
                    <div className="col-6">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <img src={BuscarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" />
                    </div>
                    <div className="mt-5">
                        <AdminCadastro />
                    </div>
                </div>
            </div>
        )
    }

    renderUser() {
        return (
            <div className="container-fluid overflow-auto">
                <div className="row d-flex justify-content-between mb-3">
                    <div className="col-6">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <img src={BuscarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" />
                    </div>
                </div>
                <div className="d-flex d-flex justify-content-center mb-3">
                    <div className="col-12  d-flex justify-content-center  text-light">
                        <p className="display-2 rounded fw-bold bg-success p-2">Usuário</p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center row-cols-auto">
                    {this.cardUser()}
                </div>

            </div>
        )
    }

    render() {
        return (
            <Main  {...headerProps}>
                {this.validarAdmin(localStorage.AdmGeral)}
            </Main>
        )
    }

}
