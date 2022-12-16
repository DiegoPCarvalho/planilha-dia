import axios from "axios";
import React, {Component} from "react";

const baseUrl = "http://192.168.15.211:7000/DiegoCarvalho";
const initialState = {
    atividade: {
        OS: '',
        Cliente: '',
        Equipamento: '',
        Modelo: '',
        NS: '',
        Servico: '',
        Classificacao: '',
        Observacao: '',
        Status: ''
    },
    list: []
}

class Formulario extends Component {
   
    state = { ...initialState}

    render(){
        return (
                 this.formulario()
        )
    }

    load(atividade) {
        this.setState({ atividade })
    }

    formulario(props) {
        return (
            <div className="form">
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
                                value={this.state.atividade.Modelo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o modelo..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número de Serie</label>
                            <input type="text" className="form-control" 
                                name="NS"
                                value={this.state.atividade.NS}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Numero de Serie..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Serviço</label>
                            <input type="text" className="form-control"
                                list="listaServico" 
                                name="Servico"
                                value={this.state.atividade.Servico}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Serviço..."/>
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
                                value={this.state.atividade.Classificacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a Classificação..."/>
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
                                value={this.state.atividade.Observacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a Sua Observação..."/>
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
                        <button className="btn btn-primary"
                            onClick={ e => this.save(e)}
                            >
                            Salvar
                        </button>
                        
                        <button className="btn btn-danger espaco" 
                            onClick={e => this.clear(e)}
                            >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    clear() {
        this.setState({ atividade: initialState.atividade })
    }

    updateField(event) {
        const atividade = { ...this.state.atividade }
        atividade[event.target.name] = event.target.value
        this.setState({ atividade })
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


}

export default Formulario;