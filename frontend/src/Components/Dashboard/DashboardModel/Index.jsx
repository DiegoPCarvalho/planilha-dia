import React from 'react'
import Filtro from './Filtro/Filtro'
import ServOsLimp from './ServicoOSLimpeza/ServOSLimp'
import FotoTecnico from '../DashboardModel/Foto/FotoTecnico'
import ProdDia from './ProdDiaria/ProdDiaria'


const initialState = {
    Simagem: "",
    StotalOS: [],
    StotalServico: [],
    Slimpeza: [],
    SprodDiaria: []
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


    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <Filtro status={this.receberStatusFiltro} cards={this.receberTotalOSL} prod={this.receberProdDiaria}/>
                </div>
                <div className="row border mt-3 d-flex justify-content-between">
                    <div className="col-1 "><FotoTecnico Tecnico={this.state.Simagem} /></div>
                    <div className="col-2  d-flex align-items-center flex-column justify-content-center">
                        <div className="row my-1"> <ProdDia dadosDia={this.state.SprodDiaria} /> </div>
                        <div className="row border my-1"> Meta</div>
                    </div>
                    <ServOsLimp
                        TotalOS={this.state.StotalOS}
                        TotalServico={this.state.StotalServico}
                        Limpeza={this.state.Slimpeza} />
                </div>
                <div className="row border mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">Grafico Servico</div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">Grafico Tecnico</div>
                </div>
                <div className="row border mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">Grafico Equipamento</div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">Grafico Recuperacao placas</div>
                </div>
                <div className="row border mt-3">
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">Grafico contrato X avulso</div>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">Grafico Projecao anual</div>
                </div>
            </div>
        )
    }
}