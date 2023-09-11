import React from 'react';
import ModalAtendimento from "../Modal/Modal.Atividade";
import Url from '../Url/Url';

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import $ from 'jquery';

const baseUrl = Url("Geral");

export default class TabelaMes extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.pesquisar()
    }

    pesquisar() {
        $(document).ready(function () {
            setTimeout(() => {
                $('#tabela').DataTable({
                    language: { url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json', },
                });
            }, 2000)
        });
    }


    renderTable() {
        return (
            <table className="table table-bordered table-striped" id="tabela-meses">
                <thead className="table-dark">
                    <tr>
                        <th>Index</th>
                        <th>Data</th>
                        <th>OS</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Modelo</th>
                        <th>NS</th>
                        <th>Serviço</th>
                        {/* <th>Classificação</th>
                        <th>Status</th> */}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.props.listar.map(Mes => {
            return (
                <tr key={(Mes.id)}>
                    <td>{Mes.id}</td>
                    <td>{Mes.Data}</td>
                    <td>{Mes.OS}</td>
                    <td>{Mes.Cliente}</td>
                    <td>{Mes.Equipamento}</td>
                    <td>{Mes.Modelo}</td>
                    <td>{Mes.NS}</td>
                    <td>{Mes.Servico}</td>
                    {/* <td>{Atividade.Classificacao}</td>
                    <td>{Atividade.Status}</td> */}
                    <td className="d-flex justify-content-around">
                        {/* <button className='btn btn-warning mx-1'
                        onClick={() => this.load(atividade)}>
                        <i className="fa fa-pencil"></i>
                    </button> */}
                        {/* <ModalAtendimento corModal="warning" Ititulo="expand" nome={this.renderI()}
                            relatorio={this.formulario()} load={this.renderButtonPencil(Atividade)} />
                        <button className="btn btn-danger mx-2"
                            onClick={() => this.confirmar(Atividade)}>
                            <i className="fa fa-trash"></i>
                        </button> */}

                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                    {this.renderTable()}
            </div>
        )

    }

} 