import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: "university",
    title: "Tecnico" 
}

export default class DashboardTecnico extends React.Component {
    componentWillMount(){
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmT === "0") {
             window.location.pathname = "/Dashboard";
             alert("Não Tem Permissão Para Acessar essa Área")
        }
    }

    render(){
        return(
            <Main {...HeaderProps}>
                <h1>Sou Dashboard Tecnico</h1>
            </Main>
        )
    }
}