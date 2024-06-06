import React from "react";
import Url from '../../Url/Url';
import $ from 'jquery';
import axios from "axios";
import OverlayVHL from "../../Overlay/OverlayVHL";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import TabelaAntiga from "../RelatorioAntigoVHL/TabelaAntiga";


const baseUrlServ = Url("Servico");
const baseUrl = Url("VHL");

const initialState = {
    Atividade: {
        id: '',
        Data: '',
        Dia: '',
        Mes: '',
        Ano: '',
        Pedido: '',
        Cliente: '',
        Servico: '',
        Observacao: '',
        Equipamento: [],
        QTDE: '',
        Tecnico: localStorage.usuario
    },
    AtivEquip: {
        Modelo: '',
        NS: '',
        Observacao: ''
    },
    list: [],
    listServ: [],
    Equipamento: [],
    mudar: 'form',
    table_on: false,
    modeDel: false
}

export default class AtividadeVHL extends React.Component {

    state = { ...initialState }

    //#region montagem
    componentDidMount() {
        this.buscar()
        this.buscarTable()
    }

    buscarMesAno() {
        const data = new Date()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()

        return this.setState({ mes, ano })
    }

    buscar() {
        axios(baseUrlServ).then(resp => {
            const tabela = resp.data
            let dado = []

            tabela.map(registro => {
                if ((registro.nome !== "Manutenção Concluída") && (registro.nome !== "Chamado On-Site")
                    && (registro.nome !== "Suporte Remoto") && (registro.nome !== "Laudo") && (registro.nome !== "Revisão de Manutenção")
                    && (registro.nome !== "Confecção de Cabos") && (registro.nome !== "Limpeza") && (registro.nome !== "Revisão de Reprovado")
                    && (registro.nome !== "Recuperação de Placa")) {
                    dado.push({ ...registro })
                }
            })

            this.setState({ listServ: dado })
        })

    }

    buscarTable() {
        axios(baseUrl).then(resp => {
            const tabela = resp.data
            let list = []

            const data = new Date()
            const mes = data.getMonth() + 1
            const ano = data.getFullYear()

            tabela.map(registro => {
                if (registro.Mes === mes && registro.Ano === ano) {
                    list.push({ ...registro })
                }
            })

            return this.setState({ list })
        })
    }

    componentDidUpdate() {
        this.pesquisar()
    }

    pesquisar() {
        $('#tabela').DataTable({
            language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
        });
    }
    //#endregion

    //#region CRUD
    updateField(event, modo) {
        if (modo === true) {
            const AtivEquip = { ...this.state.AtivEquip }
            AtivEquip[event.target.name] = event.target.value
            this.setState({ AtivEquip })
        } else {
            const Atividade = { ...this.state.Atividade }
            Atividade[event.target.name] = event.target.value
            this.setState({ Atividade })
        }
    }// atualizar o campo

    clear() {
        if (this.state.mudar === 'form' && this.state.table_on === false) {
            this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [] })
        }
        if (this.state.table_on === true) {
            this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], mudar: 'table', table_on: false })
        }
    } //limpar

    verificar() {
        const ativ = this.state.Atividade
        const equip = this.state.Equipamento
        const Atividade = {}

        if (ativ.Pedido === '' || ativ.Equipamento === '' || ativ.QTDE === '' || ativ.Cliente === '') {

        } else {
            if (ativ.Data.length === 0) {

                const dt = new Date()

                this.state.Atividade.Data = dt
                this.state.Atividade.Dia = dt.getDate()
                this.state.Atividade.Mes = dt.getMonth() + 1
                this.state.Atividade.Ano = dt.getFullYear()


                Atividade.id = ativ.id
                Atividade.Data = this.state.Atividade.Data
                Atividade.Dia = this.state.Atividade.Dia
                Atividade.Mes = this.state.Atividade.Mes
                Atividade.Ano = this.state.Atividade.Ano
                Atividade.Pedido = ativ.Pedido
                Atividade.Cliente = ativ.Cliente
                Atividade.Servico = ativ.Servico
                Atividade.Observacao = ativ.Observacao
                Atividade.QTDE = ativ.QTDE
                Atividade.Tecnico = ativ.Tecnico
                Atividade.Equipamento = equip

                this.save(Atividade)

            } else {

                const dt = new Date(ativ.Data)

                this.state.Atividade.Dia = dt.getDate()
                this.state.Atividade.Mes = dt.getMonth() + 1
                this.state.Atividade.Ano = dt.getFullYear()

                Atividade.id = ativ.id
                Atividade.Data = ativ.Data
                Atividade.Dia = this.state.Atividade.Dia
                Atividade.Mes = this.state.Atividade.Mes
                Atividade.Ano = this.state.Atividade.Ano
                Atividade.Pedido = ativ.Pedido
                Atividade.Cliente = ativ.Cliente
                Atividade.Servico = ativ.Servico
                Atividade.Observacao = ativ.Observacao
                Atividade.QTDE = ativ.QTDE
                Atividade.Tecnico = ativ.Tecnico
                Atividade.Equipamento = equip

                this.save(Atividade)
            }
        }
    }

    save(dados) {
        if (this.state.mudar === 'form' && this.state.table_on === false) {
            const Atividade = dados
            const method = Atividade.id ? 'put' : 'post'
            const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
            axios[method](url, Atividade)
                .then(resp => {
                    const list = this.getUpdatedList(resp.data)
                    this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], list })
                })

            this.mensagemSalvo()
        }
        if (this.state.table_on === true) {
            const Atividade = dados
            const method = Atividade.id ? 'put' : 'post'
            const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
            axios[method](url, Atividade)
                .then(resp => {
                    const list = this.getUpdatedList(resp.data)
                    this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], list, mudar: 'table', table_on: false })
                })

            this.mensagemSalvo()
        }
    } //salvar e alterar

    remove(Atividade) {
        axios.delete(`${baseUrl}/${Atividade.id}`)
            .then(resp => {
                this.setState({ mudar: 'form', modeDel: true })
                const list = this.getUpdatedList(Atividade, false)
                return this.setState({ list })
            })
    } // deletar

    getUpdatedList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.push(Atividade)
        return list
    } // atualizar lista


    confirmar(Atividade) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(Atividade)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })
    }// confirmar deletar


    async load(Atividade) {
        await this.setState({ Atividade, mudar: 'form', table_on: true })

        const { Equipamento } = this.state.Atividade
        let dado = []

        Equipamento.map(registro => {
            dado.push({ ...registro })
        })

        return this.setState({ Equipamento: dado })

    }//buscar dados

    //#endregion

    //#region form
    formulario() {
        return this.state.modeDel === true ?
            this.setState({ mudar: 'table', modeDel: false })
            : (
                <form className="row g-3" action="javascript:myFunction(); return false;">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className='fw-bold'>Data: </label>
                                        <input type="datetime-local" className="form-control"
                                            name="Data" id="data"
                                            value={this.state.Atividade.Data}
                                            onChange={e => this.updateField(e)}

                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className='fw-bold'>Pedido: </label>
                                        <input type="number" className="form-control"
                                            name="Pedido"
                                            value={this.state.Atividade.Pedido}
                                            onChange={(e) => this.updateField(e)}
                                            placeholder="..."
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className='fw-bold'>Cliente: </label>
                                        <input type="text" className="form-control"
                                            name="Cliente" id="Cliente"
                                            value={this.state.Atividade.Cliente}
                                            onChange={e => this.updateField(e)}
                                            placeholder="Digite o Cliente..." required />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-9">
                                    <div className="form-group">
                                        <label className='fw-bold'>Serviço: </label>
                                        <select class="form-select" aria-label="Default select example"
                                            name="Servico" id="Servico"
                                            onChange={e => this.updateField(e)}
                                            value={this.state.Atividade.Servico} required>
                                            <option selected disabled value="">Selecione o Serviço</option>
                                            {this.renderServ()}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>QTDE: </label>
                                        <input type="number" className="form-control"
                                            name="QTDE"
                                            value={this.state.Atividade.QTDE}
                                            onChange={(e) => this.updateField(e)}
                                            placeholder="..."
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className='fw-bold'>Observação:</label>
                                        <textarea rows="5" className="form-control"
                                            name="Observacao"
                                            value={this.state.Atividade.Observacao}
                                            onChange={e => this.updateField(e)}
                                            placeholder="Digite a Sua Observação..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ borderLeft: "3px solid gray" }}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className='fw-bold'>Modelo: </label>
                                        <input type="text" className="form-control"
                                            name="Modelo" id="Modelo"
                                            value={this.state.AtivEquip.Modelo}
                                            onChange={e => this.updateField(e, true)}
                                            placeholder="Digite o modelo..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className='fw-bold'>Número de Serie</label>
                                        <input type="text" className="form-control"
                                            name="NS" id="NS"
                                            value={this.state.AtivEquip.NS}
                                            onChange={e => this.updateField(e, true)}
                                            placeholder="Digite o Numero de Serie..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <div className="form-group">
                                        <label className='fw-bold'>Observação:</label>
                                        <input type="text" className="form-control"
                                            name="Observacao"
                                            value={this.state.AtivEquip.Observacao}
                                            onChange={e => this.updateField(e, true)}
                                            placeholder="Digite a Sua Observação..." />
                                    </div>
                                </div>
                                <div className="col-1 d-flex align-items-end">
                                    <button className="btn btn-success" onClick={() => this.novoEquipamento()}><span className="h5 fw-bold">+</span></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-2">
                                    <table className="table mt-2 table-bordered table-striped">
                                        <thead className="table-dark">
                                            <tr>
                                                <th className="d-flex justify-content-center">Equipamento</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ height: 200, width: '100%' }} className="d-block overflow-auto">
                                            {this.equipamento()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-end">
                        <div className="col-12 col-md-6 d-flex justify-content-end">
                            <button className="btn btn-primary mx-2 fw-bold"
                                onClick={() => this.verificar()}
                            >
                                Salvar
                            </button>

                            <button className="btn btn-danger fw-bold"
                                onClick={() => this.clear()}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>
            )
    }

    equipamento() {
        return this.state.Equipamento.map((Atividade) => {
            return (
                <tr key={Atividade.id}>
                    <td className="col-2">{Atividade.Modelo}</td>
                    <td className="col-2">{Atividade.NS}</td>
                    <td className="col-2">{Atividade.Observacao}</td>
                    <td className="col-1">
                        <button className="btn btn-danger col-12">
                            <i className="fa fa-trash fw-bold" onClick={() => this.apagarEquipamento(Atividade)}></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    async apagarEquipamento(registro) {
        await this.setState({ AtivEquip: registro })

        const AtivEquip = this.state.AtivEquip
        const equip = this.state.Equipamento
        let novo = []

        equip.map(registro => {
            if (registro.id !== AtivEquip.id) {
                novo.push({ ...registro })
            }
        })

        this.setState({ Equipamento: novo })
    }

    novoEquipamento() {
        const Atividade = this.state.AtivEquip
        const Equipamento = this.state.Equipamento

        Equipamento.push({
            id: Atividade.NS,
            Modelo: Atividade.Modelo,
            NS: Atividade.NS,
            Observacao: Atividade.Observacao
        })

        this.setState({ AtivEquip: initialState.AtivEquip })
    }

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    } //msg de salvo

    renderServ() {
        return this.state.listServ.map(Serv => {
            return (
                <option>{Serv.nome}</option>
            )
        })
    }

    //#endregion

    //#region table
    renderTable() {
        return (
            <div>
                <table className="table mt-3 table-bordered table-striped table-hover" id="tabela">
                    <thead className="table-dark">
                        <tr>
                            <th>Index</th>
                            <th>Data</th>
                            <th>Pedido</th>
                            <th>Cliente</th>
                            <th>Serviço</th>
                            <th>Equip.</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    dataNova(data) {
        const dd = data.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1')

        return dd
    }

    renderRows() {
        return this.state.list.map(registro => {
            return (
                <tr key={registro.id}>
                    <td>{registro.id}</td>
                    <td>{registro.Data}</td>
                    <td>{registro.Pedido}</td>
                    <td>{registro.Cliente}</td>
                    <td>{registro.Servico}</td>
                    <td><OverlayVHL
                        relatorio={
                            registro.Equipamento.map(reg => {
                                return (
                                    <p className="fw-bold text-light">Modelo: {reg.Modelo} - NS: {reg.NS} - OBS: {reg.Observacao}</p>
                                )
                            })
                        }
                    /></td>
                    <td className="d-flex justify-content-around p-3">
                        <button className="btn btn-warning mx-2"
                            onClick={() => this.load(registro)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(registro)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    //#endregion

    render() {
        return this.state.mudar === 'table' ? (
            <>
                <div className="row d-flex justify-content-between">
                    <div className="col-3 d-flex justify-content-start align-items-center">
                        <i className="fa fa-address-card fa-4x" style={{ cursor: 'pointer' }} onClick={() => this.setState({Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], mudar: 'form' })}></i>
                        <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                        <span className='fw-bold h4 mt-2'>Formulário</span>
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <span className='fw-bold h4 mt-2'>Reg. Antigo</span>
                        <i className='fa fa-arrow-right mx-3 fa-2x text-danger'></i>
                        <i className="fa fa-database fa-4x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], mudar: 'antigo' })}></i>
                    </div>
                </div>
                <div className="row mt-4">
                    {this.renderTable()}
                </div>
            </>
        ) : this.state.mudar === 'form' ? (
            <>
                <div className="row d-flex justify-content-between">
                    <div className="col-3">
                        <div className="d-flex align-items-center">
                            <i className="fa fa-address-card fa-4x"></i>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="d-flex align-items-center">
                            <div class="success p-3 rounded fw-bold">Salvo com Sucesso!!!</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='d-flex justify-content-end align-items-center'>
                            <span className='fw-bold h5 mt-2'>Tabela</span>
                            <i className='fa fa-arrow-right mx-3 text-danger'></i>
                            <i className="fa fa-table fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], mudar: 'table'})}></i>
                        </div>
                        <div className='d-flex justify-content-end align-items-center'>
                            <span className='fw-bold h5 mt-2'>Reg. Antigo</span>
                            <i className='fa fa-arrow-right mx-3 text-danger'></i>
                            <i className="fa fa-database fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], mudar: 'antigo' })}></i>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    {this.formulario()}
                </div>
            </>
        ) : <TabelaAntiga
            form={() => this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], mudar: 'form' })}
            table={() => this.setState({ Atividade: initialState.Atividade, AtivEquip: initialState.AtivEquip, Equipamento: [], mudar: 'table' })} />
    }
}