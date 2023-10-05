import Card from 'react-bootstrap/Card';

function CardSS(props) {
    return (
        <>
            <Card
                bg={props.bg}
                style={props.estilo}
                className={props.tipoTexto}
            >
                <Card.Body>
                    <div className="row">
                        <div className='h3 fw-bold d-flex justify-content-center fw-bold'>{props.titulo}</div>
                    </div>
                    <div className="row">
                        {props.conteudo}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardSS;

