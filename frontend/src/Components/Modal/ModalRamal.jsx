import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalAtendimento(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant={props.corModal} onClick={handleShow} className={props.classe}>
                <span className='h2 fw-bold'>{props.nomeBotao}</span>
            </Button>

            <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>{props.nomeBotao}</Modal.Title>
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