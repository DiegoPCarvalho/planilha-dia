import React from "react";
import Botao from "./Botao";

export default function Lista(props) {
    return props.list.map(registro => {
        return (
            <tr key={registro.id}>
                <td>{registro.id}</td>
                {props.userAdmin ? (
                    <>
                        <td>{registro.nomeCompleto}</td>
                        <td>{registro.email}</td>
                        <td>{registro.departamento}</td>
                    </>
                ) : <td>{registro.nome}</td>}
                <td>
                    <div className="d-flex justify-content-around align-items-center">
                        <Botao classe="btn btn-warning fw-bold" click={props.load}>
                            <i className="fa fa-pencil"></i>
                        </Botao>
                        <Botao classe="btn btn-danger fw-bold" click={props.remove}>
                            <i className="fa fa-trash"></i>
                        </Botao>
                    </div>
                </td>
            </tr>

        )
    })
}