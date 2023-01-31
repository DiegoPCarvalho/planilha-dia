import Card from 'react-bootstrap/Card';


export default function cardGeral(props) {
    return (
        <>
            <Card border="success" style={{ width: '25rem' }}>
                <Card.Header>
                    <Card.Title>
                        <div className='d-flex justify-content-center fw-bold h2'>
                            {props.nomeSolicitante}
                        </div>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div className='container-fluid'>
                        <div className="row mt-2">
                                <div className="col-12 h5">
                                    <i className="fa fa-qrcode fw-bold"></i><span className='fw-bold'>Nº Solicitação:</span> <span className="Aprov badge bg-primary">{props.Nid}</span>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 h5">
                                    <i className="fa fa-bar-chart fw-bold"></i><span className='fw-bold'>Gerencia Local:</span> <span className="Aprov">{props.AprovGerenciaLocal}</span>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 h5">
                                    <i className='fa fa-money fw-bold'></i><span className='fw-bold'>Financeiro:</span> <span className="Aprov">{props.AprovFinanceiro}</span>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 h5">
                                    <i className="fa fa-credit-card fw-bold"></i><span className='fw-bold'>Diretoria:</span> <span className="Aprov">{props.AprovDiretoria}</span>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 h5">
                                    <i className="fa fa-shopping-cart fw-bold"></i><span className='fw-bold'>Comprado:</span> <span className="Compras">{props.Compras}</span>
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

