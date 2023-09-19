import React from 'react';
import ModalMeta from '../../../Modal/ModalTecnico';
import Grafico from '../../../Graficos/Grafico';
import PuxarDados from '../Estrutura/PuxarDados';


export default class Meta extends React.Component {
    render() {
        return (
            <>
                <ModalMeta
                    corModal="warning" nomeBotao="Meta" tamanho="lg"
                    classe='h4 fw-bold'
                    Relatorio={
                        <Grafico tipo="column" titulo="Meta"
                            formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                            texto='{point.y:1f}'
                            nomeSerie="Meta"
                            cor={true}
                            dado={[
                                { name: "Atividade", y: this.props.total},
                                { name: "Meta", y: this.props.meta },
                            ]} />
                        }
                />
            </>
        )
    }
}

export async function BuscarDadosMeta(tecnico, dia, mes, ano){

    const tabela = await PuxarDados("Meta")

    let mJan = []
    let mFev = []
    let mMar = []
    let mAbr = []
    let mMai = []
    let mJun = []
    let mJul = []
    let mAgo = []
    let mSet = []
    let mOut = []
    let mNov = []
    let mDez = []   

    for(let i = 0; i < tabela.length; i++){
        if((tecnico === `${tabela[i].Tecnico}`)&&(dia === "Todos")&& (mes === "Todos") && (ano === `${tabela[i].Ano}`)){
           await BuscarDadosPorMesMeta(tabela[i], mJan, mFev, mMar, mAbr, mMai, mJun, mJul, mAgo, mSet, mOut, mNov, mDez)
        }else
        if((tecnico === `${tabela[i].Tecnico}`)&&(dia === "Todos")&& (mes === `${tabela[i].Mes}`) && (ano === `${tabela[i].Ano}`)){
            await BuscarDadosPorMesMeta(tabela[i], mJan, mFev, mMar, mAbr, mMai, mJun, mJul, mAgo, mSet, mOut, mNov, mDez)
        }
           
    }

    const totalMeta = parseInt(mJan.length > 0 ? mJan[0].M : 0) + parseInt(mFev.length > 0 ? mFev[0].M : 0) +
    parseInt(mMar.length > 0 ? mMar[0].M : 0) + parseInt(mAbr.length > 0 ? mAbr[0].M : 0) + parseInt(mMai.length > 0 ? mMai[0].M : 0) +
    parseInt(mJun.length > 0 ? mJun[0].M : 0) + parseInt(mJul.length > 0 ? mJul[0].M : 0) + parseInt(mAgo.length > 0 ? mAgo[0].M : 0) +
    parseInt(mSet.length > 0 ? mSet[0].M : 0) + parseInt(mOut.length > 0 ? mOut[0].M : 0) + parseInt(mNov.length > 0 ? mNov[0].M : 0) +
    parseInt(mDez.length > 0 ? mDez[0].M : 0)

    const retorno = 0


    if(tecnico === "Todos"){
        return retorno
    }else if ((tecnico !== "Todos") && (ano !== "Todos")){
        return totalMeta
    }
}

function BuscarDadosPorMesMeta(tabela, mJan, mFev, mMar, mAbr, mMai, mJun, mJul, mAgo, mSet, mOut, mNov, mDez){
    if (1 === tabela.Mes) {
        mJan.push({
            M: tabela.Meta
        })
    }
    if (2 === tabela.Mes) {
        mFev.push({
            M: tabela.Meta
        })
    }
    if (3 === tabela.Mes) {
        mMar.push({
            M: tabela.Meta
        })
    }
    if (4 === tabela.Mes) {
        mAbr.push({
            M: tabela.Meta
        })
    }
    if (5 === tabela.Mes) {
        mMai.push({
            M: tabela.Meta
        })
    }
    if (6 === tabela.Mes) {
        mJun.push({
            M: tabela.Meta
        })
    }
    if (7 === tabela.Mes) {
        mJul.push({
            M: tabela.Meta
        })
    }
    if (8 === tabela.Mes) {
        mAgo.push({
            M: tabela.Meta
        })
    }
    if (9 === tabela.Mes) {
        mSet.push({
            M: tabela.Meta
        })
    }
    if (10 === tabela.Mes) {
        mOut.push({
            M: tabela.Meta
        })
    }
    if (11 === tabela.Mes) {
        mNov.push({
            M: tabela.Meta
        })
    }
    if (12 === tabela.Mes) {
        mDez.push({
            M: tabela.Meta
        })
    }
}