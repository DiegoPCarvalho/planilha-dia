import React from 'react';
import Main from '../Template/Main';

const HeaderProps = {
    icon: 'user-plus',
    title: 'Perfil do Usuario'
}

export default class Perfil extends React.Component{

    renderirar(tecnico){
        if(tecnico == 1){
            return (
                <Main {...HeaderProps}>
                    <div>Eu Sou o Numero {tecnico}</div>
                </Main>
            )
        }else if(tecnico == 2){
            return (
                <Main {...HeaderProps}>
                    <div>Não sou o Numero 1 e sim o numero {tecnico}</div>
                </Main>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderirar(1)}
            </div>
        )
    }
}