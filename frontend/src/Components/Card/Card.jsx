import Card from 'react-bootstrap/Card';

export default function cardGeral(props) {
    return (
        <>
            <Card border="success" style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title><div>
                    <i className="fa fa-user fw-bold"></i>: {props.nomeUsuario}
                    </div>
                    </Card.Title>
                    <Card.Text>
                        <div>
                            <div className="row mt-2">
                                <div className="col-12 ">
                                    <i className='fa fa-envelope fw-bold'></i><span className='fw-bold'>:</span> {props.email}
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 ">
                                <i className="fa fa-cube fw-bold"></i><span className='fw-bold'>:</span> {props.departamento}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6 d-flex justify-content-end">
                                    {props.alterar}
                                    {props.deletar}
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

