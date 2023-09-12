import React from 'react';
import axios from 'axios';
import Url from '../../../Url/Url';


import $, { isEmptyObject } from 'jquery';

const initialState = {
    list: [],
    statusKin: 0,
    nomeBotao: "Buscar",
    disabled: false
}


const baseUrl = Url("Geral");

export default class TabelaGeral extends React.Component {

    state = { ...initialState }

    pesquisa() {
            $(document).ready(function () {
                setTimeout(() => {
                    $('#tabelaGeral').dataTable({
                        language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                        dom: 'Bfrtip',
                        buttons: [
                            'csv', 'excel', 'print'
                        ]
                    });
                }, 1000)
            });
        
    }


    async retornoTabela(mes, ano) {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoNome = []

        await this.formataData(tabelaNome)

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoNome.push({
                    id: tabelaNome[i].id,
                    Data: tabelaNome[i].Data,
                    Dia: tabelaNome[i].Dia,
                    Mes: tabelaNome[i].Mes,
                    Ano: tabelaNome[i].Ano,
                    OS: tabelaNome[i].OS,
                    Cliente: tabelaNome[i].Cliente,
                    Equipamento: tabelaNome[i].Equipamento,
                    Modelo: tabelaNome[i].Modelo,
                    NS: tabelaNome[i].NS,
                    Servico: tabelaNome[i].Servico,
                    Placa: tabelaNome[i].Placa,
                    Classificacao: tabelaNome[i].Classificacao,
                    Contrato: tabelaNome[i].Contrato,
                    Observacao: tabelaNome[i].Observacao,
                    Tecnico: tabelaNome[i].Tecnico,
                    Status: tabelaNome[i].Status
                })
            }
        }

        return this.setState({ list: dadoNome })
    }

    async formataData(dataItem) {
        for (var i = 0; i < dataItem.length; i++) {
            var dataA = dataItem[i];
            var dataF = await dataA.Data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1');
            dataA.Data = await dataF;
        }
    }

    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabelaGeral">
                <thead className="table-dark">
                    <tr>
                        <th>Index</th>
                        <th>Data</th>
                        <th>OS</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Serviço</th>
                        <th>Placa</th>
                        <th>Técnico</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }


    renderRows() {
        return this.state.list.map(Atividade => {
            return (
                <tr key={(Atividade.id)}>
                    <td>{Atividade.id}</td>
                    <td>{Atividade.Data}</td>
                    <td>{Atividade.OS}</td>
                    <td>{Atividade.Cliente}</td>
                    <td>{Atividade.Equipamento}</td>
                    <td>{Atividade.Servico}</td>
                    <td>{Atividade.Placa}</td>
                    <td>{Atividade.Tecnico}</td>
                </tr>
            )
        })
    }

    chamarAno() {
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        this.retornoTabela(mes, ano)

        if (this.state.statusKin === 0) {
            if ((ano !== "Todos") && (mes !== "Todos")) {
                this.pesquisa(this.state.disabled)
                return this.setState({
                    statusKin: 1,
                    nomeBotao: "Recarregar",
                    disabled: true
                })
            }
        } else if (this.state.statusKin === 1) {
            window.location.pathname = "/GerenciaLab/TabelaGeral"
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-table fa-4x"></i>
                    </div>
                    <div className="col-8 d-flex justify-content-around">
                        <div className="col-1 d-flex flex-row justify-content-start align-items-end">
                            <i className="fa fa-search fa-2x text-danger" />
                        </div>
                        <div className="col-3 d-flex flex-column justify-content-start">
                            <label className='fw-bold d-flex justify-content-center h3'>Mês: </label>
                            <select id="mes" class="form-select" aria-label="Default select example" disabled={this.state.disabled}>
                                <option selected disabled>Todos</option>
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
                            <select id="ano" class="form-select" aria-label="Default select example" disabled={this.state.disabled}>
                                <option selected disabled>Todos</option>
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
                            <button className="btn btn-success fw-bold" onClick={() => this.chamarAno()}>{this.state.nomeBotao}</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.renderTable()}
                </div>
            </div>
        )
    }
}