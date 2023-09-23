import React from 'react';
import Url from '../Url/Url';
import axios from 'axios';

import { confirmAlert } from "react-confirm-alert";
import $ from 'jquery';

const baseUrl = Url("Equipamento");

const initialState = {
    Equipamentos: {
        nome: '',
    },
    list: []
}

export default class Equipamentos extends React.Component {
    state = { ...initialState }

    UNSAFE_componentWillMount() {
        this.buscar()
        this.pesquisar()
    }

    buscar() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    verificar() {
        //inputs
        const nome = document.getElementById("nomeEquip").value;

        
        if (nome === '') {
               

        } else {

           this.save()
        }
    }

    clear() {
        this.setState({ Equipamentos: initialState.Equipamentos })
    }

    updateField(event) {
        const Equipamentos = { ...this.state.Equipamentos }
        Equipamentos[event.target.name] = event.target.value
        this.setState({ Equipamentos })
    }

    pesquisar() {
        $(document).ready(function () {
            setTimeout(() => {
                $('#tabela-equip').DataTable({
                    language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                    dom: 'Bfrtip',
                    buttons: [
                        'csv', 'excel', 'print'
                    ]
                });
            }, 2000)
        });
    }

    save() {
        const Equipamentos = this.state.Equipamentos
        const method = Equipamentos.id ? 'put' : 'post'
        const url = Equipamentos.id ? `${baseUrl}/${Equipamentos.id}` : baseUrl
        axios[method](url, Equipamentos)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ Equipamentos: initialState.Equipamentos, list })
            })
    }

    getUpdatedList(Equipamentos, add = true) {
        const list = this.state.list.filter(a => a.id !== Equipamentos.id)
        if (add) list.unshift(Equipamentos)
        return list
    }

    formulario() {
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
                <div className="row">
                <div className="col-md-6">
                        <div className="form-group">
                            <label className='fw-bold'>Equipamento: </label>
                            <input type="text" className="form-control"
                                name="nome" id="nomeEquip"
                                value={this.state.Equipamentos.nome}
                                onChange={e => this.updateField(e)}
                                placeholder="Equipamento ..."
                                required />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-start mt-3 mb-3">
                    <div className="col-3 col-md-6 d-flex justify-content-end align-items-end">
                        <button className="btn btn-primary mx-2 fw-bold"
                            onClick={e => this.verificar(e)}
                        >
                            Salvar
                        </button>

                        <button className="btn btn-danger fw-bold"
                            onClick={e => this.clear(e)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    load(Equipamentos) {
        this.setState({ Equipamentos })
    }

    remove(Equipamentos) {
        axios.delete(`${baseUrl}/${Equipamentos.id}`)
            .then(resp => {
                const list = this.getUpdatedList(Equipamentos, false)
                this.setState({ list })
            })
    }

    confirmar(Equipamentos) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(Equipamentos)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })

    }

    renderTable() {
        return (
            <table className="table mt-5 table-bordered table-striped" id="tabela-equip">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
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
        return this.state.list.map(Equipamentos => {
            return (
                <tr key={(Equipamentos.id)}>
                    <td>{Equipamentos.id}</td>
                    <td>{Equipamentos.nome}</td>

                    <td className="d-flex justify-content-around">
                        <button className='btn btn-warning mx-1'
                            onClick={() => this.load(Equipamentos)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(Equipamentos)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }



    render(){
        return(
            <div className='row mt-4'>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-4x fa-gamepad"></i>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.formulario()}
                </div>
                <div className="row mt-4">
                    {this.renderTable()}
                </div>
            </div>
        )
    }
}