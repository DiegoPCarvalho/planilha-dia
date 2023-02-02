import React from 'react';
import ModalAtendimento from "../../Modal/Modal.Atividade";
import Url from '../../Url/Url';
import axios from 'axios';

import $ from 'jquery';


const baseUrl = Url("CentroCustoSolicitacao");

const initialState = {
    Solicitar: {
        Dia: '',
        Mes: '',
        Ano: '',
        TipoCompra: '',
        FornecedorID: '',
        RazaoSocial: '',
        Categoria: '',
        Departamento: '',
        Gerencia: '',
        ValorUni: '',
        Quantidade: '',
        ValorTotal: '',
        DataUtilizacao: '',
        Observacao: '',
        Usuario: '',
        FormaPagamento: '',
        opcaoPagamento: '',
        NParcelas: '',
        DataPagto: '',
        AprovacaoGerenteLocal: '',
        AprovacaoFinanceiro: '',
        AprovacaoDiretoria: '',
        Finalizado: ''
    },
    list: []
}

export default class FinalizadosLab extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.consultaBancoDepartamento()
        this.Tempo()
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

    Tempo() {
        setTimeout(() => {
            this.mudarStatus()
        }, 500);
    }

    mudarStatus() {
        $(document).ready(function () {
            $(".Aprov").each(function () {
                if (($(this).text() === "Em Análise")) {
                    $(this).addClass('bg-secondary text-light fw-bold');

                } else if ($(this).text() === "Reprovado") {
                    $(this).addClass('bg-danger text-light fw-bold');

                } else if ($(this).text() === "Aprovado") {
                    $(this).addClass('bg-success text-light fw-bold');
                }
            });
            $('.Compras').each(function () {
                if ($(this).text() === 'Não') {
                    $(this).addClass('bg-danger text-light fw-bold')
                } else if ($(this).text() === 'Sim') {
                    $(this).addClass('bg-success text-light fw-bold')
                }
            })
        });

    }

    async consultaBancoDepartamento() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoFinalizado = []


        for (let i = 0; i < tabelaNome.length; i++) {
            if (localStorage.departamento === tabelaNome[i].Departamento) {
                if ((tabelaNome[i].Finalizado === "Sim") || (tabelaNome[i].AprovacaoGerenteLocal === "Reprovado") || (tabelaNome[i].AprovacaoFinanceiro === "Reprovado") || (tabelaNome[i].AprovacaoDiretoria === "Reprovado")) {
                    dadoFinalizado.push({
                        id: tabelaNome[i].id,
                        Dia: tabelaNome[i].Dia,
                        Mes: tabelaNome[i].Mes,
                        Ano: tabelaNome[i].Ano,
                        TipoCompra: tabelaNome[i].TipoCompra,
                        FornecedorID: tabelaNome[i].FornecedorID,
                        RazaoSocial: tabelaNome[i].RazaoSocial,
                        Categoria: tabelaNome[i].Categoria,
                        Departamento: tabelaNome[i].Departamento,
                        Gerencia: tabelaNome[i].Gerencia,
                        ValorUni: tabelaNome[i].ValorUni,
                        Quantidade: tabelaNome[i].Quantidade,
                        ValorTotal: tabelaNome[i].ValorTotal,
                        DataUtilizacao: tabelaNome[i].DataUtilizacao,
                        Observacao: tabelaNome[i].Observacao,
                        Usuario: tabelaNome[i].Usuario,
                        FormaPagamento: tabelaNome[i].FormaPagamento,
                        opcaoPagamento: tabelaNome[i].opcaoPagamento,
                        NParcelas: tabelaNome[i].NParcelas,
                        DataPagto: tabelaNome[i].DataPagto,
                        AprovacaoGerenteLocal: tabelaNome[i].AprovacaoGerenteLocal,
                        AprovacaoFinanceiro: tabelaNome[i].AprovacaoFinanceiro,
                        AprovacaoDiretoria: tabelaNome[i].AprovacaoDiretoria,
                        Finalizado: tabelaNome[i].Finalizado

                    })
                }
            }

        }

        return this.setState({
            list: dadoFinalizado
        })
    }

    clear() {
        this.setState({ Solicitar: initialState.Solicitar })
    }

    load(Solicitar) {
        this.setState({ Solicitar })
    }

    renderButtonPencil(Solicitar) {
        return (
            <button className="btn btn-warning" onClick={() => this.load(Solicitar)}>
                <i className="fa fa-pencil"></i>
            </button>
        )
    }

    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabela">
                <thead className="table-dark">
                    <tr>
                        <th>Data</th>
                        <th>Nº</th>
                        <th>Usuario</th>
                        <th>Gerencia Local</th>
                        <th>Financeiro</th>
                        <th>Diretoria</th>
                        <th>Compras</th>
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
        return this.state.list.map(Solicitar => {
            return (
                <tr key={(Solicitar.id)}>
                    <td>{`${Solicitar.Dia} / ${Solicitar.Mes} / ${Solicitar.Ano}`}</td>
                    <td>{Solicitar.id}</td>
                    <td>{Solicitar.Usuario}</td>
                    <td className='Aprov'>{Solicitar.AprovacaoGerenteLocal}</td>
                    <td className='Aprov'>{Solicitar.AprovacaoFinanceiro}</td>
                    <td className='Aprov'>{Solicitar.AprovacaoDiretoria}</td>
                    <td className='Compras'>{Solicitar.Finalizado}</td>
                    {/* <td>{Atividade.Classificacao}</td>
                    <td>{Atividade.Status}</td> */}
                    <td className="d-flex justify-content-around">
                        {/* <button className='btn btn-warning mx-1'
                        onClick={() => this.load(atividade)}>
                        <i className="fa fa-pencil"></i>
                    </button> */}
                        <ModalAtendimento corModal="warning" Ititulo="expand"
                            nome={<i className="fa fa-address-card fa-2x" />}
                            relatorio={this.formularioGeral()}
                            load={this.renderButtonPencil(Solicitar)} />
                        {/* <button className="btn btn-danger mx-2"
                        onClick={() => this.confirmar(Atividade)}>
                        <i className="fa fa-trash"></i>
                    </button> */}

                    </td>
                </tr>
            )
        })
    }


    formularioGeral() {
        return (
            <form className="row g-3 mt-2" action="javascript:myFunction(); return false;">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Tipo de Compra:</label>
                            <input type="text" className='form-control'
                                disabled
                                name="TipoCompra"
                                value={this.state.Solicitar.TipoCompra} />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Fornecedor ID:</label>
                            <input type="text" className="form-control"
                                name="FornecedorID" id="FornecedorID"
                                value={this.state.Solicitar.FornecedorID}
                                disabled
                                required />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Razão Social:</label>
                            <input type="text" className="form-control"
                                name="RazaoSocial" id="RazaoSocial"
                                value={this.state.Solicitar.RazaoSocial}
                                disabled
                                required />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Categoria:</label>
                            <input class="form-control" aria-label="Default select example"
                                name="Categoria" id="Categoria"
                                disabled
                                value={this.state.Solicitar.Categoria}
                                required
                            />

                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Gerente: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="Gerencia" id="Gerencia"
                                disabled
                                value={this.state.Solicitar.Gerencia}
                                required
                            >
                                <option selected disabled value=""></option>
                                <option>Luanda Achcar</option>
                                <option>Thiago Ribeiro</option>
                                <option>Thiago Debs</option>
                                <option>Ingrid Barbosa</option>
                                <option>Douglas Altenfelder</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <label>Valor Unitário:</label>
                        <div className="input-group">
                            <span className="input-group-text bg-success fw-bold text-light" id="basic-addon1">R$</span>
                            <input id="ValorUni"
                                type="number"
                                className="form-control"
                                name="ValorUni"
                                placeholder="0,00"
                                value={this.state.Solicitar.ValorUni}
                                disabled
                                min="0.00" step="0.01"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <label>Quantidade:</label>
                        <div className="form-group">
                            <input id="Quantidade"
                                type="number"
                                className="form-control"
                                name="Quantidade"
                                placeholder="0"
                                value={this.state.Solicitar.Quantidade}
                                disabled
                                min="0" step="1"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <label>Valor Total:</label>
                        <div className="input-group">
                            <span className="input-group-text bg-success fw-bold text-light" id="basic-addon1">R$</span>
                            <input id="ValorTotal"
                                type="number"
                                className="form-control"
                                name="ValorTotal"
                                placeholder="0,00"
                                value={this.state.Solicitar.ValorTotal}
                                disabled
                                min="0.00" step="0.01"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Data de Utilização:</label>
                            <input className='form-control'
                                type="date" name="DataUtilizacao" id="DataUtilizacao"
                                disabled
                                value={this.state.Solicitar.DataUtilizacao}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Usuario:</label>
                            <input type="text"
                                className='form-control'
                                name='Usuario'
                                disabled
                                value={this.state.Solicitar.Usuario} />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Observação</label>
                            <textarea className="form-control"
                                name="Observacao" rows="5"
                                value={this.state.Solicitar.Observacao}
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="alert-box success">Salvo com Sucesso!!!</div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-end">

                        <button className="btn btn-danger fw-bold"
                            onClick={e => this.clear(e)}
                        >
                            Limpar
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="row mt-3">
                    <div className="col-1 mt-2">
                        <i className="fa fa-table fa-4x"></i>
                    </div>
                    <div className="col-11 d-flex justify-content-center">
                        <h3 className='bg-dark text-light fw-bold rounded p-2 d-flex justify-content-center align-items-center'> Solicitações Finalizadas </h3>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        {this.renderTable()}
                    </div>
                </div>
            </div>
        )
    }
}