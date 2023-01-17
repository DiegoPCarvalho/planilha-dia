import React from 'react';
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logo.png';
import axios from 'axios';
import Url from '../Url/Url';
import Grafico from '../Graficos/Grafico';



const HeaderProps = {
    icon: "database",
    title: "Gerencia"
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
    listarLP: [0]
}

const banco = "Geral";

const baseUrl = Url(banco);

export default class DashboardGerencia extends React.Component {
    state = { ...initialState }

    componentWillMount() {
        this.validacao()
        this.buscarDados()
    }

    validacao() {
        if (localStorage.AdmG === "0") {
            window.location.pathname = "/Dashboard";
            alert("Não Tem Permissão Para Acessar essa Área")
        }
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

        for (let i = 0; i < tabelaNome.length; i++) {
            if (("Manutenção Concluída" === tabelaNome[i].Servico)) {
                dadoMC.push({
                    OS: tabelaNome[i].OS
                })
            }
            else
                if (("Laudo" === tabelaNome[i].Servico)) {
                    dadoLA.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Suporte Remoto" === tabelaNome[i].Servico)) {
                    dadoSR.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Revisão de Manutenção" === tabelaNome[i].Servico)) {
                    dadoRM.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Chamado On-Site" === tabelaNome[i].Servico)) {
                    dadoCO.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Revisão de Venda" === tabelaNome[i].Servico)) {
                    dadoRV.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Confecção de Cabos" === tabelaNome[i].Servico)) {
                    dadoCC.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Montagem/Manutenção de Venda" === tabelaNome[i].Servico)) {
                    dadoMMV.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Recuperação de Placa" === tabelaNome[i].Servico)) {
                    dadoRP.push({
                        OS: tabelaNome[i].OS
                    })
                }
                else if (("Limpeza" === tabelaNome[i].Servico)) {
                    dadoLP.push({
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
            listarRP: totalRP,
            listarLP: totalLP,

            listarTotalEquip: totalEquip
        })
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
                    <div className="col-3">
                    <label>Mês: </label>
                        <select id="mes" class="form-select" aria-label="Default select example">
                            <option selected>Geral</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div className="col-3">
                    <label>Ano: </label>
                        <select id="ano" class="form-select" aria-label="Default select example">
                            <option selected>Geral</option>
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
                        <button className="btn btn-success">Buscar</button>
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
                                    { name: "Rec Placa", y: this.state.listarRP },
                                    { name: "Limpeza", y: this.state.listarLP },
                                ]}
                            />
                    </div>
                    <div className="col-12 col-md-5 sombra flex-fill">
                            <Grafico tipo="column" titulo="Ordens de Serviço"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                texto='{point.y:1f}'
                                nomeSerie="Ordem de Serviço"
                                dado={[
                                    { name: "Manutenção", y: this.state.listarMC },
                                    { name: "Laudo", y: this.state.listarLA},
                                    { name: "Suporte", y: this.state.listarSR},
                                    { name: "Revisão M", y: this.state.listarRM},
                                    { name: "On-Site", y: this.state.listarCO},
                                    { name: "Revisão V", y: this.state.listarRV},
                                    { name: "Confecção de Cabos", y: this.state.listarCC},
                                    { name: "M/M de Venda", y: this.state.listarMMV},
                                    { name: "Rec Placa", y: this.state.listarRP },
                                    { name: "Limpeza", y: this.state.listarLP },
                                ]}
                                />
                    </div>
                </div>
                <div className="row mt-4">
                <div className="col-12 col-md-5 sombra flex-fill">
                            <Grafico tipo="bar" titulo="Ordens de Serviço"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                texto='{point.y:1f}'
                                nomeSerie="Ordem de Serviço"
                                dado={[
                                    { name: "Diego C", y: this.state.listarTotalCOl },
                                        { name: "Natanael", y: this.state.listarTotalLei },
                                        { name: "Bruno", y: this.state.listarTotalBusca },
                                        { name: "Vinicius", y: this.state.listarTotalImp },
                                        { name: "Mateus", y: this.state.listarTotalCar3 },
                                        { name: "Marcio", y: this.state.listarTotalCar4 },
                                        { name: "Gabriel", y: this.state.listarTotalCar5 },
                                        { name: "Lucas", y: this.state.listarTotalCar6 },
                                        { name: "Diogo", y: this.state.listarTotalBerco },
                                        { name: "Allan", y: this.state.listarTotalFonte },
                                        { name: "Cida", y: this.state.listarTotalCabos }
                                ]}
                                />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        tecnicos
                    </div>
                </div>
            </Main>
        )
    }
}