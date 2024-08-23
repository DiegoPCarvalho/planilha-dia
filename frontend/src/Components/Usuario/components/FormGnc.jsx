import React from "react";
import LinhaBotoes from "./LinhasBotoes";
import Mensagem from "./Mensagem";
import UsePerfilData from "../../../data/hook/UsePerfilData";
import Entrada from './Entrada';

export default function FormGnc(props) {

    const { AtualizarCampo, save, del, btnAlter, noticias, mensagem, gnc } = UsePerfilData()

    const font = "h4"
    const classeForm = "form-control"

    return (
        <form action="javascript:myFunction(); return false;">
            <div className="row">
                <div className="col-4">
                    <Entrada
                        modelo="input"
                        texto="Nome:"
                        tipo="text"
                        clst={font}
                        classe={classeForm}
                        nome="nome"
                        valor={props.mod.nome}
                        mudou={e => AtualizarCampo(e)}
                        mensagem="Nome..."
                        required
                    />
                </div>
            </div>
            <div className={`row mt-5 d-flex ${noticias ? "justify-content-between" : "justify-content-end"}`}>
                {noticias ? <Mensagem className={del ? "bg-danger text-light" : btnAlter ? "bg-warning" : "bg-success text-light"}
                    msg={mensagem} /> : false}
                <LinhaBotoes salvarAlterar={() => save("Admin", props.banco, gnc)} />
            </div>
        </form>
    )
}