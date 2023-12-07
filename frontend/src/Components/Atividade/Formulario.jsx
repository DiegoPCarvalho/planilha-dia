import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';

import CardForm from '../Card/CardForm';

import $ from 'jquery';

const banco = "Geral";
const baseUrl = Url(banco);
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
        Tecnico: localStorage.usuario
    },
    list: [],
    listEquip: [],
    listServ: [],
    listCont: [],
    ultimaOS: 0,
    Data: [],
    listarCosmos: []
}


export default class Formulário extends React.Component {

    state = { ...initialState }

    UNSAFE_componentWillMount() {
        this.buscar()
        this.buscarCosmos()
    }


    save() {
        const Atividade = this.state.Atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
        axios[method](url, Atividade)
            .then(resp => {
                this.setState({ Atividade: initialState.Atividade })
            })
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
        // document.getElementById('OS').value = ''
        //         document.getElementById('Cliente').value = ''
        //         document.getElementById('Equipamento').value = ''
        //         document.getElementById('Modelo').value = ''
        //         document.getElementById('NS').value = ''
        //         document.getElementById('Contrato').value = ''
        //         document.getElementById('Servico').value = ''
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
        // let ns = document.getElementById("NS").value;

        if ((OS === '') || (Cliente === '') || (Equipamento === '') || (Modelo === '') || (Servico === '') || (Contrato === '')) {

        } else {
            if (data.length === 0) {

                const dt = new Date()


                this.state.Atividade.Data = dt
                this.state.Atividade.Dia = dt.getDate()
                this.state.Atividade.Mes = dt.getMonth() + 1
                this.state.Atividade.Ano = dt.getFullYear()
                // this.state.Atividade.OS = OS
                // this.state.Atividade.Cliente = Cliente
                // this.state.Atividade.Servico = Servico
                // this.state.Atividade.Equipamento = Equipamento
                // this.state.Atividade.Modelo = Modelo
                // this.state.Atividade.Contrato = Contrato
                // this.state.Atividade.NS = ns

                

                // document.getElementById('OS').value = ''
                // document.getElementById('Cliente').value = ''
                // document.getElementById('Equipamento').value = ''
                // document.getElementById('Modelo').value = ''
                // document.getElementById('NS').value = ''
                // document.getElementById('Contrato').value = ''
                // document.getElementById('Servico').value = ''

                this.save()
                this.mensagemSalvo()
                localStorage.UltimaOS = OS

            } else {
                const dt = new Date(data)

                this.state.Atividade.Dia = dt.getDate()
                this.state.Atividade.Mes = dt.getMonth() + 1
                this.state.Atividade.Ano = dt.getFullYear()
                // this.state.Atividade.OS = OS
                // this.state.Atividade.Cliente = Cliente
                // this.state.Atividade.Servico = Servico
                // this.state.Atividade.Equipamento = Equipamento
                // this.state.Atividade.Modelo = Modelo
                // this.state.Atividade.Contrato = Contrato
                // this.state.Atividade.NS = ns


                // document.getElementById('OS').value = ''
                // document.getElementById('Cliente').value = ''
                // document.getElementById('Equipamento').value = ''
                // document.getElementById('Modelo').value = ''
                // document.getElementById('NS').value = ''
                // document.getElementById('Contrato').value = ''
                // document.getElementById('Servico').value = ''

                this.save()
                this.mensagemSalvo()
                localStorage.UltimaOS = OS
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
                                    onChange={(e) => this.updateField(e)}
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
                                    name="NS" id="NS"
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
                                    name="Observacao" rows="5" id="Observacao"
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

    funcaoTeste() {
        const osid = document.getElementById('OS').value;

        if (osid.length >= 5) {
            let dado = []
            const tab = this.state.listarCosmos

            for (let i = 0; i < tab.length; i++) {
                if (osid == tab[i].OS) {
                    dado.push({
                        user: tab[i].Cliente,
                        serv: tab[i].Servico,
                        equip: tab[i].Equipamento,
                        mod: tab[i].Modelo,
                        tip: tab[i].TipoOS,
                        serial: tab[i].NS
                    })
                }
            }


            if (osid.length >= 5) {
                document.getElementById('Cliente').value = dado[0].user
                document.getElementById('Equipamento').value = dado[0].equip
                document.getElementById('Modelo').value = dado[0].mod
                document.getElementById('NS').value = dado[0].serial
                document.getElementById('Contrato').value = dado[0].tip
                document.getElementById('Servico').value = dado[0].serv
            }
        }



    }

    buscarCosmos() {
        const url = "http://localhost:3001/"
        axios(url).then(resp => {
            this.setState({ listarCosmos: resp.data })
        })
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
            </>
        )
    }
}