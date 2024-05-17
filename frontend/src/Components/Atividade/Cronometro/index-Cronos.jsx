import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Cronometro(props) {

  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
  } = useStopwatch({ autoStart: true  });


  return (
    <div style={{ textAlign: 'center' }} className='row d-flex flex-row align-items-center'>
      <div style={{ fontSize: '20px'}} className='col-6 text-light fw-bold bg-dark rounded'>
        <span id={props.dia}>{days}</span>:<span id={props.hora}>{hours}</span>:<span id={props.minuto}>{minutes}</span>:<span id={props.segundo}>{seconds}</span>
      </div>
      <div className=' col-6 d-flex flex-row justify-content-start'>
        <button onClick={start} className='btn btn-primary mx-2'><i className='fa fa-play'></i></button>
        <button onClick={pause} className='btn btn-danger'><i className='fa fa-pause'></i></button>
      </div>
    </div>
  );
}
