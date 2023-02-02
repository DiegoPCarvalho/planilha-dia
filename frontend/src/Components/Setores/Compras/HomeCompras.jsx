import React from 'react';
import Main from '../../Template/Main';
import Logo from '../../../Assets/Imgs/logoZhaz.png';

import { Link, Outlet } from 'react-router-dom';

const headerProps = {
    icon:'shopping-cart',
    title: 'Compras'
}

export default class HomeCompras extends React.Component {
    render(){
        return(
            <Main { ...headerProps }>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-6">
                            <Link to="/Compras"><img src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <Link to="/Compras/CadastroItem" className="rounded-start flex-fill link bg-secondary fw-bold d-flex justify-content-center">Cadastro Item</Link>
                        <Link to="/Compras/CentroCusto" className=" flex-fill link bg-secondary fw-bold d-flex justify-content-center">Centro Custo</Link>
                        <Link to="/Compras/CentroCustoSetores" className="rounded-end flex-fill link bg-secondary fw-bold d-flex justify-content-center">Centro Custo Setores</Link>
                    </div>
                    <div className="row mt-2 ">
                        <Outlet />
                    </div>
                </div>
            </Main>
        )
    }
}