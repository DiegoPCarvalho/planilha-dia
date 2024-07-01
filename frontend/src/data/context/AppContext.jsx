import React, { createContext, useState } from 'react';
import { Atividade, Fila, bancosFila, diferenca } from '../../Components/updateAtividade/config';
import { buscarFila } from '../../Components/updateAtividade/busca';
import { iniciar, voltar, problema, finalizar } from '../../Components/updateAtividade/estrutura';

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
    
    
    async function busca() {
        const banco = await buscarFila()

        setState({ 
            listarFila: banco.dadoLista,
            listIni: banco.dadoIni,
            listFim: banco.dadoFim
        })
    }

    function add() {
        setNovo(1)
    }

    function inicio(){
        setNovo(0)
    }

    

    //#region Fila
    function start(dado){
        iniciar(dado)
        add()
    }

    function back(dado){
        voltar(dado)
        add()
    }

    function problem(dado){
        if(modalProblem === true){
            setModalProblem(!modalProblem)
        }else {
            setFila(dado)
            setObsProblem(dado.ProblemObs)
            setModalProblem(!modalProblem)
        }
    }

    function mudarCampoProblem(event){
        setObsProblem(event)
    }
    

    function sendProblem(){
        fila.ProblemObs = ObsProblem

        if(ObsProblem === undefined){
            
        }else{
            problema(fila)
            add()
            setModalProblem(!modalProblem)
            setObsProblem('')
            setFila(Fila)
        }
    }

    function finish(dado){
        if(modalFinal === true){
            setModalFinal(!modalFinal)
        }else {
            setAtividade(dado)
            setObsFinal(dado.Observacao)
            tempoFinalRompido(dado)
        }
    }

    function sendFinish(){
        atividade.Observacao = ObsFinal

        if(ObsFinal === undefined){

        }else {
            finalizar(atividade)
            add()
            setModalFinal(!modalFinal)
            setObsFinal('')
            setAtividade(Atividade)
            setFila(Fila)
        }
    }

    function tempoFinalRompido(dado){
        const filaData = dado
        const tempo = diferenca(filaData.DataInicialBruto, 'final')

        if(tempo >= 3){
            setModalFinal(!modalFinal)
        }else {
            finalizar(filaData)
            add()
            setObsFinal('')
            setAtividade(Atividade)
            setFila(Fila)
        }
    }

    function mudarCampoFinal(event){
        setObsFinal(event)
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
                tempoFinalRompido
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext