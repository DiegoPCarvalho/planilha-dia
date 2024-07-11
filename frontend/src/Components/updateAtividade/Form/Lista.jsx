import React from "react";

export default function Lista(props){
    return props.dado.map(registro =>{
        return (
            <option>{registro.nome}</option>
        )
    })
}