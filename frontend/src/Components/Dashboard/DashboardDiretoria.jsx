import React from 'react';
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logo.png';
import axios from 'axios';
import Url from '../Url/Url';
import Grafico from '../Graficos/Grafico';


const HeaderProps = {
    icon: "credit-card",
    title: "Diretoria"
}

const initialState = {
    //total equipamento
    listarTotalEquip: [0],

    //Ordem de Serviço
    listarMC: [0],
    listarLA: [0],
    listarSR: [0],
    listarRM: [0],
    listarCO: [0],
    listarRV: [0],
    listarCC: [0],
    listarMMV: [0],
    listarRP: [0],
    listarLP: [0],

    //Tecnicos: 
    listarDiegoC: [0],
    listarNatanael: [0],
    listarMateus: [0],
    listarBruno: [0],
    listarVinicius: [0],
    listarMarcio: [0],
    listarGabriel: [0],
    listarLucas: [0],
    listarDiogo: [0],
    listarDiegoA: [0],
    listarAllan: [0],
    listarCida: [0],

    //mese do ano
    listarJan: [0],
    listarFev: [0],
    listarMar: [0],
    listarAbr: [0],
    listarMai: [0],
    listarJun: [0],
    listarJul: [0],
    listarAgo: [0],
    listarSet: [0],
    listarOut: [0],
    listarNov: [0],
    listarDez: [0],
}

const banco = "Geral";

const baseUrl = Url(banco);

export default class DashboardDiretoria extends React.Component {
    state = { ...initialState }

    componentWillMount() {
        this.validacao()
        this.buscarDados()
    }

    validacao() {
        if (localStorage.AdmGerencia === "0") {
            window.location.pathname = "/Dashboard";
            alert("Não Tem Permissão Para Acessar essa Área")
        }
    }

    async buscarDados() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)

        //variavel servico
        let dadoMC = [];
        let dadoLA = [];
        let dadoSR = [];
        let dadoRM = [];
        let dadoCO = [];
        let dadoRV = [];
        let dadoCC = [];
        let dadoMMV = [];
        let dadoRP = [];
        let dadoLP = [];

        //variavel tecnico
        let dadoDiegoC = [];
        let dadoNatanael = [];
        let dadoBruno = [];
        let dadoVinicius = [];
        let dadoMateus = [];
        let dadoMarcio =  [];
        let dadoGabriel = [];
        let dadoLucas = [];
        let dadoDiogo = [];
        let dadoDiegoA = [];
        let dadoAllan = [];
        let dadoCida = [];

        //variavel mês
        let dadoJan = [];
        let dadoFev = [];
        let dadoMar = [];
        let dadoAbr = [];
        let dadoMai = [];
        let dadoJun = [];
        let dadoJul = [];
        let dadoAgo = [];
        let dadoSet = [];
        let dadoOut = [];
        let dadoNov = [];
        let dadoDez = [];

        for (let i = 0; i < tabelaNome.length; i++) {

        var v = `${tabelaNome[i].Tecnico}`;
       
            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                dadoMC.push({
                    OS: tabelaNome[i].OS
                })
            }
                 if (("Laudo" === tabelaNome[i].Servico)) {
                    dadoLA.push({
                        OS: tabelaNome[i].OS
                    })
                }
                 if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                    dadoSR.push({
                        OS: tabelaNome[i].OS
                    })
                }
                 if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                    dadoRM.push({
                        OS: tabelaNome[i].OS
                    })
                }
                 if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                    dadoCO.push({
                        OS: tabelaNome[i].OS
                    })
                }
                 if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                    dadoRV.push({
                        OS: tabelaNome[i].OS
                    })
                }
                 if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                    dadoCC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                 if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                    dadoMMV.push({
                        OS: tabelaNome[i].OS
                    })
                }
                 if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                    dadoRP.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (("Limpeza" === tabelaNome[i].Servico)) {
                    dadoLP.push({
                        OS: tabelaNome[i].OS
                    })
                } 
               if (v.match(/Diego C/)) {
                    dadoDiegoC.push({
                        OS: tabelaNome[i].OS
                    })
                } 
                 if (v.match(/Natanael/)){
                    dadoNatanael.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Bruno/)){
                    dadoBruno.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Vinicius/)){
                    dadoVinicius.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Mateus/)){
                    dadoMateus.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Marcio/)){
                    dadoMarcio.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Gabriel/)){
                    dadoGabriel.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Lucas/)){
                    dadoLucas.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diogo/)){
                    dadoDiogo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diego A/)){
                    dadoDiegoA.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Allan/)){
                    dadoAllan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Cida/)){
                    dadoCida.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(1 === tabelaNome[i].Mes){
                    dadoJan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(2 === tabelaNome[i].Mes){
                    dadoFev.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(3 === tabelaNome[i].Mes){
                    dadoMar.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(4 === tabelaNome[i].Mes){
                    dadoAbr.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(5 === tabelaNome[i].Mes){
                    dadoMai.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(6 === tabelaNome[i].Mes){
                    dadoJun.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(7 === tabelaNome[i].Mes){
                    dadoJul.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(8 === tabelaNome[i].Mes){
                    dadoAgo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(9 === tabelaNome[i].Mes){
                    dadoSet.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(10 === tabelaNome[i].Mes){
                    dadoOut.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(11 === tabelaNome[i].Mes){
                    dadoNov.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if(12 === tabelaNome[i].Mes){
                    dadoDez.push({
                        OS: tabelaNome[i].OS
                    })
                }
        }

        //variavel servico
        let totalMC = Object.keys(dadoMC).length;
        let totalLA = Object.keys(dadoLA).length;
        let totalSR = Object.keys(dadoSR).length;
        let totalRM = Object.keys(dadoRM).length;
        let totalCO = Object.keys(dadoCO).length;
        let totalRV = Object.keys(dadoRV).length;
        let totalCC = Object.keys(dadoCC).length;
        let totalMMV = Object.keys(dadoMMV).length;
        let totalRP = Object.keys(dadoRP).length;
        let totalLP = Object.keys(dadoLP).length;

        //variavel total
        let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
            totalCC + totalMMV + totalRP + totalLP

        //variavel tecnico
        let totalDiegoC = Object.keys(dadoDiegoC).length;
        let totalNatanael = Object.keys(dadoNatanael).length;
        let totalBruno = Object.keys(dadoBruno).length;
        let totalVinicius = Object.keys(dadoVinicius).length;
        let totalMateus = Object.keys(dadoMateus).length;
        let totalMarcio = Object.keys(dadoMarcio).length;
        let totalGabriel = Object.keys(dadoGabriel).length;
        let totalLucas = Object.keys(dadoLucas).length;
        let totalDiogo = Object.keys(dadoDiogo).length;
        let totalDiegoA = Object.keys(dadoDiegoA).length;
        let totalAllan = Object.keys(dadoAllan).length;
        let totalCida = Object.keys(dadoCida).length;

        //variavel Meses
        let totalJan = Object.keys(dadoJan).length;
        let totalFev = Object.keys(dadoFev).length;
        let totalMar = Object.keys(dadoMar).length;
        let totalAbr = Object.keys(dadoAbr).length;
        let totalMai = Object.keys(dadoMai).length;
        let totalJun = Object.keys(dadoJun).length;
        let totalJul = Object.keys(dadoJul).length;
        let totalAgo = Object.keys(dadoAgo).length;
        let totalSet = Object.keys(dadoSet).length;
        let totalOut = Object.keys(dadoOut).length;
        let totalNov = Object.keys(dadoNov).length;
        let totalDez = Object.keys(dadoDez).length;
        
        return this.setState({
            //busca servico
            listarMC: totalMC,
            listarLA: totalLA,
            listarSR: totalSR,
            listarRM: totalRM,
            listarCO: totalCO,
            listarRV: totalRV,
            listarCC: totalCC,
            listarMMV: totalMMV,
            listarRP: totalRP,
            listarLP: totalLP,


            //busca total
            listarTotalEquip: totalEquip,

            //busca tecnico
            listarDiegoC: totalDiegoC,
            listarNatanael: totalNatanael,
            listarBruno: totalBruno,
            listarVinicius: totalVinicius,
            listarMateus: totalMateus,
            listarMarcio: totalMarcio,
            listarGabriel: totalGabriel,
            listarLucas: totalLucas,
            listarDiogo: totalDiogo,
            listarDiegoA: totalDiegoA,
            listarAllan: totalAllan,
            listarCida: totalCida,

            //busca Meses
            listarJan: totalJan,
            listarFev: totalFev,
            listarMar: totalMar,
            listarAbr: totalAbr,
            listarMai: totalMai,
            listarJun: totalJun,
            listarJul: totalJul,
            listarAgo: totalAgo,
            listarSet: totalSet,
            listarOut: totalOut,
            listarNov: totalNov,
            listarDez: totalDez
        })
    }

    async buscarDadosFiltro(dia, mes, ano){
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)

        //variavel servico
        let dadoFMC = [];
        let dadoFLA = [];
        let dadoFSR = [];
        let dadoFRM = [];
        let dadoFCO = [];
        let dadoFRV = [];
        let dadoFCC = [];
        let dadoFMMV = [];
        let dadoFRP = [];
        let dadoFLP = [];

        //variavel tecnico
        let dadoFDiegoC = [];
        let dadoFNatanael = [];
        let dadoFBruno = [];
        let dadoFVinicius = [];
        let dadoFMateus = [];
        let dadoFMarcio =  [];
        let dadoFGabriel = [];
        let dadoFLucas = [];
        let dadoFDiogo = [];
        let dadoFDiegoA = [];
        let dadoFAllan = [];
        let dadoFCida = [];

        //variavel mês
        let dadoFJan = [];
        let dadoFFev = [];
        let dadoFMar = [];
        let dadoFAbr = [];
        let dadoFMai = [];
        let dadoFJun = [];
        let dadoFJul = [];
        let dadoFAgo = [];
        let dadoFSet = [];
        let dadoFOut = [];
        let dadoFNov = [];
        let dadoFDez = [];

        for (let i = 0; i < tabelaNome.length; i++){
            let v = `${tabelaNome[i].Tecnico}`;
            //#region Mês
            if((dia === "Todos" ) && (mes === `${tabelaNome[i].Mes}`) && (ano === "Todos")){
                if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                    dadoFMC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                     if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoFLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoFSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoFRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoFCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoFRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoFCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoFMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoFRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoFLP.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                   if (v.match(/Diego C/)) {
                        dadoFDiegoC.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                     if (v.match(/Natanael/)){
                        dadoFNatanael.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Bruno/)){
                        dadoFBruno.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Vinicius/)){
                        dadoFVinicius.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Mateus/)){
                        dadoFMateus.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Marcio/)){
                        dadoFMarcio.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Gabriel/)){
                        dadoFGabriel.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Lucas/)){
                        dadoFLucas.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diogo/)){
                        dadoFDiogo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diego A/)){
                        dadoFDiegoA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Allan/)){
                        dadoFAllan.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Cida/)){
                        dadoFCida.push({
                            OS: tabelaNome[i].OS
                        })
                    }
            }
            //#endregion

            //#region Ano
            if((dia === "Todos" ) && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)){       
                if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                    dadoFMC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                     if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoFLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoFSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoFRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoFCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoFRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoFCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoFMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoFRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoFLP.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                   if (v.match(/Diego C/)) {
                        dadoFDiegoC.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                     if (v.match(/Natanael/)){
                        dadoFNatanael.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Bruno/)){
                        dadoFBruno.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Vinicius/)){
                        dadoFVinicius.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Mateus/)){
                        dadoFMateus.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Marcio/)){
                        dadoFMarcio.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Gabriel/)){
                        dadoFGabriel.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Lucas/)){
                        dadoFLucas.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diogo/)){
                        dadoFDiogo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diego A/)){
                        dadoFDiegoA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Allan/)){
                        dadoFAllan.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Cida/)){
                        dadoFCida.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(1 === tabelaNome[i].Mes){
                        dadoFJan.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(2 === tabelaNome[i].Mes){
                        dadoFFev.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(3 === tabelaNome[i].Mes){
                        dadoFMar.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(4 === tabelaNome[i].Mes){
                        dadoFAbr.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(5 === tabelaNome[i].Mes){
                        dadoFMai.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(6 === tabelaNome[i].Mes){
                        dadoFJun.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(7 === tabelaNome[i].Mes){
                        dadoFJul.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(8 === tabelaNome[i].Mes){
                        dadoFAgo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(9 === tabelaNome[i].Mes){
                        dadoFSet.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(10 === tabelaNome[i].Mes){
                        dadoFOut.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(11 === tabelaNome[i].Mes){
                        dadoFNov.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(12 === tabelaNome[i].Mes){
                        dadoFDez.push({
                            OS: tabelaNome[i].OS
                        })
                    }
            }
            //#endregion

            //#region Mes Ano
            if((dia === "Todos" ) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)){       
                if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                    dadoFMC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                     if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoFLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoFSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoFRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoFCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoFRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoFCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoFMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoFRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoFLP.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                   if (v.match(/Diego C/)) {
                        dadoFDiegoC.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                     if (v.match(/Natanael/)){
                        dadoFNatanael.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Bruno/)){
                        dadoFBruno.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Vinicius/)){
                        dadoFVinicius.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Mateus/)){
                        dadoFMateus.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Marcio/)){
                        dadoFMarcio.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Gabriel/)){
                        dadoFGabriel.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Lucas/)){
                        dadoFLucas.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diogo/)){
                        dadoFDiogo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diego A/)){
                        dadoFDiegoA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Allan/)){
                        dadoFAllan.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Cida/)){
                        dadoFCida.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(1 === tabelaNome[i].Mes){
                        dadoFJan.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(2 === tabelaNome[i].Mes){
                        dadoFFev.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(3 === tabelaNome[i].Mes){
                        dadoFMar.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(4 === tabelaNome[i].Mes){
                        dadoFAbr.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(5 === tabelaNome[i].Mes){
                        dadoFMai.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(6 === tabelaNome[i].Mes){
                        dadoFJun.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(7 === tabelaNome[i].Mes){
                        dadoFJul.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(8 === tabelaNome[i].Mes){
                        dadoFAgo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(9 === tabelaNome[i].Mes){
                        dadoFSet.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(10 === tabelaNome[i].Mes){
                        dadoFOut.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(11 === tabelaNome[i].Mes){
                        dadoFNov.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(12 === tabelaNome[i].Mes){
                        dadoFDez.push({
                            OS: tabelaNome[i].OS
                        })
                    }
            }
            //#endregion 

            //#region Dia Mes Ano 
            if((dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)){       
                if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                    dadoFMC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                     if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoFLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoFSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoFRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoFCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoFRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoFCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoFMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                     if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoFRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoFLP.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                   if (v.match(/Diego C/)) {
                        dadoFDiegoC.push({
                            OS: tabelaNome[i].OS
                        })
                    } 
                     if (v.match(/Natanael/)){
                        dadoFNatanael.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Bruno/)){
                        dadoFBruno.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Vinicius/)){
                        dadoFVinicius.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Mateus/)){
                        dadoFMateus.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Marcio/)){
                        dadoFMarcio.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Gabriel/)){
                        dadoFGabriel.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Lucas/)){
                        dadoFLucas.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diogo/)){
                        dadoFDiogo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Diego A/)){
                        dadoFDiegoA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Allan/)){
                        dadoFAllan.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (v.match(/Cida/)){
                        dadoFCida.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(1 === tabelaNome[i].Mes){
                        dadoFJan.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(2 === tabelaNome[i].Mes){
                        dadoFFev.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(3 === tabelaNome[i].Mes){
                        dadoFMar.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(4 === tabelaNome[i].Mes){
                        dadoFAbr.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(5 === tabelaNome[i].Mes){
                        dadoFMai.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(6 === tabelaNome[i].Mes){
                        dadoFJun.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(7 === tabelaNome[i].Mes){
                        dadoFJul.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(8 === tabelaNome[i].Mes){
                        dadoFAgo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(9 === tabelaNome[i].Mes){
                        dadoFSet.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(10 === tabelaNome[i].Mes){
                        dadoFOut.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(11 === tabelaNome[i].Mes){
                        dadoFNov.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if(12 === tabelaNome[i].Mes){
                        dadoFDez.push({
                            OS: tabelaNome[i].OS
                        })
                    }
            }
            //#endregion
        }

         //variavel servico
         let totalFMC = Object.keys(dadoFMC).length;
         let totalFLA = Object.keys(dadoFLA).length;
         let totalFSR = Object.keys(dadoFSR).length;
         let totalFRM = Object.keys(dadoFRM).length;
         let totalFCO = Object.keys(dadoFCO).length;
         let totalFRV = Object.keys(dadoFRV).length;
         let totalFCC = Object.keys(dadoFCC).length;
         let totalFMMV = Object.keys(dadoFMMV).length;
         let totalFRP = Object.keys(dadoFRP).length;
         let totalFLP = Object.keys(dadoFLP).length;
 
         //variavel total
         let totalFEquip = totalFMC + totalFLA + totalFSR + totalFRM + totalFCO + totalFRV +
             totalFCC + totalFMMV + totalFRP + totalFLP

        //variavel tecnico
        let totalFDiegoC = Object.keys(dadoFDiegoC).length;
        let totalFNatanael = Object.keys(dadoFNatanael).length;
        let totalFBruno = Object.keys(dadoFBruno).length;
        let totalFVinicius = Object.keys(dadoFVinicius).length;
        let totalFMateus = Object.keys(dadoFMateus).length;
        let totalFMarcio = Object.keys(dadoFMarcio).length;
        let totalFGabriel = Object.keys(dadoFGabriel).length;
        let totalFLucas = Object.keys(dadoFLucas).length;
        let totalFDiogo = Object.keys(dadoFDiogo).length;
        let totalFDiegoA = Object.keys(dadoFDiegoA).length;
        let totalFAllan = Object.keys(dadoFAllan).length;
        let totalFCida = Object.keys(dadoFCida).length;

        //variavel Meses
        let totalFJan = Object.keys(dadoFJan).length;
        let totalFFev = Object.keys(dadoFFev).length;
        let totalFMar = Object.keys(dadoFMar).length;
        let totalFAbr = Object.keys(dadoFAbr).length;
        let totalFMai = Object.keys(dadoFMai).length;
        let totalFJun = Object.keys(dadoFJun).length;
        let totalFJul = Object.keys(dadoFJul).length;
        let totalFAgo = Object.keys(dadoFAgo).length;
        let totalFSet = Object.keys(dadoFSet).length;
        let totalFOut = Object.keys(dadoFOut).length;
        let totalFNov = Object.keys(dadoFNov).length;
        let totalFDez = Object.keys(dadoFDez).length;

             return this.setState({
                //busca servico
                listarMC: totalFMC,
                listarLA: totalFLA,
                listarSR: totalFSR,
                listarRM: totalFRM,
                listarCO: totalFCO,
                listarRV: totalFRV,
                listarCC: totalFCC,
                listarMMV: totalFMMV,
                listarRP: totalFRP,
                listarLP: totalFLP,
    
    
                //busca totalF
                listarTotalEquip: totalFEquip,
    
                //busca tecnico
                listarDiegoC: totalFDiegoC,
                listarNatanael: totalFNatanael,
                listarBruno: totalFBruno,
                listarVinicius: totalFVinicius,
                listarMateus: totalFMateus,
                listarMarcio: totalFMarcio,
                listarGabriel: totalFGabriel,
                listarLucas: totalFLucas,
                listarDiogo: totalFDiogo,
                listarDiegoA: totalFDiegoA,
                listarAllan: totalFAllan,
                listarCida: totalFCida,
    
                //busca Meses
                listarJan: totalFJan,
                listarFev: totalFFev,
                listarMar: totalFMar,
                listarAbr: totalFAbr,
                listarMai: totalFMai,
                listarJun: totalFJun,
                listarJul: totalFJul,
                listarAgo: totalFAgo,
                listarSet: totalFSet,
                listarOut: totalFOut,
                listarNov: totalFNov,
                listarDez: totalFDez
            })
        
    }

    filtrarDados() {
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;

        if ((dia === "Todos") && (ano === "Todos") && (mes === "Todos")) {
            this.buscarDados()
            console.log("Sem Filtro")
        } else if ((dia === "Todos") && (ano === "Todos") && (mes !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano)

            console.log("Filtrando Apenas Mes" + mes)
        } else if ((dia === "Todos") && (ano !== "Todos") && (mes === "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano)
            console.log("Filtrando Apenas O Ano" + ano)
        } else if ((dia === "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano)
            console.log("Filtando os dois " + mes + " " + ano)
        }else if  ((dia !== "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano)
            console.log("Filtando os tres " + dia + " " + mes + " " + ano)
        }
    }


    render() {
        return (
            <Main {...HeaderProps}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-3 d-flex flex-row justify-content-center align-items-center">
                        <i className="fa fa-filter fa-2x text-danger" /> <h2 className='fw-bold'>Filtro</h2>
                    </div>
                    <div className="col-2">
                        <label>Dia: </label>
                        <select id="dia" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <label>Mês: </label>
                        <select id="mes" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <label>Ano: </label>
                        <select id="ano" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                        </select>
                    </div>
                    <div className="col-3 d-flex align-items-end">
                        <button className="btn btn-success" onClick={e => this.filtrarDados(e)}>Buscar</button>
                    </div>
                </div>
                <div className="row my-3 d-flex justify-content-center ">
                    <div className="col-3 d-flex flex-column justify-content-center bg-success p-2 text-light rounded">
                        <h2 className='fw-bold d-flex justify-content-center'>Total</h2>
                        <p className='h4 d-flex justify-content-center'>{this.state.listarTotalEquip}</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">
                        <Grafico tipo="pie" titulo="Ordens de Serviço em Geral"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                            texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                            nomeSerie="Ordem de Serviço"
                            cor = {true}
                            dado={[
                                { name: "Manutenção Concluída", y: this.state.listarMC },
                                { name: "Laudo", y: this.state.listarLA },
                                { name: "Suporte Remoto", y: this.state.listarSR },
                                { name: "Revisão de Manutenção", y: this.state.listarRM },
                                { name: "Chamado On-Site", y: this.state.listarCO },
                                { name: "Revisão de Venda", y: this.state.listarRV },
                                { name: "Confecção de Cabos", y: this.state.listarCC },
                                { name: "M/M de Venda", y: this.state.listarMMV },
                                { name: "Rec Placa", y: this.state.listarRP },
                                { name: "Limpeza", y: this.state.listarLP },
                            ]}
                        />
                    </div>
                    <div className="col-12 col-md-5 sombra flex-fill">
                        <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Ordem de Serviço"
                            cor = {true}
                            dado={[
                                { name: "Manutenção", y: this.state.listarMC },
                                { name: "Laudo", y: this.state.listarLA },
                                { name: "Suporte", y: this.state.listarSR },
                                { name: "Revisão M", y: this.state.listarRM },
                                { name: "On-Site", y: this.state.listarCO },
                                { name: "Revisão V", y: this.state.listarRV },
                                { name: "Confecção de Cabos", y: this.state.listarCC },
                                { name: "M/M de Venda", y: this.state.listarMMV },
                                { name: "Rec Placa", y: this.state.listarRP },
                                { name: "Limpeza", y: this.state.listarLP },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-5 sombra mx-3 flex-fill">
                        <Grafico tipo="bar" titulo="Ordem de Serviço por Técnicos"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Ordens de Serviço"
                            cor = {true}
                            dado={[
                                { name: "Diego C", y: this.state.listarDiegoC },
                                { name: "Natanael", y: this.state.listarNatanael },
                                { name: "Bruno", y: this.state.listarBruno },
                                { name: "Vinicius", y: this.state.listarVinicius },
                                { name: "Mateus", y: this.state.listarMateus },
                                { name: "Marcio", y: this.state.listarMarcio },
                                { name: "Gabriel", y: this.state.listarGabriel },
                                { name: "Lucas", y: this.state.listarLucas },
                                { name: "Diogo", y: this.state.listarDiogo },
                                { name: "Diego A", y: this.state.listarDiegoA },
                                { name: "Allan", y: this.state.listarAllan },
                                { name: "Cida", y: this.state.listarCida }
                            ]}
                        />
                    </div>
                    <div className="col-12 col-md-5 sombra flex-fill">
                        <Grafico tipo="pie" titulo="Ordem de Serviço por Técnicos"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                            texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                            nomeSerie="Ordens de Serviço"
                            cor = {true}
                            dado={[
                                { name: "Diego C", y: this.state.listarDiegoC },
                                { name: "Natanael", y: this.state.listarNatanael },
                                { name: "Bruno", y: this.state.listarBruno },
                                { name: "Vinicius", y: this.state.listarVinicius },
                                { name: "Mateus", y: this.state.listarMateus },
                                { name: "Marcio", y: this.state.listarMarcio },
                                { name: "Gabriel", y: this.state.listarGabriel },
                                { name: "Lucas", y: this.state.listarLucas },
                                { name: "Diogo", y: this.state.listarDiogo },
                                { name: "Diego A", y: this.state.listarDiegoA },
                                { name: "Allan", y: this.state.listarAllan },
                                { name: "Cida", y: this.state.listarCida }
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-11 sombra">
                    <Grafico tipo="spline" titulo="Quantidade por Mês"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Ordem de Serviço"
                            dado={[
                                { name: "Janeiro", y: this.state.listarJan },
                                { name: "Fevereiro", y: this.state.listarFev },
                                { name: "Março", y: this.state.listarMar },
                                { name: "Abril", y: this.state.listarAbr },
                                { name: "Maio", y: this.state.listarMai },
                                { name: "Junho", y: this.state.listarJun },
                                { name: "Julho", y: this.state.listarJul },
                                { name: "Agosto", y: this.state.listarAgo },
                                { name: "Setembro", y: this.state.listarSet },
                                { name: "Outubro", y: this.state.listarOut },
                                { name: "Novembro", y: this.state.listarNov },
                                { name: "Dezembro", y: this.state.listarDez },
                            ]}
                        />
                    </div>
                </div>
            </Main>
        )
    }
}