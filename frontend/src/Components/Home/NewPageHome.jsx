import React from 'react';
import Header from '../Template/Header';
import './NewPageHome.css';
import CardHome from '../Card/CardHome';


export default class NewPageHome extends React.Component {
    render() {
        return (
            <>
                <Header icon="home" title="Home" />
                <nova className="corFundo content container-fluid ">
                    <div className="row mx-2 my-3">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-12 col-md-4 "><CardHome
                                    bg="ligth" titulo="Usuários" tipoTexto="text-dark boxShadow"
                                    icone="users" valor={`Qtd. ${"0"}`} corBt="primary"
                                /></div>
                                <div className="col-12 col-md-4 "><CardHome
                                    bg="ligth" titulo="Total de OS's" tipoTexto="text-dark boxShadow"
                                    icone="file" valor={`Qtd. ${"0"}`} corBt="warning"
                                /></div>
                                <div className="col-12 col-md-4 "><CardHome
                                    bg="ligth" titulo="Total Registros" tipoTexto="text-dark boxShadow"
                                    icone="book" valor={`Qtd. ${"0"}`} corBt="success"
                                /></div>
                            </div>
                            <div className="row"> linha grafico</div>
                        </div>
                        <div className="col-3">
                            grafico
                        </div>
                    </div>
                </nova>
            </>
        )
    }
}