import React from "react";
import Botao from "./Botao";
import UsePerfilData from '../../../data/hook/UsePerfilData';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Lista(props) {

    const { load, deletar } = UsePerfilData() 
    
    function confirmarDelete(registro, banco){
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Excluir?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-success",
                    onClick: () => deletar(registro, banco)
                },
                {
                    label: "Não",
                    className: "btn btn-danger"
                }
            ]
        })
    }

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
                ) : props.ldc ? (
                    <>
                        <td>{registro.tecnico}</td>
                        <td>{registro.equipamento}</td>
                        <td>{registro.contrato}</td>
                    </>
                ) : <td>{registro.nome}</td>}
                <td>
                    <div className="d-flex justify-content-around align-items-center">
                        <Botao classe="btn btn-warning fw-bold" click={() => load(registro)}>
                            <i className="fa fa-pencil"></i>
                        </Botao>
                        <Botao classe="btn btn-danger fw-bold" click={() => confirmarDelete(registro, props.banco)}>
                            <i className="fa fa-trash"></i>
                        </Botao>
                    </div>
                </td>
            </tr>

        )
    })
}