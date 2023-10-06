import Url from '../../../Url/Url';
import axios from 'axios';


export default async function PuxarDados(banco){
        const baseUrl = Url(banco);
        const tabela = await axios(baseUrl).then(resp => resp.data);

        return tabela
}