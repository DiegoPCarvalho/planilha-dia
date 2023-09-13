import Url from '../../../Url/Url';
import axios from 'axios';

export default function PuxarDados(banco, condicao){
    const baseUrl = Url(banco);
    const tabela = axios(baseUrl).then(resp => resp.data);
    
    for(let i = 0; i < tabela.length; i++){
        condicao()
    }
}