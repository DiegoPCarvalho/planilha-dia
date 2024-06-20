import React from 'react';

export default function MenuItem(props) {
    return props.direita ? (
        <div className='d-flex align-items-center'>
            <span className={`fw-bold h${props.h} mt-2`}>{props.nome}</span>
            <i className={`fa fa-arrow-right mx-3 ${props.i} text-danger`}></i>
            <i className={props.classe} style={{ cursor: 'pointer' }} onClick={props.mudar}></i>
        </div>
    ) : (
        <div className='d-flex align-items-center'>
            <i className={props.classe} style={{ cursor: 'pointer' }} onClick={props.mudar}></i>
            <i className={`fa fa-arrow-left mx-3 ${props.i} text-danger`}></i>
            <span className={`fw-bold h${props.h} mt-2`}>{props.nome}</span>
        </div>
    )
}