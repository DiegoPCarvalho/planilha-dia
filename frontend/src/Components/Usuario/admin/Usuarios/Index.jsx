import React from "react";
import FormUserAdmin from "./FormUserAdmin";


export default function Usuario() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3">
                   <i className="fa fa-user-plus fa-4x"></i>
                </div>
            </div>
            <div className="row mt-3">
                <FormUserAdmin />
            </div>
            <div className="row mt-3">
                tabela
            </div>
        </div>
    )
}