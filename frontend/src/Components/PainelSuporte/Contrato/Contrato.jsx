import React from "react";
import axios from 'axios';
import SupGif from '../../../Assets/gifs/tabSup.gif';
import Url2 from '../../Url/Url2';
import CardSuporte from "../../Card/CardPainelSup";


const initialState = {
    coletores: [],
    leitores: [],
    impressoras: [],
    registros: []
}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

const baseUrlBanco = Url2("suporteContrato");

export default class Contrato extends React.Component {
    state = { ...initialState }

    componentDidMount() {
        axios(baseUrlBanco).then(resp => {
                this.setState({ registros: resp.data })
        })

        setTimeout(() => {
            this.buscarPorEquipamento()
        }, 1000);

        

    }

    buscarPorEquipamento = () => {
        const banco = this.state.registros
        let impressoras = []
        let coletores = []
        let leitores = []

        banco.map(bnc => {
            var c = `${bnc.Equipamento}`
            if (c.match(/IMPRESSORA/)) {
                impressoras.push({
                    ...bnc
                })
            }
            if (c.match(/COLETOR/)) {
                coletores.push({
                    ...bnc
                })
            }
            if (c.match(/TERMINAL/)) {
                coletores.push({
                    ...bnc
                })
            }
            if (c.match(/LEITOR/)) {
                leitores.push({
                    ...bnc
                })
            }
        })


        return this.setState({
            impressoras,
            coletores,
            leitores
        }) 

    }

    formatarData = (data) =>{
        const dt = new Date(data).toLocaleDateString()
        return dt
    }



    renderTable(Equip, dados, retorno) {
        return (
            <table  className="table mt-3">
                <thead className='table-dark'>
                    <tr>
                        <th className="d-flex justify-content-center">{Equip}</th>
                    </tr>
                </thead>
                <tbody style={{ overflow: 'auto', height: 400 }} className="d-block">
                    {dados.length === 0 ?
                        this.renderBuscando()
                        : (retorno)}
                </tbody>
            </table>
        )
    }

    renderRows(equipamentos) {
        return equipamentos.map((equipamento, i) => {
            return (
                <tr className="d-flex">
                    <td key={i} className="flex-fill d-flex justify-content-center">
                        <CardSuporte OS={equipamento.OS} Data={this.formatarData(equipamento.Data)} 
                                Equipamento={equipamento.Equipamento} NS={equipamento.NS}
                                Cliente={equipamento.Cliente}
                                Agente={equipamento.AgenteComercial} Obs={equipamento.ObservacaoEquip}
                                contrato Sla={equipamento.Sla} className={this.MudarCor(equipamento.Sla)}
                            />
                        
                    </td>
                </tr>
            )
        })
    }

    renderBuscando() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <img src={SupGif} alt="" style={estilo} />
                <span className="fw-bold mx-2">Aguardando suportes!!</span>
            </div>
        )
    }

    MudarCor(classe){
        if(classe <= 1){
            return 'p-1 bg-success rounded text-white'
        }else if(classe === 2){
            return 'p-1 bg-warning rounded'
        }else if(classe >= 3){
            return 'p-1 bg-danger rounded text-white'
        }
    }

    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-3 mb-3'>
                        <i className="fa fa-phone-square fa-4x"></i>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="h3 bg-success rounded text-light fw-bold p-2">Contrato</div>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row">
                    <div className='col-12 col-md-4'>
                        {this.renderTable('Coletor/Terminal', this.state.coletores, this.renderRows(this.state.coletores))}
                    </div>
                    <div className='col-12 col-md-4 '>
                        {this.renderTable('Leitor', this.state.leitores, this.renderRows(this.state.leitores))}
                    </div>
                    <div className='col-12 col-md-4 '>
                        {this.renderTable('Impressora', this.state.impressoras, this.renderRows(this.state.impressoras))}
                    </div>
                </div>
                <div>
                    {/* <CardSuporte OS={1234} Data={'27/04/2024'} contrato /> */}
                </div>
            </>
        )
    }
}