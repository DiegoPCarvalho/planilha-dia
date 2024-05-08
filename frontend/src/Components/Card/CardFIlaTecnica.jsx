import Card from 'react-bootstrap/Card';

function CardFilaTecnica(props) {
    return (
        <>
            <Card bg={props.bg} className='mt-2' style={{ width: '80%' }}>
                <Card.Header>
                    <div className='text-light d-flex'>
                        <div className='fw-bolder'>OS: {props.os} -</div>
                        <div className=' mx-1 fw-bolder d-none d-lg-flex'>DATA: {props.dt} </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className='text-light'>
                        <div><span className='fw-bold h6'>EQUIP.:</span> <span style={{ fontSize: 12 }}>{props.Equip}</span></div>
                        <div><span className='fw-bold h6'>Cliente:</span> <span style={{ fontSize: 12 }}>{props.Cliente}</span></div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button onClick={props.abrir} className='btn btn-warning fw-bold'>
                            <i className="fa fa-pencil"></i>
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardFilaTecnica;

