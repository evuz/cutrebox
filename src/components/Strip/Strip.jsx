import React from 'react';

import './Strip.scss';
import mixinsClassnames from '../../utils/mixinsClassnames';
import Flap from '../Flap';

function Strip({ horizontal, top, bottom, left, right }) {
  const classNames = mixinsClassnames({
    strip: true,
    'strip--horizontal': horizontal
  });
  return (
    <div className="col">
      {top ? <Flap /> : null}
      <div className="row fill">
        {left ? <Flap /> : null}
        <div className={classNames} />
        {right ? <Flap /> : null}
      </div>
      {bottom ? <Flap /> : null}
    </div>
  );
}

export default Strip;
