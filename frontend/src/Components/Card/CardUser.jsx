import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function cardUser(props) {
    return (
        <Card className="text-center" border="success">
            <Card.Body>
                <Card.Title><div>
                    <i className="fa-3x fa fa-user fw-bold"></i>: <span className='fw-bold display-6'>{props.nomeUsuario}</span>
                </div>
                </Card.Title>
                <Card.Text>
                    <div className='p-4'>
                        <div className="row mt-3 mb-4">
                            <div className="col-12 ">
                                <i className='fa-3x fa fa-envelope fw-bold'></i><span className='fw-bold'>:</span> <span className='fw-bold h2'>{props.email}</span>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5">
                            <div className="col-12 ">
                                <i className="fa-3x fa fa-cube fw-bold"></i><span className='fw-bold'>:</span> <span className='fw-bold h2'>{props.departamento}</span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 d-flex justify-content-end">
                                {props.alterar}
                            </div>
                        </div>
                    </div>
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

