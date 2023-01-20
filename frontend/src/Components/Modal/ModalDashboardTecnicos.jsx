import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

export default function ModalAtendimento(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant={props.corModal} onClick={handleShow} style={props.estilo}  className={props.classe}>
         <div>
            <img src={props.imagem} alt="" />
         </div>
        
      </Button> */}
      <Image src={props.imagem} onClick={handleShow} className={props.classe} style={props.estilo}>
  
      </Image>

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

