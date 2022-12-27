import React from 'react';
import Grafico from '../Graficos/Grafico';
import "./Relatorio.css";
import axios from 'axios';
import Url from '../Url/Url';

const initialState = {
    listarMC: [],
    listarLA: [],
    listarSR: [],
    listarRM: [],
    listarCO: [],
    listarRV: [],
    listTotal: []
}

const banco = "Geral";

const baseUrl = Url(banco);

export default class Relatorio extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.buscarManutenção()
    }

    async buscarManutenção() {
        const tabelaNome = await axios(baseUrl).then(resp => resp.data)
        let dadoMC = [];
        let dadoLA = [];
        let dadoSR = [];
        let dadoRM = [];
        let dadoCO = [];
        let dadoRV = [];

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario == tabelaNome[i].Tecnico) && ("Manutenção Concluída" == tabelaNome[i].Servico)) {
                dadoMC.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario == tabelaNome[i].Tecnico) && ("Laudo" == tabelaNome[i].Servico)) {
                dadoLA.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario == tabelaNome[i].Tecnico) && ("Suporte Remoto" == tabelaNome[i].Servico)) {
                dadoSR.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario == tabelaNome[i].Tecnico) && ("Revisão de Manutenção" == tabelaNome[i].Servico)) {
                dadoRM.push({
                    OS: tabelaNome[i].OS
                })
            }
        }


        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario == tabelaNome[i].Tecnico) && ("Chamado On-Site" == tabelaNome[i].Servico)) {
                dadoCO.push({
                    OS: tabelaNome[i].OS
                })
            }
        }

        for (let i = 0; i < tabelaNome.length; i++) {
            if ((localStorage.usuario == tabelaNome[i].Tecnico) && ("Revisão de Venda" == tabelaNome[i].Servico)) {
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

    // mostrarDados(){
    //     const data = [
    //         {name:"Manutenção Concluída", y: this.state.listarMC }
    //     ]

    //     return data
    // }

    render() {
        return (
            <div className='row mt-4 d-flex justify-content-around'>
                <div className="col-12 col-md-5 flex-fill mx-3 sombra">
                <Grafico tipo="pie" titulo="Ordens de Serviço"
                    formate='<b>{point.name}</b>: {point.percentage:.1f} %'
                    texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                    dado={[
                        {name:"Manutenção Concluída", y: this.state.listarMC },
                        {name:"Laudo", y: this.state.listarLA },
                        {name:"Suporte Remoto", y: this.state.listarSR },
                        {name:"Revisão de Manutenção", y: this.state.listarRM },
                        {name:"Chamado On-Site", y: this.state.listarCO },
                        {name:"Revisão de Venda", y: this.state.listarRV },
                    ]}
                    />
                </div>
                <div className="col-12 col-md-5 sombra flex-fill">
                    <Grafico tipo="column" titulo="Ordens de Serviço"
                        formate='{point.y:1f}'
                        texto='{point.y:1f}'
                    dado={[
                        {name:"Manutenção", y: this.state.listarMC },
                        {name:"Laudo", y: this.state.listarLA },
                        {name:"Suporte", y: this.state.listarSR },
                        {name:"Revisão M", y: this.state.listarRM },
                        {name:"On-Site", y: this.state.listarCO },
                        {name:"Revisão V", y: this.state.listarRV },
                    ]}
                    />
                </div>
            </div>
        )

    }
}