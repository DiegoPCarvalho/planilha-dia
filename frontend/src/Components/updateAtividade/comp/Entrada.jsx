import React from 'react';

export default function Entrada(props) {
    return props.modelo === 'input' ? (
        <div className={`form-group ${props.className}`}>
            <label className="font-bold mb-2">{props.texto}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura ?? false}
                onChange={props.mudou}
                className={props.classe}
                required={props.required ?? false}
                placeholder={props.mensagem}
            />
        </div>
    ) : props.modelo === 'select' ? (
        <div className={`form-group ${props.className}`}>
            <label className="font-bold mb-2">{props.texto}</label>
            <select
                value={props.valor}
                readOnly={props.somenteLeitura ?? false}
                onChange={props.mudou}
                className={props.classe}
                required={props.required ?? false}
            >
                {props.children}
            </select>
        </div>
    ) : (
        <div className={`form-group ${props.className}`}>
            <label className='fw-bold'>{props.texto}</label>
            <textarea 
                value={props.valor}
                rows={props.linhas}
                readOnly={props.somenteLeitura ?? false}
                onChange={props.mudou}
                className={props.classe}
                required={props.required ?? false}
                placeholder={props.mensagem}/>
        </div>
    )
}