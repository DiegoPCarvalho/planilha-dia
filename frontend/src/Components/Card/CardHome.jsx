import Card from 'react-bootstrap/Card';

function CardHome(props) {
    return (
        <>
            <Card
                bg={props.bg}
                style={{ height: 100, width: 350 }}
                className={props.tipoTexto}
            >
                <Card.Body>
                    <div className='row'>
                        <div className="col-10">
                            <div className="row">
                                <div className='h3 fw-bold d-flex justify-content-start fw-bold'>{props.titulo}</div>
                            </div>
                            <div className="row">
                                <div className='h4 d-flex justify-content-start'>{props.valor}</div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <div className='h4 d-flex justify-content-center align-items-center '>
                                <div className={`p-2 bg-${props.corBt} rounded text-light`}>
                                 <i className={`fa fa-${props.icone}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardHome;

