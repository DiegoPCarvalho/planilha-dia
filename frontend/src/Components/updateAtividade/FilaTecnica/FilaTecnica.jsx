import React from "react";
import { initialState } from '../config';
import MenuItem from "../comp/MenuItem";
import Grade from "./Grade";
import { buscarFila } from '../busca';

export default class FilaTecnica extends React.Component {

    state = { ...initialState }

    componentDidMount(){
        this.buscar()
    }

    async buscar(){
        const data = await buscarFila()

        return this.setState({
            listarFila: data.dadoLista,
            listIni: data.dadoIni,
            listFim: data.dadoFim
        })
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-3 d-flex align-items-center">
                        <i className="fa fa-list-alt fa-4x"></i>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <i className="fa fa-retweet fa-3x btn btn-success" style={{ cursor: 'pointer' }} onClick={() => this.buscar()}/>
                    </div>
                    <div className="col-3 flex-column d-flex justify-content-end align-items-end">
                        <MenuItem direita nome="Formulário" h="6"
                            classe="fa fa-address-card fa-2x"
                            mudar={this.props.form}
                        />
                        <MenuItem direita nome="Tabela" h="6"
                            classe="fa fa-table fa-2x"
                            mudar={this.props.table}
                        />
                        <MenuItem direita nome="Reg. Antigo"
                            classe="fa fa-database fa-2x" h="6"
                            mudar={this.props.old}
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <Grade Fila={this.state.listarFila} Inicio={this.state.listIni} Fim={this.state.listFim}/>
                </div>
            </>
        )
    }
}