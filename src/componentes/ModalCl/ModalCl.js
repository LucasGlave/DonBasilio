import './ModalCl.scss';
import { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

const ModalCl = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    // variant="light"

  return (
    <div className='modalCliente'> 
      <button onClick={handleShow} className='verMas'>
        CLIENTES
      </button> 

      <Modal show={show} onHide={handleClose} className='modalFlex' size='xl'>
      <img src='./favicon.ico' width={200} height={200} alt='img2'className='logo'></img>
        <Row className="two-columns-grid">
          <Col md={6}>
            <Modal.Body><img src='./IMG_3294.webp' width={520} height={624} alt='img2'></img></Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body><img src='./IMG_3299.webp' width={520} height={624} alt='img2'></img></Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body><img src='./IMG_3298.webp' width={520} height={624} alt='img2'></img></Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body><img src='./IMG_3297.webp' width={520} height={624} alt='img2'></img></Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body><img src='./IMG_3293.webp' width={520} height={624} alt='img2'></img></Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body><img src='./IMG_3294.webp' width={520} height={624} alt='img2'></img></Modal.Body>
          </Col>
        </Row>
        {/* <Modal.Footer>
        <Button variant="dark" size='lg' onClick={handleClose}>
          Cerrar
        </Button> 
      </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default ModalCl;