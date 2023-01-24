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

const banco = "LoginUsuario";
const baseUrl = Url(banco);

const initialState = {
    usuarioUnico: {
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
    usuarios: [],
    usuarioList: []
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
        this.consultaBancoUsuario()
    }

    consultarBanco() {
        axios(baseUrl).then(resp => {
            this.setState({ usuarios: resp.data })
        })
    }

    async consultaBancoUsuario() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoUsuario = []


        for (let i = 0; i < tabelaNome.length; i++) {
            if (localStorage.usuario === tabelaNome[i].nomeCompleto) {
                dadoUsuario.push({
                    Id: tabelaNome[i].id,
                    Email: tabelaNome[i].email,
                    Senha: tabelaNome[i].senha,
                    Usuario: tabelaNome[i].nomeCompleto,
                    Departamento: tabelaNome[i].departamento,
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

        return this.setState({ usuarioList: dadoUsuario })
    }

    mostarFotoAdmin(tecnico) {
        if ("Diego Carvalho" === tecnico) {
            return imgDiegoC
        }
        if ("Natanael Silva Lima" === tecnico) {
            return imgNata
        }
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
        return this.state.usuarios.map(usuario => {
            return (
                <div className="col-md-auto mb-4">
                    <CardGeral nomeUsuario={usuario.nomeCompleto}
                        email={usuario.email}
                        departamento={usuario.departamento}
                        alterar={<button className="btn btn-warning p-2 mx-2"><i className="fa fa-pencil"></i></button>}
                        deletar={<button className="btn btn-danger p-2 mx-2" onClick={() => this.confirmar(usuario)}><i className="fa fa-trash"></i></button>}
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
                const usuarioList = this.getUpdatedList(Usuario, false)
                this.setState({ usuarioList })
                window.location.pathname = '/PerfilUsuario';
            })
    }

    getUpdatedList(Usuario, add = true) {
        const usuarioList = this.state.usuarioList.filter(u => u.id !== Usuario.id)
        if (add) usuarioList.unshift(Usuario)
        return usuarioList
    }

    cardUser() {
        return this.state.usuarioList.map(usuario => {
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

  
    
    renderAdmin() {
        return (
            <div className="container-fluid overflow-auto">
                <div className="row d-flex justify-content-between mb-5">
                    <div className="col-6">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
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