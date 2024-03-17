import "./Footer.scss";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

import FooterResponsive from "./FooterResponsive";

const Footer = () => {
  return (
    <div className="footer-back">
        <div className="footer-desktop">
          <div className="footIzq">
            <h6>
              <FaFacebook />
            </h6>
            <h6>
              <FaInstagram />
            </h6>
            <h6>donbasilio@gmail.com</h6>
            <div className="phone-container">
              <div className="svgPhone">
                <FaPhone />
              </div>
              <h6> +54 2923 000000</h6>
            </div>
          </div>
          <img src="./favicon.ico" alt="img2" className="logo-footer"></img>
          <div className="footDer">
            <div className="nav-footer">
              <a data-scroll="SOBREMI" href="#SOBREMI" className="active">
                <h6>SOBRE MI</h6>
              </a>
              <a data-scroll="SACARTURNO" href="#SACARTURNO">
                <h6>SACAR TURNO</h6>
              </a>
              <a data-scroll="CLIENTES" href="#CLIENTES">
                <h6>CLIENTES</h6>
              </a>
              <a data-scroll="UBICACION" href="#UBICACION">
                <h6>UBICACION</h6>
              </a>
            </div>
          </div>
        </div>
        <FooterResponsive />
    </div>
  );
};

export default Footer;
