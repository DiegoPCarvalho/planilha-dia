import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';
import Grafico from '../Graficos/Grafico';
import CardGD from '../Card/CardGD';

import ModalTecnicos from '../Modal/ModalDashboardTecnicos';

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
// import imgAnderson from '../../Assets/imagensTecnicos/ANDERSON RAMOS (1).png';
import imgMarcio from "../../Assets/Imgs/user.png";

//GERENTES
import imgDouglas from '../../Assets/imagensTecnicos/DOUGLAS ALTENFELDER.png';
import imgKleiton from '../../Assets/imagensTecnicos/KLEITON PAULINO.png';

const initialState = {
    //total equipamento
    listarTotalEquip: [0],
    listarTotalGarantia: [0],

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
    listarRR: [0],
    listarRC: [0],
    listarRL: [0],

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
    // listarAnderson: [0],
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

    //Ordem de Serviço Diego Carvalho
    listarDiegoCMC: [0],
    listarDiegoCLA: [0],
    listarDiegoCSR: [0],
    listarDiegoCRM: [0],
    listarDiegoCCO: [0],
    listarDiegoCRV: [0],
    listarDiegoCCC: [0],
    listarDiegoCMMV: [0],
    listarDiegoCRP: [0],
    listarDiegoCLP: [0],
    listarDiegoCRR: [0],
    listarDiegoCRC: [0],
    listarDiegoCRL: [0],

    //Ordem de Serviço Natanael
    listarNataMC: [0],
    listarNataLA: [0],
    listarNataSR: [0],
    listarNataRM: [0],
    listarNataCO: [0],
    listarNataRV: [0],
    listarNataCC: [0],
    listarNataMMV: [0],
    listarNataRP: [0],
    listarNataLP: [0],
    listarNataRR: [0],
    listarNataRC: [0],
    listarNataRL: [0],

    //Ordem de Serviço Mateus
    listarMateusMC: [0],
    listarMateusLA: [0],
    listarMateusSR: [0],
    listarMateusRM: [0],
    listarMateusCO: [0],
    listarMateusRV: [0],
    listarMateusCC: [0],
    listarMateusMMV: [0],
    listarMateusRP: [0],
    listarMateusLP: [0],
    listarMateusRR: [0],
    listarMateusRC: [0],
    listarMateusRL: [0],

    //Ordem de Serviço Lucas
    listarLucasMC: [0],
    listarLucasLA: [0],
    listarLucasSR: [0],
    listarLucasRM: [0],
    listarLucasCO: [0],
    listarLucasRV: [0],
    listarLucasCC: [0],
    listarLucasMMV: [0],
    listarLucasRP: [0],
    listarLucasLP: [0],
    listarLucasRR: [0],
    listarLucasRC: [0],
    listarLucasRL: [0],

    //Ordem de Serviço Diogo
    listarDiogoMC: [0],
    listarDiogoLA: [0],
    listarDiogoSR: [0],
    listarDiogoRM: [0],
    listarDiogoCO: [0],
    listarDiogoRV: [0],
    listarDiogoCC: [0],
    listarDiogoMMV: [0],
    listarDiogoRP: [0],
    listarDiogoLP: [0],
    listarDiogoRR: [0],
    listarDiogoRC: [0],
    listarDiogoRL: [0],

    //Ordem de Serviço Gabriel
    listarGabrielMC: [0],
    listarGabrielLA: [0],
    listarGabrielSR: [0],
    listarGabrielRM: [0],
    listarGabrielCO: [0],
    listarGabrielRV: [0],
    listarGabrielCC: [0],
    listarGabrielMMV: [0],
    listarGabrielRP: [0],
    listarGabrielLP: [0],
    listarGabrielRR: [0],
    listarGabrielRC: [0],
    listarGabrielRL: [0],

    //Ordem de Serviço Bruno
    listarBrunoMC: [0],
    listarBrunoLA: [0],
    listarBrunoSR: [0],
    listarBrunoRM: [0],
    listarBrunoCO: [0],
    listarBrunoRV: [0],
    listarBrunoCC: [0],
    listarBrunoMMV: [0],
    listarBrunoRP: [0],
    listarBrunoLP: [0],
    listarBrunoRR: [0],
    listarBrunoRC: [0],
    listarBrunoRL: [0],

    //Ordem de Serviço Vinicius
    listarViniciusMC: [0],
    listarViniciusLA: [0],
    listarViniciusSR: [0],
    listarViniciusRM: [0],
    listarViniciusCO: [0],
    listarViniciusRV: [0],
    listarViniciusCC: [0],
    listarViniciusMMV: [0],
    listarViniciusRP: [0],
    listarViniciusLP: [0],
    listarViniciusRR: [0],
    listarViniciusRC: [0],
    listarViniciusRL: [0],

    //Ordem de Serviço DiegoA
    listarDiegoAMC: [0],
    listarDiegoALA: [0],
    listarDiegoASR: [0],
    listarDiegoARM: [0],
    listarDiegoACO: [0],
    listarDiegoARV: [0],
    listarDiegoACC: [0],
    listarDiegoAMMV: [0],
    listarDiegoARP: [0],
    listarDiegoALP: [0],
    listarDiegoARR: [0],
    listarDiegoARC: [0],
    listarDiegoARL: [0],

    // //Ordem de Serviço Anderson
    // listarAndersonMC: [0],
    // listarAndersonLA: [0],
    // listarAndersonSR: [0],
    // listarAndersonRM: [0],
    // listarAndersonCO: [0],
    // listarAndersonRV: [0],
    // listarAndersonCC: [0],
    // listarAndersonMMV: [0],
    // listarAndersonRP: [0],
    // listarAndersonLP: [0],

    //Ordem de Serviço Marcio
    listarMarcioMC: [0],
    listarMarcioLA: [0],
    listarMarcioSR: [0],
    listarMarcioRM: [0],
    listarMarcioCO: [0],
    listarMarcioRV: [0],
    listarMarcioCC: [0],
    listarMarcioMMV: [0],
    listarMarcioRP: [0],
    listarMarcioLP: [0],
    listarMarcioRR: [0],
    listarMarcioRC: [0],
    listarMarcioRL: [0],

    //Ordem de Serviço Cida
    listarCidaMC: [0],
    listarCidaLA: [0],
    listarCidaSR: [0],
    listarCidaRM: [0],
    listarCidaCO: [0],
    listarCidaRV: [0],
    listarCidaCC: [0],
    listarCidaMMV: [0],
    listarCidaRP: [0],
    listarCidaLP: [0],
    listarCidaRR: [0],
    listarCidaRC: [0],
    listarCidaRL: [0],

    //Ordem de Serviço Allan
    listarAllanMC: [0],
    listarAllanLA: [0],
    listarAllanSR: [0],
    listarAllanRM: [0],
    listarAllanCO: [0],
    listarAllanRV: [0],
    listarAllanCC: [0],
    listarAllanMMV: [0],
    listarAllanRP: [0],
    listarAllanLP: [0],
    listarAllanRR: [0],
    listarAllanRC: [0],
    listarAllanRL: [0],

    //Ordem de Serviço Douglas
    listarDouglasMC: [0],
    listarDouglasLA: [0],
    listarDouglasSR: [0],
    listarDouglasRM: [0],
    listarDouglasCO: [0],
    listarDouglasRV: [0],
    listarDouglasCC: [0],
    listarDouglasMMV: [0],
    listarDouglasRP: [0],
    listarDouglasLP: [0],
    listarDouglasRR: [0],
    listarDouglasRC: [0],
    listarDouglasRL: [0],

    //Ordem de Serviço Kleiton
    listarKleitonMC: [0],
    listarKleitonLA: [0],
    listarKleitonSR: [0],
    listarKleitonRM: [0],
    listarKleitonCO: [0],
    listarKleitonRV: [0],
    listarKleitonCC: [0],
    listarKleitonMMV: [0],
    listarKleitonRP: [0],
    listarKleitonLP: [0],
    listarKleitonRR: [0],
    listarKleitonRC: [0],
    listarKleitonRL: [0],


    //total por tecnico
    listarTotalDiegoC: [0],
    listarTotalDiegoA: [0],
    listarTotalNata: [0],
    listarTotalDouglas: [0],
    listarTotalKleiton: [0],
    listarTotalVinicius: [0],
    listarTotalBruno: [0],
    listarTotalMarcio: [0],
    listarTotalMateus: [0],
    listarTotalGabriel: [0],
    listarTotalDiogo: [0],
    listarTotalLucas: [0],
    listarTotalAllan: [0],
    listarTotalCida: [0],
    // listarTotalAnderson: [0],

    //total por equipamento:
    //Total Equipamentos Diego Carvaho
    listarDiegoCCol: [0],
    listarDiegoCImp: [0],
    listarDiegoCLei: [0],
    listarDiegoCBusca: [0],
    listarDiegoCCar3: [0],
    listarDiegoCCar4: [0],
    listarDiegoCCar5: [0],
    listarDiegoCCar6: [0],
    listarDiegoCBerco: [0],
    listarDiegoCFonte: [0],
    listarDiegoCCabos: [0],
    listarDiegoCBateria: [0],

    //Total Equipamentos Natanael
    listarNataCol: [0],
    listarNataImp: [0],
    listarNataLei: [0],
    listarNataBusca: [0],
    listarNataCar3: [0],
    listarNataCar4: [0],
    listarNataCar5: [0],
    listarNataCar6: [0],
    listarNataBerco: [0],
    listarNataFonte: [0],
    listarNataCabos: [0],
    listarNataBateria: [0],


    //Total Equipamentos Mateus
    listarMateusCol: [0],
    listarMateusImp: [0],
    listarMateusLei: [0],
    listarMateusBusca: [0],
    listarMateusCar3: [0],
    listarMateusCar4: [0],
    listarMateusCar5: [0],
    listarMateusCar6: [0],
    listarMateusBerco: [0],
    listarMateusFonte: [0],
    listarMateusCabos: [0],
    listarMateusBateria: [0],

    //Total Equipamentos Lucas
    listarLucasCol: [0],
    listarLucasImp: [0],
    listarLucasLei: [0],
    listarLucasBusca: [0],
    listarLucasCar3: [0],
    listarLucasCar4: [0],
    listarLucasCar5: [0],
    listarLucasCar6: [0],
    listarLucasBerco: [0],
    listarLucasFonte: [0],
    listarLucasCabos: [0],
    listarLucasBateria: [0],

    //Total Equipamentos Diogo
    listarDiogoCol: [0],
    listarDiogoImp: [0],
    listarDiogoLei: [0],
    listarDiogoBusca: [0],
    listarDiogoCar3: [0],
    listarDiogoCar4: [0],
    listarDiogoCar5: [0],
    listarDiogoCar6: [0],
    listarDiogoBerco: [0],
    listarDiogoFonte: [0],
    listarDiogoCabos: [0],
    listarDiogoBateria: [0],

    //Total Equipamentos Gabriel
    listarGabrielCol: [0],
    listarGabrielImp: [0],
    listarGabrielLei: [0],
    listarGabrielBusca: [0],
    listarGabrielCar3: [0],
    listarGabrielCar4: [0],
    listarGabrielCar5: [0],
    listarGabrielCar6: [0],
    listarGabrielBerco: [0],
    listarGabrielFonte: [0],
    listarGabrielCabos: [0],
    listarGabrielBateria: [0],

    //Total Equipamentos Bruno
    listarBrunoCol: [0],
    listarBrunoImp: [0],
    listarBrunoLei: [0],
    listarBrunoBusca: [0],
    listarBrunoCar3: [0],
    listarBrunoCar4: [0],
    listarBrunoCar5: [0],
    listarBrunoCar6: [0],
    listarBrunoBerco: [0],
    listarBrunoFonte: [0],
    listarBrunoCabos: [0],
    listarBrunoBateria: [0],

    //Total Equipamentos Vinicius
    listarViniciusCol: [0],
    listarViniciusImp: [0],
    listarViniciusLei: [0],
    listarViniciusBusca: [0],
    listarViniciusCar3: [0],
    listarViniciusCar4: [0],
    listarViniciusCar5: [0],
    listarViniciusCar6: [0],
    listarViniciusBerco: [0],
    listarViniciusFonte: [0],
    listarViniciusCabos: [0],
    listarViniciusBateria: [0],

    //Total Equipamentos DiegoA
    listarDiegoACol: [0],
    listarDiegoAImp: [0],
    listarDiegoALei: [0],
    listarDiegoABusca: [0],
    listarDiegoACar3: [0],
    listarDiegoACar4: [0],
    listarDiegoACar5: [0],
    listarDiegoACar6: [0],
    listarDiegoABerco: [0],
    listarDiegoAFonte: [0],
    listarDiegoACabos: [0],
    listarDiegoABateria: [0],

    // //Total Equipamentos Anderson
    // listarAndersonCol: [0],
    // listarAndersonImp: [0],
    // listarAndersonLei: [0],
    // listarAndersonBusca: [0],
    // listarAndersonCar3: [0],
    // listarAndersonCar4: [0],
    // listarAndersonCar5: [0],
    // listarAndersonCar6: [0],
    // listarAndersonBerco: [0],
    // listarAndersonFonte: [0],
    // listarAndersonCabos: [0],

    //Total Equipamentos Marcio
    listarMarcioCol: [0],
    listarMarcioImp: [0],
    listarMarcioLei: [0],
    listarMarcioBusca: [0],
    listarMarcioCar3: [0],
    listarMarcioCar4: [0],
    listarMarcioCar5: [0],
    listarMarcioCar6: [0],
    listarMarcioBerco: [0],
    listarMarcioFonte: [0],
    listarMarcioCabos: [0],
    listarMarcioBateria: [0],

    //Total Equipamentos Cida
    listarCidaCol: [0],
    listarCidaImp: [0],
    listarCidaLei: [0],
    listarCidaBusca: [0],
    listarCidaCar3: [0],
    listarCidaCar4: [0],
    listarCidaCar5: [0],
    listarCidaCar6: [0],
    listarCidaBerco: [0],
    listarCidaFonte: [0],
    listarCidaCabos: [0],
    listarCidaBateria: [0],

    //Total Equipamentos Allan
    listarAllanCol: [0],
    listarAllanImp: [0],
    listarAllanLei: [0],
    listarAllanBusca: [0],
    listarAllanCar3: [0],
    listarAllanCar4: [0],
    listarAllanCar5: [0],
    listarAllanCar6: [0],
    listarAllanBerco: [0],
    listarAllanFonte: [0],
    listarAllanCabos: [0],
    listarAllanBateria: [0],

    //Total Equipamentos Douglas
    listarDouglasCol: [0],
    listarDouglasImp: [0],
    listarDouglasLei: [0],
    listarDouglasBusca: [0],
    listarDouglasCar3: [0],
    listarDouglasCar4: [0],
    listarDouglasCar5: [0],
    listarDouglasCar6: [0],
    listarDouglasBerco: [0],
    listarDouglasFonte: [0],
    listarDouglasCabos: [0],
    listarDouglasBateria: [0],

    //Total Equipamentos Kleiton
    listarKleitonCol: [0],
    listarKleitonImp: [0],
    listarKleitonLei: [0],
    listarKleitonBusca: [0],
    listarKleitonCar3: [0],
    listarKleitonCar4: [0],
    listarKleitonCar5: [0],
    listarKleitonCar6: [0],
    listarKleitonBerco: [0],
    listarKleitonFonte: [0],
    listarKleitonCabos: [0],
    listarKleitonBateria: [0],
}

const banco = "Geral";

const baseUrl = Url(banco);

export default class DashboardGerencia extends React.Component {
    state = { ...initialState }

    componentWillMount() {
        this.validacao()
        this.buscarDados()
        this.buscaPorTecnico("Diego Carvalho")
        this.buscaPorTecnico("Natanael Silva Lima")
        this.buscaPorTecnico("Mateus Doval")
        this.buscaPorTecnico("Lucas Felician")
        this.buscaPorTecnico("Diogo Selmini")
        this.buscaPorTecnico("Gabriel Kaique")
        this.buscaPorTecnico("Bruno Bedani")
        this.buscaPorTecnico("Vinicius Gomes")
        this.buscaPorTecnico("Diego Almeida")
        this.buscaPorTecnico("Marcio")
        this.buscaPorTecnico("Cida Zani")
        this.buscaPorTecnico("Allan Zulino")
        this.buscaPorTecnico("Douglas Altenfelder")
        this.buscaPorTecnico("Kleiton Paulino")
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
        let dadoRR = [];
        let dadoRC = [];
        let dadoRL = [];

        //variavel tecnico
        let dadoDiegoC = [];
        let dadoNatanael = [];
        let dadoBruno = [];
        let dadoVinicius = [];
        let dadoMateus = [];
        let dadoMarcio = [];
        let dadoGabriel = [];
        let dadoLucas = [];
        let dadoDiogo = [];
        let dadoDiegoA = [];
        let dadoAllan = [];
        let dadoCida = [];
        // let dadoAnderson = [];
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

        //total garantia
        let dadoGarantia = [];

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
            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                dadoRR.push({
                    OS: tabelaNome[i].OS
                })
            }
            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                dadoRC.push({
                    OS: tabelaNome[i].OS
                })
            }
            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                dadoRL.push({
                    OS: tabelaNome[i].OS
                })
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
            if (v.match(/Marcio/)) {
                dadoMarcio.push({
                    OS: tabelaNome[i].OS
                })
            }
            if (v.match(/Gabriel/)) {
                dadoGabriel.push({
                    OS: tabelaNome[i].OS
                })
            }
            if (v.match(/Lucas/)) {
                dadoLucas.push({
                    OS: tabelaNome[i].OS
                })
            }
            if (v.match(/Diogo/)) {
                dadoDiogo.push({
                    OS: tabelaNome[i].OS
                })
            }
            if (v.match(/Diego A/)) {
                dadoDiegoA.push({
                    OS: tabelaNome[i].OS
                })
            }
            if (v.match(/Allan/)) {
                dadoAllan.push({
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
            if ("Garantia" === tabelaNome[i].Status) {
                dadoGarantia.push({
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

        //variavel total
        let totalEquip = totalMC + totalLA + totalSR + totalRM + totalCO + totalRV +
            totalCC + totalMMV + totalRP + totalLP + totalRR + totalRC + totalRL

        //variavel Garantia
        let totalGarantia = Object.keys(dadoGarantia).length;

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
        // let totalAnderson = Object.keys(dadoAnderson).length;
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


            //busca total
            listarTotalEquip: totalEquip,
            listarTotalGarantia: totalGarantia,

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
            // listarAnderson: totalAnderson,
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
            listarDez: totalDez
        })
    }

    async buscarDadosFiltro(dia, mes, ano) {
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
        let dadoFRR = [];
        let dadoFRC = [];
        let dadoFRL = [];

        //variavel tecnico
        let dadoFDiegoC = [];
        let dadoFNatanael = [];
        let dadoFBruno = [];
        let dadoFVinicius = [];
        let dadoFMateus = [];
        let dadoFMarcio = [];
        let dadoFGabriel = [];
        let dadoFLucas = [];
        let dadoFDiogo = [];
        let dadoFDiegoA = [];
        let dadoFAllan = [];
        let dadoFCida = [];
        // let dadoFAnderson = [];
        let dadoFDouglas = [];
        let dadoFKleiton = [];

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

        //totalGarantia
        let dadoFGarantia = [];

        for (let i = 0; i < tabelaNome.length; i++) {
            let v = `${tabelaNome[i].Tecnico}`;

            //#region Ano

            if ((dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
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
                if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                    dadoFRR.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                    dadoFRC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                    dadoFRL.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diego C/)) {
                    dadoFDiegoC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Natanael/)) {
                    dadoFNatanael.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Bruno/)) {
                    dadoFBruno.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Vinicius/)) {
                    dadoFVinicius.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Mateus/)) {
                    dadoFMateus.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Marcio/)) {
                    dadoFMarcio.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Gabriel/)) {
                    dadoFGabriel.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Lucas/)) {
                    dadoFLucas.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diogo/)) {
                    dadoFDiogo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diego A/)) {
                    dadoFDiegoA.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Allan/)) {
                    dadoFAllan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Cida/)) {
                    dadoFCida.push({
                        OS: tabelaNome[i].OS
                    })
                }
                // if (v.match(/Anderson/)) {
                //     dadoFAnderson.push({
                //         OS: tabelaNome[i].OS
                //     })
                // }
                if (v.match(/Douglas/)) {
                    dadoFDouglas.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Kleiton/)) {
                    dadoFKleiton.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (1 === tabelaNome[i].Mes) {
                    dadoFJan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (2 === tabelaNome[i].Mes) {
                    dadoFFev.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (3 === tabelaNome[i].Mes) {
                    dadoFMar.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (4 === tabelaNome[i].Mes) {
                    dadoFAbr.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (5 === tabelaNome[i].Mes) {
                    dadoFMai.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (6 === tabelaNome[i].Mes) {
                    dadoFJun.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (7 === tabelaNome[i].Mes) {
                    dadoFJul.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (8 === tabelaNome[i].Mes) {
                    dadoFAgo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (9 === tabelaNome[i].Mes) {
                    dadoFSet.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (10 === tabelaNome[i].Mes) {
                    dadoFOut.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (11 === tabelaNome[i].Mes) {
                    dadoFNov.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (12 === tabelaNome[i].Mes) {
                    dadoFDez.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if ("Garantia" === tabelaNome[i].Status) {
                    dadoFGarantia.push({
                        OS: tabelaNome[i].OS
                    })
                }
            }
            //#endregion 

            //#region Mes Ano
            if ((dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
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
                if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                    dadoFRR.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                    dadoFRC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                    dadoFRL.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diego C/)) {
                    dadoFDiegoC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Natanael/)) {
                    dadoFNatanael.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Bruno/)) {
                    dadoFBruno.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Vinicius/)) {
                    dadoFVinicius.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Mateus/)) {
                    dadoFMateus.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Marcio/)) {
                    dadoFMarcio.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Gabriel/)) {
                    dadoFGabriel.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Lucas/)) {
                    dadoFLucas.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diogo/)) {
                    dadoFDiogo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diego A/)) {
                    dadoFDiegoA.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Allan/)) {
                    dadoFAllan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Cida/)) {
                    dadoFCida.push({
                        OS: tabelaNome[i].OS
                    })
                }
                // if (v.match(/Anderson/)) {
                //     dadoFAnderson.push({
                //         OS: tabelaNome[i].OS
                //     })
                // }
                if (v.match(/Douglas/)) {
                    dadoFDouglas.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Kleiton/)) {
                    dadoFKleiton.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (1 === tabelaNome[i].Mes) {
                    dadoFJan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (2 === tabelaNome[i].Mes) {
                    dadoFFev.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (3 === tabelaNome[i].Mes) {
                    dadoFMar.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (4 === tabelaNome[i].Mes) {
                    dadoFAbr.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (5 === tabelaNome[i].Mes) {
                    dadoFMai.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (6 === tabelaNome[i].Mes) {
                    dadoFJun.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (7 === tabelaNome[i].Mes) {
                    dadoFJul.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (8 === tabelaNome[i].Mes) {
                    dadoFAgo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (9 === tabelaNome[i].Mes) {
                    dadoFSet.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (10 === tabelaNome[i].Mes) {
                    dadoFOut.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (11 === tabelaNome[i].Mes) {
                    dadoFNov.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (12 === tabelaNome[i].Mes) {
                    dadoFDez.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if ("Garantia" === tabelaNome[i].Status) {
                    dadoFGarantia.push({
                        OS: tabelaNome[i].OS
                    })
                }
            }
            //#endregion 

            //#region Dia Mes Ano 
            if ((dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
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
                if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                    dadoFRR.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                    dadoFRC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                    dadoFRL.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diego C/)) {
                    dadoFDiegoC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Natanael/)) {
                    dadoFNatanael.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Bruno/)) {
                    dadoFBruno.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Vinicius/)) {
                    dadoFVinicius.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Mateus/)) {
                    dadoFMateus.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Marcio/)) {
                    dadoFMarcio.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Gabriel/)) {
                    dadoFGabriel.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Lucas/)) {
                    dadoFLucas.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diogo/)) {
                    dadoFDiogo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Diego A/)) {
                    dadoFDiegoA.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Allan/)) {
                    dadoFAllan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Cida/)) {
                    dadoFCida.push({
                        OS: tabelaNome[i].OS
                    })
                }
                // if (v.match(/Anderson/)) {
                //     dadoFAnderson.push({
                //         OS: tabelaNome[i].OS
                //     })
                // }
                if (v.match(/Douglas/)) {
                    dadoFDouglas.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (v.match(/Kleiton/)) {
                    dadoFKleiton.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (1 === tabelaNome[i].Mes) {
                    dadoFJan.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (2 === tabelaNome[i].Mes) {
                    dadoFFev.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (3 === tabelaNome[i].Mes) {
                    dadoFMar.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (4 === tabelaNome[i].Mes) {
                    dadoFAbr.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (5 === tabelaNome[i].Mes) {
                    dadoFMai.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (6 === tabelaNome[i].Mes) {
                    dadoFJun.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (7 === tabelaNome[i].Mes) {
                    dadoFJul.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (8 === tabelaNome[i].Mes) {
                    dadoFAgo.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (9 === tabelaNome[i].Mes) {
                    dadoFSet.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (10 === tabelaNome[i].Mes) {
                    dadoFOut.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (11 === tabelaNome[i].Mes) {
                    dadoFNov.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if (12 === tabelaNome[i].Mes) {
                    dadoFDez.push({
                        OS: tabelaNome[i].OS
                    })
                }
                if ("Garantia" === tabelaNome[i].Status) {
                    dadoFGarantia.push({
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
        let totalFRR = Object.keys(dadoFRR).length;
        let totalFRC = Object.keys(dadoFRC).length;
        let totalFRL = Object.keys(dadoFRL).length;

        //variavel total
        let totalFEquip = totalFMC + totalFLA + totalFSR + totalFRM + totalFCO + totalFRV +
            totalFCC + totalFMMV + totalFRP + totalFLP + totalFRR + totalFRC + totalFRL

        //total Garantia
        let totalFGarantia = Object.keys(dadoFGarantia).length;

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
        // let totalFAnderson = Object.keys(dadoFAnderson).length;
        let totalFDouglas = Object.keys(dadoFDouglas).length;
        let totalFKleiton = Object.keys(dadoFKleiton).length;

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
            listarRR: totalFRR,
            listarRC: totalFRC,
            listarRL: totalFRL,


            //busca totalF
            listarTotalEquip: totalFEquip,
            listarTotalGarantia: totalFGarantia,

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
            // listarAnderson: totalFAnderson,
            listarDouglas: totalFDouglas,
            listarKleiton: totalFKleiton,

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
            this.buscaPorTecnico("Diego Carvalho")
            this.buscaPorTecnico("Natanael Silva Lima")
            this.buscaPorTecnico("Mateus Doval")
            this.buscaPorTecnico("Lucas Felician")
            this.buscaPorTecnico("Diogo Selmini")
            this.buscaPorTecnico("Gabriel Kaique")
            this.buscaPorTecnico("Bruno Bedani")
            this.buscaPorTecnico("Vinicius Gomes")
            this.buscaPorTecnico("Diego Almeida")
            this.buscaPorTecnico("Marcio")
            this.buscaPorTecnico("Cida Zani")
            this.buscaPorTecnico("Allan Zulino")
            this.buscaPorTecnico("Douglas Altenfelder")
            this.buscaPorTecnico("Kleiton Paulino")
            console.log("Sem Filtro")
        } else if ((dia === "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
            this.buscarPorTecnicoFiltro("Diego Carvalho", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Natanael Silva Lima", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Mateus Doval", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Lucas Felician", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Diogo Selmini", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Gabriel Kaique", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Bruno Bedani", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Vinicius Gomes", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Diego Almeida", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Marcio", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Cida Zani", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Allan Zulino", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Douglas Altenfelder", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Kleiton Paulino", dia, mes, ano)
            this.buscarDadosFiltro(dia, mes, ano)
        } else if ((dia !== "Todos") && (ano !== "Todos") && (mes !== "Todos")) {
            this.buscarPorTecnicoFiltro("Diego Carvalho", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Natanael Silva Lima", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Mateus Doval", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Lucas Felician", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Diogo Selmini", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Gabriel Kaique", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Bruno Bedani", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Vinicius Gomes", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Diego Almeida", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Marcio", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Cida Zani", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Allan Zulino", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Douglas Altenfelder", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Kleiton Paulino", dia, mes, ano)
            this.buscarDadosFiltro(dia, mes, ano)
        } else if ((dia === "Todos") && (ano !== "Todos") && (mes === "Todos")) {
            this.buscarPorTecnicoFiltro("Diego Carvalho", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Natanael Silva Lima", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Mateus Doval", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Lucas Felician", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Diogo Selmini", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Gabriel Kaique", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Bruno Bedani", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Vinicius Gomes", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Diego Almeida", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Marcio", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Cida Zani", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Allan Zulino", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Douglas Altenfelder", dia, mes, ano)
            this.buscarPorTecnicoFiltro("Kleiton Paulino", dia, mes, ano)
            this.buscarDadosFiltro(dia, mes, ano)
        }
    }

    async buscaPorTecnico(tecnico) {

        const tabelaNome = await axios(baseUrl).then(resp => resp.data)

        if (tecnico === "Diego Carvalho") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarDiegoCMC: totalTMC,
                listarDiegoCLA: totalTLA,
                listarDiegoCSR: totalTSR,
                listarDiegoCRM: totalTRM,
                listarDiegoCCO: totalTCO,
                listarDiegoCRV: totalTRV,
                listarDiegoCCC: totalTCC,
                listarDiegoCMMV: totalTMMV,
                listarDiegoCRP: totalTRP,
                listarDiegoCLP: totalTLP,
                listarDiegoCRR: totalTRR,
                listarDiegoCRC: totalTRC,
                listarDiegoCRL: totalTRL,

                //busca total
                listarTotalDiegoC: totalTEquip,

                //listart total por equipamento
                listarDiegoCCol: totalCol,
                listarDiegoCImp: totalImp,
                listarDiegoCLei: totalLei,
                listarDiegoCBusca: totalBusca,
                listarDiegoCCar3: totalCar3,
                listarDiegoCCar4: totalCar4,
                listarDiegoCCar5: totalCar5,
                listarDiegoCCar6: totalCar6,
                listarDiegoCBerco: totalBerco,
                listarDiegoCFonte: totalFonte,
                listarDiegoCCabos: totalCabo,
                listarDiegoCBateria: totalBateria
            })
        }

        if (tecnico === "Natanael Silva Lima") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarNataMC: totalTMC,
                listarNataLA: totalTLA,
                listarNataSR: totalTSR,
                listarNataRM: totalTRM,
                listarNataCO: totalTCO,
                listarNataRV: totalTRV,
                listarNataCC: totalTCC,
                listarNataMMV: totalTMMV,
                listarNataRP: totalTRP,
                listarNataLP: totalTLP,
                listarNataRR: totalTRR,
                listarNataRC: totalTRC,
                listarNataRL: totalTRL,

                //busca total
                listarTotalNata: totalTEquip,

                //listart total por equipamento
                listarNataCol: totalCol,
                listarNataImp: totalImp,
                listarNataLei: totalLei,
                listarNataBusca: totalBusca,
                listarNataCar3: totalCar3,
                listarNataCar4: totalCar4,
                listarNataCar5: totalCar5,
                listarNataCar6: totalCar6,
                listarNataBerco: totalBerco,
                listarNataFonte: totalFonte,
                listarNataCabos: totalCabo,
                listarNataBateria: totalBateria
            })
        }

        if (tecnico === "Mateus Doval") {


            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;


            return this.setState({
                //busca servico
                listarMateusMC: totalTMC,
                listarMateusLA: totalTLA,
                listarMateusSR: totalTSR,
                listarMateusRM: totalTRM,
                listarMateusCO: totalTCO,
                listarMateusRV: totalTRV,
                listarMateusCC: totalTCC,
                listarMateusMMV: totalTMMV,
                listarMateusRP: totalTRP,
                listarMateusLP: totalTLP,
                listarMateusRR: totalTRR,
                listarMateusRC: totalTRC,
                listarMateusRL: totalTRL,

                //busca total
                listarTotalMateus: totalTEquip,

                //listart total por equipamento
                listarMateusCol: totalCol,
                listarMateusImp: totalImp,
                listarMateusLei: totalLei,
                listarMateusBusca: totalBusca,
                listarMateusCar3: totalCar3,
                listarMateusCar4: totalCar4,
                listarMateusCar5: totalCar5,
                listarMateusCar6: totalCar6,
                listarMateusBerco: totalBerco,
                listarMateusFonte: totalFonte,
                listarMateusCabos: totalCabo,
                listarMateusBateria: totalBateria
            })
        }

        if (tecnico === "Lucas Felician") {


            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarLucasMC: totalTMC,
                listarLucasLA: totalTLA,
                listarLucasSR: totalTSR,
                listarLucasRM: totalTRM,
                listarLucasCO: totalTCO,
                listarLucasRV: totalTRV,
                listarLucasCC: totalTCC,
                listarLucasMMV: totalTMMV,
                listarLucasRP: totalTRP,
                listarLucasLP: totalTLP,
                listarLucasRR: totalTRR,
                listarLucasRC: totalTRC,
                listarLucasRL: totalTRL,

                //busca total
                listarTotalLucas: totalTEquip,

                //listart total por equipamento
                listarLucasCol: totalCol,
                listarLucasImp: totalImp,
                listarLucasLei: totalLei,
                listarLucasBusca: totalBusca,
                listarLucasCar3: totalCar3,
                listarLucasCar4: totalCar4,
                listarLucasCar5: totalCar5,
                listarLucasCar6: totalCar6,
                listarLucasBerco: totalBerco,
                listarLucasFonte: totalFonte,
                listarLucasCabos: totalCabo,
                listarLucasBateria: totalBateria
            })
        }

        if (tecnico === "Diogo Selmini") {


            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarDiogoMC: totalTMC,
                listarDiogoLA: totalTLA,
                listarDiogoSR: totalTSR,
                listarDiogoRM: totalTRM,
                listarDiogoCO: totalTCO,
                listarDiogoRV: totalTRV,
                listarDiogoCC: totalTCC,
                listarDiogoMMV: totalTMMV,
                listarDiogoRP: totalTRP,
                listarDiogoLP: totalTLP,
                listarDiogoRR: totalTRR,
                listarDiogoRC: totalTRC,
                listarDiogoRL: totalTRL,

                //busca total
                listarTotalDiogo: totalTEquip,

                //listart total por equipamento
                listarDiogoCol: totalCol,
                listarDiogoImp: totalImp,
                listarDiogoLei: totalLei,
                listarDiogoBusca: totalBusca,
                listarDiogoCar3: totalCar3,
                listarDiogoCar4: totalCar4,
                listarDiogoCar5: totalCar5,
                listarDiogoCar6: totalCar6,
                listarDiogoBerco: totalBerco,
                listarDiogoFonte: totalFonte,
                listarDiogoCabos: totalCabo,
                listarDiogoBateria: totalBateria
            })
        }

        if (tecnico === "Gabriel Kaique") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarGabrielMC: totalTMC,
                listarGabrielLA: totalTLA,
                listarGabrielSR: totalTSR,
                listarGabrielRM: totalTRM,
                listarGabrielCO: totalTCO,
                listarGabrielRV: totalTRV,
                listarGabrielCC: totalTCC,
                listarGabrielMMV: totalTMMV,
                listarGabrielRP: totalTRP,
                listarGabrielLP: totalTLP,
                listarGabrielRR: totalTRR,
                listarGabrielRC: totalTRC,
                listarGabrielRL: totalTRL,

                //busca total
                listarTotalGabriel: totalTEquip,

                //listart total por equipamento
                listarGabrielCol: totalCol,
                listarGabrielImp: totalImp,
                listarGabrielLei: totalLei,
                listarGabrielBusca: totalBusca,
                listarGabrielCar3: totalCar3,
                listarGabrielCar4: totalCar4,
                listarGabrielCar5: totalCar5,
                listarGabrielCar6: totalCar6,
                listarGabrielBerco: totalBerco,
                listarGabrielFonte: totalFonte,
                listarGabrielCabos: totalCabo,
                listarGabrielBateria: totalBateria
            })
        }

        if (tecnico === "Bruno Bedani") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarBrunoMC: totalTMC,
                listarBrunoLA: totalTLA,
                listarBrunoSR: totalTSR,
                listarBrunoRM: totalTRM,
                listarBrunoCO: totalTCO,
                listarBrunoRV: totalTRV,
                listarBrunoCC: totalTCC,
                listarBrunoMMV: totalTMMV,
                listarBrunoRP: totalTRP,
                listarBrunoLP: totalTLP,
                listarBrunoRR: totalTRR,
                listarBrunoRC: totalTRC,
                listarBrunoRL: totalTRL,

                //busca total
                listarTotalBruno: totalTEquip,

                //listart total por equipamento
                listarBrunoCol: totalCol,
                listarBrunoImp: totalImp,
                listarBrunoLei: totalLei,
                listarBrunoBusca: totalBusca,
                listarBrunoCar3: totalCar3,
                listarBrunoCar4: totalCar4,
                listarBrunoCar5: totalCar5,
                listarBrunoCar6: totalCar6,
                listarBrunoBerco: totalBerco,
                listarBrunoFonte: totalFonte,
                listarBrunoCabos: totalCabo,
                listarBrunoBateria: totalBateria
            })
        }

        if (tecnico === "Vinicius Gomes") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarViniciusMC: totalTMC,
                listarViniciusLA: totalTLA,
                listarViniciusSR: totalTSR,
                listarViniciusRM: totalTRM,
                listarViniciusCO: totalTCO,
                listarViniciusRV: totalTRV,
                listarViniciusCC: totalTCC,
                listarViniciusMMV: totalTMMV,
                listarViniciusRP: totalTRP,
                listarViniciusLP: totalTLP,
                listarViniciusRR: totalTRR,
                listarViniciusRC: totalTRC,
                listarViniciusRL: totalTRL,

                //busca total
                listarTotalVinicius: totalTEquip,

                //listart total por equipamento
                listarViniciusCol: totalCol,
                listarViniciusImp: totalImp,
                listarViniciusLei: totalLei,
                listarViniciusBusca: totalBusca,
                listarViniciusCar3: totalCar3,
                listarViniciusCar4: totalCar4,
                listarViniciusCar5: totalCar5,
                listarViniciusCar6: totalCar6,
                listarViniciusBerco: totalBerco,
                listarViniciusFonte: totalFonte,
                listarViniciusCabos: totalCabo,
                listarViniciusBateria: totalBateria
            })
        }

        if (tecnico === "Diego Almeida") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarDiegoAMC: totalTMC,
                listarDiegoALA: totalTLA,
                listarDiegoASR: totalTSR,
                listarDiegoARM: totalTRM,
                listarDiegoACO: totalTCO,
                listarDiegoARV: totalTRV,
                listarDiegoACC: totalTCC,
                listarDiegoAMMV: totalTMMV,
                listarDiegoARP: totalTRP,
                listarDiegoALP: totalTLP,
                listarDiegoARR: totalTRR,
                listarDiegoARC: totalTRC,
                listarDiegoARL: totalTRL,

                //busca total
                listarTotalDiegoA: totalTEquip,

                //listart total por equipamento
                listarDiegoACol: totalCol,
                listarDiegoAImp: totalImp,
                listarDiegoALei: totalLei,
                listarDiegoABusca: totalBusca,
                listarDiegoACar3: totalCar3,
                listarDiegoACar4: totalCar4,
                listarDiegoACar5: totalCar5,
                listarDiegoACar6: totalCar6,
                listarDiegoABerco: totalBerco,
                listarDiegoAFonte: totalFonte,
                listarDiegoACabos: totalCabo,
                listarDiegoABateria: totalBateria
            })
        }

        if (tecnico === "Marcio") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarMarcioMC: totalTMC,
                listarMarcioLA: totalTLA,
                listarMarcioSR: totalTSR,
                listarMarcioRM: totalTRM,
                listarMarcioCO: totalTCO,
                listarMarcioRV: totalTRV,
                listarMarcioCC: totalTCC,
                listarMarcioMMV: totalTMMV,
                listarMarcioRP: totalTRP,
                listarMarcioLP: totalTLP,
                listarMarcioRR: totalTRR,
                listarMarcioRC: totalTRC,
                listarMarcioRL: totalTRL,

                //busca total
                listarTotalMarcio: totalTEquip,

                //listart total por equipamento
                listarMarcioCol: totalCol,
                listarMarcioImp: totalImp,
                listarMarcioLei: totalLei,
                listarMarcioBusca: totalBusca,
                listarMarcioCar3: totalCar3,
                listarMarcioCar4: totalCar4,
                listarMarcioCar5: totalCar5,
                listarMarcioCar6: totalCar6,
                listarMarcioBerco: totalBerco,
                listarMarcioFonte: totalFonte,
                listarMarcioCabos: totalCabo,
                listarMarcioBateria: totalBateria
            })
        }

        if (tecnico === "Cida Zani") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarCidaMC: totalTMC,
                listarCidaLA: totalTLA,
                listarCidaSR: totalTSR,
                listarCidaRM: totalTRM,
                listarCidaCO: totalTCO,
                listarCidaRV: totalTRV,
                listarCidaCC: totalTCC,
                listarCidaMMV: totalTMMV,
                listarCidaRP: totalTRP,
                listarCidaLP: totalTLP,
                listarCidaRR: totalTRR,
                listarCidaRC: totalTRC,
                listarCidaRL: totalTRL,

                //busca total
                listarTotalCida: totalTEquip,

                //listart total por equipamento
                listarCidaCol: totalCol,
                listarCidaImp: totalImp,
                listarCidaLei: totalLei,
                listarCidaBusca: totalBusca,
                listarCidaCar3: totalCar3,
                listarCidaCar4: totalCar4,
                listarCidaCar5: totalCar5,
                listarCidaCar6: totalCar6,
                listarCidaBerco: totalBerco,
                listarCidaFonte: totalFonte,
                listarCidaCabos: totalCabo,
                listarCidaBateria: totalBateria
            })
        }

        if (tecnico === "Allan Zulino") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarAllanMC: totalTMC,
                listarAllanLA: totalTLA,
                listarAllanSR: totalTSR,
                listarAllanRM: totalTRM,
                listarAllanCO: totalTCO,
                listarAllanRV: totalTRV,
                listarAllanCC: totalTCC,
                listarAllanMMV: totalTMMV,
                listarAllanRP: totalTRP,
                listarAllanLP: totalTLP,
                listarAllanRR: totalTRR,
                listarAllanRC: totalTRC,
                listarAllanRL: totalTRL,

                //busca total
                listarTotalAllan: totalTEquip,

                //listart total por equipamento
                listarAllanCol: totalCol,
                listarAllanImp: totalImp,
                listarAllanLei: totalLei,
                listarAllanBusca: totalBusca,
                listarAllanCar3: totalCar3,
                listarAllanCar4: totalCar4,
                listarAllanCar5: totalCar5,
                listarAllanCar6: totalCar6,
                listarAllanBerco: totalBerco,
                listarAllanFonte: totalFonte,
                listarAllanCabos: totalCabo,
                listarAllanBateria: totalBateria
            })
        }

        if (tecnico === "Douglas Altenfelder") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarDouglasMC: totalTMC,
                listarDouglasLA: totalTLA,
                listarDouglasSR: totalTSR,
                listarDouglasRM: totalTRM,
                listarDouglasCO: totalTCO,
                listarDouglasRV: totalTRV,
                listarDouglasCC: totalTCC,
                listarDouglasMMV: totalTMMV,
                listarDouglasRP: totalTRP,
                listarDouglasLP: totalTLP,
                listarDouglasRR: totalTRR,
                listarDouglasRC: totalTRC,
                listarDouglasRL: totalTRL,

                //busca total
                listarTotalDouglas: totalTEquip,

                //listart total por equipamento
                listarDouglasCol: totalCol,
                listarDouglasImp: totalImp,
                listarDouglasLei: totalLei,
                listarDouglasBusca: totalBusca,
                listarDouglasCar3: totalCar3,
                listarDouglasCar4: totalCar4,
                listarDouglasCar5: totalCar5,
                listarDouglasCar6: totalCar6,
                listarDouglasBerco: totalBerco,
                listarDouglasFonte: totalFonte,
                listarDouglasCabos: totalCabo,
                listarDouglasBateria: totalBateria
            })
        }

        if (tecnico === "Kleiton Paulino") {

            //variavel servico
            let dadoTMC = [];
            let dadoTLA = [];
            let dadoTSR = [];
            let dadoTRM = [];
            let dadoTCO = [];
            let dadoTRV = [];
            let dadoTCC = [];
            let dadoTMMV = [];
            let dadoTRP = [];
            let dadoTLP = [];
            let dadoTRR = [];
            let dadoTRC = [];
            let dadoTRL = [];

            //dados por equipamento
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
            let dadoBateria = [];

            for (let i = 0; i < tabelaNome.length; i++) {

                if (tecnico === tabelaNome[i].Tecnico) {
                    if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                        dadoTMC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Laudo" === tabelaNome[i].Servico)) {
                        dadoTLA.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                        dadoTSR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                        dadoTRM.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                        dadoTCO.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                        dadoTRV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                        dadoTCC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                        dadoTMMV.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                        dadoTRP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Limpeza" === tabelaNome[i].Servico)) {
                        dadoTLP.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                        dadoTRR.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                        dadoTRC.push({
                            OS: tabelaNome[i].OS
                        })
                    }
                    if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                        dadoTRL.push({
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
                }
            }

            //variavel servico
            let totalTMC = Object.keys(dadoTMC).length;
            let totalTLA = Object.keys(dadoTLA).length;
            let totalTSR = Object.keys(dadoTSR).length;
            let totalTRM = Object.keys(dadoTRM).length;
            let totalTCO = Object.keys(dadoTCO).length;
            let totalTRV = Object.keys(dadoTRV).length;
            let totalTCC = Object.keys(dadoTCC).length;
            let totalTMMV = Object.keys(dadoTMMV).length;
            let totalTRP = Object.keys(dadoTRP).length;
            let totalTLP = Object.keys(dadoTLP).length;
            let totalTRR = Object.keys(dadoTRR).length;
            let totalTRC = Object.keys(dadoTRC).length;
            let totalTRL = Object.keys(dadoTRL).length;

            //total
            let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

            //Variavel Total por equipamento
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
            let totalBateria = Object.keys(dadoBateria).length;

            return this.setState({
                //busca servico
                listarKleitonMC: totalTMC,
                listarKleitonLA: totalTLA,
                listarKleitonSR: totalTSR,
                listarKleitonRM: totalTRM,
                listarKleitonCO: totalTCO,
                listarKleitonRV: totalTRV,
                listarKleitonCC: totalTCC,
                listarKleitonMMV: totalTMMV,
                listarKleitonRP: totalTRP,
                listarKleitonLP: totalTLP,
                listarKleitonRR: totalTRR,
                listarKleitonRC: totalTRC,
                listarKleitonRL: totalTRL,

                //busca total
                listarTotalKleiton: totalTEquip,

                //listart total por equipamento
                listarKleitonCol: totalCol,
                listarKleitonImp: totalImp,
                listarKleitonLei: totalLei,
                listarKleitonBusca: totalBusca,
                listarKleitonCar3: totalCar3,
                listarKleitonCar4: totalCar4,
                listarKleitonCar5: totalCar5,
                listarKleitonCar6: totalCar6,
                listarKleitonBerco: totalBerco,
                listarKleitonFonte: totalFonte,
                listarKleitonCabos: totalCabo,
                listarKleitonBateria: totalBateria
            })
        }
    }

    async buscarPorTecnicoFiltro(tecnico, dia, mes, ano) {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)

        //#region Ano
        if ((dia === "Todos") && (ano !== "Todos") && (mes === "Todos")) {

            if (tecnico === "Diego Carvalho") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];
                let dadoTRR = [];
                let dadoTRC = [];
                let dadoTRL = [];

                //dados por equipamento
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
                let dadoBateria = [];

                for (let i = 0; i < tabelaNome.length; i++) {

                    if (ano === `${tabelaNome[i].Ano}`) {

                        if (tecnico === tabelaNome[i].Tecnico) {
                            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                                dadoTMC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Laudo" === tabelaNome[i].Servico)) {
                                dadoTLA.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                                dadoTSR.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                                dadoTRM.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                                dadoTCO.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                                dadoTRV.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                                dadoTCC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                                dadoTMMV.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                                dadoTRP.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Limpeza" === tabelaNome[i].Servico)) {
                                dadoTLP.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Revisão de Reprovado" === tabelaNome[i].Servico)) {
                                dadoTRR.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Revisão de Compra" === tabelaNome[i].Servico)) {
                                dadoTRC.push({
                                    OS: tabelaNome[i].OS
                                })
                            }
                            if (("Revisão/Manutenção de Locação" === tabelaNome[i].Servico)) {
                                dadoTRL.push({
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
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;
                let totalTRR = Object.keys(dadoTRR).length;
                let totalTRC = Object.keys(dadoTRC).length;
                let totalTRL = Object.keys(dadoTRL).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP + totalTRR + totalTRC + totalTRL

                //Variavel Total por equipamento
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
                let totalBateria = Object.keys(dadoBateria).length;

                return this.setState({
                    //busca servico
                    listarDiegoCMC: totalTMC,
                    listarDiegoCLA: totalTLA,
                    listarDiegoCSR: totalTSR,
                    listarDiegoCRM: totalTRM,
                    listarDiegoCCO: totalTCO,
                    listarDiegoCRV: totalTRV,
                    listarDiegoCCC: totalTCC,
                    listarDiegoCMMV: totalTMMV,
                    listarDiegoCRP: totalTRP,
                    listarDiegoCLP: totalTLP,
                    listarDiegoCRR: totalTRR,
                    listarDiegoCRC: totalTRC,
                    listarDiegoCRL: totalTRL,

                    //busca total
                    listarTotalDiegoC: totalTEquip,

                    //listart total por equipamento
                    listarDiegoCCol: totalCol,
                    listarDiegoCImp: totalImp,
                    listarDiegoCLei: totalLei,
                    listarDiegoCBusca: totalBusca,
                    listarDiegoCCar3: totalCar3,
                    listarDiegoCCar4: totalCar4,
                    listarDiegoCCar5: totalCar5,
                    listarDiegoCCar6: totalCar6,
                    listarDiegoCBerco: totalBerco,
                    listarDiegoCFonte: totalFonte,
                    listarDiegoCCabos: totalCabo,
                    listarDiegoCBateria: totalBateria
                })
            }

            if (tecnico === "Natanael Silva Lima") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarNataMC: totalTMC,
                    listarNataLA: totalTLA,
                    listarNataSR: totalTSR,
                    listarNataRM: totalTRM,
                    listarNataCO: totalTCO,
                    listarNataRV: totalTRV,
                    listarNataCC: totalTCC,
                    listarNataMMV: totalTMMV,
                    listarNataRP: totalTRP,
                    listarNataLP: totalTLP,

                    //busca total
                    listarTotalNata: totalTEquip,

                    //listart total por equipamento
                    listarNataCol: totalCol,
                    listarNataImp: totalImp,
                    listarNataLei: totalLei,
                    listarNataBusca: totalBusca,
                    listarNataCar3: totalCar3,
                    listarNataCar4: totalCar4,
                    listarNataCar5: totalCar5,
                    listarNataCar6: totalCar6,
                    listarNataBerco: totalBerco,
                    listarNataFonte: totalFonte,
                    listarNataCabos: totalCabo
                })
            }

            if (tecnico === "Mateus Doval") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarMateusMC: totalTMC,
                    listarMateusLA: totalTLA,
                    listarMateusSR: totalTSR,
                    listarMateusRM: totalTRM,
                    listarMateusCO: totalTCO,
                    listarMateusRV: totalTRV,
                    listarMateusCC: totalTCC,
                    listarMateusMMV: totalTMMV,
                    listarMateusRP: totalTRP,
                    listarMateusLP: totalTLP,

                    //busca total
                    listarTotalMateus: totalTEquip,

                    //listart total por equipamento
                    listarMateusCol: totalCol,
                    listarMateusImp: totalImp,
                    listarMateusLei: totalLei,
                    listarMateusBusca: totalBusca,
                    listarMateusCar3: totalCar3,
                    listarMateusCar4: totalCar4,
                    listarMateusCar5: totalCar5,
                    listarMateusCar6: totalCar6,
                    listarMateusBerco: totalBerco,
                    listarMateusFonte: totalFonte,
                    listarMateusCabos: totalCabo
                })
            }

            if (tecnico === "Lucas Felician") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarLucasMC: totalTMC,
                    listarLucasLA: totalTLA,
                    listarLucasSR: totalTSR,
                    listarLucasRM: totalTRM,
                    listarLucasCO: totalTCO,
                    listarLucasRV: totalTRV,
                    listarLucasCC: totalTCC,
                    listarLucasMMV: totalTMMV,
                    listarLucasRP: totalTRP,
                    listarLucasLP: totalTLP,

                    //busca total
                    listarTotalLucas: totalTEquip,

                    //listart total por equipamento
                    listarLucasCol: totalCol,
                    listarLucasImp: totalImp,
                    listarLucasLei: totalLei,
                    listarLucasBusca: totalBusca,
                    listarLucasCar3: totalCar3,
                    listarLucasCar4: totalCar4,
                    listarLucasCar5: totalCar5,
                    listarLucasCar6: totalCar6,
                    listarLucasBerco: totalBerco,
                    listarLucasFonte: totalFonte,
                    listarLucasCabos: totalCabo
                })
            }

            if (tecnico === "Diogo Selmini") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiogoMC: totalTMC,
                    listarDiogoLA: totalTLA,
                    listarDiogoSR: totalTSR,
                    listarDiogoRM: totalTRM,
                    listarDiogoCO: totalTCO,
                    listarDiogoRV: totalTRV,
                    listarDiogoCC: totalTCC,
                    listarDiogoMMV: totalTMMV,
                    listarDiogoRP: totalTRP,
                    listarDiogoLP: totalTLP,

                    //busca total
                    listarTotalDiogo: totalTEquip,

                    //listart total por equipamento
                    listarDiogoCol: totalCol,
                    listarDiogoImp: totalImp,
                    listarDiogoLei: totalLei,
                    listarDiogoBusca: totalBusca,
                    listarDiogoCar3: totalCar3,
                    listarDiogoCar4: totalCar4,
                    listarDiogoCar5: totalCar5,
                    listarDiogoCar6: totalCar6,
                    listarDiogoBerco: totalBerco,
                    listarDiogoFonte: totalFonte,
                    listarDiogoCabos: totalCabo
                })
            }

            if (tecnico === "Gabriel Kaique") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarGabrielMC: totalTMC,
                    listarGabrielLA: totalTLA,
                    listarGabrielSR: totalTSR,
                    listarGabrielRM: totalTRM,
                    listarGabrielCO: totalTCO,
                    listarGabrielRV: totalTRV,
                    listarGabrielCC: totalTCC,
                    listarGabrielMMV: totalTMMV,
                    listarGabrielRP: totalTRP,
                    listarGabrielLP: totalTLP,

                    //busca total
                    listarTotalGabriel: totalTEquip,

                    //listart total por equipamento
                    listarGabrielCol: totalCol,
                    listarGabrielImp: totalImp,
                    listarGabrielLei: totalLei,
                    listarGabrielBusca: totalBusca,
                    listarGabrielCar3: totalCar3,
                    listarGabrielCar4: totalCar4,
                    listarGabrielCar5: totalCar5,
                    listarGabrielCar6: totalCar6,
                    listarGabrielBerco: totalBerco,
                    listarGabrielFonte: totalFonte,
                    listarGabrielCabos: totalCabo
                })
            }

            if (tecnico === "Bruno Bedani") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarBrunoMC: totalTMC,
                    listarBrunoLA: totalTLA,
                    listarBrunoSR: totalTSR,
                    listarBrunoRM: totalTRM,
                    listarBrunoCO: totalTCO,
                    listarBrunoRV: totalTRV,
                    listarBrunoCC: totalTCC,
                    listarBrunoMMV: totalTMMV,
                    listarBrunoRP: totalTRP,
                    listarBrunoLP: totalTLP,

                    //busca total
                    listarTotalBruno: totalTEquip,

                    //listart total por equipamento
                    listarBrunoCol: totalCol,
                    listarBrunoImp: totalImp,
                    listarBrunoLei: totalLei,
                    listarBrunoBusca: totalBusca,
                    listarBrunoCar3: totalCar3,
                    listarBrunoCar4: totalCar4,
                    listarBrunoCar5: totalCar5,
                    listarBrunoCar6: totalCar6,
                    listarBrunoBerco: totalBerco,
                    listarBrunoFonte: totalFonte,
                    listarBrunoCabos: totalCabo
                })
            }

            if (tecnico === "Vinicius Gomes") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarViniciusMC: totalTMC,
                    listarViniciusLA: totalTLA,
                    listarViniciusSR: totalTSR,
                    listarViniciusRM: totalTRM,
                    listarViniciusCO: totalTCO,
                    listarViniciusRV: totalTRV,
                    listarViniciusCC: totalTCC,
                    listarViniciusMMV: totalTMMV,
                    listarViniciusRP: totalTRP,
                    listarViniciusLP: totalTLP,

                    //busca total
                    listarTotalVinicius: totalTEquip,

                    //listart total por equipamento
                    listarViniciusCol: totalCol,
                    listarViniciusImp: totalImp,
                    listarViniciusLei: totalLei,
                    listarViniciusBusca: totalBusca,
                    listarViniciusCar3: totalCar3,
                    listarViniciusCar4: totalCar4,
                    listarViniciusCar5: totalCar5,
                    listarViniciusCar6: totalCar6,
                    listarViniciusBerco: totalBerco,
                    listarViniciusFonte: totalFonte,
                    listarViniciusCabos: totalCabo
                })
            }

            if (tecnico === "Diego Almeida") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiegoAMC: totalTMC,
                    listarDiegoALA: totalTLA,
                    listarDiegoASR: totalTSR,
                    listarDiegoARM: totalTRM,
                    listarDiegoACO: totalTCO,
                    listarDiegoARV: totalTRV,
                    listarDiegoACC: totalTCC,
                    listarDiegoAMMV: totalTMMV,
                    listarDiegoARP: totalTRP,
                    listarDiegoALP: totalTLP,

                    //busca total
                    listarTotalDiegoA: totalTEquip,

                    //listart total por equipamento
                    listarDiegoACol: totalCol,
                    listarDiegoAImp: totalImp,
                    listarDiegoALei: totalLei,
                    listarDiegoABusca: totalBusca,
                    listarDiegoACar3: totalCar3,
                    listarDiegoACar4: totalCar4,
                    listarDiegoACar5: totalCar5,
                    listarDiegoACar6: totalCar6,
                    listarDiegoABerco: totalBerco,
                    listarDiegoAFonte: totalFonte,
                    listarDiegoACabos: totalCabo
                })
            }

            if (tecnico === "Marcio") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarMarcioMC: totalTMC,
                    listarMarcioLA: totalTLA,
                    listarMarcioSR: totalTSR,
                    listarMarcioRM: totalTRM,
                    listarMarcioCO: totalTCO,
                    listarMarcioRV: totalTRV,
                    listarMarcioCC: totalTCC,
                    listarMarcioMMV: totalTMMV,
                    listarMarcioRP: totalTRP,
                    listarMarcioLP: totalTLP,

                    //busca total
                    listarTotalMarcio: totalTEquip,

                    //listart total por equipamento
                    listarMarcioCol: totalCol,
                    listarMarcioImp: totalImp,
                    listarMarcioLei: totalLei,
                    listarMarcioBusca: totalBusca,
                    listarMarcioCar3: totalCar3,
                    listarMarcioCar4: totalCar4,
                    listarMarcioCar5: totalCar5,
                    listarMarcioCar6: totalCar6,
                    listarMarcioBerco: totalBerco,
                    listarMarcioFonte: totalFonte,
                    listarMarcioCabos: totalCabo
                })
            }

            if (tecnico === "Cida Zani") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarCidaMC: totalTMC,
                    listarCidaLA: totalTLA,
                    listarCidaSR: totalTSR,
                    listarCidaRM: totalTRM,
                    listarCidaCO: totalTCO,
                    listarCidaRV: totalTRV,
                    listarCidaCC: totalTCC,
                    listarCidaMMV: totalTMMV,
                    listarCidaRP: totalTRP,
                    listarCidaLP: totalTLP,

                    //busca total
                    listarTotalCida: totalTEquip,

                    //listart total por equipamento
                    listarCidaCol: totalCol,
                    listarCidaImp: totalImp,
                    listarCidaLei: totalLei,
                    listarCidaBusca: totalBusca,
                    listarCidaCar3: totalCar3,
                    listarCidaCar4: totalCar4,
                    listarCidaCar5: totalCar5,
                    listarCidaCar6: totalCar6,
                    listarCidaBerco: totalBerco,
                    listarCidaFonte: totalFonte,
                    listarCidaCabos: totalCabo
                })
            }

            if (tecnico === "Allan Zulino") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarAllanMC: totalTMC,
                    listarAllanLA: totalTLA,
                    listarAllanSR: totalTSR,
                    listarAllanRM: totalTRM,
                    listarAllanCO: totalTCO,
                    listarAllanRV: totalTRV,
                    listarAllanCC: totalTCC,
                    listarAllanMMV: totalTMMV,
                    listarAllanRP: totalTRP,
                    listarAllanLP: totalTLP,

                    //busca total
                    listarTotalAllan: totalTEquip,

                    //listart total por equipamento
                    listarAllanCol: totalCol,
                    listarAllanImp: totalImp,
                    listarAllanLei: totalLei,
                    listarAllanBusca: totalBusca,
                    listarAllanCar3: totalCar3,
                    listarAllanCar4: totalCar4,
                    listarAllanCar5: totalCar5,
                    listarAllanCar6: totalCar6,
                    listarAllanBerco: totalBerco,
                    listarAllanFonte: totalFonte,
                    listarAllanCabos: totalCabo
                })
            }

            if (tecnico === "Douglas Altenfelder") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDouglasMC: totalTMC,
                    listarDouglasLA: totalTLA,
                    listarDouglasSR: totalTSR,
                    listarDouglasRM: totalTRM,
                    listarDouglasCO: totalTCO,
                    listarDouglasRV: totalTRV,
                    listarDouglasCC: totalTCC,
                    listarDouglasMMV: totalTMMV,
                    listarDouglasRP: totalTRP,
                    listarDouglasLP: totalTLP,

                    //busca total
                    listarTotalDouglas: totalTEquip,

                    //listart total por equipamento
                    listarDouglasCol: totalCol,
                    listarDouglasImp: totalImp,
                    listarDouglasLei: totalLei,
                    listarDouglasBusca: totalBusca,
                    listarDouglasCar3: totalCar3,
                    listarDouglasCar4: totalCar4,
                    listarDouglasCar5: totalCar5,
                    listarDouglasCar6: totalCar6,
                    listarDouglasBerco: totalBerco,
                    listarDouglasFonte: totalFonte,
                    listarDouglasCabos: totalCabo
                })
            }

            if (tecnico === "Kleiton Paulino") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarKleitonMC: totalTMC,
                    listarKleitonLA: totalTLA,
                    listarKleitonSR: totalTSR,
                    listarKleitonRM: totalTRM,
                    listarKleitonCO: totalTCO,
                    listarKleitonRV: totalTRV,
                    listarKleitonCC: totalTCC,
                    listarKleitonMMV: totalTMMV,
                    listarKleitonRP: totalTRP,
                    listarKleitonLP: totalTLP,

                    //busca total
                    listarTotalKleiton: totalTEquip,

                    //listart total por equipamento
                    listarKleitonCol: totalCol,
                    listarKleitonImp: totalImp,
                    listarKleitonLei: totalLei,
                    listarKleitonBusca: totalBusca,
                    listarKleitonCar3: totalCar3,
                    listarKleitonCar4: totalCar4,
                    listarKleitonCar5: totalCar5,
                    listarKleitonCar6: totalCar6,
                    listarKleitonBerco: totalBerco,
                    listarKleitonFonte: totalFonte,
                    listarKleitonCabos: totalCabo
                })
            }

        }
        //#endregion

        //#region Mês e Ano
        if ((dia === "Todos") && (ano !== "Todos") && (mes !== "Todos")) {

            if (tecnico === "Diego Carvalho") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiegoCMC: totalTMC,
                    listarDiegoCLA: totalTLA,
                    listarDiegoCSR: totalTSR,
                    listarDiegoCRM: totalTRM,
                    listarDiegoCCO: totalTCO,
                    listarDiegoCRV: totalTRV,
                    listarDiegoCCC: totalTCC,
                    listarDiegoCMMV: totalTMMV,
                    listarDiegoCRP: totalTRP,
                    listarDiegoCLP: totalTLP,

                    //busca total
                    listarTotalDiegoC: totalTEquip,

                    //listart total por equipamento
                    listarDiegoCCol: totalCol,
                    listarDiegoCImp: totalImp,
                    listarDiegoCLei: totalLei,
                    listarDiegoCBusca: totalBusca,
                    listarDiegoCCar3: totalCar3,
                    listarDiegoCCar4: totalCar4,
                    listarDiegoCCar5: totalCar5,
                    listarDiegoCCar6: totalCar6,
                    listarDiegoCBerco: totalBerco,
                    listarDiegoCFonte: totalFonte,
                    listarDiegoCCabos: totalCabo
                })
            }

            if (tecnico === "Natanael Silva Lima") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarNataMC: totalTMC,
                    listarNataLA: totalTLA,
                    listarNataSR: totalTSR,
                    listarNataRM: totalTRM,
                    listarNataCO: totalTCO,
                    listarNataRV: totalTRV,
                    listarNataCC: totalTCC,
                    listarNataMMV: totalTMMV,
                    listarNataRP: totalTRP,
                    listarNataLP: totalTLP,

                    //busca total
                    listarTotalNata: totalTEquip,

                    //listart total por equipamento
                    listarNataCol: totalCol,
                    listarNataImp: totalImp,
                    listarNataLei: totalLei,
                    listarNataBusca: totalBusca,
                    listarNataCar3: totalCar3,
                    listarNataCar4: totalCar4,
                    listarNataCar5: totalCar5,
                    listarNataCar6: totalCar6,
                    listarNataBerco: totalBerco,
                    listarNataFonte: totalFonte,
                    listarNataCabos: totalCabo
                })
            }

            if (tecnico === "Mateus Doval") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarMateusMC: totalTMC,
                    listarMateusLA: totalTLA,
                    listarMateusSR: totalTSR,
                    listarMateusRM: totalTRM,
                    listarMateusCO: totalTCO,
                    listarMateusRV: totalTRV,
                    listarMateusCC: totalTCC,
                    listarMateusMMV: totalTMMV,
                    listarMateusRP: totalTRP,
                    listarMateusLP: totalTLP,

                    //busca total
                    listarTotalMateus: totalTEquip,

                    //listart total por equipamento
                    listarMateusCol: totalCol,
                    listarMateusImp: totalImp,
                    listarMateusLei: totalLei,
                    listarMateusBusca: totalBusca,
                    listarMateusCar3: totalCar3,
                    listarMateusCar4: totalCar4,
                    listarMateusCar5: totalCar5,
                    listarMateusCar6: totalCar6,
                    listarMateusBerco: totalBerco,
                    listarMateusFonte: totalFonte,
                    listarMateusCabos: totalCabo
                })
            }

            if (tecnico === "Lucas Felician") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarLucasMC: totalTMC,
                    listarLucasLA: totalTLA,
                    listarLucasSR: totalTSR,
                    listarLucasRM: totalTRM,
                    listarLucasCO: totalTCO,
                    listarLucasRV: totalTRV,
                    listarLucasCC: totalTCC,
                    listarLucasMMV: totalTMMV,
                    listarLucasRP: totalTRP,
                    listarLucasLP: totalTLP,

                    //busca total
                    listarTotalLucas: totalTEquip,

                    //listart total por equipamento
                    listarLucasCol: totalCol,
                    listarLucasImp: totalImp,
                    listarLucasLei: totalLei,
                    listarLucasBusca: totalBusca,
                    listarLucasCar3: totalCar3,
                    listarLucasCar4: totalCar4,
                    listarLucasCar5: totalCar5,
                    listarLucasCar6: totalCar6,
                    listarLucasBerco: totalBerco,
                    listarLucasFonte: totalFonte,
                    listarLucasCabos: totalCabo
                })
            }

            if (tecnico === "Diogo Selmini") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiogoMC: totalTMC,
                    listarDiogoLA: totalTLA,
                    listarDiogoSR: totalTSR,
                    listarDiogoRM: totalTRM,
                    listarDiogoCO: totalTCO,
                    listarDiogoRV: totalTRV,
                    listarDiogoCC: totalTCC,
                    listarDiogoMMV: totalTMMV,
                    listarDiogoRP: totalTRP,
                    listarDiogoLP: totalTLP,

                    //busca total
                    listarTotalDiogo: totalTEquip,

                    //listart total por equipamento
                    listarDiogoCol: totalCol,
                    listarDiogoImp: totalImp,
                    listarDiogoLei: totalLei,
                    listarDiogoBusca: totalBusca,
                    listarDiogoCar3: totalCar3,
                    listarDiogoCar4: totalCar4,
                    listarDiogoCar5: totalCar5,
                    listarDiogoCar6: totalCar6,
                    listarDiogoBerco: totalBerco,
                    listarDiogoFonte: totalFonte,
                    listarDiogoCabos: totalCabo
                })
            }

            if (tecnico === "Gabriel Kaique") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarGabrielMC: totalTMC,
                    listarGabrielLA: totalTLA,
                    listarGabrielSR: totalTSR,
                    listarGabrielRM: totalTRM,
                    listarGabrielCO: totalTCO,
                    listarGabrielRV: totalTRV,
                    listarGabrielCC: totalTCC,
                    listarGabrielMMV: totalTMMV,
                    listarGabrielRP: totalTRP,
                    listarGabrielLP: totalTLP,

                    //busca total
                    listarTotalGabriel: totalTEquip,

                    //listart total por equipamento
                    listarGabrielCol: totalCol,
                    listarGabrielImp: totalImp,
                    listarGabrielLei: totalLei,
                    listarGabrielBusca: totalBusca,
                    listarGabrielCar3: totalCar3,
                    listarGabrielCar4: totalCar4,
                    listarGabrielCar5: totalCar5,
                    listarGabrielCar6: totalCar6,
                    listarGabrielBerco: totalBerco,
                    listarGabrielFonte: totalFonte,
                    listarGabrielCabos: totalCabo
                })
            }

            if (tecnico === "Bruno Bedani") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarBrunoMC: totalTMC,
                    listarBrunoLA: totalTLA,
                    listarBrunoSR: totalTSR,
                    listarBrunoRM: totalTRM,
                    listarBrunoCO: totalTCO,
                    listarBrunoRV: totalTRV,
                    listarBrunoCC: totalTCC,
                    listarBrunoMMV: totalTMMV,
                    listarBrunoRP: totalTRP,
                    listarBrunoLP: totalTLP,

                    //busca total
                    listarTotalBruno: totalTEquip,

                    //listart total por equipamento
                    listarBrunoCol: totalCol,
                    listarBrunoImp: totalImp,
                    listarBrunoLei: totalLei,
                    listarBrunoBusca: totalBusca,
                    listarBrunoCar3: totalCar3,
                    listarBrunoCar4: totalCar4,
                    listarBrunoCar5: totalCar5,
                    listarBrunoCar6: totalCar6,
                    listarBrunoBerco: totalBerco,
                    listarBrunoFonte: totalFonte,
                    listarBrunoCabos: totalCabo
                })
            }

            if (tecnico === "Vinicius Gomes") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarViniciusMC: totalTMC,
                    listarViniciusLA: totalTLA,
                    listarViniciusSR: totalTSR,
                    listarViniciusRM: totalTRM,
                    listarViniciusCO: totalTCO,
                    listarViniciusRV: totalTRV,
                    listarViniciusCC: totalTCC,
                    listarViniciusMMV: totalTMMV,
                    listarViniciusRP: totalTRP,
                    listarViniciusLP: totalTLP,

                    //busca total
                    listarTotalVinicius: totalTEquip,

                    //listart total por equipamento
                    listarViniciusCol: totalCol,
                    listarViniciusImp: totalImp,
                    listarViniciusLei: totalLei,
                    listarViniciusBusca: totalBusca,
                    listarViniciusCar3: totalCar3,
                    listarViniciusCar4: totalCar4,
                    listarViniciusCar5: totalCar5,
                    listarViniciusCar6: totalCar6,
                    listarViniciusBerco: totalBerco,
                    listarViniciusFonte: totalFonte,
                    listarViniciusCabos: totalCabo
                })
            }

            if (tecnico === "Diego Almeida") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiegoAMC: totalTMC,
                    listarDiegoALA: totalTLA,
                    listarDiegoASR: totalTSR,
                    listarDiegoARM: totalTRM,
                    listarDiegoACO: totalTCO,
                    listarDiegoARV: totalTRV,
                    listarDiegoACC: totalTCC,
                    listarDiegoAMMV: totalTMMV,
                    listarDiegoARP: totalTRP,
                    listarDiegoALP: totalTLP,

                    //busca total
                    listarTotalDiegoA: totalTEquip,

                    //listart total por equipamento
                    listarDiegoACol: totalCol,
                    listarDiegoAImp: totalImp,
                    listarDiegoALei: totalLei,
                    listarDiegoABusca: totalBusca,
                    listarDiegoACar3: totalCar3,
                    listarDiegoACar4: totalCar4,
                    listarDiegoACar5: totalCar5,
                    listarDiegoACar6: totalCar6,
                    listarDiegoABerco: totalBerco,
                    listarDiegoAFonte: totalFonte,
                    listarDiegoACabos: totalCabo
                })
            }

            // if (tecnico === "Anderson Ramos") {

            //     //variavel servico
            //     let dadoTMC = [];
            //     let dadoTLA = [];
            //     let dadoTSR = [];
            //     let dadoTRM = [];
            //     let dadoTCO = [];
            //     let dadoTRV = [];
            //     let dadoTCC = [];
            //     let dadoTMMV = [];
            //     let dadoTRP = [];
            //     let dadoTLP = [];

            //     //dados por equipamento
            //     let dadoCol = [];
            //     let dadoLei = [];
            //     let dadoImp = [];
            //     let dadoBusca = [];
            //     let dadoCar3 = [];
            //     let dadoCar4 = [];
            //     let dadoCar5 = [];
            //     let dadoCar6 = [];
            //     let dadoBerco = [];
            //     let dadoFonte = [];
            //     let dadoCabo = [];

            //     for (let i = 0; i < tabelaNome.length; i++) {

            //         if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
            //             if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
            //                 dadoTMC.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Laudo" === tabelaNome[i].Servico)) {
            //                 dadoTLA.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Suporte Remoto" === tabelaNome[i].Servico)) {
            //                 dadoTSR.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
            //                 dadoTRM.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Chamado On-Site" === tabelaNome[i].Servico)) {
            //                 dadoTCO.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Revisão de Venda" === tabelaNome[i].Servico)) {
            //                 dadoTRV.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
            //                 dadoTCC.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
            //                 dadoTMMV.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
            //                 dadoTRP.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Limpeza" === tabelaNome[i].Servico)) {
            //                 dadoTLP.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
            //                 dadoCol.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
            //                 dadoLei.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
            //                 dadoImp.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
            //                 dadoBusca.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar3.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar4.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar5.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar6.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
            //                 dadoBerco.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
            //                 dadoFonte.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
            //                 dadoCabo.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //         }
            //     }

            //     //variavel servico
            //     let totalTMC = Object.keys(dadoTMC).length;
            //     let totalTLA = Object.keys(dadoTLA).length;
            //     let totalTSR = Object.keys(dadoTSR).length;
            //     let totalTRM = Object.keys(dadoTRM).length;
            //     let totalTCO = Object.keys(dadoTCO).length;
            //     let totalTRV = Object.keys(dadoTRV).length;
            //     let totalTCC = Object.keys(dadoTCC).length;
            //     let totalTMMV = Object.keys(dadoTMMV).length;
            //     let totalTRP = Object.keys(dadoTRP).length;
            //     let totalTLP = Object.keys(dadoTLP).length;

            //     //total
            //     let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
            //         totalTCC + totalTMMV + totalTRP + totalTLP

            //     //Variavel Total por equipamento
            //     let totalCol = Object.keys(dadoCol).length;
            //     let totalLei = Object.keys(dadoLei).length;
            //     let totalImp = Object.keys(dadoImp).length;
            //     let totalBusca = Object.keys(dadoBusca).length;
            //     let totalCar3 = Object.keys(dadoCar3).length;
            //     let totalCar4 = Object.keys(dadoCar4).length;
            //     let totalCar5 = Object.keys(dadoCar5).length;
            //     let totalCar6 = Object.keys(dadoCar6).length;
            //     let totalBerco = Object.keys(dadoBerco).length;
            //     let totalFonte = Object.keys(dadoFonte).length;
            //     let totalCabo = Object.keys(dadoCabo).length;

            //     return this.setState({
            //         //busca servico
            //         listarAndersonMC: totalTMC,
            //         listarAndersonLA: totalTLA,
            //         listarAndersonSR: totalTSR,
            //         listarAndersonRM: totalTRM,
            //         listarAndersonCO: totalTCO,
            //         listarAndersonRV: totalTRV,
            //         listarAndersonCC: totalTCC,
            //         listarAndersonMMV: totalTMMV,
            //         listarAndersonRP: totalTRP,
            //         listarAndersonLP: totalTLP,

            //         //busca total
            //         listarTotalAnderson: totalTEquip,

            //         //listart total por equipamento
            //         listarAndersonCol: totalCol,
            //         listarAndersonImp: totalImp,
            //         listarAndersonLei: totalLei,
            //         listarAndersonBusca: totalBusca,
            //         listarAndersonCar3: totalCar3,
            //         listarAndersonCar4: totalCar4,
            //         listarAndersonCar5: totalCar5,
            //         listarAndersonCar6: totalCar6,
            //         listarAndersonBerco: totalBerco,
            //         listarAndersonFonte: totalFonte,
            //         listarAndersonCabos: totalCabo
            //     })
            // }

            if (tecnico === "Marcio") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarMarcioMC: totalTMC,
                    listarMarcioLA: totalTLA,
                    listarMarcioSR: totalTSR,
                    listarMarcioRM: totalTRM,
                    listarMarcioCO: totalTCO,
                    listarMarcioRV: totalTRV,
                    listarMarcioCC: totalTCC,
                    listarMarcioMMV: totalTMMV,
                    listarMarcioRP: totalTRP,
                    listarMarcioLP: totalTLP,

                    //busca total
                    listarTotalMarcio: totalTEquip,

                    //listart total por equipamento
                    listarMarcioCol: totalCol,
                    listarMarcioImp: totalImp,
                    listarMarcioLei: totalLei,
                    listarMarcioBusca: totalBusca,
                    listarMarcioCar3: totalCar3,
                    listarMarcioCar4: totalCar4,
                    listarMarcioCar5: totalCar5,
                    listarMarcioCar6: totalCar6,
                    listarMarcioBerco: totalBerco,
                    listarMarcioFonte: totalFonte,
                    listarMarcioCabos: totalCabo
                })
            }

            if (tecnico === "Cida Zani") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarCidaMC: totalTMC,
                    listarCidaLA: totalTLA,
                    listarCidaSR: totalTSR,
                    listarCidaRM: totalTRM,
                    listarCidaCO: totalTCO,
                    listarCidaRV: totalTRV,
                    listarCidaCC: totalTCC,
                    listarCidaMMV: totalTMMV,
                    listarCidaRP: totalTRP,
                    listarCidaLP: totalTLP,

                    //busca total
                    listarTotalCida: totalTEquip,

                    //listart total por equipamento
                    listarCidaCol: totalCol,
                    listarCidaImp: totalImp,
                    listarCidaLei: totalLei,
                    listarCidaBusca: totalBusca,
                    listarCidaCar3: totalCar3,
                    listarCidaCar4: totalCar4,
                    listarCidaCar5: totalCar5,
                    listarCidaCar6: totalCar6,
                    listarCidaBerco: totalBerco,
                    listarCidaFonte: totalFonte,
                    listarCidaCabos: totalCabo
                })
            }

            if (tecnico === "Allan Zulino") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarAllanMC: totalTMC,
                    listarAllanLA: totalTLA,
                    listarAllanSR: totalTSR,
                    listarAllanRM: totalTRM,
                    listarAllanCO: totalTCO,
                    listarAllanRV: totalTRV,
                    listarAllanCC: totalTCC,
                    listarAllanMMV: totalTMMV,
                    listarAllanRP: totalTRP,
                    listarAllanLP: totalTLP,

                    //busca total
                    listarTotalAllan: totalTEquip,

                    //listart total por equipamento
                    listarAllanCol: totalCol,
                    listarAllanImp: totalImp,
                    listarAllanLei: totalLei,
                    listarAllanBusca: totalBusca,
                    listarAllanCar3: totalCar3,
                    listarAllanCar4: totalCar4,
                    listarAllanCar5: totalCar5,
                    listarAllanCar6: totalCar6,
                    listarAllanBerco: totalBerco,
                    listarAllanFonte: totalFonte,
                    listarAllanCabos: totalCabo
                })
            }

            if (tecnico === "Douglas Altenfelder") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDouglasMC: totalTMC,
                    listarDouglasLA: totalTLA,
                    listarDouglasSR: totalTSR,
                    listarDouglasRM: totalTRM,
                    listarDouglasCO: totalTCO,
                    listarDouglasRV: totalTRV,
                    listarDouglasCC: totalTCC,
                    listarDouglasMMV: totalTMMV,
                    listarDouglasRP: totalTRP,
                    listarDouglasLP: totalTLP,

                    //busca total
                    listarTotalDouglas: totalTEquip,

                    //listart total por equipamento
                    listarDouglasCol: totalCol,
                    listarDouglasImp: totalImp,
                    listarDouglasLei: totalLei,
                    listarDouglasBusca: totalBusca,
                    listarDouglasCar3: totalCar3,
                    listarDouglasCar4: totalCar4,
                    listarDouglasCar5: totalCar5,
                    listarDouglasCar6: totalCar6,
                    listarDouglasBerco: totalBerco,
                    listarDouglasFonte: totalFonte,
                    listarDouglasCabos: totalCabo
                })
            }

            if (tecnico === "Kleiton Paulino") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === "Todos") && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarKleitonMC: totalTMC,
                    listarKleitonLA: totalTLA,
                    listarKleitonSR: totalTSR,
                    listarKleitonRM: totalTRM,
                    listarKleitonCO: totalTCO,
                    listarKleitonRV: totalTRV,
                    listarKleitonCC: totalTCC,
                    listarKleitonMMV: totalTMMV,
                    listarKleitonRP: totalTRP,
                    listarKleitonLP: totalTLP,

                    //busca total
                    listarTotalKleiton: totalTEquip,

                    //listart total por equipamento
                    listarKleitonCol: totalCol,
                    listarKleitonImp: totalImp,
                    listarKleitonLei: totalLei,
                    listarKleitonBusca: totalBusca,
                    listarKleitonCar3: totalCar3,
                    listarKleitonCar4: totalCar4,
                    listarKleitonCar5: totalCar5,
                    listarKleitonCar6: totalCar6,
                    listarKleitonBerco: totalBerco,
                    listarKleitonFonte: totalFonte,
                    listarKleitonCabos: totalCabo
                })
            }
        }
        //#endregion

        //#region Dia Mês Ano
        if ((dia !== "Todos") && (ano !== "Todos") && (mes !== "Todos")) {

            if (tecnico === "Diego Carvalho") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiegoCMC: totalTMC,
                    listarDiegoCLA: totalTLA,
                    listarDiegoCSR: totalTSR,
                    listarDiegoCRM: totalTRM,
                    listarDiegoCCO: totalTCO,
                    listarDiegoCRV: totalTRV,
                    listarDiegoCCC: totalTCC,
                    listarDiegoCMMV: totalTMMV,
                    listarDiegoCRP: totalTRP,
                    listarDiegoCLP: totalTLP,

                    //busca total
                    listarTotalDiegoC: totalTEquip,

                    //listart total por equipamento
                    listarDiegoCCol: totalCol,
                    listarDiegoCImp: totalImp,
                    listarDiegoCLei: totalLei,
                    listarDiegoCBusca: totalBusca,
                    listarDiegoCCar3: totalCar3,
                    listarDiegoCCar4: totalCar4,
                    listarDiegoCCar5: totalCar5,
                    listarDiegoCCar6: totalCar6,
                    listarDiegoCBerco: totalBerco,
                    listarDiegoCFonte: totalFonte,
                    listarDiegoCCabos: totalCabo
                })
            }

            if (tecnico === "Natanael Silva Lima") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarNataMC: totalTMC,
                    listarNataLA: totalTLA,
                    listarNataSR: totalTSR,
                    listarNataRM: totalTRM,
                    listarNataCO: totalTCO,
                    listarNataRV: totalTRV,
                    listarNataCC: totalTCC,
                    listarNataMMV: totalTMMV,
                    listarNataRP: totalTRP,
                    listarNataLP: totalTLP,

                    //busca total
                    listarTotalNata: totalTEquip,

                    //listart total por equipamento
                    listarNataCol: totalCol,
                    listarNataImp: totalImp,
                    listarNataLei: totalLei,
                    listarNataBusca: totalBusca,
                    listarNataCar3: totalCar3,
                    listarNataCar4: totalCar4,
                    listarNataCar5: totalCar5,
                    listarNataCar6: totalCar6,
                    listarNataBerco: totalBerco,
                    listarNataFonte: totalFonte,
                    listarNataCabos: totalCabo
                })
            }

            if (tecnico === "Mateus Doval") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarMateusMC: totalTMC,
                    listarMateusLA: totalTLA,
                    listarMateusSR: totalTSR,
                    listarMateusRM: totalTRM,
                    listarMateusCO: totalTCO,
                    listarMateusRV: totalTRV,
                    listarMateusCC: totalTCC,
                    listarMateusMMV: totalTMMV,
                    listarMateusRP: totalTRP,
                    listarMateusLP: totalTLP,

                    //busca total
                    listarTotalMateus: totalTEquip,

                    //listart total por equipamento
                    listarMateusCol: totalCol,
                    listarMateusImp: totalImp,
                    listarMateusLei: totalLei,
                    listarMateusBusca: totalBusca,
                    listarMateusCar3: totalCar3,
                    listarMateusCar4: totalCar4,
                    listarMateusCar5: totalCar5,
                    listarMateusCar6: totalCar6,
                    listarMateusBerco: totalBerco,
                    listarMateusFonte: totalFonte,
                    listarMateusCabos: totalCabo
                })
            }

            if (tecnico === "Lucas Felician") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
                            dadoBerco.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarLucasMC: totalTMC,
                    listarLucasLA: totalTLA,
                    listarLucasSR: totalTSR,
                    listarLucasRM: totalTRM,
                    listarLucasCO: totalTCO,
                    listarLucasRV: totalTRV,
                    listarLucasCC: totalTCC,
                    listarLucasMMV: totalTMMV,
                    listarLucasRP: totalTRP,
                    listarLucasLP: totalTLP,

                    //busca total
                    listarTotalLucas: totalTEquip,

                    //listart total por equipamento
                    listarLucasCol: totalCol,
                    listarLucasImp: totalImp,
                    listarLucasLei: totalLei,
                    listarLucasBusca: totalBusca,
                    listarLucasCar3: totalCar3,
                    listarLucasCar4: totalCar4,
                    listarLucasCar5: totalCar5,
                    listarLucasCar6: totalCar6,
                    listarLucasBerco: totalBerco,
                    listarLucasFonte: totalFonte,
                    listarLucasCabos: totalCabo
                })
            }

            if (tecnico === "Diogo Selmini") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiogoMC: totalTMC,
                    listarDiogoLA: totalTLA,
                    listarDiogoSR: totalTSR,
                    listarDiogoRM: totalTRM,
                    listarDiogoCO: totalTCO,
                    listarDiogoRV: totalTRV,
                    listarDiogoCC: totalTCC,
                    listarDiogoMMV: totalTMMV,
                    listarDiogoRP: totalTRP,
                    listarDiogoLP: totalTLP,

                    //busca total
                    listarTotalDiogo: totalTEquip,

                    //listart total por equipamento
                    listarDiogoCol: totalCol,
                    listarDiogoImp: totalImp,
                    listarDiogoLei: totalLei,
                    listarDiogoBusca: totalBusca,
                    listarDiogoCar3: totalCar3,
                    listarDiogoCar4: totalCar4,
                    listarDiogoCar5: totalCar5,
                    listarDiogoCar6: totalCar6,
                    listarDiogoBerco: totalBerco,
                    listarDiogoFonte: totalFonte,
                    listarDiogoCabos: totalCabo
                })
            }

            if (tecnico === "Gabriel Kaique") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarGabrielMC: totalTMC,
                    listarGabrielLA: totalTLA,
                    listarGabrielSR: totalTSR,
                    listarGabrielRM: totalTRM,
                    listarGabrielCO: totalTCO,
                    listarGabrielRV: totalTRV,
                    listarGabrielCC: totalTCC,
                    listarGabrielMMV: totalTMMV,
                    listarGabrielRP: totalTRP,
                    listarGabrielLP: totalTLP,

                    //busca total
                    listarTotalGabriel: totalTEquip,

                    //listart total por equipamento
                    listarGabrielCol: totalCol,
                    listarGabrielImp: totalImp,
                    listarGabrielLei: totalLei,
                    listarGabrielBusca: totalBusca,
                    listarGabrielCar3: totalCar3,
                    listarGabrielCar4: totalCar4,
                    listarGabrielCar5: totalCar5,
                    listarGabrielCar6: totalCar6,
                    listarGabrielBerco: totalBerco,
                    listarGabrielFonte: totalFonte,
                    listarGabrielCabos: totalCabo
                })
            }

            if (tecnico === "Bruno Bedani") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarBrunoMC: totalTMC,
                    listarBrunoLA: totalTLA,
                    listarBrunoSR: totalTSR,
                    listarBrunoRM: totalTRM,
                    listarBrunoCO: totalTCO,
                    listarBrunoRV: totalTRV,
                    listarBrunoCC: totalTCC,
                    listarBrunoMMV: totalTMMV,
                    listarBrunoRP: totalTRP,
                    listarBrunoLP: totalTLP,

                    //busca total
                    listarTotalBruno: totalTEquip,

                    //listart total por equipamento
                    listarBrunoCol: totalCol,
                    listarBrunoImp: totalImp,
                    listarBrunoLei: totalLei,
                    listarBrunoBusca: totalBusca,
                    listarBrunoCar3: totalCar3,
                    listarBrunoCar4: totalCar4,
                    listarBrunoCar5: totalCar5,
                    listarBrunoCar6: totalCar6,
                    listarBrunoBerco: totalBerco,
                    listarBrunoFonte: totalFonte,
                    listarBrunoCabos: totalCabo
                })
            }

            if (tecnico === "Vinicius Gomes") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarViniciusMC: totalTMC,
                    listarViniciusLA: totalTLA,
                    listarViniciusSR: totalTSR,
                    listarViniciusRM: totalTRM,
                    listarViniciusCO: totalTCO,
                    listarViniciusRV: totalTRV,
                    listarViniciusCC: totalTCC,
                    listarViniciusMMV: totalTMMV,
                    listarViniciusRP: totalTRP,
                    listarViniciusLP: totalTLP,

                    //busca total
                    listarTotalVinicius: totalTEquip,

                    //listart total por equipamento
                    listarViniciusCol: totalCol,
                    listarViniciusImp: totalImp,
                    listarViniciusLei: totalLei,
                    listarViniciusBusca: totalBusca,
                    listarViniciusCar3: totalCar3,
                    listarViniciusCar4: totalCar4,
                    listarViniciusCar5: totalCar5,
                    listarViniciusCar6: totalCar6,
                    listarViniciusBerco: totalBerco,
                    listarViniciusFonte: totalFonte,
                    listarViniciusCabos: totalCabo
                })
            }

            if (tecnico === "Diego Almeida") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDiegoAMC: totalTMC,
                    listarDiegoALA: totalTLA,
                    listarDiegoASR: totalTSR,
                    listarDiegoARM: totalTRM,
                    listarDiegoACO: totalTCO,
                    listarDiegoARV: totalTRV,
                    listarDiegoACC: totalTCC,
                    listarDiegoAMMV: totalTMMV,
                    listarDiegoARP: totalTRP,
                    listarDiegoALP: totalTLP,

                    //busca total
                    listarTotalDiegoA: totalTEquip,

                    //listart total por equipamento
                    listarDiegoACol: totalCol,
                    listarDiegoAImp: totalImp,
                    listarDiegoALei: totalLei,
                    listarDiegoABusca: totalBusca,
                    listarDiegoACar3: totalCar3,
                    listarDiegoACar4: totalCar4,
                    listarDiegoACar5: totalCar5,
                    listarDiegoACar6: totalCar6,
                    listarDiegoABerco: totalBerco,
                    listarDiegoAFonte: totalFonte,
                    listarDiegoACabos: totalCabo
                })
            }

            // if (tecnico === "Anderson Ramos") {

            //     //variavel servico
            //     let dadoTMC = [];
            //     let dadoTLA = [];
            //     let dadoTSR = [];
            //     let dadoTRM = [];
            //     let dadoTCO = [];
            //     let dadoTRV = [];
            //     let dadoTCC = [];
            //     let dadoTMMV = [];
            //     let dadoTRP = [];
            //     let dadoTLP = [];

            //     //dados por equipamento
            //     let dadoCol = [];
            //     let dadoLei = [];
            //     let dadoImp = [];
            //     let dadoBusca = [];
            //     let dadoCar3 = [];
            //     let dadoCar4 = [];
            //     let dadoCar5 = [];
            //     let dadoCar6 = [];
            //     let dadoBerco = [];
            //     let dadoFonte = [];
            //     let dadoCabo = [];

            //     for (let i = 0; i < tabelaNome.length; i++) {

            //         if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
            //             if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
            //                 dadoTMC.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Laudo" === tabelaNome[i].Servico)) {
            //                 dadoTLA.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Suporte Remoto" === tabelaNome[i].Servico)) {
            //                 dadoTSR.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
            //                 dadoTRM.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Chamado On-Site" === tabelaNome[i].Servico)) {
            //                 dadoTCO.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Revisão de Venda" === tabelaNome[i].Servico)) {
            //                 dadoTRV.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
            //                 dadoTCC.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
            //                 dadoTMMV.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
            //                 dadoTRP.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Limpeza" === tabelaNome[i].Servico)) {
            //                 dadoTLP.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //             if (("Coletor de Dados" === tabelaNome[i].Equipamento)) {
            //                 dadoCol.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Leitor de Dados" === tabelaNome[i].Equipamento)) {
            //                 dadoLei.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Impressora Térmica" === tabelaNome[i].Equipamento)) {
            //                 dadoImp.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Busca Preço" === tabelaNome[i].Equipamento)) {
            //                 dadoBusca.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 3 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar3.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 4 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar4.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 5 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar5.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Carregador de 6 Posições" === tabelaNome[i].Equipamento)) {
            //                 dadoCar6.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Berço de Comunicação" === tabelaNome[i].Equipamento)) {
            //                 dadoBerco.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
            //                 dadoFonte.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
            //                 dadoCabo.push({
            //                     OS: tabelaNome[i].OS
            //                 })
            //             }
            //         }
            //     }

            //     //variavel servico
            //     let totalTMC = Object.keys(dadoTMC).length;
            //     let totalTLA = Object.keys(dadoTLA).length;
            //     let totalTSR = Object.keys(dadoTSR).length;
            //     let totalTRM = Object.keys(dadoTRM).length;
            //     let totalTCO = Object.keys(dadoTCO).length;
            //     let totalTRV = Object.keys(dadoTRV).length;
            //     let totalTCC = Object.keys(dadoTCC).length;
            //     let totalTMMV = Object.keys(dadoTMMV).length;
            //     let totalTRP = Object.keys(dadoTRP).length;
            //     let totalTLP = Object.keys(dadoTLP).length;

            //     //total
            //     let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
            //         totalTCC + totalTMMV + totalTRP + totalTLP

            //     //Variavel Total por equipamento
            //     let totalCol = Object.keys(dadoCol).length;
            //     let totalLei = Object.keys(dadoLei).length;
            //     let totalImp = Object.keys(dadoImp).length;
            //     let totalBusca = Object.keys(dadoBusca).length;
            //     let totalCar3 = Object.keys(dadoCar3).length;
            //     let totalCar4 = Object.keys(dadoCar4).length;
            //     let totalCar5 = Object.keys(dadoCar5).length;
            //     let totalCar6 = Object.keys(dadoCar6).length;
            //     let totalBerco = Object.keys(dadoBerco).length;
            //     let totalFonte = Object.keys(dadoFonte).length;
            //     let totalCabo = Object.keys(dadoCabo).length;

            //     return this.setState({
            //         //busca servico
            //         listarAndersonMC: totalTMC,
            //         listarAndersonLA: totalTLA,
            //         listarAndersonSR: totalTSR,
            //         listarAndersonRM: totalTRM,
            //         listarAndersonCO: totalTCO,
            //         listarAndersonRV: totalTRV,
            //         listarAndersonCC: totalTCC,
            //         listarAndersonMMV: totalTMMV,
            //         listarAndersonRP: totalTRP,
            //         listarAndersonLP: totalTLP,

            //         //busca total
            //         listarTotalAnderson: totalTEquip,

            //         //listart total por equipamento
            //         listarAndersonCol: totalCol,
            //         listarAndersonImp: totalImp,
            //         listarAndersonLei: totalLei,
            //         listarAndersonBusca: totalBusca,
            //         listarAndersonCar3: totalCar3,
            //         listarAndersonCar4: totalCar4,
            //         listarAndersonCar5: totalCar5,
            //         listarAndersonCar6: totalCar6,
            //         listarAndersonBerco: totalBerco,
            //         listarAndersonFonte: totalFonte,
            //         listarAndersonCabos: totalCabo
            //     })
            // }

            if (tecnico === "Marcio") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarMarcioMC: totalTMC,
                    listarMarcioLA: totalTLA,
                    listarMarcioSR: totalTSR,
                    listarMarcioRM: totalTRM,
                    listarMarcioCO: totalTCO,
                    listarMarcioRV: totalTRV,
                    listarMarcioCC: totalTCC,
                    listarMarcioMMV: totalTMMV,
                    listarMarcioRP: totalTRP,
                    listarMarcioLP: totalTLP,

                    //busca total
                    listarTotalMarcio: totalTEquip,

                    //listart total por equipamento
                    listarMarcioCol: totalCol,
                    listarMarcioImp: totalImp,
                    listarMarcioLei: totalLei,
                    listarMarcioBusca: totalBusca,
                    listarMarcioCar3: totalCar3,
                    listarMarcioCar4: totalCar4,
                    listarMarcioCar5: totalCar5,
                    listarMarcioCar6: totalCar6,
                    listarMarcioBerco: totalBerco,
                    listarMarcioFonte: totalFonte,
                    listarMarcioCabos: totalCabo
                })
            }

            if (tecnico === "Cida Zani") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarCidaMC: totalTMC,
                    listarCidaLA: totalTLA,
                    listarCidaSR: totalTSR,
                    listarCidaRM: totalTRM,
                    listarCidaCO: totalTCO,
                    listarCidaRV: totalTRV,
                    listarCidaCC: totalTCC,
                    listarCidaMMV: totalTMMV,
                    listarCidaRP: totalTRP,
                    listarCidaLP: totalTLP,

                    //busca total
                    listarTotalCida: totalTEquip,

                    //listart total por equipamento
                    listarCidaCol: totalCol,
                    listarCidaImp: totalImp,
                    listarCidaLei: totalLei,
                    listarCidaBusca: totalBusca,
                    listarCidaCar3: totalCar3,
                    listarCidaCar4: totalCar4,
                    listarCidaCar5: totalCar5,
                    listarCidaCar6: totalCar6,
                    listarCidaBerco: totalBerco,
                    listarCidaFonte: totalFonte,
                    listarCidaCabos: totalCabo
                })
            }

            if (tecnico === "Allan Zulino") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarAllanMC: totalTMC,
                    listarAllanLA: totalTLA,
                    listarAllanSR: totalTSR,
                    listarAllanRM: totalTRM,
                    listarAllanCO: totalTCO,
                    listarAllanRV: totalTRV,
                    listarAllanCC: totalTCC,
                    listarAllanMMV: totalTMMV,
                    listarAllanRP: totalTRP,
                    listarAllanLP: totalTLP,

                    //busca total
                    listarTotalAllan: totalTEquip,

                    //listart total por equipamento
                    listarAllanCol: totalCol,
                    listarAllanImp: totalImp,
                    listarAllanLei: totalLei,
                    listarAllanBusca: totalBusca,
                    listarAllanCar3: totalCar3,
                    listarAllanCar4: totalCar4,
                    listarAllanCar5: totalCar5,
                    listarAllanCar6: totalCar6,
                    listarAllanBerco: totalBerco,
                    listarAllanFonte: totalFonte,
                    listarAllanCabos: totalCabo
                })
            }

            if (tecnico === "Douglas Altenfelder") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarDouglasMC: totalTMC,
                    listarDouglasLA: totalTLA,
                    listarDouglasSR: totalTSR,
                    listarDouglasRM: totalTRM,
                    listarDouglasCO: totalTCO,
                    listarDouglasRV: totalTRV,
                    listarDouglasCC: totalTCC,
                    listarDouglasMMV: totalTMMV,
                    listarDouglasRP: totalTRP,
                    listarDouglasLP: totalTLP,

                    //busca total
                    listarTotalDouglas: totalTEquip,

                    //listart total por equipamento
                    listarDouglasCol: totalCol,
                    listarDouglasImp: totalImp,
                    listarDouglasLei: totalLei,
                    listarDouglasBusca: totalBusca,
                    listarDouglasCar3: totalCar3,
                    listarDouglasCar4: totalCar4,
                    listarDouglasCar5: totalCar5,
                    listarDouglasCar6: totalCar6,
                    listarDouglasBerco: totalBerco,
                    listarDouglasFonte: totalFonte,
                    listarDouglasCabos: totalCabo
                })
            }

            if (tecnico === "Kleiton Paulino") {

                //variavel servico
                let dadoTMC = [];
                let dadoTLA = [];
                let dadoTSR = [];
                let dadoTRM = [];
                let dadoTCO = [];
                let dadoTRV = [];
                let dadoTCC = [];
                let dadoTMMV = [];
                let dadoTRP = [];
                let dadoTLP = [];

                //dados por equipamento
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

                    if ((tecnico === tabelaNome[i].Tecnico) && (dia === `${tabelaNome[i].Dia}`) && (mes === `${tabelaNome[i].Mes}`) && (ano === `${tabelaNome[i].Ano}`)) {
                        if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                            dadoTMC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Laudo" === tabelaNome[i].Servico)) {
                            dadoTLA.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                            dadoTSR.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                            dadoTRM.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                            dadoTCO.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                            dadoTRV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                            dadoTCC.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                            dadoTMMV.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                            dadoTRP.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                        if (("Limpeza" === tabelaNome[i].Servico)) {
                            dadoTLP.push({
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
                        } if (("Fonte de Alimentação" === tabelaNome[i].Equipamento)) {
                            dadoFonte.push({
                                OS: tabelaNome[i].OS
                            })
                        } if (("Cabo Confeccionado" === tabelaNome[i].Equipamento)) {
                            dadoCabo.push({
                                OS: tabelaNome[i].OS
                            })
                        }
                    }
                }

                //variavel servico
                let totalTMC = Object.keys(dadoTMC).length;
                let totalTLA = Object.keys(dadoTLA).length;
                let totalTSR = Object.keys(dadoTSR).length;
                let totalTRM = Object.keys(dadoTRM).length;
                let totalTCO = Object.keys(dadoTCO).length;
                let totalTRV = Object.keys(dadoTRV).length;
                let totalTCC = Object.keys(dadoTCC).length;
                let totalTMMV = Object.keys(dadoTMMV).length;
                let totalTRP = Object.keys(dadoTRP).length;
                let totalTLP = Object.keys(dadoTLP).length;

                //total
                let totalTEquip = totalTMC + totalTLA + totalTSR + totalTRM + totalTCO + totalTRV +
                    totalTCC + totalTMMV + totalTRP + totalTLP

                //Variavel Total por equipamento
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
                    //busca servico
                    listarKleitonMC: totalTMC,
                    listarKleitonLA: totalTLA,
                    listarKleitonSR: totalTSR,
                    listarKleitonRM: totalTRM,
                    listarKleitonCO: totalTCO,
                    listarKleitonRV: totalTRV,
                    listarKleitonCC: totalTCC,
                    listarKleitonMMV: totalTMMV,
                    listarKleitonRP: totalTRP,
                    listarKleitonLP: totalTLP,

                    //busca total
                    listarTotalKleiton: totalTEquip,

                    //listart total por equipamento
                    listarKleitonCol: totalCol,
                    listarKleitonImp: totalImp,
                    listarKleitonLei: totalLei,
                    listarKleitonBusca: totalBusca,
                    listarKleitonCar3: totalCar3,
                    listarKleitonCar4: totalCar4,
                    listarKleitonCar5: totalCar5,
                    listarKleitonCar6: totalCar6,
                    listarKleitonBerco: totalBerco,
                    listarKleitonFonte: totalFonte,
                    listarKleitonCabos: totalCabo
                })
            }
        }
        //#endregion

    }

    render() {
        return (
            <div className='content-fluid'>
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
                        <Grafico tipo="pie" titulo="Ordens de Serviço em Geral"
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
                                { name: "Rec Placa", y: this.state.listarRP },
                                { name: "Limpeza", y: this.state.listarLP },
                                { name: "Revisão Reprovado", y: this.state.listarRR },
                                { name: "Revisão Compra", y: this.state.listarRC },
                                { name: "Revisão Locação", y: this.state.listarRL },
                            ]}
                        />
                    </div>
                    <div className="col-12 col-md-5 sombra flex-fill">
                        <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
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
                                { name: "Rec Placa", y: this.state.listarRP },
                                { name: "Limpeza", y: this.state.listarLP },
                                { name: "Revisão Reprovado", y: this.state.listarRR },
                                { name: "Revisão Compra", y: this.state.listarRC },
                                { name: "Revisão Locação", y: this.state.listarRL },
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
                            cor={true}
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
                                { name: "Cida", y: this.state.listarCida },
                                // { name: "Anderson", y: this.state.listarAnderson },
                                { name: "Douglas", y: this.state.listarDouglas },
                                { name: "Kleiton", y: this.state.listarKleiton },
                            ]}
                        />
                    </div>
                    <div className="col-12 col-md-5 sombra flex-fill">
                        <Grafico tipo="pie" titulo="Ordem de Serviço por Técnicos"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                            texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                            nomeSerie="Ordens de Serviço"
                            cor={true}
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
                                { name: "Cida", y: this.state.listarCida },
                                // { name: "Anderson", y: this.state.listarAnderson },
                                { name: "Douglas", y: this.state.listarDouglas },
                                { name: "Kleiton", y: this.state.listarKleiton },
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
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-6 bg-primary text-light d-flex justify-content-center rounded">
                        <div className="display-3 fw-bold">
                            Técnicos e Limpeza
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3 d-flex d-flex justify-content-around">
                        <ModalTecnicos imagem={imgDiegoC} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgDiegoC} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalDiegoC}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDiegoCMC },
                                        { name: "Laudo", y: this.state.listarDiegoCLA },
                                        { name: "Suporte Remoto", y: this.state.listarDiegoCSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDiegoCRM },
                                        { name: "Chamado On-Site", y: this.state.listarDiegoCCO },
                                        { name: "Revisão de Venda", y: this.state.listarDiegoCRV },
                                        { name: "Confecção de Cabos", y: this.state.listarDiegoCCC },
                                        { name: "M/M de Venda", y: this.state.listarDiegoCMMV },
                                        { name: "Rec Placa", y: this.state.listarDiegoCRP },
                                        { name: "Limpeza", y: this.state.listarDiegoCLP },
                                        { name: "Revisão Reprovado", y: this.state.listarDiegoCRR },
                                        { name: "Revisão Compra", y: this.state.listarDiegoCRC },
                                        { name: "Revisão Locação", y: this.state.listarDiegoCRL },
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDiegoCMC },
                                        { name: "Laudo", y: this.state.listarDiegoCLA },
                                        { name: "Suporte Remoto", y: this.state.listarDiegoCSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDiegoCRM },
                                        { name: "Chamado On-Site", y: this.state.listarDiegoCCO },
                                        { name: "Revisão de Venda", y: this.state.listarDiegoCRV },
                                        { name: "Confecção de Cabos", y: this.state.listarDiegoCCC },
                                        { name: "M/M de Venda", y: this.state.listarDiegoCMMV },
                                        { name: "Rec Placa", y: this.state.listarDiegoCRP },
                                        { name: "Limpeza", y: this.state.listarDiegoCLP },
                                        { name: "Revisão Reprovado", y: this.state.listarDiegoCRR },
                                        { name: "Revisão Compra", y: this.state.listarDiegoCRC },
                                        { name: "Revisão Locação", y: this.state.listarDiegoCRL },
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarDiegoCCol },
                                        { name: "Leitor", y: this.state.listarDiegoCLei },
                                        { name: "Busca Preço", y: this.state.listarDiegoCBusca },
                                        { name: "Impressora", y: this.state.listarDiegoCImp },
                                        { name: "Carregador 3 P", y: this.state.listarDiegoCCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarDiegoCCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarDiegoCCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarDiegoCCar6 },
                                        { name: "Berço", y: this.state.listarDiegoCBerco },
                                        { name: "Fonte", y: this.state.listarDiegoCFonte },
                                        { name: "Cabo C", y: this.state.listarDiegoCCabos },
                                        { name: "Bateria", y: this.state.listarDiegoCBateria }
                                    ]} />

                            }
                        />
                        <ModalTecnicos imagem={imgNata} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgNata} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalNata}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarNataMC },
                                        { name: "Laudo", y: this.state.listarNataLA },
                                        { name: "Suporte Remoto", y: this.state.listarNataSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarNataRM },
                                        { name: "Chamado On-Site", y: this.state.listarNataCO },
                                        { name: "Revisão de Venda", y: this.state.listarNataRV },
                                        { name: "Confecção de Cabos", y: this.state.listarNataCC },
                                        { name: "M/M de Venda", y: this.state.listarNataMMV },
                                        { name: "Rec Placa", y: this.state.listarNataRP },
                                        { name: "Limpeza", y: this.state.listarNataLP },
                                        { name: "Revisão Reprovado", y: this.state.listarNataRR },
                                        { name: "Revisão Compra", y: this.state.listarNataRC },
                                        { name: "Revisão Locação", y: this.state.listarNataRL },
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarNataMC },
                                        { name: "Laudo", y: this.state.listarNataLA },
                                        { name: "Suporte Remoto", y: this.state.listarNataSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarNataRM },
                                        { name: "Chamado On-Site", y: this.state.listarNataCO },
                                        { name: "Revisão de Venda", y: this.state.listarNataRV },
                                        { name: "Confecção de Cabos", y: this.state.listarNataCC },
                                        { name: "M/M de Venda", y: this.state.listarNataMMV },
                                        { name: "Rec Placa", y: this.state.listarNataRP },
                                        { name: "Limpeza", y: this.state.listarNataLP },
                                        { name: "Revisão Reprovado", y: this.state.listarNataRR },
                                        { name: "Revisão Compra", y: this.state.listarNataRC },
                                        { name: "Revisão Locação", y: this.state.listarNataRL },
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarNataCol },
                                        { name: "Leitor", y: this.state.listarNataLei },
                                        { name: "Busca Preço", y: this.state.listarNataBusca },
                                        { name: "Impressora", y: this.state.listarNataImp },
                                        { name: "Carregador 3 P", y: this.state.listarNataCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarNataCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarNataCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarNataCar6 },
                                        { name: "Berço", y: this.state.listarNataBerco },
                                        { name: "Fonte", y: this.state.listarNataFonte },
                                        { name: "Cabo C", y: this.state.listarNataCabos },
                                        { name: "Bateria", y: this.state.listarNataBateria }
                                    ]} />

                            }
                        />
                    </div>
                    <div className="col-md-3 d-flex d-flex justify-content-around">
                        <ModalTecnicos imagem={imgMateus} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgMateus} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalMateus}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarMateusMC },
                                        { name: "Laudo", y: this.state.listarMateusLA },
                                        { name: "Suporte Remoto", y: this.state.listarMateusSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarMateusRM },
                                        { name: "Chamado On-Site", y: this.state.listarMateusCO },
                                        { name: "Revisão de Venda", y: this.state.listarMateusRV },
                                        { name: "Confecção de Cabos", y: this.state.listarMateusCC },
                                        { name: "M/M de Venda", y: this.state.listarMateusMMV },
                                        { name: "Rec Placa", y: this.state.listarMateusRP },
                                        { name: "Limpeza", y: this.state.listarMateusLP },
                                        { name: "Revisão Reprovado", y: this.state.listarMateusRR },
                                        { name: "Revisão Compra", y: this.state.listarMateusRC },
                                        { name: "Revisão Locação", y: this.state.listarMateusRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarMateusMC },
                                        { name: "Laudo", y: this.state.listarMateusLA },
                                        { name: "Suporte Remoto", y: this.state.listarMateusSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarMateusRM },
                                        { name: "Chamado On-Site", y: this.state.listarMateusCO },
                                        { name: "Revisão de Venda", y: this.state.listarMateusRV },
                                        { name: "Confecção de Cabos", y: this.state.listarMateusCC },
                                        { name: "M/M de Venda", y: this.state.listarMateusMMV },
                                        { name: "Rec Placa", y: this.state.listarMateusRP },
                                        { name: "Limpeza", y: this.state.listarMateusLP },
                                        { name: "Revisão Reprovado", y: this.state.listarMateusRR },
                                        { name: "Revisão Compra", y: this.state.listarMateusRC },
                                        { name: "Revisão Locação", y: this.state.listarMateusRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarMateusCol },
                                        { name: "Leitor", y: this.state.listarMateusLei },
                                        { name: "Busca Preço", y: this.state.listarMateusBusca },
                                        { name: "Impressora", y: this.state.listarMateusImp },
                                        { name: "Carregador 3 P", y: this.state.listarMateusCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarMateusCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarMateusCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarMateusCar6 },
                                        { name: "Berço", y: this.state.listarMateusBerco },
                                        { name: "Fonte", y: this.state.listarMateusFonte },
                                        { name: "Cabo C", y: this.state.listarMateusCabos },
                                        { name: "Bateria", y: this.state.listarMateusBateria }
                                    ]} />

                            }

                        />
                        <ModalTecnicos imagem={imgLucas} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgLucas} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalLucas}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarLucasMC },
                                        { name: "Laudo", y: this.state.listarLucasLA },
                                        { name: "Suporte Remoto", y: this.state.listarLucasSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarLucasRM },
                                        { name: "Chamado On-Site", y: this.state.listarLucasCO },
                                        { name: "Revisão de Venda", y: this.state.listarLucasRV },
                                        { name: "Confecção de Cabos", y: this.state.listarLucasCC },
                                        { name: "M/M de Venda", y: this.state.listarLucasMMV },
                                        { name: "Rec Placa", y: this.state.listarLucasRP },
                                        { name: "Limpeza", y: this.state.listarLucasLP },
                                        { name: "Revisão Reprovado", y: this.state.listarLucasRR },
                                        { name: "Revisão Compras", y: this.state.listarLucasRC },
                                        { name: "Revisão Locação", y: this.state.listarLucasRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarLucasMC },
                                        { name: "Laudo", y: this.state.listarLucasLA },
                                        { name: "Suporte Remoto", y: this.state.listarLucasSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarLucasRM },
                                        { name: "Chamado On-Site", y: this.state.listarLucasCO },
                                        { name: "Revisão de Venda", y: this.state.listarLucasRV },
                                        { name: "Confecção de Cabos", y: this.state.listarLucasCC },
                                        { name: "M/M de Venda", y: this.state.listarLucasMMV },
                                        { name: "Rec Placa", y: this.state.listarLucasRP },
                                        { name: "Limpeza", y: this.state.listarLucasLP },
                                        { name: "Revisão Reprovado", y: this.state.listarLucasRR },
                                        { name: "Revisão Compras", y: this.state.listarLucasRC },
                                        { name: "Revisão Locação", y: this.state.listarLucasRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarLucasCol },
                                        { name: "Leitor", y: this.state.listarLucasLei },
                                        { name: "Busca Preço", y: this.state.listarLucasBusca },
                                        { name: "Impressora", y: this.state.listarLucasImp },
                                        { name: "Carregador 3 P", y: this.state.listarLucasCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarLucasCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarLucasCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarLucasCar6 },
                                        { name: "Berço", y: this.state.listarLucasBerco },
                                        { name: "Fonte", y: this.state.listarLucasFonte },
                                        { name: "Cabo C", y: this.state.listarLucasCabos },
                                        { name: "Bateria", y: this.state.listarLucasBateria }
                                    ]} />

                            }

                        />
                    </div>
                    <div className="col-md-3 d-flex d-flex justify-content-around">
                        <ModalTecnicos imagem={imgDiogo} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgDiogo} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalDiogo}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDiogoMC },
                                        { name: "Laudo", y: this.state.listarDiogoLA },
                                        { name: "Suporte Remoto", y: this.state.listarDiogoSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDiogoRM },
                                        { name: "Chamado On-Site", y: this.state.listarDiogoCO },
                                        { name: "Revisão de Venda", y: this.state.listarDiogoRV },
                                        { name: "Confecção de Cabos", y: this.state.listarDiogoCC },
                                        { name: "M/M de Venda", y: this.state.listarDiogoMMV },
                                        { name: "Rec Placa", y: this.state.listarDiogoRP },
                                        { name: "Limpeza", y: this.state.listarDiogoLP },
                                        { name: "Revisão Reprovado", y: this.state.listarDiogoRR },
                                        { name: "Revisão Compras", y: this.state.listarDiogoRC },
                                        { name: "Revisão Locação", y: this.state.listarDiogoRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDiogoMC },
                                        { name: "Laudo", y: this.state.listarDiogoLA },
                                        { name: "Suporte Remoto", y: this.state.listarDiogoSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDiogoRM },
                                        { name: "Chamado On-Site", y: this.state.listarDiogoCO },
                                        { name: "Revisão de Venda", y: this.state.listarDiogoRV },
                                        { name: "Confecção de Cabos", y: this.state.listarDiogoCC },
                                        { name: "M/M de Venda", y: this.state.listarDiogoMMV },
                                        { name: "Rec Placa", y: this.state.listarDiogoRP },
                                        { name: "Limpeza", y: this.state.listarDiogoLP },
                                        { name: "Revisão Reprovado", y: this.state.listarDiogoRR },
                                        { name: "Revisão Compras", y: this.state.listarDiogoRC },
                                        { name: "Revisão Locação", y: this.state.listarDiogoRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarDiogoCol },
                                        { name: "Leitor", y: this.state.listarDiogoLei },
                                        { name: "Busca Preço", y: this.state.listarDiogoBusca },
                                        { name: "Impressora", y: this.state.listarDiogoImp },
                                        { name: "Carregador 3 P", y: this.state.listarDiogoCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarDiogoCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarDiogoCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarDiogoCar6 },
                                        { name: "Berço", y: this.state.listarDiogoBerco },
                                        { name: "Fonte", y: this.state.listarDiogoFonte },
                                        { name: "Cabo C", y: this.state.listarDiogoCabos },
                                        { name: "Bateria", y: this.state.listarDiogoBateria }
                                    ]} />

                            }
                        />
                        <ModalTecnicos imagem={imgGabriel} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgGabriel} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalGabriel}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarGabrielMC },
                                        { name: "Laudo", y: this.state.listarGabrielLA },
                                        { name: "Suporte Remoto", y: this.state.listarGabrielSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarGabrielRM },
                                        { name: "Chamado On-Site", y: this.state.listarGabrielCO },
                                        { name: "Revisão de Venda", y: this.state.listarGabrielRV },
                                        { name: "Confecção de Cabos", y: this.state.listarGabrielCC },
                                        { name: "M/M de Venda", y: this.state.listarGabrielMMV },
                                        { name: "Rec Placa", y: this.state.listarGabrielRP },
                                        { name: "Limpeza", y: this.state.listarGabrielLP },
                                        { name: "Revisão Reprovado", y: this.state.listarGabrielRR },
                                        { name: "Revisão Compras", y: this.state.listarGabrielRC },
                                        { name: "Revisão Locação", y: this.state.listarGabrielRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarGabrielMC },
                                        { name: "Laudo", y: this.state.listarGabrielLA },
                                        { name: "Suporte Remoto", y: this.state.listarGabrielSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarGabrielRM },
                                        { name: "Chamado On-Site", y: this.state.listarGabrielCO },
                                        { name: "Revisão de Venda", y: this.state.listarGabrielRV },
                                        { name: "Confecção de Cabos", y: this.state.listarGabrielCC },
                                        { name: "M/M de Venda", y: this.state.listarGabrielMMV },
                                        { name: "Rec Placa", y: this.state.listarGabrielRP },
                                        { name: "Limpeza", y: this.state.listarGabrielLP },
                                        { name: "Revisão Reprovado", y: this.state.listarGabrielRR },
                                        { name: "Revisão Compras", y: this.state.listarGabrielRC },
                                        { name: "Revisão Locação", y: this.state.listarGabrielRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarGabrielCol },
                                        { name: "Leitor", y: this.state.listarGabrielLei },
                                        { name: "Busca Preço", y: this.state.listarGabrielBusca },
                                        { name: "Impressora", y: this.state.listarGabrielImp },
                                        { name: "Carregador 3 P", y: this.state.listarGabrielCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarGabrielCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarGabrielCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarGabrielCar6 },
                                        { name: "Berço", y: this.state.listarGabrielBerco },
                                        { name: "Fonte", y: this.state.listarGabrielFonte },
                                        { name: "Cabo C", y: this.state.listarGabrielCabos },
                                        { name: "Bateria", y: this.state.listarGabrielBateria }
                                    ]} />

                            }
                        />
                    </div>
                    <div className="col-md-3 d-flex d-flex justify-content-around">
                        <ModalTecnicos imagem={imgBruno} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgBruno} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalBruno}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarBrunoMC },
                                        { name: "Laudo", y: this.state.listarBrunoLA },
                                        { name: "Suporte Remoto", y: this.state.listarBrunoSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarBrunoRM },
                                        { name: "Chamado On-Site", y: this.state.listarBrunoCO },
                                        { name: "Revisão de Venda", y: this.state.listarBrunoRV },
                                        { name: "Confecção de Cabos", y: this.state.listarBrunoCC },
                                        { name: "M/M de Venda", y: this.state.listarBrunoMMV },
                                        { name: "Rec Placa", y: this.state.listarBrunoRP },
                                        { name: "Limpeza", y: this.state.listarBrunoLP },
                                        { name: "Revisão Reprovado", y: this.state.listarBrunoRR },
                                        { name: "Revisão Compras", y: this.state.listarBrunoRC },
                                        { name: "Revisão Locação", y: this.state.listarBrunoRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarBrunoMC },
                                        { name: "Laudo", y: this.state.listarBrunoLA },
                                        { name: "Suporte Remoto", y: this.state.listarBrunoSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarBrunoRM },
                                        { name: "Chamado On-Site", y: this.state.listarBrunoCO },
                                        { name: "Revisão de Venda", y: this.state.listarBrunoRV },
                                        { name: "Confecção de Cabos", y: this.state.listarBrunoCC },
                                        { name: "M/M de Venda", y: this.state.listarBrunoMMV },
                                        { name: "Rec Placa", y: this.state.listarBrunoRP },
                                        { name: "Limpeza", y: this.state.listarBrunoLP },
                                        { name: "Revisão Reprovado", y: this.state.listarBrunoRR },
                                        { name: "Revisão Compras", y: this.state.listarBrunoRC },
                                        { name: "Revisão Locação", y: this.state.listarBrunoRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarBrunoCol },
                                        { name: "Leitor", y: this.state.listarBrunoLei },
                                        { name: "Busca Preço", y: this.state.listarBrunoBusca },
                                        { name: "Impressora", y: this.state.listarBrunoImp },
                                        { name: "Carregador 3 P", y: this.state.listarBrunoCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarBrunoCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarBrunoCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarBrunoCar6 },
                                        { name: "Berço", y: this.state.listarBrunoBerco },
                                        { name: "Fonte", y: this.state.listarBrunoFonte },
                                        { name: "Cabo C", y: this.state.listarBrunoCabos },
                                        { name: "Bateria", y: this.state.listarBrunoBateria }
                                    ]} />

                            }
                        />
                        <ModalTecnicos imagem={imgVinicius} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgVinicius} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalVinicius}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarViniciusMC },
                                        { name: "Laudo", y: this.state.listarViniciusLA },
                                        { name: "Suporte Remoto", y: this.state.listarViniciusSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarViniciusRM },
                                        { name: "Chamado On-Site", y: this.state.listarViniciusCO },
                                        { name: "Revisão de Venda", y: this.state.listarViniciusRV },
                                        { name: "Confecção de Cabos", y: this.state.listarViniciusCC },
                                        { name: "M/M de Venda", y: this.state.listarViniciusMMV },
                                        { name: "Rec Placa", y: this.state.listarViniciusRP },
                                        { name: "Limpeza", y: this.state.listarViniciusLP },
                                        { name: "Revisão Reprovado", y: this.state.listarViniciusRR },
                                        { name: "Revisão Compras", y: this.state.listarViniciusRC },
                                        { name: "Revisão Locação", y: this.state.listarViniciusRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarViniciusMC },
                                        { name: "Laudo", y: this.state.listarViniciusLA },
                                        { name: "Suporte Remoto", y: this.state.listarViniciusSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarViniciusRM },
                                        { name: "Chamado On-Site", y: this.state.listarViniciusCO },
                                        { name: "Revisão de Venda", y: this.state.listarViniciusRV },
                                        { name: "Confecção de Cabos", y: this.state.listarViniciusCC },
                                        { name: "M/M de Venda", y: this.state.listarViniciusMMV },
                                        { name: "Rec Placa", y: this.state.listarViniciusRP },
                                        { name: "Limpeza", y: this.state.listarViniciusLP },
                                        { name: "Revisão Reprovado", y: this.state.listarViniciusRR },
                                        { name: "Revisão Compras", y: this.state.listarViniciusRC },
                                        { name: "Revisão Locação", y: this.state.listarViniciusRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarViniciusCol },
                                        { name: "Leitor", y: this.state.listarViniciusLei },
                                        { name: "Busca Preço", y: this.state.listarViniciusBusca },
                                        { name: "Impressora", y: this.state.listarViniciusImp },
                                        { name: "Carregador 3 P", y: this.state.listarViniciusCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarViniciusCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarViniciusCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarViniciusCar6 },
                                        { name: "Berço", y: this.state.listarViniciusBerco },
                                        { name: "Fonte", y: this.state.listarViniciusFonte },
                                        { name: "Cabo C", y: this.state.listarViniciusCabos },
                                        { name: "Bateria", y: this.state.listarViniciusBateria }
                                    ]} />

                            }
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3 d-flex justify-content-around">
                        <ModalTecnicos imagem={imgDiegoA} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgDiegoA} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalDiegoA}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDiegoAMC },
                                        { name: "Laudo", y: this.state.listarDiegoALA },
                                        { name: "Suporte Remoto", y: this.state.listarDiegoASR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDiegoARM },
                                        { name: "Chamado On-Site", y: this.state.listarDiegoACO },
                                        { name: "Revisão de Venda", y: this.state.listarDiegoARV },
                                        { name: "Confecção de Cabos", y: this.state.listarDiegoACC },
                                        { name: "M/M de Venda", y: this.state.listarDiegoAMMV },
                                        { name: "Rec Placa", y: this.state.listarDiegoARP },
                                        { name: "Limpeza", y: this.state.listarDiegoALP },
                                        { name: "Revisão Reprovado", y: this.state.listarDiegoARR },
                                        { name: "Revisão Compras", y: this.state.listarDiegoARC },
                                        { name: "Revisão Locação", y: this.state.listarDiegoARL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDiegoAMC },
                                        { name: "Laudo", y: this.state.listarDiegoALA },
                                        { name: "Suporte Remoto", y: this.state.listarDiegoASR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDiegoARM },
                                        { name: "Chamado On-Site", y: this.state.listarDiegoACO },
                                        { name: "Revisão de Venda", y: this.state.listarDiegoARV },
                                        { name: "Confecção de Cabos", y: this.state.listarDiegoACC },
                                        { name: "M/M de Venda", y: this.state.listarDiegoAMMV },
                                        { name: "Rec Placa", y: this.state.listarDiegoARP },
                                        { name: "Limpeza", y: this.state.listarDiegoALP },
                                        { name: "Revisão Reprovado", y: this.state.listarDiegoARR },
                                        { name: "Revisão Compras", y: this.state.listarDiegoARC },
                                        { name: "Revisão Locação", y: this.state.listarDiegoARL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarDiegoACol },
                                        { name: "Leitor", y: this.state.listarDiegoALei },
                                        { name: "Busca Preço", y: this.state.listarDiegoABusca },
                                        { name: "Impressora", y: this.state.listarDiegoAImp },
                                        { name: "Carregador 3 P", y: this.state.listarDiegoACar3 },
                                        { name: "Carregador 4 P", y: this.state.listarDiegoACar4 },
                                        { name: "Carregador 5 P", y: this.state.listarDiegoACar5 },
                                        { name: "Carregador 6 P", y: this.state.listarDiegoACar6 },
                                        { name: "Berço", y: this.state.listarDiegoABerco },
                                        { name: "Fonte", y: this.state.listarDiegoAFonte },
                                        { name: "Cabo C", y: this.state.listarDiegoACabos },
                                        { name: "Bateria", y: this.state.listarDiegoABateria }
                                    ]} />

                            }
                        />
                        {/* <ModalTecnicos imagem={imgAnderson} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgAnderson} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalAnderson}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarAndersonMC },
                                        { name: "Laudo", y: this.state.listarAndersonLA },
                                        { name: "Suporte Remoto", y: this.state.listarAndersonSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarAndersonRM },
                                        { name: "Chamado On-Site", y: this.state.listarAndersonCO },
                                        { name: "Revisão de Venda", y: this.state.listarAndersonRV },
                                        { name: "Confecção de Cabos", y: this.state.listarAndersonCC },
                                        { name: "M/M de Venda", y: this.state.listarAndersonMMV },
                                        { name: "Rec Placa", y: this.state.listarAndersonRP },
                                        { name: "Limpeza", y: this.state.listarAndersonLP },
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção", y: this.state.listarAndersonMC },
                                        { name: "Laudo", y: this.state.listarAndersonLA },
                                        { name: "Suporte", y: this.state.listarAndersonSR },
                                        { name: "Revisão M", y: this.state.listarAndersonRM },
                                        { name: "On-Site", y: this.state.listarAndersonCO },
                                        { name: "Revisão V", y: this.state.listarAndersonRV },
                                        { name: "Confecção de Cabos", y: this.state.listarAndersonCC },
                                        { name: "M/M de Venda", y: this.state.listarAndersonMMV },
                                        { name: "Rec Placa", y: this.state.listarAndersonRP },
                                        { name: "Limpeza", y: this.state.listarAndersonLP },
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarAndersonCol },
                                        { name: "Leitor", y: this.state.listarAndersonLei },
                                        { name: "Busca Preço", y: this.state.listarAndersonBusca },
                                        { name: "Impressora", y: this.state.listarAndersonImp },
                                        { name: "Carregador 3 P", y: this.state.listarAndersonCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarAndersonCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarAndersonCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarAndersonCar6 },
                                        { name: "Berço", y: this.state.listarAndersonBerco },
                                        { name: "Fonte", y: this.state.listarAndersonFonte },
                                        { name: "Cabo C", y: this.state.listarAndersonCabos }
                                    ]} />

                            }
                        /> */}
                        <ModalTecnicos imagem={imgMarcio} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgMarcio}
                            titulo="Marcio"
                            estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalMarcio}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarMarcioMC },
                                        { name: "Laudo", y: this.state.listarMarcioLA },
                                        { name: "Suporte Remoto", y: this.state.listarMarcioSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarMarcioRM },
                                        { name: "Chamado On-Site", y: this.state.listarMarcioCO },
                                        { name: "Revisão de Venda", y: this.state.listarMarcioRV },
                                        { name: "Confecção de Cabos", y: this.state.listarMarcioCC },
                                        { name: "M/M de Venda", y: this.state.listarMarcioMMV },
                                        { name: "Rec Placa", y: this.state.listarMarcioRP },
                                        { name: "Limpeza", y: this.state.listarMarcioLP },
                                        { name: "Revisão Reprovado", y: this.state.listarMarcioRR },
                                        { name: "Revisão Compras", y: this.state.listarMarcioRC },
                                        { name: "Revisão Locação", y: this.state.listarMarcioRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarMarcioMC },
                                        { name: "Laudo", y: this.state.listarMarcioLA },
                                        { name: "Suporte Remoto", y: this.state.listarMarcioSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarMarcioRM },
                                        { name: "Chamado On-Site", y: this.state.listarMarcioCO },
                                        { name: "Revisão de Venda", y: this.state.listarMarcioRV },
                                        { name: "Confecção de Cabos", y: this.state.listarMarcioCC },
                                        { name: "M/M de Venda", y: this.state.listarMarcioMMV },
                                        { name: "Rec Placa", y: this.state.listarMarcioRP },
                                        { name: "Limpeza", y: this.state.listarMarcioLP },
                                        { name: "Revisão Reprovado", y: this.state.listarMarcioRR },
                                        { name: "Revisão Compras", y: this.state.listarMarcioRC },
                                        { name: "Revisão Locação", y: this.state.listarMarcioRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarMarcioCol },
                                        { name: "Leitor", y: this.state.listarMarcioLei },
                                        { name: "Busca Preço", y: this.state.listarMarcioBusca },
                                        { name: "Impressora", y: this.state.listarMarcioImp },
                                        { name: "Carregador 3 P", y: this.state.listarMarcioCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarMarcioCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarMarcioCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarMarcioCar6 },
                                        { name: "Berço", y: this.state.listarMarcioBerco },
                                        { name: "Fonte", y: this.state.listarMarcioFonte },
                                        { name: "Cabo C", y: this.state.listarMarcioCabos },
                                        { name: "Bateria", y: this.state.listarMarcioBateria }
                                    ]} />

                            }
                        />
                    </div>
                    <div className="col-3 d-flex justify-content-around">
                        <ModalTecnicos imagem={imgMarcio} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgMarcio}
                            titulo="Cida"
                            estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalCida}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarCidaMC },
                                        { name: "Laudo", y: this.state.listarCidaLA },
                                        { name: "Suporte Remoto", y: this.state.listarCidaSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarCidaRM },
                                        { name: "Chamado On-Site", y: this.state.listarCidaCO },
                                        { name: "Revisão de Venda", y: this.state.listarCidaRV },
                                        { name: "Confecção de Cabos", y: this.state.listarCidaCC },
                                        { name: "M/M de Venda", y: this.state.listarCidaMMV },
                                        { name: "Rec Placa", y: this.state.listarCidaRP },
                                        { name: "Limpeza", y: this.state.listarCidaLP },
                                        { name: "Revisão Reprovado", y: this.state.listarCidaRR },
                                        { name: "Revisão Compras", y: this.state.listarCidaRC },
                                        { name: "Revisão Locação", y: this.state.listarCidaRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarCidaMC },
                                        { name: "Laudo", y: this.state.listarCidaLA },
                                        { name: "Suporte Remoto", y: this.state.listarCidaSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarCidaRM },
                                        { name: "Chamado On-Site", y: this.state.listarCidaCO },
                                        { name: "Revisão de Venda", y: this.state.listarCidaRV },
                                        { name: "Confecção de Cabos", y: this.state.listarCidaCC },
                                        { name: "M/M de Venda", y: this.state.listarCidaMMV },
                                        { name: "Rec Placa", y: this.state.listarCidaRP },
                                        { name: "Limpeza", y: this.state.listarCidaLP },
                                        { name: "Revisão Reprovado", y: this.state.listarCidaRR },
                                        { name: "Revisão Compras", y: this.state.listarCidaRC },
                                        { name: "Revisão Locação", y: this.state.listarCidaRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarCidaCol },
                                        { name: "Leitor", y: this.state.listarCidaLei },
                                        { name: "Busca Preço", y: this.state.listarCidaBusca },
                                        { name: "Impressora", y: this.state.listarCidaImp },
                                        { name: "Carregador 3 P", y: this.state.listarCidaCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarCidaCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarCidaCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarCidaCar6 },
                                        { name: "Berço", y: this.state.listarCidaBerco },
                                        { name: "Fonte", y: this.state.listarCidaFonte },
                                        { name: "Cabo C", y: this.state.listarCidaCabos },
                                        { name: "Bateria", y: this.state.listarCidaBateria }
                                    ]} />

                            }
                        />
                        <ModalTecnicos imagem={imgMarcio} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgMarcio}
                            titulo="Allan"
                            estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalAllan}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarAllanMC },
                                        { name: "Laudo", y: this.state.listarAllanLA },
                                        { name: "Suporte Remoto", y: this.state.listarAllanSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarAllanRM },
                                        { name: "Chamado On-Site", y: this.state.listarAllanCO },
                                        { name: "Revisão de Venda", y: this.state.listarAllanRV },
                                        { name: "Confecção de Cabos", y: this.state.listarAllanCC },
                                        { name: "M/M de Venda", y: this.state.listarAllanMMV },
                                        { name: "Rec Placa", y: this.state.listarAllanRP },
                                        { name: "Limpeza", y: this.state.listarAllanLP },
                                        { name: "Revisão Reprovado", y: this.state.listarAllanRR },
                                        { name: "Revisão Compras", y: this.state.listarAllanRC },
                                        { name: "Revisão Locação", y: this.state.listarAllanRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarAllanMC },
                                        { name: "Laudo", y: this.state.listarAllanLA },
                                        { name: "Suporte Remoto", y: this.state.listarAllanSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarAllanRM },
                                        { name: "Chamado On-Site", y: this.state.listarAllanCO },
                                        { name: "Revisão de Venda", y: this.state.listarAllanRV },
                                        { name: "Confecção de Cabos", y: this.state.listarAllanCC },
                                        { name: "M/M de Venda", y: this.state.listarAllanMMV },
                                        { name: "Rec Placa", y: this.state.listarAllanRP },
                                        { name: "Limpeza", y: this.state.listarAllanLP },
                                        { name: "Revisão Reprovado", y: this.state.listarAllanRR },
                                        { name: "Revisão Compras", y: this.state.listarAllanRC },
                                        { name: "Revisão Locação", y: this.state.listarAllanRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarAllanCol },
                                        { name: "Leitor", y: this.state.listarAllanLei },
                                        { name: "Busca Preço", y: this.state.listarAllanBusca },
                                        { name: "Impressora", y: this.state.listarAllanImp },
                                        { name: "Carregador 3 P", y: this.state.listarAllanCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarAllanCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarAllanCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarAllanCar6 },
                                        { name: "Berço", y: this.state.listarAllanBerco },
                                        { name: "Fonte", y: this.state.listarAllanFonte },
                                        { name: "Cabo C", y: this.state.listarAllanCabos },
                                        { name: "Bateria", y: this.state.listarAllanBateria }
                                    ]} />

                            }
                        />
                    </div>
                    <div className="col-3 d-flex justify-content-start">
                    </div>
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-3 bg-primary text-light d-flex justify-content-center rounded">
                        <div className="display-3 fw-bold">
                            Gerentes
                        </div>
                    </div>
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-3 d-flex justify-content-around mx-4 mt-2">
                        <ModalTecnicos imagem={imgDouglas} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgDouglas} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalDouglas}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDouglasMC },
                                        { name: "Laudo", y: this.state.listarDouglasLA },
                                        { name: "Suporte Remoto", y: this.state.listarDouglasSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDouglasRM },
                                        { name: "Chamado On-Site", y: this.state.listarDouglasCO },
                                        { name: "Revisão de Venda", y: this.state.listarDouglasRV },
                                        { name: "Confecção de Cabos", y: this.state.listarDouglasCC },
                                        { name: "M/M de Venda", y: this.state.listarDouglasMMV },
                                        { name: "Rec Placa", y: this.state.listarDouglasRP },
                                        { name: "Limpeza", y: this.state.listarDouglasLP },
                                        { name: "Revisão Reprovado", y: this.state.listarDouglasRR },
                                        { name: "Revisão Compras", y: this.state.listarDouglasRC },
                                        { name: "Revisão Locação", y: this.state.listarDouglasRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarDouglasMC },
                                        { name: "Laudo", y: this.state.listarDouglasLA },
                                        { name: "Suporte Remoto", y: this.state.listarDouglasSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarDouglasRM },
                                        { name: "Chamado On-Site", y: this.state.listarDouglasCO },
                                        { name: "Revisão de Venda", y: this.state.listarDouglasRV },
                                        { name: "Confecção de Cabos", y: this.state.listarDouglasCC },
                                        { name: "M/M de Venda", y: this.state.listarDouglasMMV },
                                        { name: "Rec Placa", y: this.state.listarDouglasRP },
                                        { name: "Limpeza", y: this.state.listarDouglasLP },
                                        { name: "Revisão Reprovado", y: this.state.listarDouglasRR },
                                        { name: "Revisão Compras", y: this.state.listarDouglasRC },
                                        { name: "Revisão Locação", y: this.state.listarDouglasRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarDouglasCol },
                                        { name: "Leitor", y: this.state.listarDouglasLei },
                                        { name: "Busca Preço", y: this.state.listarDouglasBusca },
                                        { name: "Impressora", y: this.state.listarDouglasImp },
                                        { name: "Carregador 3 P", y: this.state.listarDouglasCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarDouglasCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarDouglasCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarDouglasCar6 },
                                        { name: "Berço", y: this.state.listarDouglasBerco },
                                        { name: "Fonte", y: this.state.listarDouglasFonte },
                                        { name: "Cabo C", y: this.state.listarDouglasCabos },
                                        { name: "Bateria", y: this.state.listarDouglasBateria }
                                    ]} />

                            }
                        />
                    </div>
                    <div className="col-3 d-flex justify-content-around mx-4 mt-2">
                        <ModalTecnicos imagem={imgKleiton} classe="rounded rounded-circle"
                            estilo={{ cursor: 'pointer', heigth: 220, width: 120 }}
                            nome={imgKleiton} estiloFoto={{ heigth: 100, width: 50 }}
                            classeFoto="rounded-circle"
                            total={this.state.listarTotalKleiton}
                            grafico1={
                                <Grafico tipo="pie" titulo="Ordens de Serviço"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarKleitonMC },
                                        { name: "Laudo", y: this.state.listarKleitonLA },
                                        { name: "Suporte Remoto", y: this.state.listarKleitonSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarKleitonRM },
                                        { name: "Chamado On-Site", y: this.state.listarKleitonCO },
                                        { name: "Revisão de Venda", y: this.state.listarKleitonRV },
                                        { name: "Confecção de Cabos", y: this.state.listarKleitonCC },
                                        { name: "M/M de Venda", y: this.state.listarKleitonMMV },
                                        { name: "Rec Placa", y: this.state.listarKleitonRP },
                                        { name: "Limpeza", y: this.state.listarKleitonLP },
                                        { name: "Revisão Reprovado", y: this.state.listarKleitonRR },
                                        { name: "Revisão Compras", y: this.state.listarKleitonRC },
                                        { name: "Revisão Locação", y: this.state.listarKleitonRL }
                                    ]}
                                />}

                            grafico2={
                                <Grafico tipo="column" titulo="Ordens de Serviço em Geral"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    cor={true}
                                    dado={[
                                        { name: "Manutenção Concluída", y: this.state.listarKleitonMC },
                                        { name: "Laudo", y: this.state.listarKleitonLA },
                                        { name: "Suporte Remoto", y: this.state.listarKleitonSR },
                                        { name: "Revisão de Manutenção", y: this.state.listarKleitonRM },
                                        { name: "Chamado On-Site", y: this.state.listarKleitonCO },
                                        { name: "Revisão de Venda", y: this.state.listarKleitonRV },
                                        { name: "Confecção de Cabos", y: this.state.listarKleitonCC },
                                        { name: "M/M de Venda", y: this.state.listarKleitonMMV },
                                        { name: "Rec Placa", y: this.state.listarKleitonRP },
                                        { name: "Limpeza", y: this.state.listarKleitonLP },
                                        { name: "Revisão Reprovado", y: this.state.listarKleitonRR },
                                        { name: "Revisão Compras", y: this.state.listarKleitonRC },
                                        { name: "Revisão Locação", y: this.state.listarKleitonRL }
                                    ]}
                                />
                            }

                            grafico3={
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={[
                                        { name: "Coletor", y: this.state.listarKleitonCol },
                                        { name: "Leitor", y: this.state.listarKleitonLei },
                                        { name: "Busca Preço", y: this.state.listarKleitonBusca },
                                        { name: "Impressora", y: this.state.listarKleitonImp },
                                        { name: "Carregador 3 P", y: this.state.listarKleitonCar3 },
                                        { name: "Carregador 4 P", y: this.state.listarKleitonCar4 },
                                        { name: "Carregador 5 P", y: this.state.listarKleitonCar5 },
                                        { name: "Carregador 6 P", y: this.state.listarKleitonCar6 },
                                        { name: "Berço", y: this.state.listarKleitonBerco },
                                        { name: "Fonte", y: this.state.listarKleitonFonte },
                                        { name: "Cabo C", y: this.state.listarKleitonCabos },
                                        { name: "Bateria", y: this.state.listarKleitonBateria }
                                    ]} />

                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}