import React from 'react';
import SupGif from '../../../Assets/gifs/carregar.gif';

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

export default function TabelaGnc(props) {

    function renderBuscando() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <img src={SupGif} alt="" style={estilo} />
                <span className="fw-bold mx-2">Aguardando</span>
            </div>
        )
    }

    return (
        <table className={`table table-bordered ${props.tb}`} id={props.id}>
            <thead className="table-dark">
                <tr className='fw-bold'>
                    {props.head}
                </tr>
            </thead>
            <tbody style={props.styles} className={props.classe}>
                    {props.dados === 0 ?
                        renderBuscando()
                        : props.children
                    }
            </tbody>
        </table>
    )
}