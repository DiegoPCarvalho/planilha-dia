import React from 'react';
import axios from 'axios';
import Url from '../../../Url/Url';


import $ from 'jquery';

const initialState = {
    list: []
}



const baseUrl = Url("Geral");

export default class TabelaGeral extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.retornoTabela()

        $(document).ready(function () {
            setTimeout(() => {
                $('#tabela').DataTable({
                    language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                    dom: 'Bfrtip',
                    buttons: [
                        'csv', 'excel', 'print'
                    ]
                });
            }, 1000)
        });
    }

    async retornoTabela() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoNome = []

        await this.formataData(tabelaNome)


        for (let i = 0; i < tabelaNome.length; i++) {
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

        return this.setState({ list: dadoNome })
    }

    async formataData(dataItem){
        for (var i = 0; i < dataItem.length; i++) {
            var dataA = dataItem[i];
            var dataF = await dataA.Data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1');
            dataA.Data = await dataF;
        }
    }

    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabela">
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


    render() {
        return (
            <div className="container-fluid">
                <div className='mb-3'>
                    <i className="fa fa-table fa-4x"></i>
                </div>
                <div>
                    {this.renderTable()}
                </div>
            </div>
        )
    }
}