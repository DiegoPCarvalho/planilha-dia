import React from "react";

export default function Mensagem(props) {
    return (
        <div className="col-3">
            <div className={`${props.className} fw-bold p-1 rounded d-flex justify-content-center`}>{props.msg}</div>
        </div>
    )
}