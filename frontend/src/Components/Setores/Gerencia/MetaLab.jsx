import React from 'react';
import axios from 'axios';
import Url from '../../Url/Url';
import { confirmAlert } from "react-confirm-alert";

import $ from 'jquery';

const baseUrl = Url("Meta");
const baseUrl3 = Url("LoginUsuario");

const initialState = {
    MetaLabo: {
        Mes: mes(),
        Ano: ano(),
        Tecnico: '',
        Meta: ''
    },
    list: [],
    optionTec: [0]
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

export default class MetaLab extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.BuscarTec()
        this.consultarBanco()
        this.validacao()
        this.pesquisar()
    }

    validacao(){
        if (localStorage.AdmGerencia === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }

    pesquisar(){
        $(document).ready(function () {
            setTimeout(() => {
                $('#tabela').DataTable({
                    language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                    dom: 'Bfrtip',
                    buttons: [
                        'csv', 'excel', 'print'
                    ]
                });
            }, 1000)
        });
    }

    consultarBanco() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    save() {
        const MetaLabo = this.state.MetaLabo
        const method = MetaLabo.id ? 'put' : 'post'
        const url = MetaLabo.id ? `${baseUrl}/${MetaLabo.id}` : baseUrl
        axios[method](url, MetaLabo)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ MetaLabo: initialState.MetaLabo, list })
            })
    }

    clear() {
        this.setState({ MetaLabo: initialState.MetaLabo })
    }

    updateField(event) {
        const MetaLabo = { ...this.state.MetaLabo }
        MetaLabo[event.target.name] = event.target.value
        this.setState({ MetaLabo })
    }

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    }

    verificar() {
        let Tecnico = document.getElementById("Tecnico").value;
        let Meta = document.getElementById("Meta").value;

        if ((Tecnico === '') || (Meta === '')) {

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
                        <div className="col-6 col-md-3">
                            <div className="form-group">
                                <label className='fw-bold'>Técnico: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Tecnico" id="Tecnico"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.MetaLabo.Tecnico}
                                    required
                                >   {this.tecnicos()}
                                    <option selected disabled value="">Selecione o Tecnico</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <label className='fw-bold'>Meta:</label>
                            <div className="form-group">
                                <input id="Meta"
                                    type="number"
                                    className="form-control"
                                    name="Meta"
                                    placeholder='...'
                                    value={this.state.MetaLabo.Meta}
                                    onChange={e => this.updateField(e)}
                                    min="0" step="1"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-6 d-flex justify-content-end align-items-end">
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
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div class="alert-box success">Salvo com Sucesso!!!</div>
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
                        <th>Data</th>
                        <th>Tecnico</th>
                        <th>Meta</th>
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
        return this.state.list.map(MetaLabo => {
            return (
                <tr key={(MetaLabo.id)}>
                    <td>{`${MetaLabo.Mes} / ${MetaLabo.Ano} `}</td>
                    <td>{MetaLabo.Tecnico}</td>
                    <td>{MetaLabo.Meta}</td>

                    <td className="d-flex justify-content-around">
                        <button className='btn btn-warning mx-1'
                        onClick={() => this.load(MetaLabo)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(MetaLabo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    load(MetaLabo) {
        this.setState({ MetaLabo })
    }

    remove(MetaLabo) {
        axios.delete(`${baseUrl}/${MetaLabo.id}`)
            .then(resp => {
                const list = this.getUpdatedList(MetaLabo, false)
                this.setState({ list })
            })
    }

    getUpdatedList(MetaLabo, add = true) {
        const list = this.state.list.filter(a => a.id !== MetaLabo.id)
        if (add) list.unshift(MetaLabo)
        return list
    }

    confirmar(MetaLabo) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(MetaLabo)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })

    }

    async BuscarTec() {
        const tec = await axios(baseUrl3).then(resp => resp.data)

        let dadosTec = []

        for (let i = 0; i < tec.length; i++) {
            if ("Laborátorio" === tec[i].departamento) {
                dadosTec.push({
                    nome: tec[i].nomeCompleto
                })
            }
        }

        return this.setState ({
            optionTec: dadosTec
        })
    }

    tecnicos() {
      return this.state.optionTec.map(Nome => {
        return (
            <option>{Nome.nome}</option>
        )
      })
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
                <div className="mt-5 col-12 mb-5" id="Tabela">
                    {this.renderTable()}
                </div>
            </div>
        )
    }
}