import React from 'react';
import Main from '../Template/Main';
import Logo from '../../Assets/Imgs/logo.png'

const HeaderProps = {
    icon: "database",
    title: "Gerencia"
}

export default class DashboardGerencia extends React.Component {

    componentWillMount() {
        this.validacao()
    }

    validacao() {
        if (localStorage.AdmG === "0") {
            window.location.pathname = "/Dashboard";
            alert("Não Tem Permissão Para Acessar essa Área")
        }
    }

    render() {
        return (
            <Main {...HeaderProps}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-3">
                    <label>Mês: </label>
                        <select id="mes" class="form-select" aria-label="Default select example">
                            <option selected>Geral</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div className="col-3">
                    <label>Ano: </label>
                        <select id="ano" class="form-select" aria-label="Default select example">
                            <option selected>Geral</option>
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
                    <div className="col-3 d-flex align-items-end">
                        <button className="btn btn-success">Buscar</button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        Graficos
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        tecnicos
                    </div>
                </div>
            </Main>
        )
    }
}