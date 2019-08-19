import React from 'react';

import './Float.scss';

function Float({ children, onClick }) {
  return (
    <div className="float">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Float;
