import React from 'react';
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logoZhaz.png';

import { Link } from 'react-router-dom';

import axios from 'axios';
import Url from '../Url/Url';
import $ from 'jquery';

import './Ramal.css';


const headerProps = {
    icon: 'volume-control-phone',
    title: 'Ramais'
}

const initialState = {
    Ramal: {
        Departamento: '',
        Usuario: '',
        Ramal: ''
    },
    list: []
}


const baseUrl = Url("Ramal");


export default class Ramais extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        $(document).ready(function () {
            setTimeout(() => {
                $('#tabela').DataTable({
                    language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                    dom: 'Bfrtip',
                    buttons: [
                        'csv', 'excel', 'print'
                    ]
                });
            }, 100)
        });

        this.consultarBanco()
    }

    consultarBanco() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    }

    clear() {
        this.setState({ Ramal: initialState.Ramal })
    }

    updateField(event) {
        const Ramal = { ...this.state.Ramal }
        Ramal[event.target.name] = event.target.value
        this.setState({ Ramal })
    }

    save() {
        const Ramal = this.state.Ramal
        const method = Ramal.id ? 'put' : 'post'
        const url = Ramal.id ? `${baseUrl}/${Ramal.id}` : baseUrl
        axios[method](url, Ramal)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ Ramal: initialState.Ramal, list })
            })
    }

    getUpdatedList(Ramal, add = true) {
        const list = this.state.list.filter(a => a.id !== Ramal.id)
        if (add) list.unshift(Ramal)
        return list
    }

    load(Ramal) {
        this.setState({ Ramal })
    }

    verificar() {
        const ramal = document.getElementById("Ramal").value
        const depar_cad = document.getElementById("depar-cad").value;
        const usuario = document.getElementById("Usuario").value;

        if ((ramal === '') || (depar_cad === '...') || (usuario === '...')) {

        } else if ((ramal !== '') && (depar_cad !== "...") && (usuario !== '...')) {
            this.save()
            this.mensagemSalvo()
        }
    }

    formulario() {
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
                <div>
                    <div className="row mt-4">
                        <div className="col-6 col-md-3">
                            <label className='fw-bold'>Departamento:</label>
                            <select className="form-select" id="depar-cad"
                                name='Departamento'
                                required
                                value={this.state.Ramal.Departamento}
                                onChange={e => this.updateField(e)}
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
                        <div className="col-6 col-md-3">
                            <div className="form-group">
                                <label className='fw-bold'>Usuário: </label>
                                <input type="text" className="form-control"
                                    name="Usuario" id="Usuario"
                                    value={this.state.Ramal.Usuario}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Usuário..." required />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <label className='fw-bold'>Ramal:</label>
                            <div className="form-group">
                                <input id="Ramal"
                                    type="number"
                                    className="form-control"
                                    name="Ramal"
                                    value={this.state.Ramal.Ramal}
                                    onChange={e => this.updateField(e)}
                                    min="0" step="1"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-end">
                            <button onClick={e => this.verificar(e)} className="btn btn-success mx-2 fw-bold">Salvar</button>
                            <button onClick={e => this.clear(e)} className="btn btn-danger mx-1 fw-bold">Cancelar</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div class="alert-box success">Salvo com Sucesso!!!</div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabela">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Departamento</th>
                        <th>Usuario</th>
                        <th>Ramal</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(Ramal => {
            return (
                <tr key={(Ramal.id)}>
                    <td>{Ramal.id}</td>
                    <td>{Ramal.Departamento}</td>
                    <td>{Ramal.Usuario}</td>
                    <td>{Ramal.Ramal}</td>
                    <td className="d-flex justify-content-around">
                        <button className='btn btn-warning mx-1'
                            onClick={() => this.load(Ramal)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                    </td>
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
                        <div className="col-6 d-flex justify-content-end align-items-start">
                            <Link to="/pageHome" className='btn btn-danger'><span className='fw-bold h3'> Voltar </span></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className='mb-3'>
                            <i className="fa fa-phone-square fa-4x"></i>
                        </div>
                    </div>
                    <div>
                        {this.formulario()}
                    </div>
                    <div className='mt-4'>
                        {this.renderTable()}
                    </div>
                </div>
            </Main>
        )
    }
}