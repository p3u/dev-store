import React from 'react';
import Catalog from '../containers/Catalog';
import SearchBar from '../containers/SearchBar';


export default function CatalogBrowser() {
  return (
    <section>
      <SearchBar />
      <Catalog />
    </section>
  );
}
