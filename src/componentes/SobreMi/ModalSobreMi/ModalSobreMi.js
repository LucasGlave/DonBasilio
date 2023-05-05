import './ModalSobreMi.scss'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src='./icons8-cortar-con-tijeras-64.png' onMouseOver={handleShow} className='verMas me-2'>
      </img>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>Sobre Mi</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Mi nombre es Alan Muñoz y tengo 28 años. Soy un peluquero con experiencia y pasión por mi trabajo. Desde hace 9 años, he estado cortando el pelo en Darregueira, un pequeño pueblo de la provincia de Buenos Aires en Argentina.
          Trabajar como peluquero en Darregueira me ha permitido conocer a muchas personas interesantes y variadas. Algunos son clientes habituales que vienen a verme cada mes para mantener su cabello en buena forma, mientras que otros son nuevos en la ciudad y buscan un lugar confiable para recibir un corte de pelo fresco y moderno.
          La peluquería donde trabajo es más que un simple negocio para mí. Es un espacio donde puedo ejercer mi creatividad y habilidades para crear peinados y cortes personalizados para cada cliente. Me encanta hablar con mis clientes mientras les corto el pelo y conocer sus historias y experiencias de vida. Muchas veces, estas conversaciones se convierten en amistades duraderas.
          Además de ser un peluquero en Darregueira, también he participado en eventos de moda y peluquería en toda la provincia, lo que me ha permitido expandir mis habilidades y mantenerme actualizado con las últimas tendencias y estilos.
          Cortar el pelo es mi pasión y me enorgullece poder hacer mi trabajo con excelencia en Darregueira. No solo estoy agradecido por tener una clientela fiel, sino que también disfruto de la sensación de ser parte de una comunidad unida y amistosa. Espero seguir creciendo como peluquero y seguir cortando el pelo en Darregueira por muchos años más.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function Example() {
  return (

        <OffCanvasExample/>
  );
}

// render(<Example />);