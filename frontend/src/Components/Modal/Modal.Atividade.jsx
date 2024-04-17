import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalAtendimento(props) {

  return (
    <>
      <Modal show={props.isShow} onHide={props.close} size="lg">
        <Modal.Header closeButton>
                 <Modal.Title>{props.nome}</Modal.Title>  
        </Modal.Header>
        <Modal.Body>
            <div>
                <div>
                    {props.relatorio}
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}