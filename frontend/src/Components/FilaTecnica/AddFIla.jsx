import React from "react";
import axios from "axios";
import Url2 from '../Url/Url2';
import Url from '../Url/Url';
import SupGif from '../../Assets/gifs/tabSup.gif';
import ModalFilaTecnica from "../Modal/ModalFIlaTecnica";
import $ from 'jquery';


const initialState = {
    list: [],
    listagem: [],
    listCont: [],
    listTecnico: [],
    Atividade: {
        id: '',
        OS: '',
        Data: '',
        dt: '',
        DataFinalMovto: '',
        Cliente: '',
        Equipamento: '',
        NS: '',
        TipoOS: '',
        Estagio: '',
        Tecnico: '',
        ProblemObs: '',
        Problema: 'Não',
        DataInicialProblema: '',
        ContProblema: 0
    },
    Filtro: {
        EstagioOS: '',
        Tipo: ''
    },
    modal: false
}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

const baseUrl = Url2("AguardandoVistoria");
const baseUrl2 = Url2("Aprovado");
const bancoUrl = Url("FilaTecnica");
const baseUrlCont = Url("Contrato");
const baseUrlTec = Url("LoginUsuario");

export default class AddFila extends React.Component {

    state = { ...initialState }

    //#region montagem do component
    componentDidMount() {
        this.buscarBanco()
        this.buscarLists()
    }

    // componentDidUpdate(){
    //     this.pagination()
    // }
    //#endregion

    //#region buscar dados nos bancos
    async buscarBanco() {
        const AguardandoVistoria = await axios(baseUrl).then(resp => resp.data)
        const Aprovado = await axios(baseUrl2).then(resp => resp.data)
        const bancoZhazSys = await axios(bancoUrl).then(resp => resp.data)

        const lista = bancoZhazSys.map(registro => {
            return {
                os: registro.OS,
                serv: registro.Servico
            }
        })

        AguardandoVistoria.map(reg => {
            if (lista.find(dado => dado.os === reg.OS && dado.serv === reg.Servico)) {
            }
            else {
                if (reg.Empresa === 1) {
                    reg.Estagio = 'Em Aberto'
                    reg.Problema = 'Não'
                    reg.Tecnico = ''
                    this.saves(reg)
                }
            }
        })

        Aprovado.map(reg => {
            if (lista.find(dado => dado.os === reg.OS && dado.serv === reg.Servico)) {
            }
            else {
                if (reg.Empresa === 1) {
                    reg.Estagio = 'Em Aberto'
                    reg.Problema = 'Não'
                    reg.Tecnico = ''
                    this.saves(reg)
                }
            }
        })
    }

    buscarLists() {
        axios(baseUrlCont).then(resp => {
            this.setState({ listCont: resp.data })
        })

        axios(baseUrlTec).then(resp => {
            const tabela = resp.data

            const lista = tabela.filter(registro => registro.departamento === "Laboratório")

            this.setState({ listTecnico: lista })
        })
    }

    BuscarDados = async () => {
        const bancoZhazSys = await axios(bancoUrl).then(resp => resp.data)

        const estagio = this.state.Filtro.EstagioOS
        const tipo = this.state.Filtro.Tipo

        if (estagio === '' && tipo === '') {

        } else if (estagio !== '' && tipo === '') {
            this.filtrarDados(estagio, tipo, bancoZhazSys)
        } else if (estagio !== '' && tipo !== '') {
            this.filtrarDados(estagio, tipo, bancoZhazSys)
        }
    }

    filtrarDados(estagio, tipo, banco) {
        let listagem = []

        banco.map(registro => {
            if (estagio === registro.Servico && tipo === '') {
                listagem.push({ ...registro })
            } else if (estagio === registro.Servico && tipo === registro.TipoOS) {
                listagem.push({ ...registro })
            }
        })

        return this.setState({ listagem })
    }

    saves(Atividade) {
        axios.post(bancoUrl, Atividade)
            .then(resp => {
                const list = this.getList(resp.data)
                this.setState({ Atividade: initialState.Atividade, list })
            })
    }

    getList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.push(Atividade)
        return list
    }

    //#endregion

    //#region filtro 
    filtro() {
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Estágio: </label>
                            <select className="form-select mt-2"
                                name="EstagioOS" id="data"
                                value={this.state.Filtro.EstagioOS}
                                onChange={e => this.updateCampo(e)}
                            >
                                <option selected disabled value="">Selecione o Estágio</option>
                                <option>Laudo</option>
                                <option value={'Manutenção Concluída'}>Manutenção</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label className='fw-bold'>Tipo: </label>
                            <select className="form-select mt-2"
                                name="Tipo" id="data"
                                value={this.state.Filtro.Tipo}
                                onChange={e => this.updateCampo(e)}
                            >
                                <option selected disabled value="">Selecione o Tipo</option>
                                <option>Avulso</option>
                                {this.renderCont()}
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-end">
                        <button className="btn btn-primary" onClick={this.BuscarDados}>
                            <span className="h4 fw-bold p-2">Buscar</span>
                        </button>
                    </div>
                </div>
            </>
        )
    }

    updateCampo(event) {
        const Filtro = { ...this.state.Filtro }
        Filtro[event.target.name] = event.target.value
        this.setState({ Filtro })
    }

    renderCont() {
        return this.state.listCont.map(Cont => {
            return (
                <option>{Cont.nome}</option>
            )
        })
    }

    //#endregion

    //#region Tabela 
    renderTable(dados) {
        return (
            <table className="table mt-5 table-bordered" id="tabela">
                <thead className="table-dark">
                    <tr>
                        <th className="d-flex justify-content-center">Atividades</th>
                    </tr>
                </thead>
                <tbody style={{ overflow: 'auto', height: 400 }} className="d-block">
                    {dados.length === 0 ?
                        this.renderBuscando()
                        : this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.listagem.map(Atividade => {
            if (Atividade.Estagio === "Em Aberto") {
                return (
                    <tr className={Atividade.Problema === "Sim" ? 'table-danger' : ''} key={(Atividade.id)}>
                        <td className="col-1">{Atividade.id}</td>
                        <td className="col-1">{this.dataNova(Atividade.Data)}</td>
                        <td className="col-1">{Atividade.OS}</td>
                        <td className="col-4">{Atividade.Cliente}</td>
                        <td className="col-4">{Atividade.Equipamento}</td>
                        <td className="col-1">{this.manutencao(Atividade.Servico)}</td>
                        <td className="col-1">
                            <button className="btn btn-success mx-2 mt-2"
                                onClick={() => this.load(Atividade)}
                            >
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </td>
                    </tr>
                )
            }
        })
    }

    renderBuscando() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <img src={SupGif} alt="" style={estilo} />
                <span className="fw-bold mx-2">Aguardando</span>
            </div>
        )
    }

    dataNova(data) {
        const dd = data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1')

        return dd
    }
    //#endregion

    //#region crud
    //limpar
    clear() {
        this.setState({ Atividade: initialState.Atividade, modal: false })
    }

    //field
    updateField(event) {
        const Atividade = { ...this.state.Atividade }
        Atividade[event.target.name] = event.target.value
        this.setState({ Atividade })
    }

    //carregar
    load(Atividade) {
        this.setState({ modal: true, Atividade })
    }

    //salvar e alterar
    save() {
        const Atividade = this.state.Atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${bancoUrl}/${Atividade.id}` : bancoUrl
        axios[method](url, Atividade)
            .then(resp => {
                const listagem = this.getUpdatedList(resp.data)
                this.setState({ Atividade: initialState.Atividade, listagem, modal: false })
            })

        this.mensagemSalvo()
    }

    //gerar nova lista
    getUpdatedList(Atividade, add = true) {
        const listagem = this.state.listagem.filter(a => a.id !== Atividade.id)
        if (add) listagem.unshift(Atividade)
        return listagem
    }
    //deletar

    //verificar
    verificar() {
        const { Tecnico, Problema, DataInicialProblema, ContProblema, dt } = this.state.Atividade
        const data = new Date()


        if (Tecnico === '') {

        } else {

            if(Problema === "Sim"){
                this.state.Atividade.Estagio = "Enviado"
                this.state.Atividade.dt = dt
                this.state.Atividade.DataFinalProblema = data 
                this.state.Atividade.DataInicialProblema = DataInicialProblema 
                this.state.Atividade.ContProblema = ContProblema
                
                this.save()
            }else {
                this.state.Atividade.Estagio = "Enviado"
                this.state.Atividade.dt = data

                this.save()
            }
        }
    }

    //#endregion

    //#region Formulario
    formulario() {
        return (
            <form action="javascript:myFunction(); return false;">
                <div className="row">
                    <div className="col-4">
                        <label className="fw-bold h5 p-1 rounded bg-success text-light">Data: </label>
                        <span className="mx-2 h6 fw-bold">{this.dataNova(this.state.Atividade.Data)}</span>
                    </div>
                    <div className="col-3">
                        <label className="fw-bold h5 p-1 rounded bg-success text-light">OS: </label>
                        <span className="mx-2 h6 fw-bold">{this.state.Atividade.OS}</span>
                    </div>
                    <div className="col-5">
                        <label className="fw-bold h5 p-1 rounded bg-success text-light">NS: </label>
                        <span className="mx-2 h6 fw-bold">{this.state.Atividade.NS}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <label className="fw-bold h5 p-1 rounded bg-success text-light">Cliente: </label>
                        <span className="mx-2 h6 fw-bold">{this.state.Atividade.Cliente}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <label className="fw-bold h5 p-1 rounded bg-success text-light">Equipamento: </label>
                        <span className="mx-2 h6 fw-bold">{this.state.Atividade.Equipamento}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <label className="fw-bold h5 p-1 rounded bg-success text-light">Servico: </label>
                        <span className="mx-2 h6 fw-bold">{this.manutencao(this.state.Atividade.Servico)}</span>
                    </div>
                    <div className="col-6">
                        <label className="fw-bold h5 p-1 rounded bg-success text-light">Estágio: </label>
                        <span className="mx-2 h6 fw-bold">{this.state.Atividade.Estagio}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-9 d-flex align-items-center">
                        <label className='fw-bold h5 p-1 rounded bg-success text-light mt-1'>Tecnico: </label>
                        <select className="form-select mx-2"
                            name="Tecnico"
                            onChange={e => this.updateField(e)}
                            value={this.state.Atividade.Tecnico}
                            required>
                            <option selected disabled value="">Selecione...</option>
                            {this.renderTec()}
                        </select>
                    </div>
                </div>
                <div className="row mt-3 d-flex justify-content-between">
                    <div className="col-6">

                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button className="btn btn-primary fw-bold mx-2" onClick={() => this.verificar()}>Salvar</button>
                        <button className="btn btn-danger fw-bold" style={{ marginRight: 10 }} onClick={() => this.clear()}>Cancelar</button>
                    </div>
                </div>
            </form>
        )
    }

    manutencao(dado) {
        if (dado === 'Manutenção Concluída') {
            return 'Manutenção'
        }
        else {
            return dado
        }
    }

    renderTec() {
        return this.state.listTecnico.map(tec => {
            return (
                <option>{tec.nomeCompleto}</option>
            )
        })
    }

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    }

    //#endregion


    render() {
        return (
            <>
                <div className="row">
                    <div className='col-3 mb-3 d-flex justify-content-start align-items-center'>
                        <i className="fa fa-list-alt fa-4x" style={{ cursor: 'pointer' }} onClick={this.props.mudar}></i>
                        <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                        <span className='fw-bold h4 mt-2'>Fila Montada</span>
                    </div>
                    <div className='col-6 mb-3 d-flex justify-content-center align-items-center'>
                        <span className='fw-bold h2 p-lg-2 text-light rounded bg-success mt-2'>Add Fila</span>
                    </div>
                    <div className="col-3">
                        <div className="alert-box h6 success">Salvo com Sucesso!!!</div>
                    </div>
                </div>
                <div className="row">
                    {this.filtro()}
                </div>
                <div className="row">
                    {this.renderTable(this.state.listagem)}
                </div>

                <div>
                    <ModalFilaTecnica modal={this.state.modal}
                        close={() => this.setState({ modal: false, Atividade: initialState.Atividade })}
                        relatorio={this.formulario()}
                    ></ModalFilaTecnica>
                </div>
            </>
        )
    }
}