import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: "database",
    title: "Gerencia" 
}

export default class DashboardGerencia extends React.Component {
    render(){
        return(
            <Main {...HeaderProps}>
                <h1>Sou Dashboard Gerencia</h1>
            </Main>
        )
    }
}