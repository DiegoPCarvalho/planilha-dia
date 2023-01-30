import React from 'react';
import axios from 'axios';
import Url from '../../Url/Url';

import $ from 'jquery';

const banco = "CentroCustoSolicitacao";
const baseUrl = Url(banco);

const initialState = {
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
        AprovacaoGerenteLocal: 'Em Análise',
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


export default class Solicitar extends React.Component {

    state = { ...initialState }

    clear() {
        this.setState({ Solicitar: initialState.Solicitar })
    }

    updateField(event) {
        const Solicitar = { ...this.state.Solicitar }
        Solicitar[event.target.name] = event.target.value
        this.setState({ Solicitar })
    }

    save() {
        const Solicitar = this.state.Solicitar
        const method = Solicitar.id ? 'put' : 'post'
        const url = Solicitar.id ? `${baseUrl}/${Solicitar.id}` : baseUrl
        axios[method](url, Solicitar)
            .then(resp => {
                this.setState({ Solicitar: initialState.Solicitar })
            })
    }

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
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
            this.save()
            this.mensagemSalvo()
        }
    }

    formularioGeral() {
        return (
            <form className="row g-3 mt-4" action="javascript:myFunction(); return false;">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label>Tipo de Compra:</label>
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
                            <label>Fornecedor ID:</label>
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
                            <label>Razão Social:</label>
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
                            <label>Categoria:</label>
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
                            <label>Gerente: </label>
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
                        <label>Valor Unitário:</label>
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
                        <label>Quantidade:</label>
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
                        <label>Valor Total:</label>
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
                            <label>Data de Utilização:</label>
                            <input className='form-control'
                                type="date" name="DataUtilizacao" id="DataUtilizacao"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.DataUtilizacao}
                                required
                            />
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
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a sua Observação..." />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div class="alert-box success">Salvo com Sucesso!!!</div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-end">
                        <button className="btn btn-primary mx-2"
                            onClick={e => this.verificar(e)}
                        >
                            Salvar
                        </button>

                        <button className="btn btn-danger"
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
            <div className="container-fluid mt-3">
                <div className="row mt-2">
                    <div className="col-1">

                        <i class="fa fa-address-card-o fa-5x"></i>
                    </div>
                    <div className="col-11 justify-content-center d-flex align-items-center">
                        <div className="d-flex justify-content-center">
                            <h3 class="p-2 fw-bold bg-dark text-light rounded">Solicitar Material</h3>
                        </div>
                    </div>

                </div>
                <div id="Formulario" className='mt-3'>
                    {this.formularioGeral()}
                </div>
            </div>
        )
    }
}