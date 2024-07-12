import moment from "moment"

export const bancosFormulario = {
    listEquip: [],
    listServ: [],
    listCont: [],
    listarCosmos: [],
}

export const Filtro = {
    mes: '',
    ano: ''
}

export const Atividade = {
    Data: '',
    Dia: '',
    Mes: '',
    Ano: '',
    OS: '',
    Cliente: '',
    Equipamento: '',
    Modelo: '',
    NS: '',
    Servico: '',
    Placa: '',
    Contrato: '',
    Observacao: '',
    ProblemObs: '',
    Estagio: '',
    DataInicialBruto: '',
    DataFinalBruto: '',
    TempoLiquido: '',
    Tecnico: localStorage.usuario
}

export const Fila = {
    id: '',
    OS: '',
    Data: '',
    DataFinalMovto: '',
    Cliente: '',
    Equipamento: '',
    NS: '',
    TipoOS: '',
    Estagio: '',
    Tecnico: '',
    ProblemObs: '',
    Problema: 'Não',
    DataInicialProblema: '',
    DataFinalProblema: '',
    ContProblema: 0
}

export function dataCorreta(data) {
    const dt = new Date(data)

    return dt.toLocaleDateString()
}

export function servico(serv) {
    if (serv === "Manutenção Concluída") {
        return "Manutenção"
    } else {
        return serv
    }
}

export function formatarTempoLiq(tempo) {
    if(tempo === undefined){
        return "0 h : 0 m : 0 s"
    }else{
        let novo = tempo.replace(/(\d+):(\d+):(\d+)/, '$1 h : $2 m : $3 s')
        return novo
    }
}

export function formatarTempoBto(tempo) {
    let novo = tempo.replace(/(\d+):(\d+):(\d+)/, '$1 h : $2 m : $3 s')

    return novo
}

export function tempo(ini, fm) {
    let dtChegada = `${fm}`;
    let dtPartida = `${ini}`;

    let ms = moment(dtChegada, "YYYY-MM-DDTHH:mm:ssZ").diff(moment(dtPartida, "YYYY-MM-DDTHH:mm:ssZ"));
    let d = moment.duration(ms);
    let s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

    return s.match(/NaN/) ? "00:00:00" : s
}

export function diferenca(data, modo) {
    const d2 = new Date()

    if (modo === 'final') {
        const dif = d2 - new Date(data)
        const diferenca = dif / (1000 * 60 * 60);

        return +diferenca.toFixed(0)

    } else {
        const dif = d2 - new Date(data)
        const diferenca = dif / (1000 * 60);

        return +diferenca.toFixed(0)
    }
}

export function equipamento(equip) {

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