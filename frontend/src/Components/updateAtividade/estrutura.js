import Url from '../Url/Url';
import axios from 'axios';
import { diferenca } from './config';

export default async function PuxarDados(banco) {
    const baseUrl = Url(banco);
    const tabela = await axios(baseUrl).then(resp => resp.data);

    return tabela
}


export function iniciar(dado) {
    const Fila = dado
    const data = new Date()

    if (Fila.Problema === "Sim" && Fila.Servico === "Laudo") {
        Fila.DataFinalProblema = data
        Fila.DataInicialBruto = Fila.DataInicialBruto
        Fila.Estagio = "Iniciado"

        salvar(Fila)

    } else {
        Fila.data = data
        Fila.dt = data
        Fila.DataInicialBruto = data
        Fila.Estagio = "Iniciado"

        salvar(Fila)
    }
}

export function voltar(dado) {
    const Fila = dado
    const tempo = diferenca(Fila.DataInicialBruto)

    if (tempo >= 3) {

    } else {
        Fila.Estagio = "Enviado"

        salvar(Fila)
    }
}



function salvar(dado) {
    const Fila = dado
    const bancoUrl = Url("FilaTecnica")
    const method = Fila.id ? 'put' : 'post'
    const url = Fila.id ? `${bancoUrl}/${Fila.id}` : bancoUrl
    axios[method](url, Fila)
}
