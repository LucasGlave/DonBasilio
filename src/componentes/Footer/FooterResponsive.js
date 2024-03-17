import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function FooterResponsive() {
  return (
    <div className="footer-responsive">
      <img src="./favicon.ico" alt="img2" className="logo-footer"></img>
      <div className="footIzq">
        <h6>
          <FaFacebook />
        </h6>
        <h6>donbasilio@gmail.com</h6>
        <h6>
            <FaInstagram />
          </h6>
      </div>
      <div className="footDer">
        <div className="phone-container">
          <h6>Lucas Glave</h6>
          <h6>-</h6>
          <h6>Franco Prandi</h6>
        </div>
      </div>
    </div>
  );
}

export default FooterResponsive;
