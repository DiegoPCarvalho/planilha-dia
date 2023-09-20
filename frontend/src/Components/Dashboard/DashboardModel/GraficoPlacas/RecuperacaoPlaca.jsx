import React from 'react';
import Grafico from '../../../Graficos/Grafico';
import PuxarDados from '../Estrutura/PuxarDados';

export default class RecPLaca extends React.Component {
    
    render(){
        
        return(
            <>
           < Grafico tipo="pie" titulo="Recuperação de Placa" size="60%" subTitulo={`Total de Placas: ${this.props.total}`}
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='<b>{point.name}</b>: {point.y:1f}'
                            nomeSerie="Equipamento"
                            cor={true}
                            Legenda={true}
                            dado={this.props.placa}/>
            </>
        )
    }
}


export async function BuscarPlaca(tecnico, dia, mes, ano){
    const tabela = await PuxarDados("Geral");
    let dadosPlaca = []

    for (let i = 0; i < tabela.length; i++) {
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadosPlaca) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosPlaca) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosPlaca) }
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosPlaca) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadosPlaca) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosPlaca) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosPlaca) }
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosPlaca) }
    }

    let quantidadePlacas = dadosPlaca.reduce(function (todosNomes, dadosPlaca) {
        if (dadosPlaca in todosNomes) {
            todosNomes[dadosPlaca]++;
        } else {
            todosNomes[dadosPlaca] = 1;
        }
        return todosNomes;
    }, {});

    let dadosPlacaFinal = Object.entries(quantidadePlacas).map(([name, y]) => ({ name, y }));

    let dado = [{name: "rec", y:0}]

    if(dadosPlacaFinal.length !== 0){

        return dadosPlacaFinal
    }else{
        return dado
    }
    
}

function dados(tabela, dadosP) {
    if(("..." !== tabela.Placa) && ('' !== tabela.Placa) && ("Recuperado" !== tabela.Placa) && (undefined !== tabela.Placa)){
        dadosP.push(tabela.Placa)
    }
}
