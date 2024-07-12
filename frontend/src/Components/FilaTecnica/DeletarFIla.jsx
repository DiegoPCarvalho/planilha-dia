import React from "react";
import axios from "axios";
import Url from '../Url/Url';
import SupGif from '../../Assets/gifs/tabSup.gif';
import carregando from '../../Assets/gifs/carregar.gif';

const initialState = {
    list: [],
    listTec: [],
    Busca: {
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

export default class DeletarFila extends React.Component {

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

        const data = new Date()

        this.setState({ data })
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
                        {/* <option>CAUA BISPO</option> */}
                        {this.renderTec()}
                    </select>
                </div>
                <div className="col-3 d-flex align-items-end">
                    <button className="mx-2 btn-primary btn fw-bold" onClick={() => this.buscar()}>
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


    async buscar() {
        this.setState({ carregando: true })
        const tecnico = this.state.Busca.Tecnico
        await axios(bancoUrl).then(resp => {
            const list = resp.data
            let dado = []

            list.map(registro => {
                if (registro.Tecnico === tecnico) {
                    dado.push({ ...registro })
                }
            })

            return this.setState({
                list: dado,
                carregando: false
            })
        })
    }
    //#endregion

    //#region grade
    renderGrade() {
        return (
            <>
                <div className="col-12 d-flex flex-column">
                    {this.renderTable(this.state.list)}
                </div>
            </>
        )
    }

    renderTable(dados) {
        return (
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th className="d-flex justify-content-center">Atividade</th>
                    </tr>
                </thead>
                <tbody style={{ overflow: 'auto', height: 400 }} className="d-block">
                    {dados.length === 0 ?
                        this.renderBuscando()
                        : this.renderRows(dados)
                    }
                </tbody>
            </table>
        )
    }

    renderRows(dados) {
        return dados.map(Atividade => {
            return (
                <tr className={Atividade.Problema === "Sim" ? 'table-danger' : ''} key={(Atividade.id)}>
                    <td className="col-1">{Atividade.id}</td>
                    <td className="col-1">{this.dataNova(Atividade.dt)}</td>
                    <td className="col-1">{Atividade.OS}</td>
                    <td className="col-4">{Atividade.Cliente}</td>
                    <td className="col-4">{Atividade.Equipamento}</td>
                    <td className="col-1">{this.manutencao(Atividade.Servico)}</td>
                    <td className="col-1">
                        <div>
                            <button className="btn btn-danger"
                                onClick={() => this.remove(Atividade)}
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
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

    manutencao(dado) {
        if (dado === 'Manutenção Concluída') {
            return 'Manutenção'
        }
        else {
            return dado
        }
    }
    //#endregion

    //#region crud
    clear() {
        this.setState({ Atividade: initialState.Atividade, modal: false })
    }

    getUpdatedList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.unshift(Atividade)
        return list
    }

    remove(Atividade) {
        axios.delete(`${bancoUrl}/${Atividade.id}`)
            .then(resp => {
                const list = this.getUpdatedList(Atividade, false)
                return this.setState({ list })
            })
    } // deletar

    //#endregion

    render() {
        return (
            <>
                <div className="row">
                    <div className='col-3 mb-3 d-flex flex-column justify-content-start align-items-start'>
                        <div className="d-flex">
                            <i className="fa fa-cart-plus fa-3x" style={{ cursor: 'pointer' }} onClick={this.props.add}></i>
                            <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                            <span className='fw-bold h5 mt-2'>Add Fila</span>
                        </div>
                        <div className="d-flex">
                            <i className="fa fa-list-alt fa-3x" style={{ cursor: 'pointer' }} onClick={this.props.fila}></i>
                            <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                            <span className='fw-bold h5 mt-2'>Fila Montada</span>
                        </div>
                    </div>
                    <div className='col-6 mb-3 d-flex justify-content-center align-items-center'>
                        <span className='fw-bold h2 p-lg-2 text-light rounded bg-success mt-2'>Deletar Fila</span>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mb-3">
                    {this.renderBuscar()}
                </div>

                {this.state.carregando === true ? (
                    <div className="row d-flex justify-content-center align-items-center mt-5">
                        <div className="col-6 d-flex justify-content-center ">
                            <img src={carregando} style={{ width: 400, height: 400 }} />

                        </div>
                    </div>
                ) : (
                    <div className="row mt-3">
                        {this.renderGrade()}
                    </div >
                )
                }
            </>
        )
    }
}