import React from 'react'
import Filtro from './Filtro/Filtro'

const initialState = {
    Stecnico: "Todos",
    Sdia: "Todos",
    Smes: "Todos",
    Sano: "Todos",
}

export default class IndexDash extends React.Component {

    state = { ...initialState }

    receberStatusFiltro = (tecnico, dia, mes, ano) => {
        return this.setState({
            Stecnico: tecnico,
            Sano: ano,
            Smes: mes,
            Sdia: dia
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <Filtro status={this.receberStatusFiltro} />
                </div>
                <div className="row border mt-3">
                    <div className="col-1 border">Foto</div>
                    <div className="col-2 border">
                        <div className="row border"> prod diaria </div>
                        <div className="row border"> Meta</div>
                    </div>
                    <div className="col-3 border"> Total OS </div>
                    <div className="col-3 border"> Total Servicos </div>
                    <div className="col-3 border"> Limpeza </div>
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