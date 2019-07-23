import React from 'react';

import './Flap.scss';

function Flap() {
  return (
    <div className="flap">
      <div className="flap__triangle flap__triangle--left" />
      <div className="flap__content" />
      <div className="flap__triangle flap__triangle--right" />
    </div>
  );
}

export default Flap;
