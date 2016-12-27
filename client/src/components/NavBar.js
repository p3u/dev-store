import React from 'react';
import { Link } from 'react-router';


export default function CatalogBrowser() {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link to={`/`} className="link dim orange-text  f6 f5-l dib mr3 mr4-l" >
          Catalog
        </Link>
        <Link to={`/checkout`} className="link dim orange-text f6 f5-l dib mr3 mr4-l" >
          My Cart
        </Link>
      </div>
    </nav>
  );
}
