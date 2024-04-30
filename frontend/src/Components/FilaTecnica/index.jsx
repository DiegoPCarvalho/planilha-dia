import React from "react";
import AddFila from "./AddFIla";
import FilaTecnica from "./FilaTecnico";

const initialState = {
    mudarPagina: false
}

export default class Fila extends React.Component {
    
    state = { ...initialState }
    
    render(){
        return this.state.mudarPagina === false ? 
        (<AddFila  mudar={() => this.setState({ mudarPagina: true})}/>)
        : (<FilaTecnica  mudar={() => this.setState({ mudarPagina: false})}/>)
    }
}