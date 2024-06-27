import React, { createContext, useState } from 'react';
import { initialState } from '../../Components/updateAtividade/config';
import { buscarFila } from '../../Components/updateAtividade/busca';
import { iniciar } from '../../Components/updateAtividade/estrutura';

const AppContext = createContext({})

export function AppProvider(props) {

    const [nome, setNome] = useState(initialState)
    const [novo, setNovo] = useState(0)
    
    
    async function busca() {
        const banco = await buscarFila()

        setNome({ 
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

    function start(dado){
        iniciar(dado)
        add()
    }

    return (
        <AppContext.Provider
            value={{
                nome,
                novo,
                busca,
                add,
                inicio,
                start
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext