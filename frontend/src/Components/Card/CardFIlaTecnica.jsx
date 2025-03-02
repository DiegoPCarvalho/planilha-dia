import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function CardFilaTecnica(props) {

    const funcaoDados = () => {
        return (
            <>
                <div className="row text-light">
                    <div><span className='fw-bold h6'>EQUIP.:</span> <span style={{ fontSize: 12 }}>{props.Equip}</span></div>
                </div>
                <div className="row text-light">
                    <div><span className='fw-bold h6'>Cliente:</span> <span style={{ fontSize: 12 }}>{props.Cliente}</span></div>
                </div>
                <div className="row text-light">
                    <div><span className='fw-bold h6'>Servico:</span> <span style={{ fontSize: 12 }}>{props.Servico}</span></div>
                </div>
                {props.pb === "Sim" ? (
                    <div className="row text-light">
                        <div><span className='fw-bold h6'>Problema:</span> <span style={{ fontSize: 12 }}>{props.Problema}</span></div>
                    </div>
                ) : false}
            </>
        )
    }

    function tempo() {
        return (
            <div>
                {props.gerencia ? (
                    <div className="row text-light">
                        <div className='d-flex flex-column align-items-center'><span className='fw-bold h6'>TEMPO:</span> <span style={{ fontSize: 12 }}>{props.tempo}</span></div>
                    </div>
                ) : (
                    <>
                        <div className="row text-light">
                            <div className='d-flex flex-column align-items-center'><span className='fw-bold h6'>T. BRUTO:</span> <span style={{ fontSize: 12 }}>{props.bruto}</span></div>
                        </div>
                        <div className="row text-light mt-2">
                            <div className='d-flex flex-column align-items-center'><span className='fw-bold h6'>T. LIQUIDO:</span> <span style={{ fontSize: 12 }}>{props.liquido}</span></div>
                        </div>
                    </>
                )}
            </div>
        )
    }

    const popoverTempo = (
        <Popover className='bg-primary'>
            <Popover.Body>
                {tempo()}
            </Popover.Body>
        </Popover>
    )

    const popoverDados = (
        <Popover className='bg-dark'>
            <Popover.Body>
                {funcaoDados()}
            </Popover.Body>
        </Popover>
    )


    return (
        <>
            <Card bg={props.bg} className='mt-2' style={{ width: '100%', backgroundColor: props.corInicial }}>
                <Card.Header>
                    <div className='text-light d-flex justify-content-between align-items-center'>
                        {props.iniciado ? (
                            <>
                                <div>
                                    <div className='fw-bolder'>OS: {props.os}</div>
                                    <div className='fw-bolder d-none d-lg-flex'>DATA: {props.dt} </div>

                                </div>
                                <button className="btn btn-warning" onClick={props.alerta}>
                                    <i className="fa fa-exclamation-triangle" style={{ fontSize: 20 }}></i>
                                </button>
                            </>

                        ) : (
                            <>
                                <div className='fw-bolder'>OS: {props.os}</div>
                                <div className=' mx-1 fw-bolder d-none d-lg-flex'>DATA: {props.dt} </div>
                            </>
                        )}
                    </div>
                </Card.Header>
                <Card.Body>
                    {props.gerencia ? (
                        <>
                            <div className="row d-flex justify-content-start">
                                <div className='col-12'>
                                    {props.cronos}
                                </div>
                            </div>
                            <div className="row d-flex justify-content-around align-items-center mt-3">
                                <div className="col-3">
                                    <OverlayTrigger placement='right' overlay={popoverDados}>
                                        <i className='fa fa-info-circle fa-2x btn btn-dark'></i>
                                    </OverlayTrigger>
                                </div>
                                {props.gerencia && props.finalizado ? (
                                    <div className="col-3">
                                        <OverlayTrigger placement='left' overlay={popoverTempo}>
                                            <i className='fa fa-clock fa-2x btn btn-primary' />
                                        </OverlayTrigger>
                                    </div>
                                ) : (
                                    <>
                                        <div className="col-3">
                                            <button onClick={props.abrir} className={`btn btn-${props.corBotao} fw-bold`}
                                                style={{ fontSize: 25 }}
                                            >
                                                <i className={`fa fa-${props.icone}`}></i>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="row d-flex justify-content-start">
                                <div className='col-10'>
                                    {props.cronos}
                                </div>
                            </div>
                            <div className="row d-flex justify-content-around align-items-center mt-3">
                                {props.iniciado ? (
                                    <>
                                        <div className="col-3">
                                            <div onClick={props.voltar} className={`btn btn-${props.corBotao2} fw-bold`}
                                                style={{ fontSize: 25 }}
                                            >
                                                <i className={`fa fa-${props.icone2}`}></i>
                                            </div>
                                        </div>
                                    </>
                                ) : false}
                                <div className="col-3">
                                    <OverlayTrigger placement='right' overlay={popoverDados}>
                                        <i className='fa fa-info-circle fa-2x btn btn-dark'></i>
                                    </OverlayTrigger>
                                </div>
                                {props.finalizado ? (
                                    <div className="col-3">
                                        <OverlayTrigger placement='left' overlay={popoverTempo}>
                                            <i className='fa fa-clock fa-2x btn btn-primary' />
                                        </OverlayTrigger>
                                    </div>
                                ) : props.novo ? (
                                    <>
                                        <div className="col-3">
                                            <div onClick={props.remover} className={`btn btn-${props.pb === "Sim" ? 'warning' : 'danger'} fw-bold`}
                                                style={{ fontSize: 25 }}
                                            >
                                                <i className={`fa fa-trash fw-bold`}></i>
                                            </div>
                                        </div>
                                        
                                        <div className="col-3">
                                            <div onClick={props.abrir} className={`btn btn-${props.corBotao} fw-bold`}
                                                style={{ fontSize: 25 }}
                                            >
                                                <i className={`fa fa-${props.icone}`}></i>
                                            </div>
                                        </div>

                                    </>
                                ) : (
                                    <>
                                        <div className="col-3">
                                            <div onClick={props.abrir} className={`btn btn-${props.corBotao} fw-bold`}
                                                style={{ fontSize: 25 }}
                                            >
                                                <i className={`fa fa-${props.icone}`}></i>
                                            </div>
                                        </div>

                                    </>
                                )}

                            </div>
                        </>
                    )}
                </Card.Body>
            </Card >
        </>
    );
}

export default CardFilaTecnica;

