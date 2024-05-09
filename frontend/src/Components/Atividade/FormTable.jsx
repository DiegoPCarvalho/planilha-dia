import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';

import CardForm from '../Card/CardForm';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import $ from 'jquery';

import TabelaRegistroAntigo from './TabRegistroAntigo';


const baseUrl = Url("Geral");
const baseUrlEquip = Url("Equipamento");
const baseUrlCont = Url("Contrato");
const baseUrlServ = Url("Servico");
const baseUrlBanco = Url("Banco");

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
        Status: '',
        Tecnico: localStorage.usuario
    },
    list: [],
    list2: [],
    listEquip: [],
    listServ: [],
    listCont: [],
    ultimaOS: 0,
    listarCosmos: [],
    listarBanco: [],
    ano: 0,
    mes: 0,
    mudar: 'fila',
    table_on: false,
}

export default class FormTable extends React.Component {

    state = { ...initialState }

    //#region montagem comp.
    componentDidMount() {
        this.retornoTabela()
        this.buscar()
        this.retornoMesAno()

        if (localStorage.departamento == 'Limpeza Lab') {
            return this.setState({ mudar: 'form' })
        }
    }

    componentDidUpdate() {
        this.pagination()
    }

    pagination() {
        $(document).ready(function () {
            $('#tabela').DataTable({
                language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
            });
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

        return this.setState({
            ano: ano,
            mes: mes
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
                const list = this.getUpdatedList(Atividade, false)
                this.setState({ list })
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
        return (
            <form className="row g-3" action="javascript:myFunction(); return false;">
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

                            <button className="btn btn-primary mx-2"
                                onClick={e => this.verificar(e)}
                            >
                                Salvar
                            </button>

                            <button className="btn btn-danger"
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
                <table className="table mt-3 table-bordered table-striped" id="tabela">
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
                    <td className="d-flex justify-content-around">
                        <button className="btn btn-warning mx-2"
                            onClick={() => this.load(Atividade)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(Atividade)}>
                            <i className="fa fa-trash"></i>
                        </button>

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
        }
    }

    formRender() {
        return (
            <>
                <div className='row d-flex justify-content-between'>
                    <div className='col-1 mb-3 d-flex justify-content-start align-items-center'>
                        <i className="fa fa-table fa-4x" style={{ cursor: 'pointer' }} onClick={() => this.mudarTela()}></i>
                        <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                        <span className='fw-bold h4 mt-2'>Tabela</span>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <CardForm nomeTitulo="Ultima OS" icone="steam" dado={localStorage.UltimaOS} bg="success" tipoTexto="text-light" />
                    </div>
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
                <div className='row d-flex justify-content-between'>
                    <div className='mb-3 col-3 d-flex justify-content-start align-items-center'>
                        <i className="fa fa-address-card fa-4x" style={{ cursor: 'pointer' }} onClick={() => this.setState({ mudar: 'form' })}></i>
                        <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                        <span className='fw-bold h4 mt-2'>Formulário</span>
                    </div>
                    <div className='col-3 d-flex justify-content-end align-items-center'>
                        <button onClick={() => this.setState({ mudar: 'tableAntiga' })} className='btn btn-success p-2 d-flex align-items-center'>
                            <i className='fa-2x fa fa-database'></i>
                            <h4 className='mx-2'><b>Registro Antigo</b></h4>
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    {this.renderTable()}
                </div>
            </div>
        )
    }

    //#endregion

    //#region Fila Tenica
    filaRender() {
        return (
            <>
                <button onClick={() => this.setState({ mudar: 'form' })}>mudar</button>
            </>
        )
    }
    //#endregion

    //#region render setor
    renderLimpeza() {
        return this.state.mudar === 'form' ?
            this.formRender()
            : this.state.mudar === 'table' ?
                this.tableRender() : <TabelaRegistroAntigo mudar={() => this.setState({ mudar: 'table' })} />
    }

    renderLabo() {
        return this.state.mudar === 'fila' ?
            this.filaRender() : this.state.mudar === 'form' ? this.formRender()
                : this.state.mudar === 'table' ?
                    this.tableRender() : <TabelaRegistroAntigo mudar={() => this.setState({ mudar: 'table' })} />
    }
    //#endregion

    render() {
        return localStorage.departamento === 'Limpeza Lab' ? this.renderLimpeza() : this.renderLabo()

    }
}


