export function ArrayObjeto(dado) {
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

export function Series(tabela, servico, serie, tecnico, dia, mes, ano) {
    serie.push({
        name: servico.name,
        id: servico.name,
        data: RetornoSeries(tabela, servico.name, tecnico, dia, mes, ano)
    })
}


export function Drill(servico) {
    const serv = ArrayObjeto(servico)
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

function RetornoSeries(tabela, servico, tecnico, dia, mes, ano) {
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

    const serie = ArrayObjeto(dado)

    return serie

}