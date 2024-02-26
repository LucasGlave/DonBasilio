import Reveal from "../Reveal";
import "./SacarTurno.scss";
import { InlineWidget } from "react-calendly";

const SacarTurno = () => {
  return (
    <section id="SACARTURNO">
      <Reveal>
        <h2>- SACAR TURNO -</h2>
        <div className="calendly-container">
          <InlineWidget url="https://calendly.com/donbasilio/corte-de-pelo" />
        </div>
      </Reveal>
    </section>
  );
};

export default SacarTurno;
