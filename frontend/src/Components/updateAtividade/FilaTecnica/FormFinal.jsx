import React from 'react';
import Entrada from '../comp/Entrada';
import Botao from '../comp/Botao';

export default function FormularioFinal(props) {
    return (
        <form action="javascript:myFunction(); return false;">
            <div className='row'>
                <Entrada
                    texto="Observação:"
                    valor={props.valor}
                    linhas={4}
                    required
                    classe="form-control"
                    mensagem={"Digite o seu Problema ..."}
                    mudou={props.mudou}
                />
            </div>
            <div className="row d-flex justify-content-end mt-2">
                <div className="col-3">
                    <Botao 
                    onClick={props.onClick}
                    className="btn btn-primary fw-bold"
                    >Finalizar</Botao>
                </div>
            </div>
        </form>
    )
}