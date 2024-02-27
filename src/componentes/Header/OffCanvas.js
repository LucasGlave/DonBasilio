import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary nav-responsive"
        >
          <Container fluid>
            <img src="./favicon.ico" width="80" height="80" alt="logo"></img>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleToggleOffcanvas} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Body>
                <Offcanvas.Header closeButton className='close-button'/>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link href="#SOBREMI" onClick={() => handleCloseOffcanvas()}>SOBRE MI</Nav.Link>
                  <Nav.Link href="#SACARTURNO" onClick={() => handleCloseOffcanvas()}>SACAR TURNO</Nav.Link>
                  <Nav.Link href="#CLIENTES" onClick={() => handleCloseOffcanvas()}>CLIENTES</Nav.Link>
                  <Nav.Link href="#UBICACION" onClick={() => handleCloseOffcanvas()}>UBICACIÓN</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
