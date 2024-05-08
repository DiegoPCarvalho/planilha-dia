import React from "react";

export default class TabelaFila extends React.Component {
    render(){
        return(
            <div>Tabela
                <button onClick={this.props.mudar}>mudar</button>            
            </div>
        )
    }
}