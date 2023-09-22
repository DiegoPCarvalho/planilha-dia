import React from 'react';
import Grafico from '../../../Graficos/Grafico';
import PuxarDados from '../Estrutura/PuxarDados';

export default class Servico extends React.Component {
    render() {
        return (
            <>
                <Grafico tipo="pie" titulo="Serviços"
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                    texto='<b>{point.name}</b>: {point.y:1f}'
                    nomeSerie="Serviços"
                    cor={true}
                    dado={this.props.servico}
                    serie={this.props.serie}
                />
            </>
        )
    }
}

export async function BuscarServico(tecnico, dia, mes, ano) {
    const tabela = await PuxarDados("Geral")
    let servico = []
    let serie = []


    for (let i = 0; i < tabela.length; i++) {
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], servico) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], servico) }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], servico) }
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], servico) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) { dados(tabela[i], servico) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], servico) }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], servico) }
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { dados(tabela[i], servico) }
    }

    const servicoFinal = drill(servico)

    for (let x = 0; x < servicoFinal.length; x++) {
       await series(tabela, servicoFinal[x], serie, tecnico, dia, mes, ano)
    }

    const objServ = {
        servicos: servicoFinal,
        series: serie
    }

    return objServ
}

function dados(tabela, servico) {
    servico.push(tabela.Servico)
}

function arrayObjeto(dado) {
    let quantidade = dado.reduce(function (todosNomes, dado) {
        if (dado in todosNomes) {
            todosNomes[dado]++;
        } else {
            todosNomes[dado] = 1;
        }
        return todosNomes;
    }, {});

    let dadoFinal = Object.entries(quantidade).map(([name, y]) => ({ name, y }))

    return dadoFinal
}

function series(tabela, servico, serie, tecnico, dia, mes, ano) {
    serie.push({
        name: servico.name,
        id: servico.name,
        data: retornoSeries(tabela, servico.name, tecnico, dia, mes, ano)
    })
}

function drill(servico) {
    const serv = arrayObjeto(servico)
    let servicoDrill = []

    for (let x = 0; x < serv.length; x++) {
        servicoDrill.push({
            name: serv[x].name,
            y: serv[x].y,
            drilldown: serv[x].name
        })
    }

    return servicoDrill
}

function retornoSeries(tabela, servico, tecnico, dia, mes, ano) {
    let dado = []

    for (let i = 0; i < tabela.length; i++) {
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
            if ((servico === tabela[i].Servico) && (undefined !== tabela[i].Contrato)) {
                dado.push(tabela[i].Contrato)
            }
        }

    }

    const serie = arrayObjeto(dado)

    return serie

}