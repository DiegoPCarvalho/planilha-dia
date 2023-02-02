import React from "react";
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logoZhaz.png';
import './CrudAtividade.css';
import { Link, Outlet } from 'react-router-dom';
import FotoTecnico from '../../Assets/Imgs/fotoTecnico.jpg';


//TECNICOS
import imgDiegoC from '../../Assets/imagensTecnicos/DIEGO CARVALHO.png';
import imgNata from '../../Assets/imagensTecnicos/NATANAEL MILTON.png';
import imgMateus from '../../Assets/imagensTecnicos/MATEUS DOVAL.png';
import imgLucas from '../../Assets/imagensTecnicos/LUCAS FELICIAN.png';
import imgDiogo from '../../Assets/imagensTecnicos/DIOGO SELMINI.png';
import imgGabriel from '../../Assets/imagensTecnicos/GABRIEL KAIQUE.png';
import imgBruno from '../../Assets/imagensTecnicos/BRUNO BEDANI (1).png';
import imgVinicius from '../../Assets/imagensTecnicos/VINICIUS GOMES .png';
import imgDiegoA from '../../Assets/imagensTecnicos/DIEGO ALMEIDA.png';
import imgAnderson from '../../Assets/imagensTecnicos/ANDERSON RAMOS (1).png';
import imgDouglas from '../../Assets/imagensTecnicos/DOUGLAS ALTENFELDER.png';
import imgKleiton from '../../Assets/imagensTecnicos/KLEITON PAULINO.png';



const headerProps = {
    icon: 'newspaper-o',
    title: 'Atividade',
}


export default class AtividadeCrud extends React.Component {

    componentWillMount(){
        this.validacao()
    }

    validacao(){
        if (localStorage.AdmLaboratorio === "0") {
             window.location.pathname = "/Home";
             alert("Não tem permissão para acessar essa Área")
        }
    }

    mostarFoto(tecnico){
        if("Diego Carvalho" === tecnico){
            return imgDiegoC
        }
        if("Natanael Silva Lima" === tecnico){
            return imgNata
        }
        if("Anderson Ramos" === tecnico){
            return imgAnderson
        }
        if("Mateus Doval" === tecnico){
            return imgMateus
        }
        if("Lucas Feliciano" === tecnico){
            return imgLucas
        }
        if("Diogo Selmini" === tecnico){
            return imgDiogo
        }
        if("Gabriel Kaique" === tecnico){
            return imgGabriel
        }
        if("Bruno Bedani" === tecnico){
            return imgBruno
        }
        if("Vinicius Gomes" === tecnico){
            return imgVinicius
        }
        if("Diego Almeida" === tecnico){
            return imgDiegoA
        }
        if("Douglas Altenfelder" === tecnico){
            return imgDouglas
        }
        if("Kleiton Paulino" === tecnico){
            return imgKleiton
        }
        else{
            return FotoTecnico
        }
    }

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
                            <Link to="/Atividade"><img src={this.mostarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" /></Link>
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


