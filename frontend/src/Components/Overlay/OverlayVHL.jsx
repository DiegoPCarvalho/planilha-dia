import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function OverlayVHL(props) {

    const popoverVHL = (
        <Popover className='bg-dark'>
            <Popover.Body>
                    {props.relatorio}
            </Popover.Body>
        </Popover>
    )

    return (
        <div className='mt-2' style={{ marginLeft: 10}}>
            <OverlayTrigger placement='top' overlay={popoverVHL}>
                <i className='fa fa-exclamation-circle btn btn-success' style={{ fontSize: 25}}/>
            </OverlayTrigger>
        </div>
    );
}

export default OverlayVHL;

