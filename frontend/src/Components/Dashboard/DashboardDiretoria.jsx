import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: "sitemap",
    title: "Diretoria" 
}

export default class DashboardDiretoria extends React.Component {
    render(){
        return(
            <Main {...HeaderProps}>
                <h1>Sou Dashboard Diretoria</h1>
            </Main>
        )
    }
}