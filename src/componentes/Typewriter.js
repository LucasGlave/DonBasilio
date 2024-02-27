import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'DONDE LA ELEGANCIA SE ENCUENTRA CON LA INNOVACION.',
        1000,
        'UN LUGAR DEDICADO A LA IMAGEN DE ELLOS.',
        1000
      ]}
      wrapper='span'
      speed={70}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
