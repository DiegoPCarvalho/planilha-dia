import Url from '../Url/Url';
import axios from 'axios';
import { diferenca, equipamento} from './config';

export default async function PuxarDados(banco) {
    const baseUrl = Url(banco);
    const tabela = await axios(baseUrl).then(resp => resp.data);

    return tabela
}


export function iniciar(dado) {
    const Fila = dado
    const data = new Date()

    if (Fila.Problema === "Sim") {
        Fila.DataFinalProblema = data
        Fila.DataInicialBruto = Fila.DataInicialBruto
        Fila.Estagio = "Iniciado"
        Fila.ContProblema = Fila.ContProblema
        Fila.DataInicialProblema = Fila.DataInicialProblema

        salvar(Fila, "Fila")

    } else {
        Fila.data = data
        Fila.dt = data
        Fila.DataInicialBruto = data
        Fila.Estagio = "Iniciado"
        Fila.ContProblema = 0  
        Fila.DataInicialProblema = ''
        
        salvar(Fila, "Fila")
    }
}

export function voltar(dado) {
    const Fila = dado
    const tempo = diferenca(Fila.DataInicialBruto)

    if (tempo >= 3) {

    } else {
        Fila.Estagio = "Enviado"

        salvar(Fila, "Fila")
    }
}

export function problema(registro) {
    const data = new Date()
    const Fila = registro

    Fila.Estagio = "Enviado"
    Fila.Problema = "Sim"
    Fila.ContProblema = Fila.ContProblema + 1
    Fila.DataInicialProblema = Fila.DataInicialProblema !== '' ? Fila.DataInicialProblema : data

    salvar(Fila, "Fila")    
}

export function finalizar(registro) {
    const data = new Date()
    const Fila = registro

    let horaTemp = document.getElementById(`hora ${Fila.id}`).innerText;
    let minutoTemp = document.getElementById(`minuto ${Fila.id}`).innerText;
    let segundoTemp = document.getElementById(`segundo ${Fila.id}`).innerText;

    const tempoLiquido = `${horaTemp}:${minutoTemp}:${segundoTemp}`


    const Atividade = {}
    Atividade.Data = data
    Atividade.Dia = data.getDate()
    Atividade.Mes = data.getMonth() + 1
    Atividade.Ano = data.getFullYear()
    Atividade.OS = Fila.OS
    Atividade.Cliente = Fila.Cliente
    Atividade.Equipamento = equipamento(Fila.Equipamento)
    Atividade.Modelo = Fila.Equipamento
    Atividade.NS = Fila.NS
    Atividade.Servico = Fila.Servico
    Atividade.Contrato = Fila.TipoOS
    Atividade.Estagio = "Finalizado"
    Atividade.DataInicialBruto = Fila.DataInicialBruto
    Atividade.DataFinalBruto = data
    Atividade.DataInicialProblema = Fila.DataInicialProblema ? Fila.DataInicialProblema : ''
    Atividade.DataFinalProblema = Fila.DataFinalProblema ? Fila.DataFinalProblema : ''
    Atividade.TempoLiquido = tempoLiquido
    Atividade.Tecnico = Fila.Tecnico
    // Atividade.Observacao = this.state.Atividade.Observacao
    Atividade.Problema = Fila.Problema ? Fila.Problema : ''
    Atividade.ProblemObs = Fila.ProblemObs
    Atividade.ContProblema = Fila.ContProblema ? Fila.ContProblema : 0

    console.log(Atividade)

    // salvar(Atividade,"Final")
    // this.deletar(Fila)

}

function salvar(dado, modo) {
    const Data = dado
    const bancoUrl = modo === "Fila" ? Url("FilaTecnica") : Url("Geral")
    const method = Data.id ? 'put' : 'post'
    const url = Data.id ? `${bancoUrl}/${Data.id}` : bancoUrl
    axios[method](url, Data)
}
