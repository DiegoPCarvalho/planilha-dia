import React from 'react';
import axios from 'axios';
import ModalAtendimento from "../Modal/Modal.Atividade";
import Url from '../Url/Url';

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import $ from 'jquery';
import { setAnimation } from 'highcharts';

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
        Tecnico: localStorage.usuario
    },
    list: [],
    mes: [],
    ano: []
}


const banco = "Geral";

const baseUrl = Url(banco);


export default class Tabela extends React.Component {

    state = { ...initialState }


    componentWillMount() {
        this.retornoTabela()
        this.retornoData()
        this.pesquisar()  
           
    }

    pesquisar(){
        $(document).ready(function () {
            setTimeout(() => {
                $('#tabela').DataTable({
                    language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                });
            }, 2000)
        });
    }

    

    retornoData() {
        const data = new Date();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();

        return this.setState ({
            ano: ano,
            mes: mes
        })
    }

     async retornoTabela() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoNome = []

        await this.formataData(tabelaNome)


        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico)&&(this.state.ano === tabelaNome[i].Ano)&&(this.state.mes === tabelaNome[i].Mes)) {
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

    
    async buscarDados(mes, ano){
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoNomeFill = []   

        await this.formataData(tabelaNome)

            for (let i = 0; i < tabelaNome.length; i++) {
                if ((localStorage.usuario === tabelaNome[i].Tecnico)&&(ano === `${tabelaNome[i].Ano}`)&&(mes === `${tabelaNome[i].Mes}`)) {
                    dadoNomeFill.push({
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

            return this.setState({ list: dadoNomeFill})
 
            // console.log(dadoNome, ano, mes)
        
    }

   
    chamarDados(){
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        this.buscarDados(mes, ano)

       
    }
   

    dataCerta(dia) {
        const dt = new Date(dia).toLocaleDateString();
        return dt
    }


    async formataData(dataItem) {
        for (var i = 0; i < dataItem.length; i++) {
            var dataA = dataItem[i];
            var dataF = await dataA.Data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1');
            dataA.Data = await dataF;
        }
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

    remove(Atividade) {
        axios.delete(`${baseUrl}/${Atividade.id}`)
            .then(resp => {
                const list = this.getUpdatedList(Atividade, false)
                this.setState({ list })
            })
    }

    clear() {
        this.setState({ Atividade: initialState.Atividade })
    }

    updateField(event) {
        const Atividade = { ...this.state.Atividade }
        Atividade[event.target.name] = event.target.value
        this.setState({ Atividade })
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

    verificar() {
        let OS = document.getElementById("OS").value;
        let Cliente = document.getElementById("Cliente").value;
        let Equipamento = document.getElementById("Equipamento").value;
        let Modelo = document.getElementById("Modelo").value;
        let Servico = document.getElementById("Servico").value;
        let Contrato = document.getElementById("Contrato").value;

        if ((OS === '') || (Cliente === '') || (Equipamento === '') || (Modelo === '') || (Servico === '') || (Contrato === '')) {

        } else {
            this.save()
            this.mensagemSalvo()
        }
    }

    formulario() {
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label className='fw-bold'>Cliente: </label>
                                <input type="text" className="form-control"
                                    name="Cliente" id="Cliente"
                                    value={this.state.Atividade.Cliente}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Cliente..." required />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label className='fw-bold'>Equipamento: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Equipamento" id="Equipamento"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Equipamento}
                                    required
                                >
                                    <option selected disabled value="">Selecione o Equipamento</option>
                                    <option>Coletor de Dados</option>
                                    <option>Leitor de Dados</option>
                                    <option>Leitor de RFID</option>
                                    <option>Busca Preço</option>
                                    <option>Impressora Térmica</option>
                                    <option>Carregador de 3 Posições</option>
                                    <option>Carregador de 4 Posições</option>
                                    <option>Carregador de 5 Posições</option>
                                    <option>Carregador de 6 Posições</option>
                                    <option>Berço de Comunicação</option>
                                    <option>Fonte de Alimentação</option>
                                    <option>Cabo Confeccionado</option>
                                    <option>Bateria</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label className='fw-bold'>Modelo: </label>
                                <input type="text" className="form-control"
                                    name="Modelo" id="Modelo"
                                    value={this.state.Atividade.Modelo}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o modelo..." required />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label className='fw-bold'>Número de Serie</label>
                                <input type="text" className="form-control"
                                    name="NS"
                                    value={this.state.Atividade.NS}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Numero de Serie..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label className='fw-bold'>Serviço: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Servico" id="Servico"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Servico} required>
                                    <option selected disabled value="">Selecione o Serviço</option>
                                    <option>Chamado On-Site</option>
                                    <option>Suporte Remoto</option>
                                    <option>Laudo</option>
                                    <option>Manutenção Concluída</option>
                                    <option>Revisão de Manutenção</option>
                                    <option>Revisão de Venda</option>
                                    <option>Confecção de Cabos</option>
                                    <option>Montagem/Manutenção de Venda</option>
                                    <option>Recuperação de Placa</option>
                                    <option>Revisão de Reprovado</option>
                                    <option>Revisão de Compra</option>
                                    <option>Revisão/Manutenção de Locação</option>
                                    <option>Limpeza</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label className='fw-bold'>Contrato: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Contrato" id="Contrato"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Contrato}
                                    required>
                                    <option selected disabled value="">Selecione...</option>
                                    <option>Avulso</option>
                                    <option>Contrato Assaí</option>
                                    <option>Contrato C&A</option>
                                    <option>Contrato B2W</option>
                                    <option>Contrato Atacadão</option>
                                    <option>Contrato Boticário</option>
                                    <option>Contrato Shopee</option>
                                    <option>Contrato Locação</option>
                                    <option>Contrato Friozem</option>
                                    <option>Contrato Comfrio</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
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
                        <div className="col-12">
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
                        <th>Modelo</th>
                        <th>NS</th>
                        <th>Serviço</th>
                        {/* <th>Classificação</th>
                        <th>Status</th> */}
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
        return this.state.list.map(Atividade => {
            return (
                <tr key={(Atividade.id)}>
                    <td>{Atividade.id}</td>
                    <td>{Atividade.Data}</td>
                    <td>{Atividade.OS}</td>
                    <td>{Atividade.Cliente}</td>
                    <td>{Atividade.Equipamento}</td>
                    <td>{Atividade.Modelo}</td>
                    <td>{Atividade.NS}</td>
                    <td>{Atividade.Servico}</td>
                    {/* <td>{Atividade.Classificacao}</td>
                    <td>{Atividade.Status}</td> */}
                    <td className="d-flex justify-content-around">
                        {/* <button className='btn btn-warning mx-1'
                        onClick={() => this.load(atividade)}>
                        <i className="fa fa-pencil"></i>
                    </button> */}
                        <ModalAtendimento corModal="warning" Ititulo="expand" nome={this.renderI()}
                            relatorio={this.formulario()} load={this.renderButtonPencil(Atividade)} />
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(Atividade)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }

    load(Atividade) {
        this.setState({ Atividade })
    }

    renderI() {
        return (
            <i className="fa fa-address-card fa-3x" />
        )
    }

    renderButtonPencil(Atividade) {
        return (
            <button className="btn btn-warning" onClick={() => this.load(Atividade)}>
                <i className="fa fa-pencil"></i>
            </button>
        )
    }

    render() {
        return (
            <div>
                <div className='mb-3'>
                    <i className="fa fa-table fa-4x"></i>
                </div>
                <div className="row mt-4 mb-4 d-flex justify-content-center">
                    <div className="col-2 d-flex flex-row justify-content-end align-items-center">
                        <i className="fa fa-search fa-2x text-danger" /> 
                    </div>
                    <div className="col-2">
                        <label className='fw-bold'>Mês: </label>
                        <select id="mes" class="form-select" aria-label="Default select example">
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
                    <div className="col-2">
                        <label className='fw-bold'>Ano: </label>
                        <select id="ano" class="form-select" aria-label="Default select example">
                            <option selected disabled>Todos</option>
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
                    <div className="col-2 d-flex align-items-end">
                        <button className="btn btn-success fw-bold" onClick={() => this.chamarDados()}>Buscar</button>
                    </div>
                </div>
                <div className="mt-4">
                    {this.renderTable()}
                </div>
            </div>
        )

    }
}