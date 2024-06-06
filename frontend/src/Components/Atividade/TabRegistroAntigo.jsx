import React from 'react';
import TabelaMeses from './TabelaMeses';
import Url from '../Url/Url';
import axios from 'axios';

const initialState = {
    listar: []
}

const baseUrl = Url("Geral");

export default class TabelaRegistroAntigo extends React.Component {

    state = { ...initialState }


    async buscarDados(mes, ano) {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dados = []

        await this.formataData(tabelaNome)

        if ((mes === "Todos") && (ano !== "Todos")) {
            for (let i = 0; i < tabelaNome.length; i++) {
                if ((localStorage.usuario === tabelaNome[i].Tecnico) && (ano === `${tabelaNome[i].Ano}`)) {
                    dados.push({
                        id: tabelaNome[i].id,
                        Data: tabelaNome[i].Data,
                        OS: tabelaNome[i].OS,
                        Cliente: tabelaNome[i].Cliente,
                        Equipamento: tabelaNome[i].Equipamento,
                        Modelo: tabelaNome[i].Modelo,
                        NS: tabelaNome[i].NS,
                        Servico: tabelaNome[i].Servico,
                    })
                }
            }

            return this.setState({ listar: dados })
        }

        if ((mes !== "Todos") && (ano !== "Todos")) {
            for (let i = 0; i < tabelaNome.length; i++) {
                if ((localStorage.usuario === tabelaNome[i].Tecnico) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                    dados.push({
                        id: tabelaNome[i].id,
                        Data: tabelaNome[i].Data,
                        OS: tabelaNome[i].OS,
                        Cliente: tabelaNome[i].Cliente,
                        Equipamento: tabelaNome[i].Equipamento,
                        Modelo: tabelaNome[i].Modelo,
                        NS: tabelaNome[i].NS,
                        Servico: tabelaNome[i].Servico,
                    })
                }
            }

            return this.setState({ listar: dados })
        }

    }


    chamarAno() {
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;


        if ((mes === "Todos") && (ano !== "Todos")) {
            this.buscarDados(mes, ano)
        }
        if ((mes !== "Todos") && (ano !== "Todos")) {
            this.buscarDados(mes, ano)
        } else {
            return this.setState({ listar: [] })
        }

    }

    async formataData(dataItem) {
        for (var i = 0; i < dataItem.length; i++) {
            var dataA = dataItem[i];
            var dataF = await dataA.Data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1');
            dataA.Data = await dataF;
        }
    }

    render() {
        return (
            <div>
                <div className="row mt-4">
                    {localStorage.departamento === "Limpeza Lab" ? (
                    <div className="col-3">
                            <div className='d-flex align-items-center'>
                                <i className="fa fa-address-card fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.form}></i>
                                <i className='fa fa-arrow-left mx-3  text-danger'></i>
                                <span className='fw-bold h5 mt-2'>Formulário</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <i className="fa fa-table fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.table}></i>
                                <i className='fa fa-arrow-left mx-3  text-danger'></i>
                                <span className='fw-bold h5 mt-2'>Tabela</span>
                            </div>
                    </div>
                ) : (
                        <div className="col-3">
                            <div className='d-flex align-items-center'>
                                <i className="fa fa-list-alt fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.fila}></i>
                                <i className='fa fa-arrow-left mx-3  text-danger'></i>
                                <span className='fw-bold h5 mt-2'>Fila</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <i className="fa fa-address-card fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.form}></i>
                                <i className='fa fa-arrow-left mx-3  text-danger'></i>
                                <span className='fw-bold h5 mt-2'>Formulário</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <i className="fa fa-table fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.table}></i>
                                <i className='fa fa-arrow-left mx-3  text-danger'></i>
                                <span className='fw-bold h5 mt-2'>Tabela</span>
                            </div>
                        </div>
                    )}
                    <div className="col-6 d-flex justify-content-around">
                        {localStorage.departamento === "Limpeza Lab" ? (
                            <div className="col-2 d-flex flex-row justify-content-end align-items-end">
                                <i className="fa fa-search fa-2x text-danger" />
                            </div>) : (
                            <div className="col-2 d-flex flex-row justify-content-end align-items-center">
                                <i className="fa fa-search fa-2x text-danger" />
                            </div>
                        )}
                        <div className="col-3">
                            <label className='fw-bold d-flex justify-content-center h3'>Mês: </label>
                            <select id="mes" class="form-select" aria-label="Default select example">
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
                            <select id="ano" class="form-select" aria-label="Default select example">
                                <option selected>Todos</option>
                                <option>2022</option>
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
                        {localStorage.departamento === "Limpeza Lab" ? (
                            <div className="col-2 d-flex align-items-end">
                                <button className="btn btn-success fw-bold" onClick={() => this.chamarAno()}>Buscar</button>
                            </div>) : (
                            <div className="col-2 d-flex align-items-center">
                                <button className="btn btn-success fw-bold" onClick={() => this.chamarAno()}>Buscar</button>
                            </div>)
                        }
                    </div>
                </div>
                <div className='row mt-4'>
                    <TabelaMeses listar={this.state.listar} />
                </div>
            </div>

        )
    }
}