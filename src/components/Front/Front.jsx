import React from 'react';

import Cover from '../Cover';
import Flap from '../Flap';

import './Front.scss';

function Front() {
  return (
    <div className="front">
      <Flap />
      <Cover>
        <img
          className="front__image"
          src="cover.jpg"
          alt="front cover"
        />
      </Cover>
    </div>
  );
}

export default Front;
