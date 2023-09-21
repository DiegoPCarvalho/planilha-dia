import React from 'react';
import Grafico from "../../../Graficos/Grafico";
import PuxarDados from "../Estrutura/PuxarDados";

export default class GraficoEquipamento extends React.Component {
    render() {
        return (
            <>
                <Grafico tipo="column" titulo="Equipamentos"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Equipamento"
                            cor={true}
                    dado={this.props.equip} />
            </>
        )
    }
}

export async function BuscarEquipamento(tecnico, dia, mes, ano) {
    const tabela = await PuxarDados("Geral");
    let dadosEquipamento = []

    for (let i = 0; i < tabela.length; i++) {
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadosEquipamento) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosEquipamento) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosEquipamento) }
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosEquipamento) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], dadosEquipamento) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosEquipamento) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosEquipamento) }
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], dadosEquipamento) }
    }

    let qtdEquipamento = dadosEquipamento.reduce(function (todosNomes, dadosEquipamento) {
        if (dadosEquipamento in todosNomes) {
            todosNomes[dadosEquipamento]++;
        } else {
            todosNomes[dadosEquipamento] = 1;
        }
        return todosNomes;
    }, {});

    let dadosEquipamentoFinal = Object.entries(qtdEquipamento).map(([name, y]) => ({ name, y }));

    let dado = [{name: "Equip.", y: 0}]

    if(dadosEquipamentoFinal.length !== 0){
        return dadosEquipamentoFinal
    }else{
        return dado
    }

}

function dados(tabela, dadosEquip) {
        dadosEquip.push(tabela.Equipamento)
}