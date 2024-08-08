import axios from "axios";
import Url from '../../Url/Url';

export async function buscarDadoUser(banco) {
    const tabela = await axios(Url(banco)).then(resp => {
            let tab = resp.data
            let dado = []

            tab.map(registro => {
                if(localStorage.usuario === registro.nomeCompleto){
                    dado.push({...registro})
                }   
            })

            return dado
        }
    )

    return tabela
}