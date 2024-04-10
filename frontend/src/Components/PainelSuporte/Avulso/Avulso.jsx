import React from "react";
import SupGif from '../../../Assets/gifs/tabSup.gif';

const initialState = {

}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

export default class Avulso extends React.Component {

    renderTable(Equip, dados) {
        return (
            <table style={{ maxHeight: '50vh' }} className="table  mt-3">
                <thead className='table-dark'>
                    <tr>
                        <th className="d-flex justify-content-center">{Equip}</th>
                    </tr>
                </thead>
                <tbody style={{ overflow: 'auto', height: 400 }} className="d-block">
                    {dados.length === 0 ? 
                        this.renderBuscando()
                     : ({ dados })}
                </tbody>
            </table>
        )
    }

    renderBuscando() {
        return (
                <div className="d-flex justify-content-center align-items-center">
                    <img src={SupGif} alt="" style={estilo} />
                    <span className="fw-bold mx-2">Aguando suportes!!</span>
                </div>
        )
    }

    render() {
        return (
            <>
                <div className='row d-flex justify-content-between'>
                    <div className='col-1 mb-3'>
                        <i className="fa fa-phone-square fa-4x"></i>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-md-4'>
                        {this.renderTable('Coletor', [])}
                    </div>
                    <div className='col-12 col-md-4 '>
                        {this.renderTable('Leitor', [])}
                    </div>
                    <div className='col-12 col-md-4 '>
                        {this.renderTable('Impressora', [])}
                    </div>
                </div>
            </>
        )
    }
}