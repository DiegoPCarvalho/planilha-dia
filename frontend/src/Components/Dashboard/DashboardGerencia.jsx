import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: "database",
    title: "Gerencia" 
}

export default class DashboardGerencia extends React.Component {
    
    componentWillMount(){
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmG === "0") {
             window.location.pathname = "/Dashboard";
             alert("Não Tem Permissão Para Acessar essa Área")
        }
    }

   render(){
        return(
            <Main {...HeaderProps}>
                <h1>Sou Dashboard Gerencia</h1>
            </Main>
        )
    }
}