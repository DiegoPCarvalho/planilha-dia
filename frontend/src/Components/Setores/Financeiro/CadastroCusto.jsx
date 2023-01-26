import React from "react";
// import $ from 'jquery';
// import CurrencyInput from 'react-currency-masked-input'

import IntlCurrencyInput from "react-intl-currency-input";
import axios from 'axios';
import Url from '../../Url/Url';

const banco = "CentroCustoRecurso";
const baseUrl = Url(banco);


const currencyConfig = {
    locale: "pt-BR",
    formats: {
        number: {
            BRL: {
                // style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        },
    },
}

const initialState = {
    CustoRecurso: {
        Data: data(),
        Dia: dia(),
        Mes: mes(),
        Ano: ano(),
        Departamento: '',
        Recurso: '',
        Usuario: localStorage.usuario
    },
    list: []
}

function data() {
    let da = new Date();
    return da
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
        
    }

    verificar() {
        const money = document.getElementById("money").value
        const depar_cad = document.getElementById("depar-cad").value;

        if ((money === '') || (depar_cad === ('...'))) {
            
        } else if ((money !== '') || depar_cad !== ("...")) {
            this.save()
        }
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
                this.setState({ CustoRecurso: initialState.CustoRecurso })
            })
    }

    formulario() {
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
                <div className="d-flex flex-row justify-content-between">
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
                            <label>Target:</label>
                            <input id="money" 
                                type="money"
                                className="form-control money"
                                name="Recurso"
                                placeholder="R$ 0,00"
                                value={this.state.CustoRecurso.Recurso}
                                onChange={e => this.updateField(e)}
                                min="0.00" step="0.01"
                            required 
                            />
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
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 d-flex align-items-end">
                            <button onClick={e => this.verificar(e)} className="btn btn-success mx-2">Salvar</button>
                            <button onClick={e => this.clear(e)} className="btn btn-danger mx-1">Cancelar</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-2">
                    <div className="col-12">
                        <i class="fa fa-file-text-o fa-5x"></i>
                    </div>
                </div>
                <div id="Formulario">
                    {this.formulario()}
                </div>
            </div>
        )
    }
}