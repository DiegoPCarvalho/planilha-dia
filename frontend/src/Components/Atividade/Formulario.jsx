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
                            <select class="form-select" aria-label="Default select example"
                                name="Equipamento"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Equipamento}>
                                <option selected>Selecione o Equipamento</option>
                                <option>Coletor de Dados</option>
                                <option>Leitor de Dados</option>
                                <option>Busca Preço</option>
                                <option>Impressora Térmica</option>
                                <option>Carregador de 3 Posições</option>
                                <option>Carregador de 4 Posições</option>
                                <option>Carregador de 5 Posições</option>
                                <option>Carregador de 6 Posições</option>
                                <option>Berço de Comunicação</option>
                                <option>Fonte de Alimentação</option>
                            </select>
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
                            <select class="form-select" aria-label="Default select example"
                                name="Servico"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Servico}>
                                <option selected>Selecione o Serviço</option>
                                <option>Chamado On-Site</option>
                                <option>Suporte Remoto</option>
                                <option>Laudo</option>
                                <option>Manutenção Concluída</option>
                                <option>Revisão de Manutenção</option>
                                <option>Revisão de Venda</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Classificação</label>
                            <select class="form-select" aria-label="Default select example"
                                name="Classificacao"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Classificacao}>
                                <option selected>Selecione a Classificação</option>
                                <option>Desgaste de Uso</option>
                                <option>Defeito</option>
                                <option>Uso Indevido</option>
                            </select>
                        </div>
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
                            <select class="form-select" aria-label="Default select example"
                                name="Status"
                                onChange={e => this.updateField(e)}
                                value={this.state.Atividade.Status}>
                                <option selected>Selecione a Status</option>
                                <option>Pronto</option>
                                <option>Enviar p/Zhaz</option>
                                <option>Excede - Aguardando Aprovação</option>
                                <option>Aguardando Aprovação</option>
                                <option>Reprovado</option>
                                <option>Revisado</option>
                            </select>
                        </div>
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