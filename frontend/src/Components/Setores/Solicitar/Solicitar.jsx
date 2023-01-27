import React from 'react';

export default class Solicitar extends React.Component {

    formularioGeral(){
        return(
            <form className="row g-3" action="javascript:myFunction(); return false;">
                
            </form>
        )
    }

    render() {
        return (
            <div className="container-fluid mt-3">
            <div className="row mt-2">
                <div className="col-1">

                    <i class="fa fa-address-card-o fa-5x"></i>
                </div>
                <div className="col-11 justify-content-center d-flex align-items-center">
                    <div className="d-flex justify-content-center">
                        <h3 class="p-2 fw-bold bg-dark text-light rounded">Solicitar Material</h3>
                    </div>
                </div>

            </div>
            <div id="Formulario" className='mt-3'>
                {/* {this.formularioGeral()} */}
                FORMULARIO
            </div>
        </div>
        )
    }
}