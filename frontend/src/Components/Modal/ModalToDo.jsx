import React from "react";
import Modal from "react-modal";

const MODAL_STYLE = {
    content: {
        position: 'fixed',
        top: '25%',
        left: '35%',
        right: 'auto',
        bottom: 'auto',
        height: 250,
        width: 500
    },
    overlay: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgb(0,0,0, 0.7)',
        zIndex: '1000'
    }
}

export default function ModalToDo(props) {


    return (
        <div>
            <Modal
                isOpen={props.modal}
                style={MODAL_STYLE}
                onRequestClose={props.close}
                className={'bg-light rounded'}
            >
                <div className="d-flex justify-content-between bg-dark rounded-top overflow-hidden">
                    <h3 className="fw-bold text-light mt-1 mx-2">Atividade</h3>
                    <i className="fa fa-close fa-2x text-light bg-danger p-1" style={{cursor: 'pointer'}} onClick={props.close}></i>
                </div>
                <div className="mt-3" style={{ marginLeft: 20}}>
                        {props.relatorio}
                </div>             
            </Modal>
        </div>
    )
}