import './Header.scss';
// import { Link } from 'react-router-dom';

const Header = () =>{
    const sections =
         document.querySelectorAll('section'),
        navLinks =
         document.querySelectorAll('nav a');

    const resetLinks = () =>
        navLinks.forEach(link =>
            link.classList.remove('active'));

    const handleScroll = () => {
        const { pageYoffset } = window;
        sections.forEach(section => {
            const { id, offsetTop, clientHeight } =
                section;
            const offset = offsetTop - 1;

            if (
                pageYoffset >= offset && 
                pageYoffset < offset + clientHeight) {
                resetLinks();
                navLinks.forEach(link => {
                    if (link.dataset.scroll === id){
                        link.classList.add('active')
                    }
                });
            }
            
        });
    }
    document.addEventListener('scroll', handleScroll);
    return(
        <div className='header'>
                <div className='nav'>
                    <div className='leftN'>
                        <a data-scroll="SOBREMI"
                        href='#SOBREMI'
                        className='active'
                        ><h6>SOBRE MI</h6></a>
                        <a data-scroll="SACARTURNO"
                        href='#SACARTURNO'
                        ><h6>SACAR TURNO</h6></a>
                    </div>
                    <img src="./IMG_2859.PNG" width="240" height="240" alt='logo'></img>
                    <div className='rightN'>
                        <a data-scroll="CLIENTES"
                        href='#CLIENTES'
                        ><h6>CLIENTES</h6></a>
                        <a data-scroll="UBICACION"
                        href='#UBICACION'
                        ><h6>UBICACION</h6></a>
                    </div>
                </div>    
        </div>
    )
}

export default Header