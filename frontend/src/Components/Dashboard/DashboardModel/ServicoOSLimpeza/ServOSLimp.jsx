import React from 'react';
import CardOS from '../../../Card/CardGD';
import PuxarDados from '../Estrutura/PuxarDados';


export default class ServOsLimp extends React.Component {

    render() {
        return (
            <>
                <div className="col-3  d-flex align-items-center justify-content-center"> <CardOS bg="dark" nomeTitulo="Total OS" dado={this.props.TotalOS} icone="clone" tipoTexto="text-light" /> </div>
                <div className="col-3  d-flex align-items-center justify-content-center"> <CardOS bg="success" nomeTitulo="Total Serviço" dado={this.props.TotalServico} icone="briefcase" tipoTexto="text-light" /></div>
                <div className="col-3  d-flex align-items-center justify-content-center"> <CardOS bg="primary" nomeTitulo="Limpeza" dado={this.props.Limpeza} icone="paint-brush" tipoTexto="text-light" /></div>
            </>
        )
    }
}

export async function BuscarDados(tecnico, dia, mes, ano, modo){
    const tabela = await PuxarDados("Geral")
    
        let geral = []
    
        for(let i = 0; i < tabela.length; i++){
           await EliminarIF(tecnico, dia, mes, ano, modo, tabela[i], geral)
        }

        if((modo === "Total Servico") || (modo === "Limpeza")){
            return geral.length
        }
        else if(modo === "Total OS"){
            const osSemRep = [...new Set(geral)]
            return osSemRep.length
        }
}

// function EliminarIF(tabela, geral){
//     if(modo === "Total Servico"){
//         //Todos
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela[i].OS)}
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}

//         //tecnico
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela[i].OS)}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//     }
//     if(modo === "Limpeza"){
//         //Todos
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}
//         if((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}

//         //tecnico
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){if("Limpeza" === tabela[i].Servico){geral.push(tabela[i].OS)}}
//     }
//     if(modo === "Total OS"){
//         //Todos
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela[i].OS)}
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === "Todos") && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}

//         //tecnico
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela[i].OS)}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === "Todos") && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//         if((tecnico === `${tabela[i].Tecnico}`) && (dia === `${tabela[i].Dia}`) && (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){geral.push(tabela[i].OS)}
//     }
// }

function EliminarIF(tecnico, dia, mes, ano, modo, tabela, geral){
    if(modo === "Total Servico"){
        //Todos
        if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela.OS)}
        if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === "Todos") && (dia === `${tabela.Dia}`) && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}

        //tecnico
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela.OS)}
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === `${tabela.Tecnico}`) && (dia === `${tabela.Dia}`) && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
    }
    if(modo === "Limpeza"){
        //Todos
        if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}
        if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela.Ano}`)){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}
        if((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}
        if((tecnico === "Todos") && (dia === `${tabela.Dia}`) && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}

        //tecnico
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela.Ano}`)){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}
        if((tecnico === `${tabela.Tecnico}`) && (dia === `${tabela.Dia}`) && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){if("Limpeza" === tabela.Servico){geral.push(tabela.OS)}}
    }
    if(modo === "Total OS"){
        //Todos
        if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela.OS)}
        if((tecnico === "Todos") && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === "Todos") && (dia === "Todos") && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === "Todos") && (dia === `${tabela.Dia}`) && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}

        //tecnico
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === "Todos")){geral.push(tabela.OS)}
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === "Todos") && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === `${tabela.Tecnico}`) && (dia === "Todos") && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
        if((tecnico === `${tabela.Tecnico}`) && (dia === `${tabela.Dia}`) && (mes === `${tabela.Mes}`) && (ano === `${tabela.Ano}`)){geral.push(tabela.OS)}
    }
}