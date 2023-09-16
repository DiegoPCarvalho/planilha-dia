import React from "react";

//TECNICOS
import imgDiegoC from '../../../../Assets/imagensTecnicos/DIEGO CARVALHO.png';
import imgNata from '../../../../Assets/imagensTecnicos/NATANAEL MILTON.png';
import imgMateus from '../../../../Assets/imagensTecnicos/MATEUS DOVAL.png';
import imgGabriel from '../../../../Assets/imagensTecnicos/GABRIEL KAIQUE.png';
import imgBruno from '../../../../Assets/imagensTecnicos/BRUNO BEDANI (1).png';
import imgVinicius from '../../../../Assets/imagensTecnicos/VINICIUS GOMES .png';
import imgDiegoA from '../../../../Assets/imagensTecnicos/DIEGO ALMEIDA.png';
import imgMarcio from "../../../../Assets/Imgs/user.png";
import imgLogoIcon from '../../../../Assets/Imgs/logoIcon.png'

const initialState = {
    imagem: "Todos"
}


export default class FotoTecnico extends React.Component {

    state = { ...initialState }

    componentWillMount(){
        this.buscarFoto(this.state.imagem);
    }

    buscarFoto(){
            if (this.props.Tecnico === "Diego Carvalho") {
                return this.setState({
                    imagem: imgDiegoC
                })
            }
            if (this.props.Tecnico === "Natanael Silva Lima") {
                return this.setState({
                    imagem: imgNata
                })
            }
            if (this.props.Tecnico === "Mateus Doval") {
                return this.setState({
                    imagem: imgMateus
                })
            }
            if (this.props.Tecnico === "Gabriel Kaique") {
                return this.setState({
                    imagem: imgGabriel
                })
            }
            if (this.props.Tecnico === "Bruno Bedani") {
                return this.setState({
                    imagem: imgBruno
                })
            }
            if (this.props.Tecnico === "Vinicius Gomes") {
                return this.setState({
                    imagem: imgVinicius
                })
            }
            if (this.props.Tecnico === "Diego Almeida") {
                return this.setState({
                    imagem: imgDiegoA
                })
            }
            if (this.props.Tecnico === "Cida Zani") {
                return this.setState({
                    imagem: imgMarcio
                })
            }
            if (this.props.Tecnico === "Allan Zulino") {
                return this.setState({
                    imagem: imgMarcio
                })
            }
            if (this.props.Tecnico === "Marcio") {
                return this.setState({
                    imagem: imgMarcio
                })
            }
            if (this.props.Tecnico === "Cauã Barbosa") {
                return this.setState({
                    imagem: imgMarcio
                })
            }
            if (this.props.Tecnico === "Todos") {
                return this.setState({
                    imagem: imgLogoIcon
                })
            }else {
                return this.setState({
                    imagem: imgLogoIcon
                })
            }
    }

    
    render(){
        return(
            <>
                 <img src={this.state.imagem} alt="" className='rounded-circle' style={{ height: 150, width: 100 }} />
            </>
        )
    }
}