import React from 'react';
import Grafico from '../Graficos/Grafico';
import "./Relatorio.css";
import axios from 'axios';
import Url from '../Url/Url';




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


    //Equipamento Manutenção
    listarMCCOl: [0],
    listarMCImp: [0],
    listarMCLei: [0],
    listarMCLeiRFID: [0],
    listarMCBusca: [0],
    listarMCCar3: [0],
    listarMCCar4: [0],
    listarMCCar5: [0],
    listarMCCar6: [0],
    listarMCBerco: [0],
    listarMCFonte: [0],
    listarMCCabo: [0],
    listarMCBateria: [0],

    //Equipamento Laudo
    listarLACOl: [0],
    listarLAImp: [0],
    listarLALei: [0],
    listarLALeiRFID: [0],
    listarLABusca: [0],
    listarLACar3: [0],
    listarLACar4: [0],
    listarLACar5: [0],
    listarLACar6: [0],
    listarLABerco: [0],
    listarLAFonte: [0],
    listarLACabo: [0],
    listarLABateria: [0],

    //Equipamento Suporte
    listarSPCOl: [0],
    listarSPImp: [0],
    listarSPLei: [0],
    listarSPLeiRFID: [0],
    listarSPBusca: [0],
    listarSPCar3: [0],
    listarSPCar4: [0],
    listarSPCar5: [0],
    listarSPCar6: [0],
    listarSPBerco: [0],
    listarSPFonte: [0],
    listarSPCabo: [0],
    listarSPBateria: [0],

    //Equipamento Revisão M
    listarRMCOl: [0],
    listarRMImp: [0],
    listarRMLei: [0],
    listarRMLeiRFID: [0],
    listarRMBusca: [0],
    listarRMCar3: [0],
    listarRMCar4: [0],
    listarRMCar5: [0],
    listarRMCar6: [0],
    listarRMBerco: [0],
    listarRMFonte: [0],
    listarRMCabo: [0],
    listarRMBateria: [0],

    //Equipamento Chamado On-site
    listarCOCOl: [0],
    listarCOImp: [0],
    listarCOLei: [0],
    listarCOLeiRFID: [0],
    listarCOBusca: [0],
    listarCOCar3: [0],
    listarCOCar4: [0],
    listarCOCar5: [0],
    listarCOCar6: [0],
    listarCOBerco: [0],
    listarCOFonte: [0],
    listarCOCabo: [0],
    listarCOBateria: [0],

    //Equipamento Revisão V
    listarRVCOl: [0],
    listarRVImp: [0],
    listarRVLei: [0],
    listarRVLeiRFID: [0],
    listarRVBusca: [0],
    listarRVCar3: [0],
    listarRVCar4: [0],
    listarRVCar5: [0],
    listarRVCar6: [0],
    listarRVBerco: [0],
    listarRVFonte: [0],
    listarRVCabo: [0],
    listarRVBateria: [0],

    //Equipamento Cabo
    listarCCCabo: [0],

    //Equipamento Montagem e Manutenção de Venda
    listarMMVCOl: [0],
    listarMMVImp: [0],
    listarMMVLei: [0],
    listarMMVLeiRFID: [0],
    listarMMVBusca: [0],
    listarMMVCar3: [0],
    listarMMVCar4: [0],
    listarMMVCar5: [0],
    listarMMVCar6: [0],
    listarMMVBerco: [0],
    listarMMVFonte: [0],
    listarMMVCabo: [0],
    listarMMVBateria: [0],

    //Equipamento Recuperação Placa
    listarRPCOl: [0],
    listarRPImp: [0],
    listarRPLei: [0],
    listarRPLeiRFID: [0],
    listarRPBusca: [0],
    listarRPCar3: [0],
    listarRPCar4: [0],
    listarRPCar5: [0],
    listarRPCar6: [0],
    listarRPBerco: [0],
    listarRPFonte: [0],
    listarRPCabo: [0],
    listarRPBateria: [0],

    //Equipamento Limpeza
    listarLPCOl: [0],
    listarLPImp: [0],
    listarLPLei: [0],
    listarLPLeiRFID: [0],
    listarLPBusca: [0],
    listarLPCar3: [0],
    listarLPCar4: [0],
    listarLPCar5: [0],
    listarLPCar6: [0],
    listarLPBerco: [0],
    listarLPFonte: [0],
    listarLPCabo: [0],
    listarLPBateria: [0],

    //Equipamento Reprovado
    listarRRCOl: [0],
    listarRRImp: [0],
    listarRRLei: [0],
    listarRRLeiRFID: [0],
    listarRRBusca: [0],
    listarRRCar3: [0],
    listarRRCar4: [0],
    listarRRCar5: [0],
    listarRRCar6: [0],
    listarRRBerco: [0],
    listarRRFonte: [0],
    listarRRCabo: [0],
    listarRRBateria: [0],

    //Equipamento Compra
    listarRCCOl: [0],
    listarRCImp: [0],
    listarRCLei: [0],
    listarRCLeiRFID: [0],
    listarRCBusca: [0],
    listarRCCar3: [0],
    listarRCCar4: [0],
    listarRCCar5: [0],
    listarRCCar6: [0],
    listarRCBerco: [0],
    listarRCFonte: [0],
    listarRCCabo: [0],
    listarRCBateria: [0],

    //Equipamento Locação
    listarRLCOl: [0],
    listarRLImp: [0],
    listarRLLei: [0],
    listarRLLeiRFID: [0],
    listarRLBusca: [0],
    listarRLCar3: [0],
    listarRLCar4: [0],
    listarRLCar5: [0],
    listarRLCar6: [0],
    listarRLBerco: [0],
    listarRLFonte: [0],
    listarRLCabo: [0],
    listarRLBateria: [0],

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
    listarTotalEquip: [0]
}

const banco = "Geral";

const baseUrl = Url(banco);



export default class Relatorio extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.buscarDados()
        this.buscarEquipamento()
        this.totalPorEquipamento()
    }

    async buscarDados() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
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
        let dadoRR = [];
        let dadoRC = [];
        let dadoRL = [];

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)) {
                dadoMC.push({
                    OS: tabelaNome[i].OS
                })
            }
            else
                if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)) {
                    dadoLA.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)) {
                    dadoSR.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                    dadoRM.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)) {
                    dadoCO.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)) {
                    dadoRV.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Confecção de Cabos" === tabelaNome[i].Servico)) {
                    dadoCC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                    dadoMMV.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)) {
                    dadoRP.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)) {
                    dadoLP.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                    dadoRR.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)) {
                    dadoRC.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                    dadoRL.push({
                        OS: tabelaNome[i].OS
                    })
                }
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

        const totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
            totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

        return this.setState({
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

            listarTotalEquip: totalEquip
        })
    }

    async buscarEquipamento() {
        try {
            const tabelaNome = await axios(baseUrl).then(resp => resp.data)

            //#region Variaveis
            //variavel Manutenção
            let dadoMCCol = [];
            let dadoMCLei = [];
            let dadoMCLeiRFID = [];
            let dadoMCImp = [];
            let dadoMCBusca = [];
            let dadoMCCar3 = [];
            let dadoMCCar4 = [];
            let dadoMCCar5 = [];
            let dadoMCCar6 = [];
            let dadoMCBerco = [];
            let dadoMCFonte = [];
            let dadoMCCabo = [];
            let dadoMCBateria = [];

            //Variavel Laudo
            let dadoLACol = [];
            let dadoLALei = [];
            let dadoLALeiRFID = [];
            let dadoLAImp = [];
            let dadoLABusca = [];
            let dadoLACar3 = [];
            let dadoLACar4 = [];
            let dadoLACar5 = [];
            let dadoLACar6 = [];
            let dadoLABerco = [];
            let dadoLAFonte = [];
            let dadoLACabo = [];
            let dadoLABateria = [];

            //Variavel Suporte
            let dadoSPCol = [];
            let dadoSPLei = [];
            let dadoSPLeiRFID = [];
            let dadoSPImp = [];
            let dadoSPBusca = [];
            let dadoSPCar3 = [];
            let dadoSPCar4 = [];
            let dadoSPCar5 = [];
            let dadoSPCar6 = [];
            let dadoSPBerco = [];
            let dadoSPFonte = [];
            let dadoSPCabo = [];
            let dadoSPBateria = [];

            //Variavel Revisão M
            let dadoRMCol = [];
            let dadoRMLei = [];
            let dadoRMLeiRFID = [];
            let dadoRMImp = [];
            let dadoRMBusca = [];
            let dadoRMCar3 = [];
            let dadoRMCar4 = [];
            let dadoRMCar5 = [];
            let dadoRMCar6 = [];
            let dadoRMBerco = [];
            let dadoRMFonte = [];
            let dadoRMCabo = [];
            let dadoRMBateria = [];

            //Variavel On-Site
            let dadoCOCol = [];
            let dadoCOLei = [];
            let dadoCOLeiRFID = [];
            let dadoCOImp = [];
            let dadoCOBusca = [];
            let dadoCOCar3 = [];
            let dadoCOCar4 = [];
            let dadoCOCar5 = [];
            let dadoCOCar6 = [];
            let dadoCOBerco = [];
            let dadoCOFonte = [];
            let dadoCOCabo = [];
            let dadoCOBateria = [];

            //Variavel Revisão V
            let dadoRVCol = [];
            let dadoRVLei = [];
            let dadoRVLeiRFID = [];
            let dadoRVImp = [];
            let dadoRVBusca = [];
            let dadoRVCar3 = [];
            let dadoRVCar4 = [];
            let dadoRVCar5 = [];
            let dadoRVCar6 = [];
            let dadoRVBerco = [];
            let dadoRVFonte = [];
            let dadoRVCabo = [];
            let dadoRVBateria = [];

            //variavel dos Cabos
            let dadoCCCabo = [];

            //Variavel Montagem/Manutenção de Venda
            let dadoMMVCol = [];
            let dadoMMVLei = [];
            let dadoMMVLeiRFID = [];
            let dadoMMVImp = [];
            let dadoMMVBusca = [];
            let dadoMMVCar3 = [];
            let dadoMMVCar4 = [];
            let dadoMMVCar5 = [];
            let dadoMMVCar6 = [];
            let dadoMMVBerco = [];
            let dadoMMVFonte = [];
            let dadoMMVCabo = [];
            let dadoMMVBateria = [];

            //Variavel Recuperação Placa
            let dadoRPCol = [];
            let dadoRPLei = [];
            let dadoRPLeiRFID = [];
            let dadoRPImp = [];
            let dadoRPBusca = [];
            let dadoRPCar3 = [];
            let dadoRPCar4 = [];
            let dadoRPCar5 = [];
            let dadoRPCar6 = [];
            let dadoRPBerco = [];
            let dadoRPFonte = [];
            let dadoRPCabo = [];
            let dadoRPBateria = [];

            //Variavel Limpeza
            let dadoLPCol = [];
            let dadoLPLei = [];
            let dadoLPLeiRFID = [];
            let dadoLPImp = [];
            let dadoLPBusca = [];
            let dadoLPCar3 = [];
            let dadoLPCar4 = [];
            let dadoLPCar5 = [];
            let dadoLPCar6 = [];
            let dadoLPBerco = [];
            let dadoLPFonte = [];
            let dadoLPCabo = [];
            let dadoLPBateria = [];

            //Variavel Reprovado
            let dadoRRCol = [];
            let dadoRRLei = [];
            let dadoRRLeiRFID = [];
            let dadoRRImp = [];
            let dadoRRBusca = [];
            let dadoRRCar3 = [];
            let dadoRRCar4 = [];
            let dadoRRCar5 = [];
            let dadoRRCar6 = [];
            let dadoRRBerco = [];
            let dadoRRFonte = [];
            let dadoRRCabo = [];
            let dadoRRBateria = [];

            //Variavel Compra
            let dadoRCCol = [];
            let dadoRCLei = [];
            let dadoRCLeiRFID = [];
            let dadoRCImp = [];
            let dadoRCBusca = [];
            let dadoRCCar3 = [];
            let dadoRCCar4 = [];
            let dadoRCCar5 = [];
            let dadoRCCar6 = [];
            let dadoRCBerco = [];
            let dadoRCFonte = [];
            let dadoRCCabo = [];
            let dadoRCBateria = [];

            //Variavel Locação
            let dadoRLCol = [];
            let dadoRLLei = [];
            let dadoRLLeiRFID = [];
            let dadoRLImp = [];
            let dadoRLBusca = [];
            let dadoRLCar3 = [];
            let dadoRLCar4 = [];
            let dadoRLCar5 = [];
            let dadoRLCar6 = [];
            let dadoRLBerco = [];
            let dadoRLFonte = [];
            let dadoRLCabo = [];
            let dadoRLBateria = [];

            //#endregion

            for (let i = 0; i < tabelaNome.length; i++) {
                //#region Manutenção
                if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                    dadoMCCol.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                    dadoMCLei.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                    dadoMCLeiRFID.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                    dadoMCBusca.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                    dadoMCImp.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                    dadoMCCar4.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                    dadoMCCar3.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                    dadoMCCar5.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                    dadoMCCar6.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                    dadoMCBerco.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                    dadoMCFonte.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                    dadoMCCabo.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)
                    && ("Bateria" === tabelaNome[i].Equipamento)) {
                    dadoMCBateria.push({
                        OS: tabelaNome[i].OS
                    })
                } else
                    //#endregion

                    //#region Laudo
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoLACol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoLALei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                        dadoLALeiRFID.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoLABusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoLAImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoLABerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoLAFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                        dadoLACabo.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)
                        && ("Bateria" === tabelaNome[i].Equipamento)) {
                        dadoLABateria.push({
                            OS: tabelaNome[i].OS
                        })
                    } else
                        //#endregion

                        //#region Suporte Remoto

                        if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoSPCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoSPLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoSPLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoSPBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoSPImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoSPCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoSPCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoSPCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoSPCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoSPBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoSPFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoSPCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)
                            && ("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoSPBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        } else
                            //#endregion

                            //#region Revisão M
                            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoRMCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoRMLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoRMLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoRMBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoRMImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoRMCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoRMCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoRMCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoRMCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoRMBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                dadoRMFonte.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoRMCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)
                                && ("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoRMBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else
                                //#endregion

                                //#region On-Site
                                if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoCOCol.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoCOLei.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                    dadoCOLeiRFID.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                                    dadoCOBusca.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                    dadoCOImp.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoCOCar4.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoCOCar3.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoCOCar5.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoCOCar6.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                    dadoCOBerco.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                    dadoCOFonte.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                    dadoCOCabo.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)
                                    && ("Bateria" === tabelaNome[i].Equipamento)) {
                                    dadoCOBateria.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else
                                    //#endregion

                                    //#region Revisão V
                                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoRVCol.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoRVLei.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                        dadoRVLeiRFID.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                                        dadoRVBusca.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                        dadoRVImp.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoRVCar4.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoRVCar3.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoRVCar5.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoRVCar6.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                        dadoRVBerco.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                        dadoRVFonte.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                        dadoRVCabo.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)
                                        && ("Bateria" === tabelaNome[i].Equipamento)) {
                                        dadoRVBateria.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    }
                                    //#endregion

                                    //#region Confecção de Cabos
                                    else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Confecção de Cabos" === tabelaNome[i].Servico)
                                        && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                        dadoCCCabo.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else

                                        //#endregion

                                        //#region Montagem/Manutenção de Venda
                                        if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoMMVCol.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoMMVLei.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                            dadoMMVLeiRFID.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                                            dadoMMVBusca.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                            dadoMMVImp.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoMMVCar4.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoMMVCar3.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoMMVCar5.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoMMVCar6.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                            dadoMMVBerco.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                            dadoMMVFonte.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                            dadoMMVCabo.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)
                                            && ("Bateria" === tabelaNome[i].Equipamento)) {
                                            dadoMMVBateria.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else

                                            //#endregion

                                            //#region Recuperação Placa

                                            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoRPCol.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoRPLei.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                                dadoRPLeiRFID.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                                                dadoRPBusca.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                                dadoRPImp.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoRPCar4.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoRPCar3.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoRPCar5.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoRPCar6.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                                dadoRPBerco.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                                dadoRPFonte.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                                dadoRPCabo.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Recuperação de Placa" === tabelaNome[i].Servico)
                                                && ("Bateria" === tabelaNome[i].Equipamento)) {
                                                dadoRPBateria.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else

                                                //#endregion

                                                //#region Limpeza
                                                if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                                    dadoLPCol.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                                    dadoLPLei.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                                    dadoLPLeiRFID.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                                                    dadoLPBusca.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                                    dadoLPImp.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                                    dadoLPCar4.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                                    dadoLPCar3.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                                    dadoLPCar5.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                                    dadoLPCar6.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                                    dadoLPBerco.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                                    dadoLPFonte.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Limpeza" === tabelaNome[i].Servico)
                                                    && ("Bateria" === tabelaNome[i].Equipamento)) {
                                                    dadoLPBateria.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                } else

                                                    //#endregion

                                                    //#region Revisão de Reprovado
                                                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                                        dadoRRCol.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                                        dadoRRLei.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                                        dadoRRLeiRFID.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                                                        dadoRRBusca.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                                        dadoRRImp.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                                        dadoRRCar4.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                                        dadoRRCar3.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                                        dadoRRCar5.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                                        dadoRRCar6.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                                        dadoRRBerco.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                                        dadoRRFonte.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Reprovado" === tabelaNome[i].Servico)
                                                        && ("Bateria" === tabelaNome[i].Equipamento)) {
                                                        dadoRRBateria.push({
                                                            OS: tabelaNome[i].OS
                                                        })
                                                    }
                //#endregion

                //#region Revisão Compra
                if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                    dadoRCCol.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                    dadoRCLei.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                    dadoRCLeiRFID.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                    dadoRCBusca.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                    dadoRCImp.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                    dadoRCCar4.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                    dadoRCCar3.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                    dadoRCCar5.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                    dadoRCCar6.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                    dadoRCBerco.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                    dadoRCFonte.push({
                        OS: tabelaNome[i].OS
                    })
                } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Compra" === tabelaNome[i].Servico)
                    && ("Bateria" === tabelaNome[i].Equipamento)) {
                    dadoRCBateria.push({
                        OS: tabelaNome[i].OS
                    })
                } else
                    //#endregion

                    //#region Locação
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoRLCol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoRLLei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                        dadoRLLeiRFID.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoRLBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoRLImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRLCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRLCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRLCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRLCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoRLBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoRLFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)
                        && ("Bateria" === tabelaNome[i].Equipamento)) {
                        dadoRLBateria.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                //#endregion
            }

            //#region Totais Object
            //Total Manutenção
            let totalMCCol = Object.keys(dadoMCCol).length;
            let totalMCLei = Object.keys(dadoMCLei).length;
            let totalMCLeiRFID = Object.keys(dadoMCLeiRFID).length;
            let totalMCBusca = Object.keys(dadoMCBusca).length;
            let totalMCImp = Object.keys(dadoMCImp).length;
            let totalMCCar3 = Object.keys(dadoMCCar3).length;
            let totalMCCar4 = Object.keys(dadoMCCar4).length;
            let totalMCCar5 = Object.keys(dadoMCCar5).length;
            let totalMCCar6 = Object.keys(dadoMCCar6).length;
            let totalMCBerco = Object.keys(dadoMCBerco).length;
            let totalMCFonte = Object.keys(dadoMCFonte).length;
            let totalMCCabo = Object.keys(dadoMCCabo).length;
            let totalMCBateria = Object.keys(dadoMCBateria).length;

            //Total Laudo
            let totalLACol = Object.keys(dadoLACol).length;
            let totalLALei = Object.keys(dadoLALei).length;
            let totalLALeiRFID = Object.keys(dadoLALeiRFID).length;
            let totalLABusca = Object.keys(dadoLABusca).length;
            let totalLAImp = Object.keys(dadoLAImp).length;
            let totalLACar3 = Object.keys(dadoLACar3).length;
            let totalLACar4 = Object.keys(dadoLACar4).length;
            let totalLACar5 = Object.keys(dadoLACar5).length;
            let totalLACar6 = Object.keys(dadoLACar6).length;
            let totalLABerco = Object.keys(dadoLABerco).length;
            let totalLAFonte = Object.keys(dadoLAFonte).length;
            let totalLACabo = Object.keys(dadoLACabo).length;
            let totalLABateria = Object.keys(dadoLABateria).length;

            //Total Suporte
            let totalSPCol = Object.keys(dadoSPCol).length;
            let totalSPLei = Object.keys(dadoSPLei).length;
            let totalSPLeiRFID = Object.keys(dadoSPLeiRFID).length;
            let totalSPBusca = Object.keys(dadoSPBusca).length;
            let totalSPImp = Object.keys(dadoSPImp).length;
            let totalSPCar3 = Object.keys(dadoSPCar3).length;
            let totalSPCar4 = Object.keys(dadoSPCar4).length;
            let totalSPCar5 = Object.keys(dadoSPCar5).length;
            let totalSPCar6 = Object.keys(dadoSPCar6).length;
            let totalSPBerco = Object.keys(dadoSPBerco).length;
            let totalSPFonte = Object.keys(dadoSPFonte).length;
            let totalSPCabo = Object.keys(dadoSPCabo).length;
            let totalSPBateria = Object.keys(dadoSPBateria).length;

            //Total Revisão M
            let totalRMCol = Object.keys(dadoRMCol).length;
            let totalRMLei = Object.keys(dadoRMLei).length;
            let totalRMLeiRFID = Object.keys(dadoRMLeiRFID).length;
            let totalRMBusca = Object.keys(dadoRMBusca).length;
            let totalRMImp = Object.keys(dadoRMImp).length;
            let totalRMCar3 = Object.keys(dadoRMCar3).length;
            let totalRMCar4 = Object.keys(dadoRMCar4).length;
            let totalRMCar5 = Object.keys(dadoRMCar5).length;
            let totalRMCar6 = Object.keys(dadoRMCar6).length;
            let totalRMBerco = Object.keys(dadoRMBerco).length;
            let totalRMFonte = Object.keys(dadoRMFonte).length;
            let totalRMCabo = Object.keys(dadoRMCabo).length;
            let totalRMBateria = Object.keys(dadoRMBateria).length;

            //Total On-Site
            let totalCOCol = Object.keys(dadoCOCol).length;
            let totalCOLei = Object.keys(dadoCOLei).length;
            let totalCOLeiRFID = Object.keys(dadoCOLeiRFID).length;
            let totalCOBusca = Object.keys(dadoCOBusca).length;
            let totalCOImp = Object.keys(dadoCOImp).length;
            let totalCOCar3 = Object.keys(dadoCOCar3).length;
            let totalCOCar4 = Object.keys(dadoCOCar4).length;
            let totalCOCar5 = Object.keys(dadoCOCar5).length;
            let totalCOCar6 = Object.keys(dadoCOCar6).length;
            let totalCOBerco = Object.keys(dadoCOBerco).length;
            let totalCOFonte = Object.keys(dadoCOFonte).length;
            let totalCOCabo = Object.keys(dadoCOCabo).length;
            let totalCOBateria = Object.keys(dadoCOBateria).length;

            //Total Revisão V
            let totalRVCol = Object.keys(dadoRVCol).length;
            let totalRVLei = Object.keys(dadoRVLei).length;
            let totalRVLeiRFID = Object.keys(dadoRVLeiRFID).length;
            let totalRVBusca = Object.keys(dadoRVBusca).length;
            let totalRVImp = Object.keys(dadoRVImp).length;
            let totalRVCar3 = Object.keys(dadoRVCar3).length;
            let totalRVCar4 = Object.keys(dadoRVCar4).length;
            let totalRVCar5 = Object.keys(dadoRVCar5).length;
            let totalRVCar6 = Object.keys(dadoRVCar6).length;
            let totalRVBerco = Object.keys(dadoRVBerco).length;
            let totalRVFonte = Object.keys(dadoRVFonte).length;
            let totalRVCabo = Object.keys(dadoRVCabo).length;
            let totalRVBateria = Object.keys(dadoRVBateria).length;

            //Total Confeção de Cabos
            let totalCCCabos = Object.keys(dadoCCCabo).length;

            //Total Montagem/Manutenção de Venda
            let totalMMVCol = Object.keys(dadoMMVCol).length;
            let totalMMVLei = Object.keys(dadoMMVLei).length;
            let totalMMVLeiRFID = Object.keys(dadoMMVLeiRFID).length;
            let totalMMVBusca = Object.keys(dadoMMVBusca).length;
            let totalMMVImp = Object.keys(dadoMMVImp).length;
            let totalMMVCar3 = Object.keys(dadoMMVCar3).length;
            let totalMMVCar4 = Object.keys(dadoMMVCar4).length;
            let totalMMVCar5 = Object.keys(dadoMMVCar5).length;
            let totalMMVCar6 = Object.keys(dadoMMVCar6).length;
            let totalMMVBerco = Object.keys(dadoMMVBerco).length;
            let totalMMVFonte = Object.keys(dadoMMVFonte).length;
            let totalMMVCabo = Object.keys(dadoMMVCabo).length;
            let totalMMVBateria = Object.keys(dadoMMVBateria).length;

            //Total Recuperação Placa
            let totalRPCol = Object.keys(dadoRPCol).length;
            let totalRPLei = Object.keys(dadoRPLei).length;
            let totalRPLeiRFID = Object.keys(dadoRPLeiRFID).length;
            let totalRPBusca = Object.keys(dadoRPBusca).length;
            let totalRPImp = Object.keys(dadoRPImp).length;
            let totalRPCar3 = Object.keys(dadoRPCar3).length;
            let totalRPCar4 = Object.keys(dadoRPCar4).length;
            let totalRPCar5 = Object.keys(dadoRPCar5).length;
            let totalRPCar6 = Object.keys(dadoRPCar6).length;
            let totalRPBerco = Object.keys(dadoRPBerco).length;
            let totalRPFonte = Object.keys(dadoRPFonte).length;
            let totalRPCabo = Object.keys(dadoRPCabo).length;
            let totalRPBateria = Object.keys(dadoRPBateria).length;

            //Total Limpeza
            let totalLPCol = Object.keys(dadoLPCol).length;
            let totalLPLei = Object.keys(dadoLPLei).length;
            let totalLPLeiRFID = Object.keys(dadoLPLeiRFID).length;
            let totalLPBusca = Object.keys(dadoLPBusca).length;
            let totalLPImp = Object.keys(dadoLPImp).length;
            let totalLPCar3 = Object.keys(dadoLPCar3).length;
            let totalLPCar4 = Object.keys(dadoLPCar4).length;
            let totalLPCar5 = Object.keys(dadoLPCar5).length;
            let totalLPCar6 = Object.keys(dadoLPCar6).length;
            let totalLPBerco = Object.keys(dadoLPBerco).length;
            let totalLPFonte = Object.keys(dadoLPFonte).length;
            let totalLPCabo = Object.keys(dadoLPCabo).length;
            let totalLPBateria = Object.keys(dadoLPBateria).length;

            //Total Reprovado
            let totalRRCol = Object.keys(dadoRRCol).length;
            let totalRRLei = Object.keys(dadoRRLei).length;
            let totalRRLeiRFID = Object.keys(dadoRRLeiRFID).length;
            let totalRRBusca = Object.keys(dadoRRBusca).length;
            let totalRRImp = Object.keys(dadoRRImp).length;
            let totalRRCar3 = Object.keys(dadoRRCar3).length;
            let totalRRCar4 = Object.keys(dadoRRCar4).length;
            let totalRRCar5 = Object.keys(dadoRRCar5).length;
            let totalRRCar6 = Object.keys(dadoRRCar6).length;
            let totalRRBerco = Object.keys(dadoRRBerco).length;
            let totalRRFonte = Object.keys(dadoRRFonte).length;
            let totalRRCabo = Object.keys(dadoRRCabo).length;
            let totalRRBateria = Object.keys(dadoRRBateria).length;

            //Total Compra
            let totalRCCol = Object.keys(dadoRCCol).length;
            let totalRCLei = Object.keys(dadoRCLei).length;
            let totalRCLeiRFID = Object.keys(dadoRCLeiRFID).length;
            let totalRCBusca = Object.keys(dadoRCBusca).length;
            let totalRCImp = Object.keys(dadoRCImp).length;
            let totalRCCar3 = Object.keys(dadoRCCar3).length;
            let totalRCCar4 = Object.keys(dadoRCCar4).length;
            let totalRCCar5 = Object.keys(dadoRCCar5).length;
            let totalRCCar6 = Object.keys(dadoRCCar6).length;
            let totalRCBerco = Object.keys(dadoRCBerco).length;
            let totalRCFonte = Object.keys(dadoRCFonte).length;
            let totalRCCabo = Object.keys(dadoRCCabo).length;
            let totalRCBateria = Object.keys(dadoRCBateria).length;

            //Total Compra
            let totalRLCol = Object.keys(dadoRLCol).length;
            let totalRLLei = Object.keys(dadoRLLei).length;
            let totalRLLeiRFID = Object.keys(dadoRLLeiRFID).length;
            let totalRLBusca = Object.keys(dadoRLBusca).length;
            let totalRLImp = Object.keys(dadoRLImp).length;
            let totalRLCar3 = Object.keys(dadoRLCar3).length;
            let totalRLCar4 = Object.keys(dadoRLCar4).length;
            let totalRLCar5 = Object.keys(dadoRLCar5).length;
            let totalRLCar6 = Object.keys(dadoRLCar6).length;
            let totalRLBerco = Object.keys(dadoRLBerco).length;
            let totalRLFonte = Object.keys(dadoRLFonte).length;
            let totalRLCabo = Object.keys(dadoRLCabo).length;
            let totalRLBateria = Object.keys(dadoRLBateria).length;
            //#endregion

            //#region Return arrays
            return this.setState({
                //Listar Manutenção
                listarMCCOl: totalMCCol,
                listarMCLei: totalMCLei,
                listarMCLeiRFID: totalMCLeiRFID,
                listarMCBusca: totalMCBusca,
                listarMCImp: totalMCImp,
                listarMCCar3: totalMCCar3,
                listarMCCar4: totalMCCar4,
                listarMCCar5: totalMCCar5,
                listarMCCar6: totalMCCar6,
                listarMCBerco: totalMCBerco,
                listarMCFonte: totalMCFonte,
                listarMCCabo: totalMCCabo,
                listarMCBateria: totalMCBateria,

                //Listar Laudo
                listarLACOl: totalLACol,
                listarLALei: totalLALei,
                listarLALeiRFID: totalLALeiRFID,
                listarLABusca: totalLABusca,
                listarLAImp: totalLAImp,
                listarLACar3: totalLACar3,
                listarLACar4: totalLACar4,
                listarLACar5: totalLACar5,
                listarLACar6: totalLACar6,
                listarLABerco: totalLABerco,
                listarLAFonte: totalLAFonte,
                listarLACabo: totalLACabo,
                listarLABateria: totalLABateria,

                //Listar Suporte
                listarSPCOl: totalSPCol,
                listarSPLei: totalSPLei,
                listarSPLeiRFID: totalSPLeiRFID,
                listarSPBusca: totalSPBusca,
                listarSPImp: totalSPImp,
                listarSPCar3: totalSPCar3,
                listarSPCar4: totalSPCar4,
                listarSPCar5: totalSPCar5,
                listarSPCar6: totalSPCar6,
                listarSPBerco: totalSPBerco,
                listarSPFonte: totalSPFonte,
                listarSPCabo: totalSPCabo,
                listarSPBateria: totalSPBateria,

                //Listar Revisão M
                listarRMCOl: totalRMCol,
                listarRMLei: totalRMLei,
                listarRMLeiRFID: totalRMLeiRFID,
                listarRMBusca: totalRMBusca,
                listarRMImp: totalRMImp,
                listarRMCar3: totalRMCar3,
                listarRMCar4: totalRMCar4,
                listarRMCar5: totalRMCar5,
                listarRMCar6: totalRMCar6,
                listarRMBerco: totalRMBerco,
                listarRMFonte: totalRMFonte,
                listarRMCabo: totalRMCabo,
                listarRMBateria: totalRMBateria,

                //Listar On-Site
                listarCOCOl: totalCOCol,
                listarCOLei: totalCOLei,
                listarCOLeiRFID: totalCOLeiRFID,
                listarCOBusca: totalCOBusca,
                listarCOImp: totalCOImp,
                listarCOCar3: totalCOCar3,
                listarCOCar4: totalCOCar4,
                listarCOCar5: totalCOCar5,
                listarCOCar6: totalCOCar6,
                listarCOBerco: totalCOBerco,
                listarCOFonte: totalCOFonte,
                listarCOCabo: totalCOCabo,
                listarCOBateria: totalCOBateria,

                //Listar Revisão V
                listarRVCOl: totalRVCol,
                listarRVLei: totalRVLei,
                listarRVLeiRFID: totalRVLeiRFID,
                listarRVBusca: totalRVBusca,
                listarRVImp: totalRVImp,
                listarRVCar3: totalRVCar3,
                listarRVCar4: totalRVCar4,
                listarRVCar5: totalRVCar5,
                listarRVCar6: totalRVCar6,
                listarRVBerco: totalRVBerco,
                listarRVFonte: totalRVFonte,
                listarRVCabo: totalRVCabo,
                listarRVBateria: totalRVBateria,

                //listar Cofecção de Cabos
                listarCCCabo: totalCCCabos,

                //Listar Montagem/Manutenção de Venda
                listarMMVCOl: totalMMVCol,
                listarMMVLei: totalMMVLei,
                listarMMVLeiRFID: totalMMVLeiRFID,
                listarMMVBusca: totalMMVBusca,
                listarMMVImp: totalMMVImp,
                listarMMVCar3: totalMMVCar3,
                listarMMVCar4: totalMMVCar4,
                listarMMVCar5: totalMMVCar5,
                listarMMVCar6: totalMMVCar6,
                listarMMVBerco: totalMMVBerco,
                listarMMVFonte: totalMMVFonte,
                listarMMVCabo: totalMMVCabo,
                listarMMVBateria: totalMMVBateria,

                //Listar Recuperação Placa
                listarRPCOl: totalRPCol,
                listarRPLei: totalRPLei,
                listarRPLeiRFID: totalRPLeiRFID,
                listarRPBusca: totalRPBusca,
                listarRPImp: totalRPImp,
                listarRPCar3: totalRPCar3,
                listarRPCar4: totalRPCar4,
                listarRPCar5: totalRPCar5,
                listarRPCar6: totalRPCar6,
                listarRPBerco: totalRPBerco,
                listarRPFonte: totalRPFonte,
                listarRPCabo: totalRPCabo,
                listarRPBateria: totalRPBateria,

                //Listar Limpeza
                listarLPCOl: totalLPCol,
                listarLPLei: totalLPLei,
                listarLPLeiRFID: totalLPLeiRFID,
                listarLPBusca: totalLPBusca,
                listarLPImp: totalLPImp,
                listarLPCar3: totalLPCar3,
                listarLPCar4: totalLPCar4,
                listarLPCar5: totalLPCar5,
                listarLPCar6: totalLPCar6,
                listarLPBerco: totalLPBerco,
                listarLPFonte: totalLPFonte,
                listarLPCabo: totalLPCabo,
                listarLPBateria: totalLPBateria,

                //Listar Reprovado
                listarRRCOl: totalRRCol,
                listarRRLei: totalRRLei,
                listarRRLeiRFID: totalRRLeiRFID,
                listarRRBusca: totalRRBusca,
                listarRRImp: totalRRImp,
                listarRRCar3: totalRRCar3,
                listarRRCar4: totalRRCar4,
                listarRRCar5: totalRRCar5,
                listarRRCar6: totalRRCar6,
                listarRRBerco: totalRRBerco,
                listarRRFonte: totalRRFonte,
                listarRRCabo: totalRRCabo,
                listarRRBateria: totalRRBateria,

                //Listar Compra
                listarRCCOl: totalRCCol,
                listarRCLei: totalRCLei,
                listarRCLeiRFID: totalRCLeiRFID,
                listarRCBusca: totalRCBusca,
                listarRCImp: totalRCImp,
                listarRCCar3: totalRCCar3,
                listarRCCar4: totalRCCar4,
                listarRCCar5: totalRCCar5,
                listarRCCar6: totalRCCar6,
                listarRCBerco: totalRCBerco,
                listarRCFonte: totalRCFonte,
                listarRCCabo: totalRCCabo,
                listarRCBateria: totalRCBateria,

                //Listar Locação
                listarRLCOl: totalRLCol,
                listarRLLei: totalRLLei,
                listarRLLeiRFID: totalRLLeiRFID,
                listarRLBusca: totalRLBusca,
                listarRLImp: totalRLImp,
                listarRLCar3: totalRLCar3,
                listarRLCar4: totalRLCar4,
                listarRLCar5: totalRLCar5,
                listarRLCar6: totalRLCar6,
                listarRLBerco: totalRLBerco,
                listarRLFonte: totalRLFonte,
                listarRLCabo: totalRLCabo,
                listarRLBateria: totalRLBateria,
            })
            //#endregion

        } catch (error) {
            console.log("Error: " + error)
        }
    }

    mostrarEquipamento(estagio) {

        if (estagio === "Manutenção") {
            const data = [
                { name: "Coletor", y: this.state.listarMCCOl },
                { name: "Leitor", y: this.state.listarMCLei },
                { name: "Leitor RFID", y: this.state.listarMCLeiRFID },
                { name: "Busca Preço", y: this.state.listarMCBusca },
                { name: "Impressora", y: this.state.listarMCImp },
                { name: "Carregador 3 P", y: this.state.listarMCCar3 },
                { name: "Carregador 4 P", y: this.state.listarMCCar4 },
                { name: "Carregador 5 P", y: this.state.listarMCCar5 },
                { name: "Carregador 6 P", y: this.state.listarMCCar6 },
                { name: "Berço", y: this.state.listarMCBerco },
                { name: "Fonte", y: this.state.listarMCFonte },
                { name: "Cabo C", y: this.state.listarMCCabo },
                { name: "Bateria", y: this.state.listarMCBateria }
            ]

            return data
        }
        else if (estagio === "Laudo") {
            const data = [
                { name: "Coletor", y: this.state.listarLACOl },
                { name: "Leitor", y: this.state.listarLALei },
                { name: "Leitor RFID", y: this.state.listarLALeiRFID },
                { name: "Busca Preço", y: this.state.listarLABusca },
                { name: "Impressora", y: this.state.listarLAImp },
                { name: "Carregador 3 P", y: this.state.listarLACar3 },
                { name: "Carregador 4 P", y: this.state.listarLACar4 },
                { name: "Carregador 5 P", y: this.state.listarLACar5 },
                { name: "Carregador 6 P", y: this.state.listarLACar6 },
                { name: "Berço", y: this.state.listarLABerco },
                { name: "Fonte", y: this.state.listarLAFonte },
                { name: "Cabo C", y: this.state.listarLACabo },
                { name: "Bateria", y: this.state.listarLABateria }
            ]

            return data
        }
        else if (estagio === "Suporte") {
            const data = [
                { name: "Coletor", y: this.state.listarSPCOl },
                { name: "Leitor ", y: this.state.listarSPLei },
                { name: "Leitor RFID", y: this.state.listarSPLeiRFID },
                { name: "Busca Preço", y: this.state.listarSPBusca },
                { name: "Impressora", y: this.state.listarSPImp },
                { name: "Carregador 3 P", y: this.state.listarSPCar3 },
                { name: "Carregador 4 P", y: this.state.listarSPCar4 },
                { name: "Carregador 5 P", y: this.state.listarSPCar5 },
                { name: "Carregador 6 P", y: this.state.listarSPCar6 },
                { name: "Berço", y: this.state.listarSPBerco },
                { name: "Fonte", y: this.state.listarSPFonte },
                { name: "Cabo C", y: this.state.listarSPCabo },
                { name: "Bateria", y: this.state.listarSPBateria }
            ]

            return data
        }
        else if (estagio === "Revisão M") {
            const data = [
                { name: "Coletor", y: this.state.listarRMCOl },
                { name: "Leitor", y: this.state.listarRMLei },
                { name: "Leitor RFID", y: this.state.listarRMLeiRFID },
                { name: "Busca Preço", y: this.state.listarRMBusca },
                { name: "Impressora", y: this.state.listarRMImp },
                { name: "Carregador 3 P", y: this.state.listarRMCar3 },
                { name: "Carregador 4 P", y: this.state.listarRMCar4 },
                { name: "Carregador 5 P", y: this.state.listarRMCar5 },
                { name: "Carregador 6 P", y: this.state.listarRMCar6 },
                { name: "Berço", y: this.state.listarRMBerco },
                { name: "Fonte", y: this.state.listarRMFonte },
                { name: "Cabo C", y: this.state.listarRMCabo },
                { name: "Bateria", y: this.state.listarRMBateria }
            ]

            return data
        }
        else if (estagio === "On-site") {
            const data = [
                { name: "Coletor", y: this.state.listarCOCOl },
                { name: "Leitor", y: this.state.listarCOLei },
                { name: "Leitor RFID", y: this.state.listarCOLeiRFID },
                { name: "Busca Preço", y: this.state.listarCOBusca },
                { name: "Impressora", y: this.state.listarCOImp },
                { name: "Carregador 3 P", y: this.state.listarCOCar3 },
                { name: "Carregador 4 P", y: this.state.listarCOCar4 },
                { name: "Carregador 5 P", y: this.state.listarCOCar5 },
                { name: "Carregador 6 P", y: this.state.listarCOCar6 },
                { name: "Berço", y: this.state.listarCOBerco },
                { name: "Fonte", y: this.state.listarCOFonte },
                { name: "Cabo C", y: this.state.listarCOCabo },
                { name: "Bateria", y: this.state.listarCOBateria }
            ]

            return data
        }
        else if (estagio === "Revisão V") {
            const data = [
                { name: "Coletor", y: this.state.listarRVCOl },
                { name: "Leitor", y: this.state.listarRVLei },
                { name: "Leitor RFID", y: this.state.listarRVLeiRFID },
                { name: "Busca Preço", y: this.state.listarRVBusca },
                { name: "Impressora", y: this.state.listarRVImp },
                { name: "Carregador 3 P", y: this.state.listarRVCar3 },
                { name: "Carregador 4 P", y: this.state.listarRVCar4 },
                { name: "Carregador 5 P", y: this.state.listarRVCar5 },
                { name: "Carregador 6 P", y: this.state.listarRVCar6 },
                { name: "Berço", y: this.state.listarRVBerco },
                { name: "Fonte", y: this.state.listarRVFonte },
                { name: "Cabo C", y: this.state.listarRVCabo },
                { name: "Bateria", y: this.state.listarRVBateria }
            ]

            return data
        }
        else if (estagio === "Conf C") {
            const data = [
                { name: "Cabo C", y: this.state.listarCCCabo },
            ]

            return data
        } else if (estagio === "M/M de Venda") {
            const data = [
                { name: "Coletor", y: this.state.listarMMVCOl },
                { name: "Leitor", y: this.state.listarMMVLei },
                { name: "Leitor RFID", y: this.state.listarMMVLeiRFID },
                { name: "Busca Preço", y: this.state.listarMMVBusca },
                { name: "Impressora", y: this.state.listarMMVImp },
                { name: "Carregador 3 P", y: this.state.listarMMVCar3 },
                { name: "Carregador 4 P", y: this.state.listarMMVCar4 },
                { name: "Carregador 5 P", y: this.state.listarMMVCar5 },
                { name: "Carregador 6 P", y: this.state.listarMMVCar6 },
                { name: "Berço", y: this.state.listarMMVBerco },
                { name: "Fonte", y: this.state.listarMMVFonte },
                { name: "Cabo C", y: this.state.listarMMVCabo },
                { name: "Bateria", y: this.state.listarMMVBateria }
            ]

            return data
        } else if (estagio === "Rec Placa") {
            const data = [
                { name: "Coletor", y: this.state.listarRPCOl },
                { name: "Leitor", y: this.state.listarRPLei },
                { name: "Leitor RFID", y: this.state.listarRPLeiRFID },
                { name: "Busca Preço", y: this.state.listarRPBusca },
                { name: "Impressora", y: this.state.listarRPImp },
                { name: "Carregador 3 P", y: this.state.listarRPCar3 },
                { name: "Carregador 4 P", y: this.state.listarRPCar4 },
                { name: "Carregador 5 P", y: this.state.listarRPCar5 },
                { name: "Carregador 6 P", y: this.state.listarRPCar6 },
                { name: "Berço", y: this.state.listarRPBerco },
                { name: "Fonte", y: this.state.listarRPFonte },
                { name: "Bateria", y: this.state.listarRPBateria }
            ]

            return data
        } else if (estagio === "Limpeza") {
            const data = [
                { name: "Coletor", y: this.state.listarLPCOl },
                { name: "Leitor", y: this.state.listarLPLei },
                { name: "Leitor RFID", y: this.state.listarLPLeiRFID },
                { name: "Busca Preço", y: this.state.listarLPBusca },
                { name: "Impressora", y: this.state.listarLPImp },
                { name: "Carregador 3 P", y: this.state.listarLPCar3 },
                { name: "Carregador 4 P", y: this.state.listarLPCar4 },
                { name: "Carregador 5 P", y: this.state.listarLPCar5 },
                { name: "Carregador 6 P", y: this.state.listarLPCar6 },
                { name: "Berço", y: this.state.listarLPBerco },
                { name: "Fonte", y: this.state.listarLPFonte },
                { name: "Bateria", y: this.state.listarLPBateria }
            ]

            return data
        } else if (estagio === "Reprovado") {
            const data = [
                { name: "Coletor", y: this.state.listarRRCOl },
                { name: "Leitor", y: this.state.listarRRLei },
                { name: "Leitor RFID", y: this.state.listarRRLeiRFID },
                { name: "Busca Preço", y: this.state.listarRRBusca },
                { name: "Impressora", y: this.state.listarRRImp },
                { name: "Carregador 3 P", y: this.state.listarRRCar3 },
                { name: "Carregador 4 P", y: this.state.listarRRCar4 },
                { name: "Carregador 5 P", y: this.state.listarRRCar5 },
                { name: "Carregador 6 P", y: this.state.listarRRCar6 },
                { name: "Berço", y: this.state.listarRRBerco },
                { name: "Fonte", y: this.state.listarRRFonte },
                { name: "Bateria", y: this.state.listarRRBateria }
            ]

            return data
        } else if (estagio === "Compra") {
            const data = [
                { name: "Coletor", y: this.state.listarRCCOl },
                { name: "Leitor", y: this.state.listarRCLei },
                { name: "Leitor RFID", y: this.state.listarRCLeiRFID },
                { name: "Busca Preço", y: this.state.listarRCBusca },
                { name: "Impressora", y: this.state.listarRCImp },
                { name: "Carregador 3 P", y: this.state.listarRCCar3 },
                { name: "Carregador 4 P", y: this.state.listarRCCar4 },
                { name: "Carregador 5 P", y: this.state.listarRCCar5 },
                { name: "Carregador 6 P", y: this.state.listarRCCar6 },
                { name: "Berço", y: this.state.listarRCBerco },
                { name: "Fonte", y: this.state.listarRCFonte },
                { name: "Bateria", y: this.state.listarRCBateria }
            ]

            return data
        } else if (estagio === "Locação") {
            const data = [
                { name: "Coletor", y: this.state.listarRLCOl },
                { name: "Leitor", y: this.state.listarRLLei },
                { name: "Leitor RFID", y: this.state.listarRLLeiRFID },
                { name: "Busca Preço", y: this.state.listarRLBusca },
                { name: "Impressora", y: this.state.listarRLImp },
                { name: "Carregador 3 P", y: this.state.listarRLCar3 },
                { name: "Carregador 4 P", y: this.state.listarRLCar4 },
                { name: "Carregador 5 P", y: this.state.listarRLCar5 },
                { name: "Carregador 6 P", y: this.state.listarRLCar6 },
                { name: "Berço", y: this.state.listarRLBerco },
                { name: "Fonte", y: this.state.listarRLFonte },
                { name: "Bateria", y: this.state.listarRLBateria }
            ]

            return data
        }
    }

    async totalPorEquipamento() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
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
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                dadoCol.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                dadoLei.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                dadoLeiRFID.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                dadoImp.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                dadoBusca.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar3.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar4.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar5.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar6.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                dadoBerco.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                dadoFonte.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                dadoCabo.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Bateria" === tabelaNome[i].Equipamento)) {
                dadoBateria.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

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


        return this.setState({
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
            listarTotalBateria: totalBateria
        })
    }

    async buscarDadosFiltro(dia, mes, ano) {
        try {
            const tabelaNome = await axios(baseUrl).then(resp => resp.data)

            //#region Variaveis de entrada
            //dados gerais
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
            let dadoFRC = [];
            let dadoFRR = [];
            let dadoFRL = [];

            //dados manutenção equipamento
            let dadoFMCCol = [];
            let dadoFMCLei = [];
            let dadoFMCLeiRFID = [];
            let dadoFMCImp = [];
            let dadoFMCBusca = [];
            let dadoFMCCar3 = [];
            let dadoFMCCar4 = [];
            let dadoFMCCar5 = [];
            let dadoFMCCar6 = [];
            let dadoFMCBerco = [];
            let dadoFMCFonte = [];
            let dadoFMCCabo = [];
            let dadoFMCBateria = [];


            //Variavel Laudo
            let dadoFLACol = [];
            let dadoFLALei = [];
            let dadoFLALeiRFID = [];
            let dadoFLAImp = [];
            let dadoFLABusca = [];
            let dadoFLACar3 = [];
            let dadoFLACar4 = [];
            let dadoFLACar5 = [];
            let dadoFLACar6 = [];
            let dadoFLABerco = [];
            let dadoFLAFonte = [];
            let dadoFLACabo = [];
            let dadoFLABateria = [];

            //Variavel Suporte
            let dadoFSPCol = [];
            let dadoFSPLei = [];
            let dadoFSPLeiRFID = [];
            let dadoFSPImp = [];
            let dadoFSPBusca = [];
            let dadoFSPCar3 = [];
            let dadoFSPCar4 = [];
            let dadoFSPCar5 = [];
            let dadoFSPCar6 = [];
            let dadoFSPBerco = [];
            let dadoFSPFonte = [];
            let dadoFSPCabo = [];
            let dadoFSPBateria = [];

            //Variavel Revisão M
            let dadoFRMCol = [];
            let dadoFRMLei = [];
            let dadoFRMLeiRFID = [];
            let dadoFRMImp = [];
            let dadoFRMBusca = [];
            let dadoFRMCar3 = [];
            let dadoFRMCar4 = [];
            let dadoFRMCar5 = [];
            let dadoFRMCar6 = [];
            let dadoFRMBerco = [];
            let dadoFRMFonte = [];
            let dadoFRMCabo = [];
            let dadoFRMBateria = [];

            //Variavel On-Site
            let dadoFCOCol = [];
            let dadoFCOLei = [];
            let dadoFCOLeiRFID = [];
            let dadoFCOImp = [];
            let dadoFCOBusca = [];
            let dadoFCOCar3 = [];
            let dadoFCOCar4 = [];
            let dadoFCOCar5 = [];
            let dadoFCOCar6 = [];
            let dadoFCOBerco = [];
            let dadoFCOFonte = [];
            let dadoFCOCabo = [];
            let dadoFCOBateria = [];

            //Variavel Revisão V
            let dadoFRVCol = [];
            let dadoFRVLei = [];
            let dadoFRVLeiRFID = [];
            let dadoFRVImp = [];
            let dadoFRVBusca = [];
            let dadoFRVCar3 = [];
            let dadoFRVCar4 = [];
            let dadoFRVCar5 = [];
            let dadoFRVCar6 = [];
            let dadoFRVBerco = [];
            let dadoFRVFonte = [];
            let dadoFRVCabo = [];
            let dadoFRVBateria = [];

            //variavel dos Cabos
            let dadoFCCCabo = [];

            //Variavel Montagem/Manutenção de Venda
            let dadoFMMVCol = [];
            let dadoFMMVLei = [];
            let dadoFMMVLeiRFID = [];
            let dadoFMMVImp = [];
            let dadoFMMVBusca = [];
            let dadoFMMVCar3 = [];
            let dadoFMMVCar4 = [];
            let dadoFMMVCar5 = [];
            let dadoFMMVCar6 = [];
            let dadoFMMVBerco = [];
            let dadoFMMVFonte = [];
            let dadoFMMVCabo = [];
            let dadoFMMVBateria = [];

            //Variavel Recuperação Placa
            let dadoFRPCol = [];
            let dadoFRPLei = [];
            let dadoFRPLeiRFID = [];
            let dadoFRPImp = [];
            let dadoFRPBusca = [];
            let dadoFRPCar3 = [];
            let dadoFRPCar4 = [];
            let dadoFRPCar5 = [];
            let dadoFRPCar6 = [];
            let dadoFRPBerco = [];
            let dadoFRPFonte = [];
            let dadoFRPBateria = [];

            //Variavel Limpeza
            let dadoFLPCol = [];
            let dadoFLPLei = [];
            let dadoFLPLeiRFID = [];
            let dadoFLPImp = [];
            let dadoFLPBusca = [];
            let dadoFLPCar3 = [];
            let dadoFLPCar4 = [];
            let dadoFLPCar5 = [];
            let dadoFLPCar6 = [];
            let dadoFLPBerco = [];
            let dadoFLPFonte = [];
            let dadoFLPBateria = [];

            //Variavel Reprovado
            let dadoFRRCol = [];
            let dadoFRRLei = [];
            let dadoFRRLeiRFID = [];
            let dadoFRRImp = [];
            let dadoFRRBusca = [];
            let dadoFRRCar3 = [];
            let dadoFRRCar4 = [];
            let dadoFRRCar5 = [];
            let dadoFRRCar6 = [];
            let dadoFRRBerco = [];
            let dadoFRRFonte = [];
            let dadoFRRCabo = [];
            let dadoFRRBateria = [];

            //Variavel Compra
            let dadoFRCCol = [];
            let dadoFRCLei = [];
            let dadoFRCLeiRFID = [];
            let dadoFRCImp = [];
            let dadoFRCBusca = [];
            let dadoFRCCar3 = [];
            let dadoFRCCar4 = [];
            let dadoFRCCar5 = [];
            let dadoFRCCar6 = [];
            let dadoFRCBerco = [];
            let dadoFRCFonte = [];
            let dadoFRCCabo = [];
            let dadoFRCBateria = [];

            //Variavel Locação
            let dadoFRLCol = [];
            let dadoFRLLei = [];
            let dadoFRLLeiRFID = [];
            let dadoFRLImp = [];
            let dadoFRLBusca = [];
            let dadoFRLCar3 = [];
            let dadoFRLCar4 = [];
            let dadoFRLCar5 = [];
            let dadoFRLCar6 = [];
            let dadoFRLBerco = [];
            let dadoFRLFonte = [];
            let dadoFRLCabo = [];
            let dadoFRLBateria = [];

            //#endregion

            for (let i = 0; i < tabelaNome.length; i++) {

                //#region ano
                if ((ano === `${tabelaNome[i].Ano}`) && (mes === "Todos") && (localStorage.usuario === tabelaNome[i].Tecnico) && (dia === "Todos")) {
                    //#region Manutenção
                    if ("Manutenção Concluída" === tabelaNome[i].Servico) {
                        dadoFMC.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMCCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMCLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFMCLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFMCBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFMCImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFMCBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFMCFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFMCCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFMCBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    } else
                        //#endregion

                        //#region Laudo
                        if ("Laudo" === tabelaNome[i].Servico) {
                            dadoFLA.push({
                                OS: tabelaNome[i].OS
                            })

                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFLACol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFLALei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoFLALeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoFLABusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoFLAImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoFLABerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                dadoFLAFonte.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoFLACabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoFLABateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }

                        } else
                            //#endregion

                            //#region Suporte
                            if ("Suporte Remoto" === tabelaNome[i].Servico) {
                                dadoFSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCol.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoFSPLei.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                    dadoFSPLeiRFID.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBusca.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                    dadoFSPImp.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar4.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar3.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar5.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar6.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBerco.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                    dadoFSPFonte.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCabo.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBateria.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            } else
                                //#endregion

                                //#region Revisão M
                                if ("Revisão de Manutenção" === tabelaNome[i].Servico) {
                                    dadoFRM.push({
                                        OS: tabelaNome[i].OS
                                    })

                                    if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCol.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoFRMLei.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                        dadoFRMLeiRFID.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBusca.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                        dadoFRMImp.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar4.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar3.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar5.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar6.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBerco.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                        dadoFRMFonte.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCabo.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBateria.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    }

                                } else

                                    //#endregion

                                    //#region On-Site
                                    if ("Chamado On-Site" === tabelaNome[i].Servico) {
                                        dadoFCO.push({
                                            OS: tabelaNome[i].OS
                                        })

                                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCol.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoFCOLei.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                            dadoFCOLeiRFID.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBusca.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                            dadoFCOImp.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar4.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar3.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar5.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar6.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBerco.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                            dadoFCOFonte.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCabo.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBateria.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        }
                                    } else
                                        //#endregion

                                        //#region Revisão V
                                        if ("Revisão de Venda" === tabelaNome[i].Servico) {
                                            dadoFRV.push({
                                                OS: tabelaNome[i].OS
                                            })

                                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCol.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoFRVLei.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                                dadoFRVLeiRFID.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBusca.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                                dadoFRVImp.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar4.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar3.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar5.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar6.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBerco.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                                dadoFRVFonte.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCabo.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBateria.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            }
                                        } else
                                            //#endregion

                                            //#region CC cabos
                                            if ("Confecção de Cabos" === tabelaNome[i].Servico) {
                                                dadoFCC.push({
                                                    OS: tabelaNome[i].OS
                                                })

                                                if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                                    dadoFCCCabo.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                }
                                            }
                    //#endregion    

                    //#region MM de Venda
                    if ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico) {
                        dadoFMMV.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMMVLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFMMVLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFMMVImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFMMVFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    } else
                        //#endregion

                        //#region Recuperação Placa
                        if ("Recuperação de Placa" === tabelaNome[i].Servico) {
                            dadoFRP.push({
                                OS: tabelaNome[i].OS
                            })

                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFRPCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFRPLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoFRPLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoFRPBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoFRPImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoFRPBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                dadoFRPFonte.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoFRPBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }

                    //#endregion

                    //#region Limpeza
                    if ("Limpeza" === tabelaNome[i].Servico) {
                        dadoFLP.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFLPCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFLPLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFLPLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFLPBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFLPImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFLPBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFLPFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFLPBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }

                    //#endregion

                    //#region Reprovado
                    if ("Revisão de Reprovado" === tabelaNome[i].Servico) {
                        dadoFRR.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRRCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRRLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRRLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRRBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRRImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRRBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRRFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRRCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRRBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                    //#region Compra
                    if ("Revisão de Compra" === tabelaNome[i].Servico) {
                        dadoFRC.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRCCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRCLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRCLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRCBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRCImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRCBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRCFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRCCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRCBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                    //#region locação

                    if ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico) {
                        dadoFRL.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRLCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRLLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRLLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRLBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRLImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRLBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRLFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRLCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRLBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                } else
                    //#endregion

                    //#region mês e ano
                    if ((mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`) && (dia === "Todos") && (localStorage.usuario === tabelaNome[i].Tecnico)) {
                            //#region Manutenção
                    if ("Manutenção Concluída" === tabelaNome[i].Servico) {
                        dadoFMC.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMCCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMCLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFMCLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFMCBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFMCImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFMCBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFMCFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFMCCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFMCBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    } else
                        //#endregion

                        //#region Laudo
                        if ("Laudo" === tabelaNome[i].Servico) {
                            dadoFLA.push({
                                OS: tabelaNome[i].OS
                            })

                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFLACol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFLALei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoFLALeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoFLABusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoFLAImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoFLABerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                dadoFLAFonte.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoFLACabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoFLABateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }

                        } else
                            //#endregion

                            //#region Suporte
                            if ("Suporte Remoto" === tabelaNome[i].Servico) {
                                dadoFSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCol.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoFSPLei.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                    dadoFSPLeiRFID.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBusca.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                    dadoFSPImp.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar4.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar3.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar5.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar6.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBerco.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                    dadoFSPFonte.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCabo.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBateria.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            } else
                                //#endregion

                                //#region Revisão M
                                if ("Revisão de Manutenção" === tabelaNome[i].Servico) {
                                    dadoFRM.push({
                                        OS: tabelaNome[i].OS
                                    })

                                    if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCol.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoFRMLei.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                        dadoFRMLeiRFID.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBusca.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                        dadoFRMImp.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar4.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar3.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar5.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar6.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBerco.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                        dadoFRMFonte.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCabo.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBateria.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    }

                                } else

                                    //#endregion

                                    //#region On-Site
                                    if ("Chamado On-Site" === tabelaNome[i].Servico) {
                                        dadoFCO.push({
                                            OS: tabelaNome[i].OS
                                        })

                                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCol.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoFCOLei.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                            dadoFCOLeiRFID.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBusca.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                            dadoFCOImp.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar4.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar3.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar5.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar6.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBerco.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                            dadoFCOFonte.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCabo.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBateria.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        }
                                    } else
                                        //#endregion

                                        //#region Revisão V
                                        if ("Revisão de Venda" === tabelaNome[i].Servico) {
                                            dadoFRV.push({
                                                OS: tabelaNome[i].OS
                                            })

                                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCol.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoFRVLei.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                                dadoFRVLeiRFID.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBusca.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                                dadoFRVImp.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar4.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar3.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar5.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar6.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBerco.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                                dadoFRVFonte.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCabo.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBateria.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            }
                                        } else
                                            //#endregion

                                            //#region CC cabos
                                            if ("Confecção de Cabos" === tabelaNome[i].Servico) {
                                                dadoFCC.push({
                                                    OS: tabelaNome[i].OS
                                                })

                                                if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                                    dadoFCCCabo.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                }
                                            }
                    //#endregion    

                    //#region MM de Venda
                    if ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico) {
                        dadoFMMV.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMMVLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFMMVLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFMMVImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFMMVFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    } else
                        //#endregion

                        //#region Recuperação Placa
                        if ("Recuperação de Placa" === tabelaNome[i].Servico) {
                            dadoFRP.push({
                                OS: tabelaNome[i].OS
                            })

                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFRPCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFRPLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoFRPLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoFRPBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoFRPImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoFRPBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                dadoFRPFonte.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoFRPBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }

                    //#endregion

                    //#region Limpeza
                    if ("Limpeza" === tabelaNome[i].Servico) {
                        dadoFLP.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFLPCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFLPLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFLPLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFLPBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFLPImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFLPBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFLPFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFLPBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }

                    //#endregion

                    //#region Reprovado
                    if ("Revisão de Reprovado" === tabelaNome[i].Servico) {
                        dadoFRR.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRRCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRRLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRRLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRRBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRRImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRRBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRRFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRRCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRRBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                    //#region Compra
                    if ("Revisão de Compra" === tabelaNome[i].Servico) {
                        dadoFRC.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRCCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRCLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRCLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRCBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRCImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRCBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRCFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRCCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRCBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                    //#region locação

                    if ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico) {
                        dadoFRL.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRLCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRLLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRLLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRLBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRLImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRLBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRLFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRLCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRLBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion


                    } else
                        //#endregion

                        //#region mês e ano e dia
                        if ((dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`) && (localStorage.usuario === tabelaNome[i].Tecnico)) {

                        //#region Manutenção
                    if ("Manutenção Concluída" === tabelaNome[i].Servico) {
                        dadoFMC.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMCCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMCLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFMCLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFMCBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFMCImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMCCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFMCBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFMCFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFMCCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFMCBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    } else
                        //#endregion

                        //#region Laudo
                        if ("Laudo" === tabelaNome[i].Servico) {
                            dadoFLA.push({
                                OS: tabelaNome[i].OS
                            })

                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFLACol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFLALei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoFLALeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoFLABusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoFLAImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFLACar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoFLABerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                dadoFLAFonte.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoFLACabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoFLABateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }

                        } else
                            //#endregion

                            //#region Suporte
                            if ("Suporte Remoto" === tabelaNome[i].Servico) {
                                dadoFSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCol.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                    dadoFSPLei.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                    dadoFSPLeiRFID.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBusca.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                    dadoFSPImp.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar4.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar3.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar5.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCar6.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBerco.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                    dadoFSPFonte.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                    dadoFSPCabo.push({
                                        OS: tabelaNome[i].OS
                                    })
                                } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                    dadoFSPBateria.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            } else
                                //#endregion

                                //#region Revisão M
                                if ("Revisão de Manutenção" === tabelaNome[i].Servico) {
                                    dadoFRM.push({
                                        OS: tabelaNome[i].OS
                                    })

                                    if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCol.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                        dadoFRMLei.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                        dadoFRMLeiRFID.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBusca.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                        dadoFRMImp.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar4.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar3.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar5.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCar6.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBerco.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                        dadoFRMFonte.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                        dadoFRMCabo.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                        dadoFRMBateria.push({
                                            OS: tabelaNome[i].OS
                                        })
                                    }

                                } else

                                    //#endregion

                                    //#region On-Site
                                    if ("Chamado On-Site" === tabelaNome[i].Servico) {
                                        dadoFCO.push({
                                            OS: tabelaNome[i].OS
                                        })

                                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCol.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                            dadoFCOLei.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                            dadoFCOLeiRFID.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBusca.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                            dadoFCOImp.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar4.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar3.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar5.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCar6.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBerco.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                            dadoFCOFonte.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                            dadoFCOCabo.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                            dadoFCOBateria.push({
                                                OS: tabelaNome[i].OS
                                            })
                                        }
                                    } else
                                        //#endregion

                                        //#region Revisão V
                                        if ("Revisão de Venda" === tabelaNome[i].Servico) {
                                            dadoFRV.push({
                                                OS: tabelaNome[i].OS
                                            })

                                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCol.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                                dadoFRVLei.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                                dadoFRVLeiRFID.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBusca.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                                dadoFRVImp.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar4.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar3.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar5.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCar6.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBerco.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                                dadoFRVFonte.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                                dadoFRVCabo.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                                dadoFRVBateria.push({
                                                    OS: tabelaNome[i].OS
                                                })
                                            }
                                        } else
                                            //#endregion

                                            //#region CC cabos
                                            if ("Confecção de Cabos" === tabelaNome[i].Servico) {
                                                dadoFCC.push({
                                                    OS: tabelaNome[i].OS
                                                })

                                                if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                                    dadoFCCCabo.push({
                                                        OS: tabelaNome[i].OS
                                                    })
                                                }
                                            }
                    //#endregion    

                    //#region MM de Venda
                    if ("Montagem/Manutenção de Venda" === tabelaNome[i].Servico) {
                        dadoFMMV.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFMMVLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFMMVLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFMMVImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFMMVFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFMMVCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFMMVBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    } else
                        //#endregion

                        //#region Recuperação Placa
                        if ("Recuperação de Placa" === tabelaNome[i].Servico) {
                            dadoFRP.push({
                                OS: tabelaNome[i].OS
                            })

                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFRPCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoFRPLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoFRPLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoFRPBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoFRPImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoFRPCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoFRPBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                                dadoFRPFonte.push({
                                    OS: tabelaNome[i].OS
                                })
                            } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoFRPBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }

                    //#endregion

                    //#region Limpeza
                    if ("Limpeza" === tabelaNome[i].Servico) {
                        dadoFLP.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFLPCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFLPLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFLPLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFLPBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFLPImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFLPCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFLPBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFLPFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFLPBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }

                    //#endregion

                    //#region Reprovado
                    if ("Revisão de Reprovado" === tabelaNome[i].Servico) {
                        dadoFRR.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRRCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRRLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRRLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRRBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRRImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRRCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRRBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRRFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRRCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRRBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                    //#region Compra
                    if ("Revisão de Compra" === tabelaNome[i].Servico) {
                        dadoFRC.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRCCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRCLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRCLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRCBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRCImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRCCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRCBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRCFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRCCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRCBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                    //#region locação

                    if ("Revisão/Manutenção de Locação" === tabelaNome[i].Servico) {
                        dadoFRL.push({
                            OS: tabelaNome[i].OS
                        })

                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRLCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoFRLLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoFRLLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoFRLBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoFRLImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoFRLCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoFRLBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFRLFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoFRLCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        } else if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoFRLBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                    //#endregion

                            //#endregion        
                        }
                //#endregion

            }

            //#region variaveis de saida
            //Total Geral
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
            let totalFRR = Object.keys(dadoFRR).length;
            let totalFRC = Object.keys(dadoFRC).length;
            let totalFRL = Object.keys(dadoFRL).length;

            //Total Manutenção
            let totalFMCCol = Object.keys(dadoFMCCol).length;
            let totalFMCLei = Object.keys(dadoFMCLei).length;
            let totalFMCLeiRFID = Object.keys(dadoFMCLeiRFID).length;
            let totalFMCBusca = Object.keys(dadoFMCBusca).length;
            let totalFMCImp = Object.keys(dadoFMCImp).length;
            let totalFMCCar3 = Object.keys(dadoFMCCar3).length;
            let totalFMCCar4 = Object.keys(dadoFMCCar4).length;
            let totalFMCCar5 = Object.keys(dadoFMCCar5).length;
            let totalFMCCar6 = Object.keys(dadoFMCCar6).length;
            let totalFMCBerco = Object.keys(dadoFMCBerco).length;
            let totalFMCFonte = Object.keys(dadoFMCFonte).length;
            let totalFMCCabo = Object.keys(dadoFMCCabo).length;
            let totalFMCBateria = Object.keys(dadoFMCBateria).length;

            //Total Laudo
            let totalFLACol = Object.keys(dadoFLACol).length;
            let totalFLALei = Object.keys(dadoFLALei).length;
            let totalFLALeiRFID = Object.keys(dadoFLALeiRFID).length;
            let totalFLABusca = Object.keys(dadoFLABusca).length;
            let totalFLAImp = Object.keys(dadoFLAImp).length;
            let totalFLACar3 = Object.keys(dadoFLACar3).length;
            let totalFLACar4 = Object.keys(dadoFLACar4).length;
            let totalFLACar5 = Object.keys(dadoFLACar5).length;
            let totalFLACar6 = Object.keys(dadoFLACar6).length;
            let totalFLABerco = Object.keys(dadoFLABerco).length;
            let totalFLAFonte = Object.keys(dadoFLAFonte).length;
            let totalFLACabo = Object.keys(dadoFLACabo).length;
            let totalFLABateria = Object.keys(dadoFLABateria).length;

            //Total Suporte
            let totalFSPCol = Object.keys(dadoFSPCol).length;
            let totalFSPLei = Object.keys(dadoFSPLei).length;
            let totalFSPLeiRFID = Object.keys(dadoFSPLeiRFID).length;
            let totalFSPBusca = Object.keys(dadoFSPBusca).length;
            let totalFSPImp = Object.keys(dadoFSPImp).length;
            let totalFSPCar3 = Object.keys(dadoFSPCar3).length;
            let totalFSPCar4 = Object.keys(dadoFSPCar4).length;
            let totalFSPCar5 = Object.keys(dadoFSPCar5).length;
            let totalFSPCar6 = Object.keys(dadoFSPCar6).length;
            let totalFSPBerco = Object.keys(dadoFSPBerco).length;
            let totalFSPFonte = Object.keys(dadoFSPFonte).length;
            let totalFSPCabo = Object.keys(dadoFSPCabo).length;
            let totalFSPBateria = Object.keys(dadoFSPBateria).length;

            //Total Revisão M
            let totalFRMCol = Object.keys(dadoFRMCol).length;
            let totalFRMLei = Object.keys(dadoFRMLei).length;
            let totalFRMLeiRFID = Object.keys(dadoFRMLeiRFID).length;
            let totalFRMBusca = Object.keys(dadoFRMBusca).length;
            let totalFRMImp = Object.keys(dadoFRMImp).length;
            let totalFRMCar3 = Object.keys(dadoFRMCar3).length;
            let totalFRMCar4 = Object.keys(dadoFRMCar4).length;
            let totalFRMCar5 = Object.keys(dadoFRMCar5).length;
            let totalFRMCar6 = Object.keys(dadoFRMCar6).length;
            let totalFRMBerco = Object.keys(dadoFRMBerco).length;
            let totalFRMFonte = Object.keys(dadoFRMFonte).length;
            let totalFRMCabo = Object.keys(dadoFRMCabo).length;
            let totalFRMBateria = Object.keys(dadoFRMBateria).length;

            //Total On-Site
            let totalFCOCol = Object.keys(dadoFCOCol).length;
            let totalFCOLei = Object.keys(dadoFCOLei).length;
            let totalFCOLeiRFID = Object.keys(dadoFCOLeiRFID).length;
            let totalFCOBusca = Object.keys(dadoFCOBusca).length;
            let totalFCOImp = Object.keys(dadoFCOImp).length;
            let totalFCOCar3 = Object.keys(dadoFCOCar3).length;
            let totalFCOCar4 = Object.keys(dadoFCOCar4).length;
            let totalFCOCar5 = Object.keys(dadoFCOCar5).length;
            let totalFCOCar6 = Object.keys(dadoFCOCar6).length;
            let totalFCOBerco = Object.keys(dadoFCOBerco).length;
            let totalFCOFonte = Object.keys(dadoFCOFonte).length;
            let totalFCOCabo = Object.keys(dadoFCOCabo).length;
            let totalFCOBateria = Object.keys(dadoFCOBateria).length;

            //Total Revisão V
            let totalFRVCol = Object.keys(dadoFRVCol).length;
            let totalFRVLei = Object.keys(dadoFRVLei).length;
            let totalFRVLeiRFID = Object.keys(dadoFRVLeiRFID).length;
            let totalFRVBusca = Object.keys(dadoFRVBusca).length;
            let totalFRVImp = Object.keys(dadoFRVImp).length;
            let totalFRVCar3 = Object.keys(dadoFRVCar3).length;
            let totalFRVCar4 = Object.keys(dadoFRVCar4).length;
            let totalFRVCar5 = Object.keys(dadoFRVCar5).length;
            let totalFRVCar6 = Object.keys(dadoFRVCar6).length;
            let totalFRVBerco = Object.keys(dadoFRVBerco).length;
            let totalFRVFonte = Object.keys(dadoFRVFonte).length;
            let totalFRVCabo = Object.keys(dadoFRVCabo).length;
            let totalFRVBateria = Object.keys(dadoFRVBateria).length;

            //Total Confeção de Cabos
            let totalFCCCabos = Object.keys(dadoFCCCabo).length;

            //Total Montagem/Manutenção de Venda
            let totalFMMVCol = Object.keys(dadoFMMVCol).length;
            let totalFMMVLei = Object.keys(dadoFMMVLei).length;
            let totalFMMVLeiRFID = Object.keys(dadoFMMVLeiRFID).length;
            let totalFMMVBusca = Object.keys(dadoFMMVBusca).length;
            let totalFMMVImp = Object.keys(dadoFMMVImp).length;
            let totalFMMVCar3 = Object.keys(dadoFMMVCar3).length;
            let totalFMMVCar4 = Object.keys(dadoFMMVCar4).length;
            let totalFMMVCar5 = Object.keys(dadoFMMVCar5).length;
            let totalFMMVCar6 = Object.keys(dadoFMMVCar6).length;
            let totalFMMVBerco = Object.keys(dadoFMMVBerco).length;
            let totalFMMVFonte = Object.keys(dadoFMMVFonte).length;
            let totalFMMVCabo = Object.keys(dadoFMMVCabo).length;
            let totalFMMVBateria = Object.keys(dadoFMMVBateria).length;

            //Total Recuperação Placa
            let totalFRPCol = Object.keys(dadoFRPCol).length;
            let totalFRPLei = Object.keys(dadoFRPLei).length;
            let totalFRPLeiRFID = Object.keys(dadoFRPLeiRFID).length;
            let totalFRPBusca = Object.keys(dadoFRPBusca).length;
            let totalFRPImp = Object.keys(dadoFRPImp).length;
            let totalFRPCar3 = Object.keys(dadoFRPCar3).length;
            let totalFRPCar4 = Object.keys(dadoFRPCar4).length;
            let totalFRPCar5 = Object.keys(dadoFRPCar5).length;
            let totalFRPCar6 = Object.keys(dadoFRPCar6).length;
            let totalFRPBerco = Object.keys(dadoFRPBerco).length;
            let totalFRPFonte = Object.keys(dadoFRPFonte).length;
            let totalFRPBateria = Object.keys(dadoFRPBateria).length;

            //Total Recuperação Placa
            let totalFLPCol = Object.keys(dadoFLPCol).length;
            let totalFLPLei = Object.keys(dadoFLPLei).length;
            let totalFLPLeiRFID = Object.keys(dadoFLPLeiRFID).length;
            let totalFLPBusca = Object.keys(dadoFLPBusca).length;
            let totalFLPImp = Object.keys(dadoFLPImp).length;
            let totalFLPCar3 = Object.keys(dadoFLPCar3).length;
            let totalFLPCar4 = Object.keys(dadoFLPCar4).length;
            let totalFLPCar5 = Object.keys(dadoFLPCar5).length;
            let totalFLPCar6 = Object.keys(dadoFLPCar6).length;
            let totalFLPBerco = Object.keys(dadoFLPBerco).length;
            let totalFLPFonte = Object.keys(dadoFLPFonte).length;
            let totalFLPBateria = Object.keys(dadoFLPBateria).length;

            //Total Reprovado
            let totalFRRCol = Object.keys(dadoFRRCol).length;
            let totalFRRLei = Object.keys(dadoFRRLei).length;
            let totalFRRLeiRFID = Object.keys(dadoFRRLeiRFID).length;
            let totalFRRBusca = Object.keys(dadoFRRBusca).length;
            let totalFRRImp = Object.keys(dadoFRRImp).length;
            let totalFRRCar3 = Object.keys(dadoFRRCar3).length;
            let totalFRRCar4 = Object.keys(dadoFRRCar4).length;
            let totalFRRCar5 = Object.keys(dadoFRRCar5).length;
            let totalFRRCar6 = Object.keys(dadoFRRCar6).length;
            let totalFRRBerco = Object.keys(dadoFRRBerco).length;
            let totalFRRFonte = Object.keys(dadoFRRFonte).length;
            let totalFRRCabo = Object.keys(dadoFRRCabo).length;
            let totalFRRBateria = Object.keys(dadoFRRBateria).length;

            //Total Compra
            let totalFRCCol = Object.keys(dadoFRCCol).length;
            let totalFRCLei = Object.keys(dadoFRCLei).length;
            let totalFRCLeiRFID = Object.keys(dadoFRCLeiRFID).length;
            let totalFRCBusca = Object.keys(dadoFRCBusca).length;
            let totalFRCImp = Object.keys(dadoFRCImp).length;
            let totalFRCCar3 = Object.keys(dadoFRCCar3).length;
            let totalFRCCar4 = Object.keys(dadoFRCCar4).length;
            let totalFRCCar5 = Object.keys(dadoFRCCar5).length;
            let totalFRCCar6 = Object.keys(dadoFRCCar6).length;
            let totalFRCBerco = Object.keys(dadoFRCBerco).length;
            let totalFRCFonte = Object.keys(dadoFRCFonte).length;
            let totalFRCCabo = Object.keys(dadoFRCCabo).length;
            let totalFRCBateria = Object.keys(dadoFRCBateria).length;

            //Total Locação
            let totalFRLCol = Object.keys(dadoFRLCol).length;
            let totalFRLLei = Object.keys(dadoFRLLei).length;
            let totalFRLLeiRFID = Object.keys(dadoFRLLeiRFID).length;
            let totalFRLBusca = Object.keys(dadoFRLBusca).length;
            let totalFRLImp = Object.keys(dadoFRLImp).length;
            let totalFRLCar3 = Object.keys(dadoFRLCar3).length;
            let totalFRLCar4 = Object.keys(dadoFRLCar4).length;
            let totalFRLCar5 = Object.keys(dadoFRLCar5).length;
            let totalFRLCar6 = Object.keys(dadoFRLCar6).length;
            let totalFRLBerco = Object.keys(dadoFRLBerco).length;
            let totalFRLFonte = Object.keys(dadoFRLFonte).length;
            let totalFRLCabo = Object.keys(dadoFRLCabo).length;
            let totalFRLBateria = Object.keys(dadoFRLBateria).length;


            //total por equipamento
            let totalFilCol = totalFMCCol + totalFLACol + totalFSPCol + totalFRMCol +
                totalFCOCol + totalFRVCol + totalFMMVCol + totalFRPCol + totalFLPCol +
                totalFRRCol + totalFRCCol + totalFRLCol
            let totalFilLei = totalFMCLei + totalFLALei + totalFSPLei + totalFRMLei +
                totalFCOLei + totalFRVLei + totalFMMVLei + totalFRPLei + totalFLPLei +
                totalFRRLei + totalFRCLei + totalFRLLei
            let totalFilLeiRFID = totalFMCLeiRFID + totalFLALeiRFID + totalFSPLeiRFID + totalFRMLeiRFID +
                totalFCOLeiRFID + totalFRVLeiRFID + totalFMMVLeiRFID + totalFRPLeiRFID + totalFLPLeiRFID +
                totalFRRLeiRFID + totalFRCLeiRFID + totalFRLLeiRFID
            let totalFilBusca = totalFMCBusca + totalFLABusca + totalFSPBusca + totalFRMBusca +
                totalFCOBusca + totalFRVBusca + totalFMMVBusca + totalFRPBusca + totalFLPBusca +
                totalFRRBusca + totalFRCBusca + totalFRLBusca
            let totalFilImp = totalFMCImp + totalFLAImp + totalFSPImp + totalFRMImp +
                totalFCOImp + totalFRVImp + totalFMMVImp + totalFRPImp + totalFLPImp +
                totalFRRImp + totalFRCImp + totalFRLImp
            let totalFilCar3 = totalFMCCar3 + totalFLACar3 + totalFSPCar3 + totalFRMCar3 +
                totalFCOCar3 + totalFRVCar3 + totalFMMVCar3 + totalFRPCar3 + totalFLPCar3 +
                totalFRRCar3 + totalFRCCar3 + totalFRLCar3
            let totalFilCar4 = totalFMCCar4 + totalFLACar4 + totalFSPCar4 + totalFRMCar4 +
                totalFCOCar4 + totalFRVCar4 + totalFMMVCar4 + totalFRPCar4 + totalFLPCar4 +
                totalFRRCar4 + totalFRCCar4 + totalFRLCar4
            let totalFilCar5 = totalFMCCar5 + totalFLACar5 + totalFSPCar5 + totalFRMCar5 +
                totalFCOCar5 + totalFRVCar5 + totalFMMVCar5 + totalFRPCar5 + totalFLPCar5 +
                totalFRRCar5 + totalFRCCar5 + totalFRLCar5
            let totalFilCar6 = totalFMCCar6 + totalFLACar6 + totalFSPCar6 + totalFRMCar6 +
                totalFCOCar6 + totalFRVCar6 + totalFMMVCar6 + totalFRPCar6 + totalFLPCar6 +
                totalFRRCar6 + totalFRCCar6 + totalFRLCar6
            let totalFilBerco = totalFMCBerco + totalFLABerco + totalFSPBerco + totalFRMBerco +
                totalFCOBerco + totalFRVBerco + totalFMMVBerco + totalFRPBerco + totalFLPBerco +
                totalFRRBerco + totalFRCBerco + totalFRLBerco
            let totalFilFonte = totalFMCFonte + totalFLAFonte + totalFSPFonte + totalFRMFonte +
                totalFCOFonte + totalFRVFonte + totalFMMVFonte + totalFRPFonte + totalFLPFonte +
                totalFRRFonte + totalFRCFonte + totalFRLFonte
            let totalFilCabo = totalFCCCabos + totalFRRCabo + totalFRLCabo
            let totalFilBateria = totalFMCBateria + totalFLABateria + totalFSPBateria + totalFRMBateria +
                totalFCOBateria + totalFRVBateria + totalFMMVBateria + totalFRPBateria + totalFLPBateria +
                totalFRRBateria + totalFRCBateria + totalFRLBateria

            //total equipamentos
            let totalEquip = totalFilCol + totalFilLei + totalFilBusca + totalFilCabo + totalFilCar3 +
                totalFilCar4 + totalFilCar5 + totalFilCar6 + totalFilImp + totalFilBerco + totalFilFonte +
                totalFilBateria + totalFilLeiRFID

            //#endregion

            //#region return saida
            return this.setState({
                //Listar Geral
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
                listarRR: totalFRR,
                listarRC: totalFRC,
                listarRL: totalFRL,

                //Listar Manutenção
                listarMCCOl: totalFMCCol,
                listarMCLei: totalFMCLei,
                listarMCLeiRFID: totalFMCLeiRFID,
                listarMCBusca: totalFMCBusca,
                listarMCImp: totalFMCImp,
                listarMCCar3: totalFMCCar3,
                listarMCCar4: totalFMCCar4,
                listarMCCar5: totalFMCCar5,
                listarMCCar6: totalFMCCar6,
                listarMCBerco: totalFMCBerco,
                listarMCFonte: totalFMCFonte,
                listarMCCabo: totalFMCCabo,
                listarMCBateria: totalFMCBateria,

                //Listar Laudo
                listarLACOl: totalFLACol,
                listarLALei: totalFLALei,
                listarLALeiRFID: totalFLALeiRFID,
                listarLABusca: totalFLABusca,
                listarLAImp: totalFLAImp,
                listarLACar3: totalFLACar3,
                listarLACar4: totalFLACar4,
                listarLACar5: totalFLACar5,
                listarLACar6: totalFLACar6,
                listarLABerco: totalFLABerco,
                listarLAFonte: totalFLAFonte,
                listarLACabo: totalFLACabo,
                listarLABateria: totalFLABateria,

                //Listar Suporte
                listarSPCOl: totalFSPCol,
                listarSPLei: totalFSPLei,
                listarSPLeiRFID: totalFSPLeiRFID,
                listarSPBusca: totalFSPBusca,
                listarSPImp: totalFSPImp,
                listarSPCar3: totalFSPCar3,
                listarSPCar4: totalFSPCar4,
                listarSPCar5: totalFSPCar5,
                listarSPCar6: totalFSPCar6,
                listarSPBerco: totalFSPBerco,
                listarSPFonte: totalFSPFonte,
                listarSPCabo: totalFSPCabo,
                listarSPBateria: totalFSPBateria,

                //Listar Revisão M
                listarRMCOl: totalFRMCol,
                listarRMLeiRFID: totalFRMLeiRFID,
                listarRMBusca: totalFRMBusca,
                listarRMImp: totalFRMImp,
                listarRMCar3: totalFRMCar3,
                listarRMCar4: totalFRMCar4,
                listarRMCar5: totalFRMCar5,
                listarRMCar6: totalFRMCar6,
                listarRMBerco: totalFRMBerco,
                listarRMFonte: totalFRMFonte,
                listarRMCabo: totalFRMCabo,
                listarRMBateria: totalFRMBateria,

                //Listar On-Site
                listarCOCOl: totalFCOCol,
                listarCOLei: totalFCOLei,
                listarCOLeiRFID: totalFCOLeiRFID,
                listarCOBusca: totalFCOBusca,
                listarCOImp: totalFCOImp,
                listarCOCar3: totalFCOCar3,
                listarCOCar4: totalFCOCar4,
                listarCOCar5: totalFCOCar5,
                listarCOCar6: totalFCOCar6,
                listarCOBerco: totalFCOBerco,
                listarCOFonte: totalFCOFonte,
                listarCOCabo: totalFCOCabo,
                listarCOBateria: totalFCOBateria,

                //Listar Revisão V
                listarRVCOl: totalFRVCol,
                listarRVLei: totalFRVLei,
                listarRVLeiRFID: totalFRVLeiRFID,
                listarRVBusca: totalFRVBusca,
                listarRVImp: totalFRVImp,
                listarRVCar3: totalFRVCar3,
                listarRVCar4: totalFRVCar4,
                listarRVCar5: totalFRVCar5,
                listarRVCar6: totalFRVCar6,
                listarRVBerco: totalFRVBerco,
                listarRVFonte: totalFRVFonte,
                listarRVCabo: totalFRVCabo,
                listarRVBateria: totalFRVBateria,

                //listar Cofecção de Cabos
                listarCCCabo: totalFCCCabos,

                //Listar Montagem/Manutenção de Venda
                listarMMVCOl: totalFMMVCol,
                listarMMVLei: totalFMMVLei,
                listarMMVLeiRFID: totalFMMVLeiRFID,
                listarMMVBusca: totalFMMVBusca,
                listarMMVImp: totalFMMVImp,
                listarMMVCar3: totalFMMVCar3,
                listarMMVCar4: totalFMMVCar4,
                listarMMVCar5: totalFMMVCar5,
                listarMMVCar6: totalFMMVCar6,
                listarMMVBerco: totalFMMVBerco,
                listarMMVFonte: totalFMMVFonte,
                listarMMVCabo: totalFMMVCabo,
                listarMMVBateria: totalFMMVBateria,

                //Listar Recuperação Placa
                listarRPCOl: totalFRPCol,
                listarRPLei: totalFRPLei,
                listarRPLeiRFID: totalFRPLeiRFID,
                listarRPBusca: totalFRPBusca,
                listarRPImp: totalFRPImp,
                listarRPCar3: totalFRPCar3,
                listarRPCar4: totalFRPCar4,
                listarRPCar5: totalFRPCar5,
                listarRPCar6: totalFRPCar6,
                listarRPBerco: totalFRPBerco,
                listarRPFonte: totalFRPFonte,
                listarRPBateria: totalFRPBateria,

                //Listar Limpeza
                listarLPCOl: totalFLPCol,
                listarLPLei: totalFLPLei,
                listarLPLeiRFID: totalFLPLeiRFID,
                listarLPBusca: totalFLPBusca,
                listarLPImp: totalFLPImp,
                listarLPCar3: totalFLPCar3,
                listarLPCar4: totalFLPCar4,
                listarLPCar5: totalFLPCar5,
                listarLPCar6: totalFLPCar6,
                listarLPBerco: totalFLPBerco,
                listarLPFonte: totalFLPFonte,
                listarLPBateria: totalFLPBateria,

                //Listar Reporovado
                listarRRCOl: totalFRRCol,
                listarRRLei: totalFRRLei,
                listarRRLeiRFID: totalFRRLeiRFID,
                listarRRBusca: totalFRRBusca,
                listarRRImp: totalFRRImp,
                listarRRCar3: totalFRRCar3,
                listarRRCar4: totalFRRCar4,
                listarRRCar5: totalFRRCar5,
                listarRRCar6: totalFRRCar6,
                listarRRBerco: totalFRRBerco,
                listarRRFonte: totalFRRFonte,
                listarRRCabo: totalFRRCabo,
                listarRRBateria: totalFRRBateria,

                //Listar compra
                listarRCCOl: totalFRCCol,
                listarRCLei: totalFRCLei,
                listarRCLeiRFID: totalFRCLeiRFID,
                listarRCBusca: totalFRCBusca,
                listarRCImp: totalFRCImp,
                listarRCCar3: totalFRCCar3,
                listarRCCar4: totalFRCCar4,
                listarRCCar5: totalFRCCar5,
                listarRCCar6: totalFRCCar6,
                listarRCBerco: totalFRCBerco,
                listarRCFonte: totalFRCFonte,
                listarRCCabo: totalFRCCabo,
                listarRCBateria: totalFRCBateria,

                //Listar Locação
                listarRLCOl: totalFRLCol,
                listarRLLei: totalFRLLei,
                listarRLLeiRFID: totalFRLLeiRFID,
                listarRLBusca: totalFRLBusca,
                listarRLImp: totalFRLImp,
                listarRLCar3: totalFRLCar3,
                listarRLCar4: totalFRLCar4,
                listarRLCar5: totalFRLCar5,
                listarRLCar6: totalFRLCar6,
                listarRLBerco: totalFRLBerco,
                listarRLFonte: totalFRLFonte,
                listarRLCabo: totalFRLCabo,
                listarRLBateria: totalFRLBateria,

                //total por equipamento
                listarTotalCOl: totalFilCol,
                listarTotalLei: totalFilLei,
                listarTotalLeiRFID: totalFilLeiRFID,
                listarTotalImp: totalFilImp,
                listarTotalBusca: totalFilBusca,
                listarTotalCar3: totalFilCar3,
                listarTotalCar4: totalFilCar4,
                listarTotalCar5: totalFilCar5,
                listarTotalCar6: totalFilCar6,
                listarTotalBerco: totalFilBerco,
                listarTotalFonte: totalFilFonte,
                listarTotalCabos: totalFilCabo,
                listarTotalBateria: totalFilBateria,

                //total equipamentos
                listarTotalEquip: totalEquip
            })
            //#endregion
        } catch (error) {
            console.log("Erro : " + error)
        }

    }


    filtrarDados() {
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;

        if ((ano === "Todos") && (mes === "Todos") && (dia === "Todos")) {
            this.buscarDados()
            this.buscarEquipamento()
            this.totalPorEquipamento()
        } else if ((ano !== "Todos") && (mes === "Todos") && (dia === "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano)
        } else if ((ano !== "Todos") && (mes !== "Todos") && (dia === "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano)
        } else if ((ano !== "Todos") && (mes !== "Todos") && (dia !== "Todos")) {
            this.buscarDadosFiltro(dia, mes, ano)
        }
    }

    render() {
        return (
            <div>
                <div className="row mt-4">
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
                <div className='row mt-4 d-flex justify-content-around'>
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
                            dado={[
                                { name: "Manutenção", y: this.state.listarMC, drilldown: "Manutenção" },
                                { name: "Laudo", y: this.state.listarLA, drilldown: "Laudo" },
                                { name: "Suporte", y: this.state.listarSR, drilldown: "Suporte" },
                                { name: "Revisão M", y: this.state.listarRM, drilldown: "Revisão M" },
                                { name: "On-Site", y: this.state.listarCO, drilldown: "On-site" },
                                { name: "Revisão V", y: this.state.listarRV, drilldown: "Revisão V" },
                                { name: "Confecção de Cabos", y: this.state.listarCC, drilldown: "Conf C" },
                                { name: "M/M de Venda", y: this.state.listarMMV, drilldown: "M/M de Venda" },
                                { name: "Recuperação Placa", y: this.state.listarRP, drilldown: "Rec Placa" },
                                { name: "Limpeza", y: this.state.listarLP, drilldown: "Limpeza" },
                                { name: "Revisão Reprovado", y: this.state.listarRR, drilldown: "Reprovado" },
                                { name: "Revisão Compra", y: this.state.listarRC, drilldown: "Compra" },
                                { name: "Revisão Locação", y: this.state.listarRL, drilldown: "Locação" },
                            ]}
                            serie={[
                                {
                                    name: "Manutenção",
                                    id: "Manutenção",
                                    data: this.mostrarEquipamento("Manutenção")
                                },
                                {
                                    name: "Laudo",
                                    id: "Laudo",
                                    data: this.mostrarEquipamento("Laudo")
                                },
                                {
                                    name: "Suporte",
                                    id: "Suporte",
                                    data: this.mostrarEquipamento("Suporte")
                                },
                                {
                                    name: "Revisão M",
                                    id: "Revisão M",
                                    data: this.mostrarEquipamento("Revisão M")
                                },
                                {
                                    name: "On-site",
                                    id: "On-site",
                                    data: this.mostrarEquipamento("On-site")
                                },
                                {
                                    name: "Revisão V",
                                    id: "Revisão V",
                                    data: this.mostrarEquipamento("Revisão V")
                                },
                                {
                                    name: "Conf C",
                                    id: "Conf C",
                                    data: this.mostrarEquipamento("Conf C")
                                },
                                {
                                    name: "M/M de Venda",
                                    id: "M/M de Venda",
                                    data: this.mostrarEquipamento("M/M de Venda")
                                },
                                {
                                    name: "Rec Placa",
                                    id: "Rec Placa",
                                    data: this.mostrarEquipamento("Rec Placa")
                                },
                                {
                                    name: "Limpeza",
                                    id: "Limpeza",
                                    data: this.mostrarEquipamento("Limpeza")
                                },
                                {
                                    name: "Reprovado",
                                    id: "Reprovado",
                                    data: this.mostrarEquipamento("Reprovado")
                                },
                                {
                                    name: "Compra",
                                    id: "Compra",
                                    data: this.mostrarEquipamento("Compra")
                                },
                                {
                                    name: "Locação",
                                    id: "Locação",
                                    data: this.mostrarEquipamento("Locação")
                                }

                            ]}
                        />
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 sombra mx-2">
                            <Grafico tipo="column" titulo="Equipamentos"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                texto='{point.y:1f}'
                                nomeSerie="Equipamento"
                                cor={true}
                                dado={[
                                    { name: "Coletor", y: this.state.listarTotalCOl },
                                    { name: "Leitor", y: this.state.listarTotalLei },
                                    { name: "Leitor RFID", y: this.state.listarTotalLeiRFID },
                                    { name: "Busca Preço", y: this.state.listarTotalBusca },
                                    { name: "Impressora", y: this.state.listarTotalImp },
                                    { name: "Carregador 3 P", y: this.state.listarTotalCar3 },
                                    { name: "Carregador 4 P", y: this.state.listarTotalCar4 },
                                    { name: "Carregador 5 P", y: this.state.listarTotalCar5 },
                                    { name: "Carregador 6 P", y: this.state.listarTotalCar6 },
                                    { name: "Berço", y: this.state.listarTotalBerco },
                                    { name: "Fonte", y: this.state.listarTotalFonte },
                                    { name: "Cabo C", y: this.state.listarTotalCabos },
                                    { name: "Bateria", y: this.state.listarTotalBateria }
                                ]} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}