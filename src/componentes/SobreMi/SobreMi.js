import './SobreMi.scss'
import Reveal from '../Reveal';

const SobreMi = () =>{
    return(
        <section id='SOBREMI'>
            <img src='./IMG_3330.webp' alt='imgS'className='imgS'/>
            <Reveal>
                <div className='sm-content'>
                    <div className='content-left'>
                        <h1>
                            DON BASILIO DONDE LA ELEGANCIA SE ENCUENTRA CON LA INNOVACION.
                        </h1>
                    </div>
                    <div className='content-right'>
                        <button className='button1'>SACAR TURNO</button>
                        <button className='button2'>NO ME ACUERDO</button>
                    </div>
                </div>
            </Reveal>
            
        </section>
    )
}

export default SobreMi