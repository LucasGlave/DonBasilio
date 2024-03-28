import './Clientes.scss'
// import { Button } from 'react-bootstrap'
import ModalCl from '../ModalCl/ModalClients'
import Reveal from '../Reveal'


const Clientes = () =>{


    return(
        <section id='CLIENTES'>
            <img src='./BackgroundRustic.jpg' alt='imgS'className='imgBackground'/>
            <Reveal>
               <h2>- CLIENTES -</h2> 
            </Reveal>
            <Reveal>
                <div className='fotos'>
                    <div className='images'>
                        <img src='./IMG_3293.webp' alt='img2'></img>
                        {/* <img src='./IMG_3294.webp' width="500" height="600" alt='img3'></img> */}
                    </div>
                    <ModalCl/>
                </div>
            </Reveal>
        </section>
    )
}

export default Clientes