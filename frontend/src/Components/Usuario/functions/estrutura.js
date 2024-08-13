import Url from "../../Url/Url";
import axios from 'axios';
import $ from 'jquery';

export function salvar(dado, banco) {
    const Data = dado
    const bancoUrl = Url(banco)
    const method = Data.id ? 'put' : 'post'
    const url = Data.id ? `${bancoUrl}/${Data.id}` : bancoUrl
    axios[method](url, Data).catch(e => console.log("Erro: " + e))
}

export function pagination(tab) {
    $(`#${tab}`).DataTable({
        language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
    });
}