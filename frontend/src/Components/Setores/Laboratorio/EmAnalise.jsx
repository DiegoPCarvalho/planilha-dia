import React from 'react';
import axios from 'axios';
import Url from '../../Url/Url';
import $ from 'jquery';

import CardEmAnalise from '../../Card/CardEmAnalise';

const initialState = {
    totalDisponivel: [100],
    totalGasto: [0],
    totalReal: [0],
    Solicitar: {
        Dia: dia(),
        Mes: mes(),
        Ano: ano(),
        TipoCompra: '',
        FornecedorID: '',
        RazaoSocial: '',
        Categoria: '',
        Departamento: localStorage.departamento,
        Gerencia: '',
        ValorUni: '',
        Quantidade: '',
        ValorTotal: '',
        DataUtilizacao: '',
        Observacao: '',
        Usuario: localStorage.usuario,
        FormaPagamento: '',
        opcaoPagamento: '',
        NParcelas: '',
        DataPagto: '',
        AprovacaoGerenteLocal: 'Em Análse',
        AprovacaoFinanceiro: 'Em Análise',
        AprovacaoDiretoria: 'Em Análise',
        Finalizado: 'Não'
    },
    list: []
}

function mes() {
    let data = new Date();
    let mes = data.getMonth() + 1;
    return mes
}

function ano() {
    let data = new Date();
    let ano = data.getFullYear();
    return ano
}

function dia() {
    let data = new Date();
    let dia = data.getDate();

    return dia
}

const baseUrl = Url("CentroCustoRecurso");
const baseUrl2 = Url("CentroCustoSolicitacao");

export default class EmAnalise extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.buscarValorTotalReal()
        // this.mudarStatus()
        this.consultaBancoDepartamento()
        this.tempo()
    }

    tempo() {
        setInterval(() => {
            this.mudarStatus()
        }, 500)
    }

    mudarStatus() {
        // $(document).ready(function () {
        //     if ($(".AprovDiretoria").text() === "Em Análise") {
        //         $('.certoDire').addClass('bg-secondary');
        //         $('.certoDire').append('<i class="fa fa-minus" aria-hidden="true"></i>');
        //     } if ($(".AprovDiretoria").text() === "Reprovado") {
        //         $('.certoDire').addClass('bg-danger');
        //         $('.certoDire').append('<i class="fa fa-times" aria-hidden="true"></i>');
        //     } if ($(".AprovDiretoria").text() === "Aprovado") {
        //         $('.certoDire').addClass('bg-success');
        //         $('.certoDire').append('<i class="fa fa-check" aria-hidden="true"></i>');
        //     } if ($(".AprovGerencia").text() === "Em Análise") {
        //         $('.certoGeren').addClass('bg-secondary');
        //         $('.certoGeren').append('<i class="fa fa-minus" aria-hidden="true"></i>');
        //     } if ($(".AprovGerencia").text() === "Reprovado") {
        //         $('.certoGeren').addClass('bg-danger');
        //         $('.certoGeren').append('<i class="fa fa-times" aria-hidden="true"></i>');
        //     } if ($(".AprovGerencia").text() === "Aprovado") {
        //         $('.certoGeren').addClass('bg-success');
        //         $('.certoGeren').append('<i class="fa fa-check" aria-hidden="true"></i>');
        //     } if ($(".AprovFinanceiro").text() === "Em Análise") {
        //         $('.certoFinan').addClass('bg-secondary');
        //         $('.certoFinan').append('<i class="fa fa-minus" aria-hidden="true"></i>');
        //     } if ($(".AprovFinanceiro").text() === "Reprovado") {
        //         $('.certoFinan').addClass('bg-danger');
        //         $('.certoFinan').append('<i class="fa fa-times" aria-hidden="true"></i>');
        //     } if ($(".AprovFinanceiro").text() === "Aprovado") {
        //         $('.certoFinan').addClass('bg-success');
        //         $('.certoFinan').append('<i class="fa fa-check" aria-hidden="true"></i>');
        //     }
        // });

        $(document).ready(function () {          
            $(".Aprov").each(function () {
                if (($(this).text() === "Em Análise")) {
                    $(this).addClass('bg-secondary badge');

                }else if ($(this).text() === "Reprovado") {
                    $(this).addClass('bg-danger badge');

                }else if ($(this).text() === "Aprovado") {
                    $(this).addClass('bg-success badge');
                }
            });
            $('.Compras').each(function(){
                if($(this).text() === 'Não'){
                    $(this).addClass('bg-danger badge')
                }else if($(this).text() === 'Sim'){
                    $(this).addClass('bg-success badge')
                }
            })
        });

    }

    load(Solicitar) {
        this.setState({ Solicitar })
    }

    async consultaBancoDepartamento() {
        const tabelaNome = await axios(baseUrl2).then(resp => resp.data)
        let dadoSolicitacao = []


        for (let i = 0; i < tabelaNome.length; i++) {
            if (localStorage.departamento === tabelaNome[i].Departamento) {
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

        return this.setState({ list: dadoSolicitacao })
    }

    cardDepartamento() {
        return this.state.list.map(Solicitar => {
            return (
                <div className="col-md-auto mb-4" >
                    <CardEmAnalise nomeSolicitante={Solicitar.Usuario}
                        AprovGerenciaLocal={Solicitar.AprovacaoGerenteLocal}
                        AprovFinanceiro={Solicitar.AprovacaoFinanceiro}
                        AprovDiretoria={Solicitar.AprovacaoDiretoria}
                        Compras={Solicitar.Finalizado}
                    />
                </div>

            )
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

    clear() {
        this.setState({ usuario: initialState.usuario })
    }

    render() {
        return (
            <div className="content-fluid mt-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <h3 className='bg-dark text-light fw-bold p-2 rounded d-flex justify-content-center'>Em Análise</h3>
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
                <div className="row row-cols-auto mt-4">
                    {this.cardDepartamento()}
                </div>
                {/* <div className="row">
                    <div className="col-3">
                        <CardEmAnalise nomeSolicitante="Diego Carvalho" AprovDiretoria="Reprovado" AprovFinanceiro="Em Análise" AprovGerencia="Aprovado" />
                    </div>
                </div> */}
            </div>
        )
    }
}