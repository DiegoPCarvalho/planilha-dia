import React from 'react';
import Grafico from '../Graficos/Grafico';
import "./Relatorio.css";
import axios from 'axios';
import Url from '../Url/Url';
import CardGD from '../Card/CardGD';

const initialState = {
    totalOS: 0,
    totalServico: 0,
    servico: [],
    serieServico: [],
    equipamento: []
}

const baseUrl = Url("Geral");

export default class Relatorio extends React.Component {

    state = { ...initialState }

    componentWillMount() {
        this.buscarDados("Todos", "Todos", "Todos")
    }

    async buscarDados(dia, mes, ano) {
        const tabela = await axios(baseUrl).then(resp => resp.data)

        let totalServico = []
        let servico = []
        let equipamento = []
        let serieServico = []

        for (let i = 0; i < tabela.length; i++) {
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")) {
                this.pTotalServico(tabela[i], totalServico)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            } else
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) {
                this.pTotalServico(tabela[i], totalServico)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            } else
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
                this.pTotalServico(tabela[i], totalServico)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            } else
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
                this.pTotalServico(tabela[i], totalServico)
                this.pServico(tabela[i], servico)
                this.pEquipamento(tabela[i], equipamento)
            }
        }

        const totalOS = [...new Set(totalServico)]

        const graficoServico = this.Drill(servico)

        const graficoEquipamento = this.ArrayObjeto(equipamento)

        for(let x = 0; x < graficoServico.length; x++){
            this.Series(tabela, graficoServico[x], serieServico, dia, mes, ano)
        }

        return this.setState({
            totalOS: totalOS.length,
            totalServico: totalServico.length,
            servico: graficoServico,
            serieServico: serieServico,
            equipamento: graficoEquipamento
        })

    }

    pTotalServico(tabela, dado) {
        dado.push(tabela.OS)
    }

    pServico(tabela, dado) {
        dado.push(tabela.Servico)
    }

    pEquipamento(tabela, dado){
        dado.push(tabela.Equipamento)
    }

    Series(tabela, dado, serie, dia, mes, ano){
        serie.push({
            name: dado.name,
            id: dado.name,
            data: this.retornoSerie(tabela, dado.name, dia, mes, ano)
        })
    }

    retornoSerie(tabela, dado, dia, mes, ano){
        let dados = []
        for(let i= 0; i < tabela.length; i++){
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){
                if(dado === tabela[i].Servico){
                    dados.push(tabela[i].Equipamento)
                }
            }else 
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)) {
                if(dado === tabela[i].Servico){
                    dados.push(tabela[i].Equipamento)
                }
            }else
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
                if(dado === tabela[i].Servico){
                    dados.push(tabela[i].Equipamento)
                }
            } else
            if ((localStorage.usuario === tabela[i].Tecnico) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)) {
                if(dado === tabela[i].Servico){
                    dados.push(tabela[i].Equipamento)
                }
            }
        }

        const serie = this.ArrayObjeto(dados)

        return serie
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

    Drill(servico) {
        const serv = this.ArrayObjeto(servico)
        let servicoDrill = []
    
        for (let x = 0; x < serv.length; x++) {
            servicoDrill.push({
                name: serv[x].name,
                y: serv[x].y,
                drilldown: serv[x].name
            })
        }
    
        return servicoDrill
    }

    filtrarDados() {
        const ano = document.getElementById("ano").value;
        const mes = document.getElementById("mes").value;
        const dia = document.getElementById("dia").value;

        this.buscarDados(dia, mes, ano)
    }

    render() {
        return (
            <div>
                <div className="row mt-4">
                    <div className="col-3 d-flex flex-row justify-content-center align-items-center">
                        <i className="fa fa-filter fa-2x text-danger" /> <h2 className='fw-bold'>Filtro</h2>
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
                    <div className="col-3 d-flex align-items-end">
                        <button className="btn btn-success" onClick={e => this.filtrarDados(e)}>Buscar</button>
                    </div>
                </div>
                <div className="row my-3 d-flex justify-content-center ">
                    <div className="col-3 text-light">
                        <CardGD bg="dark" nomeTitulo="Total OS's" icone="codepen"
                            dado={this.state.totalOS} />
                    </div>
                    <div className="col-3 text-light">
                        <CardGD bg="success" nomeTitulo="Total Serviço" icone="server"
                            dado={this.state.totalServico} />
                    </div>
                </div>
                <div className='row mt-4 d-flex justify-content-around'>
                    <div className="col-12 col-md-5 flex-fill mx-3 sombra">
                        <Grafico tipo="pie" titulo="Ordens de Serviço"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                            texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                            nomeSerie="Ordem de Serviço"
                            cor={true}
                            dado={this.state.servico}
                            serie={this.state.serieServico}
                        />
                    </div>
                    <div className="col-12 col-md-5 sombra flex-fill">
                        <Grafico tipo="column" titulo="Ordens de Serviço"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Ordem de Serviço"
                            cor={true}
                            dado={this.state.servico}
                            serie={this.state.serieServico}
                        />
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 sombra mx-2">
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
        )

    }
}