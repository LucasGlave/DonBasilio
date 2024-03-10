import "./ModalCl.scss";
import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

const ModalCl = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // variant="light"

  return (
    <div className="modalCliente">
      <button onClick={handleShow} className="verMas">
        CLIENTES
      </button>
      <Modal show={show} onHide={handleClose} className="modalFlex" size="xl">
        <Modal.Header>
          <div className="headerContainer">
            <IoClose className="closeModalButton" onClick={handleClose} />
          </div>
        </Modal.Header>
        <img src="./favicon.ico" alt="img2" className="logo"></img>
        <Row className="two-columns-grid">
          <Col md={6}>
            <Modal.Body>
              <img src="./IMG_3294.webp" alt="img2"></img>
            </Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body>
              <img src="./IMG_3299.webp" alt="img2"></img>
            </Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body>
              <img src="./IMG_3298.webp" alt="img2"></img>
            </Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body>
              <img src="./IMG_3297.webp" alt="img2"></img>
            </Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body>
              <img src="./IMG_3293.webp" alt="img2"></img>
            </Modal.Body>
          </Col>
          <Col md={6}>
            <Modal.Body>
              <img src="./IMG_3294.webp" alt="img2"></img>
            </Modal.Body>
          </Col>
        </Row>
        {/* <Modal.Footer>
          <IoIosCloseCircle
            className="closeModalButton"
            onClick={handleClose}
          />
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalCl;
