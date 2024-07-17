import React, { useEffect } from "react";
import FilaTecnica from './FilaTecnica/FilaTecnica';
import Formulario from './Form/Formulario';
import Tabela from './Table/Tabela';
import RegistroAntigo from './RegAntrigo/RegistroAntigo';
import UseAppData from "../../data/hook/UseAppData";

export default function IndexHomeAtividade(){
    const { mudar, mudarTela, buscarDadosCosmos } = UseAppData();

    useEffect(() => {
        if (localStorage.departamento == 'Limpeza Lab') {
            return mudarTela('form')
        }
        buscarDadosCosmos()
    },[])
    
    //#region render setor
    function renderLimpeza() {
        return mudar === 'form' ?
            <Formulario
                table={() => mudarTela('table')}
                old={() => mudarTela('antiga')}
            />
            : mudar === 'table' ?
                <Tabela
                    form={() => mudarTela('form')}
                    old={() => mudarTela('antiga')}
                /> : <RegistroAntigo
                    table={() => mudarTela('table')}
                    form={() => mudarTela('form')}
                />
    }

    function renderLabo() {
        return mudar === 'fila' ?
            <FilaTecnica
                form={() => mudarTela('form')}
                table={() => mudarTela('table')}
                old={() => mudarTela('antiga')}
            /> : mudar === 'form' ? <Formulario
                        fila={() => mudarTela('fila')}
                        table={() => mudarTela('table')}
                        old={() => mudarTela('antiga')}
                    />
                : mudar === 'table' ?
                    <Tabela 
                        fila={() => mudarTela('fila')}
                        form={() => mudarTela('form')}
                        old={() => mudarTela('antiga')}
                    /> : <RegistroAntigo 
                        fila={() => mudarTela('fila')}
                        form={() => mudarTela('form')}
                        table={() => mudarTela('table')}
                    />
    }
    //#endregion


        return localStorage.departamento === 'Limpeza Lab' ? renderLimpeza() : renderLabo()
}