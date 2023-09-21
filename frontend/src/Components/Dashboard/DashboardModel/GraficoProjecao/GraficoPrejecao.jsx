import React from 'react';
import Grafico from "../../../Graficos/Grafico";
import PuxarDados from "../Estrutura/PuxarDados";

export default class GraficoProjecao extends React.Component {
    render() {
        return (
            <>
                <Grafico tipo="spline" titulo="Quantidade por Ano"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Ordem de Serviço"
                    dado={this.props.projAnual} />
            </>
        )
    }
}

export async function BuscarProjAnual(tecnico, dia, mes, ano) {
    const tabela = await PuxarDados("Geral");
    let dadoJan = []
    let dadoFev = []
    let dadoMar = []
    let dadoAbr = []
    let dadoMai = []
    let dadoJun = []
    let dadoJul = []
    let dadoAgo = []
    let dadoSet = []
    let dadoOut = []
    let dadoNov = []
    let dadoDez = []

    for (let i = 0; i < tabela.length; i++) {
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) }
    }

   const dadoAnual = [
    {name: "Janeiro", y: dadoJan.length},
    {name: "Fevereiro", y: dadoFev.length},
    {name: "Março", y: dadoMar.length},
    {name: "Abril", y: dadoAbr.length},
    {name: "Maio", y: dadoMai.length},
    {name: "Junho", y: dadoJun.length},
    {name: "Julho", y: dadoJul.length},
    {name: "Agosto", y: dadoAgo.length},
    {name: "Setembro", y: dadoSet.length},
    {name: "Outubro", y: dadoOut.length},
    {name: "Novembro", y: dadoNov.length},
    {name: "Dezembro", y: dadoDez.length},
   ]

   return dadoAnual

}

function dados(tabela, dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) {
    if(1 === tabela.Mes){
        dadoJan.push(tabela.OS)
    }
    if(2 === tabela.Mes){
        dadoFev.push(tabela.OS)
    }
    if(3 === tabela.Mes){
        dadoMar.push(tabela.OS)
    }
    if(4 === tabela.Mes){
        dadoAbr.push(tabela.OS)
    }
    if(5 === tabela.Mes){
        dadoMai.push(tabela.OS)
    }
    if(6 === tabela.Mes){
        dadoJun.push(tabela.OS)
    }
    if(7 === tabela.Mes){
        dadoJul.push(tabela.OS)
    }
    if(8 === tabela.Mes){
        dadoAgo.push(tabela.OS)
    }
    if(9 === tabela.Mes){
        dadoSet.push(tabela.OS)
    }
    if(10 === tabela.Mes){
        dadoOut.push(tabela.OS)
    }
    if(11 === tabela.Mes){
        dadoNov.push(tabela.OS)
    }
    if(12 === tabela.Mes){
        dadoDez.push(tabela.OS)
    }
}