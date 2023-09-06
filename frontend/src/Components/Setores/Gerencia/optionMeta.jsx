import axios from 'axios';
import Url from '../../Url/Url';

const baseUrl3 = Url("LoginUsuario");

export default function OptionsTec(){
    const optionTec = []

    async function BuscarTec() {
        const tec = await axios(baseUrl3).then(resp => resp.data)

        let dadosTec = []

        for (let i = 0; i < tec.length; i++) {
            if ("Laborátorio" === tec[i].departamento) {
                dadosTec.push({
                    nome: tec[i].nomeCompleto
                })
            }
        }

        return this.setState ({
            optionTec: dadosTec
        })
    }

   function tecnicos(){
      return this.state.optionTec.map(Nome => {
        return (
            <option>{Nome.nome}</option>
        )
      })
    }
    return (
        <>
            {tecnicos}
        </>
    )
} 