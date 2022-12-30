import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: "home",
    title: "Home" 
}

export default class DashboardHome extends React.Component {
    render(){
        return(
            <Main {...HeaderProps}>
                <h1>Sou Dashboard Home</h1>
            </Main>
        )
    }
}