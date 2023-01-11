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
    listarCC: [],
    listarMMV: [],

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
    listarMCCabo: [],

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
    listarLACabo: [],

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
    listarSPCabo: [],

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
    listarRMCabo: [],

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
    listarCOCabo: [],

    //Equipamento Revisão V
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
    listarRVCabo: [],

    //Equipamento Cabo
    listarCCCabo: [],

    //Equipamento Montagem e Manutenção de Venda
    listarMMVCOl: [],
    listarMMVImp: [],
    listarMMVLei: [],
    listarMMVBusca: [],
    listarMMVCar3: [],
    listarMMVCar4: [],
    listarMMVCar5: [],
    listarMMVCar6: [],
    listarMMVBerco: [],
    listarMMVFonte: [],
    listarMMVCabo: [],

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
    listarTotalCabos: [],

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

        const totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV + 
            totalCC + totalMMV

        return this.setState({
            listarMC: totalMC,
            listarLA: totalLA,
            listarSR: totalSR,
            listarRM: totalRM,
            listarCO: totalCO,
            listarRV: totalRV,
            listarCC: totalCC,
            listarMMV: totalMMV,

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
            let dadoMCImp = [];
            let dadoMCBusca = [];
            let dadoMCCar3 = [];
            let dadoMCCar4 = [];
            let dadoMCCar5 = [];
            let dadoMCCar6 = [];
            let dadoMCBerco = [];
            let dadoMCFonte = [];
            let dadoMCCabo = [];

            //Variavel Laudo
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
            let dadoLACabo = [];

            //Variavel Suporte
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
            let dadoSPCabo = [];

            //Variavel Revisão M
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
            let dadoRMCabo = [];

            //Variavel On-Site
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
            let dadoCOCabo = [];

            //Variavel Revisão V
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
            let dadoRVCabo = [];

            //variavel dos Cabos
            let dadoCCCabo = [];

            //Variavel Montagem/Manutenção de Venda
            let dadoMMVCol = [];
            let dadoMMVLei = [];
            let dadoMMVImp = [];
            let dadoMMVBusca = [];
            let dadoMMVCar3 = [];
            let dadoMMVCar4 = [];
            let dadoMMVCar5 = [];
            let dadoMMVCar6 = [];
            let dadoMMVBerco = [];
            let dadoMMVFonte = [];
            let dadoMMVCabo = [];
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
                                        }

                //#endregion
            }

            //#region Totais Object
            //Total Manutenção
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
            let totalMCCabo = Object.keys(dadoMCCabo).length;

            //Total Laudo
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
            let totalLACabo = Object.keys(dadoLACabo).length;

            //Total Suporte
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
            let totalSPCabo = Object.keys(dadoSPCabo).length;

            //Total Revisão M
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
            let totalRMCabo = Object.keys(dadoRMCabo).length;

            //Total On-Site
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
            let totalCOCabo = Object.keys(dadoCOCabo).length;

            //Total Revisão V
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
            let totalRVCabo = Object.keys(dadoRVCabo).length;

            //Total Confeção de Cabos
            let totalCCCabos = Object.keys(dadoCCCabo).length;

            //Total Montagem/Manutenção de Venda
            let totalMMVCol = Object.keys(dadoMMVCol).length;
            let totalMMVLei = Object.keys(dadoMMVLei).length;
            let totalMMVBusca = Object.keys(dadoMMVBusca).length;
            let totalMMVImp = Object.keys(dadoMMVImp).length;
            let totalMMVCar3 = Object.keys(dadoMMVCar3).length;
            let totalMMVCar4 = Object.keys(dadoMMVCar4).length;
            let totalMMVCar5 = Object.keys(dadoMMVCar5).length;
            let totalMMVCar6 = Object.keys(dadoMMVCar6).length;
            let totalMMVBerco = Object.keys(dadoMMVBerco).length;
            let totalMMVFonte = Object.keys(dadoMMVFonte).length;
            let totalMMVCabo = Object.keys(dadoMMVCabo).length;
            //#endregion

            //#region Return arrays
            return this.setState({
                //Listar Manutenção
                listarMCCOl: totalMCCol,
                listarMCLei: totalMCLei,
                listarMCBusca: totalMCBusca,
                listarMCImp: totalMCImp,
                listarMCCar3: totalMCCar3,
                listarMCCar4: totalMCCar4,
                listarMCCar5: totalMCCar5,
                listarMCCar6: totalMCCar6,
                listarMCBerco: totalMCBerco,
                listarMCFonte: totalMCFonte,
                listarMCCabo: totalMCCabo,

                //Listar Laudo
                listarLACOl: totalLACol,
                listarLALei: totalLALei,
                listarLABusca: totalLABusca,
                listarLAImp: totalLAImp,
                listarLACar3: totalLACar3,
                listarLACar4: totalLACar4,
                listarLACar5: totalLACar5,
                listarLACar6: totalLACar6,
                listarLABerco: totalLABerco,
                listarLAFonte: totalLAFonte,
                listarLACabo: totalLACabo,

                //Listar Suporte
                listarSPCOl: totalSPCol,
                listarSPLei: totalSPLei,
                listarSPBusca: totalSPBusca,
                listarSPImp: totalSPImp,
                listarSPCar3: totalSPCar3,
                listarSPCar4: totalSPCar4,
                listarSPCar5: totalSPCar5,
                listarSPCar6: totalSPCar6,
                listarSPBerco: totalSPBerco,
                listarSPFonte: totalSPFonte,
                listarSPCabo: totalSPCabo,

                //Listar Revisão M
                listarRMCOl: totalRMCol,
                listarRMLei: totalRMLei,
                listarRMBusca: totalRMBusca,
                listarRMImp: totalRMImp,
                listarRMCar3: totalRMCar3,
                listarRMCar4: totalRMCar4,
                listarRMCar5: totalRMCar5,
                listarRMCar6: totalRMCar6,
                listarRMBerco: totalRMBerco,
                listarRMFonte: totalRMFonte,
                listarRMCabo: totalRMCabo,

                //Listar On-Site
                listarCOCOl: totalCOCol,
                listarCOLei: totalCOLei,
                listarCOBusca: totalCOBusca,
                listarCOImp: totalCOImp,
                listarCOCar3: totalCOCar3,
                listarCOCar4: totalCOCar4,
                listarCOCar5: totalCOCar5,
                listarCOCar6: totalCOCar6,
                listarCOBerco: totalCOBerco,
                listarCOFonte: totalCOFonte,
                listarCOCabo: totalCOCabo,

                //Listar Revisão V
                listarRVCOl: totalRVCol,
                listarRVLei: totalRVLei,
                listarRVBusca: totalRVBusca,
                listarRVImp: totalRVImp,
                listarRVCar3: totalRVCar3,
                listarRVCar4: totalRVCar4,
                listarRVCar5: totalRVCar5,
                listarRVCar6: totalRVCar6,
                listarRVBerco: totalRVBerco,
                listarRVFonte: totalRVFonte,
                listarRVCabo: totalRVCabo,

                //listar Cofecção de Cabos
                listarCCCabo: totalCCCabos,

                //Listar Montagem/Manutenção de Venda
                listarMMVCOl: totalMMVCol,
                listarMMVLei: totalMMVLei,
                listarMMVBusca: totalMMVBusca,
                listarMMVImp: totalMMVImp,
                listarMMVCar3: totalMMVCar3,
                listarMMVCar4: totalMMVCar4,
                listarMMVCar5: totalMMVCar5,
                listarMMVCar6: totalMMVCar6,
                listarMMVBerco: totalMMVBerco,
                listarMMVFonte: totalMMVFonte,
                listarMMVCabo: totalMMVCabo,
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
                { name: "Busca Preço", y: this.state.listarMCBusca },
                { name: "Impressora", y: this.state.listarMCImp },
                { name: "Carregador 3 P", y: this.state.listarMCCar3 },
                { name: "Carregador 4 P", y: this.state.listarMCCar4 },
                { name: "Carregador 5 P", y: this.state.listarMCCar5 },
                { name: "Carregador 6 P", y: this.state.listarMCCar6 },
                { name: "Berço", y: this.state.listarMCBerco },
                { name: "Fonte", y: this.state.listarMCFonte },
                { name: "Cabo C", y: this.state.listarMCCabo }
            ]

            return data
        }
        else if (estagio === "Laudo") {
            const data = [
                { name: "Coletor", y: this.state.listarLACOl },
                { name: "Leitor", y: this.state.listarLALei },
                { name: "Busca Preço", y: this.state.listarLABusca },
                { name: "Impressora", y: this.state.listarLAImp },
                { name: "Carregador 3 P", y: this.state.listarLACar3 },
                { name: "Carregador 4 P", y: this.state.listarLACar4 },
                { name: "Carregador 5 P", y: this.state.listarLACar5 },
                { name: "Carregador 6 P", y: this.state.listarLACar6 },
                { name: "Berço", y: this.state.listarLABerco },
                { name: "Fonte", y: this.state.listarLAFonte },
                { name: "Cabo C", y: this.state.listarLACabo }
            ]

            return data
        }
        else if (estagio === "Suporte") {
            const data = [
                { name: "Coletor", y: this.state.listarSPCOl },
                { name: "Leitor", y: this.state.listarSPLei },
                { name: "Busca Preço", y: this.state.listarSPBusca },
                { name: "Impressora", y: this.state.listarSPImp },
                { name: "Carregador 3 P", y: this.state.listarSPCar3 },
                { name: "Carregador 4 P", y: this.state.listarSPCar4 },
                { name: "Carregador 5 P", y: this.state.listarSPCar5 },
                { name: "Carregador 6 P", y: this.state.listarSPCar6 },
                { name: "Berço", y: this.state.listarSPBerco },
                { name: "Fonte", y: this.state.listarSPFonte },
                { name: "Cabo C", y: this.state.listarSPCabo }
            ]

            return data
        }
        else if (estagio === "Revisão M") {
            const data = [
                { name: "Coletor", y: this.state.listarRMCOl },
                { name: "Leitor", y: this.state.listarRMLei },
                { name: "Busca Preço", y: this.state.listarRMBusca },
                { name: "Impressora", y: this.state.listarRMImp },
                { name: "Carregador 3 P", y: this.state.listarRMCar3 },
                { name: "Carregador 4 P", y: this.state.listarRMCar4 },
                { name: "Carregador 5 P", y: this.state.listarRMCar5 },
                { name: "Carregador 6 P", y: this.state.listarRMCar6 },
                { name: "Berço", y: this.state.listarRMBerco },
                { name: "Fonte", y: this.state.listarRMFonte },
                { name: "Cabo C", y: this.state.listarRMCabo }
            ]

            return data
        }
        else if (estagio === "On-site") {
            const data = [
                { name: "Coletor", y: this.state.listarCOCOl },
                { name: "Leitor", y: this.state.listarCOLei },
                { name: "Busca Preço", y: this.state.listarCOBusca },
                { name: "Impressora", y: this.state.listarCOImp },
                { name: "Carregador 3 P", y: this.state.listarCOCar3 },
                { name: "Carregador 4 P", y: this.state.listarCOCar4 },
                { name: "Carregador 5 P", y: this.state.listarCOCar5 },
                { name: "Carregador 6 P", y: this.state.listarCOCar6 },
                { name: "Berço", y: this.state.listarCOBerco },
                { name: "Fonte", y: this.state.listarCOFonte },
                { name: "Cabo C", y: this.state.listarCOCabo }
            ]

            return data
        }
        else if (estagio === "Revisão V") {
            const data = [
                { name: "Coletor", y: this.state.listarRVCOl },
                { name: "Leitor", y: this.state.listarRVLei },
                { name: "Busca Preço", y: this.state.listarRVBusca },
                { name: "Impressora", y: this.state.listarRVImp },
                { name: "Carregador 3 P", y: this.state.listarRVCar3 },
                { name: "Carregador 4 P", y: this.state.listarRVCar4 },
                { name: "Carregador 5 P", y: this.state.listarRVCar5 },
                { name: "Carregador 6 P", y: this.state.listarRVCar6 },
                { name: "Berço", y: this.state.listarRVBerco },
                { name: "Fonte", y: this.state.listarRVFonte },
                { name: "Cabo C", y: this.state.listarRVCabo }
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
                { name: "Busca Preço", y: this.state.listarMMVBusca },
                { name: "Impressora", y: this.state.listarMMVImp },
                { name: "Carregador 3 P", y: this.state.listarMMVCar3 },
                { name: "Carregador 4 P", y: this.state.listarMMVCar4 },
                { name: "Carregador 5 P", y: this.state.listarMMVCar5 },
                { name: "Carregador 6 P", y: this.state.listarMMVCar6 },
                { name: "Berço", y: this.state.listarMMVBerco },
                { name: "Fonte", y: this.state.listarMMVFonte },
                { name: "Cabo C", y: this.state.listarMMVCabo }
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
        let dadoCabo = [];

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                dadoCol.push({
                    OS: tabelaNome[i].OS
                })
            } else if ((localStorage.usuario === tabelaNome[i].Tecnico) && ("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                dadoLei.push({
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
        let totalCabo = Object.keys(dadoCabo).length;


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
            listarTotalFonte: totalFonte,
            listarTotalCabos: totalCabo
        })
    }

    async buscarDadosFiltro(mes, ano) {
        try{
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

        //dados manutenção equipamento
        let dadoFMCCol = [];
        let dadoFMCLei = [];
        let dadoFMCImp = [];
        let dadoFMCBusca = [];
        let dadoFMCCar3 = [];
        let dadoFMCCar4 = [];
        let dadoFMCCar5 = [];
        let dadoFMCCar6 = [];
        let dadoFMCBerco = [];
        let dadoFMCFonte = [];
        let dadoFMCCabo = [];


        //Variavel Laudo
        let dadoFLACol = [];
        let dadoFLALei = [];
        let dadoFLAImp = [];
        let dadoFLABusca = [];
        let dadoFLACar3 = [];
        let dadoFLACar4 = [];
        let dadoFLACar5 = [];
        let dadoFLACar6 = [];
        let dadoFLABerco = [];
        let dadoFLAFonte = [];
        let dadoFLACabo = [];

        //Variavel Suporte
        let dadoFSPCol = [];
        let dadoFSPLei = [];
        let dadoFSPImp = [];
        let dadoFSPBusca = [];
        let dadoFSPCar3 = [];
        let dadoFSPCar4 = [];
        let dadoFSPCar5 = [];
        let dadoFSPCar6 = [];
        let dadoFSPBerco = [];
        let dadoFSPFonte = [];
        let dadoFSPCabo = [];

        //Variavel Revisão M
        let dadoFRMCol = [];
        let dadoFRMLei = [];
        let dadoFRMImp = [];
        let dadoFRMBusca = [];
        let dadoFRMCar3 = [];
        let dadoFRMCar4 = [];
        let dadoFRMCar5 = [];
        let dadoFRMCar6 = [];
        let dadoFRMBerco = [];
        let dadoFRMFonte = [];
        let dadoFRMCabo = [];

         //Variavel On-Site
         let dadoFCOCol = [];
         let dadoFCOLei = [];
         let dadoFCOImp = [];
         let dadoFCOBusca = [];
         let dadoFCOCar3 = [];
         let dadoFCOCar4 = [];
         let dadoFCOCar5 = [];
         let dadoFCOCar6 = [];
         let dadoFCOBerco = [];
         let dadoFCOFonte = [];
         let dadoFCOCabo = [];

        //Variavel Revisão V
        let dadoFRVCol = [];
        let dadoFRVLei = [];
        let dadoFRVImp = [];
        let dadoFRVBusca = [];
        let dadoFRVCar3 = [];
        let dadoFRVCar4 = [];
        let dadoFRVCar5 = [];
        let dadoFRVCar6 = [];
        let dadoFRVBerco = [];
        let dadoFRVFonte = [];
        let dadoFRVCabo = [];

        //variavel dos Cabos
        let dadoFCCCabo = [];

        //Variavel Montagem/Manutenção de Venda
        let dadoFMMVCol = [];
        let dadoFMMVLei = [];
        let dadoFMMVImp = [];
        let dadoFMMVBusca = [];
        let dadoFMMVCar3 = [];
        let dadoFMMVCar4 = [];
        let dadoFMMVCar5 = [];
        let dadoFMMVCar6 = [];
        let dadoFMMVBerco = [];
        let dadoFMMVFonte = [];
        let dadoFMMVCabo = [];
        //#endregion
                
        for (let i = 0; i < tabelaNome.length; i++) {
            //#region mês
            if ((mes === `${tabelaNome[i].Mes}`) && (ano === "Todos") && (localStorage.usuario === tabelaNome[i].Tecnico)) {
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
                    } 
                }else 
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
                } else 
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
                        }
                    }
            //#endregion
                } else
            //#endregion
                 
            //#region ano
                 if ((ano === `${tabelaNome[i].Ano}`) && (mes === "Todos") && (localStorage.usuario === tabelaNome[i].Tecnico)) {
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
                    } 
                }else 
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
                        }
                    }
            //#endregion
                } else
            //#endregion

            //#region mês e ano
                if ((mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`) && (localStorage.usuario === tabelaNome[i].Tecnico)) {
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
                    } 
                }else 
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
                        }
                    }
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

            //Total Manutenção
            let totalFMCCol = Object.keys(dadoFMCCol).length;
            let totalFMCLei = Object.keys(dadoFMCLei).length;
            let totalFMCBusca = Object.keys(dadoFMCBusca).length;
            let totalFMCImp = Object.keys(dadoFMCImp).length;
            let totalFMCCar3 = Object.keys(dadoFMCCar3).length;
            let totalFMCCar4 = Object.keys(dadoFMCCar4).length;
            let totalFMCCar5 = Object.keys(dadoFMCCar5).length;
            let totalFMCCar6 = Object.keys(dadoFMCCar6).length;
            let totalFMCBerco = Object.keys(dadoFMCBerco).length;
            let totalFMCFonte = Object.keys(dadoFMCFonte).length;
            let totalFMCCabo = Object.keys(dadoFMCCabo).length;

            //Total Laudo
            let totalFLACol = Object.keys(dadoFLACol).length;
            let totalFLALei = Object.keys(dadoFLALei).length;
            let totalFLABusca = Object.keys(dadoFLABusca).length;
            let totalFLAImp = Object.keys(dadoFLAImp).length;
            let totalFLACar3 = Object.keys(dadoFLACar3).length;
            let totalFLACar4 = Object.keys(dadoFLACar4).length;
            let totalFLACar5 = Object.keys(dadoFLACar5).length;
            let totalFLACar6 = Object.keys(dadoFLACar6).length;
            let totalFLABerco = Object.keys(dadoFLABerco).length;
            let totalFLAFonte = Object.keys(dadoFLAFonte).length;
            let totalFLACabo = Object.keys(dadoFLACabo).length;

            //Total Suporte
            let totalFSPCol = Object.keys(dadoFSPCol).length;
            let totalFSPLei = Object.keys(dadoFSPLei).length;
            let totalFSPBusca = Object.keys(dadoFSPBusca).length;
            let totalFSPImp = Object.keys(dadoFSPImp).length;
            let totalFSPCar3 = Object.keys(dadoFSPCar3).length;
            let totalFSPCar4 = Object.keys(dadoFSPCar4).length;
            let totalFSPCar5 = Object.keys(dadoFSPCar5).length;
            let totalFSPCar6 = Object.keys(dadoFSPCar6).length;
            let totalFSPBerco = Object.keys(dadoFSPBerco).length;
            let totalFSPFonte = Object.keys(dadoFSPFonte).length;
            let totalFSPCabo = Object.keys(dadoFSPCabo).length;

             //Total Revisão M
             let totalFRMCol = Object.keys(dadoFRMCol).length;
             let totalFRMLei = Object.keys(dadoFRMLei).length;
             let totalFRMBusca = Object.keys(dadoFRMBusca).length;
             let totalFRMImp = Object.keys(dadoFRMImp).length;
             let totalFRMCar3 = Object.keys(dadoFRMCar3).length;
             let totalFRMCar4 = Object.keys(dadoFRMCar4).length;
             let totalFRMCar5 = Object.keys(dadoFRMCar5).length;
             let totalFRMCar6 = Object.keys(dadoFRMCar6).length;
             let totalFRMBerco = Object.keys(dadoFRMBerco).length;
             let totalFRMFonte = Object.keys(dadoFRMFonte).length;
             let totalFRMCabo = Object.keys(dadoFRMCabo).length;

             //Total On-Site
            let totalFCOCol = Object.keys(dadoFCOCol).length;
            let totalFCOLei = Object.keys(dadoFCOLei).length;
            let totalFCOBusca = Object.keys(dadoFCOBusca).length;
            let totalFCOImp = Object.keys(dadoFCOImp).length;
            let totalFCOCar3 = Object.keys(dadoFCOCar3).length;
            let totalFCOCar4 = Object.keys(dadoFCOCar4).length;
            let totalFCOCar5 = Object.keys(dadoFCOCar5).length;
            let totalFCOCar6 = Object.keys(dadoFCOCar6).length;
            let totalFCOBerco = Object.keys(dadoFCOBerco).length;
            let totalFCOFonte = Object.keys(dadoFCOFonte).length;
            let totalFCOCabo = Object.keys(dadoFCOCabo).length;

            //Total Revisão V
            let totalFRVCol = Object.keys(dadoFRVCol).length;
            let totalFRVLei = Object.keys(dadoFRVLei).length;
            let totalFRVBusca = Object.keys(dadoFRVBusca).length;
            let totalFRVImp = Object.keys(dadoFRVImp).length;
            let totalFRVCar3 = Object.keys(dadoFRVCar3).length;
            let totalFRVCar4 = Object.keys(dadoFRVCar4).length;
            let totalFRVCar5 = Object.keys(dadoFRVCar5).length;
            let totalFRVCar6 = Object.keys(dadoFRVCar6).length;
            let totalFRVBerco = Object.keys(dadoFRVBerco).length;
            let totalFRVFonte = Object.keys(dadoFRVFonte).length;
            let totalFRVCabo = Object.keys(dadoFRVCabo).length;

            //Total Confeção de Cabos
            let totalFCCCabos = Object.keys(dadoFCCCabo).length;

            //Total Montagem/Manutenção de Venda
            let totalFMMVCol = Object.keys(dadoFMMVCol).length;
            let totalFMMVLei = Object.keys(dadoFMMVLei).length;
            let totalFMMVBusca = Object.keys(dadoFMMVBusca).length;
            let totalFMMVImp = Object.keys(dadoFMMVImp).length;
            let totalFMMVCar3 = Object.keys(dadoFMMVCar3).length;
            let totalFMMVCar4 = Object.keys(dadoFMMVCar4).length;
            let totalFMMVCar5 = Object.keys(dadoFMMVCar5).length;
            let totalFMMVCar6 = Object.keys(dadoFMMVCar6).length;
            let totalFMMVBerco = Object.keys(dadoFMMVBerco).length;
            let totalFMMVFonte = Object.keys(dadoFMMVFonte).length;
            let totalFMMVCabo = Object.keys(dadoFMMVCabo).length;

            //total por equipamento
            let totalFilCol = totalFMCCol + totalFLACol + totalFSPCol + totalFRMCol + 
                totalFCOCol + totalFRVCol + totalFMMVCol
            let totalFilLei = totalFMCLei + totalFLALei + totalFSPLei + totalFRMLei + 
                totalFCOLei + totalFRVLei + totalFMMVLei
            let totalFilBusca = totalFMCBusca + totalFLABusca + totalFSPBusca + totalFRMBusca + 
                totalFCOBusca + totalFRVBusca + totalFMMVBusca
            let totalFilImp = totalFMCImp + totalFLAImp + totalFSPImp + totalFRMImp + 
                totalFCOImp + totalFRVImp + totalFMMVImp
            let totalFilCar3 = totalFMCCar3 + totalFLACar3 + totalFSPCar3 + totalFRMCar3 + 
                totalFCOCar3 + totalFRVCar3 + totalFMMVCar3
            let totalFilCar4 = totalFMCCar4 + totalFLACar4 + totalFSPCar4 + totalFRMCar4 + 
                totalFCOCar4 + totalFRVCar4 + totalFMMVCar4
            let totalFilCar5 = totalFMCCar5 + totalFLACar5 + totalFSPCar5 + totalFRMCar5 + 
                totalFCOCar5 + totalFRVCar5 + totalFMMVCar5
            let totalFilCar6 = totalFMCCar6 + totalFLACar6 + totalFSPCar6 + totalFRMCar6 + 
                totalFCOCar6 + totalFRVCar6 + totalFMMVCar6
            let totalFilBerco = totalFMCBerco + totalFLABerco + totalFSPBerco + totalFRMBerco + 
                totalFCOBerco + totalFRVBerco + totalFMMVBerco
            let totalFilFonte = totalFMCFonte + totalFLAFonte + totalFSPFonte + totalFRMFonte + 
                totalFCOFonte + totalFRVFonte + totalFMMVFonte
            let totalFilCabo = totalFCCCabos

            //total equipamentos
            let totalEquip = totalFilCol + totalFilLei + totalFilBusca + totalFilCabo + totalFilCar3 + 
                totalFilCar4 + totalFilCar5 + totalFilCar6 + totalFilImp + totalFilBerco + totalFilFonte
                 
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
                
                //Listar Manutenção
                listarMCCOl: totalFMCCol,
                listarMCLei: totalFMCLei,
                listarMCBusca: totalFMCBusca,
                listarMCImp: totalFMCImp,
                listarMCCar3: totalFMCCar3,
                listarMCCar4: totalFMCCar4,
                listarMCCar5: totalFMCCar5,
                listarMCCar6: totalFMCCar6,
                listarMCBerco: totalFMCBerco,
                listarMCFonte: totalFMCFonte,
                listarMCCabo: totalFMCCabo,

                //Listar Laudo
                listarLACOl: totalFLACol,
                listarLALei: totalFLALei,
                listarLABusca: totalFLABusca,
                listarLAImp: totalFLAImp,
                listarLACar3: totalFLACar3,
                listarLACar4: totalFLACar4,
                listarLACar5: totalFLACar5,
                listarLACar6: totalFLACar6,
                listarLABerco: totalFLABerco,
                listarLAFonte: totalFLAFonte,
                listarLACabo: totalFLACabo,

                 //Listar Suporte
                 listarSPCOl: totalFSPCol,
                 listarSPLei: totalFSPLei,
                 listarSPBusca: totalFSPBusca,
                 listarSPImp: totalFSPImp,
                 listarSPCar3: totalFSPCar3,
                 listarSPCar4: totalFSPCar4,
                 listarSPCar5: totalFSPCar5,
                 listarSPCar6: totalFSPCar6,
                 listarSPBerco: totalFSPBerco,
                 listarSPFonte: totalFSPFonte,
                 listarSPCabo: totalFSPCabo,

                //Listar Revisão M
                listarRMCOl: totalFRMCol,
                listarRMLei: totalFRMLei,
                listarRMBusca: totalFRMBusca,
                listarRMImp: totalFRMImp,
                listarRMCar3: totalFRMCar3,
                listarRMCar4: totalFRMCar4,
                listarRMCar5: totalFRMCar5,
                listarRMCar6: totalFRMCar6,
                listarRMBerco: totalFRMBerco,
                listarRMFonte: totalFRMFonte,
                listarRMCabo: totalFRMCabo,

                //Listar On-Site
                listarCOCOl: totalFCOCol,
                listarCOLei: totalFCOLei,
                listarCOBusca: totalFCOBusca,
                listarCOImp: totalFCOImp,
                listarCOCar3: totalFCOCar3,
                listarCOCar4: totalFCOCar4,
                listarCOCar5: totalFCOCar5,
                listarCOCar6: totalFCOCar6,
                listarCOBerco: totalFCOBerco,
                listarCOFonte: totalFCOFonte,
                listarCOCabo: totalFCOCabo,

                //Listar Revisão V
                listarRVCOl: totalFRVCol,
                listarRVLei: totalFRVLei,
                listarRVBusca: totalFRVBusca,
                listarRVImp: totalFRVImp,
                listarRVCar3: totalFRVCar3,
                listarRVCar4: totalFRVCar4,
                listarRVCar5: totalFRVCar5,
                listarRVCar6: totalFRVCar6,
                listarRVBerco: totalFRVBerco,
                listarRVFonte: totalFRVFonte,
                listarRVCabo: totalFRVCabo,

                //listar Cofecção de Cabos
                listarCCCabo: totalFCCCabos,

                //Listar Montagem/Manutenção de Venda
                listarMMVCOl: totalFMMVCol,
                listarMMVLei: totalFMMVLei,
                listarMMVBusca: totalFMMVBusca,
                listarMMVImp: totalFMMVImp,
                listarMMVCar3: totalFMMVCar3,
                listarMMVCar4: totalFMMVCar4,
                listarMMVCar5: totalFMMVCar5,
                listarMMVCar6: totalFMMVCar6,
                listarMMVBerco: totalFMMVBerco,
                listarMMVFonte: totalFMMVFonte,
                listarMMVCabo: totalFMMVCabo,

                //total por equipamento
                listarTotalCOl: totalFilCol,
                listarTotalLei: totalFilLei,
                listarTotalImp: totalFilImp,
                listarTotalBusca: totalFilBusca,
                listarTotalCar3: totalFilCar3,
                listarTotalCar4: totalFilCar4,
                listarTotalCar5: totalFilCar5,
                listarTotalCar6: totalFilCar6,
                listarTotalBerco: totalFilBerco,
                listarTotalFonte: totalFilFonte,
                listarTotalCabos: totalFilCabo,

                //total equipamentos
                listarTotalEquip: totalEquip 
            })
            //#endregion
        }catch(error){
            console.log("Erro : " + error)
        }

        }


        filtrarDados() {
            const ano = document.getElementById("ano").value;
            const mes = document.getElementById("mes").value;

            if ((ano === "Todos") && (mes === "Todos")) {
                this.buscarDados()
                this.buscarEquipamento()
                this.totalPorEquipamento()
                console.log("Sem Filtro")
            } else if ((ano === "Todos") && (mes !== "Todos")) {
                this.buscarDadosFiltro(mes, ano)

                console.log("Filtrando Apenas Mes" + mes)
            } else if ((ano !== "Todos") && (mes === "Todos")) {
                this.buscarDadosFiltro(mes, ano)
                console.log("Filtrando Apenas O Ano" + ano)
            } else if ((ano !== "Todos") && (mes !== "Todos")) {
                this.buscarDadosFiltro(mes, ano)
                console.log("Filtando os dois " + mes + " " + ano)
            }
        }

        render() {
            return (
                <div>
                    <div className="row mt-4">
                        <div className="col-3 d-flex flex-row justify-content-center align-items-center">
                            <i className="fa fa-filter fa-2x text-danger" /> <h2 className='fw-bold'>Filtro</h2>
                        </div>
                        <div className="col-3">
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
                        <div className="col-3">
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
                                dado={[
                                    { name: "Manutenção Concluída", y: this.state.listarMC },
                                    { name: "Laudo", y: this.state.listarLA },
                                    { name: "Suporte Remoto", y: this.state.listarSR },
                                    { name: "Revisão de Manutenção", y: this.state.listarRM },
                                    { name: "Chamado On-Site", y: this.state.listarCO },
                                    { name: "Revisão de Venda", y: this.state.listarRV },
                                    { name: "Confecção de Cabos", y: this.state.listarCC },
                                    { name: "M/M de Venda", y: this.state.listarMMV },
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
                                    { name: "Confecção de Cabos", y: this.state.listarCC, drilldown: "Conf C" },
                                    { name: "M/M de Venda", y: this.state.listarMMV, drilldown: "M/M de Venda" },
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
                                        { name: "Carregador 3 P", y: this.state.listarTotalCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarTotalCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarTotalCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarTotalCar6 },
                                        { name: "Berço", y: this.state.listarTotalBerco },
                                        { name: "Fonte", y: this.state.listarTotalFonte },
                                        { name: "Cabo C", y: this.state.listarTotalCabos }
                                    ]} />
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }