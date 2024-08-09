import React from "react";
import Entrada from "../../components/Entrada";

export default function FormUserAdmin() {

    const font = "h4"
    const classeForm = "form-control"

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <Entrada
                        modelo="input"
                        texto="Nome:"
                        tipo="text"
                        clst={font}
                        classe={classeForm}
                        nome="nomeCompleto"
                        value={""}
                        mudou={""}
                        mensagem="Nome e Sobrenome..."
                        required
                    />
                </div>
                <div className="col-3">
                    <Entrada
                        modelo="input"
                        texto="E-mail:"
                        tipo="text"
                        clst={font}
                        classe={classeForm}
                        nome="email"
                        value={""}
                        mudou={""}
                        mensagem="E-mail..."
                        required
                    />
                </div>
                <div className="col-3">
                    <Entrada
                        modelo="input"
                        texto="Senha:"
                        tipo="text"
                        clst={font}
                        classe={classeForm}
                        nome="senha"
                        value={""}
                        mudou={""}
                        mensagem="Senha..."
                        required
                    />
                </div>
                <div className="col-3">
                    <Entrada
                        modelo="select"
                        texto="Departamento:"
                        tipo="text"
                        clst={font}
                        classe={"form-select"}
                        nome="departamento"
                        value={""}
                        mudou={""}
                        required
                    >
                        <option selected disabled value="">Selecione...</option>
                    </Entrada>
                </div>
            </div>
            <div className="row mt-2 d-flex justify-content-evenly">
                <div className="col-1">
                    <Entrada
                        modelo="select"
                        texto="Drt:"
                        tipo="text"
                        clst={font}
                        classe={"form-select"}
                        nome="AdmDiretoria"
                        value={""}
                        mudou={""}
                    >
                        <option selected>0</option>
                        <option>1</option>
                    </Entrada>
                </div>
                <div className="col-1">
                    <Entrada
                        modelo="select"
                        texto="Gnc:"
                        tipo="text"
                        clst={font}
                        classe={"form-select"}
                        nome="AdmGerencia"
                        value={""}
                        mudou={""}
                    >
                        <option selected>0</option>
                        <option>1</option>
                    </Entrada>
                </div>
                <div className="col-1">
                    <Entrada
                        modelo="select"
                        texto="Lbo:"
                        tipo="text"
                        clst={font}
                        classe={"form-select"}
                        nome="AdmLaboratorio"
                        value={""}
                        mudou={""}
                    >
                        <option selected>0</option>
                        <option>1</option>
                    </Entrada>
                </div>
                <div className="col-1">
                    <Entrada
                        modelo="select"
                        texto="Grl:"
                        tipo="text"
                        clst={font}
                        classe={"form-select"}
                        nome="AdmGeral"
                        value={""}
                        mudou={""}
                    >
                        <option selected>0</option>
                        <option>1</option>
                    </Entrada>
                </div>
                <div className="col-1">
                    <Entrada
                        modelo="select"
                        texto="Ldr:"
                        tipo="text"
                        clst={font}
                        classe={"form-select"}
                        nome="AdmLider"
                        value={""}
                        mudou={""}
                    >
                        <option selected>0</option>
                        <option>1</option>
                    </Entrada>
                </div>
            </div>
        </div>
    )
}