import React from 'react'
import Filtro from './Filtro/Filtro'
import ServOsLimp from './ServicoOSLimpeza/ServOSLimp'
import FotoTecnico from '../DashboardModel/Foto/FotoTecnico'
import ProdDia from './ProdDiaria/ProdDiaria'
// import Meta from './Meta/Meta'
import GraficoTecnicos from './GraficoTecnicos/GraficoTecnicos'
import RecPlaca from './GraficoPlacas/RecuperacaoPlaca'
import Equipamento from './GraficoEquipamento/Equipamento'
import ProjecaoAnual from './GraficoProjecao/GraficoPrejecao'
import AvulsoContrato from './GraficoAvulsoContrato/AvulsoContrato'
import Servico from './GraficoServico/Servico'
import Tempo from './Tempo/TempoOS'


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
    SservicoSerie: [],
    StempBruto: "",
    StempLiquido: "",
    StempProblema: ""
}

export default class IndexDash extends React.Component {

    state = { ...initialState }

    receberStatusFiltro = (imagem) => {
        return this.setState({
            Simagem: imagem
        })
    }

    receberDado = (totalOS, totalServico, limpeza, prodDiaria, meta, dadoServ, serieServ,
        tecnico, equip, placa, totalPlc, avulsoContrato, serieCont, projAnual, tempBruto, tempLiquido, tempProblema) => {
        return this.setState({
            StotalOS: totalOS,
            StotalServico: totalServico,
            Slimpeza: limpeza,
            SprodDiaria: prodDiaria,
            Smeta: meta,
            SservicoDado: dadoServ,
            SservicoSerie: serieServ,
            Stecnico: tecnico,
            Sequipamento: equip,
            SrecPlaca: placa,
            SrecTotalPlc: totalPlc,
            SavulsoContrato: avulsoContrato,
            ScontratoSerie: serieCont,
            SprojAnual: projAnual,
            StempBruto: tempBruto,
            StempLiquido: tempLiquido,
            StempProblema: tempProblema
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <Filtro status={this.receberStatusFiltro}
                        dados={this.receberDado}
                    />
                </div>
                <div className="row mt-3 d-flex justify-content-between">
                    <div className="col-1"><FotoTecnico Tecnico={this.state.Simagem} /></div>
                    <div className="col-2  d-flex align-items-center flex-column justify-content-center">
                        <div className="row my-1"> <ProdDia dadosDia={this.state.SprodDiaria} /> </div>
                        <div className="row my-1"> <Tempo dadosDia={''} bruto={this.state.StempBruto} liquido={this.state.StempLiquido} problema={this.state.StempProblema}/> </div>
                        {/* <div className="row my-1"> <Meta total={this.state.StotalServico} meta={this.state.Smeta} /></div> */}
                    </div>
                    <ServOsLimp
                        TotalOS={this.state.StotalOS}
                        TotalServico={this.state.StotalServico}
                        Limpeza={this.state.Slimpeza} />
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><Servico servico={this.state.SservicoDado} serie={this.state.SservicoSerie} /></div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><GraficoTecnicos tecnico={this.state.Stecnico} /></div>
                </div>
                <div className="row  mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><Equipamento equip={this.state.Sequipamento} /></div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><RecPlaca placa={this.state.SrecPlaca} total={this.state.SrecTotalPlc} /></div>
                </div>
                <div className="row  mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><AvulsoContrato avulsoContrato={this.state.SavulsoContrato} serie={this.state.ScontratoSerie} /></div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra"><ProjecaoAnual projAnual={this.state.SprojAnual} /></div>
                </div>
            </div>
        )
    }
}
