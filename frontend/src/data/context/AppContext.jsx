import React, { createContext, useState } from 'react';
import { Atividade, Fila, diferenca, dataCorreta, bancosFormulario } from '../../Components/updateAtividade/config';
import { buscarFila, buscarGeral, BuscarForm, BuscarBanco } from '../../Components/updateAtividade/busca';
import { iniciar, voltar, problema, finalizar, remover, salvar } from '../../Components/updateAtividade/estrutura';
import $ from 'jquery';

const AppContext = createContext({})

export function AppProvider(props) {

    const [listFila, setListFila] = useState([])
    const [listIni, setListIni] = useState([])
    const [listFim, setListFim] = useState([])
    const [modalProblem, setModalProblem] = useState(false)
    const [ObsProblem, setObsProblem] = useState('')
    const [modalFinal, setModalFinal] = useState(false)
    const [ObsFinal, setObsFinal] = useState('')
    const [fila, setFila] = useState(Fila)
    const [atividade, setAtividade] = useState(Atividade)
    const [list, setList] = useState([])
    const [mudar, setMudar] = useState('fila')
    const [tab, setTab] = useState('')
    const [del, setDel] = useState(false)
    const [bancoForm, setBancoForm] = useState(bancosFormulario)
    const [tableOn, setTableOn] = useState(false)
    const [dadoCosmos, setDadoCosmos] = useState([])
    const [carregando, setCarregando] = useState(false)

    //#region busca e Estrutura
    function mudarTela(dado) {
        setMudar(dado)
        setTab('tabela')
        setAtividade(Atividade)
        setTableOn(false)
    }

    async function busca() {
        const banco = await buscarFila()

        setListFila(banco.dadoLista)
        setListIni(banco.dadoIni)
        setListFim(banco.dadoFim)
    }

    async function BuscaFormulario() {
        const banco = await BuscarForm()

        setBancoForm({
            listEquip: banco.listEquip,
            listServ: banco.listServ,
            listCont: banco.listCont
        })
    }

    async function buscarGeralTabela() {
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

    async function buscarDadosCosmos(){
        try{
            setCarregando(true)
            const banco = await BuscarBanco()
    
            setDadoCosmos(banco)
            setCarregando(false)

        }catch(e){
            setCarregando(false)
            console.log("Erro: " + e.message)
        }
    }

    //#endregion

    //#region Fila
    function atualizarDado(Atividade, add = true, banco, modo) {
        if (modo === 'fila') {
            const dado = banco.filter(a => a.id !== Atividade.id)
            if (add) dado.push(Atividade)
            setListFila(dado)
        } else if (modo === 'inicial') {
            const dado = banco.filter(a => a.id !== Atividade.id)
            if (add) dado.push(Atividade)
            setListIni(dado)
        } else {
            const dado = banco.filter(a => a.id !== Atividade.id)
            if (add) dado.push(Atividade)
            setListFim(dado)
        }
    }

    function start(dado) {
        try {
            iniciar(dado)
            atualizarDado(dado, false, listFila, 'fila')
            atualizarDado(dado, true, listIni, 'inicial')
        } catch (e) {
            console.log("Erro: " + e.message)
        }
    }

    function back(dado) {
        try {
            voltar(dado)
            atualizarDado(dado, false, listIni, 'inicial')
            atualizarDado(dado, true, listFila, 'fila')

        } catch (e) {
            console.log("Erro: " + e.message)
        }
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
            try {
                problema(fila)
                atualizarDado(fila, false, listIni, 'inicial')
                atualizarDado(fila, true, listFila, 'fila')
                setModalProblem(!modalProblem)
                setObsProblem('')
                setFila(Fila)
            } catch (e) {
                console.log("Erro: " + e.message)
            }
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
            try {
                finalizar(atividade)
                atualizarDado(atividade, false, listIni, 'inicial')
                atualizarDado(atividade, true, listFim, 'final')
                setModalFinal(!modalFinal)
                setObsFinal('')
                setAtividade(Atividade)
                setFila(Fila)

            } catch (e) {
                console.log("Erro: " + e.message)
            }
        }
    }

    function tempoFinalRompido(dado) {
        const filaData = dado
        const tempo = diferenca(filaData.DataInicialBruto, 'final')

        if (tempo >= 3) {
            setModalFinal(!modalFinal)
        } else {
            try {
                finalizar(filaData)
                atualizarDado(filaData, false, listIni, 'inicial')
                setObsFinal('')
                setAtividade(Atividade)
                setFila(Fila)
                atualizarDado(filaData, true, listFim, 'final')
            } catch (e) {
                console.log("Erro: " + e.message)
            }
        }
    }

    function mudarCampoFinal(event) {
        setObsFinal(event)
    }

    //#endregion

    //#region crud
    function deletar(dado) {
        remover(dado, "Geral")
        atualizarLista(dado, false, list)
        setDel(true)
        mudarTela('form')
        setTab('')
    }

    function limpar() {
        if (tableOn) {
            setTableOn(false)
            mudarTela('table')
        } else {
            setAtividade(Atividade)
        }
    }

    function atualizarLista(Atividade, add = true, banco) {
        const dado = banco.filter(a => a.id !== Atividade.id)
        if (add) dado.push(Atividade)
        setList(dado)
    }

    function MudarCampoAtividade(event) {
        const Atividade = { ...atividade }
        Atividade[event.target.name] = event.target.value
        setAtividade(Atividade)
    }

    function mensagemSalvo() {
        $(document).ready(function () {  // A DIFERENÇA ESTA AQUI, EXECUTA QUANDO O DOCUMENTO ESTA "PRONTO"
            $("div.success").fadeIn(300).delay(1500).fadeOut(400);
        });
    }

    function load(registro) {
        setAtividade(registro)
        setMudar("form")
        setTableOn(true)
    }

    function save() {
        if (tableOn) {
            salvar(atividade, "")
            mensagemSalvo()
            atualizarLista(atividade, true, list)
            mudarTela("table")
        } else {
            salvar(atividade, "")
            mensagemSalvo()
            atualizarLista(atividade, true, list)
            setAtividade(Atividade)
        }
    }

    function verificar() {
        const {
            Data,
            OS,
            Cliente,
            Servico,
            Equipamento,
            Modelo,
            NS,
            Contrato
        } = atividade

        const data = new Date()

        if (OS === "" || Cliente === "" || Servico === "" || Equipamento === "" || Modelo === "" || NS === "" || Contrato === "") {

        } else {
            if (Data === "") {
                atividade.Data = data
                atividade.Dia = data.getDate()
                atividade.Mes = data.getMonth() + 1
                atividade.Ano = data.getFullYear()

                save()
            } else {
                const dt = new Date(Data)
                atividade.Dia = dt.getDate()
                atividade.Mes = dt.getMonth() + 1
                atividade.Ano = dt.getFullYear()

                save()
            }

        }
    }

    //#endregion

    return (
        <AppContext.Provider
            value={{
                listFila,
                listIni,
                listFim,
                modalProblem,
                ObsProblem,
                ObsFinal,
                modalFinal,
                list,
                mudar,
                tab,
                del,
                atividade,
                bancoForm,
                tableOn,
                dadoCosmos,
                carregando,
                busca,
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
                buscarDadosCosmos,
                mudarTela,
                deletar,
                setTab,
                setMudar,
                setDel,
                MudarCampoAtividade,
                limpar,
                BuscaFormulario,
                verificar,
                setAtividade,
                load
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext