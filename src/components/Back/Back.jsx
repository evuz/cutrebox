import React from 'react';

import Cover from '../Cover';
import Flap from '../Flap';

import './Back.scss';

function Back() {
  return (
    <div className="back">
      <Flap />
      <Cover />
    </div>
  );
}

export default Back;
