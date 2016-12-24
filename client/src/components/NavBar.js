import React from 'react';
import { Link } from 'react-router';


export default function CatalogBrowser() {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <span className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l">
      <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="DevStore Logo" />
    </span>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <Link to={`/`} className="link dim dark-gray f6 f5-l dib mr3 mr4-l" > Browse </Link>
      <Link to={`/checkout`} className="link dim dark-gray f6 f5-l dib mr3 mr4-l" > My Cart </Link>
    </div>
  </nav>
  );
}
