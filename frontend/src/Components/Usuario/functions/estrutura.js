import Url from "../../Url/Url"
import axios from 'axios'

export function salvar(dado, banco) {
    const Data = dado
    const bancoUrl = Url(banco)
    const method = Data.id ? 'put' : 'post'
    const url = Data.id ? `${bancoUrl}/${Data.id}` : bancoUrl
    axios[method](url, Data).catch(e => console.log("Erro: " + e))
}