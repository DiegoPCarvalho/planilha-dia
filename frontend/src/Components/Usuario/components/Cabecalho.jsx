import React from "react";

export default function Cabecalho(props) {
    return (
        <>
            <td>Id</td>
            <td>{props.ldc ? "Técnico" : "Nome"}</td>
            {props.userAdmin ? (
                <>
                    <td>E-mail</td>
                    <td>Departamento</td>
                </>
            ) : props.ldc ? (
                <>
                    <td>Equipamento</td>
                    <td>Contrato</td>
                </>
            ) : false}
            <td>Ações</td>
        </>
    )

}