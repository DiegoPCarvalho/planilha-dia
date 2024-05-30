import React from 'react';
import './AdminCadastro.css';
//pages
import Usuarios from '../Admin/Usuarios';
import Equipamentos from '../Admin/Equipamento';
import Servico from '../Admin/Servico';
import Contrato from '../Admin/Contrato';
import Departamento from '../Admin/Departamento';
import Banco from '../Admin/Banco';

const initialState = {
    mudarTab: ""
}

const styles = {
    cursor: 'pointer',
}

export default class AdminCadastro extends React.Component {
    state = { ...initialState }

    mudarTela(mudar){
        return mudar === 'user' ? <Usuarios />
            : mudar === 'equip' ? <Equipamentos />
            : mudar === 'serv' ? <Servico />
            : mudar === 'cont' ? <Contrato />
            : mudar === 'depa' ? <Departamento />
            : mudar === 'banc' ? <Banco />
            : false
    }

    render() {
        return (
            <>
                <div className='row text-light hv'>
                    <div onClick={() => this.setState({ mudarTab: 'user'})} className="rounded-start fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Usuarios</div>
                    <div onClick={() => this.setState({ mudarTab: 'equip'})} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Equipamentos</div>
                    <div onClick={() => this.setState({ mudarTab: 'serv'})} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Servico</div>
                    <div onClick={() => this.setState({ mudarTab: 'cont'})} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Contrato</div>
                    <div onClick={() => this.setState({ mudarTab: 'depa'})} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Departamento</div>
                    <div onClick={() => this.setState({ mudarTab: 'banc'})} className="rounded-end fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Banco</div>
                </div>
                <div className="row">
                    {this.mudarTela(this.state.mudarTab)}
                </div>
            </>
        )
    }
}