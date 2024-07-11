import PuxarDados from "./estrutura"

export async function buscarFila(){
    const obj = {
        dadoLista: [],
        dadoIni: [],
        dadoFim: []
    }
    
    const data = new Date()
    
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()

    const tabela = await PuxarDados("FilaTecnica")
    const geral = await PuxarDados("Geral")


    tabela.map(registro => {
        if((registro.Estagio === "Enviado") && (localStorage.usuario === registro.Tecnico)){
            obj.dadoLista.push({ ...registro })
        }else if((registro.Estagio === "Iniciado") && (localStorage.usuario === registro.Tecnico)){
            obj.dadoIni.push({ ...registro })
        }
    })

    geral.map(registro => {
        if ((localStorage.usuario === registro.Tecnico) && (ano === registro.Ano) && (mes === registro.Mes) && (dia === registro.Dia) && (registro.Estagio === 'Finalizado')) {
            obj.dadoFim.push({ ...registro })
        }
    })
    
    return obj
}

export async function buscarGeral(mes, ano){
    const geral = await PuxarDados("Geral")
    let dado = []

    geral.map(registro => {
        if((localStorage.usuario === registro.Tecnico) && (+ano === registro.Ano) && (+mes === registro.Mes)){
            dado.push({ ...registro })
        }
    })

    return dado
}

export async function BuscarForm(){
    const bancos = {
        listEquip: [],
        listServ: [],
        listCont: [],
        listarCosmos: [],
    }

    const Equip = await PuxarDados("Equipamento")
    const Serv = await PuxarDados("Servico")
    const Cont = await PuxarDados("Contrato")

    Equip.map(registro => {
        bancos.listEquip.push({...registro})
    })

    Serv.map(registro => {
        if(registro.nome === "Laudo" || registro.nome === "Manutenção Concluída" || registro.nome === "Suporte Remoto"
            || registro.nome === "Confecção de Cabos" || registro.nome === "Recuperação de Placa"
            || registro.nome === "Limpeza" || registro.nome === "Chamado On-Site" || registro.nome === "Revisão de Manutenção"
         ){
        bancos.listServ.push({...registro})
        }
    })

    Cont.map(registro => {
        bancos.listCont.push({...registro})
    })
    

    return bancos
}