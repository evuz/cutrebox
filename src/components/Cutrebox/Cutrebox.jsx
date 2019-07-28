import React from 'react';

import Front from '../Front';

import './Cutrebox.scss';
import Spine from '../Spine/Spine';
import Back from '../Back';
import Strip from '../Strip';

function Cutrebox() {
  return (
    <div className="cutrebox">
      <div className="col">
        <div className="row">
          <Back />
          <Spine title="Superman de Brian M. Bendis" vol={3} />
          <Front />
          <div className="cutrebox__vertical-flap-height">
            <Strip top right />
          </div>
        </div>
        <div className="row">
          <Strip className='cutrebox__vertical-flap' horizontal bottom right left />
        </div>
      </div>
    </div>
  );
}

export default Cutrebox;
