import React from 'react';
import Header from '../Template/Header';
import './NewPageHome.css';
import CardHome from '../Card/CardHome';
import BuscarDados from '../Dashboard/DashboardModel/GraficoGeral/BuscarDados';
import Url from '../Url/Url';
import axios from 'axios';
import Grafico from '../Graficos/Grafico';
import CardSS from '../Card/CardSS';

import { Link } from 'react-router-dom';

import ModalRamal from '../Modal/ModalRamal';


const initialState = {
    totalOS: 0,
    totalRegistro: 0,
    totalUsuario: 0,
    prodTec: [],
    projAnual: [],
    prodDias: []
}

const baseUrl = Url("LoginUsuario");

export default class NewPageHome extends React.Component {

    state = { ...initialState }

    componentDidMount() {
        this.buscar()
    }

    async buscar() {
        const data = new Date()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()

        const tabela = await BuscarDados("Todos", "Todos", "Todos", "Todos");
        const tab2 = await BuscarDados("Todos", "Todos", "Todos", `${ano}`);
        const tabDia = await BuscarDados("Todos", "Todos", `${mes}`, `${ano}`);

        const usuario = await axios(baseUrl).then(resp => resp.data)

        return this.setState({
            totalOS: tabela.totalOS,
            totalRegistro: tabela.totalServico,
            totalUsuario: usuario.length,
            prodTec: tabela.totalTecnico,
            projAnual: tab2.projecao,
            prodDias: tabDia.totalPorDia
        })
    }

    sistemas() {
        return (
            <div className='d-flex flex-column'>
                <div className="d-flex justify-content-center mb-2">
                    <a className='btn btn-primary' href="https://app2.cosmoserp.com/zhaz/" target="_blank"> <span className='fw-bold h5'> Cosmos </span> </a>
                </div>
                <div className="d-flex justify-content-center mb-2">
                    <a className='btn btn-primary' href="https://painel-zhaz-2e1c993f7aeb.herokuapp.com/" target="_blank"> <span className='fw-bold h5'> Painel OS </span> </a>
                </div>
                <div className="d-flex justify-content-center mb-2">
                    <a className='btn btn-primary' href="https://intranet.zhaz.com.br/login/" target="_blank"> <span className='fw-bold h5'> Intranet </span> </a>
                </div>
            </div>
        )
    }

    setores() {
        return (
            <div className='d-flex justify-content-center align-items-baseline flex-column'>
                <div className="row mt-2 mb-2">
                    <div className="col-6">
                        <Link to="/DiretoriaLab" className='btn btn-success'><span className='fw-bold'> Diretoria </span></Link>
                    </div>
                    <div className="col-6">
                        <Link to="/Atividade" className='btn btn-success'><span className='fw-bold'> Técnico </span></Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <Link to="/GerenciaLab" className='btn btn-success'><span className='fw-bold'> Gerência </span></Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link to="/PerfilUsuario" className='btn btn-success'><span className='fw-bold '> Usuário </span></Link>
                    </div>
                </div>
            </div>
        )
    }

    ramal() {
        return (
            <div>
                <div className="row d-flex justify-content-end">
                    <div className='col-3 mx-2'>
                        <Link to="/Ramais" className='btn btn-warning'> <span className=' h4 rounded fw-bold'> <i className='fa fa-plus'></i> </span></Link>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-3 ">
                    <div className="col-3 d-flex justify-content-center">
                        <ModalRamal nomeBotao="Comercial" corModal="secondary" 
                        Relatorio={""}/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2">
                    <div className="col-3 d-flex justify-content-center">
                        <ModalRamal nomeBotao="ADM" corModal="secondary" 
                        Relatorio={""}/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2">
                    <div className="col-3 d-flex justify-content-center">
                        <ModalRamal nomeBotao="Laboratório" corModal="secondary" 
                        Relatorio={""}/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2">
                    <div className="col-3 d-flex justify-content-center">
                        <ModalRamal nomeBotao="Gerencia" corModal="secondary" 
                        Relatorio={""}/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2">
                    <div className="col-3 d-flex justify-content-center">
                        <ModalRamal nomeBotao="Diretoria" corModal="secondary" 
                        Relatorio={""}/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <Header icon="home" title="Home" />
                <nova className="corfundo content container-fluid ">
                    <div className="row mx-2 my-3">
                        <div className="col-6 col-md-9">
                            <div className="row d-flex justify-content-between">
                                <div className="col-12 col-sm-4 d-flex flex-wrap"><CardHome
                                    bg="ligth" titulo="Usuários" tipoTexto="text-dark boxShadow"
                                    icone="users" valor={`Qtd.: ${this.state.totalUsuario}`} corBt="primary"
                                /></div>
                                <div className="col-12 col-sm-4 d-flex flex-wrap"><CardHome
                                    bg="ligth" titulo="T. de OS's" tipoTexto="text-dark boxShadow"
                                    icone="file" valor={`Qtd.: ${this.state.totalOS}`} corBt="warning"
                                /></div>
                                <div className="col-12 col-sm-4 d-flex flex-wrap"><CardHome
                                    bg="ligth" titulo="T. Registros" tipoTexto="text-dark boxShadow"
                                    icone="book" valor={`Qtd.: ${this.state.totalRegistro}`} corBt="success"
                                /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="boxShadow">
                                        <Grafico tipo="column" titulo="Produtividade por Dia do Mes Atual"
                                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                            texto='{point.y:1f}'
                                            nomeSerie="Dia"
                                            vertical={285}
                                            dado={this.state.prodDias}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className='boxShadow'>
                                <Grafico tipo="bar" titulo="Prod. Técnicos"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Serviço"
                                    cor={true}
                                    dado={this.state.prodTec} />
                            </div>
                        </div>
                    </div>
                    <div className="row mx-3 my-3">
                        <div className="col-md-2 ">
                            <div className="row">
                                <CardSS tipoTexto="text-dark boxShadow" titulo="Sistemas" estilo={{ height: 200, width: '100%' }}
                                    conteudo={this.sistemas()} />
                            </div>
                            <div className="row mt-3">
                                <CardSS tipoTexto="text-dark boxShadow" titulo="Setores" estilo={{ height: 200, width: '100%' }}
                                    conteudo={this.setores()} />
                            </div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <div className="boxShadow">
                                <Grafico tipo="spline" titulo="Quantidade por Ano Atual"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    nomeSerie="Ordem de Serviço"
                                    dado={this.state.projAnual} />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <CardSS tipoTexto="text-dark boxShadow" titulo="Ramais" estilo={{ height: '100%', width: '100%' }}
                                conteudo={this.ramal()} />
                        </div>
                    </div>
                </nova>
            </>
        )
    }
}