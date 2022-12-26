import React from 'react';
import axios from 'axios';
import ModalAtendimento from "../Modal/Modal.Atividade";
import Url from '../Url/Url';

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import $ from 'jquery';

const initialState = {
    Atividade: {
        Data: data(),
        OS: '',
        Cliente: '',
        Equipamento: '',
        Modelo: '',
        NS: '',
        Servico: '',
        Classificacao: '',
        Observacao: '',
        Status: '',
        Tecnico: localStorage.usuario
    },
    list: []
}

const banco = "Geral";

const baseUrl = Url(banco);

function data() {
    let da = new Date();
    return da
}

export default class Tabela extends React.Component {

    state = { ...initialState }


    componentWillMount() {
        this.retornoTabela()

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
    }

    async retornoTabela() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoNome = []

        for (let i = 0; i < tabelaNome.length; i++) {
            if (localStorage.usuario == tabelaNome[i].Tecnico) {
                dadoNome.push({
                    id: tabelaNome[i].id,
                    Data: this.dataCerta(tabelaNome[i].Data),
                    OS: tabelaNome[i].OS,
                    Cliente: tabelaNome[i].Cliente,
                    Equipamento: tabelaNome[i].Equipamento,
                    Modelo: tabelaNome[i].Modelo,
                    NS: tabelaNome[i].NS,
                    Servico: tabelaNome[i].Servico,
                    Classificacao: tabelaNome[i].Classificacao,
                    Observacao: tabelaNome[i].Observacao,
                    Status: tabelaNome[i].Status
                })
            }
        }

        return this.setState({ list: dadoNome })
    }


    dataCerta(dia) {
        const dt = new Date(dia).toLocaleDateString();
        return dt
    }



    confirmar(Atividade) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(Atividade)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })

    }

    remove(Atividade) {
        axios.delete(`${baseUrl}/${Atividade.id}`)
            .then(resp => {
                const list = this.getUpdatedList(Atividade, false)
                this.setState({ list })
            })
    }

    clear() {
        this.setState({ Atividade: initialState.Atividade })
    }

    updateField(event) {
        const Atividade = { ...this.state.Atividade }
        Atividade[event.target.name] = event.target.value
        this.setState({ Atividade })
    }

    save() {
        const Atividade = this.state.Atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
        axios[method](url, Atividade)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ Atividade: initialState.Atividade, list })
            })
    }


    getUpdatedList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.unshift(Atividade)
        return list
    }

    formulario() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>OS: </label>
                            <input type="text" className="form-control"
                                name="OS"
                                value={this.state.Atividade.OS}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a OS..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cliente: </label>
                            <input type="text" className="form-control"
                                name="Cliente"
                                value={this.state.Atividade.Cliente}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Cliente..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Equipamento</label>
                            <select class="form-select" aria-label="Default select example"
                                name="Equipamento"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Equipamento}>
                                <option selected>Selecione o Equipamento</option>
                                <option>Coletor de Dados</option>
                                <option>Leitor de Dados</option>
                                <option>Busca Preço</option>
                                <option>Impressora Térmica</option>
                                <option>Carregador de 4 Posições</option>
                                <option>Carregador de 5 Posições</option>
                                <option>Carregador de 6 Posições</option>
                                <option>Berço de Comunicação</option>
                                <option>Fonte de Alimentação</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Modelo</label>
                            <input type="text" className="form-control"
                                name="Modelo"
                                value={this.state.Atividade.Modelo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o modelo..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número de Serie</label>
                            <input type="text" className="form-control"
                                name="NS"
                                value={this.state.Atividade.NS}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Numero de Serie..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Serviço</label>
                            <select class="form-select" aria-label="Default select example"
                                name="Servico"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Servico}>
                                <option selected>Selecione o Serviço</option>
                                <option>Chamado On-Site</option>
                                <option>Suporte Remoto</option>
                                <option>Laudo</option>
                                <option>Manutenção Concluída</option>
                                <option>Revisão de Manutenção</option>
                                <option>Revisão de Venda</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Classificação</label>
                            <select class="form-select" aria-label="Default select example"
                                name="Classificacao"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Classificacao}>
                                <option selected>Selecione a Classificação</option>
                                <option>Desgaste de Uso</option>
                                <option>Defeito</option>
                                <option>Uso Indevido</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>Observação</label>
                            <textarea className="form-control"
                                name="Observacao" rows="5"
                                value={this.state.Atividade.Observacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a Sua Observação..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Status</label>
                            <select class="form-select" aria-label="Default select example"
                                name="Status"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Status}>
                                <option selected>Selecione a Status</option>
                                <option>Pronto</option>
                                <option>Enviar p/Zhaz</option>
                                <option>Excede - Aguardando Aprovação</option>
                                <option>Aguardando Aprovação</option>
                                <option>Reprovado</option>
                                <option>Revisado</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary mx-2"
                            onClick={e => this.save(e)}
                        >
                            Salvar
                        </button>

                        <button className="btn btn-danger"
                            onClick={e => this.clear(e)}
                        >
                            Limpar
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabela">
                <thead className="table-dark">
                    <tr>
                        <th>Data</th>
                        <th>OS</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Modelo</th>
                        <th>NS</th>
                        <th>Serviço</th>
                        <th>Classificação</th>
                        <th>Status</th>
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
        return this.state.list.map(Atividade => {
            return (
                <tr key={(Atividade.id)}>
                    <td>{Atividade.Data}</td>
                    <td>{Atividade.OS}</td>
                    <td>{Atividade.Cliente}</td>
                    <td>{Atividade.Equipamento}</td>
                    <td>{Atividade.Modelo}</td>
                    <td>{Atividade.NS}</td>
                    <td>{Atividade.Servico}</td>
                    <td>{Atividade.Classificacao}</td>
                    <td>{Atividade.Status}</td>
                    <td className="d-flex justify-content-around">
                        {/* <button className='btn btn-warning mx-1'
                        onClick={() => this.load(atividade)}>
                        <i className="fa fa-pencil"></i>
                    </button> */}
                        <ModalAtendimento corModal="warning" Ititulo="expand" nome={this.renderI()}
                            relatorio={this.formulario()} load={this.renderButtonPencil(Atividade)} />
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(Atividade)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }

    load(Atividade) {
        this.setState({ Atividade })
    }

    renderI() {
        return (
            <i className="fa fa-address-card fa-3x" />
        )
    }

    renderButtonPencil(Atividade) {
        return (
            <button className="btn btn-warning" onClick={() => this.load(Atividade)}>
                <i className="fa fa-pencil"></i>
            </button>
        )
    }

    render() {
        return (
            <div>
                <div className='mb-3'>
                    <i className="fa fa-table fa-4x"></i>
                </div>
                <div>
                    {this.renderTable()}
                </div>
            </div>
        )

    }
}