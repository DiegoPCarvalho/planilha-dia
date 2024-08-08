import React, { createContext, useState } from 'react';
import { buscarDadoUser } from '../../Components/Usuario/functions/buscaPerfil';
import { Usuario } from '../../Components/Usuario/functions/config';
import { salvar } from '../../Components/Usuario/functions/estrutura';

const PerfilContext = createContext({})

export function PerfilProvider(props) {
    const [mudar, setMudar] = useState(false)
    const [dadosUser, setDadosUser] = useState([])
    const [modalUser, setModalUser] = useState(false)
    const [usuario, setUsuario] = useState(Usuario)
    const [tela, setTela] = useState("user")

    //#region busca
    async function buscarUser(){
        const result = await buscarDadoUser("LoginUsuario")

        return setDadosUser(result)
    }
    //#endregion

    //#region estrutura geral
    function estadoModal(){
        return setModalUser(!modalUser)
    }

    //#endregion
    
    //#region crud
        function load(dado){
            setUsuario(dado)
            estadoModal()
        }

        function save(){
            try{
                salvar(usuario, "LoginUsuario")
                estadoModal()
                atualizarLista(usuario, true, dadosUser)

            }catch(e){
                console.log('Erro: ' + e.message)
            }
        }

        function atualizarLista(Usuario, add = true, banco) {
            const dado = banco.filter(a => a.id !== Usuario.id)
            if (add) dado.push(Usuario)
            setDadosUser(dado)
        }

        function AtualizarCampo(event, modo){
            if(modo === 'user'){
                const User = { ...usuario }
                User[event.target.name] = event.target.value
                setUsuario(User)
            }
        }
    //#endregion
    
    return(
        <PerfilContext.Provider
            value={{
                mudar,
                dadosUser,
                modalUser,
                usuario,
                tela,
                setTela,
                setMudar,
                estadoModal,
                buscarUser,
                load,
                save,
                AtualizarCampo,
            }}
        >
            {props.children}
        </PerfilContext.Provider>
    )
}

export default PerfilContext;