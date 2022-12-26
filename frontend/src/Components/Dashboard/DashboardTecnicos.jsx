import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: "university",
    title: "Tecnico" 
}

export default class DashboardTecnico extends React.Component {
    render(){
        return(
            <Main {...HeaderProps}>
                <h1>Sou Dashboard Tecnico</h1>
            </Main>
        )
    }
}