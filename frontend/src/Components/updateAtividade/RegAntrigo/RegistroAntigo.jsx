import React, { useState } from "react";
import MenuItem from "../comp/MenuItem";
import Entrada from "../comp/Entrada";
import { Filtro } from "../config";
import Botao from "../comp/Botao";
import TabelaMeses from './TabelaMeses';
import UseAppData from '../../../data/hook/UseAppData';


export default function RegistroAntigo(props) {
    const { buscarRegistroAntigo } = UseAppData()
    const [filtro, setFiltro] = useState(Filtro)
    const [listar, setListar] = useState([])

    function MudarEstadoFriltro(event){
        const FiltroData = { ...filtro }
        FiltroData[event.target.name] = event.target.value
        setFiltro(FiltroData)
    }

    async function Buscar(){
        const { mes, ano } = filtro

        const listar = await buscarRegistroAntigo(mes, ano)

        return setListar(listar)
    }

    
        return (
            <>
                <div className="row">
                    {localStorage.departamento === "Limpeza Lab" ? (
                        <>
                            <div className="col-3">
                                <MenuItem nome="Formulário" h="5"
                                    classe="fa fa-address-card fa-2x"
                                    mudar={props.form}
                                    />
                                <MenuItem nome="Tabela" h="5"
                                    classe="fa fa-table fa-2x"
                                    mudar={props.table}
                                    />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-3">
                                <MenuItem  nome="Fila Técnica" h="5" 
                                    classe="fa fa-list-alt fa-2x"
                                    mudar={props.fila}
                                    />
                                <MenuItem nome="Formulário" h="5"
                                    classe="fa fa-address-card fa-2x"
                                    mudar={props.form}
                                    />
                                <MenuItem nome="Tabela" h="5"
                                    classe="fa fa-table fa-2x"
                                    mudar={props.table}
                                    />
                            </div>
                        </>
                    )}
                    <div className="col-6 d-flex justify-content-around">
                        {localStorage.departamento === "Limpeza Lab" ? (
                            <div className="col-2 d-flex flex-row justify-content-end align-items-end">
                                <i className="fa fa-search fa-2x text-danger" />
                            </div>) : (
                            <div className="col-2 d-flex flex-row justify-content-end align-items-center">
                                <i className="fa fa-search fa-2x text-danger" />
                            </div>
                        )}
                        <div className="col-3">
                            <Entrada modelo="select"
                                texto="Mês:"
                                clst="h3"
                                nome="mes"
                                value={filtro.mes}
                                mudou={(e) => MudarEstadoFriltro(e)}
                                classe='form-select'
                            >
                                <option selected>Todos</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </Entrada>
                        </div>
                        <div className="col-3">
                        <Entrada modelo="select"
                                texto="Ano:"
                                clst="h3"
                                nome="ano"
                                value={filtro.ano}
                                mudou={(e) => MudarEstadoFriltro(e)}
                                classe='form-select'
                            >
                                <option selected>Todos</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </Entrada>
                        </div>
                        {localStorage.departamento === "Limpeza Lab" ? (
                            <div className="col-2 d-flex align-items-end">
                                <Botao className="btn btn-success fw-bold" onClick={() => Buscar()}>Buscar</Botao>
                            </div>) : (
                            <div className="col-2 d-flex align-items-center">
                                <Botao className="btn btn-success fw-bold" onClick={() => Buscar()}>Buscar</Botao>
                            </div>)
                        }
                    </div>
                </div>
                <div className='row mt-4'>
                    <TabelaMeses listar={listar} />
                </div>
            </>
        )
}