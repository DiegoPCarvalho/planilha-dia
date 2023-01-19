import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalAtendimento(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={props.corModal} onClick={handleShow} style={props.estilo}  className={props.classe}>
         <div>
            <h2 className='text-light'><strong>{props.nome}</strong></h2>
            <p className='fw-bold h3 text-light'>{props.qtd}</p>
            <p>{props.situacao}</p>
         </div>
        
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                 <Modal.Title>{props.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.relatorio}</Modal.Body>
        <Modal.Footer>
            {props.link}
        </Modal.Footer>
      </Modal>
    </>
  );
}

