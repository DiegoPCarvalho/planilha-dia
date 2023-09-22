import React from 'react';

//TECNICOS
import imgDiegoC from '../../../../Assets/imagensTecnicos/DIEGO CARVALHO.png';
import imgNata from '../../../../Assets/imagensTecnicos/NATANAEL MILTON.png';
import imgMateus from '../../../../Assets/imagensTecnicos/MATEUS DOVAL.png';
import imgGabriel from '../../../../Assets/imagensTecnicos/GABRIEL KAIQUE.png';
import imgBruno from '../../../../Assets/imagensTecnicos/BRUNO BEDANI (1).png';
import imgVinicius from '../../../../Assets/imagensTecnicos/VINICIUS GOMES .png';
import imgDiegoA from '../../../../Assets/imagensTecnicos/DIEGO ALMEIDA.png';
import imgMarcio from "../../../../Assets/Imgs/user.png";
import imgLogoIcon from '../../../../Assets/Imgs/logoIcon.png';
import imgCaua from "../../../../Assets/imagensTecnicos/caua_bispo.jpg";
import imgMarlon from "../../../../Assets/imagensTecnicos/marlon.jpg";
import imgAlisson from "../../../../Assets/imagensTecnicos/alisson.jpg";
import imgAnderson from "../../../../Assets/imagensTecnicos/anderson.jpg";


export default class FotoTecnico extends React.Component {
    render(){
        return(
            <img src={this.props.Tecnico} alt="" className='rounded-circle' style={{ height: 150, width: 100}} />
        )
    }
}

export function BuscarFoto(tecnico){
    if(tecnico === "Todos")return imgLogoIcon
    else if(tecnico === "Diego Carvalho")return imgDiegoC
    else if (tecnico === "Natanael Silva Lima") return imgNata
    else if (tecnico === "Mateus Doval") return imgMateus
    else if (tecnico === "Gabriel Kaique") return imgGabriel
    else if (tecnico === "Bruno Bedani") return  imgBruno
    else if (tecnico === "Vinicius Gomes") return imgVinicius
    else if (tecnico === "Diego Almeida") return imgDiegoA
    else if (tecnico === "Cauã Barbosa") return imgCaua
    else if (tecnico === "Alisson Assis") return imgAlisson
    else if (tecnico === "Marlon Fidelis") return imgMarlon
    else if (tecnico === "Anderson Filho") return imgAnderson
    else return imgMarcio
}