import './SobreMi.scss'
import Reveal from '../Reveal';
import Typewriter from '../Typewriter';

const SobreMi = () =>{
    return(
        <section id='SOBREMI'>
            <img src='./IMG_3330.webp' alt='imgS'className='imgS'/>
            <img src='./IMG_3331.webp' alt='imgS'className='imgResponsive'/>
            <Reveal>
                <div className='sm-content'>
                    <div className='content-left'>
                        <div className='typewriter'>
                            <h1>DON BASILIO</h1>
                            <Typewriter />
                        </div>
                    </div>
                    <div className='content-right'>
                        <button className='button1'>SACAR TURNO</button>
                        <button className='button2'>CLIENTES</button>
                    </div>
                </div>
            </Reveal>
            
        </section>
    )
}

export default SobreMi