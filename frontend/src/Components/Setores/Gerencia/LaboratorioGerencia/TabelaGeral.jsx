import React from 'react';
import axios from 'axios';
import Url from '../../../Url/Url';
import carregando from '../../../../Assets/gifs/carregar.gif'
import OverlayTabelaGeral from '../../../Overlay/OverlayTabelaGeral'
import moment from 'moment';

import $ from 'jquery';
import OverlayTempoTabelaGeral from '../../../Overlay/OverlayTempoTabelaGeral';

const initialState = {
    list: [],
    listTec: [],
    statusKin: 0,
    Filtro: {
        Tecnico: '',
        Mes: '',
        Ano: ''
    },
    carregando: false,
    pesquisar: false,
    mudarTela: 'table',
    disabled: false,
    nomeBotao: 'Buscar'
}


const baseUrl = Url("Geral");
const baseUrlTec = Url("LoginUsuario");

export default class TabelaGeral extends React.Component {

    state = { ...initialState }

    componentDidMount() {
        axios(baseUrlTec).then(resp => {
            const tabela = resp.data

            const lista = tabela.filter(registro => registro.departamento === "Laboratório")

            this.setState({ listTec: lista })
        })
    }

    pesquisa() {
        $('#tabelaGeral').dataTable({
            language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
            dom: 'Bfrtip',
            buttons: [
                'csv', 'excel', 'print'
            ]
        });
    }

    componentDidUpdate() {
        if (this.state.pesquisar === true) {
            this.pesquisa()
            this.setState({ pesquisar: false })
        }
    }

    async retornoTabela(tecnico, mes, ano) {
        this.setState({ carregando: true })
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoNome = []

        if ((tecnico === "Todos") && (mes === "Todos") && (ano !== "Todos")) {

            tabelaNome.map(registro => {
                if ((+ano === registro.Ano)) {
                    dadoNome.push({ ...registro })
                }
            })

            return this.setState({
                list: dadoNome,
                carregando: false,
                pesquisar: true,
                disabled: true
            })

        } else
            if ((tecnico === "Todos") && (mes !== "Todos") && (ano !== "Todos")) {

                tabelaNome.map(registro => {
                    if ((+mes === registro.Mes) && (+ano === registro.Ano)) {
                        dadoNome.push({ ...registro })
                    }
                })

                return this.setState({
                    list: dadoNome,
                    carregando: false,
                    pesquisar: true,
                    disabled: true
                })
            } else
                if ((tecnico !== "Todos") && (mes !== "Todos") && (ano !== "Todos")) {

                    tabelaNome.map(registro => {
                        if ((tecnico === registro.Tecnico) && (+mes === registro.Mes) && (+ano === registro.Ano)) {
                            dadoNome.push({ ...registro })
                        }
                    })

                    return this.setState({
                        list: dadoNome,
                        carregando: false,
                        pesquisar: true,
                        disabled: true
                    })
                }

        this.setState({ carregando: false })
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
                        <th className='col-1'>Data</th>
                        <th className="col-1">OS</th>
                        <th className='col-2'>Cliente</th>
                        <th className='col-2'>Serviço</th>
                        <th className='col-1'>T. Bruto</th>
                        <th className='col-1'>T. Liquido</th>
                        <th className='col-1'>T. Problema</th>
                        <th className='col-1'>Obs Problema</th>
                        <th className='col-1'>Info.</th>
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
            ) : this.state.list.map(Atividade => {
                return (
                    <tr key={(Atividade.id)} className={Atividade.Problema === "Sim" ? 'table-danger' : ''}>
                        <td>{this.formataData(Atividade.Data)}</td>
                        <td>{Atividade.OS}</td>
                        <td>{Atividade.Cliente}</td>
                        <td>{Atividade.Servico}</td>
                        <td>{this.tempo(Atividade.DataInicialBruto, Atividade.DataFinalBruto)}</td> 
                        <td>{Atividade.TempoLiquido}</td>
                        <td>{this.tempo(Atividade.DataInicialProblema, Atividade.DataFinalProblema)}</td>
                        <td>{Atividade.ProblemObs}</td>
                        <td className='mt-5'><OverlayTabelaGeral Obs={Atividade.Observacao} Qtda={Atividade.ContProblema} /></td>
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

    chamarAno() {
        const { Ano, Mes, Tecnico } = this.state.Filtro

        if ((Tecnico === "Todos") && (Ano !== "Todos") && (Mes === "Todos")) {
            this.retornoTabela(Tecnico, Mes, Ano)

        } else
            if ((Tecnico === "Todos") && (Ano !== "Todos") && (Mes !== "Todos")) {
                this.retornoTabela(Tecnico, Mes, Ano)
            } else
                if ((Tecnico !== "Todos") && (Ano !== "Todos") && (Mes !== "Todos")) {
                    this.retornoTabela(Tecnico, Mes, Ano)
                }
    }

    renderTec() {
        return this.state.listTec.map(tec => {
            return (
                <option>{tec.nomeCompleto}</option>
            )
        })
    }

    tempo(ini, fm) {
        let dtChegada = `${fm}`;
        let dtPartida = `${ini}`;

        let ms = moment(dtChegada, "YYYY-MM-DDTHH:mm:ssZ").diff(moment(dtPartida, "YYYY-MM-DDTHH:mm:ssZ"));
        let d = moment.duration(ms);
        let s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

        return s.match(/NaN/) ? "00:00:00" : s
    }

    render() {
        return this.state.mudarTela === 'table' ? (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-table fa-4x"></i>
                    </div>
                    <div className="col-9 d-flex justify-content-around">
                        <div className="col-1 d-flex flex-row justify-content-end align-items-end">
                            <i className="fa fa-search fa-2x text-danger" />
                        </div>
                        <div className="col-2 d-flex flex-column justify-content-start">
                            <label className='fw-bold d-flex justify-content-center h3'>Técnico: </label>
                            <select
                                id="tecnico"
                                name="Tecnico"
                                value={this.state.Filtro.Tecnico}
                                className="form-select"
                                onChange={(e) => this.updateField(e)}
                                disabled={this.state.disabled}
                            >
                                <option selected>Todos</option>
                                {this.renderTec()}
                            </select>
                        </div>
                        <div className="col-2 d-flex flex-column justify-content-start">
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
                        <div className="col-2">
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
                    Filtro: initialState.Filtro
                })}
            </div>
        )

    }
}