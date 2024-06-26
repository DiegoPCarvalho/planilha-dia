import React from 'react';
import axios from 'axios';
import Url from '../../Url/Url';
import carregando from '../../../Assets/gifs/carregar.gif'
import $ from 'jquery';


const initialState = {
    list: [],
    listTec: [],
    statusKin: 0,
    QTDE: 0,
    Filtro: {
        Mes: 'Todos',
        Ano: 'Todos'
    },
    carregando: false,
    pesquisar: false,
    mudarTela: 'table',
    disabled: false,
    nomeBotao: 'Buscar'
}


const baseUrl = Url("VHL");


export default class TabelaAntiga extends React.Component {

    state = { ...initialState }


    pesquisa() {
        setTimeout(() => {
            $('#tabelaGeral').dataTable({
                language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                dom: 'Bfrtip',
                buttons: [
                    'csv', 'excel', 'print'
                ]
            });
        }, 1000);
    }

    retornoTabela(mes, ano) {
        this.setState({ carregando: true })
        if ((mes === "Todos") && (ano !== "Todos")) {
            axios(baseUrl).then(resp => {
                const tabelaNome = resp.data
                let dadoNome = []
                let qtd = []

                tabelaNome.map(registro => {
                    if (+ano === registro.Ano) {
                        dadoNome.push({ ...registro })
                        qtd.push(+registro.QTDE)
                    }
                })

                const QTDE = qtd.reduce((acul, ele) => acul + ele)

                return this.setState({
                    list: dadoNome,
                    carregando: false,
                    pesquisar: true,
                    disabled: true,
                    QTDE
                })
            })
        } else
            if ((mes !== "Todos") && (ano !== "Todos")) {
                axios(baseUrl).then(resp => {
                    const tabelaNome = resp.data
                    let dadoNome = []
                    let qtd = []

                    tabelaNome.map(registro => {
                        if ((+mes === registro.Mes) && (+ano === registro.Ano)) {
                            dadoNome.push({ ...registro })
                            qtd.push(+registro.QTDE)
                        }
                    })

                    const QTDE = qtd.reduce((acul, ele) => acul + ele)

                    return this.setState({
                        list: dadoNome,
                        carregando: false,
                        pesquisar: true,
                        disabled: true,
                        QTDE
                    })
                })
            }

            return this.setState({ carregando: false })
    }

    formataData(dataItem) {
        var dataF = dataItem.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1');

        return dataF
    }


    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabelaGeral">
                <thead className="table-dark">
                    <tr>
                        <th>Index</th>
                        <th>Data</th>
                        <th>Pedido</th>
                        <th>Cliente</th>
                        <th>Serviço</th>
                        <th>QTDE</th>
                        <th>Tecnico</th>
                        <th>Equip.</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    updateField(event) {
        const Filtro = { ...this.state.Filtro }
        Filtro[event.target.name] = event.target.value
        this.setState({ Filtro })
    }

    renderRows() {
        return this.state.carregando === true ?
            (
                <div>
                    <img src={carregando} className='w-50 h-50' />
                </div>
            ) : this.state.list.map(registro => {
                return (
                    <tr key={(registro.id)}>
                        <td>{registro.id}</td>
                        <td>{this.formataData(registro.Data)}</td>
                        <td>{registro.Pedido}</td>
                        <td>{registro.Cliente}</td>
                        <td>{registro.Servico}</td>
                        <td>{registro.QTDE}</td>
                        <td>{registro.Tecnico}</td>
                        <td>{registro.Equipamento.map(reg => {
                            return (
                                <>
                                    <span style={{ fontSize: 10 }}>Modelo: {reg.Modelo} - NS: {reg.NS} - OBS: {reg.Observacao}</span>
                                    <br />
                                </>
                            )
                        })
                        }</td>
                    </tr>
                )
            })
    }

    selecioneBotao() {
        if (this.state.nomeBotao === 'Buscar') {
            this.chamarAno()
            this.setState({ nomeBotao: 'Reiniciar' })
        } else {
            this.setState({ mudarTela: 'test' })
        }
    }

    async chamarAno() {
        const { Ano, Mes } = this.state.Filtro

        if ((Ano !== "Todos") && (Mes === "Todos")) {
            await this.retornoTabela(Mes, Ano)
            this.pesquisa()
        } else
        if ((Ano !== "Todos") && (Mes !== "Todos")) {
           await this.retornoTabela(Mes, Ano)
            this.pesquisa()
        }
    }

    render() {
        return this.state.mudarTela === 'table' ? (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-address-card fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.form}></i>
                            <i className='fa fa-arrow-left mx-3 text-danger'></i>
                            <span className='fw-bold h5 mt-2'>Formulário</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-table fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.table}></i>
                            <i className='fa fa-arrow-left mx-3 text-danger'></i>
                            <span className='fw-bold h5 mt-2'>Tabela</span>
                        </div>
                    </div>
                    <div className="col-7 d-flex justify-content-between align-items-end">
                        <div className="col-1 d-flex justify-content-end align-items-end">
                            <i className="fa fa-search fa-2x text-danger" />
                        </div>
                        <div className="col-3 d-flex flex-column justify-content-start">
                            <label className='fw-bold d-flex justify-content-center h3'>Mês: </label>
                            <select
                                id="mes"
                                className="form-select"
                                name="Mes"
                                value={this.state.Filtro.Mes}
                                onChange={(e) => this.updateField(e)}
                                disabled={this.state.disabled}
                            >
                                <option selected>Todos</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <label className='fw-bold d-flex justify-content-center h3'>Ano: </label>
                            <select
                                id="ano"
                                className="form-select"
                                name="Ano"
                                value={this.state.Filtro.Ano}
                                onChange={(e) => this.updateField(e)}
                                disabled={this.state.disabled}
                            >
                                <option selected>Todos</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                        </div>
                        <div className="col-2 d-flex align-items-end">
                            <button className="btn btn-success fw-bold" onClick={() => this.selecioneBotao()}>{this.state.nomeBotao}</button>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <div className="bg-success p-3 rounded d-flex flex-column align-items-center fw-bold text-light">
                            <p className="h2 fw-bold">Qtd. Equip.</p>
                            <p className="h4">{this.state.QTDE}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.renderTable()}
                </div>
            </div>
        ) : (
            <div>
                {this.setState({
                    mudarTela: 'table',
                    disabled: false,
                    nomeBotao: 'Buscar',
                    list: [],
                    Filtro: initialState.Filtro,
                    QTDE: 0
                })}
            </div>
        )

    }
}