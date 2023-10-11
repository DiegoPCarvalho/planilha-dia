import React from 'react';
import axios from 'axios';
import Url from '../../Url/Url';

import CardForm from '../../Card/CardForm';

import $ from 'jquery';

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import MyStopwatch from '../Cronometro/index-Cronos';


const baseUrl = Url("teste");
const baseUrlEquip = Url("Equipamento");
const baseUrlCont = Url("Contrato");
const baseUrlServ = Url("Servico");

const initialState = {
    Atividade: {
        Data: '',
        Dia: '',
        Mes: '',
        Ano: '',
        OS: '',
        Cliente: '',
        Equipamento: '',
        Modelo: '',
        NS: '',
        Servico: '',
        Placa: '',
        Classificacao: '',
        Contrato: '',
        Observacao: '',
        Status: '',
        Tecnico: localStorage.usuario,
        TempoInicio: '',
        TempoFinal: '',
        TempoLiquido: '',
        Finalizada: ''
    },
    list: [],
    list2: [],
    listEquip: [],
    listServ: [],
    listCont: [],
    ultimaOS: 0,
    Data: []
}


export default class Formulário extends React.Component {

    state = { ...initialState }

    componentDidMount() {
        this.buscar()
        this.buscarlist()
        localStorage.Alterado = 0;
    }

    componentDidUpdate() {
        if (localStorage.upDate === "1") {
            this.buscarlist()
            localStorage.upDate = 0
        }
    }


    buscarlist() {
        axios(baseUrl).then(resp => {
            const tabela = resp.data
            let dados = []
            for (let i = 0; i < tabela.length; i++) {
                if ("Não" === tabela[i].Finalizada) {
                    dados.push({
                        id: tabela[i].id,
                        Data: tabela[i].Data,
                        Dia: tabela[i].Dia,
                        Mes: tabela[i].Mes,
                        Ano: tabela[i].Ano,
                        OS: tabela[i].OS,
                        Cliente: tabela[i].Cliente,
                        Equipamento: tabela[i].Equipamento,
                        Modelo: tabela[i].Modelo,
                        NS: tabela[i].NS,
                        Servico: tabela[i].Servico,
                        Placa: tabela[i].Placa,
                        Classificacao: tabela[i].Classificacao,
                        Contrato: tabela[i].Contrato,
                        Observacao: tabela[i].Observacao,
                        Tecnico: tabela[i].Tecnico,
                        Status: tabela[i].Status,
                        TempoInicio: tabela[i].TempoInicio,
                        TempoFinal: tabela[i].TempoFinal,
                        TempoLiquido: tabela[i].TempoLiquido,
                        Finalizada: tabela[i].Finalizada
                    })
                }
            }
            this.setState({ list: dados })
        })
    }



    save() {
        const Atividade = this.state.Atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
        axios[method](url, Atividade)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ Atividade: initialState.Atividade, list })
            })
    }

    getUpdatedList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.unshift(Atividade)
        return list
    }

    buscar() {
        axios(baseUrlEquip).then(resp => {
            this.setState({ listEquip: resp.data })
        })

        axios(baseUrlServ).then(resp => {
            this.setState({ listServ: resp.data })
        })

        axios(baseUrlCont).then(resp => {
            this.setState({ listCont: resp.data })
        })
    }

    clear() {
        localStorage.Alterado = 0
        this.setState({ Atividade: initialState.Atividade })
    }

    updateField(event) {
        const Atividade = { ...this.state.Atividade }
        Atividade[event.target.name] = event.target.value
        this.setState({ Atividade })
    }

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    }

    verificar() {
        let OS = document.getElementById("OS").value;
        let Cliente = document.getElementById("Cliente").value;
        let Equipamento = document.getElementById("Equipamento").value;
        let Modelo = document.getElementById("Modelo").value;
        let Servico = document.getElementById("Servico").value;
        let Contrato = document.getElementById("Contrato").value;
        let data = document.getElementById("data").value;


        if ((OS === '') || (Cliente === '') || (Equipamento === '') || (Modelo === '') || (Servico === '') || (Contrato === '')) {

        } else {
            if (data.length === 0) {

                const dt = new Date()

                if (localStorage.Alterado === "0") {

                    this.state.Atividade.Data = dt
                    this.state.Atividade.Dia = dt.getDate()
                    this.state.Atividade.Mes = dt.getMonth() + 1
                    this.state.Atividade.Ano = dt.getFullYear()
                    this.state.Atividade.TempoInicio = dt
                    this.state.Atividade.Finalizada = "Não"

                    this.save()
                    this.mensagemSalvo()
                    localStorage.UltimaOS = OS

                } else if (localStorage.Alterado === "1") {

                    localStorage.Alterado = 0;

                    this.save()
                    this.mensagemSalvo()
                    localStorage.UltimaOS = OS


                } else if (localStorage.Alterado === "2") {
                    let diaTemp = document.getElementById(`dia ${this.state.Atividade.id}`).innerText;
                    let horaTemp = document.getElementById(`hora ${this.state.Atividade.id}`).innerText;
                    let minutoTemp = document.getElementById(`minuto ${this.state.Atividade.id}`).innerText;
                    let segundoTemp = document.getElementById(`segundo ${this.state.Atividade.id}`).innerText;

                    this.state.Atividade.TempoFinal = dt
                    this.state.Atividade.Finalizada = "Sim"
                    this.state.Atividade.TempoLiquido = `${diaTemp} d : ${horaTemp} h : ${minutoTemp} m : ${segundoTemp} s`
                    
                    this.save()
                    this.mensagemSalvo()
                    localStorage.UltimaOS = OS
                    localStorage.Alterado = 0;
                    localStorage.upDate = 1
                }


            } else {
                const dt = new Date(data)


                if (localStorage.Alterado === "0") {
                    this.state.Atividade.Dia = dt.getDate()
                    this.state.Atividade.Mes = dt.getMonth() + 1
                    this.state.Atividade.Ano = dt.getFullYear()
                    this.state.Atividade.TempoInicio = dt
                    this.state.Atividade.Finalizada = "Não"

                    this.save()
                    this.mensagemSalvo()
                    localStorage.UltimaOS = OS
                } else if (localStorage.Alterado === "1") {
                    localStorage.Alterado = 0;

                    this.save()
                    this.mensagemSalvo()
                    localStorage.UltimaOS = OS
                } else if (localStorage.Alterado === "2") {
                    let diaTemp = document.getElementById(`dia ${this.state.Atividade.id}`).innerText;
                    let horaTemp = document.getElementById(`hora ${this.state.Atividade.id}`).innerText;
                    let minutoTemp = document.getElementById(`minuto ${this.state.Atividade.id}`).innerText;
                    let segundoTemp = document.getElementById(`segundo ${this.state.Atividade.id}`).innerText;

                    this.state.Atividade.TempoFinal = dt
                    this.state.Atividade.Finalizada = "Sim"
                    this.state.Atividade.TempoLiquido = `${diaTemp} d : ${horaTemp} h : ${minutoTemp} m : ${segundoTemp} s`
                    
                    this.save()
                    this.mensagemSalvo()
                    localStorage.UltimaOS = OS
                    localStorage.Alterado = 0;
                    localStorage.upDate = 1
                }
            }
        }
    }



    formulario() {
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
                <div className="form">
                    <div className="row">
                        <div className="col-6 col-md-2">
                            <div className="form-group">
                                <label className='fw-bold'>Data: </label>
                                <input type="datetime-local" className="form-control"
                                    name="Data" id="data"
                                    value={this.state.Atividade.Data}
                                    onChange={e => this.updateField(e)}

                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="form-group">
                                <label className='fw-bold'>OS: </label>
                                <input type="text" className="form-control"
                                    name="OS" id="OS"
                                    value={this.state.Atividade.OS}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite a OS..."
                                    required />
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="form-group">
                                <label className='fw-bold'>Cliente: </label>
                                <input type="text" className="form-control"
                                    name="Cliente" id="Cliente"
                                    value={this.state.Atividade.Cliente}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Cliente..." required />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group">
                                <label className='fw-bold'>Equipamento: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Equipamento" id="Equipamento"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Equipamento}
                                    required
                                >
                                    <option selected disabled value="">Selecione o Equipamento</option>
                                    {this.renderEquip()}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Modelo: </label>
                                <input type="text" className="form-control"
                                    name="Modelo" id="Modelo"
                                    value={this.state.Atividade.Modelo}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o modelo..." required />
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Número de Serie</label>
                                <input type="text" className="form-control"
                                    name="NS"
                                    value={this.state.Atividade.NS}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Numero de Serie..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Serviço: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Servico" id="Servico"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Servico} required>
                                    <option selected disabled value="">Selecione o Serviço</option>
                                    {this.renderServ()}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Recuperação de Placa: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Placa"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Placa}>
                                    <option selected>...</option>
                                    <option>Recuperada</option>
                                    <option>Não Recuperada</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Classificação: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Classificacao"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Classificacao}>
                                    <option selected disabled value="">Selecione a Classificação</option>
                                    <option>Desgaste de Uso</option>
                                    <option>Defeito</option>
                                    <option>Uso Indevido</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Contrato: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Contrato" id="Contrato"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Contrato}
                                    required>
                                    <option selected disabled value="">Selecione...</option>
                                    <option>Avulso</option>
                                    {this.renderCont()}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Status: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Status"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Status}>
                                    <option selected>Selecione a Status</option>
                                    <option>Pronto</option>
                                    <option>Garantia</option>
                                    <option>Enviar p/Zhaz</option>
                                    <option>Excede - Aguardando Aprovação</option>
                                    <option>Aguardando Aprovação</option>
                                    <option>Reprovado</option>
                                    <option>Revisado</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Observação: </label>
                                <textarea className="form-control"
                                    name="Observacao" rows="5"
                                    value={this.state.Atividade.Observacao}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite a Sua Observação..." />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
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
                </div>
            </form>
        )
    }

    renderEquip() {
        return this.state.listEquip.map(Equip => {
            return (
                <option>{Equip.nome}</option>
            )
        })

    }

    renderServ() {
        return this.state.listServ.map(Serv => {
            return (
                <option>{Serv.nome}</option>
            )
        })
    }

    renderCont() {
        return this.state.listCont.map(Cont => {
            return (
                <option>{Cont.nome}</option>
            )
        })
    }

    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabela-form-2">
                <thead className="table-dark">
                    <tr>
                        <th>Index</th>
                        <th>Data</th>
                        <th>OS</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Modelo</th>
                        <th>Tempo</th>
                        <th>Finalizada</th>
                        <th>Serviço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    dataNova(data) {
        const dd = data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1')

        return dd
    }

    dataHora(data) {
        const dt = new Date(data).toLocaleString()
        return dt
    }

    renderRows() {
        let id = 0
        return this.state.list.map(Atividade => {
            return (
                <tr key={(Atividade.id)}>
                    <td>{Atividade.id}</td>
                    <td>{this.dataNova(Atividade.Data)}</td>
                    <td>{Atividade.OS}</td>
                    <td>{Atividade.Cliente}</td>
                    <td>{Atividade.Equipamento}</td>
                    <td>{Atividade.Modelo}</td>
                    <td>
                        <MyStopwatch dia={`dia ${Atividade.id}`} hora={`hora ${Atividade.id}`} minuto={`minuto ${Atividade.id}`} segundo={`segundo ${Atividade.id}`} />
                    </td>
                    <td>{Atividade.Finalizada}</td>
                    <td>{Atividade.Servico}</td>
                    <td className="d-flex justify-content-around">
                        <button className='btn btn-success' onClick={() => this.valid(Atividade)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className='btn btn-warning' onClick={() => this.load(Atividade)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(Atividade)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }


    loadCheck(Atividade) {
        localStorage.Alterado = 2
        this.setState({ Atividade })
    }

    valid(Atividade) {
        this.loadCheck(Atividade)

        this.verificar()
    }

    load(Atividade) {
        localStorage.Alterado = 1
        this.setState({ Atividade })
    }

    remove(Atividade) {
        axios.delete(`${baseUrl}/${Atividade.id}`)
            .then(resp => {
                const list = this.getUpdatedList(Atividade, false)
                this.setState({ list })
            })
    }

    confirmar(Atividade) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(Atividade)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })

    }

    render() {
        return (
            <>
                <div className='row d-flex justify-content-between'>
                    <div className='col-1 mb-3'>
                        <i className="fa fa-address-card fa-4x"></i>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <CardForm nomeTitulo="Ultima OS" icone="steam" dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                    </div>
                </div>
                <div className="row">
                    <div className='col-12'>
                        {this.formulario()}
                    </div>
                </div>
                <div className="row mt-5">
                    {this.renderTable()}
                </div>
            </>
        )
    }
}