import Card from 'react-bootstrap/Card';

function CardSuporte(props) {
  return (
    <Card border={'success'} style={{ overflow: 'auto' }} className='w-100'>
      <Card.Body>
        <Card.Text>
          <div className='row'>
            <div className='col-4 fw-bold'><span className='bg-dark text-white p-1 rounded'>OS:</span> <span style={{ marginLeft: 1 }} className={props.contrato ? `${props.className}` : 'p-1 bg-success rounded text-white'}>{props.OS}</span></div>
            <div className='col-5 fw-bold'><span className='bg-dark text-white p-1 rounded'>DATA:</span> <span style={{ marginLeft: 1 }} className={props.contrato ? `${props.className}` : 'p-1 bg-success rounded text-white'}>{props.Data}</span></div>
            {props.contrato ? (
              <div className='col-3 fw-bold'><span className='bg-dark text-white p-1 rounded'>SLA:</span> <span style={{ marginLeft: 1 }} className={props.contrato ? `${props.className}` : 'p-1 bg-success rounded text-white'}>{props.Sla}</span></div>
            ) : false}

          </div>
        </Card.Text>
        <Card.Text>
          <div className="row">
            <div className='fw-bold'><span className='bg-dark text-white p-1 rounded'>EQUIPAMENTO:</span> <span>{props.Equipamento}</span></div>
          </div>
        </Card.Text>
        <Card.Text>
          <div className="row">
            <div className='fw-bold'><span className='bg-dark text-white p-1 rounded'>CLIENTE:</span> <span>{props.Cliente}</span></div>
          </div>
        </Card.Text>
        <Card.Text>
          <div className='row'>
            <div className='col-5 fw-bold'><span className='bg-dark text-white p-1 rounded'>NS:</span> <span style={{ marginLeft: 1 }} className={props.className}>{props.NS}</span></div>
            <div className='col-7 fw-bold'><span className='bg-dark text-white p-1 rounded'>AGENTE:</span> <span style={{ marginLeft: 1 }}>{props.Agente}</span></div>
          </div>
        </Card.Text>
        <Card.Text>
        <div className='row'>
            <div className='fw-bold'><span className='bg-dark text-white p-1 rounded'>OBS:</span> <span>{props.Obs}</span></div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardSuporte;