import React from 'react';

import Front from '../Front';

import './Cutrebox.scss';
import Strip from '../Strip';

function Cutrebox() {
  return (
    <div className="cutrebox">
      <div className="cutrebox__content">
        <Strip top />
        <Front />
      </div>
    </div>
  );
}

export default Cutrebox;
