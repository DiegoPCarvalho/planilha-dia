import React from 'react';
import Main from '../../Template/Main';
import Grafico from '../../Graficos/Grafico';
import Logo from '../../../Assets/Imgs/logoZhaz.png';
import axios from 'axios';
import Url from '../../Url/Url';
import CardGD from '../../Card/CardGD';

const headerProps = {
    icon: "file-pdf-o",
    title: "Contratos"
}

const baseUrl = Url("Geral");

const initialState = {
    //Ordem de Serviço
    listarMC: [0],
    listarLA: [0],
    listarSR: [0],
    listarRM: [0],
    listarCO: [0],
    listarRV: [0],
    listarCC: [0],
    listarMMV: [0],
    listartRP: [0],
    listarLP: [0],
    listarRR: [0],
    listarRC: [0],
    listarRL: [0],

    //Total Equipamentos
    listartTotalCol: [0],
    listarTotalImp: [0],
    listarTotalLei: [0],
    listarTotalLeiRFID: [0],
    listarTotalBusca: [0],
    listarTotalCar3: [0],
    listarTotalCar4: [0],
    listarTotalCar5: [0],
    listarTotalCar6: [0],
    listarTotalBerco: [0],
    listarTotalFonte: [0],
    listarTotalCabos: [0],
    listarTotalBateria: [0],

    //total Equipamentos
    listarTotalEquip: [0],
    listarTotalGarantia: [0],

    listarTotalOS: [0]
}

export default class Contratos extends React.Component {

    state = { ...initialState }

    async buscarDadosFiltro(dia, mes, ano, contrato) {
        try {
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
            let dadoRC = [];
            let dadoRR = [];
            let dadoRL = [];

            //variavel equipamento
            let dadoCol = [];
            let dadoLei = [];
            let dadoLeiRFID = [];
            let dadoImp = [];
            let dadoBusca = [];
            let dadoCar3 = [];
            let dadoCar4 = [];
            let dadoCar5 = [];
            let dadoCar6 = [];
            let dadoBerco = [];
            let dadoFonte = [];
            let dadoCabo = [];
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {
                //#region contrato geral
                if ((contrato === tabelaNome[i].Contrato) && (ano === "Todos") && (mes === "Todos") && (dia === "Todos")) {
                    if ("Manutenção Concluída" === tabelaNome[i].Servico) {
                        dadoMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Laudo" === tabelaNome[i].Servico) {
                        dadoLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Suporte Remoto" === tabelaNome[i].Servico) {
                        dadoSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Manutenção" === tabelaNome[i].Servico) {
                        dadoRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Chamado On-Site" === tabelaNome[i].Servico) {
                        dadoCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Venda" === tabelaNome[i].Servico) {
                        dadoRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Confecção de Cabos" === tabelaNome[i].Servico) {
                        dadoCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico) {
                        dadoMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Recuperação de Placa" === tabelaNome[i].Servico) {
                        dadoRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Limpeza" === tabelaNome[i].Servico) {
                        dadoLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Reprovado" === tabelaNome[i].Servico) {
                        dadoRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Compra" === tabelaNome[i].Servico) {
                        dadoRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico) {
                        dadoRL.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Coletor de Dados" === tabelaNome[i].Equipamento) {
                        dadoCol.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de Dados" === tabelaNome[i].Equipamento) {
                        dadoLei.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de RFID" === tabelaNome[i].Equipamento) {
                        dadoLeiRFID.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Impressora Térmica" === tabelaNome[i].Equipamento) {
                        dadoImp.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Busca Preço" === tabelaNome[i].Equipamento) {
                        dadoBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 3 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 4 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 5 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 6 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Berço de Comunicação" === tabelaNome[i].Equipamento) {
                        dadoBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Fonte de Alimentação" === tabelaNome[i].Equipamento) {
                        dadoFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Cabo Confeccionado" === tabelaNome[i].Equipamento) {
                        dadoCabo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Bateria" === tabelaNome[i].Equipamento) {
                        dadoBateria.push({
                            OS: tabelaNome[i].OS
                        })
                    }

                }else
                //#endregion

                //#region contrato Ano
                if ((contrato === tabelaNome[i].Contrato) && (ano === `${tabelaNome[i].Ano}`) && (mes === "Todos") && (dia === "Todos")) {
                    if ("Manutenção Concluída" === tabelaNome[i].Servico) {
                        dadoMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Laudo" === tabelaNome[i].Servico) {
                        dadoLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Suporte Remoto" === tabelaNome[i].Servico) {
                        dadoSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Manutenção" === tabelaNome[i].Servico) {
                        dadoRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Chamado On-Site" === tabelaNome[i].Servico) {
                        dadoCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Venda" === tabelaNome[i].Servico) {
                        dadoRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Confecção de Cabos" === tabelaNome[i].Servico) {
                        dadoCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico) {
                        dadoMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Recuperação de Placa" === tabelaNome[i].Servico) {
                        dadoRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Limpeza" === tabelaNome[i].Servico) {
                        dadoLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Reprovado" === tabelaNome[i].Servico) {
                        dadoRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Compra" === tabelaNome[i].Servico) {
                        dadoRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico) {
                        dadoRL.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Coletor de Dados" === tabelaNome[i].Equipamento) {
                        dadoCol.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de Dados" === tabelaNome[i].Equipamento) {
                        dadoLei.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de RFID" === tabelaNome[i].Equipamento) {
                        dadoLeiRFID.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Impressora Térmica" === tabelaNome[i].Equipamento) {
                        dadoImp.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Busca Preço" === tabelaNome[i].Equipamento) {
                        dadoBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 3 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 4 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 5 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 6 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Berço de Comunicação" === tabelaNome[i].Equipamento) {
                        dadoBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Fonte de Alimentação" === tabelaNome[i].Equipamento) {
                        dadoFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Cabo Confeccionado" === tabelaNome[i].Equipamento) {
                        dadoCabo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Bateria" === tabelaNome[i].Equipamento) {
                        dadoBateria.push({
                            OS: tabelaNome[i].OS
                        })
                    }

                }else
                //#endregion

                //#region contrato Ano mes
                if ((contrato === tabelaNome[i].Contrato) && (ano === `${tabelaNome[i].Ano}`) && (mes === `${tabelaNome[i].Mes}`) && (dia === "Todos")) {
                    if ("Manutenção Concluída" === tabelaNome[i].Servico) {
                        dadoMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Laudo" === tabelaNome[i].Servico) {
                        dadoLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Suporte Remoto" === tabelaNome[i].Servico) {
                        dadoSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Manutenção" === tabelaNome[i].Servico) {
                        dadoRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Chamado On-Site" === tabelaNome[i].Servico) {
                        dadoCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Venda" === tabelaNome[i].Servico) {
                        dadoRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Confecção de Cabos" === tabelaNome[i].Servico) {
                        dadoCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico) {
                        dadoMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Recuperação de Placa" === tabelaNome[i].Servico) {
                        dadoRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Limpeza" === tabelaNome[i].Servico) {
                        dadoLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Reprovado" === tabelaNome[i].Servico) {
                        dadoRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Compra" === tabelaNome[i].Servico) {
                        dadoRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico) {
                        dadoRL.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Coletor de Dados" === tabelaNome[i].Equipamento) {
                        dadoCol.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de Dados" === tabelaNome[i].Equipamento) {
                        dadoLei.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de RFID" === tabelaNome[i].Equipamento) {
                        dadoLeiRFID.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Impressora Térmica" === tabelaNome[i].Equipamento) {
                        dadoImp.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Busca Preço" === tabelaNome[i].Equipamento) {
                        dadoBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 3 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 4 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 5 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 6 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Berço de Comunicação" === tabelaNome[i].Equipamento) {
                        dadoBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Fonte de Alimentação" === tabelaNome[i].Equipamento) {
                        dadoFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Cabo Confeccionado" === tabelaNome[i].Equipamento) {
                        dadoCabo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Bateria" === tabelaNome[i].Equipamento) {
                        dadoBateria.push({
                            OS: tabelaNome[i].OS
                        })
                    }

                }
                //#endregion

                 //#region contrato Ano mes Dia
                 if ((contrato === tabelaNome[i].Contrato) && (ano === `${tabelaNome[i].Ano}`) && (mes === `${tabelaNome[i].Mes}`) && (dia === `${tabelaNome[i].Dia}`)) {
                    if ("Manutenção Concluída" === tabelaNome[i].Servico) {
                        dadoMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Laudo" === tabelaNome[i].Servico) {
                        dadoLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Suporte Remoto" === tabelaNome[i].Servico) {
                        dadoSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Manutenção" === tabelaNome[i].Servico) {
                        dadoRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Chamado On-Site" === tabelaNome[i].Servico) {
                        dadoCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Venda" === tabelaNome[i].Servico) {
                        dadoRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Confecção de Cabos" === tabelaNome[i].Servico) {
                        dadoCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico) {
                        dadoMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Recuperação de Placa" === tabelaNome[i].Servico) {
                        dadoRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Limpeza" === tabelaNome[i].Servico) {
                        dadoLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Reprovado" === tabelaNome[i].Servico) {
                        dadoRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão de Compra" === tabelaNome[i].Servico) {
                        dadoRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico) {
                        dadoRL.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Coletor de Dados" === tabelaNome[i].Equipamento) {
                        dadoCol.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de Dados" === tabelaNome[i].Equipamento) {
                        dadoLei.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Leitor de RFID" === tabelaNome[i].Equipamento) {
                        dadoLeiRFID.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Impressora Térmica" === tabelaNome[i].Equipamento) {
                        dadoImp.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Busca Preço" === tabelaNome[i].Equipamento) {
                        dadoBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 3 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 4 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 5 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Carregador de 6 Posições" === tabelaNome[i].Equipamento) {
                        dadoCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Berço de Comunicação" === tabelaNome[i].Equipamento) {
                        dadoBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Fonte de Alimentação" === tabelaNome[i].Equipamento) {
                        dadoFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Cabo Confeccionado" === tabelaNome[i].Equipamento) {
                        dadoCabo.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if ("Bateria" === tabelaNome[i].Equipamento) {
                        dadoBateria.push({
                            OS: tabelaNome[i].OS
                        })
                    }

                }
                //#endregion
            }

            const totalMC = Object.keys(dadoMC).length;
            const totalLA = Object.keys(dadoLA).length;
            const totalSR = Object.keys(dadoSR).length;
            const totalRM = Object.keys(dadoRM).length;
            const totalCO = Object.keys(dadoCO).length;
            const totalRV = Object.keys(dadoRV).length;
            const totalCC = Object.keys(dadoCC).length;
            const totalMMV = Object.keys(dadoMMV).length;
            const totalRP = Object.keys(dadoRP).length;
            const totalLP = Object.keys(dadoLP).length;
            const totalRR = Object.keys(dadoRR).length;
            const totalRC = Object.keys(dadoRC).length;
            const totalRL = Object.keys(dadoRL).length;

            let totalCol = Object.keys(dadoCol).length;
            let totalLei = Object.keys(dadoLei).length;
            let totalLeiRFID = Object.keys(dadoLeiRFID).length;
            let totalImp = Object.keys(dadoImp).length;
            let totalBusca = Object.keys(dadoBusca).length;
            let totalCar3 = Object.keys(dadoCar3).length;
            let totalCar4 = Object.keys(dadoCar4).length;
            let totalCar5 = Object.keys(dadoCar5).length;
            let totalCar6 = Object.keys(dadoCar6).length;
            let totalBerco = Object.keys(dadoBerco).length;
            let totalFonte = Object.keys(dadoFonte).length;
            let totalCabo = Object.keys(dadoCabo).length;
            let totalBateria = Object.keys(dadoBateria).length;

            let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                     let totalRealOS = [];
                     for (let i = 0; i < totalOS.length; i++) {
                         totalRealOS.unshift(totalOS[i].OS)
                     }
 
            let totalSemRepOS = [... new Set(totalRealOS)]

            const totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

            return this.setState({
                //total servico
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
                listarRR: totalRR,
                listarRC: totalRC,
                listarRL: totalRL,

                //total por equipamento
                listarTotalCOl: totalCol,
                listarTotalLei: totalLei,
                listarTotalLeiRFID: totalLeiRFID,
                listarTotalImp: totalImp,
                listarTotalBusca: totalBusca,
                listarTotalCar3: totalCar3,
                listarTotalCar4: totalCar4,
                listarTotalCar5: totalCar5,
                listarTotalCar6: totalCar6,
                listarTotalBerco: totalBerco,
                listarTotalFonte: totalFonte,
                listarTotalCabos: totalCabo,
                listarTotalBateria: totalBateria,

                //total
                listarTotalEquip: totalEquip,

                listarTotalOS: totalSemRepOS.length
            })

        } catch (erro) {
            console.log("Erro" + erro)
        }
    }

    filtrarDados() {
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;
        const contrato = document.getElementById("Contrato").value;

        if ((ano === "Todos") && (mes === "Todos") && (dia === "Todos") && (contrato !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano, contrato)
        } else if ((ano !== "Todos") && (mes === "Todos") && (dia === "Todos") && (contrato !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano, contrato)
        } else if ((ano !== "Todos") && (mes !== "Todos") && (dia === "Todos") && (contrato !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano, contrato)
        } else if ((ano !== "Todos") && (mes !== "Todos") && (dia !== "Todos") && (contrato !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano, contrato)
        }
    }

    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-2 d-flex flex-row justify-content-center align-items-center">
                            <i className="fa fa-filter fa-2x text-danger" /> <h2 className='fw-bold'>Filtro</h2>
                        </div>
                        <div className="col-2">
                            <label>Contrato: </label>
                            <select id="Contrato" class="form-select" aria-label="Default select example">
                                <option selected>Todos</option>
                                <option>Contrato Assaí</option>
                                <option>Contrato C&A</option>
                                <option>Contrato B2W</option>
                                <option>Contrato Atacadão</option>
                                <option>Contrato Boticário</option>
                                <option>Contrato Shopee</option>
                                <option>Contrato Locação</option>
                                <option>Contrato Friozem</option>
                                <option>Contrato Comfrio</option>
                            </select>
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
                        <div className="col-2 d-flex align-items-end">
                            <button className="btn btn-success"
                                onClick={e => this.filtrarDados(e)}
                            >Buscar</button>
                        </div>
                    </div>
                    <div className="row my-3 d-flex justify-content-center ">
                        <div className="col-3 d-flex flex-column justify-content-center text-light">
                            <CardGD bg="dark" nomeTitulo="Total OS's" icone={<i class="fa fa-3x fa-codepen" aria-hidden="true"></i>}
                                dado={this.state.listarTotalOS} />
                        </div>
                        <div className="col-3 d-flex flex-column justify-content-center text-light">
                            <CardGD bg="success" nomeTitulo="Total Serviço" icone={<i class="fa fa-3x fa-server" aria-hidden="true"></i>}
                                dado={this.state.listarTotalEquip} />
                        </div>
                        <div className="col-3 d-flex flex-column justify-content-center text-light">
                            <CardGD bg="danger" nomeTitulo="Total Garantia" icone={<i class="fa fa-3x fa-backward" aria-hidden="true"></i>}
                                dado={this.state.listarTotalGarantia} />
                        </div>
                        <div className="col-3 d-flex flex-column justify-content-center text-light">
                            <CardGD bg="primary" nomeTitulo="Total Limpeza" icone={<i class="fa fa-3x fa-paint-brush" aria-hidden="true"></i>}
                                dado={this.state.listarLP} />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-5 flex-fill mx-3 sombra">
                            <Grafico tipo="pie" titulo="Ordens de Serviço"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                nomeSerie="Ordem de Serviço"
                                cor={true}
                                dado={[
                                    { name: "Manutenção Concluída", y: this.state.listarMC },
                                    { name: "Laudo", y: this.state.listarLA },
                                    { name: "Suporte Remoto", y: this.state.listarSR },
                                    { name: "Revisão de Manutenção", y: this.state.listarRM },
                                    { name: "Chamado On-Site", y: this.state.listarCO },
                                    { name: "Revisão de Venda", y: this.state.listarRV },
                                    { name: "Confecção de Cabos", y: this.state.listarCC },
                                    { name: "M/M de Venda", y: this.state.listarMMV },
                                    { name: "Recuperação Placa", y: this.state.listarRP },
                                    { name: "Limpeza", y: this.state.listarLP },
                                    { name: "Revisão Reprovado", y: this.state.listarRR },
                                    { name: "Revisão Compra", y: this.state.listarRC },
                                    { name: "Revisão Locação", y: this.state.listarRL },
                                ]}
                            />
                        </div>
                        <div className="col-12 col-md-5 sombra flex-fill">
                            <Grafico tipo="column" titulo="Ordens de Serviço"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                texto='{point.y:1f}'
                                nomeSerie="Ordem de Serviço"
                                cor={true}
                                dado={""}
                            />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 sombra mx-2">
                            <Grafico tipo="column" titulo="Equipamentos"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                texto='{point.y:1f}'
                                nomeSerie="Equipamento"
                                cor={true}
                                dado={""} />
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}