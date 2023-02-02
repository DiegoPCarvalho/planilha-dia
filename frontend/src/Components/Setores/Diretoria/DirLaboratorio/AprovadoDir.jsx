import React from 'react';
import axios from 'axios';
import Url from '../../../Url/Url';
import $ from 'jquery';
import CardEmAnalise from '../../../Card/CardEmAnalise';

const initialState = {
    list: []
}

const baseUrl2 = Url("CentroCustoSolicitacao");

export default class AprovadoDir extends React.Component{

    componentWillMount(){
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmDiretoria === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }

    state = { ...initialState }

    componentWillMount() {
        this.consultaBancoDepartamento()
        this.Tempo()
    }

    Tempo() {
        setTimeout(() => {
            this.mudarStatus()
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
                    && (tabelaNome[i].AprovacaoFinanceiro === "Aprovado")
                    && (tabelaNome[i].AprovacaoDiretoria === "Aprovado")) {
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
                        nomeDepartamento={Solicitar.Departamento}
                        AprovGerenciaLocal={Solicitar.AprovacaoGerenteLocal}
                        AprovFinanceiro={Solicitar.AprovacaoFinanceiro}
                        AprovDiretoria={Solicitar.AprovacaoDiretoria}
                        Compras={Solicitar.Finalizado}
                    />
                </div>

            )
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
                <div className='row row-cols-auto mt-4'>
                    {this.cardDepartamento()}
                </div>
            </div>
        )
    }
}