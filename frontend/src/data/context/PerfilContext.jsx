import React, { createContext, useState } from 'react';
import { buscarDadoUser, buscarDadoBanco } from '../../Components/Usuario/functions/buscaPerfil';
import { Usuario } from '../../Components/Usuario/functions/config';
import { salvar } from '../../Components/Usuario/functions/estrutura';

const PerfilContext = createContext({})

export function PerfilProvider(props) {
    const [mudar, setMudar] = useState(false)
    const [dadosUser, setDadosUser] = useState([])
    const [dadosAdmin, setDadosAdmin] = useState([])
    const [modalUser, setModalUser] = useState(false)
    const [usuario, setUsuario] = useState(Usuario)
    const [tela, setTela] = useState("")
    const [depar, setDepar] = useState([])
    const [btnAlter, setBtnAlter] = useState(false)
    const [noticias, setNoticias] = useState(false)
    const [tab, setTab] = useState('tb_admin')
    const [carregarTable, setCarregarTable] = useState(false)
    const [modoTab, setModoTab] = useState('')

    //#region busca
    async function buscarUser() {
        const result = await buscarDadoUser("LoginUsuario")

        return setDadosUser(result)
    }

    async function buscarDepar() {
        const result = await buscarDadoBanco("Departamento")

        return setDepar(result)
    }

    async function buscarAdminUsers() {
        const result = await buscarDadoBanco("LoginUsuario")

        return setDadosAdmin(result)
    }
    //#endregion

    //#region estrutura geral
    function estadoModal() {
        return setModalUser(!modalUser)
    }

    function selecionarSet(banco) {
        if (banco === "LoginUsuario") {
            return setDadosAdmin
        }
    }

    function selecioneLista(lista) {
        if (lista === "LoginUsuario") {
            return dadosAdmin
        }
    }

    function carregando() {
        setCarregarTable(!carregarTable)
    }
    //#endregion

    //#region crud
    function load(dado) {
        if (tela === "users") {
            setUsuario(dado)
            estadoModal()
        }
        else {
            setUsuario(dado)
            estadoModal()
        }
    }

   function save(modo, banco) {
        try {
            if (modo === "userSingle") {
                salvar(usuario, "LoginUsuario")
                estadoModal()
                atualizarLista(usuario, true, dadosUser, setDadosUser)
            } else {
                try {
                    setModoTab('')
                    salvar(usuario, banco)
                    atualizarLista(usuario, true, selecioneLista(banco), selecionarSet(banco))
                    notificacao()
                    Limpar()
                    setModoTab(tela)
                    setTela('test')
                    setTab('tb_admin')                   
                } catch (e) {
                    console.log("Erro:" + e.message)
                }
            }

        } catch (e) {
            console.log('Erro: ' + e.message)
        }
    }

    function notificacao() {
        setNoticias(true)
        setTimeout(() => {
            setNoticias(false)
        }, 1000)
    }

    function atualizarLista(Usuario, add = true, banco, modo) {
        const dado = banco.filter(a => a.id !== Usuario.id)
        if (add) dado.push(Usuario)
        modo(dado)
    }

    function AtualizarCampo(event) {
        if (tela === 'users') {
            const User = { ...usuario }
            User[event.target.name] = event.target.value
            setUsuario(User)
        }
    }

    function Limpar() {
        setUsuario(Usuario)
    }
    //#endregion

    return (
        <PerfilContext.Provider
            value={{
                mudar,
                dadosUser,
                dadosAdmin,
                modalUser,
                usuario,
                tela,
                depar,
                btnAlter,
                noticias,
                tab,
                carregarTable,
                modoTab,
                setTab,
                setTela,
                setMudar,
                estadoModal,
                buscarUser,
                load,
                save,
                AtualizarCampo,
                buscarDepar,
                setBtnAlter,
                Limpar,
                buscarAdminUsers,
                carregando
            }}
        >
            {props.children}
        </PerfilContext.Provider>
    )
}

export default PerfilContext;