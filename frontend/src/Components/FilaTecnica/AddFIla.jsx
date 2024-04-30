import React from "react";
import axios from "axios";
import Url2 from '../Url/Url2';
import Url from '../Url/Url';

const initialState = {
    banco: [],
    list: [],
    Atividade: {
        id: '',
        OS: '',
        Cliente: '',
        Equipamento: '',
        NS: '',
        TipoOS: ''
    }
}

const baseUrl = Url2("AguardandoVistoria");
const bancoUrl = Url("FilaTecnica")

export default class AddFila extends React.Component {

    state = { ...initialState }

    componentDidMount() {
        this.buscarBanco()
        this.buscarList()
    }

    buscarBanco() {
    axios(baseUrl).then(resp => {
            const tab = resp.data
            let dados = []

            tab.map(registro => {dados.push({...registro})})

            this.setState({banco: dados})
         })
    }
    
    buscarList(){
        axios(bancoUrl).then(resp => {
            const tab = resp.data
            let dados = []

            tab.map(registro => {dados.push({...registro})})

            this.setState({list: dados})
         })
    }

    saves(Atividade) {
        axios.post(bancoUrl, Atividade)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ Atividade: initialState.Atividade, list})
            })
    }

    mostrarBanco() {
        const banco = this.state.banco
        const list = this.state.list
        const lista = list.map(registro => registro.OS)
        
        banco.map(reg => {
           if(lista.find(dado => dado === reg.OS)){
                
           }
           else{
               this.saves(reg)
           }
        })
    }


    getUpdatedList(Atividade, add = true) {
        const list = this.state.list.filter(a => a.id !== Atividade.id)
        if (add) list.push(Atividade)
        return list
    }


    render() {
        return (
            <div className="row">
                <div className='col-3 mb-3 d-flex justify-content-start align-items-center'>
                    <i className="fa fa-list-alt fa-4x" style={{ cursor: 'pointer' }} onClick={this.props.mudar}></i>
                    <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                    <span className='fw-bold h4 mt-2'>Fila Montada</span>
                </div>
                <div className="col-3"><button onClick={() => this.mostrarBanco()}>mostrar</button></div>
            </div>
        )
    }
}