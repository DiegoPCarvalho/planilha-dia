export default class CondicionalGraficos {
    dadosPro(tabela, dadoTotal, dadoLimp) {
        dadoTotal.push(tabela.OS)
        if ("Limpeza" === tabela.Servico) {
            dadoLimp.push(tabela.OS)
        }
    }

    dadosPorDia(tabela, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31) {
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

    buscarDadosPorMesMeta(tabela, mJan, mFev, mMar, mAbr, mMai, mJun, mJul, mAgo, mSet, mOut, mNov, mDez) {
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

    dadoServico(tabela, servico) {
        servico.push(tabela.Servico)
    }

    dadoTecnico(tabela, dadosTec) {
        if (("Diogo Selmini" !== tabela.Tecnico) && ("Lucas Felician" !== tabela.Tecnico) && ("Allan Zulino" !== tabela.Tecnico) && ("Marcio" !== tabela.Tecnico) && (undefined !== tabela.Tecnico)) {
            dadosTec.push(tabela.Tecnico)
        }
    }

    dadoEquipamento(tabela, dadosEquip) {
        dadosEquip.push(tabela.Equipamento)
    }

    dadoPlaca(tabela, dadosP) {
        if(("..." !== tabela.Placa) && ('' !== tabela.Placa) && ("Recuperado" !== tabela.Placa) && (undefined !== tabela.Placa)){
            dadosP.push(tabela.Placa)
        }
    }

    dadoAvulsoCont(tabela, avulso, contrato, contratos) {
        if("Avulso" === tabela.Contrato){
            avulso.push(tabela.OS)
        }else
        if(("Avulso" !== tabela.Contrato) && (undefined !== tabela.Contrato) && ("Contrato Shopee" !== tabela.Contrato)){
            contrato.push(tabela.OS)
            contratos.push(tabela.Contrato)
        }
    }

    dadoProjecao(tabela, dadoJan, dadoFev, dadoMar, dadoAbr, dadoMai, dadoJun, dadoJul, dadoAgo, dadoSet, dadoOut, dadoNov, dadoDez ) {
        if(1 === tabela.Mes){
            dadoJan.push(tabela.OS)
        }
        if(2 === tabela.Mes){
            dadoFev.push(tabela.OS)
        }
        if(3 === tabela.Mes){
            dadoMar.push(tabela.OS)
        }
        if(4 === tabela.Mes){
            dadoAbr.push(tabela.OS)
        }
        if(5 === tabela.Mes){
            dadoMai.push(tabela.OS)
        }
        if(6 === tabela.Mes){
            dadoJun.push(tabela.OS)
        }
        if(7 === tabela.Mes){
            dadoJul.push(tabela.OS)
        }
        if(8 === tabela.Mes){
            dadoAgo.push(tabela.OS)
        }
        if(9 === tabela.Mes){
            dadoSet.push(tabela.OS)
        }
        if(10 === tabela.Mes){
            dadoOut.push(tabela.OS)
        }
        if(11 === tabela.Mes){
            dadoNov.push(tabela.OS)
        }
        if(12 === tabela.Mes){
            dadoDez.push(tabela.OS)
        }
    }

}