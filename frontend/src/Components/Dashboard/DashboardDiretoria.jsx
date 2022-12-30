import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: "sitemap",
    title: "Diretoria" 
}

export default class DashboardDiretoria extends React.Component {
    componentWillMount(){
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmD === "0") {
             window.location.pathname = "/Dashboard";
             alert("Não Tem Permissão Para Acessar essa Área")
        }
    }
    render(){
        return(
            <Main {...HeaderProps}>
                <h1>Sou Dashboard Diretoria</h1>
            </Main>
        )
    }
}