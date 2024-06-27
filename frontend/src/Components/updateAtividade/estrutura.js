import UseAppData from '../../data/hook/UseAppData';
import Url from '../Url/Url';
import axios from 'axios';

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

function salvar(dado) {
    const Fila = dado
    const bancoUrl = Url("FilaTecnica")
    const method = Fila.id ? 'put' : 'post'
    const url = Fila.id ? `${bancoUrl}/${Fila.id}` : bancoUrl
    axios[method](url, Fila).then(resp => {
        
    })
}
