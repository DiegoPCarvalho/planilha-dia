import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function OverlayTempoTabelaGeral(props) {

    const popoverTempo = (
        <Popover className='bg-dark'>
            <Popover.Body>
                <div className="row text-light">
                    <div className='d-flex flex-column align-items-center'><span className='fw-bold h6' style={{ marginRight: 10 }}>T. BRUTO:</span> <span style={{ fontSize: 12 }}>{props.bruto}</span></div>
                </div>
                <div className="row text-light mt-1">
                    <div className='d-flex flex-column align-items-center'><span className='fw-bold h6'>T. LIQUIDO:</span> <span style={{ fontSize: 12 }}>{props.liquido}</span></div>
                </div>
                <div className="row text-light mt-1">
                    <div className='d-flex flex-column align-items-center'><span className='fw-bold h6'>T. PROBLEMA:</span> <span style={{ fontSize: 12 }}>{props.problema}</span></div>
                </div>
            </Popover.Body>
        </Popover>
    )

    return (
        <div className='d-flex justify-content-center'>
            <OverlayTrigger placement='top' overlay={popoverTempo}>
                <i className='fa fa-clock fa-2x btn btn-primary' />
            </OverlayTrigger>
        </div>
    );
}

export default OverlayTempoTabelaGeral;

