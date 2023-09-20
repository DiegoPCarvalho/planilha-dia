import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';
import Grafico from '../Graficos/Grafico';
import CardGD from '../Card/CardGD';
import ModalProd from '../Modal/ModalTecnico';

//TECNICOS
import imgDiegoC from '../../Assets/imagensTecnicos/DIEGO CARVALHO.png';
import imgNata from '../../Assets/imagensTecnicos/NATANAEL MILTON.png';
import imgMateus from '../../Assets/imagensTecnicos/MATEUS DOVAL.png';
import imgLucas from '../../Assets/imagensTecnicos/LUCAS FELICIAN.png';
import imgDiogo from '../../Assets/imagensTecnicos/DIOGO SELMINI.png';
import imgGabriel from '../../Assets/imagensTecnicos/GABRIEL KAIQUE.png';
import imgBruno from '../../Assets/imagensTecnicos/BRUNO BEDANI (1).png';
import imgVinicius from '../../Assets/imagensTecnicos/VINICIUS GOMES .png';
import imgDiegoA from '../../Assets/imagensTecnicos/DIEGO ALMEIDA.png';
import imgMarcio from "../../Assets/Imgs/user.png";
import imgLogoIcon from '../../Assets/Imgs/logoIcon.png'
import imgDouglas from '../../Assets/imagensTecnicos/DOUGLAS ALTENFELDER.png';
import imgKleiton from '../../Assets/imagensTecnicos/KLEITON PAULINO.png';



const initialState = {
    imagem: [],

    //cards
    listarTotalEquip: [0],
    listarTotalOS: [0],

    //Servico
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
    listarRR: [0],
    listarRC: [0],
    listarRL: [0],

    //servico Manutenção
    listarMCAvulso: [0],
    listarMCAssai: [0],
    listarMCCEA: [0],
    listarMCB2W: [0],
    listarMCAtacadao: [0],
    listarMCBoticario: [0],
    listarMCLocacao: [0],
    listarMCFriozem: [0],
    listarMCComfrio: [0],

    //servico Laudo
    listarLAAvulso: [0],
    listarLAAssai: [0],
    listarLACEA: [0],
    listarLAB2W: [0],
    listarLAAtacadao: [0],
    listarLABoticario: [0],
    listarLALocacao: [0],
    listarLAFriozem: [0],
    listarLAComfrio: [0],

    //servico Suporte
    listarSRAvulso: [0],
    listarSRAssai: [0],
    listarSRCEA: [0],
    listarSRB2W: [0],
    listarSRAtacadao: [0],
    listarSRBoticario: [0],
    listarSRLocacao: [0],
    listarSRFriozem: [0],
    listarSRComfrio: [0],

    //servico Revisao M
    listarRMAvulso: [0],
    listarRMAssai: [0],
    listarRMCEA: [0],
    listarRMB2W: [0],
    listarRMAtacadao: [0],
    listarRMBoticario: [0],
    listarRMLocacao: [0],
    listarRMFriozem: [0],
    listarRMComfrio: [0],

    //servico CO
    listarCOAvulso: [0],
    listarCOAssai: [0],
    listarCOCEA: [0],
    listarCOB2W: [0],
    listarCOAtacadao: [0],
    listarCOBoticario: [0],
    listarCOLocacao: [0],
    listarCOFriozem: [0],
    listarCOComfrio: [0],

    //servico RV
    listarRVAvulso: [0],
    listarRVAssai: [0],
    listarRVCEA: [0],
    listarRVB2W: [0],
    listarRVAtacadao: [0],
    listarRVBoticario: [0],
    listarRVLocacao: [0],
    listarRVFriozem: [0],
    listarRVComfrio: [0],

    //servico MMV
    listarMMVAvulso: [0],
    listarMMVAssai: [0],
    listarMMVCEA: [0],
    listarMMVB2W: [0],
    listarMMVAtacadao: [0],
    listarMMVBoticario: [0],
    listarMMVLocacao: [0],
    listarMMVFriozem: [0],
    listarMMVComfrio: [0],

    //servico CC
    listarCCAvulso: [0],
    listarCCAssai: [0],
    listarCCCEA: [0],
    listarCCB2W: [0],
    listarCCAtacadao: [0],
    listarCCBoticario: [0],
    listarCCLocacao: [0],
    listarCCFriozem: [0],
    listarCCComfrio: [0],

    //servico RP
    listarRPAvulso: [0],
    listarRPAssai: [0],
    listarRPCEA: [0],
    listarRPB2W: [0],
    listarRPAtacadao: [0],
    listarRPBoticario: [0],
    listarRPLocacao: [0],
    listarRPFriozem: [0],
    listarRPComfrio: [0],

    //servico LP
    listarLPAvulso: [0],
    listarLPAssai: [0],
    listarLPCEA: [0],
    listarLPB2W: [0],
    listarLPAtacadao: [0],
    listarLPBoticario: [0],
    listarLPLocacao: [0],
    listarLPFriozem: [0],
    listarLPComfrio: [0],

    //servico RR
    listarRRAvulso: [0],
    listarRRAssai: [0],
    listarRRCEA: [0],
    listarRRB2W: [0],
    listarRRAtacadao: [0],
    listarRRBoticario: [0],
    listarRRLocacao: [0],
    listarRRFriozem: [0],
    listarRRComfrio: [0],

    //servico RC
    listarRCAvulso: [0],
    listarRCAssai: [0],
    listarRCCEA: [0],
    listarRCB2W: [0],
    listarRCAtacadao: [0],
    listarRCBoticario: [0],
    listarRCLocacao: [0],
    listarRCFriozem: [0],
    listarRCComfrio: [0],

    //servico RL
    listarRLAvulso: [0],
    listarRLAssai: [0],
    listarRLCEA: [0],
    listarRLB2W: [0],
    listarRLAtacadao: [0],
    listarRLBoticario: [0],
    listarRLLocacao: [0],
    listarRLFriozem: [0],
    listarRLComfrio: [0],

    //Tecnicos: 
    listarDiegoC: [0],
    listarNatanael: [0],
    listarMateus: [0],
    listarBruno: [0],
    listarVinicius: [0],
    listarGabriel: [0],
    listarLucas: [0],
    listarDiegoA: [0],
    listarMarlon: [0],
    listarCaua: [0],
    listarAnderson: [0],
    listarAlisson: [0],
    listarCida: [0],
    listarDouglas: [0],
    listarKleiton: [0],

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

    //prodDiaria
    listarDia1: [0],
    listarDia2: [0],
    listarDia3: [0],
    listarDia4: [0],
    listarDia5: [0],
    listarDia6: [0],
    listarDia7: [0],
    listarDia8: [0],
    listarDia9: [0],
    listarDia10: [0],
    listarDia11: [0],
    listarDia12: [0],
    listarDia13: [0],
    listarDia14: [0],
    listarDia15: [0],
    listarDia16: [0],
    listarDia17: [0],
    listarDia18: [0],
    listarDia19: [0],
    listarDia20: [0],
    listarDia21: [0],
    listarDia22: [0],
    listarDia23: [0],
    listarDia24: [0],
    listarDia25: [0],
    listarDia26: [0],
    listarDia27: [0],
    listarDia28: [0],
    listarDia29: [0],
    listarDia30: [0],
    listarDia31: [0],

    //equipamento
    listarTotalCol: [0],
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

    //meta
    listarMetaTecnico: [0],
    listartTotalTecnico: [0],

    //placas
    listarPlacaRec: [0],
    listarPlacaNRec: [0],

    //contrato
    listarAvulso: [0],
    listarAssai: [0],
    listarCEA: [0],
    listarB2W: [0],
    listarAtacadao: [0],
    listarBoticario: [0],
    listarLocacao: [0],
    listarFriozem: [0],
    listarComfrio: [0],
    listarTotalContrato: [0],

    optionsTec: [0]

}

const baseUrl = Url("Geral");
const baseUrl2 = Url("Meta");
const baseUrl3 = Url("LoginUsuario");

export default class DashboardGeral extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.validarFoto("Todos")
        this.buscarDados("Todos", "Todos", "Todos", "Todos")
        this.BuscarTec()
    }

    validarFoto(tecnico) {
        if (tecnico === "Diego Carvalho") {
            return this.setState({
                imagem: imgDiegoC
            })
        }
        if (tecnico === "Natanael Silva Lima") {
            return this.setState({
                imagem: imgNata
            })
        }
        if (tecnico === "Mateus Doval") {
            return this.setState({
                imagem: imgMateus
            })
        }
        if (tecnico === "Lucas Felician") {
            return this.setState({
                imagem: imgLucas
            })
        }
        if (tecnico === "Diogo Selmini") {
            return this.setState({
                imagem: imgDiogo
            })
        }
        if (tecnico === "Gabriel Kaique") {
            return this.setState({
                imagem: imgGabriel
            })
        }
        if (tecnico === "Bruno Bedani") {
            return this.setState({
                imagem: imgBruno
            })
        }
        if (tecnico === "Vinicius Gomes") {
            return this.setState({
                imagem: imgVinicius
            })
        }
        if (tecnico === "Diego Almeida") {
            return this.setState({
                imagem: imgDiegoA
            })
        }
        if (tecnico === "Cida Zani") {
            return this.setState({
                imagem: imgMarcio
            })
        }
        if (tecnico === "Allan Zulino") {
            return this.setState({
                imagem: imgMarcio
            })
        }
        if (tecnico === "Marcio") {
            return this.setState({
                imagem: imgMarcio
            })
        }
        if (tecnico === "Cauã Barbosa") {
            return this.setState({
                imagem: imgMarcio
            })
        }
        if (tecnico === "Douglas Altenfelder") {
            return this.setState({
                imagem: imgDouglas
            })
        }
        if (tecnico === "Kleiton Paulino") {
            return this.setState({
                imagem: imgKleiton
            })
        }
        if (tecnico === "Todos") {
            return this.setState({
                imagem: imgLogoIcon
            })
        }else {
            return this.setState({
                imagem: imgLogoIcon
            })
        }
    }

    filtrarDados() {
        const tecnico = document.getElementById("tecnico").value;
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;


        //#region Geral
        if (tecnico === "Todos") {
            this.validarFoto("Todos")
            //Geral
            if ((ano === "Todos") && (mes === "Todos") && (dia === "Todos")) {
                this.buscarDados("Todos", "Todos", "Todos", "Todos")
            }
            //Ano
            if ((ano !== "Todos") && (mes === "Todos") && (dia === "Todos")) {
                this.buscarDados(tecnico, dia, mes, ano)
            }
            //Mes Ano
            if ((ano !== "Todos") && (mes !== "Todos") && (dia === "Todos")) {
                this.buscarDados(tecnico, dia, mes, ano)
            }
            //Dia Mes Ano
            if ((ano !== "Todos") && (mes !== "Todos") && (dia !== "Todos")) {
                this.buscarDados(tecnico, dia, mes, ano)
            }
        }
        if (tecnico !== "Todos") {
            this.validarFoto(tecnico)

            //Geral Tecnico
            if ((tecnico !== "Todos") && (ano === "Todos") && (mes === "Todos") && (dia === "Todos")) {
                this.buscarDados(tecnico, dia, mes, ano)

            }
            //Ano Tecnico
            if ((tecnico !== "Todos") && (ano !== "Todos") && (mes === "Todos") && (dia === "Todos")) {
                this.buscarDados(tecnico, dia, mes, ano)

            }
            //Mes Ano Tecnico
            if ((tecnico !== "Todos") && (ano !== "Todos") && (mes !== "Todos") && (dia === "Todos")) {
                this.buscarDados(tecnico, dia, mes, ano)
            }
            //Dia Mes Ano Tecnico
            if ((tecnico !== "Todos") && (ano !== "Todos") && (mes !== "Todos") && (dia !== "Todos")) {
                this.buscarDados(tecnico, dia, mes, ano)
                
            }
        }
        //#endregion

    }

    async buscarDados(tecnico, dia, mes, ano) {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        const tabelaMeta = await axios(baseUrl2).then(resp => resp.data)

        try {
            //#region geral
            if (tecnico === "Todos") {

                //#region geral
                if ((tecnico === "Todos") && (dia === "Todos") && (ano === "Todos") && (mes === "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];

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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        var v = `${tabelaNome[i].Tecnico}`;
                        var c = `${tabelaNome[i].Contrato}`;

                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoMC.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoMCAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoMCAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoMCCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoMCB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoMCAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoMCLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoMCLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoMCFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoMCBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoMCComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }

                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoLA.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoLAAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoLAAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoLACEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoLAB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoLAAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLALocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLALocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoLAFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoLABoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoLAComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoSR.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoSRAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoSRAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoSRCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoSRB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoSRAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoSRLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoSRLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoSRFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoSRBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoSRComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoRM.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoRMAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoRMAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoRMCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoRMB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoRMAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRMLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRMLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoRMFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoRMBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoRMComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoCO.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoCOAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoCOAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCOCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoCOB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoCOAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoCOLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoCOLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoCOFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoCOBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoCOComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoRV.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoRVAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoRVAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoRVCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoRVB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoRVAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRVLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRVLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoRVFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoRVBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoRVComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoCC.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoCCAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoCCAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCCCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoCCB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoCCAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoCCLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoCCLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoCCFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoCCBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoCCComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoMMV.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoMMVAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoMMVAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoMMVCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoMMVB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoMMVAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoMMVLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoMMVLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoMMVFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoMMVBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoMMVComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoRP.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Recuperada" === tabelaNome[i].Placa) {
                                dadoPlacaRec.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Não Recuperada" === tabelaNome[i].Placa) {
                                dadoPlacaNRec.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoRPAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoRPAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoRPCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoRPB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoRPAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRPLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRPLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoRPFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoRPBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoRPComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoLP.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoLPAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoLPAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoLPCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoLPB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoLPAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLPLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLPLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoLPFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoLPBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoLPComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                            dadoRR.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoRRAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoRRAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoRRCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoRRB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoRRAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRRLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRRLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoRRFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoRRBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoRRComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                            dadoRC.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoRCAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoRCAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoRCCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoRCB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoRCAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRCLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRCLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoRCFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoRCBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoRCComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                            dadoRL.push({
                                OS: tabelaNome[i].OS
                            })

                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoRLAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoRLAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoRLCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoRLB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoRLAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRLLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoRLLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoRLFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoRLBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoRLComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                        if (v.match(/Diego C/)) {
                            dadoDiegoC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Natanael/)) {
                            dadoNatanael.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Bruno/)) {
                            dadoBruno.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Vinicius/)) {
                            dadoVinicius.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Mateus/)) {
                            dadoMateus.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Gabriel/)) {
                            dadoGabriel.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Marlon/)) {
                            dadoMarlon.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Cauã/)) {
                            dadoCaua.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Diego A/)) {
                            dadoDiegoA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Alisson/)) {
                            dadoAlisson.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Anderson/)) {
                            dadoAnderson.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Cida/)) {
                            dadoCida.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Douglas/)) {
                            dadoDouglas.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (v.match(/Kleiton/)) {
                            dadoKleiton.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (1 === tabelaNome[i].Mes) {
                            dadoJan.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (2 === tabelaNome[i].Mes) {
                            dadoFev.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (3 === tabelaNome[i].Mes) {
                            dadoMar.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (4 === tabelaNome[i].Mes) {
                            dadoAbr.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (5 === tabelaNome[i].Mes) {
                            dadoMai.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (6 === tabelaNome[i].Mes) {
                            dadoJun.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (7 === tabelaNome[i].Mes) {
                            dadoJul.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (8 === tabelaNome[i].Mes) {
                            dadoAgo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (9 === tabelaNome[i].Mes) {
                            dadoSet.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (10 === tabelaNome[i].Mes) {
                            dadoOut.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (11 === tabelaNome[i].Mes) {
                            dadoNov.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (12 === tabelaNome[i].Mes) {
                            dadoDez.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (1 === tabelaNome[i].Dia) {
                            dia1.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (2 === tabelaNome[i].Dia) {
                            dia2.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (3 === tabelaNome[i].Dia) {
                            dia3.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (4 === tabelaNome[i].Dia) {
                            dia4.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (5 === tabelaNome[i].Dia) {
                            dia5.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (6 === tabelaNome[i].Dia) {
                            dia6.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (7 === tabelaNome[i].Dia) {
                            dia7.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (8 === tabelaNome[i].Dia) {
                            dia8.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (9 === tabelaNome[i].Dia) {
                            dia9.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (10 === tabelaNome[i].Dia) {
                            dia10.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (11 === tabelaNome[i].Dia) {
                            dia11.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (12 === tabelaNome[i].Dia) {
                            dia12.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (13 === tabelaNome[i].Dia) {
                            dia13.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (14 === tabelaNome[i].Dia) {
                            dia14.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (15 === tabelaNome[i].Dia) {
                            dia15.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (16 === tabelaNome[i].Dia) {
                            dia16.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (17 === tabelaNome[i].Dia) {
                            dia17.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (18 === tabelaNome[i].Dia) {
                            dia18.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (19 === tabelaNome[i].Dia) {
                            dia19.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (20 === tabelaNome[i].Dia) {
                            dia20.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (21 === tabelaNome[i].Dia) {
                            dia21.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (22 === tabelaNome[i].Dia) {
                            dia22.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (23 === tabelaNome[i].Dia) {
                            dia23.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (24 === tabelaNome[i].Dia) {
                            dia24.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (25 === tabelaNome[i].Dia) {
                            dia25.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (26 === tabelaNome[i].Dia) {
                            dia26.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (27 === tabelaNome[i].Dia) {
                            dia27.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (28 === tabelaNome[i].Dia) {
                            dia28.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (29 === tabelaNome[i].Dia) {
                            dia29.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (30 === tabelaNome[i].Dia) {
                            dia30.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (31 === tabelaNome[i].Dia) {
                            dia31.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoCol.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                            dadoLei.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                            dadoLeiRFID.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                            dadoImp.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                            dadoBusca.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                            dadoCar3.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                            dadoCar4.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                            dadoCar5.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                            dadoCar6.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Bateria" === tabelaNome[i].Equipamento)) {
                            dadoBateria.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if ("Avulso" === tabelaNome[i].Contrato) {
                            dadoAvulso.push({
                                Id: tabelaNome[i].id
                            })
                        }
                        if (c.match(/Assaí/)) {
                            dadoAssai.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/C&A/)) {
                            dadoCEA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/B2W/)) {
                            dadoB2W.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/Atacadão/)) {
                            dadoAtacadao.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/Shopee/)) {
                            dadoShopee.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/Locação/)) {
                            dadoLocacao.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/Locação/)) {
                            dadoLocacao.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/Friozem/)) {
                            dadoFriozem.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/Boticário/)) {
                            dadoBoticario.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (c.match(/Comfrio/)) {
                            dadoComfrio.push({
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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    // let totalShopee = Object.keys(dadoShopee).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,

                        //meta
                        listarMetaTecnico: 0,
                        listartTotalTecnico: 0,

                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,
                    })

                }
                //#endregion
                
                //#region Ano
                if ((tecnico === "Todos") && (dia === "Todos") && (ano !== "Todos") && (mes === "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];

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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        if ((tecnico === "Todos") && (dia === "Todos") && (ano === `${tabelaNome[i].Ano}`) && (mes === "Todos")) {
                            var v = `${tabelaNome[i].Tecnico}`;
                            var c = `${tabelaNome[i].Contrato}`;

                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoMC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }

                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoLA.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLAAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLAAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLACEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLAB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLAAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLAFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLABoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLAComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoSRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoSRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoSRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoSRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoSRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoSRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoSRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoSRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoRM.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRMAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRMAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRMCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRMB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRMAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRMFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRMBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRMComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoCO.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCOAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCOAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCOCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCOB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCOAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCOFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCOBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCOComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoRV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoCC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoMMV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMMVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMMVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMMVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMMVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMMVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMMVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMMVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMMVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoRP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Não Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaNRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoLP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoRR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoRC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoRL.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRLAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRLAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRLCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRLB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRLAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRLFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRLBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRLComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (v.match(/Diego C/)) {
                                dadoDiegoC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Natanael/)) {
                                dadoNatanael.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Bruno/)) {
                                dadoBruno.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Vinicius/)) {
                                dadoVinicius.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Mateus/)) {
                                dadoMateus.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Gabriel/)) {
                                dadoGabriel.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Marlon/)) {
                                dadoMarlon.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cauã/)) {
                                dadoCaua.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Diego A/)) {
                                dadoDiegoA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Alisson/)) {
                                dadoAlisson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Anderson/)) {
                                dadoAnderson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cida/)) {
                                dadoCida.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Douglas/)) {
                                dadoDouglas.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Kleiton/)) {
                                dadoKleiton.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Mes) {
                                dadoJan.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Mes) {
                                dadoFev.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Mes) {
                                dadoMar.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Mes) {
                                dadoAbr.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Mes) {
                                dadoMai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Mes) {
                                dadoJun.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Mes) {
                                dadoJul.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Mes) {
                                dadoAgo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Mes) {
                                dadoSet.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Mes) {
                                dadoOut.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Mes) {
                                dadoNov.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Mes) {
                                dadoDez.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Dia) {
                                dia1.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Dia) {
                                dia2.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Dia) {
                                dia3.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Dia) {
                                dia4.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Dia) {
                                dia5.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Dia) {
                                dia6.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Dia) {
                                dia7.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Dia) {
                                dia8.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Dia) {
                                dia9.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Dia) {
                                dia10.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Dia) {
                                dia11.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Dia) {
                                dia12.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (13 === tabelaNome[i].Dia) {
                                dia13.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (14 === tabelaNome[i].Dia) {
                                dia14.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (15 === tabelaNome[i].Dia) {
                                dia15.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (16 === tabelaNome[i].Dia) {
                                dia16.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (17 === tabelaNome[i].Dia) {
                                dia17.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (18 === tabelaNome[i].Dia) {
                                dia18.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (19 === tabelaNome[i].Dia) {
                                dia19.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (20 === tabelaNome[i].Dia) {
                                dia20.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (21 === tabelaNome[i].Dia) {
                                dia21.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (22 === tabelaNome[i].Dia) {
                                dia22.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (23 === tabelaNome[i].Dia) {
                                dia23.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (24 === tabelaNome[i].Dia) {
                                dia24.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (25 === tabelaNome[i].Dia) {
                                dia25.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (26 === tabelaNome[i].Dia) {
                                dia26.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (27 === tabelaNome[i].Dia) {
                                dia27.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (28 === tabelaNome[i].Dia) {
                                dia28.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (29 === tabelaNome[i].Dia) {
                                dia29.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (30 === tabelaNome[i].Dia) {
                                dia30.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (31 === tabelaNome[i].Dia) {
                                dia31.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Shopee/)) {
                                dadoShopee.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }

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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    // let totalShopee = Object.keys(dadoShopee).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,

                        //meta
                        listarMetaTecnico: 0,
                        listartTotalTecnico: 0,

                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,
                    })
                }
                //#endregion    

                //#region Mes Ano
                if ((tecnico === "Todos") && (dia === "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];

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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        if ((tecnico === "Todos") && (dia === "Todos") && (ano === `${tabelaNome[i].Ano}`) && (mes === `${tabelaNome[i].Mes}`)) {
                            var v = `${tabelaNome[i].Tecnico}`;
                            var c = `${tabelaNome[i].Contrato}`;

                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoMC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }

                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoLA.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLAAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLAAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLACEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLAB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLAAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLAFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLABoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLAComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoSRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoSRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoSRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoSRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoSRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoSRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoSRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoSRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoRM.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRMAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRMAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRMCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRMB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRMAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRMFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRMBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRMComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoCO.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCOAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCOAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCOCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCOB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCOAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCOFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCOBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCOComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoRV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoCC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoMMV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMMVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMMVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMMVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMMVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMMVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMMVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMMVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMMVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoRP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Não Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaNRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoLP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoRR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoRC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoRL.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRLAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRLAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRLCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRLB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRLAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRLFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRLBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRLComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (v.match(/Diego C/)) {
                                dadoDiegoC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Natanael/)) {
                                dadoNatanael.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Bruno/)) {
                                dadoBruno.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Vinicius/)) {
                                dadoVinicius.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Mateus/)) {
                                dadoMateus.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Gabriel/)) {
                                dadoGabriel.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Marlon/)) {
                                dadoMarlon.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cauã/)) {
                                dadoCaua.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Diego A/)) {
                                dadoDiegoA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Alisson/)) {
                                dadoAlisson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Anderson/)) {
                                dadoAnderson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cida/)) {
                                dadoCida.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Douglas/)) {
                                dadoDouglas.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Kleiton/)) {
                                dadoKleiton.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Mes) {
                                dadoJan.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Mes) {
                                dadoFev.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Mes) {
                                dadoMar.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Mes) {
                                dadoAbr.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Mes) {
                                dadoMai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Mes) {
                                dadoJun.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Mes) {
                                dadoJul.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Mes) {
                                dadoAgo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Mes) {
                                dadoSet.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Mes) {
                                dadoOut.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Mes) {
                                dadoNov.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Mes) {
                                dadoDez.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Dia) {
                                dia1.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Dia) {
                                dia2.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Dia) {
                                dia3.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Dia) {
                                dia4.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Dia) {
                                dia5.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Dia) {
                                dia6.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Dia) {
                                dia7.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Dia) {
                                dia8.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Dia) {
                                dia9.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Dia) {
                                dia10.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Dia) {
                                dia11.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Dia) {
                                dia12.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (13 === tabelaNome[i].Dia) {
                                dia13.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (14 === tabelaNome[i].Dia) {
                                dia14.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (15 === tabelaNome[i].Dia) {
                                dia15.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (16 === tabelaNome[i].Dia) {
                                dia16.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (17 === tabelaNome[i].Dia) {
                                dia17.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (18 === tabelaNome[i].Dia) {
                                dia18.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (19 === tabelaNome[i].Dia) {
                                dia19.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (20 === tabelaNome[i].Dia) {
                                dia20.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (21 === tabelaNome[i].Dia) {
                                dia21.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (22 === tabelaNome[i].Dia) {
                                dia22.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (23 === tabelaNome[i].Dia) {
                                dia23.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (24 === tabelaNome[i].Dia) {
                                dia24.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (25 === tabelaNome[i].Dia) {
                                dia25.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (26 === tabelaNome[i].Dia) {
                                dia26.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (27 === tabelaNome[i].Dia) {
                                dia27.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (28 === tabelaNome[i].Dia) {
                                dia28.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (29 === tabelaNome[i].Dia) {
                                dia29.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (30 === tabelaNome[i].Dia) {
                                dia30.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (31 === tabelaNome[i].Dia) {
                                dia31.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Shopee/)) {
                                dadoShopee.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }

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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    // let totalShopee = Object.keys(dadoShopee).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,

                        //meta
                        listarMetaTecnico: 0,
                        listartTotalTecnico: 0,

                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,
                    })
                }
                //#endregion

                //#region Dia Mes Ano
                if ((tecnico === "Todos") && (dia !== "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];

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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        if ((tecnico === "Todos") && (dia === `${tabelaNome[i].Dia}`) && (ano === `${tabelaNome[i].Ano}`) && (mes === `${tabelaNome[i].Mes}`)) {
                            var v = `${tabelaNome[i].Tecnico}`;
                            var c = `${tabelaNome[i].Contrato}`;

                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoMC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }

                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoLA.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLAAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLAAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLACEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLAB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLAAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLAFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLABoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLAComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoSRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoSRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoSRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoSRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoSRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoSRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoSRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoSRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoRM.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRMAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRMAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRMCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRMB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRMAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRMFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRMBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRMComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoCO.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCOAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCOAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCOCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCOB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCOAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCOFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCOBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCOComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoRV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoCC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoMMV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMMVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMMVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMMVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMMVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMMVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMMVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMMVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMMVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoRP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Não Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaNRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoLP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoRR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoRC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoRL.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRLAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRLAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRLCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRLB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRLAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRLFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRLBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRLComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (v.match(/Diego C/)) {
                                dadoDiegoC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Natanael/)) {
                                dadoNatanael.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Bruno/)) {
                                dadoBruno.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Vinicius/)) {
                                dadoVinicius.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Mateus/)) {
                                dadoMateus.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Gabriel/)) {
                                dadoGabriel.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Marlon/)) {
                                dadoMarlon.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cauã/)) {
                                dadoCaua.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Diego A/)) {
                                dadoDiegoA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Alisson/)) {
                                dadoAlisson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Anderson/)) {
                                dadoAnderson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cida/)) {
                                dadoCida.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Douglas/)) {
                                dadoDouglas.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Kleiton/)) {
                                dadoKleiton.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Mes) {
                                dadoJan.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Mes) {
                                dadoFev.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Mes) {
                                dadoMar.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Mes) {
                                dadoAbr.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Mes) {
                                dadoMai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Mes) {
                                dadoJun.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Mes) {
                                dadoJul.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Mes) {
                                dadoAgo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Mes) {
                                dadoSet.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Mes) {
                                dadoOut.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Mes) {
                                dadoNov.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Mes) {
                                dadoDez.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Dia) {
                                dia1.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Dia) {
                                dia2.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Dia) {
                                dia3.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Dia) {
                                dia4.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Dia) {
                                dia5.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Dia) {
                                dia6.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Dia) {
                                dia7.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Dia) {
                                dia8.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Dia) {
                                dia9.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Dia) {
                                dia10.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Dia) {
                                dia11.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Dia) {
                                dia12.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (13 === tabelaNome[i].Dia) {
                                dia13.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (14 === tabelaNome[i].Dia) {
                                dia14.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (15 === tabelaNome[i].Dia) {
                                dia15.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (16 === tabelaNome[i].Dia) {
                                dia16.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (17 === tabelaNome[i].Dia) {
                                dia17.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (18 === tabelaNome[i].Dia) {
                                dia18.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (19 === tabelaNome[i].Dia) {
                                dia19.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (20 === tabelaNome[i].Dia) {
                                dia20.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (21 === tabelaNome[i].Dia) {
                                dia21.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (22 === tabelaNome[i].Dia) {
                                dia22.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (23 === tabelaNome[i].Dia) {
                                dia23.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (24 === tabelaNome[i].Dia) {
                                dia24.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (25 === tabelaNome[i].Dia) {
                                dia25.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (26 === tabelaNome[i].Dia) {
                                dia26.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (27 === tabelaNome[i].Dia) {
                                dia27.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (28 === tabelaNome[i].Dia) {
                                dia28.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (29 === tabelaNome[i].Dia) {
                                dia29.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (30 === tabelaNome[i].Dia) {
                                dia30.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (31 === tabelaNome[i].Dia) {
                                dia31.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Shopee/)) {
                                dadoShopee.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }

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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    // let totalShopee = Object.keys(dadoShopee).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,

                        //meta
                        listarMetaTecnico: 0,
                        listartTotalTecnico: 0,

                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,
                    })
                }
            }
            //#endregion


            //#endregion


            //#region Geral Tecnico
            if (tecnico !== "Todos") {

                //#region geral
                if ((tecnico !== "Todos") && (dia === "Todos") && (ano === "Todos") && (mes === "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];

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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    //variavel
                    let metaJan = [];
                    let metaFev = [];
                    let metaMar = [];
                    let metaAbr = [];
                    let metaMai = [];
                    let metaJun = [];
                    let metaJul = [];
                    let metaAgo = [];
                    let metaSet = [];
                    let metaOut = [];
                    let metaNov = [];
                    let metaDez = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (ano === "Todos") && (mes === "Todos")) {
                            var v = `${tabelaNome[i].Tecnico}`;
                            var c = `${tabelaNome[i].Contrato}`;

                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoMC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }

                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoLA.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLAAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLAAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLACEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLAB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLAAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLAFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLABoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLAComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoSRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoSRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoSRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoSRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoSRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoSRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoSRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoSRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoRM.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRMAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRMAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRMCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRMB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRMAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRMFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRMBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRMComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoCO.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCOAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCOAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCOCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCOB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCOAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCOFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCOBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCOComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoRV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoCC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoMMV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMMVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMMVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMMVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMMVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMMVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMMVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMMVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMMVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoRP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Não Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaNRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoLP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoRR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoRC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoRL.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRLAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRLAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRLCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRLB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRLAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRLFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRLBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRLComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (v.match(/Diego C/)) {
                                dadoDiegoC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Natanael/)) {
                                dadoNatanael.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Bruno/)) {
                                dadoBruno.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Vinicius/)) {
                                dadoVinicius.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Mateus/)) {
                                dadoMateus.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Gabriel/)) {
                                dadoGabriel.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Marlon/)) {
                                dadoMarlon.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cauã/)) {
                                dadoCaua.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Diego A/)) {
                                dadoDiegoA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Alisson/)) {
                                dadoAlisson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Anderson/)) {
                                dadoAnderson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cida/)) {
                                dadoCida.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Douglas/)) {
                                dadoDouglas.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Kleiton/)) {
                                dadoKleiton.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Mes) {
                                dadoJan.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Mes) {
                                dadoFev.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Mes) {
                                dadoMar.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Mes) {
                                dadoAbr.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Mes) {
                                dadoMai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Mes) {
                                dadoJun.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Mes) {
                                dadoJul.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Mes) {
                                dadoAgo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Mes) {
                                dadoSet.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Mes) {
                                dadoOut.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Mes) {
                                dadoNov.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Mes) {
                                dadoDez.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Dia) {
                                dia1.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Dia) {
                                dia2.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Dia) {
                                dia3.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Dia) {
                                dia4.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Dia) {
                                dia5.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Dia) {
                                dia6.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Dia) {
                                dia7.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Dia) {
                                dia8.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Dia) {
                                dia9.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Dia) {
                                dia10.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Dia) {
                                dia11.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Dia) {
                                dia12.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (13 === tabelaNome[i].Dia) {
                                dia13.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (14 === tabelaNome[i].Dia) {
                                dia14.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (15 === tabelaNome[i].Dia) {
                                dia15.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (16 === tabelaNome[i].Dia) {
                                dia16.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (17 === tabelaNome[i].Dia) {
                                dia17.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (18 === tabelaNome[i].Dia) {
                                dia18.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (19 === tabelaNome[i].Dia) {
                                dia19.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (20 === tabelaNome[i].Dia) {
                                dia20.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (21 === tabelaNome[i].Dia) {
                                dia21.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (22 === tabelaNome[i].Dia) {
                                dia22.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (23 === tabelaNome[i].Dia) {
                                dia23.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (24 === tabelaNome[i].Dia) {
                                dia24.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (25 === tabelaNome[i].Dia) {
                                dia25.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (26 === tabelaNome[i].Dia) {
                                dia26.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (27 === tabelaNome[i].Dia) {
                                dia27.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (28 === tabelaNome[i].Dia) {
                                dia28.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (29 === tabelaNome[i].Dia) {
                                dia29.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (30 === tabelaNome[i].Dia) {
                                dia30.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (31 === tabelaNome[i].Dia) {
                                dia31.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Shopee/)) {
                                dadoShopee.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                    }

                    for (let i = 0; i < tabelaMeta.length; i++) {
                        if (tecnico === tabelaMeta[i].Tecnico) {
                            if (1 === tabelaMeta[i].Mes) {
                                metaJan.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (2 === tabelaMeta[i].Mes) {
                                metaFev.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (3 === tabelaMeta[i].Mes) {
                                metaMar.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (4 === tabelaMeta[i].Mes) {
                                metaAbr.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (5 === tabelaMeta[i].Mes) {
                                metaMai.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (6 === tabelaMeta[i].Mes) {
                                metaJun.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (7 === tabelaMeta[i].Mes) {
                                metaJul.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (8 === tabelaMeta[i].Mes) {
                                metaAgo.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (9 === tabelaMeta[i].Mes) {
                                metaSet.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (10 === tabelaMeta[i].Mes) {
                                metaOut.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (11 === tabelaMeta[i].Mes) {
                                metaNov.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (12 === tabelaMeta[i].Mes) {
                                metaDez.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoSR, dadoCO, dadoMMV, dadoRV, dadoRC)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario

                    let mJan = Object.assign(metaJan);
                    let mFev = Object.assign(metaFev);
                    let mMar = Object.assign(metaMar);
                    let mAbr = Object.assign(metaAbr);
                    let mMai = Object.assign(metaMai);
                    let mJun = Object.assign(metaJun);
                    let mJul = Object.assign(metaJul);
                    let mAgo = Object.assign(metaAgo);
                    let mSet = Object.assign(metaSet);
                    let mOut = Object.assign(metaOut);
                    let mNov = Object.assign(metaNov);
                    let mDez = Object.assign(metaDez);

                    let totalMeta = parseInt(mJan.length > 0 ? mJan[0].M : 0) + parseInt(mFev.length > 0 ? mFev[0].M : 0) +
                        parseInt(mMar.length > 0 ? mMar[0].M : 0) + parseInt(mAbr.length > 0 ? mAbr[0].M : 0) + parseInt(mMai.length > 0 ? mMai[0].M : 0) +
                        parseInt(mJun.length > 0 ? mJun[0].M : 0) + parseInt(mJul.length > 0 ? mJul[0].M : 0) + parseInt(mAgo.length > 0 ? mAgo[0].M : 0) +
                        parseInt(mSet.length > 0 ? mSet[0].M : 0) + parseInt(mOut.length > 0 ? mOut[0].M : 0) + parseInt(mNov.length > 0 ? mNov[0].M : 0) +
                        parseInt(mDez.length > 0 ? mDez[0].M : 0)


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,


                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,

                        //meta
                        listarMetaTecnico: totalMeta,

                        //total tecnico
                        listarTotalTecnico: totalEquip
                    })
                }
                //#endregion

                //#region Ano
                if ((tecnico !== "Todos") && (dia === "Todos") && (ano !== "Todos") && (mes === "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];

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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    //variavel
                    let metaJan = [];
                    let metaFev = [];
                    let metaMar = [];
                    let metaAbr = [];
                    let metaMai = [];
                    let metaJun = [];
                    let metaJul = [];
                    let metaAgo = [];
                    let metaSet = [];
                    let metaOut = [];
                    let metaNov = [];
                    let metaDez = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (ano === `${tabelaNome[i].Ano}`) && (mes === "Todos")) {
                            var v = `${tabelaNome[i].Tecnico}`;
                            var c = `${tabelaNome[i].Contrato}`;

                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoMC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }

                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoLA.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLAAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLAAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLACEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLAB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLAAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLAFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLABoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLAComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoSRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoSRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoSRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoSRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoSRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoSRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoSRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoSRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoRM.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRMAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRMAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRMCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRMB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRMAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRMFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRMBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRMComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoCO.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCOAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCOAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCOCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCOB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCOAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCOFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCOBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCOComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoRV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoCC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoMMV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMMVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMMVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMMVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMMVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMMVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMMVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMMVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMMVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoRP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Não Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaNRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoLP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoRR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoRC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoRL.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRLAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRLAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRLCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRLB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRLAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRLFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRLBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRLComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (v.match(/Diego C/)) {
                                dadoDiegoC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Natanael/)) {
                                dadoNatanael.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Bruno/)) {
                                dadoBruno.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Vinicius/)) {
                                dadoVinicius.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Mateus/)) {
                                dadoMateus.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Gabriel/)) {
                                dadoGabriel.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Marlon/)) {
                                dadoMarlon.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cauã/)) {
                                dadoCaua.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Diego A/)) {
                                dadoDiegoA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Alisson/)) {
                                dadoAlisson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Anderson/)) {
                                dadoAnderson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cida/)) {
                                dadoCida.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Douglas/)) {
                                dadoDouglas.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Kleiton/)) {
                                dadoKleiton.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Mes) {
                                dadoJan.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Mes) {
                                dadoFev.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Mes) {
                                dadoMar.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Mes) {
                                dadoAbr.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Mes) {
                                dadoMai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Mes) {
                                dadoJun.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Mes) {
                                dadoJul.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Mes) {
                                dadoAgo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Mes) {
                                dadoSet.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Mes) {
                                dadoOut.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Mes) {
                                dadoNov.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Mes) {
                                dadoDez.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Dia) {
                                dia1.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Dia) {
                                dia2.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Dia) {
                                dia3.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Dia) {
                                dia4.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Dia) {
                                dia5.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Dia) {
                                dia6.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Dia) {
                                dia7.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Dia) {
                                dia8.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Dia) {
                                dia9.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Dia) {
                                dia10.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Dia) {
                                dia11.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Dia) {
                                dia12.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (13 === tabelaNome[i].Dia) {
                                dia13.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (14 === tabelaNome[i].Dia) {
                                dia14.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (15 === tabelaNome[i].Dia) {
                                dia15.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (16 === tabelaNome[i].Dia) {
                                dia16.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (17 === tabelaNome[i].Dia) {
                                dia17.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (18 === tabelaNome[i].Dia) {
                                dia18.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (19 === tabelaNome[i].Dia) {
                                dia19.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (20 === tabelaNome[i].Dia) {
                                dia20.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (21 === tabelaNome[i].Dia) {
                                dia21.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (22 === tabelaNome[i].Dia) {
                                dia22.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (23 === tabelaNome[i].Dia) {
                                dia23.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (24 === tabelaNome[i].Dia) {
                                dia24.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (25 === tabelaNome[i].Dia) {
                                dia25.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (26 === tabelaNome[i].Dia) {
                                dia26.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (27 === tabelaNome[i].Dia) {
                                dia27.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (28 === tabelaNome[i].Dia) {
                                dia28.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (29 === tabelaNome[i].Dia) {
                                dia29.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (30 === tabelaNome[i].Dia) {
                                dia30.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (31 === tabelaNome[i].Dia) {
                                dia31.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Shopee/)) {
                                dadoShopee.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                    }

                    for (let i = 0; i < tabelaMeta.length; i++) {
                        if ((tecnico === tabelaMeta[i].Tecnico) && (ano === `${tabelaMeta[i].Ano}`)) {
                            if (1 === tabelaMeta[i].Mes) {
                                metaJan.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (2 === tabelaMeta[i].Mes) {
                                metaFev.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (3 === tabelaMeta[i].Mes) {
                                metaMar.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (4 === tabelaMeta[i].Mes) {
                                metaAbr.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (5 === tabelaMeta[i].Mes) {
                                metaMai.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (6 === tabelaMeta[i].Mes) {
                                metaJun.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (7 === tabelaMeta[i].Mes) {
                                metaJul.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (8 === tabelaMeta[i].Mes) {
                                metaAgo.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (9 === tabelaMeta[i].Mes) {
                                metaSet.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (10 === tabelaMeta[i].Mes) {
                                metaOut.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (11 === tabelaMeta[i].Mes) {
                                metaNov.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (12 === tabelaMeta[i].Mes) {
                                metaDez.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario

                    let mJan = Object.assign(metaJan);
                    let mFev = Object.assign(metaFev);
                    let mMar = Object.assign(metaMar);
                    let mAbr = Object.assign(metaAbr);
                    let mMai = Object.assign(metaMai);
                    let mJun = Object.assign(metaJun);
                    let mJul = Object.assign(metaJul);
                    let mAgo = Object.assign(metaAgo);
                    let mSet = Object.assign(metaSet);
                    let mOut = Object.assign(metaOut);
                    let mNov = Object.assign(metaNov);
                    let mDez = Object.assign(metaDez);

                    let totalMeta = parseInt(mJan.length > 0 ? mJan[0].M : 0) + parseInt(mFev.length > 0 ? mFev[0].M : 0) +
                        parseInt(mMar.length > 0 ? mMar[0].M : 0) + parseInt(mAbr.length > 0 ? mAbr[0].M : 0) + parseInt(mMai.length > 0 ? mMai[0].M : 0) +
                        parseInt(mJun.length > 0 ? mJun[0].M : 0) + parseInt(mJul.length > 0 ? mJul[0].M : 0) + parseInt(mAgo.length > 0 ? mAgo[0].M : 0) +
                        parseInt(mSet.length > 0 ? mSet[0].M : 0) + parseInt(mOut.length > 0 ? mOut[0].M : 0) + parseInt(mNov.length > 0 ? mNov[0].M : 0) +
                        parseInt(mDez.length > 0 ? mDez[0].M : 0)


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,


                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,

                        //meta
                        listarMetaTecnico: totalMeta,

                        //total tecnico
                        listarTotalTecnico: totalEquip
                    })
                }
                //#endregion

                //#region Mes Ano
                if ((tecnico !== "Todos") && (dia === "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];
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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    //variavel
                    let metaJan = [];
                    let metaFev = [];
                    let metaMar = [];
                    let metaAbr = [];
                    let metaMai = [];
                    let metaJun = [];
                    let metaJul = [];
                    let metaAgo = [];
                    let metaSet = [];
                    let metaOut = [];
                    let metaNov = [];
                    let metaDez = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (ano === `${tabelaNome[i].Ano}`) && (mes === `${tabelaNome[i].Mes}`)) {
                            var v = `${tabelaNome[i].Tecnico}`;
                            var c = `${tabelaNome[i].Contrato}`;

                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoMC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }

                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoLA.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLAAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLAAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLACEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLAB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLAAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLAFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLABoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLAComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoSRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoSRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoSRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoSRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoSRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoSRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoSRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoSRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoRM.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRMAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRMAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRMCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRMB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRMAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRMFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRMBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRMComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoCO.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCOAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCOAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCOCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCOB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCOAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCOFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCOBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCOComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoRV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoCC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoMMV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMMVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMMVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMMVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMMVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMMVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMMVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMMVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMMVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoRP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Não Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaNRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoLP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoRR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoRC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoRL.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRLAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRLAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRLCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRLB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRLAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRLFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRLBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRLComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (v.match(/Diego C/)) {
                                dadoDiegoC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Natanael/)) {
                                dadoNatanael.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Bruno/)) {
                                dadoBruno.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Vinicius/)) {
                                dadoVinicius.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Mateus/)) {
                                dadoMateus.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Gabriel/)) {
                                dadoGabriel.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Marlon/)) {
                                dadoMarlon.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cauã/)) {
                                dadoCaua.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Diego A/)) {
                                dadoDiegoA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Alisson/)) {
                                dadoAlisson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Anderson/)) {
                                dadoAnderson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cida/)) {
                                dadoCida.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Douglas/)) {
                                dadoDouglas.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Kleiton/)) {
                                dadoKleiton.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Mes) {
                                dadoJan.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Mes) {
                                dadoFev.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Mes) {
                                dadoMar.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Mes) {
                                dadoAbr.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Mes) {
                                dadoMai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Mes) {
                                dadoJun.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Mes) {
                                dadoJul.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Mes) {
                                dadoAgo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Mes) {
                                dadoSet.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Mes) {
                                dadoOut.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Mes) {
                                dadoNov.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Mes) {
                                dadoDez.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Dia) {
                                dia1.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Dia) {
                                dia2.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Dia) {
                                dia3.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Dia) {
                                dia4.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Dia) {
                                dia5.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Dia) {
                                dia6.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Dia) {
                                dia7.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Dia) {
                                dia8.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Dia) {
                                dia9.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Dia) {
                                dia10.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Dia) {
                                dia11.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Dia) {
                                dia12.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (13 === tabelaNome[i].Dia) {
                                dia13.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (14 === tabelaNome[i].Dia) {
                                dia14.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (15 === tabelaNome[i].Dia) {
                                dia15.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (16 === tabelaNome[i].Dia) {
                                dia16.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (17 === tabelaNome[i].Dia) {
                                dia17.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (18 === tabelaNome[i].Dia) {
                                dia18.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (19 === tabelaNome[i].Dia) {
                                dia19.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (20 === tabelaNome[i].Dia) {
                                dia20.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (21 === tabelaNome[i].Dia) {
                                dia21.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (22 === tabelaNome[i].Dia) {
                                dia22.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (23 === tabelaNome[i].Dia) {
                                dia23.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (24 === tabelaNome[i].Dia) {
                                dia24.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (25 === tabelaNome[i].Dia) {
                                dia25.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (26 === tabelaNome[i].Dia) {
                                dia26.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (27 === tabelaNome[i].Dia) {
                                dia27.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (28 === tabelaNome[i].Dia) {
                                dia28.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (29 === tabelaNome[i].Dia) {
                                dia29.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (30 === tabelaNome[i].Dia) {
                                dia30.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (31 === tabelaNome[i].Dia) {
                                dia31.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Shopee/)) {
                                dadoShopee.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                    }

                    for (let i = 0; i < tabelaMeta.length; i++) {
                        if ((tecnico === tabelaMeta[i].Tecnico) && (ano === `${tabelaMeta[i].Ano}`) && (mes === `${tabelaMeta[i].Mes}`)) {
                            if (1 === tabelaMeta[i].Mes) {
                                metaJan.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (2 === tabelaMeta[i].Mes) {
                                metaFev.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (3 === tabelaMeta[i].Mes) {
                                metaMar.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (4 === tabelaMeta[i].Mes) {
                                metaAbr.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (5 === tabelaMeta[i].Mes) {
                                metaMai.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (6 === tabelaMeta[i].Mes) {
                                metaJun.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (7 === tabelaMeta[i].Mes) {
                                metaJul.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (8 === tabelaMeta[i].Mes) {
                                metaAgo.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (9 === tabelaMeta[i].Mes) {
                                metaSet.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (10 === tabelaMeta[i].Mes) {
                                metaOut.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (11 === tabelaMeta[i].Mes) {
                                metaNov.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (12 === tabelaMeta[i].Mes) {
                                metaDez.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario

                    let mJan = Object.assign(metaJan);
                    let mFev = Object.assign(metaFev);
                    let mMar = Object.assign(metaMar);
                    let mAbr = Object.assign(metaAbr);
                    let mMai = Object.assign(metaMai);
                    let mJun = Object.assign(metaJun);
                    let mJul = Object.assign(metaJul);
                    let mAgo = Object.assign(metaAgo);
                    let mSet = Object.assign(metaSet);
                    let mOut = Object.assign(metaOut);
                    let mNov = Object.assign(metaNov);
                    let mDez = Object.assign(metaDez);

                    let totalMeta = parseInt(mJan.length > 0 ? mJan[0].M : 0) + parseInt(mFev.length > 0 ? mFev[0].M : 0) +
                        parseInt(mMar.length > 0 ? mMar[0].M : 0) + parseInt(mAbr.length > 0 ? mAbr[0].M : 0) + parseInt(mMai.length > 0 ? mMai[0].M : 0) +
                        parseInt(mJun.length > 0 ? mJun[0].M : 0) + parseInt(mJul.length > 0 ? mJul[0].M : 0) + parseInt(mAgo.length > 0 ? mAgo[0].M : 0) +
                        parseInt(mSet.length > 0 ? mSet[0].M : 0) + parseInt(mOut.length > 0 ? mOut[0].M : 0) + parseInt(mNov.length > 0 ? mNov[0].M : 0) +
                        parseInt(mDez.length > 0 ? mDez[0].M : 0)


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,


                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,

                        //meta
                        listarMetaTecnico: totalMeta,

                        //total tecnico
                        listarTotalTecnico: totalEquip
                    })
                }
                //#endregion


                //#region Dia Mes Ano
                if ((tecnico !== "Todos") && (dia !== "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
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
                    let dadoRR = [];
                    let dadoRC = [];
                    let dadoRL = [];

                    //variavel manutenção
                    let dadoMCAvulso = [];
                    let dadoMCAssai = [];
                    let dadoMCCEA = [];
                    let dadoMCB2W = [];
                    let dadoMCAtacadao = [];
                    let dadoMCBoticario = [];
                    let dadoMCLocacao = [];
                    let dadoMCFriozem = [];
                    let dadoMCComfrio = [];

                    //variavel laudo
                    let dadoLAAvulso = [];
                    let dadoLAAssai = [];
                    let dadoLACEA = [];
                    let dadoLAB2W = [];
                    let dadoLAAtacadao = [];
                    let dadoLABoticario = [];
                    let dadoLALocacao = [];
                    let dadoLAFriozem = [];
                    let dadoLAComfrio = [];

                    //variavel suporte
                    let dadoSRAvulso = [];
                    let dadoSRAssai = [];
                    let dadoSRCEA = [];
                    let dadoSRB2W = [];
                    let dadoSRAtacadao = [];
                    let dadoSRBoticario = [];
                    let dadoSRLocacao = [];
                    let dadoSRFriozem = [];
                    let dadoSRComfrio = [];

                    //variavel RM
                    let dadoRMAvulso = [];
                    let dadoRMAssai = [];
                    let dadoRMCEA = [];
                    let dadoRMB2W = [];
                    let dadoRMAtacadao = [];
                    let dadoRMBoticario = [];
                    let dadoRMLocacao = [];
                    let dadoRMFriozem = [];
                    let dadoRMComfrio = [];

                    //variavel CO
                    let dadoCOAvulso = [];
                    let dadoCOAssai = [];
                    let dadoCOCEA = [];
                    let dadoCOB2W = [];
                    let dadoCOAtacadao = [];
                    let dadoCOBoticario = [];
                    let dadoCOLocacao = [];
                    let dadoCOFriozem = [];
                    let dadoCOComfrio = [];

                    //variavel RV
                    let dadoRVAvulso = [];
                    let dadoRVAssai = [];
                    let dadoRVCEA = [];
                    let dadoRVB2W = [];
                    let dadoRVAtacadao = [];
                    let dadoRVBoticario = [];
                    let dadoRVLocacao = [];
                    let dadoRVFriozem = [];
                    let dadoRVComfrio = [];

                    //variavel MMV
                    let dadoMMVAvulso = [];
                    let dadoMMVAssai = [];
                    let dadoMMVCEA = [];
                    let dadoMMVB2W = [];
                    let dadoMMVAtacadao = [];
                    let dadoMMVBoticario = [];
                    let dadoMMVLocacao = [];
                    let dadoMMVFriozem = [];
                    let dadoMMVComfrio = [];

                    //variavel CC
                    let dadoCCAvulso = [];
                    let dadoCCAssai = [];
                    let dadoCCCEA = [];
                    let dadoCCB2W = [];
                    let dadoCCAtacadao = [];
                    let dadoCCBoticario = [];
                    let dadoCCLocacao = [];
                    let dadoCCFriozem = [];
                    let dadoCCComfrio = [];

                    //variavel RP
                    let dadoRPAvulso = [];
                    let dadoRPAssai = [];
                    let dadoRPCEA = [];
                    let dadoRPB2W = [];
                    let dadoRPAtacadao = [];
                    let dadoRPBoticario = [];
                    let dadoRPLocacao = [];
                    let dadoRPFriozem = [];
                    let dadoRPComfrio = [];

                    //variavel LP
                    let dadoLPAvulso = [];
                    let dadoLPAssai = [];
                    let dadoLPCEA = [];
                    let dadoLPB2W = [];
                    let dadoLPAtacadao = [];
                    let dadoLPBoticario = [];
                    let dadoLPLocacao = [];
                    let dadoLPFriozem = [];
                    let dadoLPComfrio = [];

                    //variavel RR
                    let dadoRRAvulso = [];
                    let dadoRRAssai = [];
                    let dadoRRCEA = [];
                    let dadoRRB2W = [];
                    let dadoRRAtacadao = [];
                    let dadoRRBoticario = [];
                    let dadoRRLocacao = [];
                    let dadoRRFriozem = [];
                    let dadoRRComfrio = [];

                    //variavel RC
                    let dadoRCAvulso = [];
                    let dadoRCAssai = [];
                    let dadoRCCEA = [];
                    let dadoRCB2W = [];
                    let dadoRCAtacadao = [];
                    let dadoRCBoticario = [];
                    let dadoRCLocacao = [];
                    let dadoRCFriozem = [];
                    let dadoRCComfrio = [];

                    //variavel RL
                    let dadoRLAvulso = [];
                    let dadoRLAssai = [];
                    let dadoRLCEA = [];
                    let dadoRLB2W = [];
                    let dadoRLAtacadao = [];
                    let dadoRLBoticario = [];
                    let dadoRLLocacao = [];
                    let dadoRLFriozem = [];
                    let dadoRLComfrio = [];

                    //variavel tecnico
                    let dadoDiegoC = [];
                    let dadoNatanael = [];
                    let dadoBruno = [];
                    let dadoVinicius = [];
                    let dadoMateus = [];
                    let dadoGabriel = [];
                    let dadoDiegoA = [];
                    let dadoMarlon = [];
                    let dadoCaua = [];
                    let dadoAnderson = [];
                    let dadoAlisson = [];
                    let dadoCida = [];
                    let dadoDouglas = [];
                    let dadoKleiton = [];

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

                    //variavel diario
                    let dia1 = [];
                    let dia2 = [];
                    let dia3 = [];
                    let dia4 = [];
                    let dia5 = [];
                    let dia6 = [];
                    let dia7 = [];
                    let dia8 = [];
                    let dia9 = [];
                    let dia10 = [];
                    let dia11 = [];
                    let dia12 = [];
                    let dia13 = [];
                    let dia14 = [];
                    let dia15 = [];
                    let dia16 = [];
                    let dia17 = [];
                    let dia18 = [];
                    let dia19 = [];
                    let dia20 = [];
                    let dia21 = [];
                    let dia22 = [];
                    let dia23 = [];
                    let dia24 = [];
                    let dia25 = [];
                    let dia26 = [];
                    let dia27 = [];
                    let dia28 = [];
                    let dia29 = [];
                    let dia30 = [];
                    let dia31 = [];

                    //dados por equipamento
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

                    //placas
                    let dadoPlacaRec = [];
                    let dadoPlacaNRec = [];

                    //contratos
                    //variavel contrato
                    let dadoAssai = [];
                    let dadoAvulso = [];
                    let dadoCEA = [];
                    let dadoB2W = [];
                    let dadoAtacadao = [];
                    let dadoShopee = [];
                    let dadoBoticario = [];
                    let dadoLocacao = [];
                    let dadoFriozem = [];
                    let dadoComfrio = [];

                    //variavel
                    let metaJan = [];
                    let metaFev = [];
                    let metaMar = [];
                    let metaAbr = [];
                    let metaMai = [];
                    let metaJun = [];
                    let metaJul = [];
                    let metaAgo = [];
                    let metaSet = [];
                    let metaOut = [];
                    let metaNov = [];
                    let metaDez = [];

                    for (let i = 0; i < tabelaNome.length; i++) {

                        if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (ano === `${tabelaNome[i].Ano}`) && (mes === `${tabelaNome[i].Mes}`)) {
                            var v = `${tabelaNome[i].Tecnico}`;
                            var c = `${tabelaNome[i].Contrato}`;

                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoMC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }

                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoLA.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLAAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLAAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLACEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLAB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLAAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLALocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLAFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLABoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLAComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoSR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoSRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoSRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoSRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoSRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoSRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoSRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoSRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoSRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoSRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoRM.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRMAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRMAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRMCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRMB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRMAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRMLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRMFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRMBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRMComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoCO.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCOAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCOAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCOCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCOB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCOAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCOLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCOFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCOBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCOComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoRV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoCC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoCCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoCCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoCCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoCCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoCCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoCCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoCCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoCCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoCCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoMMV.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoMMVAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoMMVAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoMMVCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoMMVB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoMMVAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoMMVLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoMMVFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoMMVBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoMMVComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoRP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Não Recuperada" === tabelaNome[i].Placa) {
                                    dadoPlacaNRec.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoLP.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoLPAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoLPAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoLPCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoLPB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoLPAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoLPLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoLPFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoLPBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoLPComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoRR.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRRAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRRAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRRCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRRB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRRAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRRLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRRFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRRBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRRComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoRC.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRCAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRCAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRCCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRCB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRCAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRCLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRCFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRCBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRCComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoRL.push({
                                    OS: tabelaNome[i].OS
                                })

                                if ("Avulso" === tabelaNome[i].Contrato) {
                                    dadoRLAvulso.push({
                                        Id: tabelaNome[i].id
                                    })
                                }
                                if (c.match(/Assaí/)) {
                                    dadoRLAssai.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/C&A/)) {
                                    dadoRLCEA.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/B2W/)) {
                                    dadoRLB2W.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Atacadão/)) {
                                    dadoRLAtacadao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Locação/)) {
                                    dadoRLLocacao.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Friozem/)) {
                                    dadoRLFriozem.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Boticário/)) {
                                    dadoRLBoticario.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                                if (c.match(/Comfrio/)) {
                                    dadoRLComfrio.push({
                                        OS: tabelaNome[i].OS
                                    })
                                }
                            }
                            if (v.match(/Diego C/)) {
                                dadoDiegoC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Natanael/)) {
                                dadoNatanael.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Bruno/)) {
                                dadoBruno.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Vinicius/)) {
                                dadoVinicius.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Mateus/)) {
                                dadoMateus.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Gabriel/)) {
                                dadoGabriel.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Marlon/)) {
                                dadoMarlon.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cauã/)) {
                                dadoCaua.push({ 
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Diego A/)) {
                                dadoDiegoA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Alisson/)) {
                                dadoAlisson.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Anderson/)) {
                                dadoAnderson.push({

                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Cida/)) {
                                dadoCida.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Douglas/)) {
                                dadoDouglas.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (v.match(/Kleiton/)) {
                                dadoKleiton.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Mes) {
                                dadoJan.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Mes) {
                                dadoFev.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Mes) {
                                dadoMar.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Mes) {
                                dadoAbr.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Mes) {
                                dadoMai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Mes) {
                                dadoJun.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Mes) {
                                dadoJul.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Mes) {
                                dadoAgo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Mes) {
                                dadoSet.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Mes) {
                                dadoOut.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Mes) {
                                dadoNov.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Mes) {
                                dadoDez.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (1 === tabelaNome[i].Dia) {
                                dia1.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (2 === tabelaNome[i].Dia) {
                                dia2.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (3 === tabelaNome[i].Dia) {
                                dia3.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (4 === tabelaNome[i].Dia) {
                                dia4.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (5 === tabelaNome[i].Dia) {
                                dia5.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (6 === tabelaNome[i].Dia) {
                                dia6.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (7 === tabelaNome[i].Dia) {
                                dia7.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (8 === tabelaNome[i].Dia) {
                                dia8.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (9 === tabelaNome[i].Dia) {
                                dia9.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (10 === tabelaNome[i].Dia) {
                                dia10.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (11 === tabelaNome[i].Dia) {
                                dia11.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (12 === tabelaNome[i].Dia) {
                                dia12.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (13 === tabelaNome[i].Dia) {
                                dia13.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (14 === tabelaNome[i].Dia) {
                                dia14.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (15 === tabelaNome[i].Dia) {
                                dia15.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (16 === tabelaNome[i].Dia) {
                                dia16.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (17 === tabelaNome[i].Dia) {
                                dia17.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (18 === tabelaNome[i].Dia) {
                                dia18.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (19 === tabelaNome[i].Dia) {
                                dia19.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (20 === tabelaNome[i].Dia) {
                                dia20.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (21 === tabelaNome[i].Dia) {
                                dia21.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (22 === tabelaNome[i].Dia) {
                                dia22.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (23 === tabelaNome[i].Dia) {
                                dia23.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (24 === tabelaNome[i].Dia) {
                                dia24.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (25 === tabelaNome[i].Dia) {
                                dia25.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (26 === tabelaNome[i].Dia) {
                                dia26.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (27 === tabelaNome[i].Dia) {
                                dia27.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (28 === tabelaNome[i].Dia) {
                                dia28.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (29 === tabelaNome[i].Dia) {
                                dia29.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (30 === tabelaNome[i].Dia) {
                                dia30.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (31 === tabelaNome[i].Dia) {
                                dia31.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoCol.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
                                dadoLei.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Leitor de RFID" === tabelaNome[i].Equipamento)) {
                                dadoLeiRFID.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
                                dadoImp.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
                                dadoBusca.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar3.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar4.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar5.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
                                dadoCar6.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                                dadoBerco.push({
                                    OS: tabelaNome[i].OS
                                })
                            } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                                dadoCabo.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Bateria" === tabelaNome[i].Equipamento)) {
                                dadoBateria.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if ("Avulso" === tabelaNome[i].Contrato) {
                                dadoAvulso.push({
                                    Id: tabelaNome[i].id
                                })
                            }
                            if (c.match(/Assaí/)) {
                                dadoAssai.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/C&A/)) {
                                dadoCEA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/B2W/)) {
                                dadoB2W.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Atacadão/)) {
                                dadoAtacadao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Shopee/)) {
                                dadoShopee.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Locação/)) {
                                dadoLocacao.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Friozem/)) {
                                dadoFriozem.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Boticário/)) {
                                dadoBoticario.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (c.match(/Comfrio/)) {
                                dadoComfrio.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                        }
                    }

                    for (let i = 0; i < tabelaMeta.length; i++) {
                        if ((tecnico === tabelaMeta[i].Tecnico) && (ano === `${tabelaMeta[i].Ano}`) && (mes === `${tabelaMeta[i].Mes}`)) {
                            if (1 === tabelaMeta[i].Mes) {
                                metaJan.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (2 === tabelaMeta[i].Mes) {
                                metaFev.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (3 === tabelaMeta[i].Mes) {
                                metaMar.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (4 === tabelaMeta[i].Mes) {
                                metaAbr.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (5 === tabelaMeta[i].Mes) {
                                metaMai.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (6 === tabelaMeta[i].Mes) {
                                metaJun.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (7 === tabelaMeta[i].Mes) {
                                metaJul.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (8 === tabelaMeta[i].Mes) {
                                metaAgo.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (9 === tabelaMeta[i].Mes) {
                                metaSet.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (10 === tabelaMeta[i].Mes) {
                                metaOut.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (11 === tabelaMeta[i].Mes) {
                                metaNov.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
                            if (12 === tabelaMeta[i].Mes) {
                                metaDez.push({
                                    M: tabelaMeta[i].Meta
                                })
                            }
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
                    let totalRR = Object.keys(dadoRR).length;
                    let totalRC = Object.keys(dadoRC).length;
                    let totalRL = Object.keys(dadoRL).length;

                    let totalOS = dadoLA.concat(dadoMC, dadoSR, dadoRM, dadoCO, dadoRV, dadoCC, dadoMMV, dadoRP, dadoLP, dadoRR, dadoRC, dadoRL)
                    let totalRealOS = [];
                    for (let i = 0; i < totalOS.length; i++) {
                        totalRealOS.unshift(totalOS[i].OS)
                    }

                    let totalSemRepOS = [... new Set(totalRealOS)]

                    //variavel total
                    let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
                        totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

                    //variavel tecnico
                    let totalDiegoC = Object.keys(dadoDiegoC).length;
                    let totalNatanael = Object.keys(dadoNatanael).length;
                    let totalBruno = Object.keys(dadoBruno).length;
                    let totalVinicius = Object.keys(dadoVinicius).length;
                    let totalMateus = Object.keys(dadoMateus).length;
                    let totalGabriel = Object.keys(dadoGabriel).length;
                    let totalMarlon = Object.keys(dadoMarlon).length;
                    let totalCaua = Object.keys(dadoCaua).length;
                    let totalDiegoA = Object.keys(dadoDiegoA).length;
                    let totalAlisson = Object.keys(dadoAlisson).length;
                    let totalAnderson = Object.keys(dadoAnderson).length;
                    let totalCida = Object.keys(dadoCida).length;
                    let totalDouglas = Object.keys(dadoDouglas).length;
                    let totalKleiton = Object.keys(dadoKleiton).length;

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

                    //variavel diario
                    let totalDia1 = Object.keys(dia1).length;
                    let totalDia2 = Object.keys(dia2).length;
                    let totalDia3 = Object.keys(dia3).length;
                    let totalDia4 = Object.keys(dia4).length;
                    let totalDia5 = Object.keys(dia5).length;
                    let totalDia6 = Object.keys(dia6).length;
                    let totalDia7 = Object.keys(dia7).length;
                    let totalDia8 = Object.keys(dia8).length;
                    let totalDia9 = Object.keys(dia9).length;
                    let totalDia10 = Object.keys(dia10).length;
                    let totalDia11 = Object.keys(dia11).length;
                    let totalDia12 = Object.keys(dia12).length;
                    let totalDia13 = Object.keys(dia13).length;
                    let totalDia14 = Object.keys(dia14).length;
                    let totalDia15 = Object.keys(dia15).length;
                    let totalDia16 = Object.keys(dia16).length;
                    let totalDia17 = Object.keys(dia17).length;
                    let totalDia18 = Object.keys(dia18).length;
                    let totalDia19 = Object.keys(dia19).length;
                    let totalDia20 = Object.keys(dia20).length;
                    let totalDia21 = Object.keys(dia21).length;
                    let totalDia22 = Object.keys(dia22).length;
                    let totalDia23 = Object.keys(dia23).length;
                    let totalDia24 = Object.keys(dia24).length;
                    let totalDia25 = Object.keys(dia25).length;
                    let totalDia26 = Object.keys(dia26).length;
                    let totalDia27 = Object.keys(dia27).length;
                    let totalDia28 = Object.keys(dia28).length;
                    let totalDia29 = Object.keys(dia29).length;
                    let totalDia30 = Object.keys(dia30).length;
                    let totalDia31 = Object.keys(dia31).length;

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

                    //placa
                    let totalPlacaRec = Object.keys(dadoPlacaRec).length;
                    let totalPlacaNRec = Object.keys(dadoPlacaNRec).length;

                    //varial contrato
                    let totalAvulso = Object.keys(dadoAvulso).length;
                    let totalAssai = Object.keys(dadoAssai).length;
                    let totalAtacadao = Object.keys(dadoAtacadao).length;
                    let totalCEA = Object.keys(dadoCEA).length;
                    let totalB2W = Object.keys(dadoB2W).length;
                    let totalFriozem = Object.keys(dadoFriozem).length;
                    let totalComfrio = Object.keys(dadoComfrio).length;
                    let totalLocacao = Object.keys(dadoLocacao).length;
                    let totalBoticario = Object.keys(dadoBoticario).length;

                    let totalContrato = totalAssai + totalAtacadao + totalCEA + totalB2W + totalFriozem + totalComfrio + totalLocacao
                        + totalBoticario

                    let mJan = Object.assign(metaJan);
                    let mFev = Object.assign(metaFev);
                    let mMar = Object.assign(metaMar);
                    let mAbr = Object.assign(metaAbr);
                    let mMai = Object.assign(metaMai);
                    let mJun = Object.assign(metaJun);
                    let mJul = Object.assign(metaJul);
                    let mAgo = Object.assign(metaAgo);
                    let mSet = Object.assign(metaSet);
                    let mOut = Object.assign(metaOut);
                    let mNov = Object.assign(metaNov);
                    let mDez = Object.assign(metaDez);

                    let totalMeta = parseInt(mJan.length > 0 ? mJan[0].M : 0) + parseInt(mFev.length > 0 ? mFev[0].M : 0) +
                        parseInt(mMar.length > 0 ? mMar[0].M : 0) + parseInt(mAbr.length > 0 ? mAbr[0].M : 0) + parseInt(mMai.length > 0 ? mMai[0].M : 0) +
                        parseInt(mJun.length > 0 ? mJun[0].M : 0) + parseInt(mJul.length > 0 ? mJul[0].M : 0) + parseInt(mAgo.length > 0 ? mAgo[0].M : 0) +
                        parseInt(mSet.length > 0 ? mSet[0].M : 0) + parseInt(mOut.length > 0 ? mOut[0].M : 0) + parseInt(mNov.length > 0 ? mNov[0].M : 0) +
                        parseInt(mDez.length > 0 ? mDez[0].M : 0)


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
                        listarRR: totalRR,
                        listarRC: totalRC,
                        listarRL: totalRL,

                        //busca de manutenção
                        listarMCAvulso: dadoMCAvulso.length,
                        listarMCAssai: dadoMCAssai.length,
                        listarMCCEA: dadoMCCEA.length,
                        listarMCB2W: dadoMCB2W.length,
                        listarMCFriozem: dadoMCFriozem.length,
                        listarMCBoticario: dadoMCBoticario.length,
                        listarMCAtacadao: dadoMCAtacadao.length,
                        listarMCComfrio: dadoMCComfrio.length,
                        listarMCLocacao: dadoMCLocacao.length,

                        //busca de Laudo
                        listarLAAvulso: dadoLAAvulso.length,
                        listarLAAssai: dadoLAAssai.length,
                        listarLACEA: dadoLACEA.length,
                        listarLAB2W: dadoLAB2W.length,
                        listarLAFriozem: dadoLAFriozem.length,
                        listarLABoticario: dadoLABoticario.length,
                        listarLAAtacadao: dadoLAAtacadao.length,
                        listarLAComfrio: dadoLAComfrio.length,
                        listarLALocacao: dadoLALocacao.length,

                        //busca de Suporte
                        listarSRAvulso: dadoSRAvulso.length,
                        listarSRAssai: dadoSRAssai.length,
                        listarSRCEA: dadoSRCEA.length,
                        listarSRB2W: dadoSRB2W.length,
                        listarSRFriozem: dadoSRFriozem.length,
                        listarSRBoticario: dadoSRBoticario.length,
                        listarSRAtacadao: dadoSRAtacadao.length,
                        listarSRComfrio: dadoSRComfrio.length,
                        listarSRLocacao: dadoSRLocacao.length,

                        //busca de RM
                        listarRMAvulso: dadoRMAvulso.length,
                        listarRMAssai: dadoRMAssai.length,
                        listarRMCEA: dadoRMCEA.length,
                        listarRMB2W: dadoRMB2W.length,
                        listarRMFriozem: dadoRMFriozem.length,
                        listarRMBoticario: dadoRMBoticario.length,
                        listarRMAtacadao: dadoRMAtacadao.length,
                        listarRMComfrio: dadoRMComfrio.length,
                        listarRMLocacao: dadoRMLocacao.length,

                        //busca de CO
                        listarCOAvulso: dadoCOAvulso.length,
                        listarCOAssai: dadoCOAssai.length,
                        listarCOCEA: dadoCOCEA.length,
                        listarCOB2W: dadoCOB2W.length,
                        listarCOFriozem: dadoCOFriozem.length,
                        listarCOBoticario: dadoCOBoticario.length,
                        listarCOAtacadao: dadoCOAtacadao.length,
                        listarCOComfrio: dadoCOComfrio.length,
                        listarCOLocacao: dadoCOLocacao.length,

                        //busca de Rv
                        listarRVAvulso: dadoRVAvulso.length,
                        listarRVAssai: dadoRVAssai.length,
                        listarRVCEA: dadoRVCEA.length,
                        listarRVB2W: dadoRVB2W.length,
                        listarRVFriozem: dadoRVFriozem.length,
                        listarRVBoticario: dadoRVBoticario.length,
                        listarRVAtacadao: dadoRVAtacadao.length,
                        listarRVComfrio: dadoRVComfrio.length,
                        listarRVLocacao: dadoRVLocacao.length,

                        //busca de MMV
                        listarMMVAvulso: dadoMMVAvulso.length,
                        listarMMVAssai: dadoMMVAssai.length,
                        listarMMVCEA: dadoMMVCEA.length,
                        listarMMVB2W: dadoMMVB2W.length,
                        listarMMVFriozem: dadoMMVFriozem.length,
                        listarMMVBoticario: dadoMMVBoticario.length,
                        listarMMVAtacadao: dadoMMVAtacadao.length,
                        listarMMVComfrio: dadoMMVComfrio.length,
                        listarMMVLocacao: dadoMMVLocacao.length,

                        //busca de CC
                        listarCCAvulso: dadoCCAvulso.length,
                        listarCCAssai: dadoCCAssai.length,
                        listarCCCEA: dadoCCCEA.length,
                        listarCCB2W: dadoCCB2W.length,
                        listarCCFriozem: dadoCCFriozem.length,
                        listarCCBoticario: dadoCCBoticario.length,
                        listarCCAtacadao: dadoCCAtacadao.length,
                        listarCCComfrio: dadoCCComfrio.length,
                        listarCCLocacao: dadoCCLocacao.length,

                        //busca de RP
                        listarRPAvulso: dadoRPAvulso.length,
                        listarRPAssai: dadoRPAssai.length,
                        listarRPCEA: dadoRPCEA.length,
                        listarRPB2W: dadoRPB2W.length,
                        listarRPFriozem: dadoRPFriozem.length,
                        listarRPBoticario: dadoRPBoticario.length,
                        listarRPAtacadao: dadoRPAtacadao.length,
                        listarRPComfrio: dadoRPComfrio.length,
                        listarRPLocacao: dadoRPLocacao.length,

                        //busca de LP
                        listarLPAvulso: dadoLPAvulso.length,
                        listarLPAssai: dadoLPAssai.length,
                        listarLPCEA: dadoLPCEA.length,
                        listarLPB2W: dadoLPB2W.length,
                        listarLPFriozem: dadoLPFriozem.length,
                        listarLPBoticario: dadoLPBoticario.length,
                        listarLPAtacadao: dadoLPAtacadao.length,
                        listarLPComfrio: dadoLPComfrio.length,
                        listarLPLocacao: dadoLPLocacao.length,

                        //busca de RR
                        listarRRAvulso: dadoRRAvulso.length,
                        listarRRAssai: dadoRRAssai.length,
                        listarRRCEA: dadoRRCEA.length,
                        listarRRB2W: dadoRRB2W.length,
                        listarRRFriozem: dadoRRFriozem.length,
                        listarRRBoticario: dadoRRBoticario.length,
                        listarRRAtacadao: dadoRRAtacadao.length,
                        listarRRComfrio: dadoRRComfrio.length,
                        listarRRLocacao: dadoRRLocacao.length,

                        //busca de RC
                        listarRCAvulso: dadoRCAvulso.length,
                        listarRCAssai: dadoRCAssai.length,
                        listarRCCEA: dadoRCCEA.length,
                        listarRCB2W: dadoRCB2W.length,
                        listarRCFriozem: dadoRCFriozem.length,
                        listarRCBoticario: dadoRCBoticario.length,
                        listarRCAtacadao: dadoRCAtacadao.length,
                        listarRCComfrio: dadoRCComfrio.length,
                        listarRCLocacao: dadoRCLocacao.length,

                        //busca de RL
                        listarRLAvulso: dadoRLAvulso.length,
                        listarRLAssai: dadoRLAssai.length,
                        listarRLCEA: dadoRLCEA.length,
                        listarRLB2W: dadoRLB2W.length,
                        listarRLFriozem: dadoRLFriozem.length,
                        listarRLBoticario: dadoRLBoticario.length,
                        listarRLAtacadao: dadoRLAtacadao.length,
                        listarRLComfrio: dadoRLComfrio.length,
                        listarRLLocacao: dadoRLLocacao.length,

                        //busca total
                        listarTotalEquip: totalEquip,
                        listarTotalOS: totalSemRepOS.length,

                        //busca tecnico
                        listarDiegoC: totalDiegoC,
                        listarNatanael: totalNatanael,
                        listarBruno: totalBruno,
                        listarVinicius: totalVinicius,
                        listarMateus: totalMateus,
                        listarGabriel: totalGabriel,
                        listarMarlon: totalMarlon,
                        listarCaua: totalCaua,
                        listarDiegoA: totalDiegoA,
                        listarAlisson: totalAlisson,
                        listarAnderson: totalAnderson,
                        listarCida: totalCida,
                        listarDouglas: totalDouglas,
                        listarKleiton: totalKleiton,

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
                        listarDez: totalDez,

                        //prod Diaria
                        listarDia1: totalDia1,
                        listarDia2: totalDia2,
                        listarDia3: totalDia3,
                        listarDia4: totalDia4,
                        listarDia5: totalDia5,
                        listarDia6: totalDia6,
                        listarDia7: totalDia7,
                        listarDia8: totalDia8,
                        listarDia9: totalDia9,
                        listarDia10: totalDia10,
                        listarDia11: totalDia11,
                        listarDia12: totalDia12,
                        listarDia13: totalDia13,
                        listarDia14: totalDia14,
                        listarDia15: totalDia15,
                        listarDia16: totalDia16,
                        listarDia17: totalDia17,
                        listarDia18: totalDia18,
                        listarDia19: totalDia19,
                        listarDia20: totalDia20,
                        listarDia21: totalDia21,
                        listarDia22: totalDia22,
                        listarDia23: totalDia23,
                        listarDia24: totalDia24,
                        listarDia25: totalDia25,
                        listarDia26: totalDia26,
                        listarDia27: totalDia27,
                        listarDia28: totalDia28,
                        listarDia29: totalDia29,
                        listarDia30: totalDia30,
                        listarDia31: totalDia31,


                        //listart total por equipamento
                        listarTotalCol: totalCol,
                        listarTotalImp: totalImp,
                        listarTotalLei: totalLei,
                        listarTotalLeiRFID: totalLeiRFID,
                        listarTotalBusca: totalBusca,
                        listarTotalCar3: totalCar3,
                        listarTotalCar4: totalCar4,
                        listarTotalCar5: totalCar5,
                        listarTotalCar6: totalCar6,
                        listarTotalBerco: totalBerco,
                        listarTotalFonte: totalFonte,
                        listarTotalCabos: totalCabo,
                        listarTotalBateria: totalBateria,

                        //placa
                        listarPlacaRec: totalPlacaRec,
                        listarPlacaNRec: totalPlacaNRec,

                        //buscar contrato
                        listarAvulso: totalAvulso,
                        listarAssai: totalAssai,
                        listarCEA: totalCEA,
                        listarB2W: totalB2W,
                        // listarShopee: totalShopee,
                        listarBoticario: totalBoticario,
                        listarAtacadao: totalAtacadao,
                        listarLocacao: totalLocacao,
                        listarFriozem: totalFriozem,
                        listarComfrio: totalComfrio,

                        //total contrato
                        listarTotalContrato: totalContrato,

                        //meta
                        listarMetaTecnico: totalMeta,

                        //total tecnico
                        listarTotalTecnico: totalEquip
                    })
                }
            }
            //#endregion

            //#endregion
       
        }
        catch (error) {
            alert("Erro:" + error)
        }

    }

    async BuscarTec() {
        const tec = await axios(baseUrl3).then(resp => resp.data)

        let dadosTec = []

        for (let i = 0; i < tec.length; i++) {
            if ("Laborátorio" === tec[i].departamento) {
                dadosTec.push({
                    nome: tec[i].nomeCompleto
                })
            }
        }

        return this.setState ({
            optionsTec: dadosTec
        })
    }

    tecnicos() {
      return this.state.optionsTec.map(Nome => {
        return (
            <option>{Nome.nome}</option>
        )
      })
    }

  
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-2 d-flex flex-row justify-content-center align-items-center">
                        <i className="fa fa-filter fa-2x text-danger" /> <h2 className='fw-bold'>Filtro</h2>
                    </div>
                    <div className="col-2">
                        <label className='fw-bold'>Técnico: </label>
                        <select id="tecnico" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            {this.tecnicos()}
                        </select>
                    </div>
                    <div className="col-2">
                        <label className='fw-bold'>Dia: </label>
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
                        <label className='fw-bold'>Mês: </label>
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
                        <label className='fw-bold'>Ano: </label>
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
                        <button className="btn btn-success fw-bold" onClick={e => this.filtrarDados(e)}>Buscar</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1">
                        <img src={this.state.imagem} alt="" className='rounded-circle' style={{ height: 150, width: 100 }} />
                    </div>
                    <div className="col-2 text-light d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <ModalProd corModal="secondary" nomeBotao="Prod. Diaria" tamanho="xl"
                                    classe='h4 fw-bold'
                                    Relatorio={
                                        <Grafico tipo="column" titulo="Produtividade por Dia"
                                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                            texto='{point.y:1f}'
                                            nomeSerie="Dia"
                                            dado={[
                                                { name: "1", y: this.state.listarDia1 },
                                                { name: "2", y: this.state.listarDia2 },
                                                { name: "3", y: this.state.listarDia3 },
                                                { name: "4", y: this.state.listarDia4 },
                                                { name: "5", y: this.state.listarDia5 },
                                                { name: "6", y: this.state.listarDia6 },
                                                { name: "7", y: this.state.listarDia7 },
                                                { name: "8", y: this.state.listarDia8 },
                                                { name: "9", y: this.state.listarDia9 },
                                                { name: "10", y: this.state.listarDia10 },
                                                { name: "11", y: this.state.listarDia11 },
                                                { name: "12", y: this.state.listarDia12 },
                                                { name: "13", y: this.state.listarDia13 },
                                                { name: "14", y: this.state.listarDia14 },
                                                { name: "15", y: this.state.listarDia15 },
                                                { name: "16", y: this.state.listarDia16 },
                                                { name: "17", y: this.state.listarDia17 },
                                                { name: "18", y: this.state.listarDia18 },
                                                { name: "19", y: this.state.listarDia19 },
                                                { name: "20", y: this.state.listarDia20 },
                                                { name: "21", y: this.state.listarDia21 },
                                                { name: "22", y: this.state.listarDia22 },
                                                { name: "23", y: this.state.listarDia23 },
                                                { name: "24", y: this.state.listarDia24 },
                                                { name: "25", y: this.state.listarDia25 },
                                                { name: "26", y: this.state.listarDia26 },
                                                { name: "27", y: this.state.listarDia27 },
                                                { name: "28", y: this.state.listarDia28 },
                                                { name: "29", y: this.state.listarDia29 },
                                                { name: "30", y: this.state.listarDia30 },
                                                { name: "31", y: this.state.listarDia31 },
                                            ]}
                                        />
                                    }
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 d-flex justify-content-center">
                                <ModalProd corModal="warning" nomeBotao="Meta" tamanho="lg"
                                    classe='h4 fw-bold'
                                    Relatorio={
                                        <Grafico tipo="column" titulo="Meta"
                                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                            texto='{point.y:1f}'
                                            nomeSerie="Meta"
                                            cor={true}
                                            dado={[
                                                { name: "Meta", y: this.state.listarMetaTecnico },
                                                { name: "Atividade", y: this.state.listarTotalTecnico },
                                            ]} />
                                    } />
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-light">
                        <CardGD bg="dark" nomeTitulo="Total OS's" icone="codepen"
                            dado={this.state.listarTotalOS} />
                    </div>
                    <div className="col-3  text-light">
                        <CardGD bg="success" nomeTitulo="Total Serviço" icone="server"
                            dado={this.state.listarTotalEquip} />
                    </div>

                    <div className="col-3 text-light">
                        <CardGD bg="primary" nomeTitulo="Limpeza" icone="paint-brush"
                            dado={this.state.listarLP} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">
                        <Grafico tipo="pie" titulo="Serviços"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                            texto='<b>{point.name}</b>: {point.y:1f}'
                            nomeSerie="Serviços"
                            cor={true}
                            dado={[
                                { name: "Manutenção Concluída", y: this.state.listarMC, drilldown: "Manutenção" },
                                { name: "Laudo", y: this.state.listarLA, drilldown: "Laudo" },
                                { name: "Suporte Remoto", y: this.state.listarSR, drilldown: "Suporte" },
                                { name: "Revisão de Manutenção", y: this.state.listarRM, drilldown: "RM" },
                                { name: "Chamado On-Site", y: this.state.listarCO, drilldown: "CO" },
                                { name: "Revisão de Venda", y: this.state.listarRV, drilldown: "RV" },
                                { name: "Confecção de Cabos", y: this.state.listarCC, drilldown: "CC" },
                                { name: "M/M de Venda", y: this.state.listarMMV, drilldown: "MMV" },
                                { name: "Rec Placa", y: this.state.listarRP, drilldown: "RP" },
                                { name: "Limpeza", y: this.state.listarLP, drilldown: "LP" },
                                { name: "Revisão Reprovado", y: this.state.listarRR, drilldown: "RR" },
                                { name: "Revisão Compra", y: this.state.listarRC, drilldown: "RC" },
                                { name: "Revisão Locação", y: this.state.listarRL, drilldown: "RL" },
                            ]}

                            serie={[
                                {
                                    name: "Manutenção",
                                    id: "Manutenção",
                                    data: [
                                        { name: "Avulso", y: this.state.listarMCAvulso },
                                        { name: "Contrato Assai", y: this.state.listarMCAssai },
                                        { name: "Contrato C&A", y: this.state.listarMCCEA },
                                        { name: "Contrato B2W", y: this.state.listarMCB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarMCAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarMCBoticario },
                                        { name: "Contrato Locação", y: this.state.listarMCLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarMCFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarMCComfrio }
                                    ]
                                },
                                {
                                    name: "Laudo",
                                    id: "Laudo",
                                    data: [
                                        { name: "Avulso", y: this.state.listarLAAvulso },
                                        { name: "Contrato Assai", y: this.state.listarLAAssai },
                                        { name: "Contrato C&A", y: this.state.listarLACEA },
                                        { name: "Contrato B2W", y: this.state.listarLAB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarLAAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarLABoticario },
                                        { name: "Contrato Locação", y: this.state.listarLALocacao },
                                        { name: "Contrato Friozem", y: this.state.listarLAFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarLAComfrio }
                                    ]
                                },
                                {
                                    name: "Suporte",
                                    id: "Suporte",
                                    data: [
                                        { name: "Avulso", y: this.state.listarSRAvulso },
                                        { name: "Contrato Assai", y: this.state.listarSRAssai },
                                        { name: "Contrato C&A", y: this.state.listarSRCEA },
                                        { name: "Contrato B2W", y: this.state.listarSRB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarSRAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarSRBoticario },
                                        { name: "Contrato Locação", y: this.state.listarSRLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarSRFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarSRComfrio }
                                    ]
                                },
                                {
                                    name: "RM",
                                    id: "RM",
                                    data: [
                                        { name: "Avulso", y: this.state.listarRMAvulso },
                                        { name: "Contrato Assai", y: this.state.listarRMAssai },
                                        { name: "Contrato C&A", y: this.state.listarRMCEA },
                                        { name: "Contrato B2W", y: this.state.listarRMB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarRMAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarRMBoticario },
                                        { name: "Contrato Locação", y: this.state.listarRMLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarRMFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarRMComfrio }
                                    ]
                                },
                                {
                                    name: "CO",
                                    id: "CO",
                                    data: [
                                        { name: "Avulso", y: this.state.listarCOAvulso },
                                        { name: "Contrato Assai", y: this.state.listarCOAssai },
                                        { name: "Contrato C&A", y: this.state.listarCOCEA },
                                        { name: "Contrato B2W", y: this.state.listarCOB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarCOAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarCOBoticario },
                                        { name: "Contrato Locação", y: this.state.listarCOLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarCOFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarCOComfrio }
                                    ]
                                },
                                {
                                    name: "RV",
                                    id: "RV",
                                    data: [
                                        { name: "Avulso", y: this.state.listarRVAvulso },
                                        { name: "Contrato Assai", y: this.state.listarRVAssai },
                                        { name: "Contrato C&A", y: this.state.listarRVCEA },
                                        { name: "Contrato B2W", y: this.state.listarRVB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarRVAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarRVBoticario },
                                        { name: "Contrato Locação", y: this.state.listarRVLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarRVFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarRVComfrio }
                                    ]
                                },
                                {
                                    name: "MMV",
                                    id: "MMV",
                                    data: [
                                        { name: "Avulso", y: this.state.listarMMVAvulso },
                                        { name: "Contrato Assai", y: this.state.listarMMVAssai },
                                        { name: "Contrato C&A", y: this.state.listarMMVCEA },
                                        { name: "Contrato B2W", y: this.state.listarMMVB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarMMVAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarMMVBoticario },
                                        { name: "Contrato Locação", y: this.state.listarMMVLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarMMVFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarMMVComfrio }
                                    ]
                                },
                                {
                                    name: "CC",
                                    id: "CC",
                                    data: [
                                        { name: "Avulso", y: this.state.listarCCAvulso },
                                        { name: "Contrato Assai", y: this.state.listarCCAssai },
                                        { name: "Contrato C&A", y: this.state.listarCCCEA },
                                        { name: "Contrato B2W", y: this.state.listarCCB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarCCAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarCCBoticario },
                                        { name: "Contrato ocação", y: this.state.listarCCLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarCCFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarCCComfrio }
                                    ]
                                },
                                {
                                    name: "RP",
                                    id: "RP",
                                    data: [
                                        { name: "Avulso", y: this.state.listarRPAvulso },
                                        { name: "Contrato Assai", y: this.state.listarRPAssai },
                                        { name: "Contrato C&A", y: this.state.listarRPCEA },
                                        { name: "Contrato B2W", y: this.state.listarRPB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarRPAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarRPBoticario },
                                        { name: "Contrato Locação", y: this.state.listarRPLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarRPFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarRPComfrio }
                                    ]
                                },
                                {
                                    name: "LP",
                                    id: "LP",
                                    data: [
                                        { name: "Avulso", y: this.state.listarLPAvulso },
                                        { name: "Contrato Assai", y: this.state.listarLPAssai },
                                        { name: "Contrato C&A", y: this.state.listarLPCEA },
                                        { name: "Contrato B2W", y: this.state.listarLPB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarLPAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarLPBoticario },
                                        { name: "Contrato Locação", y: this.state.listarLPLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarLPFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarLPComfrio }
                                    ]
                                },
                                {
                                    name: "RR",
                                    id: "RR",
                                    data: [
                                        { name: "Avulso", y: this.state.listarRRAvulso },
                                        { name: "Contrato Assai", y: this.state.listarRRAssai },
                                        { name: "Contrato C&A", y: this.state.listarRRCEA },
                                        { name: "Contrato B2W", y: this.state.listarRRB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarRRAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarRRBoticario },
                                        { name: "Contrato Locação", y: this.state.listarRRLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarRRFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarRRComfrio }
                                    ]
                                },
                                {
                                    name: "RC",
                                    id: "RC",
                                    data: [
                                        { name: "Avulso", y: this.state.listarRCAvulso },
                                        { name: "Contrato Assai", y: this.state.listarRCAssai },
                                        { name: "Contrato C&A", y: this.state.listarRCCEA },
                                        { name: "Contrato B2W", y: this.state.listarRCB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarRCAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarRCBoticario },
                                        { name: "Contrato Locação", y: this.state.listarRCLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarRCFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarRCComfrio }
                                    ]
                                },
                                {
                                    name: "RL",
                                    id: "RL",
                                    data: [
                                        { name: "Avulso", y: this.state.listarRLAvulso },
                                        { name: "Contrato Assai", y: this.state.listarRLAssai },
                                        { name: "Contrato C&A", y: this.state.listarRLCEA },
                                        { name: "Contrato B2W", y: this.state.listarRLB2W },
                                        { name: "Contrato Atacadão", y: this.state.listarRLAtacadao },
                                        { name: "Contrato Boticário", y: this.state.listarRLBoticario },
                                        { name: "Contrato Locação", y: this.state.listarRLLocacao },
                                        { name: "Contrato Friozem", y: this.state.listarRLFriozem },
                                        { name: "Contrato Comfrio", y: this.state.listarRLComfrio }
                                    ]
                                },
                            ]
                            }
                        />
                    </div>
                    <div className="col-12 col-md-5 sombra mx-3 flex-fill">
                        <Grafico tipo="bar" titulo="Produtividade por Técnico"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Serviço"
                            cor={true}
                            dado={[
                                { name: "Diego C", y: this.state.listarDiegoC },
                                { name: "Natanael", y: this.state.listarNatanael },
                                { name: "Bruno", y: this.state.listarBruno },
                                { name: "Vinicius", y: this.state.listarVinicius },
                                { name: "Mateus", y: this.state.listarMateus },
                                { name: "Gabriel", y: this.state.listarGabriel },
                                { name: "Marlon", y: this.state.listarMarlon },
                                { name: "Cauã", y: this.state.listarCaua },
                                { name: "Diego A", y: this.state.listarDiegoA },
                                { name: "Alisson", y: this.state.listarAlisson},
                                { name: "Anderson", y: this.state.listarAnderson },
                                { name: "Cida", y: this.state.listarCida },
                                { name: "Douglas", y: this.state.listarDouglas },
                                { name: "Kleiton", y: this.state.listarKleiton },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-5 sombra mx-3 flex-fill">
                        <Grafico tipo="column" titulo="Equipamentos"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Equipamento"
                            cor={true}
                            dado={[
                                { name: "Coletor", y: this.state.listarTotalCol },
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
                    <div className="col-12 col-md-5 sombra mx-3 flex-fill">
                        <Grafico tipo="pie" titulo="Recuperação de Placa" size="60%" subTitulo={`Total de Placas: ${this.state.listarRP}`}
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='<b>{point.name}</b>: {point.y:1f}'
                            nomeSerie="Equipamento"
                            cor={true}
                            Legenda={true}
                            dado={[
                                { name: "Recuperada", y: this.state.listarPlacaRec },
                                { name: "Não Recuperada", y: this.state.listarPlacaNRec },
                            ]} />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-12 col-md-5 sombra mx-3 flex-fill">
                        <Grafico tipo="column" titulo="Avulso X Contrato"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Avulso X Contrato"
                            cor={true}
                            dado={[
                                { name: "Avulso", y: this.state.listarAvulso },
                                { name: "Contrato", y: this.state.listarTotalContrato, drilldown: "Contrato" },
                            ]}
                            serie={[
                                {
                                    name: "Contrato",
                                    id: "Contrato",
                                    data: [
                                        { name: "Assai", y: this.state.listarAssai },
                                        { name: "C&A", y: this.state.listarCEA },
                                        { name: "B2W", y: this.state.listarB2W },
                                        { name: "Atacadão", y: this.state.listarAtacadao },
                                        { name: "Boticário", y: this.state.listarBoticario },
                                        { name: "Locação", y: this.state.listarLocacao },
                                        { name: "Friozem", y: this.state.listarFriozem },
                                        { name: "Comfrio", y: this.state.listarComfrio }
                                    ]
                                }
                            ]} />
                    </div>
                    <div className="col-12 col-md-5 sombra mx-3 flex-fill">
                        <Grafico tipo="spline" titulo="Quantidade por Ano"
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
            </div>
        )
    }
}
