import React from "react";
import UsePerfilData from '../../../data/hook/UsePerfilData';
import Logo from '../../../Assets/Imgs/logoZhaz.png';
import { BuscarFoto } from '../../Dashboard/DashboardModel/Foto/FotoTecnico';
import './AdminCadastro.css';
import Usuario from "./Usuarios/Index";
import User from "../../Admin/Usuarios"
import Equipamentos from "./Equipamentos";
import Test from "./Test";

export default function Admin(){

    const {tela, setTela} = UsePerfilData()

    const styles = {
        cursor: 'pointer',
    }

    function mudarTela(mudar){
        return mudar === 'users' ? <Usuario />
            : mudar === 'equip' ? <Equipamentos />
            : mudar === 'serv' ? <div>serv</div>
            : mudar === 'cont' ? <div>cont</div>
            : mudar === 'depa' ? <div>depa</div>
            : mudar === 'ldc' ? <div>LDC</div>
            : mudar === 'test' ? <Test />
            : false
    }
    
    return (
        <>
        <div className="container-fluid overflow-auto">
                <div className="row d-flex justify-content-between mb-5">
                    <div className="col-6">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <img src={BuscarFoto(localStorage.usuario)} alt="" className="imagem rounded-circle" />
                    </div>
                </div>
                <div className="mt-5 ">
                    <div className='row text-light hv'>
                        <div onClick={() => setTela('users')} className="rounded-start col-2 fw-bold bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Usuários</div>
                        <div onClick={() => setTela('equip')} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Equipamentos</div>
                        <div onClick={() => setTela('serv')} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Servico</div>
                        <div onClick={() => setTela('cont')} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Contrato</div>
                        <div onClick={() => setTela('depa')} className="fw-bold col-2 bg-secondary p-2 d-flex justify-content-center h4" style={styles}>Departamento</div>
                        <div onClick={() => setTela('ldc')} className="rounded-end col-2 fw-bold bg-secondary p-2 d-flex justify-content-center h4" style={styles}>LDC</div>
                    </div>
                    <div className="row">
                        {mudarTela(tela)}
                    </div>        
                </div>
            </div>
        
        </>
    )
}