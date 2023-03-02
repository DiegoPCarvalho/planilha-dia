import React from 'react';
import axios from 'axios';
import Url from '../Url/Url';
import Grafico from '../Graficos/Grafico';
import CardGD from '../Card/CardGD';

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
import imgMarcio from "../../Assets/Imgs/user.png";

const initialState = {
    imagem: [],
    listarTotalEquip: [0],
    listarLP: [0],
    listarTotalOS:[0]
}


export default class DashboardGeral extends React.Component {

    state = { ...initialState }

    validarFoto(tecnico) {
        if (tecnico === "Diego Carvalho") {
            return imgDiegoC
        }
        if (tecnico === "Natanael Silva Lima") {
            return imgNata
        }
    }

    filtrarDados() {
        const tec = document.getElementById("tecnico").value;

        if (tec === "Diego Carvalho") {
            localStorage.Tec = "Diego Carvalho"

            const saber = this.validarFoto(localStorage.Tec)

            return this.setState({
                imagem: saber
            })
        }
        if (tec === "Todos") {
            localStorage.Tec = "Todos"
            const saber = this.validarFoto(localStorage.Tec)

            return this.setState({
                imagem: saber
            })
        }
        if (tec === "Natanael Silva Lima") {
            localStorage.Tec = "Natanael Silva Lima"
            const saber = this.validarFoto(localStorage.Tec)

            return this.setState({
                imagem: saber
            })
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-2 d-flex flex-row justify-content-center align-items-center">
                        <i className="fa fa-filter fa-2x text-danger" /> <h2 className='fw-bold'>Filtro</h2>
                    </div>
                    <div className="col-2">
                        <label className='fw-bold'>Técnico: </label>
                        <select id="tecnico" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            <option>Diego Carvalho</option>
                            <option>Natanael Silva Lima</option>
                            <option>Mateus Doval</option>
                            <option>Lucas Felician</option>
                            <option>Diogo Selmini</option>
                            <option>Gabriel Kaique</option>
                            <option>Bruno Bedani</option>
                            <option>Vinicius Gomes</option>
                            <option>Diego Almeida</option>
                            <option>Cida Zani</option>
                            <option>Allan Zulino</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <label className='fw-bold'>Dia: </label>
                        <select id="dia" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <label className='fw-bold'>Mês: </label>
                        <select id="mes" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <label className='fw-bold'>Ano: </label>
                        <select id="ano" class="form-select" aria-label="Default select example">
                            <option selected>Todos</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                        </select>
                    </div>
                    <div className="col-2 d-flex align-items-end">
                        <button className="btn btn-success fw-bold" onClick={e => this.filtrarDados(e)}>Buscar</button>
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-start">
                    <div className="col-3 d-flex justify-content-start">
                        <img src={this.state.imagem} alt="" className='rounded-circle' style={{ height: 150, width: 100 }} />
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center text-light">
                        <CardGD bg="dark" nomeTitulo="Total OS's" icone={<i class="fa fa-3x fa-codepen" aria-hidden="true"></i>}
                            dado={this.state.listarTotalOS} />
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-center text-light">
                        <CardGD bg="success" nomeTitulo="Total Serviço" icone={<i class="fa fa-3x fa-server" aria-hidden="true"></i>}
                            dado={this.state.listarTotalEquip} />
                    </div>
                    
                    <div className="col-3 d-flex flex-column justify-content-center text-light">
                        <CardGD bg="primary" nomeTitulo="Total Limpeza" icone={<i class="fa fa-3x fa-paint-brush" aria-hidden="true"></i>}
                            dado={this.state.listarLP} />
                    </div>
                </div>
            </div>
        )
    }
}
