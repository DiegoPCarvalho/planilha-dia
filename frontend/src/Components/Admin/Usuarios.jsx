import React from 'react';
import Url from '../Url/Url';
import axios from 'axios';

import { confirmAlert } from "react-confirm-alert";
import $ from 'jquery';

const initialState = {
    Usuario: {
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
    list: [],
    listDepar: []
}

const baseUrl = Url("LoginUsuario");
const baseUrl2 = Url("Departamento");

export default class Usuarios extends React.Component {
    state = { ...initialState }

    UNSAFE_componentWillMount() {
        this.pesquisar()
        this.buscarDepar()
        this.buscar()
    }

    buscar() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    buscarDepar() {
        axios(baseUrl2).then(resp => {
            this.setState({ listDepar: resp.data })
        })
    }

    clear() {
        this.setState({ Usuario: initialState.Usuario })
    }

    updateField(event) {
        const Usuario = { ...this.state.Usuario }
        Usuario[event.target.name] = event.target.value
        this.setState({ Usuario })
    }

    verificar() {
        //inputs
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const departamento = document.getElementById("departamento").value;

        
        if ((nome === '') || (email === '') || (senha === '') || (departamento === '')) {
               

        } else {

           this.save()
        }
    }

    pesquisar() {
        $(document).ready(function () {
            setTimeout(() => {
                $('#tabela-usuario').DataTable({
                    language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                    dom: 'Bfrtip',
                    buttons: [
                        'csv', 'excel', 'print'
                    ]
                });
            }, 2000)
        });
    }

    save() {
        const Usuario = this.state.Usuario
        const method = Usuario.id ? 'put' : 'post'
        const url = Usuario.id ? `${baseUrl}/${Usuario.id}` : baseUrl
        axios[method](url, Usuario)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ Usuario: initialState.Usuario, list })
            })
    }

    getUpdatedList(Usuario, add = true) {
        const list = this.state.list.filter(a => a.id !== Usuario.id)
        if (add) list.unshift(Usuario)
        return list
    }

    formulario() {
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Nome: </label>
                            <input type="text" className="form-control"
                                name="nomeCompleto" id="nome"
                                value={this.state.Usuario.nomeCompleto}
                                onChange={e => this.updateField(e)}
                                placeholder="Usuário ..."
                                required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>E-mail: </label>
                            <input type="text" className="form-control"
                                name="email" id="email"
                                value={this.state.Usuario.email}
                                onChange={e => this.updateField(e)}
                                placeholder="E-mail ..."
                                required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Senha: </label>
                            <input type="text" className="form-control"
                                name="senha" id="senha"
                                value={this.state.Usuario.senha}
                                onChange={e => this.updateField(e)}
                                placeholder="Senha ..."
                                required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Departamento: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="departamento" id="departamento"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.departamento}
                                required
                            >
                                <option selected value="">Selecione o Departamento</option>
                                {this.renderDepar()}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Admin</h3>
                </div>
                <div className='row'>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Dirt: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmDiretoria"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmDiretoria}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Gern: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmGerencia"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmGerencia}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Finc: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmFinanceiro"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmFinanceiro}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Comp: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmCompras"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmCompras}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Fisc: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmFiscal"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmFiscal}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>RH: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmRH"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmRH}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Est: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmEstoque"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmEstoque}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Exp: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmExpedicao"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmExpedicao}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Log: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmLogistica"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmLogistica}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Recp: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmRecpecao"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmRecpecao}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Labo: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmLaboratorio"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmLaboratorio}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Coml: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmComercial"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmComercial}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Geral: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmGeral"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmGeral}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label className='fw-bold'>Lider: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="AdmLider"
                                onChange={e => this.updateField(e)}
                                value={this.state.Usuario.AdmLider}
                                required
                            >
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-end mb-3">
                    <div className="col-6 col-md-6 d-flex justify-content-end align-items-end">
                        <button className="btn btn-primary mx-2 fw-bold"
                            onClick={e => this.verificar(e)}
                        >
                            Salvar
                        </button>

                        <button className="btn btn-danger fw-bold"
                            onClick={e => this.clear(e)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    load(Usuario) {
        this.setState({ Usuario })
    }

    remove(Usuario) {
        axios.delete(`${baseUrl}/${Usuario.id}`)
            .then(resp => {
                const list = this.getUpdatedList(Usuario, false)
                this.setState({ list })
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

    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabela-usuario">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Departamento</th>
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
        return this.state.list.map(Usuario => {
            return (
                <tr key={(Usuario.id)}>
                    <td>{Usuario.id}</td>
                    <td>{Usuario.nomeCompleto}</td>
                    <td>{Usuario.email}</td>
                    <td>{Usuario.departamento}</td>

                    <td className="d-flex justify-content-around">
                        <button className='btn btn-warning mx-1'
                            onClick={() => this.load(Usuario)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(Usuario)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderDepar(){
        return this.state.listDepar.map(Depar => {
            return (
                <option>{Depar.nome}</option>
            )
        })
    }

    render() {
        return (
            <div className='row mt-4'>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-4x fa-user-plus"></i>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.formulario()}
                </div>
                <div className="row mt-4">
                    {this.renderTable()}
                </div>
            </div>

        )
    }
}