import React from 'react';
import CardOS from '../../../Card/CardGD';
import PuxarDados from '../Estrutura/PuxarDados';

const puxar = new PuxarDados();

export default class ServOsLimp extends React.Component {

    render() {
        return (
            <>
                <div className="col-3 border d-flex aligh-items-center"> <CardOS bg="dark" nomeTitulo="Total OS" dado={this.props.TotalOS} icone="clone" tipoTexto="text-light" /> </div>
                <div className="col-3 border d-flex aligh-items-center"> <CardOS bg="success" nomeTitulo="Total Serviço" dado={this.props.TotalServico} icone="briefcase" tipoTexto="text-light" /></div>
                <div className="col-2 border d-flex aligh-items-center"> <CardOS bg="primary" nomeTitulo="Limpeza" dado={this.props.Limpeza} icone="paint-brush" tipoTexto="text-light" /></div>
            </>
        )
    }
}

export async function BuscarDados(){
    const tabela = await puxar.buscarDadosBanco("Geral")
    
        let geral = []
    
        for(let i = 0; i < tabela.length; i++){
            geral.push(tabela[i].OS)
        }

       return geral.length
}