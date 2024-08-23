import React, { createContext, useState } from 'react';
import { buscarDadoUser, buscarDadoBanco } from '../../Components/Usuario/functions/buscaPerfil';
import { Usuario, GNC, LDC } from '../../Components/Usuario/functions/config';
import { salvar, remover } from '../../Components/Usuario/functions/estrutura';

const PerfilContext = createContext({})

export function PerfilProvider(props) {
    const [mudar, setMudar] = useState(false)
    const [dadosUser, setDadosUser] = useState([])
    const [dadosAdmin, setDadosAdmin] = useState([])
    const [modalUser, setModalUser] = useState(false)
    const [usuario, setUsuario] = useState(Usuario)
    const [gnc, setGnc] = useState(GNC)
    const [ldc, setLcd] = useState(LDC)
    const [tela, setTela] = useState("")
    const [depar, setDepar] = useState([])
    const [btnAlter, setBtnAlter] = useState(false)
    const [noticias, setNoticias] = useState(false)
    const [tab, setTab] = useState('tb_admin')
    const [modoTab, setModoTab] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [del, setDel] = useState(false)
    const [tecnico, setTecnico] = useState([])
    const [equipamento, setEquipamento] = useState([])
    const [contrato, setContrato] = useState([])

    //#region busca
    async function buscarUser() {
        const result = await buscarDadoUser("LoginUsuario")

        return setDadosUser(result)
    }

    async function buscarDepar() {
        const result = await buscarDadoBanco("Departamento")

        return setDepar(result)
    }

    async function buscarAdmin(banco) {
        const result = await buscarDadoBanco(banco)

        return setDadosAdmin(result)
    }

    async function buscarLdc(){
        const tec = await buscarDadoBanco("LoginUsuario")
        const equip = await buscarDadoBanco("Equipamento")
        const cont = await buscarDadoBanco("Contrato")

        setTecnico(tec)
        setEquipamento(equip)
        setContrato(cont)
    }
    //#endregion

    //#region estrutura geral
    function estadoModal() {
        return setModalUser(!modalUser)
    }

    function selecionarSet(banco) {
        if (banco === "LoginUsuario") {
            return setDadosAdmin
        }else {
            return setDadosAdmin
        }
    }

    function selecioneLista(lista) {
        if (lista === "LoginUsuario") {
            return dadosAdmin
        }else {
            return dadosAdmin
        }
    }

    function mudarTelaON(tela){
        setTela(tela)
        setTab('tb_admin')
    }
    //#endregion

    //#region crud
    function load(dado) {
        if (tela === "users") {
            setUsuario(dado)
            setBtnAlter(true)
            estadoModal()
        }else {
            setUsuario(dado)
            setGnc(dado)
            setBtnAlter(true)
            setLcd(dado)
            estadoModal()
        }
    }

    function save(modo, banco, dado) {
        try {
            if (modo === "userSingle") {
                salvar(usuario, "LoginUsuario")
                estadoModal()
                atualizarLista(usuario, true, dadosUser, setDadosUser)
            } else {
                try {
                    setModoTab('')
                    salvar(dado, banco)
                    atualizarLista(dado, true, selecioneLista(banco), selecionarSet(banco))
                    notificacao()
                    btnAlter ? setMensagem("Alterado com Sucesso !!!") : setMensagem("Salvo com Sucesso !!!")
                    setModoTab(tela)
                    setTab('tb_admin')
                    vazio()
                    setTimeout(() => {
                        setTela('test')
                        setBtnAlter(false)
                    }, 1000);
                } catch (e) {
                    console.log("Erro:" + e.message)
                }
            }

        } catch (e) {
            console.log('Erro: ' + e.message)
        }
    }

    function deletar(dado, banco) {
        try {
            setDel(true)
            remover(dado, banco)
            atualizarLista(dado, false, selecioneLista(banco), selecionarSet(banco))
            notificacao()
            setMensagem("Deletado com Sucesso !!!")
            setModoTab(tela)
            setTab('tb_admin')
            vazio()
            setTimeout(() => {
                setTela('test')
                setTimeout(() => {
                    setBtnAlter(false)
                    setDel(false)
                }, 1000);
            }, 1000);

        } catch (e) {
            console.log('Erro: ' + e.message)
        }
    }

    function notificacao() {
        setNoticias(true)
        setTimeout(() => {
            setNoticias(false)
        }, 900)
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
        }else if (tela === 'ldc') {
            const LDC = { ...ldc}
            LDC[event.target.name] = event.target.value
            setLcd(LDC)
        }else {
            const GNC = { ...gnc}
            GNC[event.target.name] = event.target.value
            setGnc(GNC)
        }
    }

    function Limpar() {
        setUsuario(Usuario)
        setGnc(GNC)
        setLcd(LDC)
        setBtnAlter(false)
    }

    function vazio(){
        setUsuario(Usuario)
        setGnc(GNC)
        setLcd(LDC)
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
                modoTab,
                mensagem,
                del,
                gnc,
                ldc,
                tecnico,
                equipamento,
                contrato,
                setTela,
                setTab,
                mudarTelaON,
                setMudar,
                estadoModal,
                buscarUser,
                load,
                save,
                AtualizarCampo,
                buscarDepar,
                setBtnAlter,
                Limpar,
                buscarAdmin,
                deletar,
                buscarLdc
            }}
        >
            {props.children}
        </PerfilContext.Provider>
    )
}

export default PerfilContext;