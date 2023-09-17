import React from 'react';
import Url from '../../../Url/Url';
import axios from 'axios';


export default class PuxarDados extends React.Component {
    async buscarDadosBanco(banco) {
        const baseUrl = Url(banco);
        const tabela = await axios(baseUrl).then(resp => resp.data);

        return tabela
    }
}
