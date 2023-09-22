import React from 'react'

import PuxarDados from '../Estrutura/PuxarDados';
import BuscarTec from './BuscarTec';
import { BuscarFoto } from '../Foto/FotoTecnico';
import { BuscarDados } from '../ServicoOSLimpeza/ServOSLimp';
import { BuscarDadosProdDia } from '../ProdDiaria/ProdDiaria';
import { BuscarDadosMeta } from '../Meta/Meta';
import { BuscarTecnicos } from '../GraficoTecnicos/GraficoTecnicos';
import { BuscarPlaca } from '../GraficoPlacas/RecuperacaoPlaca';
import { BuscarEquipamento } from '../GraficoEquipamento/Equipamento';
import { BuscarProjAnual } from "../GraficoProjecao/GraficoPrejecao";
import { BuscarAvulsoContrato } from '../GraficoAvulsoContrato/AvulsoContrato';
import { BuscarServico } from '../GraficoServico/Servico';

import imgLogoIcon from '../../../../Assets/Imgs/logoIcon.png'


const initialState = {
    optionsTec: [],
}


export default class Filtro extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.BuscarTec()
        this.statusPadrao()
    }


    async BuscarTec() {
        const tabela = await PuxarDados("LoginUsuario")
        let dadosTec = []

        BuscarTec(tabela, dadosTec)

        return this.setState({
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

    async statusPadrao() {
        //cards
        this.props.status(imgLogoIcon)
        const cardServ = await BuscarDados("Todos", "Todos", "Todos", "Todos")
        this.props.cards(cardServ.totalOS, cardServ.totalServ, cardServ.limpeza)
        this.props.prod(await BuscarDadosProdDia("Todos", "Todos", "Todos", "Todos"))

        //graficos
        const serv = await BuscarServico("Todos", "Todos", "Todos", "Todos")
        this.props.servico(serv.servicos, serv.series)
        this.props.tecnico(await BuscarTecnicos("Todos", "Todos", "Todos", "Todos"))
        this.props.equip(await BuscarEquipamento("Todos", "Todos", "Todos", "Todos"))
        const placa = await BuscarPlaca("Todos", "Todos", "Todos", "Todos")
        this.props.recPlaca(placa.dado, placa.total)
        const data = await BuscarAvulsoContrato("Todos", "Todos", "Todos", "Todos")
        this.props.avulsoContrato(data.dadoPrimario, data.dadoSerie)
        this.props.projAnual(await BuscarProjAnual("Todos", "Todos", "Todos", "Todos"))
    }

    async executar() {
        const tecnico = document.getElementById("tecnico").value;
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;
        this.props.status(BuscarFoto(tecnico))

        //cards
        const cardServ = await BuscarDados(tecnico, dia, mes, ano)
        this.props.cards(cardServ.totalOS, cardServ.totalServ, cardServ.limpeza)

        //prodDiaria
        const prod = await BuscarDadosProdDia(tecnico, dia, mes, ano)
        this.props.prod(prod)

        //Meta
        const meta = await BuscarDadosMeta(tecnico, dia, mes, ano)
        this.props.meta(meta)

        //servico
        const serv = await BuscarServico(tecnico, dia, mes, ano)
        if(serv.servicos.length === 0){
            let dd = [{ name: "Servico", y: 0 }]
            this.props.servico(dd)
        }else{
            this.props.servico(serv.servicos, serv.series)
        }

        //tecnicos
        const tec = await BuscarTecnicos(tecnico, dia, mes, ano)
        this.props.tecnico(tec)

        //Equipamento
        const equipa = await BuscarEquipamento(tecnico, dia, mes, ano)
        this.props.equip(equipa)

        //placas
        const plc = await BuscarPlaca(tecnico, dia, mes, ano)
        if (plc.dado.length === 0) {
            let dd = [{ name: "Rec", y: 0 }]
            this.props.recPlaca(dd, plc.total)
        } else {
            this.props.recPlaca(plc.dado, plc.total)
        }

        //AvulsoContrato 
        const avulCont = await BuscarAvulsoContrato(tecnico, dia, mes, ano)
        this.props.avulsoContrato(avulCont.dadoPrimario, avulCont.dadoSerie)

        //projecaoAnual
        const proja = await BuscarProjAnual(tecnico, dia, mes, ano)
        this.props.projAnual(proja)
    }




    render() {
        return (
            <>
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
                    <button className="btn btn-success fw-bold" onClick={e => this.executar(e)}>Buscar</button>
                </div>
            </>
        )
    }
}