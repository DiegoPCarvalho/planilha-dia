import React from "react";
import UsePerfilData from "../../../data/hook/UsePerfilData";
import Botao from '../components/Botao';

export default function LinhaBotoes(props) {
    const { btnAlter, Limpar, buscarAdminUsers } = UsePerfilData()

    return (
        <div className="col-3 d-flex justify-content-evenly">
            {btnAlter ? (
                <Botao classe="btn btn-warning fw-bold" click={props.salvarAlterar}>
                    Alterar
                </Botao>
            ) :
                (
                    <Botao classe="btn btn-primary fw-bold" click={props.salvarAlterar}>
                        Salvar
                    </Botao>
                )}

            <Botao classe="btn btn-danger fw-bold" click={() => Limpar()}>
                Cancelar
            </Botao>
        </div>
    )
}