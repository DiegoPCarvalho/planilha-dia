import React, { useState } from "react";
import ReactModal from 'react-modal';
import Formulario from "./Formulario";
import Tabela from './Tabela';

function Modal() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <div className="d-flex justify-content-end">
                <span className="mx-2 d-flex align-items-center"> <strong>Addicionar</strong></span>
                <button className="btn btn-success"
                    onClick={() => setModalOpen(true)}>
                    <i className="fa fa-plus"></i>
                </button>  
            </div>
            <ReactModal isOpen={modalOpen}>
                <div className="content d-flex flex-row justify-content-between mb-3">
                    <div className="d-flex">
                        <i className="fa fa-address-card fa-4x" />        
                    </div>
                    <div className="d-flex justify-space-betwem align-items-center">
                        <button onClick={() => setModalOpen(false)} className="btn btn-secondary">
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                </div>
                <Formulario />

            </ReactModal>

            <Tabela />
        </div>
    )
}

export default Modal;


