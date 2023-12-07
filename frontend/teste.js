const axios = require('axios')
const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {
    const tabela = await axios(bancoApi(1)).then(resp => resp.data)
    const tabela2 = await axios(bancoApi(2)).then(resp => resp.data)
    const tabela3 = await axios(bancoApi(3)).then(resp => resp.data)
    const tabela4 = await axios(bancoApi(4)).then(resp => resp.data)
    const tabela5 = await axios(bancoApi(5)).then(resp => resp.data)
    const tabela6 = await axios(bancoApi(8)).then(resp => resp.data)
    const tabela7 = await axios(bancoApi(9)).then(resp => resp.data)
    const tabela8 = await axios(bancoApi(11)).then(resp => resp.data)
    const tabela9 = await axios(bancoApi(13)).then(resp => resp.data)
    const tabela10 = await axios(bancoApi(16)).then(resp => resp.data)
    const tabela11 = await axios(bancoApi(17)).then(resp => resp.data)
    const tabela12 = await axios(bancoApi(25)).then(resp => resp.data)
    const tabela13 = await axios(bancoApi(30)).then(resp => resp.data)

    const tabelaGeral = [...tabela, ...tabela2, ...tabela3,
    ...tabela4, ...tabela5, ...tabela6, ...tabela7, ...tabela8, 
    ...tabela9,...tabela10, ...tabela11, ...tabela12,...tabela13]


    let dado = []

    for (let i = 0; i < tabelaGeral.length; i++) {
        dado.push({
            OS: tabelaGeral[i].OSID,
            Cliente: tabelaGeral[i].PessoaFantasia,
            Servico: servico(tabelaGeral[i].EstagioDescricao, tabelaGeral[i].DescricaoTipoOS),
            Equipamento: equipamento(tabelaGeral[i].NomeEquipamento),
            Modelo: tabelaGeral[i].NomeEquipamento,
            TipoOS: contrato(tabelaGeral[i].DescricaoTipoOS),
            NS: tabelaGeral[i].EquipamentoLTS
        })
    }

    res.json(dado)
})


app.listen(3001, (e) => {
    try {
        console.log("servidor online")
    }
    catch (err) {
        console.log("Erro: " + err)
    }
})


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
    } else if ((serv === "Aguardando Vistoria" || serv === "Em Manutencao / Atendimento" || serv === "Manutencao Concluida / Limpeza") && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO (ON-SITE)" || tipo === "C&A - (ON-SITE)")) {
        return "Chamado On-Site"
    } else if ((serv === "Abertura Suporte" || serv === "Em Atendimento - SR" || serv === "Vistoriado") && (tipo.match(/CONTRATO/) || tipo === "SUPORTE REMOTO" || tipo === "SUPORTE REMOTO - AMERICANAS")) {
        return "Suporte Remoto"
    } else {
        return serv
    }
}

function equipamento(equip) {

    if(equip){
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
        } else if (equip === "DOCKING STATION ZEBRA GAMBER JOHNSON HDMI") {
            return "Doca p/Tablet"
        } else {
            return equip
        }
    }else {
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