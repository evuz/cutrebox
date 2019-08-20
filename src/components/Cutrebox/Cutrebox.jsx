import React from 'react';

import Front from '../Front';

import './Cutrebox.scss';
import Spine from '../Spine/Spine';
import Back from '../Back';
import Strip from '../Strip';
import Page from '../Page';

function Cutrebox() {
  return (
    <div className="cutrebox">
      <Page id="cutrebox">
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
            <Strip
              className="cutrebox__vertical-flap"
              horizontal
              bottom
              right
              left
            />
          </div>
        </div>
      </Page>
    </div>
  );
}

export default Cutrebox;
