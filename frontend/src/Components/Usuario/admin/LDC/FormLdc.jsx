import React from 'react';
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import Entrada from '../../components/Entrada';
import ListaDepar from '../Usuarios/ListaDepar';
import Mensagem from '../../components/Mensagem';
import LinhaBotoes from '../../components/LinhasBotoes';

export default function FormLdc(){
    const { ldc, tecnico, equipamento, contrato, AtualizarCampo, save, btnAlter, noticias, mensagem, del } = UsePerfilData();

    const font = "h4"

    return (
        <form action="javascript:myFunction(); return false;">
            <div className="container-fluid">
                <div className="row d-flex justify-content-between">
                    <div className="col-3">
                        <Entrada
                            modelo="select"
                            texto="Usuário:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="tecnico"
                            valor={ldc.tecnico}
                            mudou={e => AtualizarCampo(e)}
                            required
                        >
                            <option selected disabled value="">Selecione...</option>
                            <ListaDepar dado={tecnico} /> 
                        </Entrada>
                    </div>
                    <div className="col-3">
                        <Entrada
                            modelo="select"
                            texto="Equipamento:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="equipamento"
                            valor={ldc.equipamento}
                            mudou={e => AtualizarCampo(e)}
                            required
                        >
                            <option selected disabled value="">Selecione...</option>
                            <ListaDepar dado={equipamento} /> 
                        </Entrada>
                    </div>
                    <div className="col-3">
                        <Entrada
                            modelo="select"
                            texto="Contrato:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="contrato"
                            valor={ldc.contrato}
                            mudou={e => AtualizarCampo(e)}
                            required
                        >
                            <option selected disabled value="">Selecione...</option>
                            <ListaDepar dado={contrato} /> 
                        </Entrada>
                    </div>
                </div>
                <div className={`row mt-5 d-flex ${noticias ? "justify-content-between" : "justify-content-end"}`}>
                    {noticias ? <Mensagem className={del ? "bg-danger text-light" : btnAlter ? "bg-warning" : "bg-success text-light"}
                        msg={mensagem} /> : false}
                    <LinhaBotoes salvarAlterar={() => save("Admin", "LDC", ldc)} />
                </div>
            </div>
        </form>
    )
}