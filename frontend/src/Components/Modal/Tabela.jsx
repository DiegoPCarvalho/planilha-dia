import React, { Component}  from "react";
import axios from 'axios';

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

export default class AtividadeCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    remove(atividade) {
        axios.delete(`${baseUrl}/${atividade.id}`)
            .then(resp => {
                const list = this.getUpdatedList(atividade, false)
                this.setState({ list })
            })
    }

    getUpdatedList(atividade, add = true) {
        const list = this.state.list.filter(a => a.OS !== atividade.OS)
        if (add) list.unshift(atividade)
        return list
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>OS</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Modelo</th>
                        <th>NS</th>
                        <th>Serviço</th>
                        <th>Classificação</th>
                        <th>Observação</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows(() => this.load(this.load))}
                </tbody>
            </table>
        )
    }

    renderRows(props) {
        return this.state.list.map(atividade => {
            return (
                <tr key={(atividade.id)}>
                    <td>{atividade.OS}</td>
                    <td>{atividade.Cliente}</td>
                    <td>{atividade.Equipamento}</td>
                    <td>{atividade.Modelo}</td>
                    <td>{atividade.NS}</td>
                    <td>{atividade.Servico}</td>
                    <td>{atividade.Classificacao}</td>
                    <td>{atividade.Observacao}</td>
                    <td>{atividade.Status}</td>
                    <td>
                    <button className='btn btn-warning'
                            onClick={props.load}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(atividade)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }

    updateField(event) {
        const atividade = { ...this.state.atividade }
        atividade[event.target.name] = event.target.value
        this.setState({ atividade })
    }
    
    load(atividade) {
        this.setState({ atividade })
    }

    render() {
        return (
                this.renderTable()
        )
    }
}