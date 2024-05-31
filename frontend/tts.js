const moment = require('moment');
// const atividade = {
//     enunciado: "COMFORME DIAGNOSTICO TECNICO, FOI DETECTADO QUE:",
//     defeito: [],
//     solucao: "SOLUÇÃO:",
//     resolucao: [],
//     final: "REVISÃO E LIMPEZA ->(MÃO DE OBRA);"
// }


// function txt(item, defeito, status) {
//     atividade.defeito.push({
//         item,
//         defeito,
//         status
//     })
// }

// function ativReso(resolucao) {
//     atividade.resolucao.push({
//         resolucao,
//         dado: []
//     })
// }

// function ativDados(resolucao, escolha, item) {
//     resolucao.map((reso) => {
//         const escolher = escolha
//         const itens = item

//         if (reso.resolucao == escolher) {
//             reso.dado.push({
//                 itens
//             })
//         }
//     })
// }

// const sub = "NECESSÁRIO A SUBSTITUIÇÃO DO(S) ITEM(S):"
// const insta = "NECESSÁRIO A INSTALAÇÃO DO(S) ITEM(S):"


// txt("TECLADO", "FALTANDO TECLAS", "DEFEITO")
// txt("TELA DE TOQUE", "TESTE", "USO INDEVIDO")
// txt("PLACA PRINCIAL", "NÃO LIGA", "DESGASTE DE USO")
// ativReso(sub)
// ativReso(insta)
// ativDados(atividade.resolucao, sub, "- TELA DE TOQUE;")
// ativDados(atividade.resolucao, sub, "- TECLADO;")
// ativDados(atividade.resolucao, insta, "- PLACA PRINCIPAL;")
// ativDados(atividade.resolucao, insta, "- MÓDULO LASER E FLEX;")



// atividade.defeito

// function def(tab) {
//     for (let i = 0; i < tab.length; i++) {
//         console.log(`- ${tab[i].item} ${tab[i].defeito} -> ${tab[i].status}`)
//     }
// }

// function revelarOS(resultado) {
//     resultado.map(resol => {
//         if (resol.length !== 0) {
//             if (resol.dado.length !== 0) {
//                 console.log(resol.resolucao)

//                 for (let i = 0; i < resol.dado.length; i++) {
//                     console.log(resol.dado[i].itens)
//                 }
//                 console.log('\r')
//             }
//         }
//     })
// }



// console.log(atividade.enunciado)
// def(atividade.defeito)
// console.log('\r')
// console.log(atividade.solucao)
// revelarOS(atividade.resolucao)
// console.log(atividade.final)

// function tempo(ini, fm) {
//     var inicio = new Date(ini);
//     var fim = new Date(fm);
//     var diferenca = new Date(fim - inicio);

//     // var resultado = diferenca.getUTCFullYear() - 1970 + "a ";
//     // var resultado = diferenca.getUTCMonth() + ":";
//     var resultado = diferenca.getUTCHours() + ":";
//     resultado += diferenca.getUTCMinutes() + ":";
//     resultado += diferenca.getUTCSeconds() + "";

//     return resultado.match(/NaN/) ? "00:00:00" : resultado
// }

// console.log(tempo('2024-05-16T1:39:25.069Z', '2024-05-17T23:39:25.069Z'))

//     let dtChegada  = '2024-05-17T23:39:25.069Z';
//     let dtPartida = '2024-05-16T1:20:25.069Z';

//     let ms = moment(dtChegada,"YYYY-MM-DDTHH:mm:ssZ").diff(moment(dtPartida,"YYYY-MM-DDTHH:mm:ssZ"));
//     let d = moment.duration(ms);
//     let s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

// console.log(s); 

// let teste = '0 d : 0 h : 0 m : 3 s'

// var novo = teste.replace(/(\d)\s\w\s:\s(\d)\s\w\s:\s(\d)\s\w\s:\s(\d)\s\w/, '$1:$2:$3:$4')

// console.log(novo)

let teste = '00:00:00'

var novo = teste.replace(/(\d*):(\d\d):(\d\d)/, '$1 h : $2 m : $3 s')

console.log(novo)