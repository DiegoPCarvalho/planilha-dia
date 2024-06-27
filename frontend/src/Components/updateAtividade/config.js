import moment from "moment"

export const initialState = {
    ultimaOS: 0,
    mudar: 'fila',
    table_on: false,
    mode: false,
    modalToDo: false,
    modalProblem: false,
    teste: ''
}

export const bancosFila = {
    listarFila: [],
    listIni: [],
    listFim: [],
}

export const bancosFormulario = {
    listEquip: [],
    listServ: [],
    listCont: [],
    listarCosmos: [],
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
    Classificacao: '',
    Contrato: '',
    Observacao: '',
    ProblemObs: '',
    Status: '',
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
    let novo = tempo.replace(/(\d+):(\d+):(\d+)/, '$1 h : $2 m : $3 s')

    return novo
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