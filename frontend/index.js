const axios = require('axios')
const app = require('express')()
const cors = require('cors')


app.use(cors())


app.get('/', async (req, res) => {

    const tabelaGeral = await buscarDados()

    let dado = []

    tabelaGeral.map(tabelaGeral => {
        dado.push({
            OS: tabelaGeral.OSID,
            Cliente: tabelaGeral.PessoaFantasia,
            Servico: servico(tabelaGeral.EstagioDescricao, tabelaGeral.DescricaoTipoOS),
            Equipamento: equipamento(tabelaGeral.NomeEquipamento),
            Modelo: tabelaGeral.NomeEquipamento,
            TipoOS: contrato(tabelaGeral.DescricaoTipoOS),
            NS: tabelaGeral.EquipamentoLTS
        })
    })

    res.json(dado)
})


app.get('/suporteAvulso', async (req, res) => {

    const tabelaGeral = await axios(bancoApi(2)).then(resp => resp.data)

    let dadoSuporteAvulso = []

    tabelaGeral.map(tabelaGeral => {
        dadoSuporteAvulso.push({
            Data: tabelaGeral.OSData,
            OS: tabelaGeral.OSID,
            Servico: tabelaGeral.DescricaoTipoOS,
            Equipamento: tabelaGeral.NomeEquipamento,
            Cliente: tabelaGeral.PessoaFantasia,
            NS: tabelaGeral.EquipamentoLTS,
            AgenteComercial: tabelaGeral.AgenteNegNome,
            ObservacaoEquip: tabelaGeral.ObservacaoEquip
        })
    })

    res.json(dadoSuporteAvulso)

})

app.get('/suporteContrato', async (req, res) => {

    const tabelaGeral = await axios(bancoApi(25)).then(resp => resp.data)

    let dadoSuporteAvulso = []

    tabelaGeral.map(tabelaGeral => {
        dadoSuporteAvulso.push({
            Data: tabelaGeral.OSData,
            OS: tabelaGeral.OSID,
            Servico: tabelaGeral.DescricaoTipoOS,
            Equipamento: tabelaGeral.NomeEquipamento,
            Cliente: tabelaGeral.PessoaFantasia,
            NS: tabelaGeral.EquipamentoLTS,
            AgenteComercial: tabelaGeral.AgenteNegNome,
            ObservacaoEquip: tabelaGeral.ObservacaoEquip,
            Sla: sla(tabelaGeral.OSData)
        })
    })

    res.json(dadoSuporteAvulso)

})

app.get('/AguardandoVistoria', async (req, res) => {
    const tabela = await axios(bancoApi(3)).then(resp => {
        const registros = resp.data
        let dados = []

        registros.map(registro => {
            dados.push(gerenciador(registro))
        })

        return dados
    })

    res.json(tabela)
})

app.get('/Aprovado', async (req, res) => {
    const tabela = await axios(bancoApi(8)).then(resp => {
        const registros = resp.data
        let dados = []

        registros.map(registro => {
            dados.push(gerenciador(registro))
        })

        return dados
    })

    res.json(tabela)
})



app.listen(3001, (e) => {
    try {
        console.log("servidor online")
    }
    catch (err) {
        console.log("Erro: " + err)
    }
})


//#region logica formulario

async function buscarDados() {
    const tabela = await axios(bancoApi(1)).then(resp => resp.data)
    const tabela2 = await axios(bancoApi(2)).then(resp => resp.data)
    const tabela3 = await axios(bancoApi(3)).then(resp => resp.data)
    const tabela4 = await axios(bancoApi(4)).then(resp => resp.data)
    const tabela5 = await axios(bancoApi(5)).then(resp => resp.data)
    const tabela6 = await axios(bancoApi(6)).then(resp => resp.data)
    const tabela7 = await axios(bancoApi(7)).then(resp => resp.data)
    const tabela8 = await axios(bancoApi(8)).then(resp => resp.data)
    const tabela9 = await axios(bancoApi(9)).then(resp => resp.data)
    const tabela10 = await axios(bancoApi(10)).then(resp => resp.data)
    const tabela11 = await axios(bancoApi(11)).then(resp => resp.data)
    const tabela12 = await axios(bancoApi(12)).then(resp => resp.data)
    const tabela13 = await axios(bancoApi(13)).then(resp => resp.data)
    const tabela16 = await axios(bancoApi(16)).then(resp => resp.data)
    const tabela17 = await axios(bancoApi(17)).then(resp => resp.data)
    const tabela21 = await axios(bancoApi(21)).then(resp => resp.data)
    const tabela25 = await axios(bancoApi(25)).then(resp => resp.data)
    const tabela30 = await axios(bancoApi(30)).then(resp => resp.data)
    const tabelaGeral = [...tabela, ...tabela2, ...tabela3,
    ...tabela4, ...tabela5, ...tabela6, ...tabela7, ...tabela8,
    ...tabela9, ...tabela10, ...tabela11, ...tabela12, ...tabela13,
    ...tabela16, ...tabela17, ...tabela21, ...tabela25, ...tabela30]

    return tabelaGeral
}

function sla(data) {
    const d2 = new Date()

    const dif = d2 - new Date(d1)
    const diferenca = dif / (1000 * 60 * 60 * 24);

    return diferenca
}


function bancoApi(estagio) {
    return `http://app2.cosmoserp.com/zhaz/aWSPCosmosFBX.aspx?f2117e5dfa7f998f93afd92547d0ba9b,vApiOS,${estagio}`
}


function servico(serv, tipo) {
    if ((serv === "Aguardando Equipamento chegar na ZHAZ" || serv === "Aguardando Vistoria" || serv === "Em Vistoria" || serv === "Vistoriado") && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Laudo"
    } else if ((serv === "Aprovado (Aguardando Manutencao)" || serv === "'Em Manutencao / Atendimento'" || serv === "Manutencao Concluida / Limpeza") && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Manutenção Concluída"
    } else if (serv === "Reprovado (Aguardando Liberacao)" && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Revisão de Reprovado"
    } else if ((serv === "Aguardando Vistoria" || serv === "Em Manutencao / Atendimento" || serv === "Manutencao Concluida / Limpeza") && (tipo === "MANUTENCAO (ON-SITE)" || tipo === "C&A - (ON-SITE)")) {
        return "Chamado On-Site"
    } else if ((serv === "Suporte Remoto" || serv === "Abertura Suporte" || serv === "Em Atendimento - SR" || serv === "Vistoriado") && (tipo.match(/CONTRATO/) || tipo === "SUPORTE REMOTO" || tipo === "SUPORTE REMOTO - AMERICANAS" || tipo === "SUPORTE REMOTO - CONTRATO ASSAI")) {
        return "Suporte Remoto"
    } else if ((serv === "Expedicao e Faturamento") && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES" || tipo === "SUPORTE REMOTO" || tipo === "SUPORTE REMOTO - AMERICANAS" || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Limpeza"
    }
}

function equipamento(equip) {

    if (equip) {
        if (equip.match(/COLETOR DE/)) {
            return "Coletor de Dados"
        } else if (equip.match(/TERMINAL DE CONSULTA/)) {
            return "Terminal de Consulta"
        } else if (equip.match(/IMPRESSORA/)) {
            return "Impressora Térmica"
        } else if (equip.match(/LEITOR DE RFID/) || equip.match(/ANTENA RFID/)) {
            return "Leitor de RFID"
        } else if (equip.match(/LEITOR/)) {
            return "Leitor de Dados"
        } else if (equip.match(/3 POSICOES/)) {
            return "Carregador de 3 Posições"
        } else if (equip.match(/4 POSICOES/)) {
            return "Carregador de 4 Posições"
        } else if (equip.match(/5 POSICOES/)) {
            return "Carregador de 5 Posições"
        } else if (equip.match(/6 POSICOES/)) {
            return "Carregador de 6 Posições"
        } else if (equip.match(/1 POSICOES/)) {
            return "Berço de Comunicação"
        } else if (equip.match(/FONTE/)) {
            return "Fonte de Alimentação"
        } else if (equip.match(/CABO CONFECCIONADO/)) {
            return "Cabo Confeccionado"
        } else if (equip.match(/BATERIA/)) {
            return "Bateria"
        } else if (equip.match(/TECLADO/)) {
            return "Teclado"
        } else if (equip.match(/GATILHO/)) {
            return "Gatilho Móvel"
        } else if (equip.match(/TABLET/) && equip !== "BERCO DE 4 POSICOES PARA TABLET ZEBRA ET51") {
            return "Tablet"
        } else if (equip.match(/CELULAR/)) {
            return "Smartphone"
        } else if (equip === "DOCKING STATION ZEBRA GAMBER JOHNSON HDMI") {
            return "Doca p/Tablet"
        }
        else {
            return equip
        }
    } else {
        return
    }
}

function contrato(cont) {
    if (cont.match(/CONTRATO AMERICANAS/)) {
        return "Contrato B2W"
    } else if (cont.match(/CONTRATO ASSAI/)) {
        return "Contrato Assaí"
    } else if (cont.match(/CONTRATO C&A/)) {
        return "Contrato C&A"
    } else if (cont.match(/CONTRATO MARISA/)) {
        return "Contrato Marisa"
    } else if (cont.match(/CONTRATO PERALTA - SEAL/)) {
        return "Contrato Peralta - Seal"
    } else if (cont.match(/CONTRATO MACHADO/)) {
        return "Contrato Machado"
    } else if (cont.match(/CONTRATO DISCRA/)) {
        return "Contrato Discra"
    } else if (cont.match(/CONTRATO COMFRIO/)) {
        return "Contrato Comfrio"
    } else if (cont.match(/CONTRATO BOTICARIO/)) {
        return "Contrato Boticário"
    } else if (cont.match(/CONTRATO PILKINGTON/)) {
        return "Contrato Pilkington"
    } else {
        return "Avulso"
    }
}
//#endregion

//#region logica /AgardandoVistoria
function gerenciador(registro) {
    return {
        OS: registro.OSID,
        Data: registro.OSData,
        DataFinalMovto: registro.DataFinalMovto,
        Cliente: registro.PessoaFantasia,
        Servico: servico(registro.EstagioDescricao, registro.DescricaoTipoOS),
        Equipamento: registro.NomeEquipamento,
        NS: registro.EquipamentoLTS,
        TipoOS: contrato(registro.DescricaoTipoOS),
    }
}

//#endregion