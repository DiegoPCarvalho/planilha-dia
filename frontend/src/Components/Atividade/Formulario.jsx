import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';

const banco = "Geral";
const baseUrl = Url(banco);

const initialState = {
    Atividade: {
        Data: data(),
        OS: '',
        Cliente: '',
        Equipamento: '',
        Modelo: '',
        NS: '',
        Servico: '',
        Classificacao: '',
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

export default class Formulário extends React.Component {

    state = { ...initialState }

    save() {
        const Atividade = this.state.Atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
        axios[method](url, Atividade)
            .then(resp => {
                this.setState({ Atividade: initialState.Atividade})
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

    formulario() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>OS: </label>
                            <input type="text" className="form-control"
                                name="OS"
                                value={this.state.Atividade.OS}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a OS..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cliente: </label>
                            <input type="text" className="form-control"
                                name="Cliente"
                                value={this.state.Atividade.Cliente}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Cliente..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Equipamento</label>
                            <input type="text" className="form-control"
                                list="listaEquipamentos"
                                name="Equipamento"
                                value={this.state.Atividade.Equipamento}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o tipo de Equpamento..." />
                            <datalist id="listaEquipamentos">
                                <option value="Coletor de Dados"></option>
                                <option value="Leitor de Dados"></option>
                                <option value="Impressora Térmica"></option>
                                <option value="Carregador de 4 Posições"></option>
                                <option value="Carregador de 6 Posições"></option>
                                <option value="Berço de Comunicação"></option>
                                <option value="Fonte de Alimentação"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Modelo</label>
                            <input type="text" className="form-control"
                                name="Modelo"
                                value={this.state.Atividade.Modelo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o modelo..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número de Serie</label>
                            <input type="text" className="form-control"
                                name="NS"
                                value={this.state.Atividade.NS}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Numero de Serie..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Serviço</label>
                            <input type="text" className="form-control"
                                list="listaServico"
                                name="Servico"
                                value={this.state.Atividade.Servico}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Serviço..." />
                        </div>
                        <datalist id="listaServico">
                            <option value="Atendimento OnSite" />
                            <option value="Atendimento Parceiro" />
                            <option value="Laudo" />
                            <option value="Manutenção" />
                            <option value="Suporte Remoto" />
                            <option value="Revisão de Manutenção" />
                            <option value="Revisão de Venda" />
                            <option value="Preventiva" />
                        </datalist>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Classificação</label>
                            <input type="text" className="form-control"
                                list="listaClassificacao"
                                name="Classificacao"
                                value={this.state.Atividade.Classificacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a Classificação..." />
                        </div>
                        <datalist id="listaClassificacao">
                            <option value="Desgaste de Uso" />
                            <option value="Defeito" />
                            <option value="Uso Indevido" />
                        </datalist>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>Observação</label>
                            <textarea className="form-control"
                                name="Observacao" rows="5"
                                value={this.state.Atividade.Observacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a Sua Observação..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Status</label>
                            <input type="text" className="form-control"
                                list="listaStatus"
                                name="Status"
                                value={this.state.Atividade.Status}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Status..." />
                        </div>
                        <datalist id="listaStatus">
                            <option value="Pronto" />
                            <option value="Enviar p/Zhaz" />
                            <option value="Excede - Aguardando Aprovação" />
                            <option value="Aguardando Aprovação" />
                            <option value="Reprovado" />
                            <option value="Revisado" />
                            <option value="Resolvido-Revisado" />
                        </datalist>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary mx-2"
                            onClick={e => this.save(e)}
                        >
                            Salvar
                        </button>

                        <button className="btn btn-danger"
                            onClick={e => this.clear(e)}
                        >
                            Limpar
                        </button>
                    </div>
                </div>
            </div>
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