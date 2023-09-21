import React from 'react'
import Filtro from './Filtro/Filtro'
import ServOsLimp from './ServicoOSLimpeza/ServOSLimp'
import FotoTecnico from '../DashboardModel/Foto/FotoTecnico'
import ProdDia from './ProdDiaria/ProdDiaria'
import Meta from './Meta/Meta'
import GraficoTecnicos from './GraficoTecnicos/GraficoTecnicos'
import RecPlaca from './GraficoPlacas/RecuperacaoPlaca'
import Equipamento from './GraficoEquipamento/Equipamento'
import ProjecaoAnual from './GraficoProjecao/GraficoPrejecao'
import AvulsoContrato from './GraficoAvulsoContrato/AvulsoContrato'
import Servico from './GraficoServico/Servico'


const initialState = {
    Simagem: "",
    StotalOS: [],
    StotalServico: [],
    Slimpeza: [],
    SprodDiaria: [],
    Smeta: [],
    Stecnico: [],
    SrecPlaca: [],
    SrecTotalPlc: [],
    Sequipamento: [],
    SprojAnual: [],
    SavulsoContrato: [],
    ScontratoSerie: [],
    SservicoDado: [],
    SservicoSerie: []
}

export default class IndexDash extends React.Component {

    state = { ...initialState }

    receberStatusFiltro = (imagem) => {
        return this.setState({
            Simagem: imagem
        })
    }

    receberTotalOSL = (totalOS, totalServico, limpeza) => {
        return this.setState({
            StotalOS: totalOS,
            StotalServico: totalServico,
            Slimpeza: limpeza
        })
    }

    receberProdDiaria = (prodDiaria) => {
        return this.setState({
            SprodDiaria: prodDiaria
        })
    }

    receberMeta = (meta) => {
        return this.setState({
            Smeta: meta
        })
    }
    receberTecnicos = (tecnico) => {
        return this.setState({
            Stecnico: tecnico
        })
    }
    receberPlaca = (placa, total) => {
        return this.setState({
            SrecPlaca: placa,
            SrecTotalPlc: total
        })
    }
    receberEquip = (equip) => {
        return this.setState({
            Sequipamento: equip,
        })
    }
    receberProjAnual = (projAnual) => {
        return this.setState({
            SprojAnual: projAnual,
        })
    }
    receberAvulsoContrato = (avulsoContrato , serie) => {
        return this.setState({
            SavulsoContrato: avulsoContrato,
            ScontratoSerie: serie
        })
    }

    receberServico = (dado , serie) => {
        return this.setState({
            SservicoDado: dado,
            SservicoSerie: serie
        })
    }
   

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <Filtro status={this.receberStatusFiltro} cards={this.receberTotalOSL} prod={this.receberProdDiaria}
                        meta={this.receberMeta} tecnico={this.receberTecnicos} recPlaca={this.receberPlaca}  
                        equip={this.receberEquip} projAnual={this.receberProjAnual} avulsoContrato={this.receberAvulsoContrato}
                        servico={this.receberServico}/>
                </div>
                <div className="row mt-3 d-flex justify-content-between">
                    <div className="col-1"><FotoTecnico Tecnico={this.state.Simagem} /></div>
                    <div className="col-1  d-flex align-items-center flex-column justify-content-center">
                        <div className="row my-1"> <ProdDia dadosDia={this.state.SprodDiaria} /> </div>
                        <div className="row my-1"> <Meta total={this.state.StotalServico} meta={this.state.Smeta} /></div>
                    </div>
                    <ServOsLimp
                        TotalOS={this.state.StotalOS}
                        TotalServico={this.state.StotalServico}
                        Limpeza={this.state.Slimpeza} />
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><Servico servico={this.state.SservicoDado}/></div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><GraficoTecnicos tecnico={this.state.Stecnico} /></div>
                </div>
                <div className="row  mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><Equipamento equip={this.state.Sequipamento}/></div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><RecPlaca placa={this.state.SrecPlaca} total={this.state.SrecTotalPlc} /></div>
                </div>
                <div className="row  mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><AvulsoContrato avulsoContrato={this.state.SavulsoContrato} serie={this.state.ScontratoSerie}/></div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><ProjecaoAnual projAnual={this.state.SprojAnual}/></div>
                </div>
            </div>
        )
    }
}
