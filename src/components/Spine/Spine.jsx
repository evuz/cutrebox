import React from 'react';

import Strip from '../Strip';

import './Spine.scss';
import Flap from '../Flap';

function Spine({ title, vol }) {
  return (
    <div className="spine">
      <Flap />
      <div className="spine__strip">
        <Strip>
          <div className="spine__content">
            <div className="spine__logo">
              <img
                className="spine__logo-img"
                src="https://www.nicepng.com/png/full/83-832568_dc-comics-dc-comics-logo-dark.png"
                alt="logo"
              />
            </div>
            <div className="spine__title">{title}</div>
            <div className="spine__heroe">
              <img
                className="spine__heroe-img"
                src="https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/15135323/Superman-Action-Comics-8-cover.jpg"
                alt="heroe"
              />
            </div>
            {vol ? <div className="spine__vol">{vol}</div> : null}
          </div>
        </Strip>
      </div>
    </div>
  );
}

export default Spine;
