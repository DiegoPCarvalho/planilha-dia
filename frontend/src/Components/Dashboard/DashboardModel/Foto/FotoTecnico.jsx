import React from 'react';



export default class FotoTecnico extends React.Component {
    render(){
        return(
            <img src={this.props.Tecnico} alt="" className='rounded-circle' style={{ height: 150, width: 100 }} />
        )
    }
}