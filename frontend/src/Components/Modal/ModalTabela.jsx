import React from 'react';

import Modal from 'react-bootstrap/Modal';

export default function ModalAtendimento(props) {
    
    return (
        <>
            <Modal show={props.isShow} onHide={props.close} size={props.tamanho}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.nome}</Modal.Title>
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