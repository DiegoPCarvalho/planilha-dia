import React, { createContext, useState } from 'react';
import { Atividade, Fila, bancosFila, diferenca, dataCorreta } from '../../Components/updateAtividade/config';
import { buscarFila, buscarGeral } from '../../Components/updateAtividade/busca';
import { iniciar, voltar, problema, finalizar, remover } from '../../Components/updateAtividade/estrutura';

const AppContext = createContext({})

export function AppProvider(props) {

    const [state, setState] = useState(bancosFila)
    const [novo, setNovo] = useState(0)
    const [modalProblem, setModalProblem] = useState(false)
    const [ObsProblem, setObsProblem] = useState('')
    const [modalFinal, setModalFinal] = useState(false)
    const [ObsFinal, setObsFinal] = useState('')
    const [fila, setFila] = useState(Fila)
    const [atividade, setAtividade] = useState(Atividade)
    const [list, setList] = useState([])
    const [mudar, setMudar] = useState('fila')
    const [tab, setTab] = useState('')
    const [carregando, setCarregando] = useState(false)

    function mudarTela(dado){
        setMudar(dado)
        setTab('tabela')
    }

    async function busca() {
        const banco = await buscarFila()

        setState({
            listarFila: banco.dadoLista,
            listIni: banco.dadoIni,
            listFim: banco.dadoFim
        })
    }

    async function buscarGeralTabela(){
        const data = new Date()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()

        const tabela = await buscarGeral(mes, ano)

        return setList(tabela)
    }

    async function buscarRegistroAntigo(mes, ano) {
        const banco = await buscarGeral(mes, ano)
        let dado = []

        banco.map(registro => {
            dado.push({
                id: registro.id,
                Data: dataCorreta(registro.Data),
                OS: registro.OS,
                Cliente: registro.Cliente,
                Equipamento: registro.Equipamento,
                Modelo: registro.Modelo,
                NS: registro.NS,
                Servico: registro.Servico,
            })
        })

        return dado
    }

    function add() {
        setNovo(1)
    }

    function inicio() {
        setNovo(0)
    }

    //#region Fila
    function start(dado) {
        iniciar(dado)
        add()
    }

    function back(dado) {
        voltar(dado)
        add()
    }

    function problem(dado) {
        if (modalProblem === true) {
            setModalProblem(!modalProblem)
        } else {
            setFila(dado)
            setObsProblem(dado.ProblemObs)
            setModalProblem(!modalProblem)
        }
    }

    function mudarCampoProblem(event) {
        setObsProblem(event)
    }


    function sendProblem() {
        fila.ProblemObs = ObsProblem

        if (ObsProblem === undefined) {

        } else {
            problema(fila)
            add()
            setModalProblem(!modalProblem)
            setObsProblem('')
            setFila(Fila)
        }
    }

    function finish(dado) {
        if (modalFinal === true) {
            setModalFinal(!modalFinal)
        } else {
            setAtividade(dado)
            setObsFinal(dado.Observacao)
            tempoFinalRompido(dado)
        }
    }

    function sendFinish() {
        atividade.Observacao = ObsFinal

        if (ObsFinal === undefined) {

        } else {
            finalizar(atividade)
            add()
            setModalFinal(!modalFinal)
            setObsFinal('')
            setAtividade(Atividade)
            setFila(Fila)
        }
    }

    function tempoFinalRompido(dado) {
        const filaData = dado
        const tempo = diferenca(filaData.DataInicialBruto, 'final')

        if (tempo >= 3) {
            setModalFinal(!modalFinal)
        } else {
            finalizar(filaData)
            add()
            setObsFinal('')
            setAtividade(Atividade)
            setFila(Fila)
        }
    }

    function mudarCampoFinal(event) {
        setObsFinal(event)
    }

    //#endregion

    //#region crud
    function deletar(dado){
        remover(dado,"Geral")
        atualizarLista(dado, false, list)
        setCarregando(true)
        mudarTela('form')
        setTab('')
    }

    function atualizarLista(Atividade, add = true, banco) {
        const dado = banco.filter(a => a.id !== Atividade.id)
        if (add) dado.push(Atividade)
        setList(dado)
    } 

    //#endregion
    return (
        <AppContext.Provider
            value={{
                state,
                novo,
                modalProblem,
                ObsProblem,
                ObsFinal,
                modalFinal,
                list,
                mudar,
                tab,
                carregando,
                busca,
                add,
                inicio,
                start,
                back,
                problem,
                mudarCampoProblem,
                sendProblem,
                finish,
                mudarCampoFinal,
                sendFinish,
                tempoFinalRompido,
                buscarRegistroAntigo,
                buscarGeralTabela,
                mudarTela,
                deletar,
                setTab,
                setMudar,
                setCarregando
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext