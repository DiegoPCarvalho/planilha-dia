import React from 'react';
import Grafico from "../../../Graficos/Grafico";
import PuxarDados from "../Estrutura/PuxarDados";

export default class GraficoTecnicos extends React.Component {
    render() {
        return (
            <>
                <Grafico tipo="bar" titulo="Produtividade por Técnicos"
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    nomeSerie="Serviço"
                    cor={true}
                    dado={this.props.tecnico} />
            </>
        )
    }
}

export async function BuscarTecnicos(tecnico, dia, mes, ano) {
    const tabela = await PuxarDados("Geral");
    let dadosTecnicos = []

    for (let i = 0; i < tabela.length; i++) {
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadosTecnicos) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosTecnicos) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosTecnicos) }
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosTecnicos) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadosTecnicos) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosTecnicos) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosTecnicos) }
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosTecnicos) }
    }

    let quantidadeTecnicos = dadosTecnicos.reduce(function (todosNomes, dadosTecnicos) {
        if (dadosTecnicos in todosNomes) {
            todosNomes[dadosTecnicos]++;
        } else {
            todosNomes[dadosTecnicos] = 1;
        }
        return todosNomes;
    }, {});

    let dadosTecnicosFinal = Object.entries(quantidadeTecnicos).map(([name, y]) => ({ name, y }));

    let dado = [{name: "Tecnico", y: 0}]

    if(dadosTecnicosFinal.length !== 0){
        return dadosTecnicosFinal
    }else{
        return dado
    }

}

function dados(tabela, dadosTec) {
    if (("Diogo Selmini" !== tabela.Tecnico) && ("Lucas Felician" !== tabela.Tecnico) && ("Allan Zulino" !== tabela.Tecnico) && ("Marcio" !== tabela.Tecnico) && (undefined !== tabela.Tecnico)) {
        dadosTec.push(tabela.Tecnico)
    }
}