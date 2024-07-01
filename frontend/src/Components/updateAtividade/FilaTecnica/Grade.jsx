import React from 'react';
import { dataCorreta, servico, formatarTempoLiq, formatarTempoBto, tempo } from '../config';
import TabelaGnc from '../comp/TabelaGenerica';
import CardFilaTecnica from '../../Card/CardFIlaTecnica';
import Cronometro from '../../Atividade/Cronometro/index-Cronos';
import UseAppData from '../../../data/hook/UseAppData';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function(props){
    const { start, back, problem, finish } = UseAppData();

    function confirmarFinalizar(registro){
        confirmAlert({
            title: "Finalizar",
            message: "Deseja Realmente Finalizar?",
            buttons: [
                {
                    label: "Sim",
                    className: "btn btn-success",
                    onClick: () => finish(registro)
                },
                {
                    label: "Não",
                    className: "btn btn-danger"
                }
            ]
        })
    }

    return(
        <>
                <div className="col-4">
                    <TabelaGnc dados={props.Fila.length} styles={{ overflow: 'auto', height: 400 }}
                        classe="d-block"
                        head={<th className='d-flex justify-content-center'>TO DO</th>}
                    >
                        {props.Fila.map(registro => {
                            return (
                                <div className="d-flex justify-content-center" key={registro.id}>
                                    <CardFilaTecnica
                                        os={registro.OS}
                                        dt={dataCorreta(registro.dt)}
                                        Equip={registro.Equipamento}
                                        Cliente={registro.Cliente}
                                        Servico={servico(registro.Servico)}
                                        corInicial={registro.Problema === "Não" ? (registro.Servico === "Laudo" ? '#0047AB' : '#006400') : '#dc3545'}
                                        pb={registro.Problema}
                                        Problema={registro.ProblemObs}
                                        final={registro.Estagio}
                                        icone="play-circle"
                                        corBotao="success"
                                        abrir={() => start(registro)}
                                    />
                                </div>
                            )
                        })}
                    </TabelaGnc>
                </div>
                <div className="col-4">
                    <TabelaGnc dados={props.Inicio.length} styles={{ overflow: 'auto', height: 400 }}
                    classe="d-block"
                        head={<th className='d-flex justify-content-center'>DOING</th>}
                    >
                        {props.Inicio.map(registro => {
                            return (
                                <div className="d-flex justify-content-center" key={registro.id}>
                                    <CardFilaTecnica
                                        os={registro.OS}
                                        dt={dataCorreta(registro.dt)}
                                        Equip={registro.Equipamento}
                                        Cliente={registro.Cliente}
                                        Servico={servico(registro.Servico)}
                                        corInicial={'#2F4F4F'}
                                        pb={registro.Problema}
                                        Problema={registro.ProblemObs}
                                        icone="flag-checkered"
                                        corBotao="primary"
                                        iniciado
                                        icone2="backward"
                                        corBotao2="danger"
                                        final={registro.Estagio}
                                        cronos={
                                            <Cronometro
                                                hora={`hora ${registro.id}`}
                                                minuto={`minuto ${registro.id}`}
                                                segundo={`segundo ${registro.id}`} />
                                        }
                                    abrir={() => confirmarFinalizar(registro)}
                                    alerta={() => problem(registro)}
                                    voltar={() => back(registro)}
                                    />
                                </div>
                            )
                        })}
                    </TabelaGnc>
                </div>
                <div className="col-4">
                    <TabelaGnc dados={props.Fim.length} styles={{ overflow: 'auto', height: 400 }}
                        classe="d-block"
                        head={<th className='d-flex justify-content-center'>DOES</th>}
                    >
                        {props.Fim.map(registro => {
                            return (
                                <div className="d-flex justify-content-center" key={registro.id}>
                                    <CardFilaTecnica
                                        id={registro.id}
                                        os={registro.OS}
                                        dt={dataCorreta(registro.Data)}
                                        Equip={registro.Equipamento}
                                        Cliente={registro.Cliente}
                                        Servico={servico(registro.Servico)}
                                        corInicial={registro.Problema === "Não" ? '#696969' : '#dc3545'}
                                        pb={registro.Problema}
                                        Problema={registro.ProblemObs}
                                        liquido={formatarTempoLiq(registro.TempoLiquido)}
                                        bruto={formatarTempoBto(tempo(registro.DataInicialBruto, registro.DataFinalBruto))}
                                        finalizado
                                    />
                                </div>
                            )
                        })}
                    </TabelaGnc>
                </div>
            </>
    )
}