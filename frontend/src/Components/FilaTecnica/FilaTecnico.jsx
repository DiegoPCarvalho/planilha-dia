import React from "react";

export default class FilaTecnica extends React.Component {
    render() {
        return (
            <div className="row">
                <div className='col-3 mb-3 d-flex justify-content-start align-items-center'>
                        <i className="fa fa-cart-plus fa-4x" style={{ cursor: 'pointer' }} onClick={this.props.mudar}></i>
                        <i className='fa fa-arrow-left mx-3 fa-2x text-danger'></i>
                        <span className='fw-bold h4 mt-2'>Add Fila</span>
                    </div>
            </div>
        )
    }
}