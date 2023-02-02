import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default class CentroCustoSetores extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                    <div className="d-flex flex-row justify-content-center">
                        <Link to="/Compras/CentroCustoSetores/Solicitacoes" className=" flex-fill rounded-start link bg-primary fw-bold d-flex justify-content-center">Solicitações</Link>
                        <Link to="/Compras/CentroCustoSetores/Finalizados" className="flex-fill rounded-end link bg-primary fw-bold d-flex justify-content-center"> Finalizados</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
        )
    }
}