import React from 'react';
import Main from '../../Template/Main';
import Grafico from '../../Graficos/Grafico';
import Logo from '../../../Assets/Imgs/logoZhaz.png';
import axios from 'axios';
import Url from '../../Url/Url';
import CardGD from '../../Card/CardGD';

const headerProps = {
    icon: "file-pdf-o",
    title: "Contratos"
}

const baseUrl = Url("Geral");
const baseUrlCont = Url("Contrato");

const initialState = {
    //contratos
    listarCont: [],
    totalOS: 0,
    totalServico: 0,
    garantia: 0,
    limpeza: 0,
    servico: [],
    equipamento: []

}

export default class Contratos extends React.Component {

    state = { ...initialState }

    UNSAFE_componentWillMount() {
        this.buscarContrato()
        this.statusPadrao()
    }

    statusPadrao() {
        let servico = [{ name: "Serviço", y: 0 }]
        let equipamento = [{ name: "Equipamento", y: 0 }]

        return this.setState({
            servico: servico,
            equipamento: equipamento
        })
    }

    buscarContrato() {
        axios(baseUrlCont).then(resp => {
            this.setState({ listarCont: resp.data })
        })
    }

    async buscarDados(contrato, dia, mes, ano) {
        const tabela = await axios(baseUrl).then(resp => resp.data)

        //variaveis
        let totalServico = []
        let garantia = []
        let limpeza = []
        let servico = []
        let equipamento = []

        for (let i = 0; i < tabela.length; i++) {
            if ((contrato === tabela[i].Contrato) && (ano === "Todos") && (mes === "Todos") && (dia === "Todos")) {
                this.pTotalServico(tabela[i], totalServico)
                this.pLimpeza(tabela[i], limpeza)
                this.pGarantia(tabela[i], garantia)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            } else if ((contrato === tabela[i].Contrato) && (ano === `${tabela[i].Ano}`) && (mes === "Todos") && (dia === "Todos")) {
                this.pTotalServico(tabela[i], totalServico)
                this.pLimpeza(tabela[i], limpeza)
                this.pGarantia(tabela[i], garantia)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            } else if ((contrato === tabela[i].Contrato) && (ano === `${tabela[i].Ano}`) && (mes === `${tabela[i].Mes}`) && (dia === "Todos")) {
                this.pTotalServico(tabela[i], totalServico)
                this.pLimpeza(tabela[i], limpeza)
                this.pGarantia(tabela[i], garantia)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            } else if ((contrato === tabela[i].Contrato) && (ano === `${tabela[i].Ano}`) && (mes === `${tabela[i].Mes}`) && (dia === `${tabela[i].Dia}`)) {
                this.pTotalServico(tabela[i], totalServico)
                this.pLimpeza(tabela[i], limpeza)
                this.pGarantia(tabela[i], garantia)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            }
        }

        const totalOS = [...new Set(totalServico)]

        const servicoGrafico = this.ArrayObjeto(servico)

        const equipamentoGrafico = this.ArrayObjeto(equipamento)


        return this.setState({
            totalOS: totalOS.length,
            totalServico: totalServico.length,
            garantia: garantia.length,
            limpeza: limpeza.length,
            servico: servicoGrafico,
            equipamento: equipamentoGrafico
        })
    }

    pTotalServico(tabela, dado) {
        dado.push(tabela.OS)
    }

    pLimpeza(tabela, dado) {
        if ("Limpeza" === tabela.Servico) {
            dado.push(tabela.OS)
        }
    }

    pGarantia(tabela, dado) {
        if ("Garantia" === tabela.Status) {
            dado.push(tabela.OS)
        }
    }

    pServico(tabela, dado){
        dado.push(tabela.Servico)
    }

    pEquipamento(tabela, dado){
        dado.push(tabela.Equipamento)
    }

    ArrayObjeto(dado) {
        let quantidade = dado.reduce(function (todosNomes, dado) {
            if (dado in todosNomes) {
                todosNomes[dado]++;
            } else {
                todosNomes[dado] = 1;
            }
            return todosNomes;
        }, {});
    
        let dadoFinal = Object.entries(quantidade).map(([name, y]) => ({ name, y }))
    
        return dadoFinal
    }

    filtrarDados() {
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;
        const contrato = document.getElementById("Contrato").value;

        this.buscarDados(contrato, dia, mes, ano)
    }

    renderContrato() {
        return this.state.listarCont.map(Contrato => {
            return (
                <option>{Contrato.nome}</option>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-2 d-flex flex-row justify-content-center align-items-center">
                            <i className="fa fa-filter fa-2x text-danger" /> <h2 className='fw-bold'>Filtro</h2>
                        </div>
                        <div className="col-2">
                            <label>Contrato: </label>
                            <select id="Contrato" class="form-select" aria-label="Default select example">
                                <option selected>Todos</option>
                                {this.renderContrato()}
                            </select>
                        </div>
                        <div className="col-2">
                            <label>Dia: </label>
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
                            <label>Mês: </label>
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
                            <label>Ano: </label>
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
                            <button className="btn btn-success"
                                onClick={e => this.filtrarDados(e)}
                            >Buscar</button>
                        </div>
                    </div>
                    <div className="row my-3 d-flex justify-content-between">
                        <div className="col-3 text-light">
                            <CardGD bg="dark" nomeTitulo="Total OS's" icone="codepen"
                                dado={this.state.totalOS} />
                        </div>
                        <div className="col-3 text-light">
                            <CardGD bg="success" nomeTitulo="Total Serviço" icone="server"
                                dado={this.state.totalServico} />
                        </div>
                        <div className="col-3 text-light">
                            <CardGD bg="danger" nomeTitulo="Garantia" icone="backward"
                                dado={this.state.garantia} />
                        </div>
                        <div className="col-3 text-light">
                            <CardGD bg="primary" nomeTitulo="Limpeza" icone="paint-brush"
                                dado={this.state.limpeza} />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-5 flex-fill mx-3 sombra">
                            <Grafico tipo="pie" titulo="Ordens de Serviço"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                                texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                                nomeSerie="Ordem de Serviço"
                                cor={true}
                                dado={this.state.servico}
                            />
                        </div>
                        <div className="col-md-5 sombra flex-fill">
                        <Grafico tipo="column" titulo="Ordens de Serviço"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                texto='{point.y:1f}'
                                nomeSerie="Ordem de Serviço"
                                cor={true}
                                dado={this.state.servico}
                            />
                        </div>
                        <div className="row mt-4 d-flex justify-content-center">
                            <div className="col-11 sombra mx-2">
                                <Grafico tipo="column" titulo="Equipamentos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Equipamento"
                                    cor={true}
                                    dado={this.state.equipamento} />
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}