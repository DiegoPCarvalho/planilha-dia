import React from 'react';
import TabTables from '../Tabs/TabTables';
import Url from '../Url/Url';
import axios from 'axios';



import { Link } from 'react-router-dom';

const initialState = {
    listJaneiro: [],
    listFevereiro: [],
    listMarco: [],
    listAbril: [],
    listMaio: [],
    listJunho: [],
    listJulho: [],
    listAgosto: [],
    listSetembro: [],
    listOutubro: [],
    listNovembro: [],
    listDezembro: []
}

const baseUrl = Url("Geral");

export default class TabelaRegistroAntigo extends React.Component {

    state = { ...initialState }

    componentWillMount(){
        
    }
   

    async buscarDados(ano) {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoJaneiro = []
        let dadoFevereiro = []
        let dadoMarco = []
        let dadoAbril = []
        let dadoMaio = []
        let dadoJunho = []
        let dadoJulho = []
        let dadoAgosto = []
        let dadoSetembro = []
        let dadoOutubro = []
        let dadoNovembro = []
        let dadoDezembro = []

        // await this.formataData(tabelaNome)

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (1 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoJaneiro.push({
                    id: tabelaNome[i].id,
                    // Data: tabelaNome[i].Data,
                    // Dia: tabelaNome[i].Dia,
                    // Mes: tabelaNome[i].Mes,
                    // Ano: tabelaNome[i].Ano,
                    OS: tabelaNome[i].OS,
                    // Cliente: tabelaNome[i].Cliente,
                    // Equipamento: tabelaNome[i].Equipamento,
                    // Modelo: tabelaNome[i].Modelo,
                    // NS: tabelaNome[i].NS,
                    // Servico: tabelaNome[i].Servico,
                    // Placa: tabelaNome[i].Placa,
                    // Classificacao: tabelaNome[i].Classificacao,
                    // Contrato: tabelaNome[i].Contrato,
                    // Observacao: tabelaNome[i].Observacao,
                    // Tecnico: tabelaNome[i].Tecnico,
                    // Status: tabelaNome[i].Status
                })
            }
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (2 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoFevereiro.push({
                    id: tabelaNome[i].id,
                    // Data: tabelaNome[i].Data,
                    // Dia: tabelaNome[i].Dia,
                    // Mes: tabelaNome[i].Mes,
                    // Ano: tabelaNome[i].Ano,
                    OS: tabelaNome[i].OS,
                    // Cliente: tabelaNome[i].Cliente,
                    // Equipamento: tabelaNome[i].Equipamento,
                    // Modelo: tabelaNome[i].Modelo,
                    // NS: tabelaNome[i].NS,
                    // Servico: tabelaNome[i].Servico,
                    // Placa: tabelaNome[i].Placa,
                    // Classificacao: tabelaNome[i].Classificacao,
                    // Contrato: tabelaNome[i].Contrato,
                    // Observacao: tabelaNome[i].Observacao,
                    // Tecnico: tabelaNome[i].Tecnico,
                    // Status: tabelaNome[i].Status
                })
            }
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (3 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoMarco.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (4 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoAbril.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (5 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoMaio.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (6 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoJunho.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (7 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoJulho.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (8 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoAgosto.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (9 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoSetembro.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (10 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoOutubro.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (11 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoNovembro.push({
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && (12 === tabelaNome[i].Mes) && (ano === `${tabelaNome[i].Ano}`)) {
                dadoDezembro.push({
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

        // console.log(dadoJaneiro)
        return this.setState({
            listJaneiro: dadoJaneiro,
            listFevereiro: dadoFevereiro,
        //     // listMarco: dadoMarco,
        //     // listAbril: dadoAbril,
        //     // listMaio: dadoMaio,
        //     // listJunho: dadoJunho,
        //     // listJulho: dadoJulho,
        //     // listAgosto: dadoAgosto,
        //     // listSetembro: dadoSetembro,
        //     // listOutubro: dadoOutubro,
        //     // listNovembro: dadoNovembro,
        //     // listDezembro: dadoDezembro,
        })

    }

    
    chamarAno(){
        const ano = document.getElementById("ano").value;
        this.buscarDados(ano)
        this.pesquisar()
    }

    render() {
        return (
            <div>
                <div className='row d-flex justify-content-between mb-3'>
                    <div className='mb-3 col-3'>
                        <i className="fa fa-table fa-4x"></i>
                    </div>
                    <div className='col-3 d-flex justify-content-end align-items-center'>
                        <button className='btn btn-success p-2 d-flex align-items-center'>
                            <i className='fa-2x fa fa-table'></i>
                            <Link to="/Atividade/Tabela" style={{ textDecoration: "none", color: "white" }}>
                                <h4><b>Voltar</b></h4>
                            </Link>
                        </button>

                    </div>
                </div>
                <div className="row mt-4 mb-4 d-flex justify-content-center">
                    <div className="col-2 d-flex flex-row justify-content-end align-items-end">
                        <i className="fa fa-search fa-2x text-danger" />
                    </div>
                    <div className="col-2">
                        <label className='fw-bold d-flex justify-content-center h3'>Ano: </label>
                        <select id="ano" class="form-select" aria-label="Default select example">
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
                        <button className="btn btn-success fw-bold" onClick={() => this.chamarAno()}>Buscar</button>
                    </div>
                </div>
                <div className="row mt-5">
                   <TabTables listJan={this.state.listJaneiro}
                    listFev={this.state.listFevereiro} 
                    // listMar={this.state.listMarco}
                    // listAbr={this.state.listAbril}
                    // listMai={this.state.listMaio}
                    // listJun={this.state.listJunho}
                    // listJul={this.state.listJulho}
                    // listAgo={this.state.listAgosto}
                    // listSet={this.state.listSetembro}
                    // listOut={this.state.listOutubro}
                    // listNov={this.state.listNovembro}
                    // listDez={this.state.listDezembro}
                    />
                </div>
            </div>
        )
    }
}