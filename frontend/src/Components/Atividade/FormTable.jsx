import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';
import SupGif from '../../Assets/gifs/tabSup.gif';
import CardFilaTecnica from "../Card/CardFIlaTecnica";
import CardForm from '../Card/CardForm';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Cronometro from './Cronometro/index-Cronos';

import $ from 'jquery';

import TabelaRegistroAntigo from './TabRegistroAntigo';
import ModalToDo from '../Modal/ModalToDo';
import ModalProblem from '../Modal/ModalProblem';
import moment from 'moment';


const baseUrl = Url("Geral");
const baseUrlEquip = Url("Equipamento");
const baseUrlCont = Url("Contrato");
const baseUrlServ = Url("Servico");
const baseUrlBanco = Url("Banco");
const bancoUrl = Url("FilaTecnica");

//componente class
const initialState = {
    Atividade: {
        Data: '',
        Dia: '',
        Mes: '',
        Ano: '',
        OS: '',
        Cliente: '',
        Equipamento: '',
        Modelo: '',
        NS: '',
        Servico: '',
        Placa: '',
        Classificacao: '',
        Contrato: '',
        Observacao: '',
        ProblemObs: '',
        Status: '',
        Estagio: '',
        DataInicialBruto: '',
        DataFinalBruto: '',
        TempoLiquido: '',
        Tecnico: localStorage.usuario
    },
    Fila: {
        id: '',
        OS: '',
        Data: '',
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
    list: [],
    listarFila: [],
    listEquip: [],
    listServ: [],
    listCont: [],
    ultimaOS: 0,
    listarCosmos: [],
    listarBanco: [],
    listIni: [],
    listProblem: [],
    listFim: [],
    ano: 0,
    mes: 0,
    dia: 0,
    mudar: 'fila',
    table_on: false,
    mode: false,
    modalToDo: false,
    modalProblem: false,
    data: ''
}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

export default class FormTable extends React.Component {

    state = { ...initialState }

    //#region montagem comp.
    componentDidMount() {
        this.retornoTabela()
        this.buscar()
        this.retornoMesAno()
        this.buscarInicioEfim()

        if (localStorage.departamento == 'Limpeza Lab') {
            return this.setState({ mudar: 'form' })
        }

        const data = new Date()

        this.setState({ data })

    }

    componentDidUpdate() {
        this.pagination()
    }

    pagination() {
        $('#tabela').DataTable({
            language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
        });
    }
    //#endregion

    //#region buscar
    retornoTabela() {
        axios(baseUrl).then(resp => {
            const tabela = resp.data
            let dadoNovo = []

            tabela.map(dado => {
                if ((localStorage.usuario === dado.Tecnico) && (this.state.ano === dado.Ano) && (this.state.mes === dado.Mes)) {
                    dadoNovo.push(
                        { ...dado }
                    )
                }
            })

            return this.setState({ list: dadoNovo })
        })

    }

    retornoMesAno() {
        const data = new Date()

        const mes = data.getMonth() + 1
        const ano = data.getFullYear()
        const dia = data.getDate()

        return this.setState({
            ano,
            mes,
            dia
        })
    }

    buscar() {
        axios(baseUrlEquip).then(resp => {
            this.setState({ listEquip: resp.data })
        })

        axios(baseUrlServ).then(resp => {
            this.setState({ listServ: resp.data })
        })

        axios(baseUrlCont).then(resp => {
            this.setState({ listCont: resp.data })
        })

        axios(baseUrlBanco).then(resp => {
            this.setState({ listarBanco: resp.data })
        })

        setTimeout(() => {
            this.buscarCosmos()
        }, 1000)
    }

    buscarCosmos() {

        let dado = []
        let bcl = this.state.listarBanco

        for (let i = 0; i < bcl.length; i++) {
            dado.push(bcl[i].nome)
        }

        const url = `http://${dado[0]}`

        axios(url).then(resp => {
            this.setState({ listarCosmos: resp.data })
        })
    }

    buscarInicioEfim() {
        axios(baseUrl).then(resp => {
            const tabela = resp.data
            let dado = []

            tabela.map(registro => {
                if ((localStorage.usuario === registro.Tecnico) && (this.state.ano === registro.Ano) && (this.state.mes === registro.Mes) && (this.state.dia === registro.Dia) && (registro.Estagio === 'Finalizado')) {
                    dado.push({ ...registro })
                }
            })

            this.setState({ listFim: dado })
        })

        axios(bancoUrl).then(resp => {
            const tabela = resp.data
            let dado = []

            tabela.map(registro => {
                if ((registro.Estagio === "Iniciado") && (localStorage.usuario === registro.Tecnico)) {
                    dado.push({ ...registro })
                }
            })

            this.setState({ listIni: dado })
        })
        axios(bancoUrl).then(resp => {
            const tabela = resp.data
            let dado = []

            tabela.map(registro => {
                if ((registro.Estagio === "Enviado") && (localStorage.usuario === registro.Tecnico)) {
                    dado.push({ ...registro })
                }
            })

            this.setState({ listarFila: dado })
        })
    }

    //#endregion

    //#region CRUD

    clear() {
        if (this.state.mudar === 'form' && this.state.table_on === false) {
            this.setState({ Atividade: initialState.Atividade, table_on: false })
        }
        if (this.state.table_on === true) {
            this.setState({ Atividade: initialState.Atividade, mudar: 'table', table_on: false })
        }
    } //limpar

    updateField(event) {
        const Atividade = { ...this.state.Atividade }
        Atividade[event.target.name] = event.target.value
        this.setState({ Atividade })
    }// atualizar o campo

    mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    } //msg de salvo

    save() {
        if (this.state.mudar === 'form' && this.state.table_on === false) {
            const Atividade = this.state.Atividade
            const method = Atividade.id ? 'put' : 'post'
            const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
            axios[method](url, Atividade)
                .then(resp => {
                    const list = this.getUpdatedList(resp.data)
                    this.setState({ Atividade: initialState.Atividade, list, table_on: false })
                })

            this.mensagemSalvo()
        }
        if (this.state.table_on === true) {
            const Atividade = this.state.Atividade
            const method = Atividade.id ? 'put' : 'post'
            const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
            axios[method](url, Atividade)
                .then(resp => {
                    const list = this.getUpdatedList(resp.data)
                    this.setState({ Atividade: initialState.Atividade, list, mudar: 'table', table_on: false })
                })

            this.mensagemSalvo()
        }
    } //salvar e alterar

    verificar() {
        let ativ = this.state.Atividade

        if ((ativ.OS === '') || (ativ.Cliente === '') || (ativ.Equipamento === '') || (ativ.Modelo === '') || (ativ.Servico === '') || (ativ.Contrato === '')) {

        } else {
            if (ativ.Data.length === 0) {

                const dt = new Date()


                this.state.Atividade.Data = dt
                this.state.Atividade.Dia = dt.getDate()
                this.state.Atividade.Mes = dt.getMonth() + 1
                this.state.Atividade.Ano = dt.getFullYear()

                this.save()
                localStorage.UltimaOS = ativ.OS

            } else {
                const dt = new Date(ativ.Data)

                this.state.Atividade.Dia = dt.getDate()
                this.state.Atividade.Mes = dt.getMonth() + 1
                this.state.Atividade.Ano = dt.getFullYear()

                this.save()
                localStorage.UltimaOS = ativ.OS
            }
        }
    } // verificar

    remove(Atividade) {
        axios.delete(`${baseUrl}/${Atividade.id}`)
            .then(resp => {
                this.setState({ mudar: 'form', mode: true })
                const list = this.getUpdatedList(Atividade, false)
                return this.setState({ list })
            })
    } // deletar

    getUpdatedList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.push(Atividade)
        return list
    } // atualizar lista

    load(Atividade) {
        this.setState({ Atividade, mudar: 'form', table_on: true })
    }//buscar dados

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

    //#endregion

    //#region FORM

    formulario() {
        if (this.state.mode === true) {
            this.setState({ mudar: 'table', mode: false })
        }
        return (
            <form className="row g-3 mt-3" action="javascript:myFunction(); return false;">
                <div className="form">
                    <div className="row">
                        <div className="col-6 col-md-2">
                            <div className="form-group">
                                <label className='fw-bold'>Data: </label>
                                <input type="datetime-local" className="form-control"
                                    name="Data" id="data"
                                    value={this.state.Atividade.Data}
                                    onChange={e => this.updateField(e)}

                                />
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="form-group">
                                <label className='fw-bold'>OS: </label>
                                <input type="text" className="form-control"
                                    name="OS" id="OS"
                                    value={this.state.Atividade.OS}
                                    onChange={(e) => this.updateField(e)}
                                    onKeyDown={(e) => this.funcaoTeste(e)}
                                    placeholder="Digite a OS..."
                                    required />
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="form-group">
                                <label className='fw-bold'>Cliente: </label>
                                <input type="text" className="form-control"
                                    name="Cliente" id="Cliente"
                                    value={this.state.Atividade.Cliente}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Cliente..." required />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group">
                                <label className='fw-bold'>Equipamento: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Equipamento" id="Equipamento"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Equipamento}
                                    required
                                >
                                    <option selected disabled value="">Selecione o Equipamento</option>
                                    {this.renderEquip()}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Modelo: </label>
                                <input type="text" className="form-control"
                                    name="Modelo" id="Modelo"
                                    value={this.state.Atividade.Modelo}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o modelo..." required />
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Número de Serie</label>
                                <input type="text" className="form-control"
                                    name="NS" id="NS"
                                    value={this.state.Atividade.NS}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Numero de Serie..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2">
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
                        <div className="col-12 col-md-3 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Recuperação de Placa: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Placa"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Placa}>
                                    <option selected>...</option>
                                    <option>Recuperada</option>
                                    <option>Não Recuperada</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Classificação: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Classificacao"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Classificacao}>
                                    <option selected disabled value="">Selecione a Classificação</option>
                                    <option>Desgaste de Uso</option>
                                    <option>Defeito</option>
                                    <option>Uso Indevido</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Contrato: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Contrato" id="Contrato"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Contrato}
                                    required>
                                    <option selected disabled value="">Selecione...</option>
                                    <option>Avulso</option>
                                    {this.renderCont()}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Status: </label>
                                <select class="form-select" aria-label="Default select example"
                                    name="Status"
                                    onChange={e => this.updateField(e)}
                                    value={this.state.Atividade.Status}>
                                    <option selected>Selecione a Status</option>
                                    <option>Pronto</option>
                                    <option>Garantia</option>
                                    <option>Enviar p/Zhaz</option>
                                    <option>Excede - Aguardando Aprovação</option>
                                    <option>Aguardando Aprovação</option>
                                    <option>Reprovado</option>
                                    <option>Revisado</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Observação: </label>
                                <textarea className="form-control"
                                    name="Observacao" rows="5" id="Observacao"
                                    value={this.state.Atividade.Observacao}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite a Sua Observação..." />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div class="alert-box success">Salvo com Sucesso!!!</div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-end">

                            <button className="btn btn-primary mx-2 fw-bold"
                                onClick={e => this.verificar(e)}
                            >
                                Salvar
                            </button>

                            <button className="btn btn-danger fw-bold"
                                onClick={e => this.clear(e)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    funcaoTeste() {
        const os = this.state.Atividade.OS

        if (os.length >= 5) {
            let dado = []
            const tab = this.state.listarCosmos

            for (let i = 0; i < tab.length; i++) {
                if (os == tab[i].OS) {
                    dado.push({
                        user: tab[i].Cliente,
                        serv: tab[i].Servico,
                        equip: tab[i].Equipamento,
                        mod: tab[i].Modelo,
                        tip: tab[i].TipoOS,
                        serial: tab[i].NS
                    })
                }
            }


            if (os.length >= 5) {
                const novaAtividade = {
                    Data: '',
                    Dia: '',
                    Mes: '',
                    Ano: '',
                    OS: os,
                    Cliente: dado[0].user,
                    Equipamento: dado[0].equip,
                    Modelo: dado[0].mod,
                    NS: dado[0].serial,
                    Servico: dado[0].serv,
                    Placa: '',
                    Classificacao: '',
                    Contrato: dado[0].tip,
                    Observacao: '',
                    Status: '',
                    Tecnico: localStorage.usuario
                }
                return this.setState({
                    Atividade: novaAtividade
                })
            }
        }
    } // funcao busca cosmos


    renderEquip() {
        return this.state.listEquip.map(Equip => {
            return (
                <option>{Equip.nome}</option>
            )
        })

    }

    renderServ() {
        return this.state.listServ.map(Serv => {
            return (
                <option>{Serv.nome}</option>
            )
        })
    }

    renderCont() {
        return this.state.listCont.map(Cont => {
            return (
                <option>{Cont.nome}</option>
            )
        })
    }

    //#endregion

    //#region Table
    renderTable() {
        return (
            <div>
                <table className="table mt-3 table-bordered table-striped table-hover" id="tabela">
                    <thead className="table-dark">
                        <tr>
                            <th>Index</th>
                            <th>Data</th>
                            <th>OS</th>
                            <th>Cliente</th>
                            <th>Equipamento</th>
                            <th>Modelo</th>
                            <th>NS</th>
                            <th>Serviço</th>
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
        return this.state.list.map(Atividade => {
            return (
                <tr key={(Atividade.id)}>
                    <td>{Atividade.id}</td>
                    <td>{this.dataNova(Atividade.Data)}</td>
                    <td>{Atividade.OS}</td>
                    <td>{Atividade.Cliente}</td>
                    <td>{Atividade.Equipamento}</td>
                    <td>{Atividade.Modelo}</td>
                    <td>{Atividade.NS}</td>
                    <td>{Atividade.Servico}</td>
                    <td className="d-flex justify-content-around p-3">
                        {Atividade.Estagio === "" ? (<>
                            <button className="btn btn-warning mx-2"
                                onClick={() => this.load(Atividade)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger mx-2"
                                onClick={() => this.confirmar(Atividade)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </>
                        ) : (
                            <td className='p-3 fw-bold'>{Atividade.Estagio}</td>
                        )}
                    </td>
                </tr>
            )
        })
    }

    searchData() {
        const valor = this.state.vl

        if (valor.length >= 5) {
            const data = this.state.list
            const retorno = data.filter(obj => obj.OS === valor)

            this.setState({ list: [...retorno] })
        } else if (valor.length === 0) {
            this.retornoTabela()
        }
    }

    //#endregion

    //#region mudarTela
    mudarTela() {
        if (this.state.mudar === 'form') {
            this.setState({ Atividade: initialState.Atividade, mudar: 'table', table_on: false })
        } else if (this.state.mudar === 'fila') {
            this.setState({ Atividade: initialState.Atividade, mudar: 'form' })
        }
    }

    mudarTelaRapido() {
        this.setState({ mudar: 'form' })

        setTimeout(() => {
            this.setState({ mudar: 'fila' })
        }, 1);
    }

    formRender() {
        return (
            <>
                <div className='row d-flex justify-content-between'>
                    {localStorage.departamento === 'Limpeza Lab' ? (
                        <>
                            <div className='col-4 d-flex justify-content-start align-items-center'>
                                <i className="fa fa-address-card fa-4x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'fila' })}></i>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <CardForm nomeTitulo="Ultima OS" icone="steam" dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                            </div>
                            <div className='col-4 d-flex justify-content-start align-items-end flex-column'>
                                <div className='d-flex align-items-center'>
                                    <span className='fw-bold h5 mt-2'>Tabela</span>
                                    <i className='fa fa-arrow-right mx-3  text-danger'></i>
                                    <i className="fa fa-table fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.mudarTela()}></i>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='fw-bold h5 mt-2'>Reg. Antigo</span>
                                    <i className='fa fa-arrow-right mx-3  text-danger'></i>
                                    <i className="fa fa-database fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'tableAntiga', Atividade: initialState.Atividade, cont: 1 })}></i>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='col-4 d-flex justify-content-start align-items-center'>
                                <i className="fa fa-list-alt fa-4x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'fila' })}></i>
                                <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                                <span className='fw-bold h4 mt-2'>Fila</span>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <CardForm nomeTitulo="Ultima OS" icone="steam" dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                            </div>
                            <div className='col-4 d-flex justify-content-start align-items-end flex-column'>
                                <div className='d-flex align-items-center'>
                                    <span className='fw-bold h5 mt-2'>Tabela</span>
                                    <i className='fa fa-arrow-right mx-3  text-danger'></i>
                                    <i className="fa fa-table fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.mudarTela()}></i>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='fw-bold h5 mt-2'>Reg. Antigo</span>
                                    <i className='fa fa-arrow-right mx-3  text-danger'></i>
                                    <i className="fa fa-database fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'tableAntiga', Atividade: initialState.Atividade, cont: 1 })}></i>
                                </div>
                            </div>
                        </>
                    )}

                </div>
                <div className="row">
                    <div className='col-12'>
                        {this.formulario()}
                    </div>
                </div>
            </>
        )
    }

    tableRender() {
        return (
            <div>
                <div className='row d-flex justify-content-between align-items-center'>
                    {localStorage.departamento === 'Limpeza Lab' ? (
                        <div className='mb-3 col-3 d-flex justify-content-start align-items-center'>
                            <i className="mt-3 fa fa-address-card fa-4x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'form' })}></i>
                            <i className='fa fa-arrow-left mx-3 mt-3 fa-2x text-danger'></i>
                            <span className='fw-bold h4 mt-4'>Formulário</span>
                        </div>
                    ) : (
                        <div className="col-3 d-flex justify-content-end align-items-start flex-column">
                            <div className='d-flex align-items-center'>
                                <i className="fa fa-list-alt fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.mudarTelaRapido()}></i>
                                <i className='fa fa-arrow-left mx-3  text-danger'></i>
                                <span className='fw-bold h5 mt-2'>Fila</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <i className="fa fa-address-card fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'form' })}></i>
                                <i className='fa fa-arrow-left mx-3  text-danger'></i>
                                <span className='fw-bold h5 mt-2'>Formulário</span>
                            </div>
                        </div>
                    )}
                    <div className='col-6 d-flex justify-content-end align-items-center'>
                        <span className='fw-bold h4 mt-2'>Registro Antigo</span>
                        <i className='fa fa-arrow-right mx-3 fa-2x text-danger'></i>
                        <i className="fa fa-database fa-3x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'tableAntiga' })}></i>
                    </div>
                </div>
                <div className="mt-5">
                    {this.renderTable()}
                </div>
            </div>
        )
    }

    filaRender() {
        return (
            <>
                <div className='row d-flex justify-content-between'>
                    <div className='col-3 mb-3 d-flex justify-content-start align-items-center'>
                        <i className="fa fa-list-alt fa-4x"></i>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-end">
                        <i className="fa fa-retweet fa-3x btn btn-success" style={{ cursor: 'pointer' }} onClick={() => this.buscarInicioEfim()} />
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-end flex-column">
                        <div className='d-flex align-items-center'>
                            <span className='fw-bold h6 mt-2'>Formulário</span>
                            <i className='fa fa-arrow-right mx-3  text-danger'></i>
                            <i className="fa fa-address-card fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.mudarTela()}></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span className='fw-bold h6 mt-2'>Tabela</span>
                            <i className='fa fa-arrow-right mx-3  text-danger'></i>
                            <i className="fa fa-table fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'table', Atividade: initialState.Atividade, cont: 1 })}></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span className='fw-bold h6 mt-2'>Registro Antigo</span>
                            <i className='fa fa-arrow-right mx-3  text-danger'></i>
                            <i className="fa fa-database fa-2x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'tableAntiga', Atividade: initialState.Atividade, cont: 1 })}></i>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.renderGrade()}
                </div>
                <div>
                    <ModalToDo modal={this.state.modalToDo} close={() => this.setState({ modalToDo: false })} relatorio={this.formModal("Finalizado")} />
                </div>
                <div>
                    <ModalProblem modal={this.state.modalProblem} close={() => this.setState({ modalProblem: false })}
                        nome={'Problema'} Relatorio={this.formModal("Problema")} />
                </div>
            </>
        )
    }

    //#endregion

    //#region Fila Tenica

    //#region estrutura
    async iniciar(registro) {
        await this.setState({ Fila: registro })
        const data = new Date()
        const Fila = this.state.Fila


        this.state.Fila.Data = data
        this.state.Fila.dt = data
        this.state.Fila.DataInicialBruto = Fila.Problema === "Não" ? data : Fila.DataInicialBruto
        this.state.Fila.Estagio = "Iniciado"

        this.salvar()
        this.buscaSimples('Iniciado')
    }

    problem(registro) {
        const data = new Date()
        const {DataInicialProblema, ContProblema } = registro
                
        this.state.Fila.Estagio = "Em Aberto"
        this.state.Fila.Problema = "Sim"
        this.state.Fila.ContProblema = ContProblema + 1
        this.state.Fila.DataInicialProblema = DataInicialProblema !== '' ? DataInicialProblema : data

        this.salvar()
        this.buscaSimples('Iniciado')
        this.setState({ modalProblem: false, Fila: initialState.Fila })
    }

    verificarProblem() {
        const Fila = this.state.Fila

        if (Fila.ProblemObs === '') {

        } else {
            // console.log(Fila)
            this.problem(Fila)
        }
    }

    AtualizarCampo(event) {
        const Fila = { ...this.state.Fila }
        Fila[event.target.name] = event.target.value
        this.setState({ Fila })
    }

    async modalPro(registro) {
        await this.setState({ modalProblem: true, Fila: registro })
    }

    async voltar(registro) {
        await this.setState({ Fila: registro })
        const tempo = this.diferenca(this.state.Fila.DataInicialBruto)

        if (tempo >= 3) {

        } else {
            this.state.Fila.Estagio = "Enviado"

            this.salvar()
            this.buscaSimples('Iniciado')
        }

    }

    buscaSimples(modo) {
        if (modo === 'Iniciado') {
            axios(baseUrl).then(resp => {
                const tabela = resp.data
                let dado = []

                tabela.map(registro => {
                    if ((localStorage.usuario === registro.Tecnico) && (this.state.ano === registro.Ano) && (this.state.mes === registro.Mes) && (this.state.dia === registro.Dia) && (registro.Estagio === 'Finalizado')) {
                        dado.push({ ...registro })
                    }
                })

                this.setState({ listFim: dado })
            })

            axios(bancoUrl).then(resp => {
                const tabela = resp.data
                let dado = []

                tabela.map(registro => {
                    if ((registro.Estagio === "Iniciado") && (localStorage.usuario === registro.Tecnico)) {
                        dado.push({ ...registro })
                    }
                })

                this.setState({ listIni: dado })
            })
            axios(bancoUrl).then(resp => {
                const tabela = resp.data
                let dado = []

                tabela.map(registro => {
                    if ((registro.Estagio === "Enviado") && (localStorage.usuario === registro.Tecnico)) {
                        dado.push({ ...registro })
                    }
                })

                this.setState({ listarFila: dado })
            })
        } else if (modo === "Finalizado") {
            axios(bancoUrl).then(resp => {
                const tabela = resp.data
                let dado = []

                tabela.map(registro => {
                    if ((registro.Estagio === "Enviado") && (localStorage.usuario === registro.Tecnico)) {
                        dado.push({ ...registro })
                    }
                })

                this.setState({ listarFila: dado })
            })

            axios(bancoUrl).then(resp => {
                const tabela = resp.data
                let dado = []

                tabela.map(registro => {
                    if ((registro.Estagio === "Iniciado") && (localStorage.usuario === registro.Tecnico)) {
                        dado.push({ ...registro })
                    }
                })

                this.setState({ listIni: dado })
            })

            axios(baseUrl).then(resp => {
                const tabela = resp.data
                let dado = []

                tabela.map(registro => {
                    if ((localStorage.usuario === registro.Tecnico) && (this.state.ano === registro.Ano) && (this.state.mes === registro.Mes) && (this.state.dia === registro.Dia) && (registro.Estagio === 'Finalizado')) {
                        dado.push({ ...registro })
                    }
                })

                this.setState({ listFim: dado })
            })
        }
    }

    deletar(Fila) {
        axios.delete(`${bancoUrl}/${Fila.id}`).then(resp => {
            this.setState({ Fila: initialState.Fila })
        })
    }

    salvar() {
        const Fila = this.state.Fila
        const method = Fila.id ? 'put' : 'post'
        const url = Fila.id ? `${bancoUrl}/${Fila.id}` : bancoUrl
        axios[method](url, Fila)
            .then(resp => {
                this.setState({ Fila: initialState.Fila })
            })
    }

    atualizarLista(Fila, banco, add = true) {
        const listarFila = banco.filter(a => a.id !== Fila.id)
        if (add) listarFila.unshift(Fila)
        return listarFila
    }

    finalizar(registro) {
        const data = new Date()
        const Fila = registro

        let horaTemp = document.getElementById(`hora ${Fila.id}`).innerText;
        let minutoTemp = document.getElementById(`minuto ${Fila.id}`).innerText;
        let segundoTemp = document.getElementById(`segundo ${Fila.id}`).innerText;

        const tempoLiquido = `${horaTemp}:${minutoTemp}:${segundoTemp}`


        const Atividade = {}
        Atividade.Data = data
        Atividade.Dia = data.getDate()
        Atividade.Mes = data.getMonth() + 1
        Atividade.Ano = data.getFullYear()
        Atividade.OS = Fila.OS
        Atividade.Cliente = Fila.Cliente
        Atividade.Equipamento = this.equipamento(Fila.Equipamento)
        Atividade.Modelo = Fila.Equipamento
        Atividade.NS = Fila.NS
        Atividade.Servico = Fila.Servico
        Atividade.Contrato = Fila.TipoOS
        Atividade.Estagio = "Finalizado"
        Atividade.DataInicialBruto = Fila.DataInicialBruto
        Atividade.DataFinalBruto = data
        Atividade.DataInicialProblema = Fila.DataInicialProblema ? Fila.DataInicialProblema : ''
        Atividade.DataFinalProblema = Fila.DataFinalProblema ? Fila.DataFinalProblema : ''
        Atividade.TempoLiquido = tempoLiquido
        Atividade.Tecnico = Fila.Tecnico
        Atividade.Observacao = this.state.Atividade.Observacao
        Atividade.Problema = Fila.Problema ? Fila.Problema : ''
        Atividade.ProblemObs = Fila.ProblemObs
        Atividade.ContProblema = Fila.ContProblema ? Fila.ContProblema : 0


        this.saveFinal(Atividade)
        this.deletar(Fila)
        this.buscaSimples('Finalizado')
    }

    saveFinal(dado) {
        const Atividade = dado
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${baseUrl}/${Atividade.id}` : baseUrl
        axios[method](url, Atividade)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ list, Atividade: initialState.Atividade, modalToDo: false })
            })
    }

    equipamento(equip) {

        if (equip) {
            if (equip.match(/COLETOR DE/)) {
                return "Coletor de Dados"
            } else if (equip.match(/TERMINAL DE CONSULTA/)) {
                return "Terminal de Consulta"
            } else if (equip.match(/IMPRESSORA/)) {
                return "Impressora Térmica"
            } else if (equip.match(/LEITOR DE RFID/) || equip.match(/ANTENA RFID/)) {
                return "Leitor de RFID"
            } else if (equip.match(/LEITOR/)) {
                return "Leitor de Dados"
            } else if (equip.match(/3 POSICOES/)) {
                return "Carregador de 3 Posições"
            } else if (equip.match(/4 POSICOES/)) {
                return "Carregador de 4 Posições"
            } else if (equip.match(/5 POSICOES/)) {
                return "Carregador de 5 Posições"
            } else if (equip.match(/6 POSICOES/)) {
                return "Carregador de 6 Posições"
            } else if (equip.match(/1 POSICOES/)) {
                return "Berço de Comunicação"
            } else if (equip.match(/FONTE/)) {
                return "Fonte de Alimentação"
            } else if (equip.match(/CABO CONFECCIONADO/)) {
                return "Cabo Confeccionado"
            } else if (equip.match(/BATERIA/)) {
                return "Bateria"
            } else if (equip.match(/TECLADO/)) {
                return "Teclado"
            } else if (equip.match(/GATILHO/)) {
                return "Gatilho Móvel"
            } else if (equip.match(/TABLET/) && equip !== "BERCO DE 4 POSICOES PARA TABLET ZEBRA ET51") {
                return "Tablet"
            } else if (equip.match(/CELULAR/)) {
                return "Smartphone"
            } else if (equip === "DOCKING STATION ZEBRA GAMBER JOHNSON HDMI") {
                return "Doca p/Tablet"
            }
            else {
                return equip
            }
        } else {
            return
        }
    }

    formModal(modo) {
        if (modo === 'Finalizado') {
            return (
                <form className="row g-3 mt-3" action="javascript:myFunction(); return false;">
                    <div className="row">
                        <div className="col-12 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Informe o Motivo da Demora: </label>
                                <textarea className="form-control"
                                    name="Observacao" rows="3"
                                    value={this.state.Atividade.Observacao}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Motivo..."
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 d-flex justify-content-end">
                        <div className="col-12 col-md-6 d-flex justify-content-end">

                            <button className="btn btn-primary mx-2 fw-bold"
                                onClick={e => this.verificarCampo(e)}
                            >
                                Finalizar
                            </button>
                        </div>
                    </div>
                </form>
            )
        } else if (modo === 'Problema') {
            return (
                <form className="row g-3" action="javascript:myFunction(); return false;">
                    <div className="row">
                        <div className="col-12 mt-2">
                            <div className="form-group">
                                <label className='fw-bold'>Informe o Problema: </label>
                                <textarea className="form-control"
                                    name="ProblemObs" rows="3"
                                    value={this.state.Fila.ProblemObs}
                                    onChange={e => this.AtualizarCampo(e)}
                                    placeholder="Digite o Motivo..."
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 d-flex justify-content-end">
                        <div className="col-12 col-md-6 d-flex justify-content-end">

                            <button className="btn btn-danger mx-2 fw-bold"
                                onClick={() => this.verificarProblem()}
                            >
                                Problema
                            </button>
                        </div>
                    </div>
                </form>
            )
        }
    }

    verificarCampo() {
        const ativ = this.state.Atividade
        const Fila = this.state.Fila

        if (ativ.Observacao === '') {

        } else {
            this.finalizar(Fila)
        }
    }

    async excecao(registro) {
        await this.setState({ Fila: registro })
        const tempo = this.diferenca(this.state.Fila.DataInicialBruto, 'Iniciado')

        const Fila = this.state.Fila

        if (tempo >= 3) {
            this.setState({ modalToDo: true })
        } else {
            this.finalizar(Fila)
        }
    }

    diferenca(data) {
        const d2 = new Date()

        const dif = d2 - new Date(data)
        const diferenca = dif / (1000 * 60 * 60);

        return +diferenca.toFixed(0)
    }

    //#endregion

    //#region Grade
    renderGrade() {
        return (
            <>
                <div className="col-4 d-flex flex-column">
                    {this.renderTableFila(this.state.listarFila, 'TO DO')}
                </div>
                <div className="col-4">
                    {this.renderTableFila(this.state.listIni, 'DOING')}
                </div>
                <div className="col-4">
                    {this.renderTableFila(this.state.listFim, 'DOES')}
                </div>
            </>
        )
    }

    renderTableFila(dados, nome) {
        return (
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th className="d-flex justify-content-center">{nome}</th>
                    </tr>
                </thead>
                <tbody style={{ overflow: 'auto', height: 400 }} className="d-block">
                    {dados.length === 0 ?
                        this.renderBuscando()
                        : this.renderRowsFila(dados, nome)
                    }
                </tbody>
            </table>
        )
    }

    dataCorreta(data) {
        const dt = new Date(data)

        return dt.toLocaleDateString()
    }

    renderRowsFila(dados, modo) {
        const dt = new Date()

        return dados.map(registro => {
            if (modo === 'TO DO') {
                return (
                    <div className="d-flex justify-content-center">
                        <CardFilaTecnica
                            os={registro.OS}
                            dt={this.dataCorreta(registro.dt)}
                            Equip={registro.Equipamento}
                            Cliente={registro.Cliente}
                            Servico={registro.Servico}
                            bg={registro.Problema === "Não" ? 'primary' : 'danger'}
                            final={registro.Estagio}
                            icone="play-circle"
                            corBotao="success"
                            abrir={() => this.iniciar(registro)}
                        />
                    </div>
                )
            } else if (modo === 'DOING') {
                return (
                    <div className="d-flex justify-content-center">
                        <CardFilaTecnica
                            os={registro.OS}
                            dt={this.dataNova(registro.dt)}
                            Equip={registro.Equipamento}
                            Cliente={registro.Cliente}
                            Servico={registro.Servico}
                            bg={'success'}
                            icone="flag-checkered"
                            corBotao="primary"
                            iniciado
                            icone2="backward"
                            corBotao2="danger"
                            final={registro.Estagio}
                            cronos={
                                <Cronometro
                                    hora={`hora ${registro.id}`}
                                    minuto={`minuto ${registro.id}`}
                                    segundo={`segundo ${registro.id}`} />
                            }
                            abrir={() => this.excecao(registro)}
                            alerta={() => this.modalPro(registro)}
                            voltar={() => this.voltar(registro)}
                        />
                    </div>
                )
            } else if (modo === 'DOES') {
                return (
                    <div className="d-flex justify-content-center">
                        <CardFilaTecnica
                            id={registro.id}
                            os={registro.OS}
                            dt={this.dataNova(registro.Data)}
                            Equip={registro.Equipamento}
                            Cliente={registro.Cliente}
                            Servico={registro.Servico}
                            bg={registro.Problema === "Não" ? 'secondary' : 'danger'}
                            liquido={this.formatarTempoLiq(registro.TempoLiquido)}
                            bruto={this.formatarTempoBto(this.tempo(registro.DataInicialBruto, registro.DataFinalBruto))}
                            finalizado
                        />
                    </div>
                )
            }
        })
    }

    formatarTempoLiq(tempo){
        let novo = tempo.replace(/(\d):(\d):(\d)/, '$1 h : $2 m : $3 s')

        return novo
    }

    formatarTempoBto(tempo){
        let novo = tempo.replace(/(\d*):(\d\d):(\d\d)/, '$1 h : $2 m : $3 s')

        return novo
    }

    tempo(ini, fm) {
        let dtChegada = `${fm}`;
        let dtPartida = `${ini}`;

        let ms = moment(dtChegada, "YYYY-MM-DDTHH:mm:ssZ").diff(moment(dtPartida, "YYYY-MM-DDTHH:mm:ssZ"));
        let d = moment.duration(ms);
        let s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

        return s.match(/NaN/) ? "00:00:00" : s
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

    //#endregion

    //#region render setor
    renderLimpeza() {
        return this.state.mudar === 'form' ?
            this.formRender()
            : this.state.mudar === 'table' ?
                this.tableRender() : <TabelaRegistroAntigo
                    table={() => this.setState({ mudar: 'table' })}
                    form={() => this.setState({ mudar: 'form' })}
                />
    }

    renderLabo() {
        return this.state.mudar === 'fila' ?
            this.filaRender() : this.state.mudar === 'form' ? this.formRender()
                : this.state.mudar === 'table' ?
                    this.tableRender() : <TabelaRegistroAntigo
                        table={() => this.setState({ mudar: 'table' })}
                        fila={() => this.setState({ mudar: 'fila' })}
                        form={() => this.setState({ mudar: 'form' })}
                    />
    }
    //#endregion

    render() {
        return localStorage.departamento === 'Limpeza Lab' ? this.renderLimpeza() : this.renderLabo()
    }
}


