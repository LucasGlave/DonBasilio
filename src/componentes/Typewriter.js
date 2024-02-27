import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Typewriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: ['DONDE LA ELEGANCIA SE ENCUENTRA CON LA INNOVACION.', 'UN LUGAR DEDICADO A LA IMAGEN DE ELLOS'],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 10
      }}
    />
  );
};

export default Typewriter;
