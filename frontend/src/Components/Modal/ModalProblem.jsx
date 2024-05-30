import React from 'react';

import Modal from 'react-bootstrap/Modal';

export default function ModalProblem(props) {
    
    return (
        <>
            <Modal show={props.modal} onHide={props.close} size={props.tamanho}>
                <Modal.Header closeButton className='bg-danger'>
                    <Modal.Title><span className='fw-bold text-light'>{props.nome}</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12">
                            {props.Relatorio}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}