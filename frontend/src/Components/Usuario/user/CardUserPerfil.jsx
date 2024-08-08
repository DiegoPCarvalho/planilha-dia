import React from 'react'
import CardUser from '../../Card/CardUser';
import UsePerfilData from '../../../data/hook/UsePerfilData';
import ModalUser from '../../Modal/ModalUsuario';
import FormUser from './formUser';

export default function CardUserPerfil() {
    const { dadosUser, modalUser, estadoModal, load } = UsePerfilData()

    return dadosUser.map(registro => {
        return (
            <CardUser
                nomeUsuario={registro.nomeCompleto ?? ""}
                email={registro.email ?? ""}
                departamento={registro.departamento ?? ""}
                alterar={<>
                    <button className='btn btn-warning' onClick={() => load(registro)}>
                        <i className="fa fa-pencil fa-2x"></i>
                    </button>
                    <ModalUser isShow={modalUser} close={() => estadoModal()} 
                        nomeBotao={"Perfil"}  Relatorio={<FormUser/>}  
                    />
                </>
                }
            />
        )
    })

}