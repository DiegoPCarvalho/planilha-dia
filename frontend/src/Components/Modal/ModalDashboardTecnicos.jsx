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

      <Modal show={show} onHide={handleClose} size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={props.nome} style={props.estiloFoto} className={props.classeFoto}></img>
            {props.titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-4 d-flex justify-content-center">
            <div className="col-3 d-flex flex-column justify-content-center bg-success text-light rounded">
              <h3 className='fw-bold d-flex justify-content-center'>Total</h3>
              <p className='h6 d-flex justify-content-center'>{props.total}</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-5 sombra mx-2 flex-fill">
              {props.grafico1}
            </div>
            <div className="col-md-5 sombra mx-2 flex-fill">
              {props.grafico2}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-5 sombra mx-2 flex-fill">
              {props.grafico3}
            </div>
            <div className="col-md-5 sombra mx-2 flex-fill">
              {props.grafico4}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-11 sombra mx-2 flex-fill">
              {props.grafico5}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

