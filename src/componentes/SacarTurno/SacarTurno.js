import Reveal from "../Reveal";
import "./SacarTurno.scss";
import { InlineWidget } from "react-calendly";

const SacarTurno = () => {
  return (
    <section id="SACARTURNO">
      <img src='./BackgroundRustic.jpg' alt='imgS'className='imgBackground'/>
      <Reveal>
        <h2>- SACAR TURNO -</h2>
      </Reveal>
      <Reveal>
        <div className="calendlyCard">
          <InlineWidget url="https://calendly.com/donbasilio/corte-de-pelo" />
        </div>
      </Reveal>

    </section>
  );
};

export default SacarTurno;
