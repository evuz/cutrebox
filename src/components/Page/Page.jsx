import React from 'react';

import './Page.scss';

function Page({ id, children }) {
  return (
    <div id={id} className="page-cmp">
      {children}
    </div>
  );
}

export default Page;
