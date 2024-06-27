import React from "react";
import FilaTecnica from './FilaTecnica/FilaTecnica';
import Formulario from './Form/Formulario';
import Tabela from './Table/Tabela';
import RegistroAntigo from './RegAntrigo/RegistroAntigo';

const initialState = {
    mudar: 'fila'
}

export default class IndexHomeAtividade extends React.Component {
    
    state = { ...initialState }

    componentDidMount() {
        if (localStorage.departamento == 'Limpeza Lab') {
            return this.setState({ mudar: 'form' })
        }
    }

    //#region render setor
    renderLimpeza() {
        return this.state.mudar === 'form' ?
            <Formulario
                table={() => this.setState({ mudar: 'table' })}
                old={() => this.setState({ mudar: 'antiga' })}
            />
            : this.state.mudar === 'table' ?
                <Tabela
                    form={() => this.setState({ mudar: 'form' })}
                    old={() => this.setState({ mudar: 'antiga' })}
                /> : <RegistroAntigo
                    table={() => this.setState({ mudar: 'table' })}
                    form={() => this.setState({ mudar: 'form' })}
                />
    }

    renderLabo() {
        return this.state.mudar === 'fila' ?
            <FilaTecnica
                form={() => this.setState({ mudar: 'form' })}
                table={() => this.setState({ mudar: 'table' })}
                old={() => this.setState({ mudar: 'antiga' })}
            /> : this.state.mudar === 'form' ? <Formulario
                        fila={() => this.setState({ mudar: 'fila' })}
                        table={() => this.setState({ mudar: 'table' })}
                        old={() => this.setState({ mudar: 'antiga' })}
                    />
                : this.state.mudar === 'table' ?
                    <Tabela 
                        fila={() => this.setState({ mudar: 'fila' })}
                        form={() => this.setState({ mudar: 'form' })}
                        old={() => this.setState({ mudar: 'antiga' })}
                    /> : <RegistroAntigo 
                        fila={() => this.setState({ mudar: 'fila' })}
                        form={() => this.setState({ mudar: 'form' })}
                        table={() => this.setState({ mudar: 'table' })}
                    />
    }
    //#endregion


    render() {
        return localStorage.departamento === 'Limpeza Lab' ? this.renderLimpeza() : this.renderLabo()
    }
}