import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function OverlayTabelaGeral(props) {

    const popoverTempo = (
        <Popover className='bg-dark'>
            <Popover.Body>
                <div className="text-light"><span className='h6 fw-bold'>Equip.: </span>{props.Equip}</div>
                <div className="text-light"><span className='h6 fw-bold'>Serviço: </span>{props.Servico}</div>
                <div className="text-light"><span className='h6 fw-bold'>Observação: </span>{props.Obs}</div>
            </Popover.Body>
        </Popover>
    )

    return (
        <div className='d-flex justify-content-center mt-4'>
            <OverlayTrigger placement='bottom' overlay={popoverTempo}>
                <i className='fa fa-exclamation-circle fa-2x btn btn-warning' />
            </OverlayTrigger>
        </div>
    );
}

export default OverlayTabelaGeral;

