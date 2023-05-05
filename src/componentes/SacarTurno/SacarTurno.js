import './SacarTurno.scss'
import { PopupWidget } from 'react-calendly'
import { InlineWidget } from "react-calendly";


const SacarTurno = () =>{


    return(
        <section id='SACARTURNO'>
            <h2>- SACAR TURNO -</h2>
            <div className='calendly'>
                <InlineWidget url="https://calendly.com/donbasilio/60min?primary_color=d1ad65" className='calendar'/>
            </div>
        </section>
    )
}

export default SacarTurno