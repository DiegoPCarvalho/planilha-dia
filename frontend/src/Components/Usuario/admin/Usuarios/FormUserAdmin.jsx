import React from "react";
import Entrada from "../../components/Entrada";
import UsePerfilData from '../../../../data/hook/UsePerfilData';
import ListaDepar from "./ListaDepar";
import LinhaBotoes from "../../components/LinhasBotoes";
import Mensagem from "../../components/Mensagem";


export default function FormUserAdmin() {

    const { depar, usuario, AtualizarCampo, save, btnAlter, noticias } = UsePerfilData()

    const font = "h4"
    const classeForm = "form-control"

    return (
        <form action="javascript:myFunction(); return false;">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Entrada
                            modelo="input"
                            texto="Nome:"
                            tipo="text"
                            clst={font}
                            classe={classeForm}
                            nome="nomeCompleto"
                            valor={usuario.nomeCompleto}
                            mudou={e => AtualizarCampo(e)}
                            mensagem="Nome e Sobrenome..."
                            required
                        />
                    </div>
                    <div className="col-3">
                        <Entrada
                            modelo="input"
                            texto="E-mail:"
                            tipo="text"
                            clst={font}
                            classe={classeForm}
                            nome="email"
                            valor={usuario.email}
                            mudou={e => AtualizarCampo(e)}
                            mensagem="E-mail..."
                            required
                        />
                    </div>
                    <div className="col-3">
                        <Entrada
                            modelo="input"
                            texto="Senha:"
                            tipo="text"
                            clst={font}
                            classe={classeForm}
                            nome="senha"
                            valor={usuario.senha}
                            mudou={e => AtualizarCampo(e)}
                            mensagem="Senha..."
                            required
                        />
                    </div>
                    <div className="col-3">
                        <Entrada
                            modelo="select"
                            texto="Departamento:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="departamento"
                            valor={usuario.departamento}
                            mudou={e => AtualizarCampo(e)}
                            required
                        >
                            <option selected disabled value="">Selecione...</option>
                            <ListaDepar dado={depar} />
                        </Entrada>
                    </div>
                </div>
                <div className="row mt-2 d-flex justify-content-evenly">
                    <div className="col-1">
                        <Entrada
                            modelo="select"
                            texto="Drt:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="AdmDiretoria"
                            valor={usuario.AdmDiretoria}
                            mudou={e => AtualizarCampo(e)}
                        >
                            <option selected>0</option>
                            <option>1</option>
                        </Entrada>
                    </div>
                    <div className="col-1">
                        <Entrada
                            modelo="select"
                            texto="Gnc:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="AdmGerencia"
                            valor={usuario.AdmGerencia}
                            mudou={e => AtualizarCampo(e)}
                        >
                            <option selected>0</option>
                            <option>1</option>
                        </Entrada>
                    </div>
                    <div className="col-1">
                        <Entrada
                            modelo="select"
                            texto="Lbo:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="AdmLaboratorio"
                            valor={usuario.AdmLaboratorio}
                            mudou={e => AtualizarCampo(e)}
                        >
                            <option selected>0</option>
                            <option>1</option>
                        </Entrada>
                    </div>
                    <div className="col-1">
                        <Entrada
                            modelo="select"
                            texto="Grl:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="AdmGeral"
                            valor={usuario.AdmGeral}
                            mudou={e => AtualizarCampo(e)}
                        >
                            <option selected>0</option>
                            <option>1</option>
                        </Entrada>
                    </div>
                    <div className="col-1">
                        <Entrada
                            modelo="select"
                            texto="Ldr:"
                            tipo="text"
                            clst={font}
                            classe={"form-select"}
                            nome="AdmLider"
                            valor={usuario.AdmLider}
                            mudou={e => AtualizarCampo(e)}
                        >
                            <option selected>0</option>
                            <option>1</option>
                        </Entrada>
                    </div>
                </div>
                <div className={`row mt-5 d-flex ${noticias ? "justify-content-between" : "justify-content-end"}`}>
                    {noticias ? <Mensagem className={btnAlter ? "bg-warning" : "bg-success text-light"}
                        msg={btnAlter ? "Alterado com Sucesso!!!" : "Salvo com Sucesso!!!"} /> : false}
                    <LinhaBotoes salvarAlterar={() => save("Admin", "LoginUsuario")} />
                </div>
            </div>
        </form>
    )
}