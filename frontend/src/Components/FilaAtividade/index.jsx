import React from "react";
import FilaDoTecnico from "./FilaDoTecnico";

const initialState = {
    mudarPagina: false
}

export default class HomeFilaTecnico extends React.Component {
    state = { ...initialState }

    render(){
        return this.state.mudarPagina === false ? <FilaDoTecnico mudar={() => this.setState({mudarPagina: true})}/> : (
            <div> <button onClick={() => this.setState({ mudarPagina: false})}>voltar</button></div>
        )
    }
}