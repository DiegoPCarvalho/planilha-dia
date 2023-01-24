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
         <i className={`fa fa-${props.Ititulo} mx-2`}></i><span className='mx-2'>{props.nomeBotao}</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                 <Modal.Title>{props.nome}</Modal.Title>  
        </Modal.Header>
        <Modal.Body>
            <div>
                <div className='d-flex justify-content-end'>
                    {props.load}
                </div>
                <div>
                    {props.relatorio}
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}