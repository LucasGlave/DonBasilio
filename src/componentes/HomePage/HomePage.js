import './HomePage.scss'
import Reveal from '../Reveal';
import Typewriter from '../Typewriter';
import ModalCl from '../ModalCl/ModalCl';

const HomePage = () =>{
    return(
        <section id='HOMEPAGE'>
            <div className='div-img'>
                <img src='./IMG_3330.webp' alt='imgS'className='imgS'/>
                <img src='./IMG_3331.webp' alt='imgS'className='imgResponsive'/> 
            </div>
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
                        {/* <button on onClick={{}} className='button2'>CLIENTES</button> */}
                        <ModalCl />
                    </div>
                </div>
            </Reveal>
            
        </section>
    )
}

export default HomePage