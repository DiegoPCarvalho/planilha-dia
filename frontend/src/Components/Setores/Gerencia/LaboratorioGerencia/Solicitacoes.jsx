import React from 'react';
import axios from 'axios';
import Url from '../../../Url/Url';
import $ from 'jquery';
import ModalAtendimento from "../../../Modal/Modal.Atividade";

import CardEmAnalise from '../../../Card/CardEmAnalise';

const initialState = {
    totalDisponivel: [100],
    totalGasto: [0],
    totalReal: [0],
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


const baseUrl = Url("CentroCustoRecurso");
const baseUrl2 = Url("CentroCustoSolicitacao");

export default class SolicitacoesLab extends React.Component {

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

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    }

    updateField(event) {
        const Solicitar = { ...this.state.Solicitar }
        Solicitar[event.target.name] = event.target.value
        this.setState({ Solicitar })
    }

    save() {
        const Solicitar = this.state.Solicitar
        const method = Solicitar.id ? 'put' : 'post'
        const url = Solicitar.id ? `${baseUrl2}/${Solicitar.id}` : baseUrl2
        axios[method](url, Solicitar)
            .then(resp => {
                this.setState({ Solicitar: initialState.Solicitar })
                window.location.pathname = '/GerenciaLab/CentroCusto/Solicitacoes'
            })
    }

    verificar() {
        let TipoCompra = document.getElementById("TipoCompra").value;
        let FornecedorID = document.getElementById("FornecedorID").value;
        let RazaoSocial = document.getElementById("RazaoSocial").value;
        let Categoria = document.getElementById("Categoria").value;
        let Gerencia = document.getElementById("Gerencia").value;
        let ValorUni = document.getElementById("ValorUni").value;
        let Quantidade = document.getElementById("Quantidade").value;
        let ValorTotal = document.getElementById("ValorTotal").value;
        let DataUtilizacao = document.getElementById("DataUtilizacao").value;


        if ((TipoCompra === '') || (FornecedorID === '') || (RazaoSocial === '') || (Categoria === '')
            || (Gerencia === '') || (ValorTotal = '') || (DataUtilizacao === '') || (ValorUni === '') || (Quantidade === '')) {

        } else {
            if (this.state.totalDisponivel <= 0) {
                alert("Centro de Custo Estorado")
            }
            else {
                this.save()
                this.mensagemSalvo()
            }
        }
    }

    async consultaBancoDepartamento() {
        const tabelaNome = await axios(baseUrl2).then(resp => resp.data)
        let dadoSolicitacao = []


        for (let i = 0; i < tabelaNome.length; i++) {
            if ("Laborátorio" === tabelaNome[i].Departamento) {
                if ((tabelaNome[i].Finalizado === "Não") && (tabelaNome[i].AprovacaoGerenteLocal === "Em Análise")
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

    clear() {
        this.setState({ Solicitar: initialState.Solicitar })
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
                        alterar={
                            <ModalAtendimento corModal="warning" Ititulo="expand"
                                nome={<i className="fa fa-address-card fa-2x" />}
                                relatorio={this.formularioGeral()}
                                load={this.renderButtonPencil(Solicitar)} />
                        }
                    />
                </div>

            )
        })
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

    getUpdatedList(Solicitar, add = true) {
        const list = this.state.list.filter(a => a.id !== Solicitar.id)
        if (add) list.unshift(Solicitar)
        return list
    }


    formularioGeral() {
        return (
            <form className="row g-3 mt-2" action="javascript:myFunction(); return false;">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Tipo de Compra:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="TipoCompra" id="TipoCompra"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.TipoCompra}
                                required
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Fixo/Fixo</option>
                                <option>Fixo/Variavel</option>
                                <option>Avulso</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Fornecedor ID:</label>
                            <input type="text" className="form-control"
                                name="FornecedorID" id="FornecedorID"
                                value={this.state.Solicitar.FornecedorID}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite ..."
                                required />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Razão Social:</label>
                            <input type="text" className="form-control"
                                name="RazaoSocial" id="RazaoSocial"
                                value={this.state.Solicitar.RazaoSocial}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite ..."
                                required />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Categoria:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="Categoria" id="Categoria"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.Categoria}
                                required
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Compra Peças</option>
                                <option>Compra Vendas</option>
                                <option>Material para Embalagem</option>
                                <option>Insumos</option>
                                <option>Copa e Cozinha</option>
                                <option>Marketing</option>
                                <option>Cursos e Treinamento</option>
                                <option>Ativo Imobilizado</option>
                                <option>Manutenção Predial</option>
                                <option>Viagem/Hospedagem</option>
                                <option>Combustível</option>
                                <option>Logítica/Transportadora</option>
                                <option>Consultoria</option>
                                <option>Manutenção Frota</option>
                                <option>Serviços Terceiros - Operacional</option>
                                <option>Sistemas</option>
                                <option>Uniformes/EPI</option>
                                <option>Limpeza</option>
                                <option>Material de Escritório</option>
                                <option>Uber/99/Carros Aplicativos</option>
                                <option>Seguro Automóvel</option>
                                <option>Refeições</option>
                                <option>Confraternização</option>
                                <option>Ferramenta de Apoio Operacional</option>
                                <option>Estacionamento/Pedágios</option>
                                <option>Material de Informática</option>
                                <option>Higiene e Saude</option>
                                <option>Lazer e Recreação</option>
                                <option>Presentes e Brindes</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Gerente: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="Gerencia" id="Gerencia"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.Gerencia}
                                required
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Luanda Achcar</option>
                                <option>Thiago Ribeiro</option>
                                <option>Thiago Debs</option>
                                <option>Ingrid Barbosa</option>
                                <option>Douglas Altenfelder</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <label className='fw-bold'>Valor Unitário:</label>
                        <div className="input-group">
                            <span className="input-group-text bg-success fw-bold text-light" id="basic-addon1">R$</span>
                            <input id="ValorUni"
                                type="number"
                                className="form-control"
                                name="ValorUni"
                                placeholder="0,00"
                                value={this.state.Solicitar.ValorUni}
                                onChange={e => this.updateField(e)}
                                min="0.00" step="0.01"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <label className='fw-bold'>Quantidade:</label>
                        <div className="form-group">
                            <input id="Quantidade"
                                type="number"
                                className="form-control"
                                name="Quantidade"
                                placeholder="0"
                                value={this.state.Solicitar.Quantidade}
                                onChange={e => this.updateField(e)}
                                min="0" step="1"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <label className='fw-bold'>Valor Total:</label>
                        <div className="input-group">
                            <span className="input-group-text bg-success fw-bold text-light" id="basic-addon1">R$</span>
                            <input id="ValorTotal"
                                type="number"
                                className="form-control"
                                name="ValorTotal"
                                placeholder="0,00"
                                value={this.state.Solicitar.ValorTotal}
                                onChange={e => this.updateField(e)}
                                min="0.00" step="0.01"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Data de Utilização:</label>
                            <input className='form-control'
                                type="date" name="DataUtilizacao" id="DataUtilizacao"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.DataUtilizacao}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Usuario:</label>
                            <input type="text"
                                className='form-control'
                                name='Usuario'
                                disabled
                                value={this.state.Solicitar.Usuario} />
                        </div>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-6 col-md-4">
                        <div className="form-group">
                            <label className='fw-bold'>Aprovação Gerente:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="AprovacaoGerenteLocal" id="AprovacaoGerenteLocal"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.AprovacaoGerenteLocal}
                                required
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Aprovado</option>
                                <option>Em Análise</option>
                                <option>Reprovado</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="form-group">
                            <label className='fw-bold'>Aprovação Financeiro:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="AprovacaoFinanceiro" id="AprovacaoFinanceiro"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.AprovacaoFinanceiro}
                                required
                                disabled
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Aprovado</option>
                                <option>Em Análise</option>
                                <option>Reprovado</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="form-group">
                            <label className='fw-bold'>Aprovação Diretoria:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="AprovacaoDiretoria" id="AprovacaoDiretoria"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.AprovacaoDiretoria}
                                required
                                disabled
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Aprovado</option>
                                <option>Em Análise</option>
                                <option>Reprovado</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="form-group">
                            <label className='fw-bold'>Observação</label>
                            <textarea className="form-control"
                                name="Observacao" rows="5"
                                value={this.state.Solicitar.Observacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a sua Observação..." />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="alert-box success">Salvo com Sucesso!!!</div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-end">
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

    render() {
        return (
            <div className='container-fluid'>
                <div className="row mt-2 d-flex justify-content-center">
                    <div className="col-5">
                        <h3 className='bg-dark text-light fw-bold p-2 rounded d-flex justify-content-center'>Solicitações</h3>
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