import React from "react";
import AddFila from "./AddFIla";
import FilaTecnica from "./FilaTecnico";
import DeletarFila from "./DeletarFIla";

const initialState = {
    mudarPagina: 'Add'
}

export default class Fila extends React.Component {
    
    state = { ...initialState }
    
    render(){
        return this.state.mudarPagina === 'Add' ? 
        (<AddFila  mudar={() => this.setState({ mudarPagina: 'Fila'})}/>) : this.state.mudarPagina === 'Fila' ?
            (<FilaTecnica  add={() => this.setState({ mudarPagina: 'Add'})}
                del={() => this.setState({mudarPagina: 'Del'})}/>) 
                : (<DeletarFila add={() => this.setState({ mudarPagina: 'Add'})}
                    fila={() => this.setState({ mudarPagina: 'Fila'})} />)
    }
}