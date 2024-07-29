import React from 'react';
import CardOS from '../../../Card/CardGD';
import PuxarDados from '../Estrutura/PuxarDados';


export default class ServOsLimp extends React.Component {

    render() {
        return (
            <>
                <div className="col-3  d-flex align-items-center justify-content-center"> <CardOS bg="dark" nomeTitulo="OS" dado={this.props.TotalOS} icone="clone" tipoTexto="text-light" /> </div>
                <div className="col-3  d-flex align-items-center justify-content-center"> <CardOS bg="success" nomeTitulo="Serviço" dado={this.props.TotalServico} icone="briefcase" tipoTexto="text-light" /></div>
                <div className="col-3  d-flex align-items-center justify-content-center"> <CardOS bg="primary" nomeTitulo="Limpeza" dado={this.props.Limpeza} icone="paint-brush" tipoTexto="text-light" /></div>
            </>
        )
    }
}

export async function BuscarDados(tecnico, dia, mes, ano){
    const tabela = await PuxarDados("Geral")
    
        let dadoTotal = []
        let dadoLimp = []
    
        for(let i = 0; i < tabela.length; i++){
            if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadoTotal, dadoLimp) }
            if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoTotal, dadoLimp) }
            if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoTotal, dadoLimp) }
            if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoTotal, dadoLimp) }
            if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadoTotal, dadoLimp) }
            if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoTotal, dadoLimp) }
            if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoTotal, dadoLimp) }
            if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoTotal, dadoLimp) }
        }

        const osSemRep = [...new Set(dadoTotal)]

        const cardServ = {
            totalOS: osSemRep.length,
            totalServ: dadoTotal.length,
            limpeza: dadoLimp.length
        }

        return cardServ

        
}


function dados(tabela, dadoTotal, dadoLimp){
    dadoTotal.push(tabela.OS)
    if("Limpeza" === tabela.Servico){
        dadoLimp.push(tabela.OS)
    }
}