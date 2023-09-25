export default function BuscarTec(tabela, dados){
    for (let i = 0; i < tabela.length; i++) {
        if (tabela[i].departamento === "Laboratório") { dados.push({ nome: tabela[i].nomeCompleto }) }
    }
}