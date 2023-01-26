import React from "react";
// import $ from 'jquery';
import CurrencyInput from 'react-currency-masked-input'

import IntlCurrencyInput from "react-intl-currency-input"

const currencyConfig = {
    locale: "pt-BR",
    formats: {
        number: {
            BRL: {
                // style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                required: "required"
            },
        },
    },
}




export default class CadCusto extends React.Component {

    componentWillMount() {

    }

   

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-2">
                    <div className="col-12">
                        <i class="fa fa-file-text-o fa-5x" aria-hidden="true"></i>
                    </div>
                </div>
                <form>
                    <div className="row mt-4">
                        <div className="col-6 col-md-3">
                            <label>Departamento:</label>
                            <select className="form-select" id="depar-cad"
                                name='departamento'
                                required
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
                            <label>Target:</label>
                            {/* <input id="taret" type="number"
                                className="form-control money"
                                name="email" 
                                placeholder="R$ 0,00"
                                min="0.00"  step="0.01"
                                required /> */}
                            {/* <CurrencyInput
                            id="money"
                            name="target"
                            className="form-control"
                            decimalsLimit={2}
                            placeholder="R$ 0,00"
                            decimalSeparator=","
                            groupSeparator="."/> */}

                            <IntlCurrencyInput
                                id="money"
                                currency="BRL"
                                className="form-control"
                                config={currencyConfig}
                            />
                        </div>
                        <div className="col-6 col-md-3 d-flex align-items-end">
                            <button type="submit" className="btn btn-success mx-2">Salvar</button>
                            <button type="submit" className="btn btn-danger mx-1">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}