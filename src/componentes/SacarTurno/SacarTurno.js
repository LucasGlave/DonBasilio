import Reveal from "../Reveal";
import "./SacarTurno.scss";
import { InlineWidget } from "react-calendly";

const SacarTurno = () => {
  return (
    <section id="SACARTURNO">
      <img src='./BackgroundRustic.jpg' alt='imgS'className='imgBackground'/>
      <div className="textH2">
        <Reveal >
          <h2>CLIENTES</h2>
        </Reveal>
      </div>
      <div className="desktopCalendly">
          <div className="calendlyCard">
            <InlineWidget url="https://calendly.com/donbasilio/corte-de-pelo" />
          </div>
      </div>
      
      <div className="mobileCalendly">
        <div className="calendlyCard">
          <InlineWidget url="https://calendly.com/donbasilio/corte-de-pelo" />
        </div>
      </div>
    </section>
  );
};
 
export default SacarTurno;
