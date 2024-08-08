import React from "react";
import UsePerfilData from "../../../data/hook/UsePerfilData";

export default function FormUser() {

    const { usuario, estadoModal, save, AtualizarCampo } = UsePerfilData()

    return (
        <form className="row" action="javascript:myFunction(); return false;">
            <div className="row">
                <div className="col-12">
                    <label for="User" id="user-text" className="fw-bold h5 bg-dark p-2 fw-bold text-light rounded">
                        <i className="fa fa-user fw-bold " style={{ fontSize: 25 }}></i>
                    </label>
                    <span className="mx-2 h5 fw-bold">{usuario.nomeCompleto}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <label for="User" id="user-text" className="fw-bold h5 bg-dark p-2 fw-bold text-light rounded">
                        <i className="fa fa-envelope fw-bold"></i>
                    </label>
                    <span className="mx-2 h5 fw-bold ">{usuario.email}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex flex-row">
                    <label for="User" id="user-text" className="fw-bold h5 bg-dark p-2 fw-bold text-light rounded">
                        <i className="fa fa-key fw-bold "></i>
                    </label>
                    <div className="d-flex align-items-center mx-3">
                        <input
                            type="text"
                            name="senha"
                            className="form-control"
                            value={usuario.senha}
                            onChange={(e) => AtualizarCampo(e, 'user')}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <label for="User" id="user-text" className="fw-bold h5 bg-dark p-2 fw-bold text-light rounded">
                        <i className="fa fa-server fw-bold"></i>
                    </label>
                    <span className="mx-2 h5 fw-bold">{usuario.departamento}</span>
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <div className="col-6 d-flex flex-row justify-content-around">
                    <button className="btn btn-primary fw-bold" onClick={() => save()}>salvar</button>
                    <button className="btn btn-danger fw-bold" onClick={() => estadoModal()}>cancelar</button>
                </div>
            </div>
        </form>
    )
}