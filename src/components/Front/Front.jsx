import React from 'react';

import Cover from '../Cover';
import Flap from '../Flap';

import './Front.scss';
import Strip from '../Strip';

function Front() {
  return (
    <div className="front">
      <Flap />
      <Cover>
        <img
          className="front__image"
          src="https://www.dccomics.com/sites/default/files/comic_reader/SUPER01_CVR_1500_5b464c682d9de8.64269664.jpg"
          alt="front cover"
        />
      </Cover>
    </div>
  );
}

export default Front;
