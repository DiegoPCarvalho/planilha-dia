import React from "react";
import Admin from "./admin";
import User from "./user";
import Main from "../Template/Main";
import { PerfilProvider } from "../../data/context/PerfilContext";

export default function HomePerfil() {
    const headerProps = {
        icon: 'user-plus',
        title: 'Perfil Usuario'
    }

    return (
        <PerfilProvider>
            <Main  {...headerProps}>
                {localStorage.AdmGeral === "1" ? <Admin /> : <User />}
            </Main>
        </PerfilProvider>
    )
}