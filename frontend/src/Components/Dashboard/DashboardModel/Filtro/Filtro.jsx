import React from 'react'

import PuxarDados from '../Estrutura/PuxarDados';
import BuscarTec from './BuscarTec';
import { BuscarFoto } from '../Foto/FotoTecnico';
import BuscarDados from '../GraficoGeral/BuscarDados';

import imgLogoIcon from '../../../../Assets/Imgs/logoIcon.png'


const initialState = {
    optionsTec: [],
}


export default class Filtro extends React.Component {

    state = { ...initialState }

    componentDidMount() {
        this.BuscarTec()
        this.statusPadrao()
        console.log(this.state.optionsTec)
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
        const objF = await BuscarDados("Todos", "Todos", "Todos", "Todos")
        this.props.dados(
            objF.totalOS, objF.totalServico, objF.totalLimpeza, objF.totalPorDia, objF.totalMeta,
            objF.servico, objF.servicoSerie, objF.totalTecnico, objF.totalEquip, objF.recPlaca,
            objF.totalPlaca, objF.avulsoContrato, objF.serieAvlCont, objF.projecao, objF.tempBruto,
            objF.tempLiquido, objF.tempProblema
            )
    }

    async executar() {
        const tecnico = document.getElementById("tecnico").value;
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;
        this.props.status(BuscarFoto(tecnico))

        const objF = await BuscarDados(tecnico, dia, mes, ano)
        this.props.dados(
            objF.totalOS, objF.totalServico, objF.totalLimpeza, objF.totalPorDia, objF.totalMeta,
            objF.servico, objF.servicoSerie, objF.totalTecnico, objF.totalEquip, objF.recPlaca,
            objF.totalPlaca, objF.avulsoContrato, objF.serieAvlCont, objF.projecao, objF.tempBruto,
            objF.tempLiquido, objF.tempProblema
            )
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