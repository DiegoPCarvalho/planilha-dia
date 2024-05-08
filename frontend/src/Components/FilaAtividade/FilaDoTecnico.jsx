import React from "react";

export default class FilaDoTecnico extends React.Component {
    render(){
        return(
            <div>Fila tecnica 
                <button onClick={this.props.mudar}>mudar</button>            
            </div>
        )
    }
}