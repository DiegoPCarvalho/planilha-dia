import React from 'react';

export default function Botao(props) {
    return (
        <button onClick={props.onClick} className={props.className} styles={props.styles}>
            {props.children}
        </button>
    )
}