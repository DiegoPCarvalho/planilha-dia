import React from "react";
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logoZhaz.png';
import './CrudAtividade.css'
import { Link, Outlet} from 'react-router-dom';
import FotoTecnico from '../../Assets/Imgs/fotoTecnico.jpg';

const headerProps = {
    icon: 'newspaper-o',
    title: 'Atividade',
}


export default class AtividadeCrud extends React.Component {

    render() {
        return (
            <Main {...headerProps}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/Atividade"><img src={Logo} alt="" /></Link>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            {/* <h4 className="mx-2 d-flex align-items-center">Addicionar</h4>
                            <ModalAtendimento corModal="success" Ititulo="plus fa-2x"
                                classe="d-flex justify-content-center align-items-center" relatorio={this.formulario()}
                                nome={this.renderI()} /> */}
                                <Link to="/Atividade"><img src={FotoTecnico} alt="" className="imagem" /></Link>
                        </div>
                    </div>
                    {/* <div className="row mt-4">
                        <div className="col-12">
                            {this.renderTable()}
                        </div>
                    </div> */}

                    <div className="d-flex flex-row">
                        {/* <div className="col-6"> */}
                        <Link to="/Atividade/Formulario" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Formulario</Link>
                        {/* </div> */}
                        {/* <div className="col-6"> */}
                        <Link to="/Atividade/Tabela" className="flex-fill link bg-secondary fw-bold d-flex justify-content-center">Tabela</Link>
                        {/* <Link to="/Atividade/Tabela" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Tabela</Link> */}
                        {/* </div> */}
                        <Link to="/Atividade/Relatorio" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Relatório</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}