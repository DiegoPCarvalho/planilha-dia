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
                <span className={props.classe}>{props.nomeBotao}</span>
            </Button>

            <Modal show={show} onHide={handleClose} size={props.tamanho} style={props.styles}>
                <Modal.Header closeButton className={props.class} closeVariant={props.crb}>
                    <Modal.Title>{props.nomeBotao}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        {props.Relatorio}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}