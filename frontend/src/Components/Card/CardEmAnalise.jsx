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
                        <div>
                            <div className="row">
                                <div className="col-12 h5">
                                    <i className="fa fa-bar-chart fw-bold"></i><span className='fw-bold'>Gerencia Local: </span> <span id="AprovGerencia">{props.AprovGerencia}</span> <span id="certoGeren" className='badge'></span>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-12 h5">
                                    <i className='fa fa-money fw-bold'></i><span className='fw-bold'>Financeiro:</span> <span id="AprovFinanceiro">{props.AprovFinanceiro}</span> <span id="certoFinan" className='badge'></span>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 h5">
                                    <i className="fa fa-credit-card fw-bold"></i><span className='fw-bold'>Diretoria:</span> <span id="AprovDiretoria">{props.AprovDiretoria}</span> <span id="certoDire" className='badge'></span>
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