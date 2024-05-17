import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CardFilaTecnica(props) {

    function funcaoDados() {
        return (
            <>
                <div className="row text-light">
                        <div><span className='fw-bold h6'>EQUIP.:</span> <span style={{ fontSize: 12 }}>{props.Equip}</span></div>
                    </div>
                    <div className="row text-light">
                        <div><span className='fw-bold h6'>Cliente:</span> <span style={{ fontSize: 12 }}>{props.Cliente}</span></div>
                    </div>
            </>
        )
    }
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
                    <div className="row d-flex justify-content-start">
                        <div className='col-10'>
                            {props.cronos}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around align-items-center mt-3">
                        <div className="col-3">
                            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">{funcaoDados()}</Tooltip>}>
                                <span className="d-inline-block">
                                    <div disable style={{ pointerEvents: 'none'}} className='btn btn-dark'>
                                        <i className='fa fa-info-circle fa-2x'></i>
                                    </div>
                                </span>
                            </OverlayTrigger>
                        </div>
                        <div className="col-3">
                            <div onClick={props.abrir} className={`btn btn-${props.corBotao} fw-bold`}
                                style={{fontSize: 25}}
                            >
                                <i className={`fa fa-${props.icone}`}></i>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card >
        </>
    );
}

export default CardFilaTecnica;

