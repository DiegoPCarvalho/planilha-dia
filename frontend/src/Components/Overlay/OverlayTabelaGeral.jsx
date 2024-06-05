import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function OverlayTabelaGeral(props) {

    const popoverTempo = (
        <Popover className='bg-dark'>
            <Popover.Body>
                <div className="text-light"><span className='h6 fw-bold'>Observação: </span>{props.Obs}</div>
                <div className="text-light"><span className='h6 fw-bold'>Qtda. Problema: </span>{props.Qtda}</div>
            </Popover.Body>
        </Popover>
    )

    return (
        <div>
            <OverlayTrigger placement='top' overlay={popoverTempo}>
                <i className='fa fa-exclamation-circle btn btn-warning' style={{ fontSize: 25}}/>
            </OverlayTrigger>
        </div>
    );
}

export default OverlayTabelaGeral;

