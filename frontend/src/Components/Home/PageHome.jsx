import React from 'react';
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logoZhaz.png';

import { Link } from 'react-router-dom';

import Url from '../Url/Url';
import axios from 'axios';

import ModalRamal from '../Modal/ModalRamal';

const headerProps = {
    icon: 'home',
    title: 'Home'
}

const initialState = {
    RamalComercial: [],
    RamalLabo: [],
    RamalADM: [],
    RamalDiretoria: [],
    RamalGerencia: []
}



const baseUrl = Url("Ramal");

export default class PageHome extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.tabelaRamal()
    }

    async tabelaRamal() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let ramalComercial = [];
        let ramalLabo = [];
        let ramalADM = [];
        let ramalDiretoria = [];
        let ramalGerencia = [];

        for (let i = 0; i < tabelaNome.length; i++) {
            if ("Laboratório" === tabelaNome[i].Departamento) {
                ramalLabo.push({
                    id: tabelaNome[i].id,
                    Usuario: tabelaNome[i].Usuario,
                    Ramal: tabelaNome[i].Ramal
                })
            }
            if ("Comercial" === tabelaNome[i].Departamento) {
                ramalComercial.push({
                    id: tabelaNome[i].id,
                    Usuario: tabelaNome[i].Usuario,
                    Ramal: tabelaNome[i].Ramal
                })
            }
            if ("Diretoria" === tabelaNome[i].Departamento) {
                ramalDiretoria.push({
                    id: tabelaNome[i].id,
                    Usuario: tabelaNome[i].Usuario,
                    Ramal: tabelaNome[i].Ramal
                })
            }
            if ("Gerência" === tabelaNome[i].Departamento) {
                ramalGerencia.push({
                    id: tabelaNome[i].id,
                    Usuario: tabelaNome[i].Usuario,
                    Ramal: tabelaNome[i].Ramal
                })
            }
            if (("Financeiro" === tabelaNome[i].Departamento) || ("Fiscal" === tabelaNome[i].Departamento) || ("Compras" === tabelaNome[i].Departamento) ||
                ("RH" === tabelaNome[i].Departamento) || ("Estoque" === tabelaNome[i].Departamento) || ("Expedição" === tabelaNome[i].Departamento) ||
                ("Logística" === tabelaNome[i].Departamento) || ("Recepção" === tabelaNome[i].Departamento)) {
                ramalADM.push({
                    id: tabelaNome[i].id,
                    Usuario: tabelaNome[i].Usuario,
                    Ramal: tabelaNome[i].Ramal,
                    Departamento: tabelaNome[i].Departamento
                })
            }
        }

        return this.setState({
            RamalLabo: ramalLabo,
            RamalComercial: ramalComercial,
            RamalDiretoria: ramalDiretoria,
            RamalGerencia: ramalGerencia,
            RamalADM: ramalADM
        })
    }

    renderTable(Departamento) {
        return (
            <table className="table mt-2 table-bordered table-striped" id="tabela">
                <thead className="table-dark">
                    <tr>
                        <th>Usuario</th>
                        <th>Ramal</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderDepartamento(Departamento)}
                </tbody>
            </table>
        )
    }

    renderDepartamento(Departamento) {
        if (Departamento === "Laboratório") {
            return this.renderRowsLabo()
        }
        if (Departamento === "ADM") {
            return this.renderRowsADM()
        }
        if (Departamento === "Comercial") {
            return this.renderRowsComercial()
        }
        if (Departamento === "Diretoria") {
            return this.renderRowsDiretoria()
        }
        if (Departamento === "Gerência") {
            return this.renderRowsGerencia()
        }
    }

    renderRowsLabo() {
        return this.state.RamalLabo.map(Ramal => {
            return (
                <tr key={(Ramal.id)}>
                    <td>{Ramal.Usuario}</td>
                    <td>{Ramal.Ramal}</td>
                </tr>
            )
        })
    }

    renderRowsComercial() {
        return this.state.RamalComercial.map(Ramal => {
            return (
                <tr key={(Ramal.id)}>
                    <td>{Ramal.Usuario}</td>
                    <td>{Ramal.Ramal}</td>
                </tr>
            )
        })
    }

    renderRowsDiretoria() {
        return this.state.RamalDiretoria.map(Ramal => {
            return (
                <tr key={(Ramal.id)}>
                    <td>{Ramal.Usuario}</td>
                    <td>{Ramal.Ramal}</td>
                </tr>
            )
        })
    }

    renderRowsGerencia() {
        return this.state.RamalGerencia.map(Ramal => {
            return (
                <tr key={(Ramal.id)}>
                    <td>{Ramal.Usuario}</td>
                    <td>{Ramal.Ramal}</td>
                </tr>
            )
        })
    }

    renderRowsADM() {
        return this.state.RamalADM.map(Ramal => {
            return (
                <tr key={(Ramal.id)}>
                    <td>{Ramal.Usuario} - {Ramal.Departamento}</td>
                    <td>{Ramal.Ramal}</td>
                </tr>
            )
        })
    }


    render() {
        return (
            <Main {...headerProps}>
                <div className="comtainer-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <div className="nav-link active bg-dark border-dark" aria-current="page">
                                    <span className='display-6 fw-bold  text-light p-2'> Sistemas </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-3 d-flex justify-content-center">
                            <a className='btn btn-primary' href="https://app2.cosmoserp.com/zhaz/" target="_blank"> <span className='fw-bold h2'> Cosmos </span> </a>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <a className='btn btn-primary' href="http://192.168.15.199:3000" target="_blank"> <span className='fw-bold h2'> Painel OS </span> </a>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <a className='btn btn-primary' href="http://192.168.15.199:8080/intranet/login-2-2/" target="_blank"> <span className='fw-bold h2'> Intranet </span> </a>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <a className='btn btn-primary' href="http://192.168.15.199:3001" target="_blank"> <span className='fw-bold h2'> Sala Reunião </span> </a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <div className="nav-link active bg-dark border-dark" aria-current="page">
                                    <span className='display-6 fw-bold  text-light p-2'> Setores </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/DiretoriaLab" className='btn btn-success'><span className='fw-bold h2'> Diretoria </span></Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/GerenciaLab" className='btn btn-success'><span className='fw-bold h2'> Gerência </span></Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/Atividade" className='btn btn-success'><span className='fw-bold h2'> Laboratório </span></Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link to="/PerfilUsuario" className='btn btn-success'><span className='fw-bold h2'> Usuário </span></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <div className="nav-link active bg-dark border-dark" aria-current="page">
                                    <span className='display-6 fw-bold  text-light p-2'> Ramais </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row my-4 d-flex justify-content-end">
                        <div className="col-3 d-flex justify-content-end">
                            <Link to="/Ramais" className='btn btn-warning'> <span className=' h3 rounded p-2 fw-bold'> <i className='fa fa-plus'></i> </span></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 d-flex justify-content-center">
                            <ModalRamal nomeBotao="Comercial" corModal="secondary"
                                Relatorio={this.renderTable("Comercial")}
                             />
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <ModalRamal nomeBotao="ADM" corModal="secondary"
                                Relatorio={this.renderTable("ADM")} />
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <ModalRamal nomeBotao="Laboratório" corModal="secondary"
                                Relatorio={this.renderTable("Laboratório")} />
                        </div>
                    </div>
                    <div className="row mt-5 d-flex justify-content-around">
                        <div className="col-4 d-flex justify-content-center">
                            <ModalRamal nomeBotao="Diretoria" corModal="secondary"
                                Relatorio={this.renderTable("Diretoria")} />
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <ModalRamal nomeBotao="Gerência" corModal="secondary"
                                Relatorio={this.renderTable("Gerência")} />
                        </div>
                    </div>

                </div>
            </Main>
        )
    }
}