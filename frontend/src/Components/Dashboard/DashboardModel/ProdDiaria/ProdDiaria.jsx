import React from 'react';
import ModalProd from '../../../Modal/ModalTecnico';
import PuxarDados from '../Estrutura/PuxarDados';
import Grafico from '../../../Graficos/Grafico';

export default class ProdDiaria extends React.Component {
    render() {
        return (
            <>
                <ModalProd corModal="secondary" nomeBotao="Prod. Diaria" tamanho="xl"
                    classe='h4 fw-bold'
                    Relatorio={
                        <Grafico tipo="column" titulo="Produtividade por Dia"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Dia"
                            dado={this.props.dadosDia}
                        />
                    }
                />
            </>
        )
    }
}

export async function BuscarDadosProdDia(tecnico, dia, mes, ano) {
    const tabela = await PuxarDados("Geral")
    let d1 = []
    let d2 = []
    let d3 = []
    let d4 = []
    let d5 = []
    let d6 = []
    let d7 = []
    let d8 = []
    let d9 = []
    let d10 = []
    let d11 = []
    let d12 = []
    let d13 = []
    let d14 = []
    let d15 = []
    let d16 = []
    let d17 = []
    let d18 = []
    let d19 = []
    let d20 = []
    let d21 = []
    let d22 = []
    let d23 = []
    let d24 = []
    let d25 = []
    let d26 = []
    let d27 = []
    let d28 = []
    let d29 = []
    let d30 = []
    let d31 = []

    for (let i = 0; i < tabela.length; i++) {
        //Todos
        if((tecnico === "Todos")&&(dia === "Todos")&& (mes === "Todos") && (ano === "Todos")){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }else
        if((tecnico === "Todos")&&(dia === "Todos")&& (mes === "Todos") && (ano === `${tabela[i].Ano}`)){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }else
        if((tecnico === "Todos")&&(dia === "Todos")&& (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }else
        if((tecnico === "Todos")&&(dia === `${tabela[i].Dia}`)&& (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }else
        //Tecnico
        if((tecnico === `${tabela[i].Tecnico}`)&&(dia === "Todos")&& (mes === "Todos") && (ano === "Todos")){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }else
        if((tecnico === `${tabela[i].Tecnico}`)&&(dia === "Todos")&& (mes === "Todos") && (ano === `${tabela[i].Ano}`)){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }else
        if((tecnico === `${tabela[i].Tecnico}`)&&(dia === "Todos")&& (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }else
        if((tecnico === `${tabela[i].Tecnico}`)&&(dia === `${tabela[i].Dia}`)&& (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){
            DadosPorDia(tabela[i], d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
        }

    }

    const dadosProdDia = [
        { name: "1", y: d1.length },
        { name: "2", y: d2.length },
        { name: "3", y: d3.length },
        { name: "4", y: d4.length },
        { name: "5", y: d5.length },
        { name: "6", y: d6.length },
        { name: "7", y: d7.length },
        { name: "8", y: d8.length },
        { name: "9", y: d9.length },
        { name: "10", y: d10.length },
        { name: "11", y: d11.length },
        { name: "12", y: d12.length },
        { name: "13", y: d13.length },
        { name: "14", y: d14.length },
        { name: "15", y: d15.length },
        { name: "16", y: d16.length },
        { name: "17", y: d17.length },
        { name: "18", y: d18.length },
        { name: "19", y: d19.length },
        { name: "20", y: d20.length },
        { name: "21", y: d21.length },
        { name: "22", y: d22.length },
        { name: "23", y: d23.length },
        { name: "24", y: d24.length },
        { name: "25", y: d25.length },
        { name: "26", y: d26.length },
        { name: "27", y: d27.length },
        { name: "28", y: d28.length },
        { name: "29", y: d29.length },
        { name: "30", y: d30.length },
        { name: "31", y: d31.length },
    ]

    return dadosProdDia
}

function DadosPorDia(tabela, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31) {
    if (1 === tabela.Dia) {
        d1.push(tabela.OS)
    }
    if (2 === tabela.Dia) {
        d2.push(tabela.OS)
    }
    if (3 === tabela.Dia) {
        d3.push(tabela.OS)
    }
    if (4 === tabela.Dia) {
        d4.push(tabela.OS)
    }
    if (5 === tabela.Dia) {
        d5.push(tabela.OS)
    }
    if (6 === tabela.Dia) {
        d6.push(tabela.OS)
    }
    if (7 === tabela.Dia) {
        d7.push(tabela.OS)
    }
    if (8 === tabela.Dia) {
        d8.push(tabela.OS)
    }
    if (9 === tabela.Dia) {
        d9.push(tabela.OS)
    }
    if (10 === tabela.Dia) {
        d10.push(tabela.OS)
    }
    if (11 === tabela.Dia) {
        d11.push(tabela.OS)
    }
    if (12 === tabela.Dia) {
        d12.push(tabela.OS)
    }
    if (13 === tabela.Dia) {
        d13.push(tabela.OS)
    }
    if (14 === tabela.Dia) {
        d14.push(tabela.OS)
    }
    if (15 === tabela.Dia) {
        d15.push(tabela.OS)
    }
    if (16 === tabela.Dia) {
        d16.push(tabela.OS)
    }
    if (17 === tabela.Dia) {
        d17.push(tabela.OS)
    }
    if (18 === tabela.Dia) {
        d18.push(tabela.OS)
    }
    if (19 === tabela.Dia) {
        d19.push(tabela.OS)
    }
    if (20 === tabela.Dia) {
        d20.push(tabela.OS)
    }
    if (21 === tabela.Dia) {
        d21.push(tabela.OS)
    }
    if (22 === tabela.Dia) {
        d22.push(tabela.OS)
    }
    if (23 === tabela.Dia) {
        d23.push(tabela.OS)
    }
    if (24 === tabela.Dia) {
        d24.push(tabela.OS)
    }
    if (25 === tabela.Dia) {
        d25.push(tabela.OS)
    }
    if (26 === tabela.Dia) {
        d26.push(tabela.OS)
    }
    if (27 === tabela.Dia) {
        d27.push(tabela.OS)
    }
    if (28 === tabela.Dia) {
        d28.push(tabela.OS)
    }
    if (29 === tabela.Dia) {
        d29.push(tabela.OS)
    }
    if (30 === tabela.Dia) {
        d30.push(tabela.OS)
    }
    if (31 === tabela.Dia) {
        d31.push(tabela.OS)
    }
}
