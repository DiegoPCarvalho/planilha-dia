import React from "react";

export default function ListaDepar(props){
    return props.dado.map(registro => {
        return <option key={registro.id}>{registro.nome}</option>
    })
}