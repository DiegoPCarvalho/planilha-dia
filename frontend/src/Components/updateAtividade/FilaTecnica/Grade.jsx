import React from 'react';
import { dataCorreta, servico, formatarTempoLiq, formatarTempoBto, tempo } from '../config';
import TabelaGnc from '../comp/TabelaGenerica';
import CardFilaTecnica from '../../Card/CardFIlaTecnica';
import Cronometro from '../../Atividade/Cronometro/index-Cronos';
import { iniciar } from '../estrutura';

export default class Grade extends React.Component {

    render() {
        return (
            <>
                <div className="col-4">
                    <TabelaGnc dados={this.props.Fila.length} styles={{ overflow: 'auto', height: 400 }}
                        classe="d-block"
                        head={<th className='d-flex justify-content-center'>TO DO</th>}
                    >
                        {this.props.Fila.map(registro => {
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
                                    abrir={() => iniciar(registro)}
                                    />
                                </div>
                            )
                        })}
                    </TabelaGnc>
                </div>
                <div className="col-4">
                    <TabelaGnc dados={this.props.Inicio.length} styles={{ overflow: 'auto', height: 400 }}
                    classe="d-block"
                        head={<th className='d-flex justify-content-center'>DOING</th>}
                    >
                        {this.props.Inicio.map(registro => {
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
                                    // abrir={() => this.confirmarFinalizar(registro)}
                                    // alerta={() => this.modalPro(registro)}
                                    // voltar={() => this.voltar(registro)}
                                    />
                                </div>
                            )
                        })}
                    </TabelaGnc>
                </div>
                <div className="col-4">
                    <TabelaGnc dados={this.props.Fim.length} styles={{ overflow: 'auto', height: 400 }}
                        classe="d-block"
                        head={<th className='d-flex justify-content-center'>DOES</th>}
                    >
                        {this.props.Fim.map(registro => {
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
}