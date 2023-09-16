import React from 'react';

export default class ServOsLimp extends React.Component {
    teste(tecnico, dia, mes, ano){
        if(tecnico === "Todos"){
            if((dia === "Todos") && (mes === "Todos") && (ano === "Todos")){
                
            }
            if((dia === "Todos") && (mes === "Todos") && (ano !== "Todos")){
               
            }
            if((dia === "Todos") && (mes !== "Todos") && (ano !== "Todos")){
                
            }
            if((dia !== "Todos") && (mes !== "Todos") && (ano !== "Todos")){
               
            }
        }
        if(tecnico !== "Todos"){
            if((dia === "Todos") && (mes === "Todos") && (ano === "Todos")){
                
            }
            if((dia === "Todos") && (mes === "Todos") && (ano !== "Todos")){
                
            }
            if((dia === "Todos") && (mes !== "Todos") && (ano !== "Todos")){
                
            }
            if((dia !== "Todos") && (mes !== "Todos") && (ano !== "Todos")){
                
            }
        }
        
    }

    render() {
        return (
            <>
                <div className="col-2 border"> Total OS </div>
                <div className="col-2 border"> Total Servicos</div>
                <div className="col-2 border"> Limpeza</div>
            </>
        )
    }
}