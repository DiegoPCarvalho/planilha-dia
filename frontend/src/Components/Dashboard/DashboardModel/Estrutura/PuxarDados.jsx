import React from 'react';
import Url from '../../../Url/Url';
import axios from 'axios';

const initialState = {
    tabelaProps: []
}

export default class PuxarDados extends React.Component {
    state = { ...initialState }

    async buscarDadosBanco(banco) {
        const baseUrl = Url(banco);
        const tabela = await axios(baseUrl).then(resp => resp.data);

        return tabela
    }
}