import React, { createContext, useState } from 'react';
import { Fila, bancosFila } from '../../Components/updateAtividade/config';
import { buscarFila } from '../../Components/updateAtividade/busca';
import { iniciar, voltar } from '../../Components/updateAtividade/estrutura';

const AppContext = createContext({})

export function AppProvider(props) {

    const [state, setState] = useState(bancosFila)
    const [novo, setNovo] = useState(0)
    const [modalProblem, setModalProblem] = useState(false)
    const [ObsProblem, setObsProblem] = useState('')
    const [fila, setFila] = useState(Fila)
    
    
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
            setModalProblem(!modalProblem)
        }
    }

    function mudarCampoProblem(event){
        setObsProblem(event)
    }
    

    function mostrar(){
        fila.ProblemObs = ObsProblem
        console.log(fila)
    }
    //#endregion

    return (
        <AppContext.Provider
            value={{
                state,
                novo,
                modalProblem,
                ObsProblem,
                busca,
                add,
                inicio,
                start,
                back,
                problem,
                mudarCampoProblem,
                mostrar
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext