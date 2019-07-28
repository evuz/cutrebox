import React from 'react';

import './Flap.scss';
import mixinsClassnames from '../../utils/mixinsClassnames';

const positionFlap = {
  top: {},
  bottom: { invert: true },
  left: { vertical: true },
  right: { vertical: true, invert: true }
};

function Flap({ className: propsClassNames, position = 'top' }) {
  const positionValues = positionFlap[position];
  const classNames = mixinsClassnames({
    flap: true,
    'flap--vertical': positionValues.vertical,
    'flap--invert': positionValues.invert,
    [propsClassNames]: propsClassNames
  });
  return (
    <div className={classNames}>
      <div className="flap__triangle flap__triangle--left" />
      <div className="flap__content" />
      <div className="flap__triangle flap__triangle--right" />
    </div>
  );
}

export default Flap;
