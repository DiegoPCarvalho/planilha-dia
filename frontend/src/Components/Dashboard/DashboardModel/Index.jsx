import React from 'react'
import Filtro from './Filtro/Filtro'
import ServOsLimp from './ServicoOSLimpeza/ServOSLimp'
import FotoTecnico from '../DashboardModel/Foto/FotoTecnico'


const initialState = {
    Stecnico: "Todos",
    Sdia: "Todos",
    Smes: "Todos",
    Sano: "Todos",
    Simagem: ""
}

export default class IndexDash extends React.Component {

    state = { ...initialState }

    receberStatusFiltro = (tecnico, dia, mes, ano, imagem) => {
        return this.setState({
            Stecnico: tecnico,
            Sano: ano,
            Smes: mes,
            Sdia: dia,
            Simagem: imagem
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <Filtro status={this.receberStatusFiltro} />
                </div>
                <div className="row border mt-3">
                    <div className="col-1 border mx-1"><FotoTecnico Tecnico={this.state.Simagem} /></div>
                    <div className="col-2 border mx-1">
                        <div className="row border my-1"> prod diaria </div>
                        <div className="row border my-1"> Meta</div>
                    </div>
                    <ServOsLimp Tecnico={this.state.Stecnico} Dia={this.state.Sdia} Mes={this.state.Smes} Ano={this.state.Sano} />
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