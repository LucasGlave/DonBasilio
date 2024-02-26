import Reveal from '../Reveal';
import './Footer.scss';
import { FaFacebook, FaInstagram } from 'react-icons/fa'


const Footer = () =>{


    return(
        <div className='footer-back'>
            <Reveal>
                <div className='footer'>
                    <div className='footIzq'>
                        <h6><FaFacebook/></h6>
                        <h6><FaInstagram/></h6>
                        <h6>donbasilio@gmail.com</h6>
                        <h6>+54 2923 000000</h6>
                    </div>
                    <img src='./favicon.ico' width="150" height="150" alt='img2'></img>
                    <div className='footDer'>
                        <div className='nav'>
                            <a data-scroll="SOBREMI"
                            href='#SOBREMI'
                            className='active'
                            ><h6>SOBRE MI</h6></a>
                            <a data-scroll="SACARTURNO"
                            href='#SACARTURNO'
                            ><h6>SACAR TURNO</h6></a>
                            <a data-scroll="CLIENTES"
                            href='#CLIENTES'
                            ><h6>CLIENTES</h6></a>
                            <a data-scroll="UBICACION"
                            href='#UBICACION'
                            ><h6>UBICACION</h6></a>
                        </div>
                    </div>
                </div>
                
            </Reveal>
            
        </div>
    )
}

export default Footer