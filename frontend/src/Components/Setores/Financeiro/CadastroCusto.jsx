import React from "react";
// import $ from 'jquery';
// import CurrencyInput from 'react-currency-masked-input'

// import IntlCurrencyInput from "react-intl-currency-input";
import axios from 'axios';
import Url from '../../Url/Url';
import $ from 'jquery';
import { confirmAlert } from "react-confirm-alert";

const banco = "CentroCustoRecurso";
const baseUrl = Url(banco);


// const currencyConfig = {
//     locale: "pt-BR",
//     formats: {
//         number: {
//             BRL: {
//                 // style: "currency",
//                 currency: "BRL",
//                 minimumFractionDigits: 2,
//                 maximumFractionDigits: 2,
//             },
//         },
//     },
// }

const initialState = {
    CustoRecurso: {
        Dia: dia(),
        Mes: mes(),
        Ano: ano(),
        Departamento: '',
        Recurso: '',
        // Usuario: localStorage.usuario
    },
    list: []
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


export default class CadCusto extends React.Component {

    state = { ...initialState }

    componentWillMount() {
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

        this.consultarBanco()
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmGerencia === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }

    consultarBanco() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    verificar() {
        const money = document.getElementById("money").value
        const depar_cad = document.getElementById("depar-cad").value;

        if ((money === '') || (depar_cad === '...')) {

        } else if ((money !== '') && (depar_cad !== "...")) {
            this.save()
        }
    }



    confirmar(CustoRecurso) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(CustoRecurso)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })

    }

    load(CustoRecurso) {
        this.setState({ CustoRecurso })
    }

    getUpdatedList(CustoRecurso, add = true) {
        const list = this.state.list.filter(a => a.id !== CustoRecurso.id)
        if (add) list.unshift(CustoRecurso)
        return list
    }

    remove(CustoRecurso) {
        axios.delete(`${baseUrl}/${CustoRecurso.id}`)
            .then(resp => {
                const list = this.getUpdatedList(CustoRecurso, false)
                this.setState({ list })
            })
    }

    clear() {
        this.setState({ CustoRecurso: initialState.CustoRecurso })
    }

    updateField(event) {
        const CustoRecurso = { ...this.state.CustoRecurso }
        CustoRecurso[event.target.name] = event.target.value
        this.setState({ CustoRecurso })
    }


    save() {
        const CustoRecurso = this.state.CustoRecurso
        const method = CustoRecurso.id ? 'put' : 'post'
        const url = CustoRecurso.id ? `${baseUrl}/${CustoRecurso.id}` : baseUrl
        axios[method](url, CustoRecurso)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ CustoRecurso: initialState.CustoRecurso, list })
            })
    }

    formulario() {
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
                <div>
                    <div className="row mt-4">
                        <div className="col-6 col-md-3">
                            <label>Departamento:</label>
                            <select className="form-select" id="depar-cad"
                                name='Departamento'
                                required
                                value={this.state.CustoRecurso.Departamento}
                                onChange={e => this.updateField(e)}
                            >
                                <option selected disabled value="">...</option>
                                <option>Diretoria</option>
                                <option>Gerência</option>
                                <option>Financeiro</option>
                                <option>Fiscal</option>
                                <option>Compras</option>
                                <option>RH</option>
                                <option>Estoque</option>
                                <option>Expedição</option>
                                <option>Logística</option>
                                <option>Recepção</option>
                                <option>Laborátorio</option>
                                <option>Comercial</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-3">
                            <label>Recurso:</label>
                            <div className="input-group">
                            <span className="input-group-text bg-success fw-bold text-light" id="basic-addon1">R$</span>
                            <input id="money"
                                type="number"
                                className="form-control money"
                                name="Recurso"
                                placeholder="0,00"
                                value={this.state.CustoRecurso.Recurso}
                                onChange={e => this.updateField(e)}
                                min="0.00" step="0.01"
                                required
                            />
                            </div>
                            {/* <CurrencyInput
                    id="money"
                    name="Recurso"
                    className="form-control"
                    decimalsLimit={2}
                    value={this.state.CustoRecurso.Recurso}
                    onChange={e => this.updateField(e)}
                    placeholder="R$ 0,00"
                    decimalSeparator=","
                    currency="BRL"
                    groupSeparator="."
                    config={currencyConfig}/> */}

                            {/* <IntlCurrencyInput
                                id="money"
                                name="Recurso"
                                value={this.state.CustoRecurso.Recurso}
                                onChange={e => this.updateField(e)}
                                currency="BRL"
                                className="form-control"
                                config={currencyConfig}
                            /> */}
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-end">
                            <button onClick={e => this.verificar(e)} className="btn btn-success mx-2 fw-bold">Salvar</button>
                            <button onClick={e => this.clear(e)} className="btn btn-danger mx-1 fw-bold">Cancelar</button>
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
                        <th>ID</th>
                        <th>Departamento</th>
                        <th>Recurso</th>
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
        return this.state.list.map(CustoRecurso => {
            return (
                <tr key={(CustoRecurso.id)}>
                    <td>{`${CustoRecurso.Dia} / ${CustoRecurso.Mes} / ${CustoRecurso.Ano}`}</td>
                    <td>{CustoRecurso.id}</td>
                    <td>{CustoRecurso.Departamento}</td>
                    <td>{CustoRecurso.Recurso}</td>
                    <td className="d-flex justify-content-around">
                        <button className='btn btn-warning mx-1'
                        onClick={() => this.load(CustoRecurso)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(CustoRecurso)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row mt-2">
                    <div className="col-1">

                        <i class="fa fa-file-text-o fa-5x"></i>
                    </div>
                    <div className="col-11 justify-content-center d-flex align-items-center">
                        <div className="d-flex justify-content-center">
                            <h3 class="p-2 fw-bold bg-dark text-light rounded">Cadastro de Custo</h3>
                        </div>
                    </div>

                </div>
                <div id="Formulario">
                    {this.formulario()}
                </div>
                <div className="mt-5 col-12 mb-5" id="Tabela">
                    {this.renderTable()}
                </div>
            </div>
        )
    }
}