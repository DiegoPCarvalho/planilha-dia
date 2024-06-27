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