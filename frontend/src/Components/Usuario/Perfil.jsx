import React from "react";
import Logo from '../../Assets/Imgs/logoZhaz.png';
import axios from 'axios';
import Main from "../Template/Main";

import { confirmAlert } from "react-confirm-alert";


//TECNICOS
import imgDiegoC from '../../Assets/imagensTecnicos/DIEGO CARVALHO.png';
import imgNata from '../../Assets/imagensTecnicos/NATANAEL MILTON.png';

import imgMateus from '../../Assets/imagensTecnicos/MATEUS DOVAL.png';
import imgLucas from '../../Assets/imagensTecnicos/LUCAS FELICIAN.png';
import imgDiogo from '../../Assets/imagensTecnicos/DIOGO SELMINI.png';
import imgGabriel from '../../Assets/imagensTecnicos/GABRIEL KAIQUE.png';
import imgBruno from '../../Assets/imagensTecnicos/BRUNO BEDANI (1).png';
import imgVinicius from '../../Assets/imagensTecnicos/VINICIUS GOMES .png';
import imgDiegoA from '../../Assets/imagensTecnicos/DIEGO ALMEIDA.png';
import imgAnderson from '../../Assets/imagensTecnicos/ANDERSON RAMOS (1).png';
import imgDouglas from '../../Assets/imagensTecnicos/DOUGLAS ALTENFELDER.png';
import imgKleiton from '../../Assets/imagensTecnicos/KLEITON PAULINO.png';

//foto padrão
import imgPadrao from "../../Assets/Imgs/user.png"

import Url from '../Url/Url';

import CardGeral from "../Card/Card";
import CardUser from '../Card/CardUser';

import Modal from '../Modal/Modal.Atividade';

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
    // usuarios: [],
    list: []
}

const headerProps = {
    icon: 'user-plus',
    title: 'Perfil Usuario'
}

export default class PageAdmin extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        // this.validacao()
        this.consultarBanco()
        // this.consultaBancoUsuario()
    }

    consultarBanco() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    // async consultaBancoUsuario() {
    //     const tabelaNome = await axios(baseUrl).then(resp => resp.data)
    //     let dadoUsuario = []


    //     for (let i = 0; i < tabelaNome.length; i++) {
    //         if (localStorage.usuario === tabelaNome[i].nomeCompleto) {
    //             dadoUsuario.push({
    //                 Id: tabelaNome[i].id,
    //                 Email: tabelaNome[i].email,
    //                 Senha: tabelaNome[i].senha,
    //                 Usuario: tabelaNome[i].nomeCompleto,
    //                 Departamento: tabelaNome[i].departamento,
    //                 AdmDiretoria: tabelaNome[i].AdmDiretoria,
    //                 AdmGerencia: tabelaNome[i].AdmGerencia,
    //                 AdmFinanceiro: tabelaNome[i].AdmFinanceiro,
    //                 AdmCompras: tabelaNome[i].AdmCompras,
    //                 AdmFiscal: tabelaNome[i].AdmFiscal,
    //                 AdmRH: tabelaNome[i].AdmRH,
    //                 AdmEstoque: tabelaNome[i].AdmEstoque,
    //                 AdmExpedicao: tabelaNome[i].AdmExpedicao,
    //                 AdmLogistica: tabelaNome[i].AdmLogistica,
    //                 AdmRecpecao: tabelaNome[i].AdmRecpecao,
    //                 AdmLaboratorio: tabelaNome[i].AdmLaboratorio,
    //                 AdmComercial: tabelaNome[i].AdmComercial,
    //                 AdmGeral: tabelaNome[i].AdmGeral,
    //                 AdmLider: tabelaNome[i].AdmLider,
    //             })
    //         }

    //     }

    //     return this.setState({ list: dadoUsuario })
    // }

    mostarFotoAdmin(tecnico) {
        if ("Diego Carvalho" === tecnico) {
            return imgDiegoC
        }
        if ("Natanael Silva Lima" === tecnico) {
            return imgNata
        }
    }

    clear() {
        this.setState({ Usuario: initialState.Usuario })
    }

    mostarFotoUser(tecnico) {
        if ("Anderson Ramos" === tecnico) {
            return imgAnderson
        }
        if ("Mateus Doval" === tecnico) {
            return imgMateus
        }
        if ("Lucas Feliciano" === tecnico) {
            return imgLucas
        }
        if ("Diogo Selmini" === tecnico) {
            return imgDiogo
        }
        if ("Gabriel Kaique" === tecnico) {
            return imgGabriel
        }
        if ("Bruno Bedani" === tecnico) {
            return imgBruno
        }
        if ("vinicius Gomes" === tecnico) {
            return imgVinicius
        }
        if ("Diego Almeida" === tecnico) {
            return imgDiegoA
        }
        if ("Douglas Altenfelder" === tecnico) {
            return imgDouglas
        }
        if ("Kleiton Paulino" === tecnico) {
            return imgKleiton
        }
        else {
            return imgPadrao
        }
    }

    cardAdmin() {
        return this.state.list.map(Usuario => {
            return (
                <div className="col-md-auto mb-4">
                    <CardGeral nomeUsuario={Usuario.nomeCompleto}
                        email={Usuario.email}
                        departamento={Usuario.departamento}
                        alterar={<button className="btn btn-warning p-2 mx-2"><i className="fa fa-pencil"></i></button>}
                        deletar={<button className="btn btn-danger p-2 mx-2" onClick={() => this.confirmar(Usuario)}><i className="fa fa-trash"></i></button>}
                    />
                </div>
            )
        })
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

    remove(Usuario) {
        axios.delete(`${baseUrl}/${Usuario.id}`)
            .then(resp => {
                const list = this.getUpdatedList(Usuario, false)
                this.setState({ list })
                // window.location.pathname = '/PerfilUsuario';
            })
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
    
    updateField(event) {
        const usuario = { ...this.state.usuario }
        usuario[event.target.name] = event.target.value
        this.setState({ usuario })
    }
  
    cardUser() {
        return this.state.list.map(usuario => {
            return (
                <div className="col-md-auto mb-4 d-flex justify-content-center">
                    <CardUser nomeUsuario={usuario.Usuario}
                        email={usuario.Email}
                        departamento={usuario.Departamento}
                        alterar={<button className="btn btn-warning p-3 mx-2"><i className="fa-2x fa fa-pencil"></i></button>}
                    />
                </div>
            )
        })
    }

    validarAdmin(admin) {
        if (localStorage.AdmGeral === "1") {
            return this.renderAdmin()
        } else if (localStorage.AdmGeral === "0") {
            return this.renderUser()
        }
    }

    formularioAdmin() {
        return (
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
                                        onChange={e => this.updateField(e)} />
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
                                        name="senha" value={this.state.usuario.senha} />
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
                                    >
                                        <option selected>...</option>
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
                    <div className="col-9 d-flex justify-content-end">
                        {/* <button className="btn btn-primary fw-bold mx-2" onClick={(e) => this.verificar(e)}>
                            Salvar
                        </button>*/}
                        <button className="btn btn-primary fw-bold mx-2" onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-danger fw-bold mx-1" onClick={e => this.clear(e)}>
                            Cancelar
                        </button> 
                    </div>
                </div>
            </div>
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
                        <div className="mx-3"><Modal Ititulo="plus" nomeBotao="Novo Usuario"
                            corModal="primary" nome="Cadastro Usuário" 
                            relatorio={this.formularioAdmin()}/></div>
                        <img src={this.mostarFotoAdmin(localStorage.usuario)} alt="" className="imagem rounded-circle" />
                    </div>
                </div>
                <div className="d-flex d-flex justify-content-center mb-5">
                    <div className="col-12  d-flex justify-content-center  text-light">
                        <p className="display-2 rounded fw-bold bg-success p-2">Usuários</p>
                    </div>
                </div>

                <div className="row row-cols-auto">
                    {this.cardAdmin()}
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
                        <img src={this.mostarFotoUser(localStorage.usuario)} alt="" className="imagem rounded-circle" />
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