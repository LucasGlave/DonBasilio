import React from "react";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

function FooterResponsive() {
  return (
    <div className="footer-responsive">
      <div className="footIzq">
        <div className="social-media">
          <h6>
            <FaFacebook />
          </h6>
          <h6>
            <FaInstagram />
          </h6>
        </div>

        <h6>donbasilio@gmail.com</h6>
      </div>
      <img src="./favicon.ico" width="150" height="150" alt="img2"></img>
      <div className="footDer">
        <div className="phone-container">
          <FaPhone />
          <h6> +54 2923 000000</h6>
        </div>
      </div>
    </div>
  );
}

export default FooterResponsive;
