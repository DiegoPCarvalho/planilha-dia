import React from "react";
import Main from '../Template/Main';
import axios from 'axios';
import ModalAtendimento from "../Modal/Modal.Atividade";
import Logo from '../../Assets/Imgs/logoZhaz.png';
import Url from '../Url/Url';

import $ from 'jquery';

const headerProps = {
    icon: 'newspaper-o',
    title: 'Atividade',
}

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

const banco = "Geral";

const baseUrl = Url(banco);

function data(){
    let da = new Date().toLocaleString();
    return da
}

export default class AtividadeCrud extends React.Component {
    
    state ={ ...initialState }

    componentWillMount() {
          axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })

        $(document).ready(function () {
            setTimeout(() => {
              $('#tabela').DataTable({
                language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                dom: 'Bfrtip',
                  buttons: [
                      'csv', 'excel', 'print'
                  ]
              });
            }, 100)
          });
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


    getUpdatedList(Atividade) {
        const list = this.state.list.filter(a => a.OS !== Atividade.OS)
        list.unshift(Atividade)
        return list
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
                                placeholder="Digite o Cliente..."/>
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
                                value={this.state.Atividade.Modelo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o modelo..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número de Serie</label>
                            <input type="text" className="form-control" 
                                name="NS"
                                value={this.state.Atividade.NS}
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
                                value={this.state.Atividade.Servico}
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
                                value={this.state.Atividade.Classificacao}
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
                                value={this.state.Atividade.Observacao}
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
                                value={this.state.Atividade.Status}
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
                        <button className="btn btn-primary mx-2"
                            onClick={ e => this.save(e)}
                            >
                            Salvar
                        </button>
                        
                        <button className="btn btn-danger espaco" 
                            onClick={ e => this.clear(e)}
                            >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <table className="table mt-5 table-bordered" id="tabela">
                <thead className="table-dark">
                    <tr>
                        <th>OS</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Modelo</th>
                        <th>NS</th>
                        <th>Serviço</th>
                        <th>Classificação</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(props) {
        return this.state.list.map(Atividade => {
            return (
                <tr key={(Atividade.id)}>
                    <td>{Atividade.OS}</td>
                    <td>{Atividade.Cliente}</td>
                    <td>{Atividade.Equipamento}</td>
                    <td>{Atividade.Modelo}</td>
                    <td>{Atividade.NS}</td>
                    <td>{Atividade.Servico}</td>
                    <td>{Atividade.Classificacao}</td>
                    <td>{Atividade.Status}</td>
                    <td>
                    {/* <button className='btn btn-warning mx-1'
                            onClick={() => this.load(atividade)}>
                            <i className="fa fa-pencil"></i>
                        </button> */}
                        <ModalAtendimento corModal="warning" Ititulo="expand"  nome={this.renderI()}
                            relatorio={this.formulario()} load={this.renderButtonPencil(Atividade)}/>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.remove(Atividade)}>
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

    renderI(){
        return(
            <i className="fa fa-address-card fa-3x"/>
        )
    }

    renderButtonPencil(Atividade){
        return(
            <button className="btn btn-warning" onClick={() => this.load(Atividade)}>
                <i className="fa fa-pencil"></i>
            </button>
        )
    }
    
    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                       <div className="col-3">
                           <img src={Logo} alt="" />
                       </div>
                       <div className="col-9 d-flex align-items-center justify-content-end">
                            <h4 className="mx-2 d-flex align-items-center">Addicionar</h4>
                            <ModalAtendimento corModal="success" Ititulo="plus fa-2x"
                                classe="d-flex justify-content-center align-items-center" relatorio={this.formulario()}
                                nome={this.renderI()}/>
                       </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            {this.renderTable()}
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}