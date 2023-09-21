import React from 'react';
import Grafico from '../../../Graficos/Grafico';
import PuxarDados from '../Estrutura/PuxarDados';

export default class AvulsoContrato extends React.Component{
    render(){
        return(
            <>
             <Grafico tipo="column" titulo="Avulso X Contrato"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Avulso X Contrato"
                            cor={true}
                            dado={this.props.avulsoContrato}
                            serie={this.props.serie}
                            />
            </>
        )
    }
}

export async function BuscarAvulsoContrato(tecnico, dia, mes, ano){
    const tabela = await PuxarDados("Geral")
    let avulso = []
    let contratos = []
    let contrato = []

    for(let i = 0; i < tabela.length; i++){
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], avulso, contrato, contratos) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], avulso, contrato, contratos) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], avulso, contrato, contratos) }
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], avulso, contrato, contratos) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], avulso, contrato) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], avulso, contrato, contratos) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], avulso, contrato, contratos) }
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], avulso, contrato, contratos) }
    }

    let quantidadeContratos = contratos.reduce(function (todosNomes, contratos) {
        if (contratos in todosNomes) {
            todosNomes[contratos]++;
        } else {
            todosNomes[contratos] = 1;
        }
        return todosNomes;
    }, {});

    let dadosContratosFinal = Object.entries(quantidadeContratos).map(([name, y]) => ({ name, y }));

    const serie = [{
        name: "Contrato",
        id: "Contrato",
        data: dadosContratosFinal
    }]

    const dadoFinal = [
        {name: "Avulso", y: avulso.length},
        {name: "Contratos", y: contrato.length, drilldown: "Contrato"},
    ]

    const objFinal = {
        dadoPrimario: dadoFinal,
        dadoSerie: serie
    }

    return objFinal

}

function dados(tabela, avulso, contrato, contratos) {
    if("Avulso" === tabela.Contrato){
        avulso.push(tabela.OS)
    }else
    if(("Avulso" !== tabela.Contrato) && (undefined !== tabela.Contrato) && ("Contrato Shopee" !== tabela.Contrato)){
        contrato.push(tabela.OS)
        contratos.push(tabela.Contrato)
    }
}