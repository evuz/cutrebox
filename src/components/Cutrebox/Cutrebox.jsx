import React from 'react';

import Front from '../Front';

import './Cutrebox.scss';
import Spine from '../Spine/Spine';
import Back from '../Back';
import Strip from '../Strip';

function Cutrebox() {
  return (
    <div className="cutrebox">
      <div className="cutrebox__content">
        <Back />
        <Spine title="Superman de Brian M. Bendis" vol={3} />
        <Front />
        <Strip height={614} top/>
      </div>
    </div>
  );
}

export default Cutrebox;
