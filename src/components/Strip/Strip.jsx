import React from 'react';

import Flap from '../Flap';
import mixinsClassnames from '../../utils/mixinsClassnames';

import './Strip.scss';

function Strip({ horizontal, top, bottom, left, right, children, className }) {
  const classNames = mixinsClassnames({
    strip: true,
    'strip--horizontal': horizontal
  });
  const flapClassNames = mixinsClassnames({
    'strip__flap--mr': right,
    'strip__flap--ml': left
  });
  const containerClassNames = mixinsClassnames({
    strip__container: true,
    col: true,
    [className]: className
  });
  return (
    <div className={containerClassNames}>
      {top ? <Flap className={flapClassNames} /> : null}
      <div className="row fill">
        {left ? <Flap position="left" /> : null}
        <div className={classNames}>{children}</div>
        {right ? <Flap position="right" /> : null}
      </div>
      {bottom ? <Flap className={flapClassNames} position="bottom" /> : null}
    </div>
  );
}

export default Strip;
