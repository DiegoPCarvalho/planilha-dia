import React from "react";
import Logo from '../../Assets/Imgs/logoZhaz.png';
import axios from 'axios';
import Main from "../Template/Main";

//TECNICOS
import imgDiegoC from '../../Assets/imagensTecnicos/DIEGO CARVALHO.png';
import imgNata from '../../Assets/imagensTecnicos/NATANAEL MILTON.png';

import Url from '../Url/Url';

import CardGeral from "../Card/Card";

const banco = "LoginUsuario";
const baseUrl = Url(banco);

const initialState = {
    usuarios: []
}

export default class PageAdmin extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.validacao()
        this.consultarBanco()
    }

    consultarBanco() {
        axios(baseUrl).then(resp => {
            this.setState({ usuarios: resp.data })
        })
    }

    mostarFoto(tecnico) {
        if ("Diego Carvalho" === tecnico) {
            return imgDiegoC
        }
        if ("Natanael Silva Lima" === tecnico) {
            return imgNata
        }
    }

    validacao() {
        if (localStorage.AdmGeral === "0") {
            window.location.pathname = "/Dashboard";
            alert("Não tem permissão para acessar essa Área")
        }
    }

    renderRows() {
        return this.state.usuarios.map(usuario => {
            return (
                <div className="col-md-auto mb-4">
                    <CardGeral nomeUsuario={usuario.nomeCompleto}
                        email={usuario.email}
                        departamento={usuario.departamento}
                        alterar={this.botaoAlterar()}
                        deletar={this.botaoDeletar()}
                    />
                </div>
            )
        })
    }

    botaoAlterar() {
        return (
            <button className="btn btn-warning p-2 mx-2"><i className="fa fa-pencil"></i></button>
        )
    }

    botaoDeletar() {
        return (
            <button className="btn btn-danger p-2 mx-2"><i className="fa fa-trash"></i></button>
        )
    }


    render() {
        return (
            <Main>
                <div className="container-fluid overflow-auto">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <img src={this.mostarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" />
                        </div>
                    </div>
                    <div className="d-flex d-flex justify-content-center mb-5">
                        <div className="col-12  d-flex justify-content-center  text-light">
                            <p className="display-2 rounded fw-bold bg-success p-2">Usuários</p>
                        </div>
                    </div>

                    <div className="row row-cols-auto">
                        {this.renderRows()}
                    </div>

                </div>
            </Main>
        )
    }

}