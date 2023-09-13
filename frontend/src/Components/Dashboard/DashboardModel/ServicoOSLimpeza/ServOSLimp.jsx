import React from 'react';

export default class ServOsLimp extends React.Component {

    render() {
        return (
            <>
                <div className="col-2 border"> Total OS {this.props.Tecnico}</div>
                <div className="col-2 border"> Total Servicos {this.props.Dia} </div>
                <div className="col-2 border"> Limpeza {this.props.Mes}/{this.props.Ano}</div>
            </>
        )
    }
}