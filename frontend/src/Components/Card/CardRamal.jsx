import Card from 'react-bootstrap/Card';

function CardRamal(props) {
    return (
        <>
            <Card
                bg={props.bg}
                style={{ height: 50, width: '100%' }}
                className={props.tipoTexto}
            >
                <Card.Body>
                    <div className='row'>
                        <div className="col-8">
                            <div className='h6 fw-bold d-flex justify-content-start fw-bold'>{props.titulo}</div>
                        </div>
                        <div className="col-2">
                            <div className={`bg-${props.corBt} rounded text-light d-flex justify-content-center p-1`}>
                                <i className={`fa fa-${props.icone}`} />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className='h6 d-flex justify-content-start fw-bold'>{props.valor}</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardRamal;

