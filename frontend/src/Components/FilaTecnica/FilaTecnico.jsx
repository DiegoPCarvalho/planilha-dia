import React from "react";
import axios from "axios";
import Url from '../Url/Url';
import SupGif from '../../Assets/gifs/tabSup.gif';
import CardFilaTecnica from "../Card/CardFIlaTecnica";
import ModalFilaTecnica from "../Modal/ModalFIlaTecnica";
import $ from 'jquery';

const initialState = {
    list: [],
    listTec: [],
    listEnv: [],
    listIni: [],
    listFim: [],
    Busca: {
        Tecnico: ''
    },
    modal: false,
    Atividade: {
        id: '',
        OS: '',
        Data: '',
        DataFinalMovto: '',
        Cliente: '',
        Equipamento: '',
        NS: '',
        TipoOS: '',
        Estagio: '',
        Tecnico: ''
    },
}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

const bancoUrl = Url("FilaTecnica");
const baseUrlTec = Url("LoginUsuario");
export default class FilaTecnica extends React.Component {

    state = { ...initialState }

    //#region Montagem
    componentDidMount() {
        this.buscarLists()
    }

    //#endregion

    //#region buscar dados
    buscarLists() {
        axios(baseUrlTec).then(resp => {
            const tabela = resp.data

            const lista = tabela.filter(registro => registro.departamento === "Laboratório")

            this.setState({ listTec: lista })
        })

        axios(bancoUrl).then(resp => {
            const tabela = resp.data
            let dado = []

            tabela.map(registro => {
                if (registro.Estagio === "Enviado") {
                    dado.push({ ...registro })
                }
            })

            this.setState({ list: dado })
        })
    }
    //#endregion

    //#region buscar por Tec
    renderTec() {
        return this.state.listTec.map(tec => {
            return (
                <option>{tec.nomeCompleto}</option>
            )
        })
    }

    renderBuscar() {
        return (
            <>
                <div className="col-3 d-flex flex-column justify-content-end">
                    <label className='fw-bold h5 p-1 rounded mt-1'>Tecnico:</label>
                    <select className="form-select mx-2"
                        name="Tecnico"
                        onChange={e => this.updateField(e)}
                        value={this.state.Busca.Tecnico}
                        required>
                        <option selected disabled value="">Selecione...</option>
                        {this.renderTec()}
                    </select>
                </div>
                <div className="col-3 d-flex align-items-end">
                    <button className="mx-2 btn-primary btn fw-bold" onClick={this.buscar}>
                        <span className="h4 fw-bold p-2">Buscar</span>
                    </button>
                </div>
            </>
        )
    }

    //#endregion

    //#region estrutura
    updateField(event) {
        const Busca = { ...this.state.Busca }
        Busca[event.target.name] = event.target.value
        this.setState({ Busca })
    }

    updateCampo(event) {
        const Atividade = { ...this.state.Atividade }
        Atividade[event.target.name] = event.target.value
        this.setState({ Atividade })
    }

    buscar = () => {
        const tecnico = this.state.Busca.Tecnico
        const list = this.state.list
        let dado = []

        list.map(registro => {
            if (registro.Tecnico === tecnico) {
                dado.push({ ...registro })
            }
        })

        return this.setState({
            listEnv: dado
        })

    }
    //#endregion

    //#region grade
    renderGrade() {
        return (
            <>
                <div className="col-4 d-flex flex-column">
                    {this.renderTable(this.state.listEnv, 'TO DO', 'primary')}
                </div>
                <div className="col-4">
                    {this.renderTable(this.state.listIni, 'DOING')}
                </div>
                <div className="col-4">
                    {this.renderTable(this.state.listFim, 'DOES', 'secondary')}
                </div>
            </>
        )
    }

    renderTable(dados, nome, cor) {
        return (
            <table className="table table-bordered" id="tabela">
                <thead className="table-dark">
                    <tr>
                        <th className="d-flex justify-content-center">{nome}</th>
                    </tr>
                </thead>
                <tbody style={{ overflow: 'auto', height: 400 }} className="d-block">
                    {dados.length === 0 ?
                        this.renderBuscando()
                        : this.renderRows(dados, cor)
                    }
                </tbody>
            </table>
        )
    }

    renderRows(dados, cor) {
        return dados.map(registro => {
            return (
                <div className="d-flex justify-content-center">
                    <CardFilaTecnica
                        os={registro.OS}
                        dt={this.dataNova(registro.dt)}
                        Equip={registro.Equipamento}
                        Cliente={registro.Cliente}
                        bg={cor ? cor : 'success'}
                        icone="pencil-square"
                        corBotao="warning fa-2x"
                        abrir={() => this.load(registro)}
                    />
                </div>
            )
        })
    }

    dataNova(data) {
        const dd = data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1')

        return dd
    }


    renderBuscando() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <img src={SupGif} alt="" style={estilo} />
                <span className="fw-bold mx-2">Aguardando</span>
            </div>
        )
    }
    //#endregion

    //#region formulario
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
                            onChange={e => this.updateCampo(e)}
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
                        <button className="btn btn-primary fw-bold mx-2" onClick={() => this.save()}>Salvar</button>
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

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    }
    //#endregion

    //#region crud
    clear() {
        this.setState({ Atividade: initialState.Atividade, modal: false })
    }

    load(Atividade) {
        this.setState({ modal: true, Atividade })
    }

    save() {
        const Atividade = this.state.Atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${bancoUrl}/${Atividade.id}` : bancoUrl
        axios[method](url, Atividade)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ Atividade: initialState.Atividade, list, modal: false})
            })
        
        this.espelho()
        this.mensagemSalvo()
    }

    espelho(){
        this.buscarLists()

        setTimeout(() => {
            this.buscar()
        }, 500);
    }

    getUpdatedList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.unshift(Atividade)
        return list
    }

    //#endregion

    render() {
        return (
            <>
                <div className="row">
                    <div className='col-3 mb-3 d-flex justify-content-start align-items-center'>
                        <i className="fa fa-cart-plus fa-4x" style={{ cursor: 'pointer' }} onClick={this.props.mudar}></i>
                        <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                        <span className='fw-bold h4 mt-2'>Add Fila</span>
                    </div>
                    <div className='col-6 mb-3 d-flex justify-content-center align-items-center'>
                        <span className='fw-bold h2 p-lg-2 text-light rounded bg-success mt-2'>Fila Montada</span>
                    </div>
                    <div className="col-3">
                        <div className="alert-box h6 success">Salvo com Sucesso!!!</div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mb-3">
                    {this.renderBuscar()}
                </div>

                <div className="row mt-3">
                    {this.renderGrade()}
                </div>

                <div>
                    <ModalFilaTecnica modal={this.state.modal}
                        close={() => this.setState({ modal: false, Atividade: initialState.Atividade })}
                        relatorio={this.formulario()}
                    />
                </div>
            </>
        )
    }
}