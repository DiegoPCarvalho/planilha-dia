import React, { Component } from "react";
import Main from '../template/Main';
import axios from 'axios';
import './NovaAtividade.css';
import { Link } from "react-router-dom";

const headerProps = {
    icon: 'address-card',
    title: 'Nova Atividade',
    subtitle: 'Formulario de Cadastro'
}

const baseUrl = "http://192.168.15.9:7000/DiegoCarvalho";
const initialState = {
    atividade: {
        OS:'',
        Cliente:'',
        Equipamento:'',
        Modelo:'',
        NS:'',
        Servico:'',
        Classificacao:'',
        Observacao:'',
        Status:''
    },
    list: []
}

export default class novaAtividade extends Component {

    state = {...initialState}

    clear() {
        this.setState({ atividade: initialState.atividade })
    }

    save() {
        const atividade = this.state.atividade
        const method = atividade.id ? 'put' : 'post'
        const url = atividade.id ? `${baseUrl}/${atividade.id}` : baseUrl
        axios[method](url, atividade)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ atividade: initialState.atividade, list })
            })
    }

    getUpdatedList(atividade) {
        const list = this.state.list.filter(a => a.OS !== atividade.OS)
        list.unshift(atividade)
        return list
    }

    updateField(event) {
        const atividade = { ...this.state.atividade }
        atividade[event.target.name] = event.target.value
        this.setState({ atividade })
    }

    formulario() {
        return (
            <div className="form">
                <div className="row d-flex justify-content-end">
                <Link to="/Atividade" className="d-flex justify-content-center 
                    voltar col-2 col-md-2">Voltar</Link>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>OS: </label>
                            <input type="text" className="form-control"
                                name="OS"
                                value={this.state.atividade.OS}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a OS..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cliente: </label>
                            <input type="text" className="form-control"
                                name="Cliente"
                                value={this.state.atividade.Cliente}
                                onChange={e => this.updateField(e)} 
                                placeholder="Digite o Cliente..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Equipamento</label>
                            <input type="text" className="form-control"
                                list="listaEquipamentos"
                                name="Equipamento" 
                                value={this.state.atividade.Equipamento}
                                onChange={e => this.updateField(e)} 
                                placeholder="Digite o tipo de Equpamento..."/>
                            <datalist id="listaEquipamentos">
                                <option value="Coletor de Dados"></option>
                                <option value="Leitor de Dados"></option>
                                <option value="Impressora T??rmica"></option>
                                <option value="Carregador de 4 Posi????es"></option>
                                <option value="Carregador de 6 Posi????es"></option>
                                <option value="Ber??o de Comunica????o"></option>
                                <option value="Fonte de Alimenta????o"></option>
                            </datalist>       
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Modelo</label>
                            <input type="text" className="form-control" 
                                name="Modelo"
                                value={this.state.atividade.Modelo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o modelo..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>N??mero de Serie</label>
                            <input type="text" className="form-control" 
                                name="NS"
                                value={this.state.atividade.NS}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Numero de Serie..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Servi??o</label>
                            <input type="text" className="form-control"
                                list="listaServico" 
                                name="Servico"
                                value={this.state.atividade.Servico}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Servi??o..."/>
                        </div>
                        <datalist id="listaServico">
                            <option value="Atendimento OnSite" />
                            <option value="Atendimento Parceiro" />
                            <option value="Laudo" />
                            <option value="Manuten????o" />
                            <option value="Suporte Remoto" />
                            <option value="Revis??o de Manuten????o" />
                            <option value="Revis??o de Venda" />
                            <option value="Preventiva" />
                        </datalist>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Classifica????o</label>
                            <input type="text" className="form-control"
                                list="listaClassificacao" 
                                name="Classificacao"
                                value={this.state.atividade.Classificacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a Classifica????o..."/>
                        </div>
                        <datalist id="listaClassificacao">
                            <option value="Desgaste de Uso" />
                            <option value="Defeito" />
                            <option value="Uso Indevido" />
                        </datalist>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>Observa????o</label>
                            <textarea className="form-control" 
                                name="Observacao" rows="5" 
                                value={this.state.atividade.Observacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a Sua Observa????o..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Status</label>
                            <input type="text" className="form-control"
                                list="listaStatus" 
                                name="Status"
                                value={this.state.atividade.Status}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Status..."/>
                        </div>
                        <datalist id="listaStatus">
                            <option value="Pronto" />
                            <option value="Enviar p/Zhaz" />
                            <option value="Excede - Aguardando Aprova????o" />
                            <option value="Aguardando Aprova????o" />
                            <option value="Reprovado" />
                            <option value="Revisado" />
                            <option value="Resolvido-Revisado" />
                        </datalist>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={ e => this.save(e)}>
                            Salvar
                        </button>
                        
                        <button className="btn btn-danger espaco"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <Main {...headerProps}>
               {this.formulario()}
            </Main>
        )
    }
}

