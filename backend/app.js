const axios = require("axios");

const baseUrl = `http://192.168.15.211:7000/Geral`

async function Mostrar(mes, ano){
    const tabelaNome = await axios(baseUrl).then(resp => resp.data)

    for (let i = 0; i < tabelaNome.length; i++) {
        if ((mes === tabelaNome[i].Mes) && (ano === 'Todos')){
             console.log("funcionou Mes")
        } else if ((ano === tabelaNome[i].Ano) && (mes === 'Todos')) {
            console.log("funcionou Ano")
        } else if ((mes === tabelaNome[i].Mes) && (ano === tabelaNome[i].Ano)) {
            console.log("funcionou Mes e Ano")
        } 
    }
}
    

Mostrar('Todos', 2023)