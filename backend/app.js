// const axios = require("axios");

// const baseUrl = `http://192.168.1.227:7000/Geral`

// async function Mostrar(){
//     const tabelaNome = await axios(baseUrl).then(resp => resp.data)

//     let diegoC = [];
    
//     for (let i = 0; i < tabelaNome.length; i++) {
//         if("Diego Carvalho" === tabelaNome[i].Tecnico){
//             diegoC.push({
//                 OS: tabelaNome[i].OS
//             })
//         }
//     }

//     const total = Object.keys(diegoC).length

//     console.log(total)
// }
    

// Mostrar()


// const data = new Date();

// const dia = data.getDate();

// console.log(dia)

function Somar(){
     const obj = [
        {nome: "Notebook", price: 2369.23},
        {nome: "Teclado", price: 369.23},
        {nome: "Ipad", price: 12369.23},
     ]

     let total = 0;

     for(let i = 0; i < obj.length; i++){
        total += obj[i].price
     }

     console.log(total.toFixed(2))
}

Somar()


function porcentagem(numero){
    array = ['1255']
    let valor = array
    let perce = 100

    let resultado = perce * numero 

    let resultadoperce = resultado / valor

    let porcentagemVariavel = 100

    let resultadoPErcentualVariavel = porcentagemVariavel - resultadoperce

    return `Total ${perce}%: Gasto ${resultadoperce.toFixed(2)}% Disponivel ${resultadoPErcentualVariavel.toFixed(2)}% `
}

console.log(porcentagem(10))
console.log(porcentagem(20))
