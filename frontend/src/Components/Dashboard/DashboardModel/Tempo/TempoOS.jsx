import React from 'react';
import ModalTemp from '../../../Modal/ModalTecnico';

export default class Tempo extends React.Component {
    render() {
        return (
            <>
                <ModalTemp corModal="secondary" nomeBotao="Tempo" tamanho="sm"
                    classe='h4 fw-bold' class="bg-dark text-light" crb="white"
                    Relatorio={
                        <>
                            <div className=''>
                                <span className='h5 fw-bold bg-dark text-light p-1 rounded'>Bruto:</span>
                                <span className='mx-2 h5 fw-bold bg-success text-light p-1 rounded'>
                                    {!this.props.bruto || this.props.bruto.length === 0 ? '00:00:00' : this.props.bruto}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <span className='h5 fw-bold bg-dark text-light p-1 rounded'>Líquido:</span>
                                <span className='mx-2 h5 fw-bold bg-success text-light p-1 rounded'>
                                {!this.props.liquido || this.props.liquido.length === 0 ? '00:00:00' : this.props.liquido}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <span className='h5 fw-bold bg-dark text-light p-1 rounded'>Problema:</span>
                                <span className='mx-2 h5 fw-bold bg-success text-light p-1 rounded'>
                                {!this.props.problema || this.props.problema.length === 0 ? '00:00:00' : this.props.problema}
                                </span>
                            </div>
                        </>
                    }
                />
            </>
        )
    }
}