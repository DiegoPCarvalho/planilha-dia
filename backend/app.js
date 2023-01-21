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


const data = new Date();

const dia = data.getDate();

console.log(dia)