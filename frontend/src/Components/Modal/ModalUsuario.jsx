import React from 'react';

import Modal from 'react-bootstrap/Modal';

export default function ModalUser(props) {

    return (
        <>
            <Modal show={props.isShow} onHide={props.close} size={props.tamanho}>
                <Modal.Header closeButton closeVariant='white' className='bg-dark'>
                    <Modal.Title className='text-white fw-bold'>{props.nomeBotao}</Modal.Title>
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