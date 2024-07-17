import React from "react";
import UseAppData from "../../../data/hook/UseAppData";
import Entrada from '../comp/Entrada';
import Botao from '../comp/Botao';
import Lista from './Lista';

export default function Campos() {

    const { atividade, setAtividade, MudarCampoAtividade, limpar, bancoForm, verificar, tableOn, dadoCosmos } = UseAppData();
    const font = "h4"
    const classeForm = "form-control"


    function mostrarDado() {
        const os = atividade.OS
        
        if (os.length >= 5) {
            let dado = []
            const tab = dadoCosmos

            tab.map(registro => {
                if (os == registro.OS) {
                    dado.push({
                        user: registro.Cliente,
                        serv: registro.Servico,
                        equip: registro.Equipamento,
                        mod: registro.Modelo,
                        tip: registro.TipoOS,
                        serial: registro.NS
                    })
                }
            })

            if (os.length >= 5) {
                const novaAtividade = {
                    Data: '',
                    Dia: '',
                    Mes: '',
                    Ano: '',
                    OS: os,
                    Cliente: dado[0].user,
                    Equipamento: dado[0].equip,
                    Modelo: dado[0].mod,
                    NS: dado[0].serial,
                    Servico: dado[0].serv,
                    Placa: '',
                    Classificacao: '',
                    Contrato: dado[0].tip,
                    Observacao: '',
                    Status: '',
                    Tecnico: localStorage.usuario
                }
                
                setAtividade(novaAtividade)
            }
        }




    }


return (
    <form className="row g-3 mt-3" action="javascript:myFunction(); return false;">
        <div className="row">
            <div className="col-6 col-md-2">
                <Entrada
                    modelo="input"
                    texto="Data:"
                    tipo="datetime-local"
                    clst={font}
                    classe={classeForm}
                    nome="Data"
                    valor={atividade.Data}
                    mudou={(e) => MudarCampoAtividade(e)}
                />
            </div>
            <div className="col-6 col-md-2">
                <Entrada
                    modelo="input"
                    texto="OS:"
                    clst={font}
                    classe={classeForm}
                    nome="OS"
                    valor={atividade.OS}
                    mudou={(e) => MudarCampoAtividade(e)}
                    keyD={() => mostrarDado()}
                    required
                    mensagem="Informe a OS..."
                />
            </div>
            <div className="col-12 col-md-5">
                <Entrada
                    modelo="input"
                    texto="Cliente:"
                    clst={font}
                    classe={classeForm}
                    nome="Cliente"
                    valor={atividade.Cliente}
                    mudou={(e) => MudarCampoAtividade(e)}
                    required
                    mensagem="Informe o Cliente..."
                />
            </div>
            <div className="col-12 col-md-3">
                <Entrada
                    modelo="select"
                    texto="Serviço:"
                    clst={font}
                    classe="form-select"
                    nome="Servico"
                    valor={atividade.Servico}
                    mudou={(e) => MudarCampoAtividade(e)}
                    required
                >
                    <option selected disabled value="">Selecione...</option>
                    <Lista dado={bancoForm.listServ} />
                </Entrada>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-6 col-md-3">
                <Entrada
                    modelo="select"
                    texto="Equipamento"
                    clst={font}
                    classe="form-select"
                    nome="Equipamento"
                    valor={atividade.Equipamento}
                    mudou={(e) => MudarCampoAtividade(e)}
                    required
                >
                    <option selected disabled value="">Selecione...</option>
                    <Lista dado={bancoForm.listEquip} />
                </Entrada>
            </div>
            <div className={atividade.Servico === 'Recuperação de Placa' ? "col-6 col-md-2" : "col-6 col-md-3"}>
                <Entrada
                    modelo="input"
                    texto="Modelo:"
                    clst={font}
                    classe={classeForm}
                    nome="Modelo"
                    valor={atividade.Modelo}
                    mudou={(e) => MudarCampoAtividade(e)}
                    required
                    mensagem="Informe o Modelo..."
                />
            </div>
            <div className={atividade.Servico === 'Recuperação de Placa' ? "col-6 col-md-2" : "col-6 col-md-3"}>
                <Entrada
                    modelo="input"
                    texto="NS:"
                    clst={font}
                    classe={classeForm}
                    nome="NS"
                    valor={atividade.NS}
                    mudou={(e) => MudarCampoAtividade(e)}
                    required
                    mensagem="Informe o NS..."
                />
            </div>
            <div className="col-6 col-md-3">
                <Entrada
                    modelo="select"
                    texto="Contrato"
                    clst={font}
                    classe="form-select"
                    nome="Contrato"
                    valor={atividade.Contrato}
                    mudou={(e) => MudarCampoAtividade(e)}
                    required
                >
                    <option selected disabled value="">Selecione...</option>
                    <option>Avulso</option>
                    <Lista dado={bancoForm.listCont} />
                </Entrada>
            </div>
            {atividade.Servico === 'Recuperação de Placa' ? (
                <div className="col-6 col-md-2">
                    <Entrada
                        modelo="select"
                        texto="Rec. Placa:"
                        clst={font}
                        classe="form-select"
                        nome="Placa"
                        valor={atividade.Placa}
                        mudou={(e) => MudarCampoAtividade(e)}
                        required
                    >
                        <option selected>...</option>
                        <option>Recuperada</option>
                        <option>Não Recuperada</option>
                    </Entrada>
                </div>
            ) : false}
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <Entrada
                    texto="Observação:"
                    classe="form-control"
                    clst={font}
                    linhas={5}
                    nome="Observacao"
                    valor={atividade.Observacao}
                    mudou={(e) => MudarCampoAtividade(e)}
                    mensagem="Informe a Observação..."
                />
            </div>
        </div>
        <div className="row mt-4 d-flex justify-content-between">
            <div className="col-2">
                <div class="success fw-bold p-2 rounded">Salvo com Sucesso!!!</div>
            </div>
            <div className="col-3 d-flex justify-content-end">
                <Botao className={`btn btn-${tableOn ? "warning" : "primary"} fw-bold mx-2`}
                    onClick={() => verificar()}
                >{tableOn ? 'Alterar' : 'Salvar'}</Botao>
                <Botao className="btn btn-danger fw-bold"
                    onClick={() => limpar()}
                >Cancelar</Botao>
            </div>
        </div>
    </form>
)
}