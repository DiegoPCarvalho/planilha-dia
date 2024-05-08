import React from "react";
import FilaDoTecnico from "./FilaDoTecnico";
import TabelaFila from "./TabelaFila";

const initialState = {
    mudarPagina: false
}

export default class HomeFilaTecnico extends React.Component {
    state = { ...initialState }

    render(){
        return this.state.mudarPagina === false ? <FilaDoTecnico mudar={() => this.setState({mudarPagina: true})}/> : (
            <TabelaFila  mudar={() => this.setState({mudarPagina: false})}/>
        )
    }
}