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
                            <div className='title'>
                                <h1 className='don'>DON</h1>
                                <h1 className='basilio'>BASILIO</h1>
                            </div>
                            <Typewriter />
                        </div>
                    </div>
                    <div className='content-right'>
                        <button className='button1'>SACAR TURNO</button>
                        <ModalCl />
                    </div>
                </div>
            </Reveal>
            
        </section>
    )
}

export default HomePage