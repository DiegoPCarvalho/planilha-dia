import React from "react";

export default function Cabecalho(props){
    return props.userAdmin ? (
            <>
                <td>Id</td>
                <td>Nome</td>
                <td>E-mail</td>
                <td>Departamento</td>
                <td>Ações</td>
            </>
        ) : (
            <>
                <td>Id</td>
                <td>Nome</td>
                <td>Ações</td>
            </>
        ) 
    
}