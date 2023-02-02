import React from 'react';
import ModalAtendimento from "../../../Modal/Modal.Atividade";
import Url from '../../../Url/Url';
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

export default class FinalizadosSet extends React.Component {

    state = { ...initialState }

    
    validacao(){
        if (localStorage.AdmFinanceiro === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }

    componentWillMount() {
        this.consultaBancoDepartamento()
        this.Tempo()
        this.validacao()
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
                        <th>Departamento</th>
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
                    <td>{Solicitar.Departamento}</td>
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
                            <label className='fw-bold'>Tipo de Compra:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="TipoCompra" id="TipoCompra"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.TipoCompra}
                                required
                                disabled
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
                                required
                                disabled
                            />
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
                                required
                                disabled
                            />
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className="fw-bold">Forma Pagamento:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="FormaPagamento" id="FormaPagamento"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.FormaPagamento}
                                required
                                disabled
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Cartão de Crédito</option>
                                <option>Boleto</option>
                                <option>Dinheiro</option>
                                <option>Transferência</option>
                                <option>Pix</option>
                                <option>DOC</option>
                                <option>TED</option>
                                <option>Cartão Pré Pago</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className="fw-bold">Opção Pagamento:</label>
                            <select class="form-select" aria-label="Default select example"
                                name="opcaoPagamento" id="opcaoPagamento"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.opcaoPagamento}
                                required
                                disabled
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>À Vista</option>
                                <option>À Prazo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-md-2">
                        <div className="form-group">
                            <label className="fw-bold">Nª Parcelas</label>
                            <select class="form-select" aria-label="Default select example"
                                name="NParcelas" id="NParcelas"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.NParcelas}
                                required
                                disabled
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>+10</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Data pagamento:</label>
                            <input className='form-control'
                                type="date" name="DataPagto" id="DataPagto"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.DataPagto}
                                required
                                disabled
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <label className="fw-bold">Comprado: </label>
                            <select class="form-select" aria-label="Default select example"
                                name="Finalizado" id="Finalizado"
                                onChange={e => this.updateField(e)}
                                value={this.state.Solicitar.Finalizado}
                                required
                                disabled
                            >
                                <option selected disabled value="">Selecione</option>
                                <option>Sim</option>
                                <option>Não</option>
                            </select>
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
                                placeholder="Digite a sua Observação..."
                                disabled />
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
            <div className="container-fluid">
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