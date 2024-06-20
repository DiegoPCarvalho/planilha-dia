import React from 'react';
import { initialState } from '../config';
import TabelaGnc from '../comp/TabelaGenerica';
import CardFilaTecnica from '../../Card/CardFIlaTecnica';

export default class Grade extends React.Component {
    state = { ...initialState }


    render() {
        return (
            <>
                <div className="col-4">
                    <TabelaGnc dados={this.state.listarFila.length}
                        head={<th className='d-flex justify-content-center'>TO DO</th>}
                    >
                        {this.state.listarFila.map(registro => {
                            <CardFilaTecnica
                            os={registro.OS}
                            // dt={this.dataCorreta(registro.dt)}
                            Equip={registro.Equipamento}
                            Cliente={registro.Cliente}
                            // Servico={this.servico(registro.Servico)}
                            corInicial={registro.Problema === "Não" ? (registro.Servico === "Laudo" ? '#0047AB' : '#006400') : '#dc3545'}
                            pb={registro.Problema}
                            Problema={registro.ProblemObs}
                            final={registro.Estagio}
                            icone="play-circle"
                            corBotao="success"
                            // abrir={() => this.iniciar(registro)}
                        />
                         
                        })}
                    </TabelaGnc>
                </div>
                <div className="col-4">
                <TabelaGnc dados={this.state.listIni.length}
                        head={<th className='d-flex justify-content-center'>DOING</th>}
                    >
                        {this.state.listIni.map(registro => {
                            <CardFilaTecnica
                            os={registro.OS}
                            // dt={this.dataNova(registro.dt)}
                            Equip={registro.Equipamento}
                            Cliente={registro.Cliente}
                            // Servico={this.servico(registro.Servico)}
                            corInicial={'#2F4F4F'}
                            pb={registro.Problema}
                            Problema={registro.ProblemObs}
                            icone="flag-checkered"
                            corBotao="primary"
                            iniciado
                            icone2="backward"
                            corBotao2="danger"
                            final={registro.Estagio}
                            // cronos={
                            //     <Cronometro
                            //         hora={`hora ${registro.id}`}
                            //         minuto={`minuto ${registro.id}`}
                            //         segundo={`segundo ${registro.id}`} />
                            // }
                            // abrir={() => this.confirmarFinalizar(registro)}
                            // alerta={() => this.modalPro(registro)}
                            // voltar={() => this.voltar(registro)}
                        />
                         
                        })}
                    </TabelaGnc>
                </div>
                <div className="col-4">
                <TabelaGnc dados={this.state.listFim.length}
                        head={<th className='d-flex justify-content-center'>DOES</th>}
                    >
                        {this.state.listFim.map(registro => {
                            <CardFilaTecnica
                            id={registro.id}
                            os={registro.OS}
                            // dt={this.dataNova(registro.Data)}
                            Equip={registro.Equipamento}
                            Cliente={registro.Cliente}
                            // Servico={this.servico(registro.Servico)}
                            corInicial={registro.Problema === "Não" ? '#696969' : '#dc3545'}
                            pb={registro.Problema}
                            Problema={registro.ProblemObs}
                            // liquido={this.formatarTempoLiq(registro.TempoLiquido)}
                            // bruto={this.formatarTempoBto(this.tempo(registro.DataInicialBruto, registro.DataFinalBruto))}
                            finalizado
                        />
                         
                        })}
                    </TabelaGnc>
                </div>
            </>
        )
    }
}