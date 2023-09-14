import React from 'react';

export default class ServOsLimp extends React.Component {
    teste(tecnico, dia, mes, ano){
        if(tecnico === "Todos"){
            if((dia === "Todos") && (mes === "Todos") && (ano === "Todos")){
                alert("Todos em geral")
            }
            if((dia === "Todos") && (mes === "Todos") && (ano !== "Todos")){
                alert("Todos Filtrando Ano")
            }
            if((dia === "Todos") && (mes !== "Todos") && (ano !== "Todos")){
                alert("Todos Filtrando Mes e Ano")
            }
            if((dia !== "Todos") && (mes !== "Todos") && (ano !== "Todos")){
                alert("Todos Filtrando Dia Mes e Ano")
            }
        }
        if(tecnico !== "Todos"){
            if((dia === "Todos") && (mes === "Todos") && (ano === "Todos")){
                alert("Tecnico Todos em geral")
            }
            if((dia === "Todos") && (mes === "Todos") && (ano !== "Todos")){
                alert("Tecnico Filtrando Ano")
            }
            if((dia === "Todos") && (mes !== "Todos") && (ano !== "Todos")){
                alert("Tecnico Filtrando Mes e Ano")
            }
            if((dia !== "Todos") && (mes !== "Todos") && (ano !== "Todos")){
                alert("Tecnico Filtrando Dia Mes e Ano")
            }
        }
        
    }

    render() {
        return (
            <>
                <div className="col-2 border"> Total OS {this.props.Tecnico}</div>
                <div className="col-2 border"> Total Servicos {this.props.Dia} </div>
                <div className="col-2 border"> Limpeza {this.props.Mes}/{this.props.Ano}</div>
            </>
        )
    }
}