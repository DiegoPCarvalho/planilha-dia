import Card from 'react-bootstrap/Card';

function CardGD(props) {
  return (
    <>
        <Card
          bg={props.bg}
          style={{ width: '16rem' }}
          className={props.tipoTexto}
        >
          <Card.Body>
            <Card.Title><div className='h2 fw-bold d-flex justify-content-center'>{props.nomeTitulo}</div></Card.Title>
            <Card.Text>
              <div className='row mt-4'>
                <div className="col-2">
                  <i className={`fa fa-2x fa-${props.icone}`}></i>
                </div>
                <div className="h3 col-10 d-flex d-flex justify-content-center">
                  {props.dado}
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  );
}

export default CardGD;