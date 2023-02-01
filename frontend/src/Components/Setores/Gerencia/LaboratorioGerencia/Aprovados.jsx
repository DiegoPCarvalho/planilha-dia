import React from "react";
import axios from 'axios';
import Url from '../../../Url/Url';
import $ from 'jquery';
import CardEmAnalise from '../../../Card/CardEmAnalise';

const initialState = {
    totalDisponivel: [100],
    totalGasto: [0],
    totalReal: [0],
    list: []
}

const baseUrl = Url("CentroCustoRecurso");
const baseUrl2 = Url("CentroCustoSolicitacao");

export default class AprovadosLab extends React.Component{

    state = { ...initialState }

    componentWillMount() {
        this.consultaBancoDepartamento()
        this.buscarValorTotalReal()
        this.Tempo()
    }

    Tempo() {
        setTimeout(() => {
            this.mudarStatus()
            this.consultarOrcamento()
        }, 100);
    }

    mudarStatus() {
        $(document).ready(function () {
            $(".Aprov").each(function () {
                if (($(this).text() === "Em Análise")) {
                    $(this).addClass('bg-secondary badge');

                } else if ($(this).text() === "Reprovado") {
                    $(this).addClass('bg-danger badge');

                } else if ($(this).text() === "Aprovado") {
                    $(this).addClass('bg-success badge');
                }
            });
            $('.Compras').each(function () {
                if ($(this).text() === 'Não') {
                    $(this).addClass('bg-danger badge')
                } else if ($(this).text() === 'Sim') {
                    $(this).addClass('bg-success badge')
                }
            })
        });

    }

    async consultaBancoDepartamento() {
        const tabelaNome = await axios(baseUrl2).then(resp => resp.data)
        let dadoSolicitacao = []


        for (let i = 0; i < tabelaNome.length; i++) {
            if ("Laborátorio" === tabelaNome[i].Departamento) {
                if ((tabelaNome[i].Finalizado === "Não") && (tabelaNome[i].AprovacaoGerenteLocal === "Aprovado")
                    && (tabelaNome[i].AprovacaoFinanceiro === "Em Análise")
                    && (tabelaNome[i].AprovacaoDiretoria === "Em Análise")) {
                    dadoSolicitacao.push({
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
            list: dadoSolicitacao
        })
    }


    cardDepartamento() {
        return this.state.list.map(Solicitar => {
            return (
                <div className="col-md-auto mb-4" >
                    <CardEmAnalise Nid={Solicitar.id}
                        nomeSolicitante={Solicitar.Usuario}
                        AprovGerenciaLocal={Solicitar.AprovacaoGerenteLocal}
                        AprovFinanceiro={Solicitar.AprovacaoFinanceiro}
                        AprovDiretoria={Solicitar.AprovacaoDiretoria}
                        Compras={Solicitar.Finalizado}
                    />
                </div>

            )
        })
    }

    async consultarOrcamento() {
        const tabelaNome = await axios(baseUrl2).then(resp => resp.data)
        let dadoOrcamento = []

        for (let i = 0; i < tabelaNome.length; i++) {
            if ("Laborátorio" === tabelaNome[i].Departamento) {
                if (tabelaNome[i].Finalizado === "Não") {
                    if ((tabelaNome[i].AprovacaoGerenteLocal === "Em Análise") || (tabelaNome[i].AprovacaoGerenteLocal === "Aprovado")) {
                        if ((tabelaNome[i].AprovacaoFinanceiro === "Em Análise") || (tabelaNome[i].AprovacaoFinanceiro === "Aprovado")) {
                            if ((tabelaNome[i].AprovacaoDiretoria === "Em Análise") || (tabelaNome[i].AprovacaoDiretoria === "Aprovado")) {
                                dadoOrcamento.push({
                                    ValorTotal: tabelaNome[i].ValorTotal,
                                })
                            }
                        }
                    }
                }
            }

        }

        const ValorTotal = Object.assign(dadoOrcamento)

        let total = 0

        for (let i = 0; i < ValorTotal.length; i++) {
            total += parseInt(ValorTotal[i].ValorTotal)
        }

        let Resultado = this.state.totalDisponivel * total

        let ResultadoGasto = Resultado / this.state.totalReal

        let ResultadoDisponivel = this.state.totalDisponivel - ResultadoGasto


        return this.setState({
            totalGasto: ResultadoGasto.toFixed(2),
            totalDisponivel: ResultadoDisponivel.toFixed(2)
        })

    }

    async buscarValorTotalReal() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)

        let totalReal = []

        for (let i = 0; i < tabelaNome.length; i++) {
            if (localStorage.departamento === tabelaNome[i].Departamento) {
                totalReal.push({
                    Recurso: tabelaNome[i].Recurso
                })
            }
        }

        const totalObjReal = Object.assign(totalReal)



        return this.setState({
            totalReal: totalObjReal[0].Recurso
        })
    }

    render(){
        return(
            <div className="container-fluid">
               <div className="row mt-2 d-flex justify-content-center">
                    <div className="col-5">
                        <h3 className='bg-dark text-light fw-bold p-2 rounded d-flex justify-content-center'>Aprovados</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row my-3 d-flex justify-content-center ">
                            <div className="col-6 col-md-3 d-flex flex-column justify-content-center bg-success p-2 text-light rounded">
                                <h1 className='fw-bold d-flex justify-content-center mb-3'>Orçamento</h1>
                                <p className='h3 d-flex justify-content-center'>Disponivel: {this.state.totalDisponivel}%</p>
                                <p className='h4 d-flex justify-content-center'>Gasto: {this.state.totalGasto}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row row-cols-auto mt-4'>
                    {this.cardDepartamento()}
                </div>
            </div>
        )
    }
}