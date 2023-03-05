import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';

import $ from 'jquery';

const banco = "Geral";
const baseUrl = Url(banco);

const initialState = {
    Atividade: {
        Data: data(),
        Dia: dia(),
        Mes: mes(),
        Ano: ano(),
        OS: '',
        Cliente: '',
        Equipamento: '',
        Modelo: '',
        NS: '',
        Servico: '',
        Placa:'',
        Classificacao: '',
        Contrato:'',
        Observacao: '',
        Status: '',
        Tecnico: localStorage.usuario
    },
    list: []
}

function data() {
    let da = new Date();
    return da
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

export default class Formulário extends React.Component {

    state = { ...initialState }

    save() {
        const Atividade = this.state.Atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
        axios[method](url, Atividade)
            .then(resp => {
                this.setState({ Atividade: initialState.Atividade })
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
                        <div className="col-6 col-md-6">
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
                                name="Contrato" id ="Contrato"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Contrato}
                                    required>
                                    <option selected disabled value="">Selecione...</option>
                                    <option>Avulso</option>
                                    <option>Contrato Assaí</option>
                                    <option>Contrato C&A</option>
                                    <option>Contrato B2W</option>
                                    {/* <option>Contrato Atacadão</option> */}
                                    <option>Contrato Boticário</option>
                                    {/* <option>Contrato Shopee</option> */}
                                    <option>Contrato Locação</option>
                                    <option>Contrato Friozem</option>
                                    <option>Contrato Comfrio</option>
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

    render() {
        return (
            <div>
                <div className='mb-3'>
                    <i className="fa fa-address-card fa-4x"></i>
                </div>
                <div>
                    {this.formulario()}
                </div>

            </div>
        )
    }
}