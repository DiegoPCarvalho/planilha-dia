import React from 'react';
import Main from '../../Template/Main';

const headerProps = {
    icon:'money',
    title: 'Financeiro'
}



export default class Financeiro extends React.Component {
   
    render(){
        return(
            <Main { ...headerProps }>
                <h1>Sou o Financeiro</h1>
            </Main>
        )
    }
} 