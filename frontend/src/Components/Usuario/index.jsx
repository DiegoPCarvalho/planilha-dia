import React, { useEffect } from "react";
import Admin from "./admin";
import User from "./user";
import Main from "../Template/Main";
import UsePerfilData from '../../data/hook/UsePerfilData';

export default function HomePerfil() {

    const { buscarUser } = UsePerfilData()

    const headerProps = {
        icon: 'user-plus',
        title: 'Perfil Usuario'
    }

    useEffect(() => {
        if (localStorage.AdmGeral === "1") {

        } else {

            buscarUser()
        }
    }, [])

    return (
        <Main  {...headerProps}>
            {localStorage.AdmGeral === "1" ? <Admin /> : <User />}
        </Main>
    )
}