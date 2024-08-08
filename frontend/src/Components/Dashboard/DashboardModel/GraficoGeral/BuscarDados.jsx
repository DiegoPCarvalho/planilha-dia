import PuxarDados from '../Estrutura/PuxarDados';
import { somartempos, tempo } from '../Tempo/estruturaTempo';
import CondicionalGraficos from './CondicionalGraficos';
import { ArrayObjeto, Drill, Series } from './Estrutura';


const cond = new CondicionalGraficos();

export default async function BuscarDados(tecnico, dia, mes, ano){
    //#region variaveis
    //cards
    let totalServ = []
    let limpeza = []

    //prodDia
    let d1 = []
    let d2 = []
    let d3 = []
    let d4 = []
    let d5 = []
    let d6 = []
    let d7 = []
    let d8 = []
    let d9 = []
    let d10 = []
    let d11 = []
    let d12 = []
    let d13 = []
    let d14 = []
    let d15 = []
    let d16 = []
    let d17 = []
    let d18 = []
    let d19 = []
    let d20 = []
    let d21 = []
    let d22 = []
    let d23 = []
    let d24 = []
    let d25 = []
    let d26 = []
    let d27 = []
    let d28 = []
    let d29 = []
    let d30 = []
    let d31 = []

    //meta
    let mJan = []
    let mFev = []
    let mMar = []
    let mAbr = []
    let mMai = []
    let mJun = []
    let mJul = []
    let mAgo = []
    let mSet = []
    let mOut = []
    let mNov = []
    let mDez = [] 

    //servico
    let servico = []
    let servSeries = []

    //Tecnico
    let totalTec = []
     
    //Equipamento 
    let equipamento = []

    //Placa
    let placa = []

    //avulso x contrato
    let avulso = []
    let contratos = []
    let contrato = []

    //projecao
    let dadoJan = []
    let dadoFev = []
    let dadoMar = []
    let dadoAbr = []
    let dadoMai = []
    let dadoJun = []
    let dadoJul = []
    let dadoAgo = []
    let dadoSet = []
    let dadoOut = []
    let dadoNov = []
    let dadoDez = []

    let tempBruto = []
    let tempLiquido = []
    let tempProblema = []
    //#endregion

    //#region API
    const tabela = await PuxarDados("Geral");
    const tab2 = await PuxarDados("Meta");
    //#endregion


    function retornodads(dado){
        if(dado === undefined || dado === ""){
            return "00:00:00"
        }else {
            return dado
        }
    }

    //#region Array dos graficos
    for (let i = 0; i < tabela.length; i++) {
        //Geral
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) {
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido = []
                tempBruto = []
                tempProblema = []
            }else //Geral ano
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) {
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido.push(retornodads(tabela[i].TempoLiquido))
                tempBruto.push(retornodads(tempo(tabela[i].DataInicialBruto, tabela[i].DataFinalBruto)))
                tempProblema.push(retornodads(tempo(tabela[i].DataInicialProblema, tabela[i].DataFinalProblema)))
            }else // geral mes e ano
        if ((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido.push(retornodads(tabela[i].TempoLiquido))
                tempBruto.push(retornodads(tempo(tabela[i].DataInicialBruto, tabela[i].DataFinalBruto)))
                tempProblema.push(retornodads(tempo(tabela[i].DataInicialProblema, tabela[i].DataFinalProblema)))
            }else // geral dia, mes e ano
        if ((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { 
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido.push(retornodads(tabela[i].TempoLiquido))
                tempBruto.push(retornodads(tempo(tabela[i].DataInicialBruto, tabela[i].DataFinalBruto)))
                tempProblema.push(retornodads(tempo(tabela[i].DataInicialProblema, tabela[i].DataFinalProblema)))
            }else// tecnico geral
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) {
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido.push(retornodads(tabela[i].TempoLiquido))
                tempBruto.push(retornodads(tempo(tabela[i].DataInicialBruto, tabela[i].DataFinalBruto)))
                tempProblema.push(retornodads(tempo(tabela[i].DataInicialProblema, tabela[i].DataFinalProblema)))
            }else // tecnico ano
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) {
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido.push(retornodads(tabela[i].TempoLiquido))
                tempBruto.push(retornodads(tempo(tabela[i].DataInicialBruto, tabela[i].DataFinalBruto)))
                tempProblema.push(retornodads(tempo(tabela[i].DataInicialProblema, tabela[i].DataFinalProblema)))
            }else // tecnico mes e ano
        if ((tecnico === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido.push(retornodads(tabela[i].TempoLiquido))
                tempBruto.push(retornodads(tempo(tabela[i].DataInicialBruto, tabela[i].DataFinalBruto)))
                tempProblema.push(retornodads(tempo(tabela[i].DataInicialProblema, tabela[i].DataFinalProblema)))
            }else // tecnico dia, mes e ano
        if ((tecnico === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) { 
                cond.dadosPro(tabela[i], totalServ, limpeza)
                cond.dadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                cond.dadoServico(tabela[i], servico)
                cond.dadoTecnico(tabela[i], totalTec)
                cond.dadoEquipamento(tabela[i], equipamento)
                cond.dadoPlaca(tabela[i], placa)
                cond.dadoAvulsoCont(tabela[i], avulso, contrato, contratos)
                cond.dadoProjecao(tabela[i], dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez )
                tempLiquido.push(retornodads(tabela[i].TempoLiquido))
                tempBruto.push(retornodads(tempo(tabela[i].DataInicialBruto, tabela[i].DataFinalBruto)))
                tempProblema.push(retornodads(tempo(tabela[i].DataInicialProblema, tabela[i].DataFinalProblema)))
            }
    }

    for(let i = 0; i < tab2.length; i++){
        if((tecnico === `${tab2[i].Tecnico}`)&&(dia === "Todos")&& (mes === "Todos") && (ano === `${tab2[i].Ano}`)){
            cond.buscarDadosPorMesMeta(tab2[i], mJan, mFev, mMar, mAbr, mMai, mJun, mJul, mAgo, mSet, mOut, mNov, mDez)
        }else
        if((tecnico === `${tab2[i].Tecnico}`)&&(dia === "Todos")&& (mes === `${tab2[i].Mes}`) && (ano === `${tab2[i].Ano}`)){
            cond.buscarDadosPorMesMeta(tab2[i], mJan, mFev, mMar, mAbr, mMai, mJun, mJul, mAgo, mSet, mOut, mNov, mDez)
        }    
    }
    //#endregion

    //#region Contrução dos graficos
    //totalOS
    const osSemRep = [...new Set(totalServ)]

    //prodDia
    const dadosProdDia = [
        { name: "1", y: d1.length },
        { name: "2", y: d2.length },
        { name: "3", y: d3.length },
        { name: "4", y: d4.length },
        { name: "5", y: d5.length },
        { name: "6", y: d6.length },
        { name: "7", y: d7.length },
        { name: "8", y: d8.length },
        { name: "9", y: d9.length },
        { name: "10", y: d10.length },
        { name: "11", y: d11.length },
        { name: "12", y: d12.length },
        { name: "13", y: d13.length },
        { name: "14", y: d14.length },
        { name: "15", y: d15.length },
        { name: "16", y: d16.length },
        { name: "17", y: d17.length },
        { name: "18", y: d18.length },
        { name: "19", y: d19.length },
        { name: "20", y: d20.length },
        { name: "21", y: d21.length },
        { name: "22", y: d22.length },
        { name: "23", y: d23.length },
        { name: "24", y: d24.length },
        { name: "25", y: d25.length },
        { name: "26", y: d26.length },
        { name: "27", y: d27.length },
        { name: "28", y: d28.length },
        { name: "29", y: d29.length },
        { name: "30", y: d30.length },
        { name: "31", y: d31.length },
    ]

    //meta
    const totalMeta = parseInt(mJan.length > 0 ? mJan[0].M : 0) + parseInt(mFev.length > 0 ? mFev[0].M : 0) +
    parseInt(mMar.length > 0 ? mMar[0].M : 0) + parseInt(mAbr.length > 0 ? mAbr[0].M : 0) + parseInt(mMai.length > 0 ? mMai[0].M : 0) +
    parseInt(mJun.length > 0 ? mJun[0].M : 0) + parseInt(mJul.length > 0 ? mJul[0].M : 0) + parseInt(mAgo.length > 0 ? mAgo[0].M : 0) +
    parseInt(mSet.length > 0 ? mSet[0].M : 0) + parseInt(mOut.length > 0 ? mOut[0].M : 0) + parseInt(mNov.length > 0 ? mNov[0].M : 0) +
    parseInt(mDez.length > 0 ? mDez[0].M : 0)

    //servico
    const serv = Drill(servico)
    let dadoServ = [{name: "Servico", y: 0}]

    for (let x = 0; x < serv.length; x++) {
        Series(tabela, serv[x], servSeries, tecnico, dia, mes, ano)
    }

    //tecnico
    const tec = ArrayObjeto(totalTec)
    let dadoTec = [{name: "Tecnico", y: 0}]

    //equipamento
    const equip = ArrayObjeto(equipamento)
    let dadoEquip = [{name: "Equipamento", y: 0}]

    //placa
    const plc = ArrayObjeto(placa)
    let dadoPlc = [{name: "Rec", y: 0}]

    //avulso x contrato
    const dadoAvlCont = [
        {name: "Avulso", y: avulso.length},
        {name: "Contratos", y: contrato.length, drilldown: "Contrato"},
    ]
    const dadoC = ArrayObjeto(contratos)

    const serieAvloCont = [{
        name: "Contrato",
        id: "Contrato",
        data: dadoC
    }]
    
    let dadoCont = [{name: "Contrato", y: 0}]

    //projecao
    const dadoAnual = [
        {name: "Janeiro", y: dadoJan.length},
        {name: "Fevereiro", y: dadoFev.length},
        {name: "Março", y: dadoMar.length},
        {name: "Abril", y: dadoAbr.length},
        {name: "Maio", y: dadoMai.length},
        {name: "Junho", y: dadoJun.length},
        {name: "Julho", y: dadoJul.length},
        {name: "Agosto", y: dadoAgo.length},
        {name: "Setembro", y: dadoSet.length},
        {name: "Outubro", y: dadoOut.length},
        {name: "Novembro", y: dadoNov.length},
        {name: "Dezembro", y: dadoDez.length},
       ]

    //#endregion

    let finalTempLiquido = "00:00:00"
    let finalTempBruto = "00:00:00"
    let finalTempProblema = "00:00:00"

    tempLiquido.map(registro => {
        let result = somartempos(finalTempLiquido, registro)
        finalTempLiquido = result
    })

    tempBruto.map(registro => {
        let result = somartempos(finalTempBruto, registro)
        finalTempBruto = result
    })

    tempProblema.map(registro => {
        let result = somartempos(finalTempProblema, registro)
        finalTempProblema = result
    })

    //#region contrução do Objeto
    const objFinal = {
        totalOS: osSemRep.length,
        totalServico: totalServ.length,
        totalLimpeza: limpeza.length,
        totalPorDia: dadosProdDia,
        totalMeta:  totalMeta,
        servico: serv.length !== 0 ? serv : dadoServ,
        servicoSerie: servSeries,
        totalTecnico: tec.length !== 0 ? tec : dadoTec,
        totalEquip: equip.length !== 0 ? equip : dadoEquip,
        recPlaca: plc.length !== 0 ? plc : dadoPlc,
        totalPlaca: placa.length !== 0 ? placa.length : 0,
        avulsoContrato: dadoAvlCont,
        serieAvlCont: dadoC.length !== 0 ? serieAvloCont : dadoCont,
        projecao: dadoAnual,
        tempBruto: finalTempBruto,
        tempLiquido: finalTempLiquido,
        tempProblema: finalTempProblema
    }
    //#endregion

    //retorno
    return objFinal
}