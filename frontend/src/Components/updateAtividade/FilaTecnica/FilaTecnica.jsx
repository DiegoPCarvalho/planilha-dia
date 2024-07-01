import React from "react";
import MenuItem from '../comp/MenuItem';
import Grade from "./Grade";
import UseAppData from "../../../data/hook/UseAppData";
import { useEffect } from "react";
import ModalProblem from "../../Modal/ModalProblem";
import ModalToDo from "../../Modal/ModalToDo";
import FormularioProblema from "./FormProblem";
import FormularioFinal from "./FormFinal";


// export default class FilaTecnica extends React.Component {

//     state = { ...initialState }

//     componentDidMount(){
//         this.buscar()
//     }

//     async buscar(){
//         const banco = await buscarFila()

//         return this.setState({
//             listarFila: banco.dadoLista,
//             listIni: banco.dadoIni,
//             listFim: banco.dadoFim
//         })
//     }

//     render() {
//         return (
//             <>
//                 <div className="row">
//                     <div className="col-3 d-flex align-items-center">
//                         <i className="fa fa-list-alt fa-4x"></i>
//                     </div>
//                     <div className="col-6 d-flex justify-content-center align-items-center">
//                         <i className="fa fa-retweet fa-3x btn btn-success" style={{ cursor: 'pointer' }} onClick={() => this.buscar()} />
//                     </div>
//                     <div className="col-3 flex-column d-flex justify-content-end align-items-end">
//                         <MenuItem direita nome="Formulário" h="6"
//                             classe="fa fa-address-card fa-2x"
//                             mudar={this.props.form}
//                         />
//                         <MenuItem direita nome="Tabela" h="6"
//                             classe="fa fa-table fa-2x"
//                             mudar={this.props.table}
//                         />
//                         <MenuItem direita nome="Reg. Antigo"
//                             classe="fa fa-database fa-2x" h="6"
//                             mudar={this.props.old}
//                         />
//                     </div>
//                 </div>
//                 <div className="row mt-4">
//                     <Grade Fila={this.state.listarFila} Inicio={this.state.listIni} Fim={this.state.listFim}/>

//                 </div>
//             </>
//         )
//     }
// }


export default function FilaTecnica(props) {
    const { state, novo, inicio, 
        busca, problem, modalProblem, 
        ObsProblem, mudarCampoProblem, sendProblem, 
        mudarCampoFinal, ObsFinal, modalFinal, finish,
        sendFinish } = UseAppData();

    useEffect(() => {
        if (novo === 1) {
            busca()
            inicio()
        } else {
            busca()
        }
    }, [novo])

    
    return (
        <>
            <div className="row">
                <div className="col-3 d-flex align-items-center">
                    <i className="fa fa-list-alt fa-4x"></i>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <i className="fa fa-retweet fa-3x btn btn-success" style={{ cursor: 'pointer' }} onClick={() => busca()} />
                </div>
                <div className="col-3 flex-column d-flex justify-content-end align-items-end">
                    <MenuItem direita nome="Formulário" h="6"
                        classe="fa fa-address-card fa-2x"
                        mudar={props.form}
                    />
                    <MenuItem direita nome="Tabela" h="6"
                        classe="fa fa-table fa-2x"
                        mudar={props.table}
                    />
                    <MenuItem direita nome="Reg. Antigo"
                        classe="fa fa-database fa-2x" h="6"
                        mudar={props.old}
                    />
                </div>
            </div>
            <div className="row mt-4">
                <Grade Fila={state.listarFila} Inicio={state.listIni} Fim={state.listFim} />
            </div>
            <div>
                <ModalProblem modal={modalProblem} close={() => problem()} nome='Problema'
                    Relatorio={<FormularioProblema
                        valor={ObsProblem} mudou={(e) => mudarCampoProblem(e.target.value)}
                        onClick={() => sendProblem()}

                    />} />
                <ModalToDo modal={modalFinal} close={() => finish()} nome="Atividade" relatorio={<FormularioFinal
                        valor={ObsFinal} mudou={(e) => mudarCampoFinal(e.target.value)}
                        onClick={() => sendFinish()}

                    />} />
            </div>
        </>
    )
}