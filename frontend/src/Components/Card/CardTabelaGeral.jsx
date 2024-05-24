import Card from 'react-bootstrap/Card';

function CardTabelaGeral(props) {

       return (
        <>
            <Card bg={props.bg} className='d-flex' style={{ width: '100%'}}>
                <Card.Body>
                    <>
                        <div className="row text-light">
                            <div className='d-flex flex-column align-items-center'><span className='fw-bold h6' style={{marginRight: 10}}>T. BRUTO:</span> <span style={{ fontSize: 12 }}>{props.bruto}</span></div>
                        </div>
                        <div className="row text-light mt-1">
                            <div className='d-flex flex-column align-items-center'><span className='fw-bold h6'>T. LIQUIDO:</span> <span style={{ fontSize: 12 }}>{props.liquido}</span></div>
                        </div>
                        <div className="row text-light mt-1">
                            <div className='d-flex flex-column align-items-center'><span className='fw-bold h6'>T. PROBLEMA:</span> <span style={{ fontSize: 12 }}>{props.problema}</span></div>
                        </div>
                    </>
                </Card.Body>
            </Card >
        </>
    );
}

export default CardTabelaGeral;

