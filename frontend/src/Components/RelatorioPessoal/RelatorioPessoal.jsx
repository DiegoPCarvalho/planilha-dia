import React from 'react';
import Grafico from '../Graficos/Grafico';
import "./Relatorio.css";
import axios from 'axios';
import Url from '../Url/Url';

const initialState = {
    //Ordem de Serviço
    listarMC: [],
    listarLA: [],
    listarSR: [],
    listarRM: [],
    listarCO: [],
    listarRV: [],

    //Equipamento Manutenção
    listarMCCOl: [],
    listarMCImp: [],
    listarMCLei: [],
    listarMCBusca: [],
    listarMCCar3: [],
    listarMCCar4: [],
    listarMCCar5: [],
    listarMCCar6: [],
    listarMCBerco: [],
    listarMCFonte: [],

    //Equipamento Laudo
    listarLACOl: [],
    listarLAImp: [],
    listarLALei: [],
    listarLABusca: [],
    listarLACar3: [],
    listarLACar4: [],
    listarLACar5: [],
    listarLACar6: [],
    listarLABerco: [],
    listarLAFonte: [],

    //Equipamento Suporte
    listarSPCOl: [],
    listarSPImp: [],
    listarSPLei: [],
    listarSPBusca: [],
    listarSPCar3: [],
    listarSPCar4: [],
    listarSPCar5: [],
    listarSPCar6: [],
    listarSPBerco: [],
    listarSPFonte: [],

    //Equipamento Revisão M
    listarRMCOl: [],
    listarRMImp: [],
    listarRMLei: [],
    listarRMBusca: [],
    listarRMCar3: [],
    listarRMCar4: [],
    listarRMCar5: [],
    listarRMCar6: [],
    listarRMBerco: [],
    listarRMFonte: [],

    //Equipamento Chamado On-site
    listarCOCOl: [],
    listarCOImp: [],
    listarCOLei: [],
    listarCOBusca: [],
    listarCOCar3: [],
    listarCOCar4: [],
    listarCOCar5: [],
    listarCOCar6: [],
    listarCOBerco: [],
    listarCOFonte: [],

    //Equipamento Chamado Revisão V
    listarRVCOl: [],
    listarRVImp: [],
    listarRVLei: [],
    listarRVBusca: [],
    listarRVCar3: [],
    listarRVCar4: [],
    listarRVCar5: [],
    listarRVCar6: [],
    listarRVBerco: [],
    listarRVFonte: [],

    //Total Equipamentos
    listartTotalCol: [],
    listarTotalImp: [],
    listarTotalLei: [],
    listarTotalBusca: [],
    listarTotalCar3: [],
    listarTotalCar4: [],
    listarTotalCar5: [],
    listarTotalCar6: [],
    listarTotalBerco: [],
    listarTotalFonte: [],
}

const banco = "Geral";

const baseUrl = Url(banco);

export default class Relatorio extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.buscarDados()
        this.buscarEquipamento("Manutenção Concluída")
        this.buscarEquipamento("Laudo")
        this.buscarEquipamento("Suporte Remoto")
        this.buscarEquipamento("Revisão de Manutenção")
        this.buscarEquipamento("Chamado On-Site")
        this.buscarEquipamento("Revisão de Venda")
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

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Manutenção Concluída" === tabelaNome[i].Servico)) {
                dadoMC.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Laudo" === tabelaNome[i].Servico)) {
                dadoLA.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Suporte Remoto" === tabelaNome[i].Servico)) {
                dadoSR.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                dadoRM.push({
                    OS: tabelaNome[i].OS
                })
            }
        }


        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Chamado On-Site" === tabelaNome[i].Servico)) {
                dadoCO.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Revisão de Venda" === tabelaNome[i].Servico)) {
                dadoRV.push({
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

        return this.setState({
            listarMC: totalMC,
            listarLA: totalLA,
            listarSR: totalSR,
            listarRM: totalRM,
            listarCO: totalCO,
            listarRV: totalRV
        })
    }

    async buscarEquipamento(estagio) {
        try {
            const tabelaNome = await axios(baseUrl).then(resp => resp.data)

            if (estagio === "Manutenção Concluída") {
                let dadoMCCol = [];
                let dadoMCLei = [];
                let dadoMCImp = [];
                let dadoMCBusca = [];
                let dadoMCCar3 = [];
                let dadoMCCar4 = [];
                let dadoMCCar5 = [];
                let dadoMCCar6 = [];
                let dadoMCBerco = [];
                let dadoMCFonte = [];
                for (let i = 0; i < tabelaNome.length; i++) {
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoMCCol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoMCLei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoMCBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoMCImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoMCCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoMCCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoMCCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoMCCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoMCBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoMCFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                }

                let totalMCCol = Object.keys(dadoMCCol).length;
                let totalMCLei = Object.keys(dadoMCLei).length;
                let totalMCBusca = Object.keys(dadoMCBusca).length;
                let totalMCImp = Object.keys(dadoMCImp).length;
                let totalMCCar3 = Object.keys(dadoMCCar3).length;
                let totalMCCar4 = Object.keys(dadoMCCar4).length;
                let totalMCCar5 = Object.keys(dadoMCCar5).length;
                let totalMCCar6 = Object.keys(dadoMCCar6).length;
                let totalMCBerco = Object.keys(dadoMCBerco).length;
                let totalMCFonte = Object.keys(dadoMCFonte).length;

                return this.setState({
                    listarMCCOl: totalMCCol,
                    listarMCLei: totalMCLei,
                    listarMCBusca: totalMCBusca,
                    listarMCImp: totalMCImp,
                    listarMCCar3: totalMCCar3,
                    listarMCCar4: totalMCCar4,
                    listarMCCar5: totalMCCar5,
                    listarMCCar6: totalMCCar6,
                    listarMCBerco: totalMCBerco,
                    listarMCFonte: totalMCFonte
                })
            } else if (estagio === "Laudo") {
                let dadoLACol = [];
                let dadoLALei = [];
                let dadoLAImp = [];
                let dadoLABusca = [];
                let dadoLACar3 = [];
                let dadoLACar4 = [];
                let dadoLACar5 = [];
                let dadoLACar6 = [];
                let dadoLABerco = [];
                let dadoLAFonte = [];
                for (let i = 0; i < tabelaNome.length; i++) {
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoLACol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoLALei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoLABusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoLAImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoLACar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoLABerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoLAFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                }

                let totalLACol = Object.keys(dadoLACol).length;
                let totalLALei = Object.keys(dadoLALei).length;
                let totalLABusca = Object.keys(dadoLABusca).length;
                let totalLAImp = Object.keys(dadoLAImp).length;
                let totalLACar3 = Object.keys(dadoLACar3).length;
                let totalLACar4 = Object.keys(dadoLACar4).length;
                let totalLACar5 = Object.keys(dadoLACar5).length;
                let totalLACar6 = Object.keys(dadoLACar6).length;
                let totalLABerco = Object.keys(dadoLABerco).length;
                let totalLAFonte = Object.keys(dadoLAFonte).length;

                return this.setState({
                    listarLACOl: totalLACol,
                    listarLALei: totalLALei,
                    listarLABusca: totalLABusca,
                    listarLAImp: totalLAImp,
                    listarLACar3: totalLACar3,
                    listarLACar4: totalLACar4,
                    listarLACar5: totalLACar5,
                    listarLACar6: totalLACar6,
                    listarLABerco: totalLABerco,
                    listarLAFonte: totalLAFonte
                })
            } else if (estagio === "Suporte Remoto") {
                let dadoSPCol = [];
                let dadoSPLei = [];
                let dadoSPImp = [];
                let dadoSPBusca = [];
                let dadoSPCar3 = [];
                let dadoSPCar4 = [];
                let dadoSPCar5 = [];
                let dadoSPCar6 = [];
                let dadoSPBerco = [];
                let dadoSPFonte = [];
                for (let i = 0; i < tabelaNome.length; i++) {
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoSPCol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoSPLei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoSPBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoSPImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoSPCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoSPCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoSPCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoSPCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoSPBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoSPFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                }

                let totalSPCol = Object.keys(dadoSPCol).length;
                let totalSPLei = Object.keys(dadoSPLei).length;
                let totalSPBusca = Object.keys(dadoSPBusca).length;
                let totalSPImp = Object.keys(dadoSPImp).length;
                let totalSPCar3 = Object.keys(dadoSPCar3).length;
                let totalSPCar4 = Object.keys(dadoSPCar4).length;
                let totalSPCar5 = Object.keys(dadoSPCar5).length;
                let totalSPCar6 = Object.keys(dadoSPCar6).length;
                let totalSPBerco = Object.keys(dadoSPBerco).length;
                let totalSPFonte = Object.keys(dadoSPFonte).length;

                return this.setState({
                    listarSPCOl: totalSPCol,
                    listarSPLei: totalSPLei,
                    listarSPBusca: totalSPBusca,
                    listarSPImp: totalSPImp,
                    listarSPCar3: totalSPCar3,
                    listarSPCar4: totalSPCar4,
                    listarSPCar5: totalSPCar5,
                    listarSPCar6: totalSPCar6,
                    listarSPBerco: totalSPBerco,
                    listarSPFonte: totalSPFonte
                })
            } else if (estagio === "Revisão de Manutenção") {
                let dadoRMCol = [];
                let dadoRMLei = [];
                let dadoRMImp = [];
                let dadoRMBusca = [];
                let dadoRMCar3 = [];
                let dadoRMCar4 = [];
                let dadoRMCar5 = [];
                let dadoRMCar6 = [];
                let dadoRMBerco = [];
                let dadoRMFonte = [];
                for (let i = 0; i < tabelaNome.length; i++) {
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoRMCol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoRMLei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoRMBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoRMImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRMCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRMCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRMCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRMCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoRMBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoRMFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                }

                let totalRMCol = Object.keys(dadoRMCol).length;
                let totalRMLei = Object.keys(dadoRMLei).length;
                let totalRMBusca = Object.keys(dadoRMBusca).length;
                let totalRMImp = Object.keys(dadoRMImp).length;
                let totalRMCar3 = Object.keys(dadoRMCar3).length;
                let totalRMCar4 = Object.keys(dadoRMCar4).length;
                let totalRMCar5 = Object.keys(dadoRMCar5).length;
                let totalRMCar6 = Object.keys(dadoRMCar6).length;
                let totalRMBerco = Object.keys(dadoRMBerco).length;
                let totalRMFonte = Object.keys(dadoRMFonte).length;

                return this.setState({
                    listarRMCOl: totalRMCol,
                    listarRMLei: totalRMLei,
                    listarRMBusca: totalRMBusca,
                    listarRMImp: totalRMImp,
                    listarRMCar3: totalRMCar3,
                    listarRMCar4: totalRMCar4,
                    listarRMCar5: totalRMCar5,
                    listarRMCar6: totalRMCar6,
                    listarRMBerco: totalRMBerco,
                    listarRMFonte: totalRMFonte
                })
            } else if (estagio === "Chamado On-Site") {
                let dadoCOCol = [];
                let dadoCOLei = [];
                let dadoCOImp = [];
                let dadoCOBusca = [];
                let dadoCOCar3 = [];
                let dadoCOCar4 = [];
                let dadoCOCar5 = [];
                let dadoCOCar6 = [];
                let dadoCOBerco = [];
                let dadoCOFonte = [];
                for (let i = 0; i < tabelaNome.length; i++) {
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoCOCol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoCOLei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoCOBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoCOImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoCOCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoCOCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoCOCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoCOCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoCOBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoCOFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                }

                let totalCOCol = Object.keys(dadoCOCol).length;
                let totalCOLei = Object.keys(dadoCOLei).length;
                let totalCOBusca = Object.keys(dadoCOBusca).length;
                let totalCOImp = Object.keys(dadoCOImp).length;
                let totalCOCar3 = Object.keys(dadoCOCar3).length;
                let totalCOCar4 = Object.keys(dadoCOCar4).length;
                let totalCOCar5 = Object.keys(dadoCOCar5).length;
                let totalCOCar6 = Object.keys(dadoCOCar6).length;
                let totalCOBerco = Object.keys(dadoCOBerco).length;
                let totalCOFonte = Object.keys(dadoCOFonte).length;

                return this.setState({
                    listarCOCOl: totalCOCol,
                    listarCOLei: totalCOLei,
                    listarCOBusca: totalCOBusca,
                    listarCOImp: totalCOImp,
                    listarCOCar3: totalCOCar3,
                    listarCOCar4: totalCOCar4,
                    listarCOCar5: totalCOCar5,
                    listarCOCar6: totalCOCar6,
                    listarCOBerco: totalCOBerco,
                    listarCOFonte: totalCOFonte
                })
            } else if (estagio === "Revisão de Venda") {
                let dadoRVCol = [];
                let dadoRVLei = [];
                let dadoRVImp = [];
                let dadoRVBusca = [];
                let dadoRVCar3 = [];
                let dadoRVCar4 = [];
                let dadoRVCar5 = [];
                let dadoRVCar6 = [];
                let dadoRVBerco = [];
                let dadoRVFonte = [];
                for (let i = 0; i < tabelaNome.length; i++) {
                    if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoRVCol.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                        dadoRVLei.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                        dadoRVBusca.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                        dadoRVImp.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRVCar4.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRVCar3.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRVCar5.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                        dadoRVCar6.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                        dadoRVBerco.push({
                            OS: tabelaNome[i].OS
                        })
                    } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && (estagio === tabelaNome[i].Servico)
                        && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                        dadoRVFonte.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                }

                let totalRVCol = Object.keys(dadoRVCol).length;
                let totalRVLei = Object.keys(dadoRVLei).length;
                let totalRVBusca = Object.keys(dadoRVBusca).length;
                let totalRVImp = Object.keys(dadoRVImp).length;
                let totalRVCar3 = Object.keys(dadoRVCar3).length;
                let totalRVCar4 = Object.keys(dadoRVCar4).length;
                let totalRVCar5 = Object.keys(dadoRVCar5).length;
                let totalRVCar6 = Object.keys(dadoRVCar6).length;
                let totalRVBerco = Object.keys(dadoRVBerco).length;
                let totalRVFonte = Object.keys(dadoRVFonte).length;

                return this.setState({
                    listarRVCOl: totalRVCol,
                    listarRVLei: totalRVLei,
                    listarRVBusca: totalRVBusca,
                    listarRVImp: totalRVImp,
                    listarRVCar3: totalRVCar3,
                    listarRVCar4: totalRVCar4,
                    listarRVCar5: totalRVCar5,
                    listarRVCar6: totalRVCar6,
                    listarRVBerco: totalRVBerco,
                    listarRVFonte: totalRVFonte
                })
            }
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    mostrarEquipamento(estagio) {

        if (estagio === "Manutenção") {
            const data = [
                { name: "Coletor", y: this.state.listarMCCOl },
                { name: "Leitor", y: this.state.listarMCLei },
                { name: "Busca Preço", y: this.state.listarMCBusca },
                { name: "Impressora", y: this.state.listarMCImp },
                { name: "Carregador 3", y: this.state.listarMCCar3 },
                { name: "Carregador 4", y: this.state.listarMCCar4 },
                { name: "Carregador 5", y: this.state.listarMCCar5 },
                { name: "Carregador 6", y: this.state.listarMCCar6 },
                { name: "Berço", y: this.state.listarMCBerco },
                { name: "Fonte", y: this.state.listarMCFonte }
            ]

            return data
        }
        else if (estagio === "Laudo") {
            const data = [
                { name: "Coletor", y: this.state.listarLACOl },
                { name: "Leitor", y: this.state.listarLALei },
                { name: "Busca Preço", y: this.state.listarLABusca },
                { name: "Impressora", y: this.state.listarLAImp },
                { name: "Carregador 3", y: this.state.listarLACar3 },
                { name: "Carregador 4", y: this.state.listarLACar4 },
                { name: "Carregador 5", y: this.state.listarLACar5 },
                { name: "Carregador 6", y: this.state.listarLACar6 },
                { name: "Berço", y: this.state.listarLABerco },
                { name: "Fonte", y: this.state.listarLAFonte }
            ]

            return data
        }
        else if (estagio === "Suporte") {
            const data = [
                { name: "Coletor", y: this.state.listarSPCOl },
                { name: "Leitor", y: this.state.listarSPLei },
                { name: "Busca Preço", y: this.state.listarSPBusca },
                { name: "Impressora", y: this.state.listarSPImp },
                { name: "Carregador 3", y: this.state.listarSPCar3 },
                { name: "Carregador 4", y: this.state.listarSPCar4 },
                { name: "Carregador 5", y: this.state.listarSPCar5 },
                { name: "Carregador 6", y: this.state.listarSPCar6 },
                { name: "Berço", y: this.state.listarSPBerco },
                { name: "Fonte", y: this.state.listarSPFonte }
            ]

            return data
        }
        else if (estagio === "Revisão M") {
            const data = [
                { name: "Coletor", y: this.state.listarRMCOl },
                { name: "Leitor", y: this.state.listarRMLei },
                { name: "Busca Preço", y: this.state.listarRMBusca },
                { name: "Impressora", y: this.state.listarRMImp },
                { name: "Carregador 3", y: this.state.listarRMCar3 },
                { name: "Carregador 4", y: this.state.listarRMCar4 },
                { name: "Carregador 5", y: this.state.listarRMCar5 },
                { name: "Carregador 6", y: this.state.listarRMCar6 },
                { name: "Berço", y: this.state.listarRMBerco },
                { name: "Fonte", y: this.state.listarRMFonte }
            ]

            return data
        }
        else if (estagio === "On-site") {
            const data = [
                { name: "Coletor", y: this.state.listarCOCOl },
                { name: "Leitor", y: this.state.listarCOLei },
                { name: "Busca Preço", y: this.state.listarCOBusca },
                { name: "Impressora", y: this.state.listarCOImp },
                { name: "Carregador 3", y: this.state.listarCOCar3 },
                { name: "Carregador 4", y: this.state.listarCOCar4 },
                { name: "Carregador 5", y: this.state.listarCOCar5 },
                { name: "Carregador 6", y: this.state.listarCOCar6 },
                { name: "Berço", y: this.state.listarCOBerco },
                { name: "Fonte", y: this.state.listarCOFonte }
            ]

            return data
        }
        else if (estagio === "Revisão V") {
            const data = [
                { name: "Coletor", y: this.state.listarRVCOl },
                { name: "Leitor", y: this.state.listarRVLei },
                { name: "Busca Preço", y: this.state.listarRVBusca },
                { name: "Impressora", y: this.state.listarRVImp },
                { name: "Carregador 3", y: this.state.listarRVCar3 },
                { name: "Carregador 4", y: this.state.listarRVCar4 },
                { name: "Carregador 5", y: this.state.listarRVCar5 },
                { name: "Carregador 6", y: this.state.listarRVCar6 },
                { name: "Berço", y: this.state.listarRVBerco },
                { name: "Fonte", y: this.state.listarRVFonte }
            ]

            return data
        }
    }

    async totalPorEquipamento() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoCol = [];
        let dadoLei = [];
        let dadoImp = [];
        let dadoBusca = [];
        let dadoCar3 = [];
        let dadoCar4 = [];
        let dadoCar5 = [];
        let dadoCar6 = [];
        let dadoBerco = [];
        let dadoFonte = [];

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                dadoCol.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                dadoLei.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                dadoImp.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Busca Preço" === tabelaNome[i].Equipamento)) {
                dadoBusca.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar3.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar4.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar5.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                dadoCar6.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                dadoBerco.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                dadoBerco.push({
                    OS: tabelaNome[i].OS
                })
            }else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                dadoFonte.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        let totalCol = Object.keys(dadoCol).length;
        let totalLei = Object.keys(dadoLei).length;
        let totalImp = Object.keys(dadoImp).length;
        let totalBusca = Object.keys(dadoBusca).length;
        let totalCar3 = Object.keys(dadoCar3).length;
        let totalCar4 = Object.keys(dadoCar4).length;
        let totalCar5 = Object.keys(dadoCar5).length;
        let totalCar6 = Object.keys(dadoCar6).length;
        let totalBerco = Object.keys(dadoBerco).length;
        let totalFonte = Object.keys(dadoFonte).length;


        return this.setState({
            listarTotalCOl: totalCol,
            listarTotalLei: totalLei,
            listarTotalImp: totalImp,
            listarTotalBusca: totalBusca,
            listarTotalCar3: totalCar3,
            listarTotalCar4: totalCar4,
            listarTotalCar5: totalCar5,
            listarTotalCar6: totalCar6,
            listarTotalBerco: totalBerco,
            listarTotalFonte: totalFonte
        })
    }

    render() {
        return (
            <div className='row mt-4 d-flex justify-content-around'>
                <div className="col-12 col-md-5 flex-fill mx-3 sombra">
                    <Grafico tipo="pie" titulo="Ordens de Serviço"
                        formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                        texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                        nomeSerie="Ordem de Serviço"
                        dado={[
                            { name: "Manutenção Concluída", y: this.state.listarMC },
                            { name: "Laudo", y: this.state.listarLA },
                            { name: "Suporte Remoto", y: this.state.listarSR },
                            { name: "Revisão de Manutenção", y: this.state.listarRM },
                            { name: "Chamado On-Site", y: this.state.listarCO },
                            { name: "Revisão de Venda", y: this.state.listarRV },
                        ]}
                    />
                </div>
                <div className="col-12 col-md-5 sombra flex-fill">
                    <Grafico tipo="column" titulo="Ordens de Serviço"
                        formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                        texto='{point.y:1f}'
                        nomeSerie="Ordem de Serviço"
                        dado={[
                            { name: "Manutenção", y: this.state.listarMC, drilldown: "Manutenção" },
                            { name: "Laudo", y: this.state.listarLA, drilldown: "Laudo" },
                            { name: "Suporte", y: this.state.listarSR, drilldown: "Suporte" },
                            { name: "Revisão M", y: this.state.listarRM, drilldown: "Revisão M" },
                            { name: "On-Site", y: this.state.listarCO, drilldown: "On-site" },
                            { name: "Revisão V", y: this.state.listarRV, drilldown: "Revisão V" },
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
                            dado={[
                                { name: "Coletor", y: this.state.listarTotalCOl },
                                { name: "Leitor", y: this.state.listarTotalLei },
                                { name: "Busca Preço", y: this.state.listarTotalBusca },
                                { name: "Impressora", y: this.state.listarTotalImp },
                                { name: "Carregador 3", y: this.state.listarTotalCar3 },
                                { name: "Carregador 4", y: this.state.listarTotalCar4 },
                                { name: "Carregador 5", y: this.state.listarTotalCar5 },
                                { name: "Carregador 6", y: this.state.listarTotalCar6 },
                                { name: "Berço", y: this.state.listarTotalBerco },
                                { name: "Fonte", y: this.state.listarTotalFonte }
                            ]} />
                    </div>
                </div>
            </div>
        )

    }
}