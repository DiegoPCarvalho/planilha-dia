import axios from 'axios';
import Url from "../../Url/Url";
const baseUrl = Url("Geral");

export function allData(){
    const tabelaNome = axios(baseUrl).then(resp => resp.data)
    let dadoNome = []

    for (let i = 0; i < tabelaNome.length; i++) {
        if ((localStorage.usuario === tabelaNome[i].Tecnico) && (this.state.ano === tabelaNome[i].Ano) && (this.state.mes === tabelaNome[i].Mes)) {
            dadoNome.push(
                { ...tabelaNome[i] }
            )
        }
    }

   console.log(dadoNome)
}
  

// export const allData = [
//   list()
// ]

