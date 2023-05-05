import './Clientes.scss'
// import { Button } from 'react-bootstrap'
import  ModalCl  from '../ModalCl/ModalCl'


const Clientes = () =>{


    return(
        <section id='CLIENTES'>
            <h2>- CLIENTES -</h2>
            <div className='fotos'>
                <div className='images'>
                    <img src='./IMG_3293.JPG' width="500" height="600" alt='img2'></img>
                    <img src='./IMG_3294.JPG' width="500" height="600" alt='img3'></img>
                </div>
                <ModalCl/>
            </div>
        </section>
    )
}

export default Clientes