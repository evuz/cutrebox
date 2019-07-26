import React from 'react';

import Cover from '../Cover';
import Flap from '../Flap';

import './Back.scss';
import Strip from '../Strip';

function Back() {
  return (
    <div className="back">
      <Flap />
      <Cover />
      <Strip horizontal />
    </div>
  );
}

export default Back;
