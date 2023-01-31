import React from 'react';
import ModalAtendimento from "../../Modal/Modal.Atividade";
import Url from '../../Url/Url';
import axios from 'axios';

import { confirmAlert } from "react-confirm-alert";
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
                    $(this).addClass('table-secondary fw-bold');

                } else if ($(this).text() === "Reprovado") {
                    $(this).addClass('table-danger fw-bold');

                } else if ($(this).text() === "Aprovado") {
                    $(this).addClass('table-success fw-bold');
                }
            });
            $('.Compras').each(function () {
                if ($(this).text() === 'Não') {
                    $(this).addClass('table-danger fw-bold')
                } else if ($(this).text() === 'Sim') {
                    $(this).addClass('table-success fw-bold')
                }
            })
        });

    }

    async consultaBancoDepartamento() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoFinalizado = []


        for (let i = 0; i < tabelaNome.length; i++) {
            if (localStorage.departamento === tabelaNome[i].Departamento) {
                if (tabelaNome[i].Finalizado === "Sim") {
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
                        <ModalAtendimento corModal="warning" Ititulo="expand" nome={<i className="fa fa-address-card fa-3x" />}
                        // relatorio={this.formulario()} 
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

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 mt-2">
                        <i className="fa fa-table fa-4x"></i>
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