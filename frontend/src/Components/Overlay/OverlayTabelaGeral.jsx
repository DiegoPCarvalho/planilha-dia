import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function OverlayTabelaGeral(props) {

    const popoverTempo = (
        <Popover className='bg-dark'>
            <Popover.Body>
                <div className="text-light"><span className='h6 fw-bold'>Observação: </span>{props.Obs}</div>
                <div className="text-light"><span className='h6 fw-bold'>Obs Problema: </span>{props.ProbObs}</div>
                <div className="text-light"><span className='h6 fw-bold'>Qtda. Problema: </span>{props.Qtda}</div>
            </Popover.Body>
        </Popover>
    )

    return (
        <div className='d-flex justify-content-center'>
            <OverlayTrigger placement='top' overlay={popoverTempo}>
                <i className='fa fa-exclamation-circle fa-2x btn btn-warning' />
            </OverlayTrigger>
        </div>
    );
}

export default OverlayTabelaGeral;

