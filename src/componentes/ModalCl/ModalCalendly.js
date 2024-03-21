import "./ModalCl.scss";
import { useState } from "react";
import { Modal, Row } from "react-bootstrap";
import SacarTurno from '../SacarTurno/SacarTurno'
import { InlineWidget } from "react-calendly";

const ModalCalendly = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal-calendly">
      <button onClick={handleShow} className="verMas">
        SACAR TURNO
      </button>
      <Modal style={{background:'transparent', width: '100vw', height: '100vh'}} show={show} onHide={handleClose} onClick={handleClose} className="modalFlex" size="xl">
          <Modal.Body className="calendlyCard">
            <InlineWidget styles={{width: '100vw', height: '100vh'}} url="https://calendly.com/donbasilio/corte-de-pelo" />
            <button onClick={handleClose} className="button1">
              VOLVER
            </button>
          </Modal.Body>
      </Modal>
    </div>

  );
};

export default ModalCalendly;
